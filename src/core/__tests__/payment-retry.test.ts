import { describe, expect, it, vi } from "vitest";
import { RevKeenTransport } from "../transport.js";

describe("payment creation retry safety", () => {
  it("makes exactly one attempt when an unkeyed POST times out after the server may have accepted it", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(
      async () =>
        new Response(
          new ReadableStream({
            start() {
              // The response headers arrived, but the body never completes. The
              // server may already have committed the payment at this point.
            },
          }),
          {
            status: 201,
            headers: {
              "content-type": "application/json",
              "x-request-id": "server-request-id",
            },
          },
        ),
    );
    const transport = new RevKeenTransport({
      fetch: fetchMock as typeof fetch,
      requestIdFactory: () => "00000000-0000-4000-8000-000000000001",
    });

    const request = transport.execute(
      {
        method: "POST",
        operationId: "payment_intents_create",
        path: "/payment-intents",
        idempotent: true,
        requiresIdempotencyKey: false,
      },
      { readTimeout: 5 },
      ({ fetch, headers, signal }) =>
        fetch("https://api.revkeen.test/v2/payment-intents", {
          method: "POST",
          headers,
          signal,
          body: JSON.stringify({ amount: 1000 }),
        }),
    );

    await expect(request).rejects.toMatchObject({
      name: "RevKeenTimeoutError",
      phase: "read",
      requestId: "server-request-id",
      attemptCount: 1,
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const attemptedRequest = fetchMock.mock.calls[0]?.[0] as Request;
    expect(attemptedRequest.headers.has("Idempotency-Key")).toBe(false);
  });

  it("retries a proven keyed POST with the identical body, key, request ID, and trace ID", async () => {
    const attempts: Array<{
      body: string;
      key: string | null;
      requestId: string | null;
      traceId: string | null;
    }> = [];
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async (input) => {
        const request = input as Request;
        attempts.push({
          body: await request.clone().text(),
          key: request.headers.get("Idempotency-Key"),
          requestId: request.headers.get("x-request-id"),
          traceId: request.headers.get("x-trace-id"),
        });
        return new Response(new ReadableStream({ start() {} }), {
          status: 201,
          headers: { "content-type": "application/json" },
        });
      });
    const transport = new RevKeenTransport({
      fetch: fetchMock,
      requestIdFactory: () => "00000000-0000-4000-8000-000000000002",
      random: () => 0,
      sleep: async () => undefined,
    });

    await expect(
      transport.execute(
        {
          method: "POST",
          operationId: "payment_intents_create",
          path: "/payment-intents",
          idempotent: true,
          requiresIdempotencyKey: false,
        },
        { idempotencyKey: "stable_payment_key", readTimeout: 5 },
        ({ fetch, headers, signal }) =>
          fetch("https://api.revkeen.test/v2/payment-intents", {
            method: "POST",
            headers,
            signal,
            body: JSON.stringify({ amount: 1000 }),
          }),
      ),
    ).rejects.toMatchObject({
      name: "RevKeenTimeoutError",
      phase: "read",
      attemptCount: 3,
    });

    expect(attempts).toHaveLength(3);
    expect(new Set(attempts.map((attempt) => attempt.body)).size).toBe(1);
    expect(new Set(attempts.map((attempt) => attempt.key))).toEqual(
      new Set(["stable_payment_key"]),
    );
    expect(new Set(attempts.map((attempt) => attempt.requestId))).toEqual(
      new Set(["00000000-0000-4000-8000-000000000002"]),
    );
    expect(new Set(attempts.map((attempt) => attempt.traceId))).toEqual(
      new Set(["00000000-0000-4000-8000-000000000002"]),
    );
  });
});
