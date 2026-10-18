import { describe, expect, it, vi } from "vitest";
import { RevKeenClient } from "../../client.js";
import { RevKeenPublishableClient } from "../../browser-client.js";
import { RevKeenEnvironment } from "../environment.js";

function successFetch() {
  return vi.fn(
    async () =>
      new Response(JSON.stringify({ data: [] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
  );
}

describe("RevKeen environments", () => {
  it.each([
    [RevKeenEnvironment.Sandbox, "https://staging-api.revkeen.com/v2"],
    [RevKeenEnvironment.Production, "https://api.revkeen.com/v2"],
  ])("routes %s through its named endpoint", async (environment, baseUrl) => {
    const fetchMock = successFetch();
    const client = new RevKeenClient({
      environment,
      secretKey: "rk_sandbox_secret",
      fetch: fetchMock as typeof fetch,
    });

    await client.usage.dryRun({
      name: "test.event",
      external_customer_id: "customer_123",
      quantity: 1,
      idempotency_key: "sdk_environment_named_endpoint",
    });

    const calls = fetchMock.mock.calls as unknown as Array<[Request]>;
    const request = calls[0][0];
    expect(request.url).toBe(`${baseUrl}/usage-events/dry-run`);
  });

  it("fails closed for an unknown environment", () => {
    expect(
      () =>
        new RevKeenClient({
          environment: "preview" as RevKeenEnvironment,
          secretKey: "rk_sandbox_secret",
        }),
    ).toThrow("Unknown RevKeen environment 'preview'");
  });

  it("requires an explicit custom URL factory for non-standard endpoints", async () => {
    const fetchMock = successFetch();
    const client = RevKeenClient.forCustomBaseUrl("http://127.0.0.1:8787/v2/", {
      secretKey: "rk_sandbox_secret",
      fetch: fetchMock as typeof fetch,
    });

    await client.usage.dryRun({
      name: "test.event",
      external_customer_id: "customer_123",
      quantity: 1,
      idempotency_key: "sdk_environment_custom_endpoint",
    });

    const calls = fetchMock.mock.calls as unknown as Array<[Request]>;
    const request = calls[0][0];
    expect(request.url).toBe("http://127.0.0.1:8787/v2/usage-events/dry-run");
  });

  it.each([
    "not-a-url",
    "ftp://example.com/v2",
    "https://user:pass@example.com/v2",
    "https://example.com/v2?tenant=unsafe",
    "https://example.com/v2#fragment",
  ])("rejects unsafe custom URL %s", (baseUrl) => {
    expect(() =>
      RevKeenClient.forCustomBaseUrl(baseUrl, {
        secretKey: "rk_sandbox_secret",
      }),
    ).toThrow();
  });

  it("applies the same named/custom environment boundary to the browser client", async () => {
    const namedFetch = successFetch();
    const namedClient = new RevKeenPublishableClient({
      environment: RevKeenEnvironment.Sandbox,
      publishableKey: "rk_pk_sandbox_public",
      fetch: namedFetch as typeof fetch,
    });
    await namedClient.storefront.productsList();
    const namedCalls = namedFetch.mock.calls as unknown as Array<[Request]>;
    const namedRequest = namedCalls[0][0];
    expect(namedRequest.url).toBe(
      "https://staging-api.revkeen.com/v2/storefront/products",
    );

    const customFetch = successFetch();
    const customClient = RevKeenPublishableClient.forCustomBaseUrl(
      "http://127.0.0.1:8787/v2",
      {
        publishableKey: "rk_pk_sandbox_public",
        fetch: customFetch as typeof fetch,
      },
    );
    await customClient.storefront.productsList();
    const customCalls = customFetch.mock.calls as unknown as Array<[Request]>;
    const customRequest = customCalls[0][0];
    expect(customRequest.url).toBe(
      "http://127.0.0.1:8787/v2/storefront/products",
    );
  });
});
