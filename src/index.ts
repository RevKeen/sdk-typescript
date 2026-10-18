export { RevKeenClient, RevKeen } from "./client.js";
export type { RevKeenClientOptions, UsageResource } from "./client.js";
export type { RevKeenCustomBaseUrlClientOptions } from "./client.js";
export { RevKeen as default } from "./client.js";

export {
  RevKeenError,
  RevKeenAPIError,
  RevKeenAuthenticationError,
  RevKeenAuthorizationError,
  RevKeenValidationError,
  RevKeenNotFoundError,
  RevKeenRateLimitError,
  RevKeenConflictError,
  RevKeenIdempotencyConflictError,
  RevKeenServerError,
  RevKeenTimeoutError,
  createRevKeenAPIError,
  normalizeRevKeenAPIError,
} from "./core/errors.js";
export type {
  NormalizedRevKeenAPIError,
  RevKeenAPIErrorMetadata,
  RevKeenErrorContext,
} from "./core/errors.js";
// REV-6758: the rate-limit surface is declared on its own statements below.
// The SDK compatibility manifest treats each statement as one opaque string
// and diffs those strings as a set, so adding a symbol to an existing line
// reads as "removed + added" even when the symbol set only grew. Separate
// statements keep that gate's verdict truthful. Keep the word this sentence
// avoids out of comments here: the manifest scanner starts a match on it.
export {
  emptyRevKeenRateLimitMetadata,
  parseRevKeenRateLimitMetadata,
} from "./core/errors.js";
export type { RevKeenRateLimitMetadata } from "./core/errors.js";
export { paginate, RevKeenPaginationStallError } from "./core/pagination.js";
export type {
  RevKeenFetchPage,
  RevKeenPaginationOptions,
} from "./core/pagination.js";
export {
  isMinorUnits,
  mapOptionalNullable,
  minorUnits,
  parseRfc3339,
} from "./core/scalars.js";
export type { MinorUnits } from "./core/scalars.js";
export type { RevKeenRequestOptions } from "./core/request-options.js";
export type { RevKeenRetryOptions } from "./core/request-options.js";
export { OAuthTokenManager } from "./core/oauth.js";
export type { OAuthConfig } from "./core/oauth.js";
export { RevKeenEnvironment } from "./core/environment.js";

export * from "./generated/index.js";
export * from "./generated-resources.js";
export { default as webhooks } from "./webhooks.js";
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
  WebhookSignatureVerificationErrorCode,
  WebhookEvent as WebhookUtilityEvent,
  WebhookEventData as WebhookUtilityEventData,
  WebhookEventType as WebhookUtilityEventType,
} from "./webhooks.js";
