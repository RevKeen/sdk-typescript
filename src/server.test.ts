import { describe, expect, it } from "vitest";
import {
  RevKeenServerClient,
  constructEvent,
  type RevKeenServerClientOptions,
} from "./server.js";
import { RevKeenError } from "./core/errors.js";

function assertServerSurface(options: RevKeenServerClientOptions) {
  const client = new RevKeenServerClient(options);

  client.webhookEndpoints.list();
  client.products.create({
    product_id: "prod_example",
    name: "Example product",
    description: "Server-only write surface",
    kind: "one_time",
    pricing_model: "one_time",
    amount_minor: 1000,
  });
}

void assertServerSurface;

describe("RevKeenServerClient", () => {
  it("rejects publishable keys", () => {
    expect(() => new RevKeenServerClient({ apiKey: "rk_pk_test_123" }))
      .toThrow(RevKeenError);
  });

  it("exports webhook verification helpers from the server entrypoint", () => {
    expect(constructEvent).toBeTypeOf("function");
  });
});
