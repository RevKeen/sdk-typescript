import { describe, expect, it } from "vitest";

import { RevKeenClient, RevKeenEnvironment } from "./index.js";

const sandboxKey = process.env.SDK_SANDBOX_API_KEY;

describe.skipIf(!sandboxKey)("sandbox contract", () => {
  it("authenticates and lists products through the public client", async () => {
    expect(sandboxKey).toMatch(/^rk_sandbox_.+/);
    const client = new RevKeenClient({
      secretKey: sandboxKey!,
      environment: RevKeenEnvironment.Sandbox,
    });

    const response = await client.products.list({ limit: 1 });
    expect(response).toBeDefined();
  });
});
