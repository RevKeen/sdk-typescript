import { describe, expect, it } from "vitest";
import { RevKeenBrowserClient } from "../../browser-client.js";
import { RevKeenClient } from "../../client.js";
import { classifyApiKey } from "../authentication.js";
import { RevKeenEnvironment } from "../environment.js";

describe("API key separation", () => {
  it.each(["rk_live_secret", "rk_sandbox_secret"])(
    "classifies %s as secret",
    (key) => {
      expect(classifyApiKey(key)).toBe("secret");
    },
  );

  it.each(["rk_pk_live_public", "rk_pk_sandbox_public"])(
    "classifies %s as publishable",
    (key) => {
      expect(classifyApiKey(key)).toBe("publishable");
    },
  );

  it.each(["rk_live_", "rk_sandbox_", "rk_pk_live_", "rk_pk_sandbox_"])(
    "rejects prefix-only key %s",
    (key) => {
      expect(classifyApiKey(key)).toBe("unknown");
    },
  );

  it("rejects publishable keys in the server client", () => {
    expect(
      () =>
        new RevKeenClient({
          environment: RevKeenEnvironment.Sandbox,
          secretKey: "rk_pk_sandbox_public",
        }),
    ).toThrow("RevKeenBrowserClient");
  });

  it("rejects secret keys in the browser client", () => {
    expect(
      () =>
        new RevKeenBrowserClient({
          environment: RevKeenEnvironment.Sandbox,
          publishableKey: "rk_sandbox_secret",
        }),
    ).toThrow("publishable key");
  });

  it("rejects direct configuration of transport-owned headers", () => {
    expect(
      () =>
        new RevKeenClient({
          environment: RevKeenEnvironment.Sandbox,
          secretKey: "rk_sandbox_secret",
          headers: { "X-Correlation-Id": "caller-value" },
        }),
    ).toThrow("managed by the RevKeen SDK");
  });
});
