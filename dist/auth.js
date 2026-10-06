"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/auth.ts
var auth_exports = {};
__export(auth_exports, {
  OAuthTokenManager: () => OAuthTokenManager,
  classifyApiKey: () => classifyApiKey
});
module.exports = __toCommonJS(auth_exports);

// src/core/errors.ts
var ABSENT_RATE_LIMIT = Object.freeze({
  limit: null,
  remaining: null,
  resetAt: null,
  retryAfterSeconds: null
});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OAuthTokenManager,
  classifyApiKey
});
//# sourceMappingURL=auth.js.map