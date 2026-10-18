import { describe, expect, it, vi } from "vitest";
import type {
  RevKeenOperationMetadata,
  RevKeenRequestOptions,
} from "../request-options.js";
import { RevKeenTransport } from "../transport.js";

const GET: RevKeenOperationMetadata = {
  method: "GET",
  operationId: "payments_get",
  path: "/payments/{id}",
  idempotent: false,
  requiresIdempotencyKey: false,
};

async function send(
  transport: RevKeenTransport,
  operation: RevKeenOperationMetadata,
  requestOptions?: RevKeenRequestOptions,
): Promise<Response> {
  return transport.execute(
    operation,
    requestOptions,
    ({ fetch, headers, signal }) =>
      fetch("https://api.revkeen.test/v2/payments/pay_123", {
        method: operation.method,
        headers,
        signal,
      }),
  );
}

describe("RevKeenTransport", () => {
  it.each([408, 425, 429, 500, 502, 503, 504])(
    "retries GET status %s up to exactly three total attempts",
    async (status) => {
      const fetchMock = vi
        .fn<typeof fetch>()
        .mockResolvedValueOnce(new Response("retry", { status }))
        .mockResolvedValueOnce(new Response("retry", { status }))
        .mockResolvedValueOnce(new Response("ok"));
      const transport = new RevKeenTransport({
        fetch: fetchMock,
        random: () => 0,
        sleep: async () => undefined,
        requestIdFactory: () => "00000000-0000-4000-8000-000000000001",
      });
      await expect(send(transport, GET)).resolves.toHaveProperty("status", 200);
      expect(fetchMock).toHaveBeenCalledTimes(3);
    },
  );

  it("never retries 409", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("conflict", { status: 409 }));
    await send(
      new RevKeenTransport({ fetch: fetchMock, sleep: async () => undefined }),
      GET,
    );
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it("retries only operation-proven keyed POSTs", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response("retry", { status: 503 }))
      .mockResolvedValueOnce(new Response("ok"));
    const transport = new RevKeenTransport({
      fetch: fetchMock,
      random: () => 0,
      sleep: async () => undefined,
    });
    await send(
      transport,
      {
        method: "POST",
        operationId: "payments_create",
        path: "/payments",
        idempotent: true,
        requiresIdempotencyKey: false,
      },
      { idempotencyKey: "stable_key_123" },
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it.each([
    [
      {
        method: "POST",
        operationId: "create",
        path: "/payments",
        idempotent: true,
        requiresIdempotencyKey: false,
      },
      undefined,
    ],
    [
      {
        method: "POST",
        operationId: "create",
        path: "/payments",
        idempotent: false,
        requiresIdempotencyKey: false,
      },
      { idempotencyKey: "stable_key_123" },
    ],
    [
      {
        method: "PUT",
        operationId: "update",
        path: "/payments",
        idempotent: true,
        requiresIdempotencyKey: false,
      },
      { idempotencyKey: "stable_key_123" },
    ],
    [
      {
        method: "PATCH",
        operationId: "patch",
        path: "/payments",
        idempotent: true,
        requiresIdempotencyKey: false,
      },
      { idempotencyKey: "stable_key_123" },
    ],
    [
      {
        method: "DELETE",
        operationId: "delete",
        path: "/payments",
        idempotent: true,
        requiresIdempotencyKey: false,
      },
      { idempotencyKey: "stable_key_123" },
    ],
  ] as Array<[RevKeenOperationMetadata, RevKeenRequestOptions | undefined]>)(
    "does not retry unproven or unsafe mutation %#",
    async (operation, requestOptions) => {
      const fetchMock = vi
        .fn<typeof fetch>()
        .mockResolvedValue(new Response("retry", { status: 503 }));
      await send(
        new RevKeenTransport({
          fetch: fetchMock,
          sleep: async () => undefined,
        }),
        operation,
        requestOptions,
      );
      expect(fetchMock).toHaveBeenCalledOnce();
    },
  );

  it("never retries cancellation", async () => {
    const aborted = new Error("cancelled");
    aborted.name = "AbortError";
    const fetchMock = vi.fn<typeof fetch>().mockRejectedValue(aborted);
    await expect(
      send(
        new RevKeenTransport({
          fetch: fetchMock,
          sleep: async () => undefined,
        }),
        GET,
      ),
    ).rejects.toMatchObject({ message: "Request cancelled", attemptCount: 1 });
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it("sends request and trace IDs, but never a correlation ID", async () => {
    const requestId = "00000000-0000-4000-8000-000000000003";
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const headers = (input as Request).headers;
      expect(headers.get("x-request-id")).toBe(requestId);
      expect(headers.get("x-trace-id")).toBe(requestId);
      expect(headers.has("x-correlation-id")).toBe(false);
      return new Response("ok");
    });
    await send(
      new RevKeenTransport({
        fetch: fetchMock as typeof fetch,
        requestIdFactory: () => requestId,
      }),
      GET,
    );
  });

  it("rejects invalid or missing required idempotency keys before I/O", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    const transport = new RevKeenTransport({ fetch: fetchMock });
    const operation: RevKeenOperationMetadata = {
      method: "POST",
      operationId: "mandates_create",
      path: "/mandates",
      idempotent: true,
      requiresIdempotencyKey: true,
    };
    await expect(send(transport, operation)).rejects.toThrow(
      "requires requestOptions.idempotencyKey",
    );
    await expect(
      send(transport, operation, { idempotencyKey: "short" }),
    ).rejects.toThrow("Invalid idempotency key");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses 250ms exponential full-jitter delays", async () => {
    const sleeps: number[] = [];
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => new Response("retry", { status: 503 }));
    await send(
      new RevKeenTransport({
        fetch: fetchMock,
        random: () => 0.5,
        sleep: async (milliseconds) => {
          sleeps.push(milliseconds);
        },
      }),
      GET,
    );
    expect(sleeps).toEqual([125, 250]);
  });

  it("honors maxAttempts from 1 through 3 and rejects larger values", async () => {
    for (const maxAttempts of [1, 2, 3]) {
      const fetchMock = vi
        .fn<typeof fetch>()
        .mockImplementation(async () => new Response("retry", { status: 503 }));
      await send(
        new RevKeenTransport({
          fetch: fetchMock,
          sleep: async () => undefined,
        }),
        GET,
        { retry: { maxAttempts } },
      );
      expect(fetchMock).toHaveBeenCalledTimes(maxAttempts);
    }
    expect(() => new RevKeenTransport({ retry: { maxAttempts: 4 } })).toThrow(
      "integer from 1 to 3",
    );
  });

  it("honors and bounds numeric Retry-After", async () => {
    const sleeps: number[] = [];
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response("retry", {
          status: 429,
          headers: { "Retry-After": "10" },
        }),
      )
      .mockResolvedValueOnce(new Response("ok"));
    await send(
      new RevKeenTransport({
        fetch: fetchMock,
        random: () => 0,
        sleep: async (milliseconds) => {
          sleeps.push(milliseconds);
        },
      }),
      GET,
      { retry: { maxDelay: 2_000 } },
    );
    expect(sleeps).toEqual([2_000]);
  });

  it("honors and bounds HTTP-date Retry-After", async () => {
    const now = Date.parse("2030-01-01T00:00:00Z");
    const nowSpy = vi.spyOn(Date, "now").mockReturnValue(now);
    const sleeps: number[] = [];
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response("retry", {
          status: 503,
          headers: { "Retry-After": new Date(now + 10_000).toUTCString() },
        }),
      )
      .mockResolvedValueOnce(new Response("ok"));
    try {
      await send(
        new RevKeenTransport({
          fetch: fetchMock,
          random: () => 0,
          sleep: async (milliseconds) => {
            sleeps.push(milliseconds);
          },
        }),
        GET,
        { retry: { maxDelay: 2_000 } },
      );
      expect(sleeps).toEqual([2_000]);
    } finally {
      nowSpy.mockRestore();
    }
  });
});

describe("rate-limit header propagation", () => {
  const rateLimitHeaders = {
    "X-RateLimit-Limit": "1000",
    "X-RateLimit-Remaining": "0",
    "X-RateLimit-Reset": "1787000000",
    "Retry-After": "30",
  };

  it("carries the rate-limit headers of the final response into the error context", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response('{"error":{"code":"rate_limit_exceeded"}}', {
        status: 429,
        headers: rateLimitHeaders,
      }),
    );
    const transport = new RevKeenTransport({
      fetch: fetchMock,
      random: () => 0,
      sleep: async () => undefined,
      requestIdFactory: () => "00000000-0000-4000-8000-000000000001",
      retry: { maxAttempts: 1 },
    });

    const response = await send(transport, GET);
    const context = transport.getErrorContext(response);

    expect(context.rateLimit).toEqual({
      limit: 1000,
      remaining: 0,
      resetAt: new Date(1787000000 * 1000),
      retryAfterSeconds: 30,
    });
  });

  it("reports all-null rate-limit metadata when the response omits the headers", async () => {
    const transport = new RevKeenTransport({
      fetch: vi
        .fn<typeof fetch>()
        .mockResolvedValue(new Response("{}", { status: 403 })),
      sleep: async () => undefined,
      requestIdFactory: () => "00000000-0000-4000-8000-000000000001",
    });

    const context = transport.getErrorContext(await send(transport, GET));

    expect(context.rateLimit).toEqual({
      limit: null,
      remaining: null,
      resetAt: null,
      retryAfterSeconds: null,
    });
  });
});

// REV-9148: the SDK identifies itself to Engine on server runtimes only.
describe("RevKeenTransport client identity", () => {
  async function capturedHeaders(): Promise<Headers> {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("ok"));
    await send(new RevKeenTransport({ fetch: fetchMock }), GET);
    // fetchWithRetry calls fetch with a single Request (transport.ts).
    const [request] = fetchMock.mock.calls[0];
    expect(request).toBeInstanceOf(Request);
    return (request as Request).headers;
  }

  it("sends User-Agent and X-RevKeen-Client from a server runtime", async () => {
    const headers = await capturedHeaders();
    expect(headers.get("User-Agent")).toMatch(/^revkeen-sdk-typescript\/\S+$/);
    expect(headers.get("X-RevKeen-Client")).toBe(headers.get("User-Agent"));
  });

  it("sends neither from a browser, so no CORS preflight is forced", async () => {
    vi.stubGlobal("window", {});
    vi.stubGlobal("document", {});
    try {
      const headers = await capturedHeaders();
      expect(headers.get("User-Agent")).toBeNull();
      expect(headers.get("X-RevKeen-Client")).toBeNull();
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
