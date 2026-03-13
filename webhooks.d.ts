/**
 * RevKeen Webhook Utilities for TypeScript/Node.js SDK
 *
 * This file is automatically bundled with the generated SDK.
 * It provides webhook signature verification and event construction.
 *
 * ## Webhook Headers
 *
 * RevKeen sends the following headers with each webhook delivery:
 * - `X-Revkeen-Signature`: HMAC signature (format: `t=xxx,v1=yyy`)
 * - `X-Revkeen-Version`: API version date (e.g., `2026-01-01`)
 * - `X-Revkeen-Account`: Merchant account ID
 * - `X-Revkeen-Event-Id`: Unique event identifier
 * - `X-Revkeen-Timestamp`: Unix timestamp
 *
 * @example Basic usage
 * ```typescript
 * import { RevKeen, constructEvent, WebhookSignatureVerificationError } from '@revkeen/sdk';
 *
 * // In your webhook endpoint
 * app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
 *   const signature = req.headers['x-revkeen-signature'] as string;
 *
 *   try {
 *     const event = constructEvent(req.body.toString(), signature, webhookSecret);
 *
 *     switch (event.type) {
 *       case 'invoice.paid':
 *         const invoice = event.data.object;
 *         // Handle invoice paid...
 *         break;
 *       case 'subscription.created':
 *         const subscription = event.data.object;
 *         // Handle subscription created...
 *         break;
 *     }
 *
 *     res.json({ received: true });
 *   } catch (error) {
 *     if (error instanceof WebhookSignatureVerificationError) {
 *       console.error('Webhook signature verification failed:', error.message);
 *       return res.status(400).json({ error: 'Invalid signature' });
 *     }
 *     throw error;
 *   }
 * });
 * ```
 *
 * @example With version headers (recommended)
 * ```typescript
 * import {
 *   extractWebhookHeaders,
 *   constructEventWithHeaders,
 *   WebhookSignatureVerificationError
 * } from '@revkeen/sdk';
 *
 * app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
 *   try {
 *     const headers = extractWebhookHeaders(req.headers);
 *     const event = constructEventWithHeaders(req.body.toString(), headers, webhookSecret);
 *
 *     console.log('API Version:', event.api_version);
 *     console.log('Account:', event.account);
 *
 *     // Handle the event...
 *     res.json({ received: true });
 *   } catch (error) {
 *     if (error instanceof WebhookSignatureVerificationError) {
 *       return res.status(400).json({ error: 'Invalid signature' });
 *     }
 *     throw error;
 *   }
 * });
 * ```
 */
/**
 * Default tolerance for timestamp validation (5 minutes)
 */
export declare const WEBHOOK_TOLERANCE_IN_SECONDS = 300;
/**
 * All possible webhook event types
 */
export type WebhookEventType = "invoice.created" | "invoice.updated" | "invoice.finalized" | "invoice.sent" | "invoice.paid" | "invoice.voided" | "invoice.payment_failed" | "invoice.overdue" | "subscription.created" | "subscription.updated" | "subscription.renewed" | "subscription.canceled" | "subscription.paused" | "subscription.resumed" | "subscription.trial_ending" | "subscription.trial_ended" | "subscription.past_due" | "payment.succeeded" | "payment.failed" | "payment.refunded" | "payment.disputed" | "payment.captured" | "customer.created" | "customer.updated" | "customer.deleted" | "customer.payment_method.attached" | "customer.payment_method.detached" | "checkout.session.completed" | "checkout.session.expired" | "checkout.session.async_payment_succeeded" | "checkout.session.async_payment_failed" | "order.created" | "order.updated" | "order.paid" | "order.canceled" | "order.fulfilled" | "plan.created" | "plan.updated" | "plan.deleted" | "product.created" | "product.updated" | "product.deleted" | "price.created" | "price.updated" | "price.deleted";
/**
 * Webhook event data structure
 */
export interface WebhookEventData<T = unknown> {
    /** The object that triggered the event */
    object: T;
    /** Previous attributes if this is an update event */
    previous_attributes?: Partial<T>;
}
/**
 * Webhook event structure (Stripe-compatible)
 */
export interface WebhookEvent<T = unknown> {
    /** Unique event identifier */
    id: string;
    /** Object type, always "event" */
    object: "event";
    /** Event type */
    type: WebhookEventType;
    /** Unix timestamp when the event was created */
    created: number;
    /** Whether this is a live mode event */
    livemode: boolean;
    /** API version used to render the event data */
    api_version: string;
    /** Merchant account ID */
    account?: string;
    /** Event data */
    data: WebhookEventData<T>;
    /** Request information */
    request?: {
        id?: string;
        idempotency_key?: string;
    };
}
/**
 * Options for webhook signature verification
 */
export interface WebhookVerifyOptions {
    /** The raw request body as a string */
    payload: string;
    /** The signature header value (revkeen-signature) */
    signature: string;
    /** Your webhook secret (starts with rk_wh_) */
    secret: string;
    /** Tolerance in seconds for timestamp validation (default: 300) */
    tolerance?: number;
}
/**
 * Webhook headers sent with each delivery
 */
export interface WebhookHeaders {
    /** X-Revkeen-Signature: HMAC signature (t=xxx,v1=yyy) */
    signature: string;
    /** X-Revkeen-Version: API version date (e.g., "2026-01-01") */
    version?: string;
    /** X-Revkeen-Account: Merchant account ID */
    account?: string;
    /** X-Revkeen-Event-Id: Unique event identifier */
    eventId?: string;
    /** X-Revkeen-Timestamp: Unix timestamp */
    timestamp?: string;
}
/**
 * Extract webhook headers from request headers
 * Works with both Request objects and plain header objects
 *
 * @example
 * ```typescript
 * // Express.js
 * const headers = extractWebhookHeaders({
 *   'x-revkeen-signature': req.headers['x-revkeen-signature'],
 *   'x-revkeen-version': req.headers['x-revkeen-version'],
 *   'x-revkeen-account': req.headers['x-revkeen-account'],
 *   'x-revkeen-event-id': req.headers['x-revkeen-event-id'],
 *   'x-revkeen-timestamp': req.headers['x-revkeen-timestamp'],
 * });
 *
 * // Next.js / Web Request
 * const headers = extractWebhookHeaders({
 *   'x-revkeen-signature': request.headers.get('x-revkeen-signature'),
 *   'x-revkeen-version': request.headers.get('x-revkeen-version'),
 *   'x-revkeen-account': request.headers.get('x-revkeen-account'),
 *   'x-revkeen-event-id': request.headers.get('x-revkeen-event-id'),
 *   'x-revkeen-timestamp': request.headers.get('x-revkeen-timestamp'),
 * });
 * ```
 */
export declare function extractWebhookHeaders(headers: Record<string, string | string[] | null | undefined>): WebhookHeaders;
/**
 * Error thrown when webhook signature verification fails
 */
export declare class WebhookSignatureVerificationError extends Error {
    constructor(message: string);
}
/**
 * Verifies a webhook signature and returns whether it's valid
 *
 * @param options - Verification options
 * @returns true if the signature is valid
 * @throws WebhookSignatureVerificationError if verification fails
 */
export declare function verifySignature(options: WebhookVerifyOptions): boolean;
/**
 * Constructs and verifies a webhook event from a raw payload
 *
 * @param payload - The raw request body as a string
 * @param signature - The signature header value (revkeen-signature header)
 * @param secret - Your webhook secret (starts with rk_wh_)
 * @param options - Additional options
 * @returns The verified webhook event
 * @throws WebhookSignatureVerificationError if verification fails
 *
 * @example
 * ```typescript
 * // Express.js example
 * app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
 *   const event = constructEvent(
 *     req.body.toString(),
 *     req.headers['revkeen-signature'] as string,
 *     process.env.REVKEEN_WEBHOOK_SECRET!
 *   );
 *
 *   console.log('Received event:', event.type);
 *   res.json({ received: true });
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Next.js API route example
 * export async function POST(req: Request) {
 *   const body = await req.text();
 *   const signature = req.headers.get('revkeen-signature')!;
 *
 *   const event = constructEvent(body, signature, process.env.REVKEEN_WEBHOOK_SECRET!);
 *
 *   // Handle the event...
 *   return Response.json({ received: true });
 * }
 * ```
 */
export declare function constructEvent(payload: string, signature: string, secret: string, options?: {
    tolerance?: number;
}): WebhookEvent;
/**
 * Constructs and verifies a webhook event with header metadata
 *
 * This function extracts version information from headers and merges it
 * with the event payload for a richer event object.
 *
 * @param payload - The raw request body as a string
 * @param headers - Webhook headers extracted from the request
 * @param secret - Your webhook secret (starts with rk_wh_)
 * @param options - Additional options
 * @returns The verified webhook event with header metadata
 * @throws WebhookSignatureVerificationError if verification fails
 *
 * @example
 * ```typescript
 * // Express.js example
 * app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
 *   const headers = extractWebhookHeaders(req.headers);
 *   const event = constructEventWithHeaders(
 *     req.body.toString(),
 *     headers,
 *     process.env.REVKEEN_WEBHOOK_SECRET!
 *   );
 *
 *   console.log('API Version:', event.api_version);
 *   console.log('Account:', event.account);
 *   res.json({ received: true });
 * });
 * ```
 */
export declare function constructEventWithHeaders(payload: string, headers: WebhookHeaders, secret: string, options?: {
    tolerance?: number;
}): WebhookEvent;
/**
 * Webhook utilities namespace for SDK integration
 */
export declare const webhooks: {
    /**
     * Constructs and verifies a webhook event
     * @see constructEvent
     */
    constructEvent: typeof constructEvent;
    /**
     * Constructs and verifies a webhook event with header metadata
     * @see constructEventWithHeaders
     */
    constructEventWithHeaders: typeof constructEventWithHeaders;
    /**
     * Extract webhook headers from request
     * @see extractWebhookHeaders
     */
    extractWebhookHeaders: typeof extractWebhookHeaders;
    /**
     * Verifies a webhook signature without parsing the payload
     * @see verifySignature
     */
    verifySignature: typeof verifySignature;
    /**
     * Default timestamp tolerance in seconds
     */
    TOLERANCE_IN_SECONDS: number;
};
export default webhooks;
//# sourceMappingURL=webhooks.d.ts.map