import { describe, expect, it, vi } from "vitest";
import { RevKeenClient } from "./client.js";
import { RevKeenValidationError } from "./core/errors.js";
import { RevKeenEnvironment } from "./core/environment.js";

describe("SDK error context", () => {
  it("wires nested API envelopes into typed errors", async () => {
    const body = {
      error: {
        type: "invalid_request_error",
        code: "validation_error",
        message: "Quantity is invalid",
        param: "quantity",
        details: { fields: { quantity: ["Must be positive"] } },
      },
    };
    const client = new RevKeenClient({
      environment: RevKeenEnvironment.Sandbox,
      secretKey: "rk_sandbox_secret",
      requestIdFactory: () => "00000000-0000-4000-8000-000000000010",
      fetch: vi.fn(
        async () =>
          new Response(JSON.stringify(body), {
            status: 422,
            headers: {
              "content-type": "application/json",
              "x-request-id": "server-request",
            },
          }),
      ) as unknown as typeof fetch,
    });
    const failure = client.usage.ingest({
      name: "test.event",
      external_customer_id: "customer_123",
      quantity: -1,
      idempotency_key: "sdk_error_nested_envelope",
    });
    await expect(failure).rejects.toBeInstanceOf(RevKeenValidationError);
    await expect(failure).rejects.toMatchObject({
      message: "Quantity is invalid",
      code: "validation_error",
      param: "quantity",
      details: { fields: { quantity: ["Must be positive"] } },
      requestId: "server-request",
      correlationId: "server-request",
      attemptCount: 1,
      body,
    });
  });

  it("surfaces request, trace, legacy correlation, and attempt metadata", async () => {
    const fetchMock = vi.fn(
      async () =>
        new Response(JSON.stringify({ error: "service unavailable" }), {
          status: 503,
          headers: {
            "content-type": "application/json",
            "x-request-id": "server-request",
            "x-trace-id": "server-trace",
            "x-correlation-id": "legacy-correlation",
          },
        }),
    );
    const client = new RevKeenClient({
      environment: RevKeenEnvironment.Sandbox,
      secretKey: "rk_sandbox_secret",
      fetch: fetchMock as typeof fetch,
    });

    await expect(
      client.usage.ingest({
        name: "test.event",
        external_customer_id: "customer_123",
        quantity: 1,
        idempotency_key: "sdk_error_request_metadata",
      }),
    ).rejects.toMatchObject({
      name: "RevKeenServerError",
      status: 503,
      requestId: "server-request",
      traceId: "server-trace",
      correlationId: "server-request",
      attemptCount: 1,
    });
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it("uses legacy inbound correlation ID as the canonical request ID fallback", async () => {
    const client = new RevKeenClient({
      environment: RevKeenEnvironment.Sandbox,
      secretKey: "rk_sandbox_secret",
      fetch: vi.fn(
        async () =>
          new Response(JSON.stringify({ error: "failed" }), {
            status: 500,
            headers: {
              "content-type": "application/json",
              "x-correlation-id": "legacy-only",
            },
          }),
      ) as unknown as typeof fetch,
    });
    await expect(
      client.usage.ingest({
        name: "test.event",
        external_customer_id: "customer_123",
        quantity: 1,
        idempotency_key: "sdk_error_legacy_correlation",
      }),
    ).rejects.toMatchObject({
      requestId: "legacy-only",
      correlationId: "legacy-only",
    });
  });

  it("attaches request IDs to OAuth acquisition failures", async () => {
    const requestId = "00000000-0000-4000-8000-000000000004";
    const fetchStub = vi.fn(
      async () => new Response("unavailable", { status: 503 }),
    );
    vi.stubGlobal("fetch", fetchStub);
    try {
      const client = new RevKeenClient({
        environment: RevKeenEnvironment.Sandbox,
        oauth: { clientId: "client", clientSecret: "secret" },
        requestIdFactory: () => requestId,
      });
      await expect(
        client.usage.ingest({
          name: "test.event",
          external_customer_id: "customer_123",
          quantity: 1,
          idempotency_key: "sdk_error_oauth_acquisition",
        }),
      ).rejects.toMatchObject({
        requestId,
        correlationId: requestId,
        attemptCount: 1,
      });
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
