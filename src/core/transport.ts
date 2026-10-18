import {
  parseRevKeenRateLimitMetadata,
  RevKeenError,
  RevKeenTimeoutError,
} from "./errors.js";
import type { RevKeenErrorContext } from "./errors.js";
import {
  DEFAULT_CONNECT_TIMEOUT_MS,
  DEFAULT_READ_TIMEOUT_MS,
  IDEMPOTENCY_KEY_PATTERN,
  INITIAL_RETRY_DELAY_MS,
  MAXIMUM_RETRY_DELAY_MS,
  MAXIMUM_TOTAL_ATTEMPTS,
} from "./request-options.js";
import type {
  RevKeenOperationMetadata,
  RevKeenRequestOptions,
  RevKeenRetryOptions,
  RevKeenTransportRequest,
} from "./request-options.js";

const RETRYABLE_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);

/** Replaced at build time with package.json `version` (tsup.config.ts `define`). */
declare const __REVKEEN_SDK_VERSION__: string | undefined;

export const SDK_CLIENT_NAME = "revkeen-sdk-typescript";

/**
 * REV-9148: identify the SDK to Engine. Server runtimes only: in a browser
 * the User-Agent header is the browser's, and a custom header would force a
 * CORS preflight.
 */
export function sdkClientHeaders(): Record<string, string> {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return {};
  }
  const version =
    typeof __REVKEEN_SDK_VERSION__ === "string"
      ? __REVKEEN_SDK_VERSION__
      : "unknown";
  const client = `${SDK_CLIENT_NAME}/${version}`;
  return { "User-Agent": client, "X-RevKeen-Client": client };
}

interface TransportContext extends RevKeenErrorContext {
  requestId: string;
  traceId: string;
  attemptCount: number;
}

export interface RevKeenTransportOptions {
  fetch?: typeof fetch;
  connectTimeout?: number;
  readTimeout?: number;
  requestIdFactory?: () => string;
  retry?: RevKeenRetryOptions;
  random?: () => number;
  sleep?: (milliseconds: number, signal?: AbortSignal) => Promise<void>;
}

function positiveTimeout(value: number, name: string): number {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RevKeenError(`${name} must be a positive number of milliseconds`);
  }
  return value;
}

function defaultRequestId(): string {
  if (!globalThis.crypto?.randomUUID) {
    throw new RevKeenError(
      "A cryptographically secure crypto.randomUUID implementation is required",
    );
  }
  return globalThis.crypto.randomUUID();
}

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

interface ResolvedRetryOptions {
  maxAttempts: number;
  initialDelay: number;
  maxDelay: number;
}

function resolveRetryOptions(
  defaults: RevKeenRetryOptions | undefined,
  overrides: RevKeenRetryOptions | undefined,
): ResolvedRetryOptions {
  const maxAttempts =
    overrides?.maxAttempts ?? defaults?.maxAttempts ?? MAXIMUM_TOTAL_ATTEMPTS;
  const initialDelay =
    overrides?.initialDelay ?? defaults?.initialDelay ?? INITIAL_RETRY_DELAY_MS;
  const maxDelay =
    overrides?.maxDelay ?? defaults?.maxDelay ?? MAXIMUM_RETRY_DELAY_MS;
  if (!Number.isInteger(maxAttempts) || maxAttempts < 1 || maxAttempts > 3) {
    throw new RevKeenError("retry.maxAttempts must be an integer from 1 to 3");
  }
  positiveTimeout(initialDelay, "retry.initialDelay");
  positiveTimeout(maxDelay, "retry.maxDelay");
  if (maxDelay < initialDelay) {
    throw new RevKeenError(
      "retry.maxDelay must be greater than or equal to retry.initialDelay",
    );
  }
  return { maxAttempts, initialDelay, maxDelay };
}

function createAbortError(): Error {
  if (typeof DOMException !== "undefined") {
    return new DOMException("The operation was aborted", "AbortError");
  }
  const error = new Error("The operation was aborted");
  error.name = "AbortError";
  return error;
}

function defaultSleep(
  milliseconds: number,
  signal?: AbortSignal,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }

    const timeout = setTimeout(resolve, milliseconds);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        reject(createAbortError());
      },
      { once: true },
    );
  });
}

function responseContext(
  response: Response,
  fallback: TransportContext,
): TransportContext {
  const requestId =
    response.headers.get("x-request-id") ??
    response.headers.get("x-correlation-id") ??
    fallback.requestId;
  const traceId = response.headers.get("x-trace-id") ?? fallback.traceId;
  return {
    ...fallback,
    requestId,
    traceId,
    correlationId: requestId,
    rateLimit: parseRevKeenRateLimitMetadata(response.headers),
  };
}

export class RevKeenTransport {
  private readonly fetchImpl: typeof fetch;
  private readonly connectTimeout: number;
  private readonly readTimeout: number;
  private readonly requestIdFactory: () => string;
  private readonly retry: RevKeenRetryOptions | undefined;
  private readonly random: () => number;
  private readonly sleep: (
    milliseconds: number,
    signal?: AbortSignal,
  ) => Promise<void>;
  private readonly responseContexts = new WeakMap<Response, TransportContext>();

  constructor(options: RevKeenTransportOptions = {}) {
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.connectTimeout = positiveTimeout(
      options.connectTimeout ?? DEFAULT_CONNECT_TIMEOUT_MS,
      "connectTimeout",
    );
    this.readTimeout = positiveTimeout(
      options.readTimeout ?? DEFAULT_READ_TIMEOUT_MS,
      "readTimeout",
    );
    this.requestIdFactory = options.requestIdFactory ?? defaultRequestId;
    this.retry = options.retry;
    resolveRetryOptions(this.retry, undefined);
    this.random = options.random ?? Math.random;
    this.sleep = options.sleep ?? defaultSleep;
  }

  getErrorContext(
    response: Response | undefined,
    request?: Request,
  ): RevKeenErrorContext {
    const stored = response ? this.responseContexts.get(response) : undefined;
    if (stored) {
      return stored;
    }
    const requestId =
      response?.headers.get("x-request-id") ??
      response?.headers.get("x-correlation-id") ??
      request?.headers.get("x-request-id") ??
      null;
    const traceId =
      response?.headers.get("x-trace-id") ??
      request?.headers.get("x-trace-id") ??
      null;
    return {
      requestId,
      traceId,
      correlationId: requestId,
      attemptCount: 1,
      rateLimit: parseRevKeenRateLimitMetadata(response?.headers),
    };
  }

  async execute<T>(
    operation: RevKeenOperationMetadata,
    requestOptions: RevKeenRequestOptions | undefined,
    invoke: (request: RevKeenTransportRequest) => Promise<T>,
  ): Promise<T> {
    const idempotencyKey = requestOptions?.idempotencyKey;
    if (operation.requiresIdempotencyKey && !idempotencyKey) {
      throw new RevKeenError(
        `${operation.operationId} requires requestOptions.idempotencyKey; the SDK never generates one.`,
      );
    }
    if (idempotencyKey && !IDEMPOTENCY_KEY_PATTERN.test(idempotencyKey)) {
      throw new RevKeenError(
        "Invalid idempotency key. Use a UUID or 8-64 URL-safe letters, digits, underscores, and hyphens.",
      );
    }

    const requestId = requestOptions?.requestId ?? this.requestIdFactory();
    if (!UUID_PATTERN.test(requestId)) {
      throw new RevKeenError(
        "requestId and requestIdFactory values must be UUIDs",
      );
    }
    const context: TransportContext = {
      requestId,
      traceId: requestId,
      correlationId: requestId,
      attemptCount: 1,
    };
    const headers: Record<string, string> = {
      ...sdkClientHeaders(),
      "x-request-id": requestId,
      "x-trace-id": requestId,
    };
    if (idempotencyKey) {
      headers["Idempotency-Key"] = idempotencyKey;
    }

    return invoke({
      fetch: (input, init) =>
        this.fetchWithRetry(input, init, operation, requestOptions, context),
      headers,
      signal: requestOptions?.signal,
    });
  }

  private isRetryEligible(
    operation: RevKeenOperationMetadata,
    requestOptions: RevKeenRequestOptions | undefined,
  ): boolean {
    if (operation.method === "GET") {
      return true;
    }
    return (
      operation.method === "POST" &&
      operation.idempotent === true &&
      Boolean(requestOptions?.idempotencyKey)
    );
  }

  private async fetchWithRetry(
    input: RequestInfo | URL,
    init: RequestInit | undefined,
    operation: RevKeenOperationMetadata,
    requestOptions: RevKeenRequestOptions | undefined,
    context: TransportContext,
  ): Promise<Response> {
    const original = new Request(input, init);
    const userSignal = requestOptions?.signal ?? original.signal;
    const eligible = this.isRetryEligible(operation, requestOptions);
    const retry = resolveRetryOptions(this.retry, requestOptions?.retry);
    const maximumAttempts = eligible ? retry.maxAttempts : 1;
    const connectTimeout = positiveTimeout(
      requestOptions?.connectTimeout ?? this.connectTimeout,
      "connectTimeout",
    );
    const readTimeout = positiveTimeout(
      requestOptions?.readTimeout ?? this.readTimeout,
      "readTimeout",
    );

    for (let attempt = 1; attempt <= maximumAttempts; attempt += 1) {
      context.attemptCount = attempt;
      if (userSignal?.aborted) {
        throw new RevKeenError("Request cancelled", context);
      }

      try {
        const response = await this.withTimeout(
          "connect",
          connectTimeout,
          userSignal,
          context,
          (signal) =>
            this.fetchImpl(
              new Request(original.clone() as unknown as RequestInfo, {
                signal,
              }),
            ),
        );
        const currentContext = responseContext(response, context);
        Object.assign(context, currentContext);

        if (
          attempt < maximumAttempts &&
          RETRYABLE_STATUSES.has(response.status)
        ) {
          await response.body?.cancel();
          await this.waitBeforeRetry(attempt, retry, response, userSignal);
          continue;
        }

        try {
          const buffered = await this.bufferResponse(
            response,
            original.method,
            readTimeout,
            userSignal,
            context,
          );
          this.responseContexts.set(buffered, { ...context });
          return buffered;
        } catch (error) {
          if (
            error instanceof RevKeenTimeoutError &&
            attempt < maximumAttempts
          ) {
            await this.waitBeforeRetry(attempt, retry, undefined, userSignal);
            continue;
          }
          throw error;
        }
      } catch (error) {
        if (error instanceof RevKeenTimeoutError) {
          if (attempt < maximumAttempts) {
            await this.waitBeforeRetry(attempt, retry, undefined, userSignal);
            continue;
          }
          throw error;
        }
        if (
          userSignal?.aborted ||
          (error instanceof Error && error.name === "AbortError")
        ) {
          throw new RevKeenError("Request cancelled", context);
        }
        if (attempt < maximumAttempts) {
          await this.waitBeforeRetry(attempt, retry, undefined, userSignal);
          continue;
        }
        const message =
          error instanceof Error ? error.message : "Unknown network failure";
        throw new RevKeenError(`Network error: ${message}`, context);
      }
    }

    throw new RevKeenError("Request failed without a final response", context);
  }

  private async bufferResponse(
    response: Response,
    method: string,
    timeout: number,
    userSignal: AbortSignal | undefined,
    context: TransportContext,
  ): Promise<Response> {
    if (
      method === "HEAD" ||
      response.status === 204 ||
      response.body === null
    ) {
      return response;
    }
    const body = await this.withTimeout(
      "read",
      timeout,
      userSignal,
      context,
      () => response.arrayBuffer(),
    );
    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  private async withTimeout<T>(
    phase: "connect" | "read",
    milliseconds: number,
    userSignal: AbortSignal | undefined,
    context: TransportContext,
    operation: (signal: AbortSignal) => Promise<T>,
  ): Promise<T> {
    const timeoutController = new AbortController();
    const signals = userSignal
      ? [userSignal, timeoutController.signal]
      : [timeoutController.signal];
    const signal = AbortSignal.any(signals);
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    try {
      return await Promise.race([
        operation(signal),
        new Promise<never>((_, reject) => {
          timeoutId = setTimeout(() => {
            timeoutController.abort();
            reject(
              new RevKeenTimeoutError(
                `Request ${phase} timed out after ${milliseconds}ms`,
                phase,
                context,
              ),
            );
          }, milliseconds);
        }),
      ]);
    } finally {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    }
  }

  private waitBeforeRetry(
    attempt: number,
    retry: ResolvedRetryOptions,
    response?: Response,
    signal?: AbortSignal,
  ): Promise<void> {
    const ceiling = Math.min(
      retry.maxDelay,
      retry.initialDelay * 2 ** (attempt - 1),
    );
    const jitter = Math.floor(this.random() * ceiling);
    const retryAfter = this.parseRetryAfter(
      response?.headers.get("retry-after"),
      retry.maxDelay,
    );
    return this.sleep(
      Math.min(retry.maxDelay, Math.max(jitter, retryAfter)),
      signal,
    );
  }

  private parseRetryAfter(
    value: string | null | undefined,
    maximum: number,
  ): number {
    if (!value) return 0;
    const seconds = Number(value);
    if (Number.isFinite(seconds) && seconds >= 0) {
      return Math.min(maximum, Math.round(seconds * 1_000));
    }
    const date = Date.parse(value);
    if (!Number.isFinite(date)) return 0;
    return Math.min(maximum, Math.max(0, date - Date.now()));
  }
}
