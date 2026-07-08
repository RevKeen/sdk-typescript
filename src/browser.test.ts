import { describe, expect, it, vi } from "vitest";
import { RevKeenBrowserClient, type RevKeenBrowserClient as BrowserClient } from "./browser.js";
import { RevKeenError } from "./core/errors.js";

function assertBrowserSurface(client: BrowserClient) {
  client.products.list();
  client.products.get("prod_123");
  client.cart.sessionsCreate();

  // @ts-expect-error browser products are read-only
  client.products.create;
  // @ts-expect-error secret webhook setup is not exposed through the browser client
  client.webhookEndpoints;
  // @ts-expect-error billing resources are not exposed through the browser client
  client.invoices;
}

void assertBrowserSurface;

describe("RevKeenBrowserClient", () => {
  it("rejects secret keys", () => {
    expect(() => new RevKeenBrowserClient({ publishableKey: "rk_live_secret" as never }))
      .toThrow(RevKeenError);
  });

  it("uses publishable keys for browser-safe resources", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        object: "list",
        data: [],
        pagination: { total: 0, limit: 25, offset: 0, has_more: false },
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );

    const client = new RevKeenBrowserClient({
      publishableKey: "rk_pk_test_123",
      baseUrl: "https://api.test.revkeen.dev/v2",
      fetch: fetchMock as typeof fetch,
    });

    await client.products.list();

    expect(fetchMock).toHaveBeenCalledOnce();
    const calls = fetchMock.mock.calls as unknown as Array<[Request]>;
    const request = calls[0][0];

    expect(request.method).toBe("GET");
    expect(request.url).toBe("https://api.test.revkeen.dev/v2/products");
    expect(request.headers.get("x-api-key")).toBe("rk_pk_test_123");
  });
});
