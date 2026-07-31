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

// src/webhooks.ts
var webhooks_exports = {};
__export(webhooks_exports, {
  WEBHOOK_TOLERANCE_IN_SECONDS: () => WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError: () => WebhookSignatureVerificationError,
  constructEvent: () => constructEvent,
  constructEventWithHeaders: () => constructEventWithHeaders,
  default: () => webhooks_default,
  extractWebhookHeaders: () => extractWebhookHeaders,
  verifySignature: () => verifySignature,
  webhooks: () => webhooks
});
module.exports = __toCommonJS(webhooks_exports);
var import_crypto = require("crypto");
var WEBHOOK_TOLERANCE_IN_SECONDS = 300;
function extractWebhookHeaders(headers) {
  const getHeader = (name) => {
    const value = headers[name] || headers[name.toLowerCase()];
    if (Array.isArray(value)) return value[0];
    return value || void 0;
  };
  const signature = getHeader("X-Revkeen-Signature") || getHeader("x-rk-signature");
  if (!signature) {
    throw new WebhookSignatureVerificationError(
      "Missing webhook signature header (X-Revkeen-Signature or x-rk-signature)"
    );
  }
  return {
    signature,
    version: getHeader("X-Revkeen-Version"),
    account: getHeader("X-Revkeen-Account"),
    eventId: getHeader("X-Revkeen-Event-Id"),
    timestamp: getHeader("X-Revkeen-Timestamp")
  };
}
var WebhookSignatureVerificationError = class _WebhookSignatureVerificationError extends Error {
  constructor(message) {
    super(message);
    this.name = "WebhookSignatureVerificationError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _WebhookSignatureVerificationError);
    }
  }
};
function parseSignatureHeader(header) {
  const parts = header.split(",");
  let timestamp;
  const signatures = [];
  for (const part of parts) {
    const [key, value] = part.split("=");
    if (key === "t") {
      timestamp = parseInt(value, 10);
    } else if (key === "v1") {
      signatures.push(value);
    }
  }
  if (!timestamp || signatures.length === 0) {
    throw new WebhookSignatureVerificationError(
      "Invalid signature header: missing timestamp or signature"
    );
  }
  return { timestamp, signatures };
}
function verifySignature(options) {
  const {
    payload,
    signature,
    secret,
    tolerance = WEBHOOK_TOLERANCE_IN_SECONDS
  } = options;
  if (!signature) {
    throw new WebhookSignatureVerificationError(
      "Missing webhook signature header"
    );
  }
  const parsed = parseSignatureHeader(signature);
  const currentTime = Math.floor(Date.now() / 1e3);
  const timeDiff = Math.abs(currentTime - parsed.timestamp);
  if (timeDiff > tolerance) {
    throw new WebhookSignatureVerificationError(
      `Timestamp outside tolerance window (${timeDiff}s > ${tolerance}s). The webhook might be a replay attack, or your server's clock might be out of sync.`
    );
  }
  const signedPayload = `${parsed.timestamp}.${payload}`;
  const expectedSignature = (0, import_crypto.createHmac)("sha256", secret).update(signedPayload, "utf8").digest("hex");
  const signatureValid = parsed.signatures.some((sig) => {
    try {
      const sigBuffer = Buffer.from(sig, "hex");
      const expectedBuffer = Buffer.from(expectedSignature, "hex");
      if (sigBuffer.length !== expectedBuffer.length) {
        return false;
      }
      return (0, import_crypto.timingSafeEqual)(sigBuffer, expectedBuffer);
    } catch {
      return false;
    }
  });
  if (!signatureValid) {
    throw new WebhookSignatureVerificationError(
      "Signature verification failed. Ensure you're using the correct webhook secret and the raw request body."
    );
  }
  return true;
}
function constructEvent(payload, signature, secret, options) {
  verifySignature({
    payload,
    signature,
    secret,
    tolerance: options?.tolerance
  });
  try {
    const event = JSON.parse(payload);
    if (!event.id || !event.type || !event.data) {
      throw new Error("Invalid event structure");
    }
    return event;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new WebhookSignatureVerificationError(
        "Invalid JSON payload: " + error.message
      );
    }
    throw error;
  }
}
function constructEventWithHeaders(payload, headers, secret, options) {
  verifySignature({
    payload,
    signature: headers.signature,
    secret,
    tolerance: options?.tolerance
  });
  try {
    const event = JSON.parse(payload);
    if (!event.id || !event.type || !event.data) {
      throw new Error("Invalid event structure");
    }
    return {
      ...event,
      api_version: event.api_version || headers.version || "unknown",
      account: event.account || headers.account
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new WebhookSignatureVerificationError(
        "Invalid JSON payload: " + error.message
      );
    }
    throw error;
  }
}
var webhooks = {
  /**
   * Constructs and verifies a webhook event
   * @see constructEvent
   */
  constructEvent,
  /**
   * Constructs and verifies a webhook event with header metadata
   * @see constructEventWithHeaders
   */
  constructEventWithHeaders,
  /**
   * Extract webhook headers from request
   * @see extractWebhookHeaders
   */
  extractWebhookHeaders,
  /**
   * Verifies a webhook signature without parsing the payload
   * @see verifySignature
   */
  verifySignature,
  /**
   * Default timestamp tolerance in seconds
   */
  TOLERANCE_IN_SECONDS: WEBHOOK_TOLERANCE_IN_SECONDS
};
var webhooks_default = webhooks;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  constructEvent,
  constructEventWithHeaders,
  extractWebhookHeaders,
  verifySignature,
  webhooks
});
//# sourceMappingURL=webhooks.js.map