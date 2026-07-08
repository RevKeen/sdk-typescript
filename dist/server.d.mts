import { R as RevKeenClient, a as RevKeenClientOptions } from './errors-B2c-BQoD.mjs';
export { b as RevKeenAPIError, c as RevKeenError, d as RevKeenTimeoutError } from './errors-B2c-BQoD.mjs';
export { WEBHOOK_TOLERANCE_IN_SECONDS, WebhookHeaders, WebhookSignatureVerificationError, WebhookEvent as WebhookUtilityEvent, WebhookEventData as WebhookUtilityEventData, WebhookEventType as WebhookUtilityEventType, WebhookVerifyOptions, constructEvent, constructEventWithHeaders, extractWebhookHeaders, verifySignature, default as webhooks } from './webhooks.mjs';
export { OAuthConfig, OAuthTokenManager } from './auth.mjs';
import './types.gen-BxK5gEJT.mjs';

type RevKeenSecretKey = `rk_live_${string}` | `rk_sandbox_${string}` | `sk_live_${string}` | `sk_test_${string}`;
interface RevKeenServerClientOptions extends RevKeenClientOptions {
    apiKey?: RevKeenSecretKey | string;
}
declare function isRevKeenPublishableServerKey(key: string): key is `rk_pk_${string}`;
declare function assertRevKeenServerKey(key: string): asserts key is RevKeenSecretKey | string;
declare class RevKeenServerClient extends RevKeenClient {
    constructor(options: RevKeenServerClientOptions);
}

export { type RevKeenSecretKey, RevKeenServerClient as RevKeenServer, RevKeenServerClient, type RevKeenServerClientOptions, assertRevKeenServerKey, isRevKeenPublishableServerKey };
