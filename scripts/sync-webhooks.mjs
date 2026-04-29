import { copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SDK_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(SDK_ROOT, "..", "..");
const SOURCE_PATH = path.join(REPO_ROOT, "packages", "sdk-extras", "typescript", "webhooks.ts");
const TARGET_PATH = path.join(SDK_ROOT, "src", "webhooks.ts");

copyFileSync(SOURCE_PATH, TARGET_PATH);
console.log(`[revkeen/sdk] Synced ${path.relative(REPO_ROOT, TARGET_PATH)}`);
