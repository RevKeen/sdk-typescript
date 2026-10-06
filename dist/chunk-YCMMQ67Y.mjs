// src/webhooks.ts
import { createHmac, timingSafeEqual } from "crypto";
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
      "missing_signature",
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
  code;
  constructor(code, message) {
    super(message);
    this.name = "WebhookSignatureVerificationError";
    this.code = code;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _WebhookSignatureVerificationError);
    }
  }
};
function parseSignatureHeader(header) {
  if (!header) {
    throw new WebhookSignatureVerificationError(
      "missing_signature",
      "Missing webhook signature header"
    );
  }
  const parts = header.split(",");
  let timestampText;
  const signatures = [];
  for (const part of parts) {
    const separatorIndex = part.indexOf("=");
    if (separatorIndex <= 0 || separatorIndex === part.length - 1) {
      throw new WebhookSignatureVerificationError(
        "invalid_signature_header",
        "Invalid signature header format"
      );
    }
    const key = part.slice(0, separatorIndex);
    const value = part.slice(separatorIndex + 1);
    if (key === "t") {
      if (timestampText !== void 0) {
        throw new WebhookSignatureVerificationError(
          "invalid_signature_header",
          "Invalid signature header: multiple timestamps"
        );
      }
      timestampText = value;
    } else if (key === "v1") {
      signatures.push(value);
    }
  }
  if (timestampText === void 0 || signatures.length === 0) {
    throw new WebhookSignatureVerificationError(
      "invalid_signature_header",
      "Invalid signature header: missing timestamp or signature"
    );
  }
  if (!/^[0-9]+$/.test(timestampText)) {
    throw new WebhookSignatureVerificationError(
      "invalid_timestamp",
      "Invalid signature header timestamp"
    );
  }
  const timestamp = Number(timestampText);
  if (!Number.isSafeInteger(timestamp) || timestamp <= 0) {
    throw new WebhookSignatureVerificationError(
      "invalid_timestamp",
      "Invalid signature header timestamp"
    );
  }
  if (signatures.some((signature) => !/^[0-9a-fA-F]{64}$/.test(signature))) {
    throw new WebhookSignatureVerificationError(
      "invalid_signature_encoding",
      "Webhook signatures must be 64 hexadecimal characters"
    );
  }
  return { timestamp, signatures };
}
function payloadToText(payload) {
  return typeof payload === "string" ? payload : Buffer.from(payload).toString("utf8");
}
function verifySignature(options) {
  const {
    payload,
    signature,
    secret,
    tolerance = WEBHOOK_TOLERANCE_IN_SECONDS
  } = options;
  if (!Number.isSafeInteger(tolerance) || tolerance < 0) {
    throw new WebhookSignatureVerificationError(
      "invalid_timestamp",
      "Webhook timestamp tolerance must be a non-negative integer"
    );
  }
  const parsed = parseSignatureHeader(signature);
  const currentTime = Math.floor(Date.now() / 1e3);
  const timeDiff = Math.abs(currentTime - parsed.timestamp);
  if (timeDiff > tolerance) {
    throw new WebhookSignatureVerificationError(
      "timestamp_outside_tolerance",
      `Timestamp outside tolerance window (${timeDiff}s > ${tolerance}s). The webhook might be a replay attack, or your server's clock might be out of sync.`
    );
  }
  const hmac = createHmac("sha256", secret).update(
    `${parsed.timestamp}.`,
    "utf8"
  );
  if (typeof payload === "string") hmac.update(payload, "utf8");
  else hmac.update(payload);
  const expectedSignature = hmac.digest();
  const signatureValid = parsed.signatures.some((sig) => {
    try {
      const sigBuffer = Buffer.from(sig, "hex");
      return sigBuffer.length === expectedSignature.length && timingSafeEqual(sigBuffer, expectedSignature);
    } catch {
      return false;
    }
  });
  if (!signatureValid) {
    throw new WebhookSignatureVerificationError(
      "signature_mismatch",
      "Signature verification failed. Ensure you're using the correct webhook secret and the raw request body."
    );
  }
}
function constructEvent(payload, signature, secret, options) {
  verifySignature({
    payload,
    signature,
    secret,
    tolerance: options?.tolerance
  });
  try {
    const event = JSON.parse(payloadToText(payload));
    if (!event.id || !event.type || !event.data) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
        "Invalid event structure"
      );
    }
    return event;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
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
    const event = JSON.parse(payloadToText(payload));
    if (!event.id || !event.type || !event.data) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
        "Invalid event structure"
      );
    }
    return {
      ...event,
      api_version: event.api_version || headers.version || "unknown",
      account: event.account || headers.account
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
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

export {
  WEBHOOK_TOLERANCE_IN_SECONDS,
  extractWebhookHeaders,
  WebhookSignatureVerificationError,
  verifySignature,
  constructEvent,
  constructEventWithHeaders,
  webhooks,
  webhooks_default
};
//# sourceMappingURL=chunk-YCMMQ67Y.mjs.map