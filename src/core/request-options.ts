export const DEFAULT_CONNECT_TIMEOUT_MS = 10_000;
export const DEFAULT_READ_TIMEOUT_MS = 30_000;
export const MAXIMUM_TOTAL_ATTEMPTS = 3;
export const INITIAL_RETRY_DELAY_MS = 250;
export const MAXIMUM_RETRY_DELAY_MS = 2_000;

export const IDEMPOTENCY_KEY_PATTERN =
  /^(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|[A-Za-z0-9_-]{8,64})$/;

export interface RevKeenRequestOptions {
  /** A caller-owned stable key. The SDK never generates idempotency keys. */
  idempotencyKey?: string;
  /** Optional caller-supplied UUID used for both x-request-id and x-trace-id. */
  requestId?: string;
  /** Time allowed for response headers, in milliseconds. */
  connectTimeout?: number;
  /** Time allowed to consume the response body, in milliseconds. */
  readTimeout?: number;
  /** Per-call retry overrides. Unsafe operations remain single-attempt. */
  retry?: RevKeenRetryOptions;
  /** Cancels the request. Cancellation is never retried. */
  signal?: AbortSignal;
}

export interface RevKeenRetryOptions {
  /** Total attempts including the first request. Must be an integer from 1 to 3. */
  maxAttempts?: number;
  initialDelay?: number;
  maxDelay?: number;
}

export interface RevKeenOperationMetadata {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  operationId: string;
  path: string;
  /** True only when the OpenAPI operation declares x-revkeen-idempotent: true. */
  idempotent: boolean;
  requiresIdempotencyKey: boolean;
}

export interface RevKeenTransportRequest {
  fetch: typeof fetch;
  headers: Record<string, string>;
  signal?: AbortSignal;
}
