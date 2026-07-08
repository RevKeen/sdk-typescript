import { RevKeenClient } from "./client.js";
import type { RevKeenClientOptions } from "./client.js";
import { RevKeenError } from "./core/errors.js";
import webhooks from "./webhooks.js";

export type RevKeenSecretKey =
  | `rk_live_${string}`
  | `rk_sandbox_${string}`
  | `sk_live_${string}`
  | `sk_test_${string}`;

export interface RevKeenServerClientOptions extends RevKeenClientOptions {
  apiKey?: RevKeenSecretKey | string;
}

export function isRevKeenPublishableServerKey(key: string): key is `rk_pk_${string}` {
  return key.startsWith("rk_pk_") && key.length > "rk_pk_".length;
}

export function assertRevKeenServerKey(key: string): asserts key is RevKeenSecretKey | string {
  if (isRevKeenPublishableServerKey(key)) {
    throw new RevKeenError(
      "RevKeenServerClient cannot use an rk_pk_* publishable key. " +
        "Use a secret rk_live_*, rk_sandbox_*, sk_live_*, or sk_test_* key."
    );
  }
}

export class RevKeenServerClient extends RevKeenClient {
  constructor(options: RevKeenServerClientOptions) {
    if (options.apiKey) {
      assertRevKeenServerKey(options.apiKey);
    }

    super(options);
  }
}

export { RevKeenServerClient as RevKeenServer };
export { RevKeenAPIError, RevKeenError, RevKeenTimeoutError } from "./core/errors.js";
export { OAuthTokenManager } from "./core/oauth.js";
export type { OAuthConfig } from "./core/oauth.js";
export { webhooks };
export {
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  constructEvent,
  constructEventWithHeaders,
  extractWebhookHeaders,
  verifySignature,
} from "./webhooks.js";
export type {
  WebhookHeaders,
  WebhookVerifyOptions,
  WebhookEvent as WebhookUtilityEvent,
  WebhookEventData as WebhookUtilityEventData,
  WebhookEventType as WebhookUtilityEventType,
} from "./webhooks.js";
