import { RevKeenError } from "./errors.js";

const SECRET_KEY_PREFIXES = ["rk_live_", "rk_sandbox_"] as const;
const PUBLISHABLE_KEY_PREFIXES = ["rk_pk_live_", "rk_pk_sandbox_"] as const;

export type RevKeenKeyKind = "secret" | "publishable" | "unknown";

export function classifyApiKey(key: string): RevKeenKeyKind {
  if (
    PUBLISHABLE_KEY_PREFIXES.some(
      (prefix) => key.startsWith(prefix) && key.length > prefix.length,
    )
  ) {
    return "publishable";
  }

  if (
    SECRET_KEY_PREFIXES.some(
      (prefix) => key.startsWith(prefix) && key.length > prefix.length,
    )
  ) {
    return "secret";
  }

  return "unknown";
}

export function assertSecretKey(key: string): void {
  const kind = classifyApiKey(key);
  if (kind === "publishable") {
    throw new RevKeenError(
      "Publishable keys must be used with RevKeenBrowserClient from '@revkeen/sdk/browser'.",
    );
  }
  if (kind !== "secret") {
    throw new RevKeenError(
      "Invalid RevKeen secret key. Expected an rk_live_ or rk_sandbox_ key.",
    );
  }
}

export function assertPublishableKey(key: string): void {
  if (classifyApiKey(key) !== "publishable") {
    throw new RevKeenError(
      "Invalid RevKeen publishable key. Expected an rk_pk_live_ or rk_pk_sandbox_ key.",
    );
  }
}
