// REV-9169. The release mirror receives packages/sdk and nothing else, so the transport runtime the SDK bundles
// has to live inside it. This writes src/generated/runtime.ts as a copy of the generated sdks/typescript runtime.
// generate:client empties src/generated, so scripts/generate-sdks.sh runs this after it. An optional argument names
// the source file; the default is the committed sdks/typescript/src/runtime.ts.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(
  process.argv[2] ?? resolve(here, "../../../sdks/typescript/src/runtime.ts"),
);
const target = resolve(here, "../src/generated/runtime.ts");

const HEADER =
  "// Copy of sdks/typescript/src/runtime.ts, written by packages/sdk/scripts/sync-runtime.mjs. Do not edit it:\n" +
  "// the release mirror builds this package alone, so the runtime has to live here. Regenerate with pnpm generate:sdks.\n";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, HEADER + readFileSync(source, "utf8"));
console.log(`[sync-runtime] ${source} -> ${target}`);
