import {
  RevKeenClient
} from "./chunk-M26X5R3T.mjs";
import {
  OAuthTokenManager
} from "./chunk-3JCG2SO2.mjs";
import "./chunk-IB2JLWSL.mjs";
import {
  RevKeenAPIError,
  RevKeenError,
  RevKeenTimeoutError
} from "./chunk-ZOT7NMVT.mjs";
import {
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  constructEvent,
  constructEventWithHeaders,
  extractWebhookHeaders,
  verifySignature,
  webhooks_default
} from "./chunk-M4KL3RQL.mjs";

// src/server.ts
function isRevKeenPublishableServerKey(key) {
  return key.startsWith("rk_pk_") && key.length > "rk_pk_".length;
}
function assertRevKeenServerKey(key) {
  if (isRevKeenPublishableServerKey(key)) {
    throw new RevKeenError(
      "RevKeenServerClient cannot use an rk_pk_* publishable key. Use a secret rk_live_*, rk_sandbox_*, sk_live_*, or sk_test_* key."
    );
  }
}
var RevKeenServerClient = class extends RevKeenClient {
  constructor(options) {
    if (options.apiKey) {
      assertRevKeenServerKey(options.apiKey);
    }
    super(options);
  }
};
export {
  OAuthTokenManager,
  RevKeenAPIError,
  RevKeenError,
  RevKeenServerClient as RevKeenServer,
  RevKeenServerClient,
  RevKeenTimeoutError,
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  assertRevKeenServerKey,
  constructEvent,
  constructEventWithHeaders,
  extractWebhookHeaders,
  isRevKeenPublishableServerKey,
  verifySignature,
  webhooks_default as webhooks
};
//# sourceMappingURL=server.mjs.map