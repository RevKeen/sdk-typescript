import { describe, expect, it } from "vitest";
import {
  createRevKeenAPIError,
  emptyRevKeenRateLimitMetadata,
  parseRevKeenRateLimitMetadata,
  RevKeenAPIError,
  RevKeenAuthenticationError,
  RevKeenAuthorizationError,
  RevKeenConflictError,
  RevKeenIdempotencyConflictError,
  RevKeenNotFoundError,
  RevKeenRateLimitError,
  RevKeenServerError,
  RevKeenValidationError,
} from "../errors.js";

const context = {
  requestId: "request-123",
  traceId: "trace-123",
  correlationId: "request-123",
  attemptCount: 3,
};

describe("RevKeen API error taxonomy", () => {
  it.each([
    [401, RevKeenAuthenticationError],
    [403, RevKeenAuthorizationError],
    [400, RevKeenValidationError],
    [422, RevKeenValidationError],
    [404, RevKeenNotFoundError],
    [429, RevKeenRateLimitError],
    [409, RevKeenConflictError],
    [500, RevKeenServerError],
    [503, RevKeenServerError],
    [418, RevKeenAPIError],
  ])("maps HTTP %s to %s", (status, ErrorType) => {
    const error = createRevKeenAPIError(
      status,
      { error: "failed", code: "plain_error" },
      "fallback",
      context,
    );
    expect(error).toBeInstanceOf(ErrorType);
    expect(error).toMatchObject({
      code: "plain_error",
      machineCode: "plain_error",
      ...context,
    });
  });

  it("normalizes nested structured envelopes without losing raw data", () => {
    const body = {
      error: {
        type: "invalid_request_error",
        code: "validation_error",
        message: "Amount is invalid",
        param: "amount_minor",
        details: { fields: { amount_minor: ["Must be an integer"] } },
      },
    };
    const error = createRevKeenAPIError(422, body, "fallback", context);
    expect(error).toBeInstanceOf(RevKeenValidationError);
    expect(error).toMatchObject({
      message: "Amount is invalid",
      code: "validation_error",
      type: "invalid_request_error",
      param: "amount_minor",
      details: { fields: { amount_minor: ["Must be an integer"] } },
      body,
      rawBody: body,
    });
    expect(error.body).toBe(body);
    expect(error.rawBody).toBe(body);
  });

  it("normalizes flat, string, malformed, and empty envelopes defensively", () => {
    expect(
      createRevKeenAPIError(
        400,
        { error: "flat failure", code: "flat_code" },
        "fallback",
      ),
    ).toMatchObject({ message: "flat failure", code: "flat_code" });
    expect(
      createRevKeenAPIError(500, "upstream exploded", "fallback"),
    ).toMatchObject({ message: "upstream exploded", code: "unknown_error" });
    expect(
      createRevKeenAPIError(
        500,
        { error: { message: 17 }, code: 42 },
        "HTTP 500",
      ),
    ).toMatchObject({ message: "HTTP 500", code: "unknown_error" });
    expect(createRevKeenAPIError(500, null, "")).toMatchObject({
      message: "RevKeen API request failed",
      code: "unknown_error",
    });
  });

  it("uses the idempotency subclass only for a 409 idempotency machine code", () => {
    expect(
      createRevKeenAPIError(
        409,
        { error: { code: "idempotency_key_conflict", message: "Mismatch" } },
        "conflict",
      ),
    ).toBeInstanceOf(RevKeenIdempotencyConflictError);
    expect(
      createRevKeenAPIError(
        409,
        { error: { code: "resource_conflict", message: "Exists" } },
        "conflict",
      ),
    ).toBeInstanceOf(RevKeenConflictError);
    expect(
      createRevKeenAPIError(
        400,
        { error: { code: "idempotency_key_invalid", message: "Invalid" } },
        "invalid",
      ),
    ).toBeInstanceOf(RevKeenValidationError);
  });
});

describe("rate-limit metadata", () => {
  const now = Date.UTC(2026, 7, 28, 12, 0, 0);

  it("parses every published header with the contracted units", () => {
    const metadata = parseRevKeenRateLimitMetadata(
      new Headers({
        "X-RateLimit-Limit": "1000",
        "X-RateLimit-Remaining": "0",
        // UNIX seconds, not milliseconds.
        "X-RateLimit-Reset": "1787000000",
        "Retry-After": "30",
      }),
      now,
    );

    expect(metadata).toEqual({
      limit: 1000,
      remaining: 0,
      resetAt: new Date(1787000000 * 1000),
      retryAfterSeconds: 30,
    });
  });

  it("treats X-RateLimit-Reset as seconds rather than milliseconds", () => {
    const metadata = parseRevKeenRateLimitMetadata(
      new Headers({ "X-RateLimit-Reset": "1787000000" }),
      now,
    );

    expect(metadata.resetAt?.getUTCFullYear()).toBe(2026);
  });

  it("resolves an HTTP-date Retry-After to whole seconds from now", () => {
    const metadata = parseRevKeenRateLimitMetadata(
      new Headers({ "Retry-After": new Date(now + 45_000).toUTCString() }),
      now,
    );

    expect(metadata.retryAfterSeconds).toBe(45);
  });

  it("never clamps Retry-After to the SDK retry ceiling", () => {
    expect(
      parseRevKeenRateLimitMetadata(new Headers({ "Retry-After": "600" }), now)
        .retryAfterSeconds,
    ).toBe(600);
  });

  it("reports absent and unparseable headers as null rather than zero", () => {
    expect(parseRevKeenRateLimitMetadata(new Headers(), now)).toEqual({
      limit: null,
      remaining: null,
      resetAt: null,
      retryAfterSeconds: null,
    });
    expect(
      parseRevKeenRateLimitMetadata(
        new Headers({
          "X-RateLimit-Limit": "  ",
          "X-RateLimit-Remaining": "many",
          "X-RateLimit-Reset": "-1",
          "Retry-After": "soon",
        }),
        now,
      ),
    ).toEqual(emptyRevKeenRateLimitMetadata());
  });

  it("surfaces the metadata on the typed error, defaulting to all-null", () => {
    const limited = createRevKeenAPIError(
      429,
      { error: { code: "rate_limit_exceeded", type: "rate_limit_error" } },
      "rate limited",
      {
        ...context,
        rateLimit: parseRevKeenRateLimitMetadata(
          new Headers({
            "X-RateLimit-Limit": "1000",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": "1787000000",
            "Retry-After": "30",
          }),
          now,
        ),
      },
    );

    expect(limited).toBeInstanceOf(RevKeenRateLimitError);
    expect(limited.rateLimit.retryAfterSeconds).toBe(30);
    expect(limited.rateLimit.remaining).toBe(0);
    expect(limited.rateLimit.resetAt).toEqual(new Date(1787000000 * 1000));

    expect(createRevKeenAPIError(500, null, "boom").rateLimit).toEqual(
      emptyRevKeenRateLimitMetadata(),
    );
  });
});

describe("provider-neutral auth error typing", () => {
  it("classifies 401 and 403 by status, independent of error.type", () => {
    // REV-6760 renamed the 403 envelope type to authorization_error. The SDK
    // taxonomy keys off the HTTP status, so the rename cannot reclassify it.
    expect(
      createRevKeenAPIError(
        401,
        { error: { type: "authentication_error", code: "invalid_api_key" } },
        "unauthenticated",
      ),
    ).toBeInstanceOf(RevKeenAuthenticationError);
    expect(
      createRevKeenAPIError(
        403,
        {
          error: {
            type: "authorization_error",
            code: "insufficient_permissions",
          },
        },
        "forbidden",
      ),
    ).toBeInstanceOf(RevKeenAuthorizationError);
    expect(
      createRevKeenAPIError(
        403,
        { error: { type: "authentication_error", code: "forbidden" } },
        "forbidden",
      ),
    ).toBeInstanceOf(RevKeenAuthorizationError);
  });
});
