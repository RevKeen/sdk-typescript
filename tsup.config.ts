import { readFileSync } from "node:fs";
import { defineConfig } from "tsup";

// REV-9148: the release version, baked into the User-Agent the SDK sends.
const { version } = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8"),
) as { version: string };

export default defineConfig({
  entry: {
    ai: "src/ai.ts",
    auth: "src/auth.ts",
    browser: "src/browser.ts",
    index: "src/index.ts",
    webhooks: "src/webhooks.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  define: { __REVKEEN_SDK_VERSION__: JSON.stringify(version) },
});
