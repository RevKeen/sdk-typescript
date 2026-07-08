import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    ai: "src/ai.ts",
    auth: "src/auth.ts",
    browser: "src/browser.ts",
    index: "src/index.ts",
    server: "src/server.ts",
    webhooks: "src/webhooks.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
});
