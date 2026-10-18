/**
 * Rate-limit headers RevKeen publishes alongside a response.
 *
 * Units are fixed by the public contract and must not be re-derived by callers:
 * `resetAt` is built from `X-RateLimit-Reset`, which is a UNIX timestamp in
 * **seconds**, and `retryAfterSeconds` is the server-stated `Retry-After` delay
 * in **whole seconds**. Each field is `null` when its header was absent, so a
 * published zero (`X-RateLimit-Remaining: 0`) is never confused with an
 * unreported limit.
 */
export interface RevKeenRateLimitMetadata {
  /** `X-RateLimit-Limit` — requests permitted in the current window. */
  readonly limit: number | null;
  /** `X-RateLimit-Remaining` — requests left in the current window. */
  readonly remaining: number | null;
  /** `X-RateLimit-Reset` — window reset instant, parsed from UNIX seconds. */
  readonly resetAt: Date | null;
  /**
   * `Retry-After` — whole seconds to wait, exactly as the server stated it. An
   * HTTP-date value is resolved to seconds from now. This is never clamped to
   * the SDK retry ceiling; that bound belongs to the retry policy alone.
   */
  readonly retryAfterSeconds: number | null;
}

const ABSENT_RATE_LIMIT: RevKeenRateLimitMetadata = Object.freeze({
  limit: null,
  remaining: null,
  resetAt: null,
  retryAfterSeconds: null,
});

/** The metadata surfaced when a response carried no rate-limit headers. */
export function emptyRevKeenRateLimitMetadata(): RevKeenRateLimitMetadata {
  return ABSENT_RATE_LIMIT;
}

function headerValue(
  headers: Headers | undefined | null,
  name: string,
): string | null {
  const raw = headers?.get(name);
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function nonNegativeInteger(value: string | null): number | null {
  if (value === null || !/^\d+$/.test(value)) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}

function parseRetryAfterSeconds(
  value: string | null,
  now: number,
): number | null {
  if (value === null) return null;
  const seconds = nonNegativeInteger(value);
  if (seconds !== null) return seconds;
  const date = Date.parse(value);
  if (!Number.isFinite(date)) return null;
  return Math.max(0, Math.ceil((date - now) / 1_000));
}

/**
 * Reads the rate-limit headers off a response without inventing values. A
 * header that is missing, blank, or not a non-negative integer stays `null`.
 */
export function parseRevKeenRateLimitMetadata(
  headers: Headers | undefined | null,
  now: number = Date.now(),
): RevKeenRateLimitMetadata {
  if (!headers) return ABSENT_RATE_LIMIT;
  const resetSeconds = nonNegativeInteger(
    headerValue(headers, "x-ratelimit-reset"),
  );
  const metadata: RevKeenRateLimitMetadata = {
    limit: nonNegativeInteger(headerValue(headers, "x-ratelimit-limit")),
    remaining: nonNegativeInteger(
      headerValue(headers, "x-ratelimit-remaining"),
    ),
    // X-RateLimit-Reset is UNIX seconds, never milliseconds.
    resetAt: resetSeconds === null ? null : new Date(resetSeconds * 1_000),
    retryAfterSeconds: parseRetryAfterSeconds(
      headerValue(headers, "retry-after"),
      now,
    ),
  };
  return metadata.limit === null &&
    metadata.remaining === null &&
    metadata.resetAt === null &&
    metadata.retryAfterSeconds === null
    ? ABSENT_RATE_LIMIT
    : metadata;
}

export interface RevKeenErrorContext {
  requestId?: string | null;
  traceId?: string | null;
  correlationId?: string | null;
  attemptCount?: number;
  rateLimit?: RevKeenRateLimitMetadata | null;
}

export interface RevKeenAPIErrorMetadata {
  code?: string | null;
  type?: string | null;
  param?: string | null;
  details?: unknown;
}

export interface NormalizedRevKeenAPIError {
  code: string;
  message: string;
  type: string | null;
  param: string | null;
  details: unknown;
}

export class RevKeenError extends Error {
  readonly requestId: string | null;
  readonly traceId: string | null;
  readonly correlationId: string | null;
  readonly attemptCount: number;
  /**
   * Rate-limit headers observed on the response, if any. Always an object, so
   * `error.rateLimit.retryAfterSeconds` is safe to read on every failure.
   */
  readonly rateLimit: RevKeenRateLimitMetadata;

  constructor(message: string, context: RevKeenErrorContext = {}) {
    super(message);
    this.name = "RevKeenError";
    this.requestId = context.requestId ?? null;
    this.traceId = context.traceId ?? null;
    this.correlationId = context.correlationId ?? context.requestId ?? null;
    this.attemptCount = context.attemptCount ?? 1;
    this.rateLimit = context.rateLimit ?? ABSENT_RATE_LIMIT;
  }
}

export class RevKeenAPIError extends RevKeenError {
  readonly code: string;
  readonly machineCode: string;
  readonly rawBody: unknown;
  readonly type: string | null;
  readonly param: string | null;
  readonly details: unknown;

  constructor(
    public readonly status: number,
    message: string,
    public readonly body: unknown,
    context: RevKeenErrorContext = {},
    metadata: RevKeenAPIErrorMetadata = {},
  ) {
    super(message, context);
    this.name = "RevKeenAPIError";
    this.code = nonEmptyString(metadata.code) ?? "unknown_error";
    this.machineCode = this.code;
    this.rawBody = body;
    this.type = nonEmptyString(metadata.type);
    this.param = nonEmptyString(metadata.param);
    this.details = metadata.details;
  }
}

type APIErrorArguments = ConstructorParameters<typeof RevKeenAPIError>;
const IDEMPOTENCY_CONFLICT_CODES = new Set([
  "idempotency_conflict",
  "idempotency_key_conflict",
  "idempotency_key_reused",
  "idempotency_key_mismatch",
  "idempotency_mismatch",
]);

export class RevKeenAuthenticationError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenAuthenticationError";
  }
}

export class RevKeenAuthorizationError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenAuthorizationError";
  }
}

export class RevKeenValidationError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenValidationError";
  }
}

export class RevKeenNotFoundError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenNotFoundError";
  }
}

export class RevKeenRateLimitError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenRateLimitError";
  }
}

export class RevKeenConflictError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenConflictError";
  }
}

export class RevKeenIdempotencyConflictError extends RevKeenConflictError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenIdempotencyConflictError";
  }
}

export class RevKeenServerError extends RevKeenAPIError {
  constructor(...args: APIErrorArguments) {
    super(...args);
    this.name = "RevKeenServerError";
  }
}

export class RevKeenTimeoutError extends RevKeenError {
  constructor(
    message: string,
    public readonly phase: "connect" | "read",
    context: RevKeenErrorContext = {},
  ) {
    super(message, context);
    this.name = "RevKeenTimeoutError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function nonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function property(record: Record<string, unknown>, name: string): unknown {
  return Object.prototype.hasOwnProperty.call(record, name)
    ? record[name]
    : undefined;
}

export function normalizeRevKeenAPIError(
  body: unknown,
  fallbackMessage: string,
): NormalizedRevKeenAPIError {
  const envelope = isRecord(body) ? body : {};
  const nestedError = isRecord(envelope.error) ? envelope.error : null;
  const source = nestedError ?? envelope;
  const flatError = nonEmptyString(envelope.error);
  return {
    code:
      nonEmptyString(property(source, "code")) ??
      nonEmptyString(property(envelope, "code")) ??
      "unknown_error",
    message:
      nonEmptyString(property(source, "message")) ??
      flatError ??
      nonEmptyString(property(envelope, "message")) ??
      nonEmptyString(body) ??
      nonEmptyString(fallbackMessage) ??
      "RevKeen API request failed",
    type:
      nonEmptyString(property(source, "type")) ??
      nonEmptyString(property(envelope, "type")),
    param:
      nonEmptyString(property(source, "param")) ??
      nonEmptyString(property(envelope, "param")),
    details: Object.prototype.hasOwnProperty.call(source, "details")
      ? source.details
      : property(envelope, "details"),
  };
}

export function createRevKeenAPIError(
  status: number,
  body: unknown,
  fallbackMessage: string,
  context: RevKeenErrorContext = {},
): RevKeenAPIError {
  const normalized = normalizeRevKeenAPIError(body, fallbackMessage);
  const args: APIErrorArguments = [
    status,
    normalized.message,
    body,
    context,
    normalized,
  ];
  if (status === 401) return new RevKeenAuthenticationError(...args);
  if (status === 403) return new RevKeenAuthorizationError(...args);
  if (status === 400 || status === 422)
    return new RevKeenValidationError(...args);
  if (status === 404) return new RevKeenNotFoundError(...args);
  if (status === 429) return new RevKeenRateLimitError(...args);
  if (status === 409) {
    return IDEMPOTENCY_CONFLICT_CODES.has(normalized.code.toLowerCase())
      ? new RevKeenIdempotencyConflictError(...args)
      : new RevKeenConflictError(...args);
  }
  if (status >= 500) return new RevKeenServerError(...args);
  return new RevKeenAPIError(...args);
}
