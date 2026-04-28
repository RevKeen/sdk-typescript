import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    auth: "src/auth.ts",
    index: "src/index.ts",
    webhooks: "src/webhooks.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
});
