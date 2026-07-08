import { describe, expect, it, vi } from "vitest";
import { RevKeenClient } from "./client.js";

describe("RevKeenClient usage resource", () => {
  it("posts usage events through the existing v2 usage-events endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        object: "usage_event_batch_result",
        summary: { ingested: 1, duplicate: 0, skipped: 0, failed: 0 },
        data: [{ index: 0, status: "ingested", id: "evt_123" }],
      }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      })
    );

    const client = new RevKeenClient({
      apiKey: "sk_test_123",
      baseUrl: "https://api.test.revkeen.dev/v2",
      fetch: fetchMock as typeof fetch,
    });

    await client.usage.ingest({
      name: "ai.input_tokens",
      external_customer_id: "cust_123",
      quantity: 42,
      metadata: {
        ai: { provider: "anthropic", model: "claude-sonnet-4" },
      },
    });

    expect(fetchMock).toHaveBeenCalledOnce();
    const calls = fetchMock.mock.calls as unknown as Array<[Request]>;
    const request = calls[0][0];

    expect(request.method).toBe("POST");
    expect(request.url).toBe("https://api.test.revkeen.dev/v2/usage-events");
    expect(request.headers.get("x-api-key")).toBe("sk_test_123");

    await expect(request.json()).resolves.toMatchObject({
      name: "ai.input_tokens",
      external_customer_id: "cust_123",
      quantity: 42,
      metadata: {
        ai: { provider: "anthropic", model: "claude-sonnet-4" },
      },
    });
  });
});
