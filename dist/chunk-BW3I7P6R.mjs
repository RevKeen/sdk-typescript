// src/core/errors.ts
var ABSENT_RATE_LIMIT = Object.freeze({
  limit: null,
  remaining: null,
  resetAt: null,
  retryAfterSeconds: null
});
function emptyRevKeenRateLimitMetadata() {
  return ABSENT_RATE_LIMIT;
}
function headerValue(headers, name) {
  const raw = headers?.get(name);
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed : null;
}
function nonNegativeInteger(value) {
  if (value === null || !/^\d+$/.test(value)) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}
function parseRetryAfterSeconds(value, now) {
  if (value === null) return null;
  const seconds = nonNegativeInteger(value);
  if (seconds !== null) return seconds;
  const date = Date.parse(value);
  if (!Number.isFinite(date)) return null;
  return Math.max(0, Math.ceil((date - now) / 1e3));
}
function parseRevKeenRateLimitMetadata(headers, now = Date.now()) {
  if (!headers) return ABSENT_RATE_LIMIT;
  const resetSeconds = nonNegativeInteger(
    headerValue(headers, "x-ratelimit-reset")
  );
  const metadata = {
    limit: nonNegativeInteger(headerValue(headers, "x-ratelimit-limit")),
    remaining: nonNegativeInteger(
      headerValue(headers, "x-ratelimit-remaining")
    ),
    // X-RateLimit-Reset is UNIX seconds, never milliseconds.
    resetAt: resetSeconds === null ? null : new Date(resetSeconds * 1e3),
    retryAfterSeconds: parseRetryAfterSeconds(
      headerValue(headers, "retry-after"),
      now
    )
  };
  return metadata.limit === null && metadata.remaining === null && metadata.resetAt === null && metadata.retryAfterSeconds === null ? ABSENT_RATE_LIMIT : metadata;
}
var RevKeenError = class extends Error {
  requestId;
  traceId;
  correlationId;
  attemptCount;
  /**
   * Rate-limit headers observed on the response, if any. Always an object, so
   * `error.rateLimit.retryAfterSeconds` is safe to read on every failure.
   */
  rateLimit;
  constructor(message, context = {}) {
    super(message);
    this.name = "RevKeenError";
    this.requestId = context.requestId ?? null;
    this.traceId = context.traceId ?? null;
    this.correlationId = context.correlationId ?? context.requestId ?? null;
    this.attemptCount = context.attemptCount ?? 1;
    this.rateLimit = context.rateLimit ?? ABSENT_RATE_LIMIT;
  }
};
var RevKeenAPIError = class extends RevKeenError {
  constructor(status, message, body, context = {}, metadata = {}) {
    super(message, context);
    this.status = status;
    this.body = body;
    this.name = "RevKeenAPIError";
    this.code = nonEmptyString(metadata.code) ?? "unknown_error";
    this.machineCode = this.code;
    this.rawBody = body;
    this.type = nonEmptyString(metadata.type);
    this.param = nonEmptyString(metadata.param);
    this.details = metadata.details;
  }
  code;
  machineCode;
  rawBody;
  type;
  param;
  details;
};
var IDEMPOTENCY_CONFLICT_CODES = /* @__PURE__ */ new Set([
  "idempotency_conflict",
  "idempotency_key_conflict",
  "idempotency_key_reused",
  "idempotency_key_mismatch",
  "idempotency_mismatch"
]);
var RevKeenAuthenticationError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenAuthenticationError";
  }
};
var RevKeenAuthorizationError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenAuthorizationError";
  }
};
var RevKeenValidationError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenValidationError";
  }
};
var RevKeenNotFoundError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenNotFoundError";
  }
};
var RevKeenRateLimitError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenRateLimitError";
  }
};
var RevKeenConflictError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenConflictError";
  }
};
var RevKeenIdempotencyConflictError = class extends RevKeenConflictError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenIdempotencyConflictError";
  }
};
var RevKeenServerError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenServerError";
  }
};
var RevKeenTimeoutError = class extends RevKeenError {
  constructor(message, phase, context = {}) {
    super(message, context);
    this.phase = phase;
    this.name = "RevKeenTimeoutError";
  }
};
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function nonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}
function property(record, name) {
  return Object.prototype.hasOwnProperty.call(record, name) ? record[name] : void 0;
}
function normalizeRevKeenAPIError(body, fallbackMessage) {
  const envelope = isRecord(body) ? body : {};
  const nestedError = isRecord(envelope.error) ? envelope.error : null;
  const source = nestedError ?? envelope;
  const flatError = nonEmptyString(envelope.error);
  return {
    code: nonEmptyString(property(source, "code")) ?? nonEmptyString(property(envelope, "code")) ?? "unknown_error",
    message: nonEmptyString(property(source, "message")) ?? flatError ?? nonEmptyString(property(envelope, "message")) ?? nonEmptyString(body) ?? nonEmptyString(fallbackMessage) ?? "RevKeen API request failed",
    type: nonEmptyString(property(source, "type")) ?? nonEmptyString(property(envelope, "type")),
    param: nonEmptyString(property(source, "param")) ?? nonEmptyString(property(envelope, "param")),
    details: Object.prototype.hasOwnProperty.call(source, "details") ? source.details : property(envelope, "details")
  };
}
function createRevKeenAPIError(status, body, fallbackMessage, context = {}) {
  const normalized = normalizeRevKeenAPIError(body, fallbackMessage);
  const args = [
    status,
    normalized.message,
    body,
    context,
    normalized
  ];
  if (status === 401) return new RevKeenAuthenticationError(...args);
  if (status === 403) return new RevKeenAuthorizationError(...args);
  if (status === 400 || status === 422)
    return new RevKeenValidationError(...args);
  if (status === 404) return new RevKeenNotFoundError(...args);
  if (status === 429) return new RevKeenRateLimitError(...args);
  if (status === 409) {
    return IDEMPOTENCY_CONFLICT_CODES.has(normalized.code.toLowerCase()) ? new RevKeenIdempotencyConflictError(...args) : new RevKeenConflictError(...args);
  }
  if (status >= 500) return new RevKeenServerError(...args);
  return new RevKeenAPIError(...args);
}

// src/core/oauth.ts
var DEFAULT_TOKEN_ENDPOINT = "https://api.revkeen.com/api/auth/oauth2/token";
var PRE_EXPIRY_BUFFER_MS = 6e4;
var OAuthTokenManager = class {
  config;
  cachedToken = null;
  inflightRequest = null;
  constructor(config) {
    this.config = {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      tokenEndpoint: config.tokenEndpoint || DEFAULT_TOKEN_ENDPOINT,
      scopes: config.scopes
    };
  }
  async getToken() {
    if (this.cachedToken && Date.now() < this.cachedToken.expiresAt - PRE_EXPIRY_BUFFER_MS) {
      return this.cachedToken.accessToken;
    }
    if (this.inflightRequest) {
      return this.inflightRequest;
    }
    this.inflightRequest = this.fetchToken();
    try {
      return await this.inflightRequest;
    } finally {
      this.inflightRequest = null;
    }
  }
  async fetchToken() {
    if (this.cachedToken?.refreshToken) {
      try {
        return await this.requestToken("refresh_token");
      } catch {
      }
    }
    return await this.requestToken("client_credentials");
  }
  async requestToken(grantType) {
    const body = new URLSearchParams();
    body.set("grant_type", grantType);
    if (grantType === "client_credentials") {
      body.set("client_id", this.config.clientId);
      body.set("client_secret", this.config.clientSecret);
      if (this.config.scopes?.length) {
        body.set("scope", this.config.scopes.join(" "));
      }
    } else if (grantType === "refresh_token" && this.cachedToken?.refreshToken) {
      body.set("refresh_token", this.cachedToken.refreshToken);
      body.set("client_id", this.config.clientId);
      body.set("client_secret", this.config.clientSecret);
    }
    const res = await fetch(this.config.tokenEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    });
    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      throw new RevKeenError(
        `OAuth token request failed (${res.status}): ${errorBody || res.statusText}`
      );
    }
    const data = await res.json();
    this.cachedToken = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? this.cachedToken?.refreshToken,
      expiresAt: Date.now() + data.expires_in * 1e3
    };
    return data.access_token;
  }
};

// src/core/authentication.ts
var SECRET_KEY_PREFIXES = ["rk_live_", "rk_sandbox_"];
var PUBLISHABLE_KEY_PREFIXES = ["rk_pk_live_", "rk_pk_sandbox_"];
function classifyApiKey(key) {
  if (PUBLISHABLE_KEY_PREFIXES.some(
    (prefix) => key.startsWith(prefix) && key.length > prefix.length
  )) {
    return "publishable";
  }
  if (SECRET_KEY_PREFIXES.some(
    (prefix) => key.startsWith(prefix) && key.length > prefix.length
  )) {
    return "secret";
  }
  return "unknown";
}
function assertSecretKey(key) {
  const kind = classifyApiKey(key);
  if (kind === "publishable") {
    throw new RevKeenError(
      "Publishable keys must be used with RevKeenBrowserClient from '@revkeen/sdk/browser'."
    );
  }
  if (kind !== "secret") {
    throw new RevKeenError(
      "Invalid RevKeen secret key. Expected an rk_live_ or rk_sandbox_ key."
    );
  }
}
function assertPublishableKey(key) {
  if (classifyApiKey(key) !== "publishable") {
    throw new RevKeenError(
      "Invalid RevKeen publishable key. Expected an rk_pk_live_ or rk_pk_sandbox_ key."
    );
  }
}

export {
  emptyRevKeenRateLimitMetadata,
  parseRevKeenRateLimitMetadata,
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
  normalizeRevKeenAPIError,
  createRevKeenAPIError,
  OAuthTokenManager,
  classifyApiKey,
  assertSecretKey,
  assertPublishableKey
};
//# sourceMappingURL=chunk-BW3I7P6R.mjs.map