import { OAuthConfig } from './auth.js';
export { OAuthTokenManager } from './auth.js';
export { WEBHOOK_TOLERANCE_IN_SECONDS, WebhookHeaders, WebhookSignatureVerificationError, WebhookEvent as WebhookUtilityEvent, WebhookEventData as WebhookUtilityEventData, WebhookEventType as WebhookUtilityEventType, WebhookVerifyOptions, constructEvent, constructEventWithHeaders, extractWebhookHeaders, verifySignature, default as webhooks } from './webhooks.js';

type ClientOptions$1 = {
    baseUrl: 'https://staging-api.revkeen.com/v2' | 'https://api.revkeen.com/v2' | 'https://mock-api.revkeen.com/v2' | (string & {});
};
/**
 * The envelope for all webhook event deliveries. Contains the event type, timestamp, and the affected object in the data field.
 */
type WebhookEvent = {
    /**
     * Unique event identifier
     */
    id: string;
    /**
     * Event type using dot notation (e.g., `payment.succeeded`)
     */
    type: string;
    /**
     * Unix timestamp when the event was created
     */
    created: number;
    /**
     * Whether this event occurred in live mode
     */
    livemode?: boolean;
    /**
     * Event payload containing the affected object
     */
    data: {
        /**
         * The object that triggered the event (e.g., Payment, Invoice, Subscription)
         */
        object?: {
            [key: string]: unknown;
        };
        /**
         * Previous values of attributes that changed (for update events)
         */
        previous_attributes?: {
            [key: string]: unknown;
        };
    };
};
/**
 * Subscription billing terms for recurring invoices
 */
type SubscriptionTerms = {
    /**
     * How to collect payment for recurring invoices
     */
    collection_method: 'charge_automatically' | 'send_invoice';
    /**
     * When the subscription billing cycle starts
     */
    start_mode: 'when_paid' | 'on_invoice_date' | 'first_of_next_month' | 'specific_date';
    /**
     * Start date (ISO 8601) — required when start_mode is 'specific_date'
     */
    start_date?: string;
    /**
     * How the subscription duration is determined
     */
    duration_type: 'until_cancelled' | 'fixed_cycles' | 'end_date';
    /**
     * Number of billing cycles — required when duration_type is 'fixed_cycles'
     */
    duration_count?: number;
    /**
     * End date (ISO 8601) — required when duration_type is 'end_date'
     */
    end_date?: string;
    /**
     * Whether to charge the first cycle immediately or defer to the start date
     */
    first_payment_behavior: 'charge_first_cycle_now' | 'defer_first_cycle_to_start_date';
};
/**
 * A list of invoices matching the query filters.
 */
type InvoiceListResponse = {
    data: Array<Invoice>;
    requestId: string;
};
/**
 * The canonical record of what a customer owes or has paid. Invoices track line items, amounts, and payment status through their lifecycle: draft → open → finalized → paid.
 */
type Invoice = {
    /**
     * Unique invoice identifier
     */
    id: string;
    /**
     * ID of the customer this invoice belongs to
     */
    customer_uuid: string;
    /**
     * Merchant-assigned invoice number for reference
     */
    invoice_number?: string;
    /**
     * Total amount in minor units (cents)
     */
    total_minor: number;
    /**
     * Three-letter ISO 4217 currency code
     */
    currency: string;
    /**
     * Allowed payment methods for checkout sessions against this invoice
     */
    allowed_methods?: Array<string> | null;
    /**
     * Invoice lifecycle status: draft, open, finalized, paid, void, or uncollectible
     */
    status: string;
    /**
     * Payment due date in ISO 8601 format
     */
    due_date?: string | null;
    /**
     * Key-value pairs for custom fields
     */
    custom_fields?: {
        [key: string]: unknown;
    };
    /**
     * External integration source (e.g., practicehub, wodify)
     */
    external_source?: string | null;
    /**
     * Type within external system (e.g., appointment, membership)
     */
    external_type?: string | null;
    /**
     * ID from external system
     */
    external_id?: string | null;
    /**
     * Subscription billing terms for recurring invoices
     */
    subscription_terms?: {
        /**
         * How to collect payment for recurring invoices
         */
        collection_method: 'charge_automatically' | 'send_invoice';
        /**
         * When the subscription billing cycle starts
         */
        start_mode: 'when_paid' | 'on_invoice_date' | 'first_of_next_month' | 'specific_date';
        /**
         * Start date (ISO 8601) — required when start_mode is 'specific_date'
         */
        start_date?: string;
        /**
         * How the subscription duration is determined
         */
        duration_type: 'until_cancelled' | 'fixed_cycles' | 'end_date';
        /**
         * Number of billing cycles — required when duration_type is 'fixed_cycles'
         */
        duration_count?: number;
        /**
         * End date (ISO 8601) — required when duration_type is 'end_date'
         */
        end_date?: string;
        /**
         * Whether to charge the first cycle immediately or defer to the start date
         */
        first_payment_behavior: 'charge_first_cycle_now' | 'defer_first_cycle_to_start_date';
    } | null;
    /**
     * When the invoice was created (ISO 8601)
     */
    created_at: string;
    /**
     * When the invoice was last updated (ISO 8601)
     */
    updated_at: string;
};
/**
 * A single invoice object with request tracking metadata.
 */
type InvoiceResponse = {
    data: Invoice;
    requestId: string;
};
/**
 * Generic success confirmation for operations that do not return a resource.
 */
type SuccessResponse = {
    success: boolean;
};
type MarkDeliveredResponse = {
    success: boolean;
    marked_delivered: number;
    /**
     * Count of invoices that would match the default overdue ladder (day 1+) at the next hourly reminder cron. With anchor = NOW() on mark, this is typically 0 — the first reminder fires tomorrow.
     */
    reminder_eligible_now: number;
    /**
     * Count of invoices that will receive at least one reminder within 7 days of this attestation, assuming the default ladder [1, 7, 14, 30].
     */
    reminder_eligible_within_7_days: number;
    skipped: Array<{
        invoice_id: string;
        reason: string;
    }>;
    requestId: string;
};
/**
 * A list of invoice comments with extended author details.
 */
type InvoiceCommentListDetailResponse = {
    data: Array<InvoiceCommentDetail>;
    requestId: string;
};
/**
 * An invoice comment with extended author details including name, email, and avatar.
 */
type InvoiceCommentDetail = {
    id: string;
    invoiceId: string;
    userId: string | null;
    content: string;
    isInternal: boolean;
    createdAt: string;
    updatedAt: string | null;
};
/**
 * A single invoice comment with extended author details.
 */
type InvoiceCommentDetailResponse = {
    data: InvoiceCommentDetail;
    requestId: string;
};
/**
 * Response from an external system upsert, indicating whether the invoice was created or updated along with any warnings.
 */
type ExternalUpsertResponse = {
    data: Invoice;
    created: boolean;
    warnings?: Array<string>;
    requestId: string;
};
/**
 * Returned when an external upsert is skipped because the incoming timestamp is older than the stored version.
 */
type StaleUpdateResponse = {
    ignored: true;
    reason: 'stale_update';
    stored_timestamp: string;
    incoming_timestamp: string;
    requestId: string;
};
/**
 * Shows whether an invoice is eligible for a credit note and the maximum amount that can be credited.
 */
type CreditEligibilityResponse = {
    data: {
        /**
         * Whether a credit note can be issued for this invoice
         */
        can_credit: boolean;
        /**
         * Maximum amount that can be credited in minor units
         */
        max_creditable_minor: number;
        /**
         * Total amount already credited against this invoice
         */
        total_credited_minor: number;
        /**
         * Original invoice total in minor units
         */
        invoice_total_minor: number;
        /**
         * Reason why the invoice cannot be credited, if applicable
         */
        reason?: string;
    };
    requestId: string;
};
/**
 * A list of credit notes matching the query filters.
 */
type CreditNoteListResponse = {
    data: Array<CreditNote>;
    requestId: string;
};
/**
 * A formal accounting document that reduces the amount owed on a paid or partially paid invoice, used for refunds, billing corrections, and prorated cancellations.
 */
type CreditNote = {
    /**
     * Unique credit note identifier
     */
    id: string;
    /**
     * Sequential credit note number for accounting reference
     */
    credit_note_number: string | null;
    /**
     * ID of the invoice this credit note applies to
     */
    invoice_id: string;
    /**
     * ID of the customer who received the credit
     */
    customer_id: string | null;
    /**
     * Credit amount in minor units (cents)
     */
    amount_minor: number;
    /**
     * Tax portion of the credit in minor units
     */
    tax_amount_minor: number | null;
    /**
     * Three-letter ISO 4217 currency code
     */
    currency: string;
    /**
     * Credit note status: draft, issued, or void
     */
    status: string;
    /**
     * Human-readable reason for the credit
     */
    reason: string | null;
    /**
     * Machine-readable reason code (e.g., billing_error, customer_request)
     */
    reason_code: string | null;
    /**
     * How the credit is applied: refund_to_payment_method, customer_balance, or external
     */
    credit_method: string | null;
    /**
     * URL to the credit note PDF document
     */
    pdf_url: string | null;
    /**
     * When the credit note was issued (ISO 8601)
     */
    issued_at: string | null;
    /**
     * When the credit note was created (ISO 8601)
     */
    created_at: string;
    /**
     * When the credit note was last updated (ISO 8601)
     */
    updated_at: string;
};
/**
 * A single credit note with request tracking metadata.
 */
type CreditNoteResponse = {
    data: CreditNote;
    requestId: string;
};
/**
 * Returned when request parameters or body fail schema validation. The details.fields object maps each invalid parameter to its validation errors.
 */
type ValidationError = {
    error: {
        type: 'invalid_request_error';
        code: 'validation_error';
        message: string;
        param?: string;
        details?: {
            /**
             * Field-specific validation errors
             */
            fields?: {
                [key: string]: Array<string>;
            };
        };
        request_id?: string;
    };
};
/**
 * Returned when the API key is missing, invalid, or expired. Verify your x-api-key header contains a valid key.
 */
type AuthenticationError = {
    error: {
        type: 'authentication_error';
        code: 'authentication_failed' | 'invalid_api_key' | 'expired_api_key';
        message: string;
        request_id?: string;
    };
};
/**
 * Returned when the authenticated API key lacks the required scopes for the requested operation.
 */
type ForbiddenError = {
    error: {
        type: 'authentication_error';
        code: 'insufficient_permissions' | 'forbidden';
        message: string;
        request_id?: string;
    };
};
/**
 * Returned when the requested resource does not exist or does not belong to this merchant.
 */
type NotFoundError = {
    error: {
        type: 'invalid_request_error';
        code: 'resource_not_found';
        message: string;
        param?: string;
        request_id?: string;
    };
};
/**
 * A paginated list of products matching the query filters.
 */
type ProductListResponse = {
    data: Array<Product>;
    pagination: Pagination;
};
/**
 * A product defines what you sell — the name, billing type, price, and fulfillment method. Products can be one-time, recurring (subscription), or usage-based.
 */
type Product = {
    /**
     * Unique identifier (UUID)
     */
    id: string;
    /**
     * Object type
     */
    object: 'product';
    /**
     * User-facing product identifier
     */
    product_id: string;
    /**
     * Product display name
     */
    name: string;
    /**
     * Product description
     */
    description?: string | null;
    /**
     * Product kind
     */
    kind: 'subscription' | 'one_time' | 'usage';
    /**
     * How the product is priced
     */
    pricing_model: 'one_time' | 'recurring' | 'usage';
    /**
     * Price in minor units (cents/pence)
     */
    amount_minor: number | null;
    /**
     * Three-letter ISO currency code
     */
    currency: string;
    /**
     * Billing interval (day, week, month, year)
     */
    interval?: string | null;
    /**
     * Number of intervals between billings
     */
    interval_count?: number | null;
    /**
     * Free trial period in days
     */
    trial_days: number;
    /**
     * Fulfillment type
     */
    fulfillment_type: 'none' | 'digital' | 'physical';
    /**
     * Billing date calculation rule
     */
    billing_anchor_rule?: 'same_day' | 'day_of_month' | 'last_day' | null;
    /**
     * Day of month for billing (1-31)
     */
    billing_anchor_day?: number | null;
    /**
     * First payment timing
     */
    first_charge_behavior?: 'immediate' | 'next_anchor' | 'prorate' | null;
    /**
     * Subscription end behavior
     */
    end_behavior?: 'until_canceled' | 'fixed_payments' | null;
    /**
     * Max billing cycles for fixed-payment subscriptions
     */
    max_payments?: number | null;
    /**
     * Associated usage meter ID
     */
    usage_meter_id?: string | null;
    /**
     * URL-friendly slug
     */
    slug?: string | null;
    /**
     * Whether the product is active
     */
    is_active: boolean;
    /**
     * Whether the product is archived
     */
    is_archived: boolean;
    /**
     * Product image URL
     */
    image_url?: string | null;
    /**
     * Tax behavior (exclusive, inclusive, location)
     */
    tax_behavior?: string | null;
    /**
     * Tax code for tax calculation
     */
    tax_code?: string | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Creation timestamp (ISO 8601)
     */
    created_at: string;
    /**
     * Last update timestamp (ISO 8601)
     */
    updated_at: string;
};
type Pagination = {
    /**
     * Pagination type
     */
    kind: string;
    /**
     * Current page number
     */
    page: number;
    /**
     * Results per page
     */
    limit: number;
    /**
     * Total matching results
     */
    total: number;
    /**
     * Total pages available
     */
    totalPages: number;
};
/**
 * Error response returned when a product operation fails.
 */
type ProductErrorResponse = {
    error: string;
};
/**
 * A single product object with full details and associated prices.
 */
type ProductRetrieveResponse = {
    data: Product;
};
/**
 * The newly created product object.
 */
type ProductCreateResponse = {
    data: Product;
};
/**
 * Parameters for creating a new product, including name, billing type, and pricing.
 */
type CreateProductRequest = {
    product_id: string;
    name: string;
    description?: string | null;
    kind: 'subscription' | 'one_time' | 'usage';
    pricing_model: 'one_time' | 'recurring' | 'usage';
    amount_minor: number;
    currency?: string;
    interval?: string | null;
    interval_count?: number | null;
    trial_days?: number;
    usage_meter_id?: string | null;
    slug?: string;
    /**
     * Fulfillment type for the product. Defaults to 'none' (service).
     */
    fulfillment_type?: 'none' | 'digital' | 'physical';
    /**
     * How billing dates are calculated. same_day: Bill on same day as start. day_of_month: Bill on specific day (1-31). last_day: Bill on last day of month.
     */
    billing_anchor_rule?: 'same_day' | 'day_of_month' | 'last_day';
    /**
     * Day of month (1-31) when billing_anchor_rule is 'day_of_month'
     */
    billing_anchor_day?: number | null;
    /**
     * When first payment is collected. immediate: Charge on start. next_anchor: Charge on first scheduled date. prorate: Prorate until first date.
     */
    first_charge_behavior?: 'immediate' | 'next_anchor' | 'prorate';
    /**
     * How subscription ends. until_canceled: Runs forever. fixed_payments: Ends after N billing cycles.
     */
    end_behavior?: 'until_canceled' | 'fixed_payments';
    /**
     * Max billing cycles when end_behavior is 'fixed_payments'
     */
    max_payments?: number | null;
    /**
     * Arbitrary key-value metadata for the product
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * The updated product object reflecting the changes.
 */
type ProductUpdateResponse = {
    data: Product;
};
/**
 * Parameters for updating an existing product. Only the provided fields are changed.
 */
type UpdateProductRequest = {
    name?: string;
    description?: string | null;
    amount_minor?: number;
    currency?: string;
    interval?: string | null;
    interval_count?: number | null;
    trial_days?: number;
    is_active?: boolean;
    is_archived?: boolean;
    /**
     * Fulfillment type for the product.
     */
    fulfillment_type?: 'none' | 'digital' | 'physical';
    /**
     * How billing dates are calculated. same_day: Bill on same day as start. day_of_month: Bill on specific day (1-31). last_day: Bill on last day of month.
     */
    billing_anchor_rule?: 'same_day' | 'day_of_month' | 'last_day';
    billing_anchor_day?: number | null;
    /**
     * When first payment is collected. immediate: Charge on start. next_anchor: Charge on first scheduled date. prorate: Prorate until first date.
     */
    first_charge_behavior?: 'immediate' | 'next_anchor' | 'prorate';
    /**
     * How subscription ends. until_canceled: Runs forever. fixed_payments: Ends after N billing cycles.
     */
    end_behavior?: 'until_canceled' | 'fixed_payments';
    max_payments?: number | null;
    /**
     * Arbitrary key-value metadata for the product
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * The created checkout session with the URL to redirect the customer to.
 */
type CheckoutSessionCreateResponse = {
    data: {
        id: string;
        url: string;
        publicToken: string;
        amountMinor?: number;
        currency: string;
        customerId?: string;
        expiresAt: string;
        allowedMethods?: Array<string>;
        selectedMethod?: string | null;
    };
    requestId: string;
};
/**
 * Error response returned when a checkout session cannot be created.
 */
type CheckoutSessionErrorResponse = {
    error: string;
};
/**
 * Parameters for creating a hosted checkout session. Customers are redirected to complete payment on a RevKeen-hosted page.
 */
type CreateCheckoutSessionInput = {
    invoiceId?: string;
    productId?: string;
    amountMinor?: number;
    currency?: string;
    successUrl?: string;
    cancelUrl?: string;
    /**
     * Payment methods to offer. Intersected with merchant capabilities. Defaults to merchant config.
     */
    allowedMethods?: Array<'card' | 'direct_debit' | 'pay_by_bank' | 'in_store'>;
    /**
     * Target a registered companion device. Session is pushed via SSE to the device.
     */
    companionDeviceId?: string;
};
type CheckoutSessionRetrieveResponse = {
    data: CheckoutSession;
    requestId: string;
};
/**
 * A checkout session represents a customer's intent to pay.
 */
type CheckoutSession = {
    id: string;
    object: 'checkout_session';
    status: string;
    mode: string | null;
    amount_total: number | null;
    currency: string | null;
    customer_id: string | null;
    payment_intent_id: string | null;
    invoice_id: string | null;
    subscription_id: string | null;
    url: string | null;
    success_url: string | null;
    cancel_url: string | null;
    expires_at: string | null;
    created_at: string | null;
    allowed_methods: Array<string>;
    selected_method: string | null;
};
type CheckoutSessionExpireResponse = {
    data: {
        id: string;
        status: 'expired';
        expiredAt: string;
    };
    requestId: string;
};
/**
 * A business entity (company) associated with a customer for B2B billing.
 */
type Business = {
    /**
     * Unique identifier (UUID)
     */
    id: string;
    /**
     * Object type
     */
    object: 'business';
    /**
     * Associated customer ID
     */
    customer_id?: string | null;
    /**
     * Business name
     */
    name: string;
    /**
     * Company registration number
     */
    company_number?: string | null;
    /**
     * Tax ID (VAT, EIN, etc.)
     */
    tax_identifier?: string | null;
    /**
     * Billing email address
     */
    billing_email?: string | null;
    /**
     * Billing phone number
     */
    billing_phone?: string | null;
    /**
     * Billing address line 1
     */
    billing_address_line1?: string | null;
    /**
     * Billing address line 2
     */
    billing_address_line2?: string | null;
    /**
     * Billing city
     */
    billing_city?: string | null;
    /**
     * Billing postcode/ZIP
     */
    billing_postcode?: string | null;
    /**
     * Billing country (ISO 3166-1 alpha-2)
     */
    billing_country?: string | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Creation timestamp (ISO 8601)
     */
    created_at: string;
    /**
     * Last update timestamp (ISO 8601)
     */
    updated_at: string;
};
/**
 * An invoice belonging to a specific customer, with summarized billing details.
 */
type CustomerInvoice = {
    id: string;
    customer_id: string;
    invoice_number: string | null;
    status: string;
    total_minor: number;
    currency: string;
    due_date: string | null;
    created_at: string;
    updated_at: string;
};
/**
 * Standard error response for customer sub-resource operations.
 */
type ErrorResponse = {
    error: {
        code: string;
        message: string;
    };
};
/**
 * A subscription belonging to a specific customer, with plan and status details.
 */
type CustomerSubscription = {
    id: string;
    customer_id: string;
    price_id: string | null;
    status: string;
    current_period_start: string | null;
    current_period_end: string | null;
    cancel_at_period_end: boolean;
    canceled_at: string | null;
    trial_end: string | null;
    created_at: string;
    updated_at: string;
};
/**
 * An order belonging to a specific customer, with line items and fulfillment status.
 */
type CustomerOrder = {
    id: string;
    public_id: string;
    customer_id: string;
    status: string;
    total_minor: number;
    currency: string;
    fulfilled_at: string | null;
    canceled_at: string | null;
    created_at: string;
    updated_at: string;
};
/**
 * A payment transaction belonging to a specific customer, with amount, status, and gateway details.
 */
type CustomerPayment = {
    id: string;
    customer_id: string | null;
    amount_minor: number;
    currency: string;
    status: string;
    payment_method_type: string | null;
    gateway_transaction_id: string | null;
    created_at: string;
    updated_at: string;
};
/**
 * The newly created customer object.
 */
type CustomerCreateResponse = {
    data: {
        /**
         * Unique customer identifier
         */
        id: string;
        /**
         * ID of the merchant this customer belongs to
         */
        merchantId: string;
        /**
         * Merchant-assigned reference ID for external system mapping
         */
        merchantRefId?: string;
        /**
         * Customer's email address
         */
        email: string;
        /**
         * Customer's full name
         */
        name?: string;
        /**
         * Customer's phone number
         */
        phone?: string;
        /**
         * Customer's company name
         */
        companyName?: string;
        /**
         * Billing address line 1
         */
        addressLine1?: string;
        /**
         * Billing address line 2
         */
        addressLine2?: string;
        /**
         * Billing address city
         */
        city?: string;
        /**
         * Billing address state or county
         */
        state?: string;
        /**
         * Billing address postal code
         */
        postalCode?: string;
        /**
         * Billing address country code
         */
        country?: string;
        /**
         * Linked Better Auth user ID for portal access
         */
        authUserId?: string;
        /**
         * Arbitrary key-value metadata attached to this customer
         */
        metadata?: {
            [key: string]: unknown;
        };
        /**
         * Merchant-defined custom fields displayed as columns in the dashboard
         */
        customFields?: {
            [key: string]: unknown;
        };
        /**
         * When the customer was created (ISO 8601)
         */
        createdAt: string;
        /**
         * When the customer was last updated (ISO 8601)
         */
        updatedAt: string;
    };
};
/**
 * A paginated list of customers matching the query filters.
 */
type CustomerListResponse = {
    data: Array<{
        /**
         * Unique customer identifier
         */
        id: string;
        /**
         * ID of the merchant this customer belongs to
         */
        merchantId: string;
        /**
         * Merchant-assigned reference ID for external system mapping
         */
        merchantRefId?: string;
        /**
         * Customer's email address
         */
        email: string;
        /**
         * Customer's full name
         */
        name?: string;
        /**
         * Customer's phone number
         */
        phone?: string;
        /**
         * Customer's company name
         */
        companyName?: string;
        /**
         * Billing address line 1
         */
        addressLine1?: string;
        /**
         * Billing address line 2
         */
        addressLine2?: string;
        /**
         * Billing address city
         */
        city?: string;
        /**
         * Billing address state or county
         */
        state?: string;
        /**
         * Billing address postal code
         */
        postalCode?: string;
        /**
         * Billing address country code
         */
        country?: string;
        /**
         * Linked Better Auth user ID for portal access
         */
        authUserId?: string;
        /**
         * Arbitrary key-value metadata attached to this customer
         */
        metadata?: {
            [key: string]: unknown;
        };
        /**
         * Merchant-defined custom fields displayed as columns in the dashboard
         */
        customFields?: {
            [key: string]: unknown;
        };
        /**
         * When the customer was created (ISO 8601)
         */
        createdAt: string;
        /**
         * When the customer was last updated (ISO 8601)
         */
        updatedAt: string;
    }>;
    pagination: {
        limit: number;
        offset: number;
        total?: number;
    };
};
/**
 * A single customer object with full details.
 */
type CustomerRetrieveResponse = {
    data: {
        /**
         * Unique customer identifier
         */
        id: string;
        /**
         * ID of the merchant this customer belongs to
         */
        merchantId: string;
        /**
         * Merchant-assigned reference ID for external system mapping
         */
        merchantRefId?: string;
        /**
         * Customer's email address
         */
        email: string;
        /**
         * Customer's full name
         */
        name?: string;
        /**
         * Customer's phone number
         */
        phone?: string;
        /**
         * Customer's company name
         */
        companyName?: string;
        /**
         * Billing address line 1
         */
        addressLine1?: string;
        /**
         * Billing address line 2
         */
        addressLine2?: string;
        /**
         * Billing address city
         */
        city?: string;
        /**
         * Billing address state or county
         */
        state?: string;
        /**
         * Billing address postal code
         */
        postalCode?: string;
        /**
         * Billing address country code
         */
        country?: string;
        /**
         * Linked Better Auth user ID for portal access
         */
        authUserId?: string;
        /**
         * Arbitrary key-value metadata attached to this customer
         */
        metadata?: {
            [key: string]: unknown;
        };
        /**
         * Merchant-defined custom fields displayed as columns in the dashboard
         */
        customFields?: {
            [key: string]: unknown;
        };
        /**
         * When the customer was created (ISO 8601)
         */
        createdAt: string;
        /**
         * When the customer was last updated (ISO 8601)
         */
        updatedAt: string;
    };
};
/**
 * The updated customer object reflecting the changes.
 */
type CustomerUpdateResponse = {
    data: {
        /**
         * Unique customer identifier
         */
        id: string;
        /**
         * ID of the merchant this customer belongs to
         */
        merchantId: string;
        /**
         * Merchant-assigned reference ID for external system mapping
         */
        merchantRefId?: string;
        /**
         * Customer's email address
         */
        email: string;
        /**
         * Customer's full name
         */
        name?: string;
        /**
         * Customer's phone number
         */
        phone?: string;
        /**
         * Customer's company name
         */
        companyName?: string;
        /**
         * Billing address line 1
         */
        addressLine1?: string;
        /**
         * Billing address line 2
         */
        addressLine2?: string;
        /**
         * Billing address city
         */
        city?: string;
        /**
         * Billing address state or county
         */
        state?: string;
        /**
         * Billing address postal code
         */
        postalCode?: string;
        /**
         * Billing address country code
         */
        country?: string;
        /**
         * Linked Better Auth user ID for portal access
         */
        authUserId?: string;
        /**
         * Arbitrary key-value metadata attached to this customer
         */
        metadata?: {
            [key: string]: unknown;
        };
        /**
         * Merchant-defined custom fields displayed as columns in the dashboard
         */
        customFields?: {
            [key: string]: unknown;
        };
        /**
         * When the customer was created (ISO 8601)
         */
        createdAt: string;
        /**
         * When the customer was last updated (ISO 8601)
         */
        updatedAt: string;
    };
};
/**
 * A list of payment methods attached to a customer.
 */
type CustomerPaymentMethodsListResponse = {
    data: Array<PaymentMethod>;
};
/**
 * A saved payment instrument (card, bank account, etc.) attached to a customer for future charges.
 */
type PaymentMethod = {
    /**
     * Unique identifier for the payment method
     */
    id: string;
    /**
     * Object type, always 'payment_method'
     */
    object: 'payment_method';
    /**
     * Public ID visible in API responses (pm_xxx format)
     */
    public_id: string | null;
    /**
     * The type of payment method
     */
    type: 'card' | 'bank_account' | 'us_bank_account';
    /**
     * The status of the payment method
     */
    status: 'active' | 'inactive' | 'expired';
    /**
     * ID of the customer this payment method belongs to
     */
    customer_id: string;
    /**
     * Whether this is the customer's default payment method
     */
    is_default: boolean;
    card: CardDetails;
    us_bank_account: BankAccountDetails;
    billing_details: BillingDetails;
    /**
     * Custom metadata attached to the payment method
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * When the payment method was created
     */
    created_at: string;
    /**
     * When the payment method was last updated
     */
    updated_at: string;
};
/**
 * Card details (if type is 'card')
 */
type CardDetails = {
    /**
     * The card brand
     */
    brand: 'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'jcb' | 'unionpay' | 'unknown' | null;
    /**
     * The last 4 digits of the card number
     */
    last4: string | null;
    /**
     * Expiration month (1-12)
     */
    exp_month: number | null;
    /**
     * Expiration year
     */
    exp_year: number | null;
    /**
     * The card funding type
     */
    funding: 'credit' | 'debit' | 'prepaid' | 'unknown' | null;
} | null;
/**
 * Bank account details (if type is 'us_bank_account')
 */
type BankAccountDetails = {
    /**
     * The name of the bank
     */
    bank_name: string | null;
    /**
     * The last 4 digits of the account number
     */
    last4: string | null;
    /**
     * The last 4 digits of the routing number
     */
    routing_number_last4: string | null;
    /**
     * The type of bank account
     */
    account_type: 'checking' | 'savings' | null;
} | null;
/**
 * Billing details associated with the payment method
 */
type BillingDetails = {
    /**
     * Full name on the payment method
     */
    name: string | null;
    /**
     * Email address
     */
    email: string | null;
    /**
     * Phone number
     */
    phone: string | null;
    /**
     * Billing address
     */
    address: {
        line1: string | null;
        line2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
    } | null;
} | null;
/**
 * A portal session URL that redirects the customer to their self-service billing portal.
 */
type CustomerPortalSessionCreateResponse = {
    data: {
        id: string;
        customerId: string;
        merchantId: string;
        url: string;
        expiresAt: string;
        createdAt: string;
    };
};
/**
 * The newly created subscription with billing schedule and initial invoice details.
 */
type SubscriptionCreateResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * A paginated list of subscriptions matching the query filters.
 */
type SubscriptionListResponse = {
    data: Array<{
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    }>;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};
/**
 * A single subscription object with full plan, billing, and status details.
 */
type SubscriptionRetrieveResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * The updated subscription reflecting the changes to metadata or billing parameters.
 */
type SubscriptionUpdateResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * The subscription after a plan change, with proration details and updated billing schedule.
 */
type SubscriptionChangePlanResponse = {
    subscription: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
    /**
     * Proration details
     */
    proration?: {
        [key: string]: unknown;
    };
    previousPlanId?: string;
    invoiceCreated: boolean;
};
/**
 * The subscription after a quantity change, with proration details if applicable.
 */
type SubscriptionChangeQuantityResponse = {
    subscription: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
    /**
     * Proration details
     */
    proration?: {
        [key: string]: unknown;
    };
    previousQuantity?: number;
    invoiceCreated: boolean;
};
/**
 * The subscription after cancellation, showing the effective end date and final billing period.
 */
type SubscriptionCancelResponse = {
    success: boolean;
};
/**
 * A preview of the next renewal charge, including line items, amounts, and billing date.
 */
type SubscriptionPreviewRenewalResponse = {
    data: {
        subscriptionId: string;
        currentPeriodEnd: string;
        upcomingRenewals: Array<{
            sequence: number;
            date: string;
            formattedDate: string;
            dayName: string;
            amountMinor: number;
            formattedAmount: string;
            isTrialEnd?: boolean;
            isFirstCharge?: boolean;
            isFinalPayment?: boolean;
        }>;
        nextInvoiceAmountMinor: number;
        currency: string;
    };
};
/**
 * The subscription after being paused, showing the pause effective date and planned resume date.
 */
type SubscriptionPauseResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * Parameters for pausing an active subscription. Specify when billing should resume.
 */
type PauseSubscriptionInput = {
    /**
     * How to handle invoices during the pause period
     */
    behavior?: 'keep_as_draft' | 'mark_uncollectible' | 'void';
    /**
     * ISO 8601 date when the subscription should automatically resume. If not provided, subscription stays paused until manually resumed.
     */
    resumes_at?: string;
};
/**
 * The subscription after being resumed from a paused state, with the next billing date.
 */
type SubscriptionResumeResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * The subscription after being canceled with the specified cancellation parameters.
 */
type SubscriptionCancelSubscriptionResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * Parameters for canceling a subscription, including whether to cancel immediately or at period end.
 */
type CancelSubscriptionInput = {
    /**
     * Cancel mode: "immediately" revokes access now, "period_end" schedules cancellation at billing period end
     */
    mode: 'immediately' | 'period_end';
    /**
     * Optional reason for cancellation
     */
    reason?: string;
};
/**
 * The subscription after being reactivated from a canceled state, with updated billing schedule.
 */
type SubscriptionReactivateResponse = {
    data: {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: 'day' | 'week' | 'month' | 'year';
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: 'info' | 'warning' | 'critical' | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        } | null;
    };
};
/**
 * A list of line items in a subscription.
 */
type SubscriptionItemListResponse = {
    data: Array<SubscriptionItem>;
    meta: {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    };
};
/**
 * A line item within a subscription, representing a specific product and price that the customer is billed for each cycle.
 */
type SubscriptionItem = {
    id: string;
    subscription_id: string;
    product_id: string | null;
    price_id: string | null;
    description: string | null;
    /**
     * Item quantity
     */
    quantity: number;
    currency: string;
    /**
     * Unit price in cents
     */
    unit_amount_minor: number;
    /**
     * none: service (no order), physical: creates shipping order, digital: creates download order
     */
    fulfillment_type: 'none' | 'physical' | 'digital';
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    created_at: string;
    updated_at: string;
};
/**
 * The newly added subscription line item.
 */
type SubscriptionItemCreateResponse = {
    data: SubscriptionItem;
};
/**
 * Parameters for adding a new line item to an existing subscription.
 */
type CreateSubscriptionItemInput = {
    /**
     * Product UUID to link to this item
     */
    product_id?: string;
    /**
     * Price UUID to link to this item
     */
    price_id?: string;
    /**
     * Item description
     */
    description?: string;
    /**
     * Item quantity
     */
    quantity?: number;
    /**
     * ISO 4217 currency code
     */
    currency: string;
    /**
     * Unit price in cents
     */
    unit_amount_minor: number;
    /**
     * Determines if orders are created on renewal
     */
    fulfillment_type?: 'none' | 'physical' | 'digital';
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * The updated subscription line item reflecting the changes.
 */
type SubscriptionItemUpdateResponse = {
    data: SubscriptionItem;
};
/**
 * Parameters for updating a subscription line item, such as changing the quantity.
 */
type UpdateSubscriptionItemInput = {
    /**
     * Item quantity
     */
    quantity?: number;
    /**
     * Item description
     */
    description?: string;
    /**
     * Unit price in cents
     */
    unit_amount_minor?: number;
    /**
     * Determines if orders are created on renewal
     */
    fulfillment_type?: 'none' | 'physical' | 'digital';
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Confirmation that the subscription line item was removed.
 */
type SubscriptionItemDeleteResponse = {
    success: boolean;
    deleted_id: string;
};
/**
 * A payout represents funds settled from processed payments to your bank account. Track settlement batches and reconcile amounts.
 */
type Payout = {
    id: string;
    public_id: string;
    /**
     * Name of the payment processor that produced this payout batch
     */
    gateway: string;
    gateway_payout_id: string;
    /**
     * Gross amount in cents
     */
    gross_amount_minor: number;
    /**
     * Fees in cents
     */
    fees_amount_minor: number;
    /**
     * Net amount in cents
     */
    net_amount_minor: number;
    currency: string;
    charges_count: number | null;
    refunds_count: number | null;
    chargebacks_count: number | null;
    status: 'pending' | 'in_transit' | 'paid' | 'failed' | 'canceled';
    arrival_date: string | null;
    settled_at: string | null;
    created_at: string;
};
/**
 * A payment included in a payout settlement batch, with amount and fee details.
 */
type PayoutPayment = {
    id: string;
    public_id: string | null;
    amount_minor: number;
    currency: string;
    status: string;
    kind: string | null;
    paid_at: string | null;
    created_at: string;
};
/**
 * A paginated list of refunds matching the query filters.
 */
type RefundListResponse = {
    data: Array<Refund>;
    meta: {
        /**
         * Total number of results matching the query
         */
        total: number;
        /**
         * Maximum results per page
         */
        limit: number;
        /**
         * Number of results skipped
         */
        offset: number;
        /**
         * Whether more results exist beyond this page
         */
        has_more: boolean;
    };
};
/**
 * A refund represents money returned to a customer after a completed payment. Refunds create a child transaction linked to the original payment for audit trail purposes.
 */
type Refund = {
    id: string;
    public_id: string;
    /**
     * The original payment ID this refund is for (alias for parent_transaction_id)
     */
    payment_id: string;
    /**
     * Parent transaction ID in unified transaction model. Same as payment_id for refunds.
     */
    parent_transaction_id: string;
    order_id: string | null;
    /**
     * Name of the payment processor that handled this refund
     */
    gateway: string;
    gateway_refund_id: string | null;
    /**
     * Refund amount in cents
     */
    amount_minor: number;
    currency: string;
    reason: 'customer_request' | 'duplicate' | 'fraudulent' | 'product_not_received' | 'product_unacceptable' | 'subscription_canceled' | 'other' | null;
    reason_details: string | null;
    status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'canceled';
    failure_reason: string | null;
    failure_code: string | null;
    processed_at: string | null;
    created_at: string;
};
/**
 * A single refund object with full details.
 */
type RefundRetrieveResponse = {
    data: Refund;
};
/**
 * The newly created refund object, including the gateway response details.
 */
type RefundCreateResponse = {
    data: Refund;
};
/**
 * Parameters for creating a refund. Specify the transaction ID and optionally a partial amount.
 */
type CreateRefundInput = {
    /**
     * The ID of the payment to refund
     */
    payment_id: string;
    /**
     * Amount to refund in cents. If not provided, refunds the full remaining amount.
     */
    amount_minor?: number;
    /**
     * Reason for the refund
     */
    reason?: 'customer_request' | 'duplicate' | 'fraudulent' | 'product_not_received' | 'product_unacceptable' | 'subscription_canceled' | 'other';
    /**
     * Additional details about the refund reason
     */
    reason_details?: string;
};
/**
 * A paginated list of voids matching the query filters.
 */
type VoidListResponse = {
    data: Array<Void>;
    meta: {
        /**
         * Total number of results matching the query
         */
        total: number;
        /**
         * Maximum results per page
         */
        limit: number;
        /**
         * Number of results skipped
         */
        offset: number;
        /**
         * Whether more results exist beyond this page
         */
        has_more: boolean;
    };
};
/**
 * A void cancels an unsettled payment before gateway settlement. Voids are always for the full amount — use a refund for settled payments.
 */
type Void = {
    id: string;
    public_id: string;
    /**
     * The original payment ID this void is for (alias for parent_transaction_id)
     */
    payment_id: string;
    /**
     * Parent transaction ID in unified transaction model.
     */
    parent_transaction_id: string;
    order_id: string | null;
    /**
     * Name of the payment processor that handled this void
     */
    gateway: string;
    gateway_void_id: string | null;
    /**
     * Void amount in cents (always full amount of original transaction)
     */
    amount_minor: number;
    currency: string;
    reason: string | null;
    reason_code: 'customer_request' | 'duplicate' | 'fraudulent' | 'error' | 'other' | null;
    status: 'pending' | 'processing' | 'succeeded' | 'failed';
    failure_reason: string | null;
    failure_code: string | null;
    voided_at: string | null;
    created_at: string;
};
/**
 * A single void object with full details.
 */
type VoidRetrieveResponse = {
    data: Void;
};
/**
 * The newly created void object confirming the unsettled payment was canceled.
 */
type VoidCreateResponse = {
    data: Void;
};
/**
 * Parameters for creating a void. Specify the transaction ID of the unsettled payment to cancel.
 */
type CreateVoidInput = {
    /**
     * The ID of the payment to void. Must be unsettled.
     */
    payment_id: string;
    /**
     * Reason for the void
     */
    reason?: string;
    /**
     * Standardized reason code for the void
     */
    reason_code?: 'customer_request' | 'duplicate' | 'fraudulent' | 'error' | 'other';
};
/**
 * A single credit note with full details including the associated invoice and refund.
 */
type CreditNoteRetrieveResponse = {
    data: CreditNote & unknown;
};
/**
 * The newly created credit note with issued status and PDF URL.
 */
type CreditNoteCreateResponse = {
    data: CreditNote & unknown;
};
/**
 * Parameters for creating a credit note against an invoice, specifying the amount, reason, and whether to issue a refund.
 */
type CreateCreditNoteInput = {
    /**
     * The ID of the invoice to issue a credit note for
     */
    invoice_id: string;
    /**
     * Amount to credit in minor units (cents). Capped at 2,000,000,000 to stay below the 32-bit integer ceiling of the underlying DB column.
     */
    amount_minor: number;
    /**
     * Tax portion of the credit in minor units (cents). For UK/EU VAT compliance. Capped at 2,000,000,000.
     */
    tax_amount_minor?: number;
    /**
     * How the credit should be applied
     */
    credit_method?: 'refund_to_payment_method' | 'customer_balance' | 'external';
    /**
     * Reason for the credit note
     */
    reason?: string;
    /**
     * Standardized reason code
     */
    reason_code?: 'customer_request' | 'duplicate_charge' | 'service_issue' | 'billing_error' | 'subscription_cancellation' | 'proration' | 'other';
    /**
     * Whether to cancel the associated subscription after issuing
     */
    cancel_subscription?: boolean;
    /**
     * Whether this credit note represents a prorated amount
     */
    is_prorated?: boolean;
    /**
     * Total days in the billing period (for prorated credits). Constrained to 1–366.
     */
    proration_days_total?: number;
    /**
     * Unused days in the billing period (for prorated credits). Must be <= proration_days_total. Constrained to 0–366.
     */
    proration_days_unused?: number;
    /**
     * Idempotency key to prevent duplicate credit notes
     */
    idempotency_key?: string;
    /**
     * Arbitrary key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * When true, automatically trigger the process-credit-note task for multi-gateway reversal routing. Response will include gateway_operations array. Always combine with `idempotency_key` to avoid duplicate gateway operations.
     */
    auto_route?: boolean;
};
/**
 * The credit note after being voided, reversing its accounting effect.
 */
type CreditNoteVoidResponse = {
    data: CreditNote & unknown;
};
/**
 * Eligibility details showing whether a credit note can be issued for the specified invoice and the maximum creditable amount.
 */
type CreditNoteEligibilityResponse = {
    invoice_id: string;
    total_amount_minor: number;
    total_paid_minor: number;
    total_credited_minor: number;
    max_creditable_minor: number;
    eligible: boolean;
    payments: Array<{
        transaction_id: string;
        gateway: string;
        payment_method: string | null;
        amount_minor: number;
        amount_refunded_minor: number;
        amount_available_minor: number;
        card_brand: string | null;
        card_last4: string | null;
        terminal_serial: string | null;
        available_operations: Array<string>;
        constraints: {
            partial_supported: boolean;
            requires_card_present: boolean;
            requires_terminal_online: boolean;
        };
    }>;
};
/**
 * Details about which reversal methods (refund, void, or credit note) are available for a specific transaction.
 */
type TransactionReversalEligibilityResponse = {
    can_reverse: boolean;
    transaction_id: string;
    gateway: string;
    payment_method: string | null;
    available_operations: Array<string>;
    constraints: {
        max_amount: number;
        partial_supported: boolean;
        requires_card_present: boolean;
        requires_terminal_online: boolean;
        requires_customer_iban: boolean;
        reason: string | null;
    };
    card_brand: string | null;
    card_last4: string | null;
    terminal_serial: string | null;
    terminal_uti: string | null;
};
type CreditNoteLineList = {
    object: 'list';
    data: Array<CreditNoteLine>;
    has_more: boolean;
    url: string;
};
/**
 * A single line item on a credit note. Each line represents a portion of the invoice that is being credited — either a whole invoice line or a prorated slice of one.
 */
type CreditNoteLine = {
    id: string;
    object: 'credit_note_line';
    credit_note_id: string;
    /**
     * The invoice line item this credit line applies to, when the credit was scoped to a specific line. Null for invoice-level credits.
     */
    invoice_line_item_id: string | null;
    description: string;
    quantity: number;
    /**
     * Per-unit credit amount in cents
     */
    unit_amount_minor: number;
    /**
     * Total credit for this line in cents
     */
    total_amount_minor: number;
    metadata: {
        [key: string]: unknown;
    } | null;
    created_at: string;
};
type CreditNotePreviewResponse = {
    data: CreditNotePreview;
};
/**
 * A non-persistent preview of a credit note. Use this to show a customer (or merchant operator) what the credit would do before committing to creating it.
 */
type CreditNotePreview = {
    object: 'credit_note_preview';
    invoice_id: string;
    proposed_amount_minor: number;
    proposed_tax_amount_minor: number | null;
    currency: string;
    invoice: {
        id: string;
        total_minor: number;
        amount_paid_minor: number;
        amount_due_minor: number;
        previously_credited_minor: number;
        max_creditable_minor: number;
    };
    after_credit: {
        new_amount_due_minor: number;
        new_amount_credited_minor: number;
        /**
         * True if applying this credit would leave a non-zero balance on the invoice.
         */
        would_leave_outstanding: boolean;
    };
    /**
     * True if `amount_minor` exceeds the invoice's remaining creditable amount. A real create call would be rejected.
     */
    exceeds_max_creditable: boolean;
    credit_method: string;
};
/**
 * Parameters to preview a credit note without persisting it. The response shows what the credit note would look like if created with these fields.
 */
type PreviewCreditNoteInput = {
    /**
     * Invoice to preview a credit note against.
     */
    invoice_id: string;
    /**
     * Proposed credit amount in cents. The preview validates that this does not exceed the invoice's outstanding creditable amount.
     */
    amount_minor: number;
    /**
     * Proposed tax portion of the credit in cents.
     */
    tax_amount_minor?: number;
    /**
     * Planned credit method. Defaults to refund_to_payment_method.
     */
    credit_method?: 'refund_to_payment_method' | 'customer_balance' | 'external';
    reason_code?: 'customer_request' | 'duplicate_charge' | 'service_issue' | 'billing_error' | 'subscription_cancellation' | 'proration' | 'other';
};
/**
 * A dispute (chargeback) represents a customer's challenge to a charge with their card issuer. Track lifecycle stages and submit evidence to contest.
 */
type Dispute = {
    /**
     * Unique identifier for the dispute
     */
    id: string;
    /**
     * Public-facing dispute identifier
     */
    public_id: string;
    /**
     * The original payment ID this dispute is for (alias for parent_transaction_id)
     */
    payment_id: string | null;
    /**
     * Parent transaction ID in unified transaction model. Same as payment_id for disputes.
     */
    parent_transaction_id: string | null;
    /**
     * Name of the payment processor that handled the original transaction
     */
    gateway: string;
    /**
     * Dispute identifier assigned by the payment gateway
     */
    gateway_dispute_id: string;
    /**
     * Original transaction identifier from the payment gateway
     */
    gateway_transaction_id: string | null;
    /**
     * Disputed amount in cents
     */
    amount_minor: number;
    /**
     * Three-letter ISO 4217 currency code
     */
    currency: string;
    /**
     * Card network reason code
     */
    reason_code: string | null;
    /**
     * Human-readable reason for the dispute
     */
    reason: string | null;
    /**
     * Card network-specific reason code
     */
    network_reason_code: string | null;
    /**
     * Card network-specific reason description
     */
    network_reason_description: string | null;
    /**
     * Name of the customer who filed the dispute
     */
    customer_name: string | null;
    /**
     * Card brand used for the original payment
     */
    card_brand: string | null;
    /**
     * Last four digits of the card used for the original payment
     */
    card_last4: string | null;
    /**
     * Deadline for submitting evidence to contest the dispute
     */
    evidence_due_by: string | null;
    /**
     * Whether evidence has been submitted for this dispute
     */
    evidence_submitted: boolean;
    /**
     * Timestamp when evidence was submitted
     */
    evidence_submitted_at: string | null;
    /**
     * Current status of the dispute lifecycle
     */
    status: 'needs_response' | 'under_review' | 'won' | 'lost' | 'warning_closed' | 'warning_needs_response';
    /**
     * Final resolution outcome of the dispute
     */
    resolution: 'won' | 'lost' | 'withdrawn' | null;
    /**
     * Timestamp when the dispute was resolved
     */
    resolved_at: string | null;
    /**
     * Timestamp when the dispute was filed
     */
    disputed_at: string;
    /**
     * Timestamp when the dispute record was created
     */
    created_at: string;
};
/**
 * An open dispute requiring action, with urgency indicators for evidence submission deadlines.
 */
type OpenDispute = {
    /**
     * Unique identifier for the dispute
     */
    id: string;
    /**
     * Public-facing dispute identifier
     */
    public_id: string;
    /**
     * The original payment ID this dispute is for
     */
    payment_id: string | null;
    /**
     * Parent transaction ID in unified transaction model
     */
    parent_transaction_id: string | null;
    /**
     * Payment gateway that processed the original transaction
     */
    gateway: string;
    /**
     * Disputed amount in cents
     */
    amount_minor: number;
    /**
     * Three-letter ISO 4217 currency code
     */
    currency: string;
    /**
     * Human-readable reason for the dispute
     */
    reason: string | null;
    /**
     * Name of the customer who filed the dispute
     */
    customer_name: string | null;
    /**
     * Card brand used for the original payment
     */
    card_brand: string | null;
    /**
     * Last four digits of the card used for the original payment
     */
    card_last4: string | null;
    /**
     * Deadline for submitting evidence to contest the dispute
     */
    evidence_due_by: string | null;
    /**
     * Number of days remaining until the evidence deadline
     */
    days_until_due: number | null;
    /**
     * Whether the evidence submission deadline has passed
     */
    is_overdue: boolean;
    /**
     * Timestamp when the dispute was filed
     */
    disputed_at: string;
};
/**
 * A paginated list of discounts matching the query filters.
 */
type DiscountListResponse = {
    data: Array<Discount>;
    meta: {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    };
};
/**
 * A discount code that applies a percentage or fixed amount reduction to charges, invoices, or subscriptions.
 */
type Discount = {
    id: string;
    code: string;
    name: string | null;
    description: string | null;
    discount_type: string;
    /**
     * Amount off (cents) or percentage
     */
    discount_value: number;
    applies_to: string | null;
    product_ids: Array<string> | null;
    max_redemptions: number | null;
    current_redemptions: number | null;
    valid_from: string | null;
    valid_until: string | null;
    recurring_type: string | null;
    recurring_cycles: number | null;
    first_time_customer: boolean | null;
    is_active: boolean | null;
    created_at: string | null;
    updated_at: string | null;
};
/**
 * A single discount object with full details and usage statistics.
 */
type DiscountRetrieveResponse = {
    data: Discount;
};
/**
 * The newly created discount object.
 */
type DiscountCreateResponse = {
    data: Discount;
};
/**
 * Parameters for creating a new discount code with amount, type, and usage limits.
 */
type CreateDiscountInput = {
    /**
     * Unique discount code (will be uppercased)
     */
    code: string;
    /**
     * Human-readable name
     */
    name: string;
    /**
     * Optional description
     */
    description?: string;
    /**
     * Type of discount
     */
    discount_type: 'percentage' | 'fixed_amount';
    /**
     * Discount value - percentage (1-100) or amount in cents
     */
    discount_value: number;
    /**
     * Which products the discount applies to
     */
    applies_to?: 'all' | 'specific_products';
    /**
     * Scope of where discount can be applied
     */
    scope?: 'entire_order' | 'specific_products' | 'subscription_only' | 'one_time_only';
    /**
     * Product IDs if applies_to is 'specific_products'
     */
    product_ids?: Array<string>;
    /**
     * Maximum total redemptions allowed
     */
    max_redemptions?: number;
    /**
     * Maximum redemptions per customer (0 = unlimited)
     */
    max_redemptions_per_user?: number;
    /**
     * Start date (ISO 8601)
     */
    valid_from?: string;
    /**
     * End date (ISO 8601)
     */
    valid_until?: string;
    /**
     * How the discount applies to recurring payments
     */
    recurring_type?: 'once' | 'forever' | 'repeating';
    /**
     * Number of billing cycles (only if recurring_type is 'repeating')
     */
    recurring_cycles?: number;
    /**
     * Only available to first-time customers
     */
    first_time_customer?: boolean;
};
/**
 * The updated discount object reflecting the changes.
 */
type DiscountUpdateResponse = {
    data: Discount;
};
/**
 * Parameters for updating an existing discount. Active discounts can only have metadata and usage limits modified.
 */
type UpdateDiscountInput = {
    name?: string;
    description?: string | null;
    discount_value?: number;
    applies_to?: 'all' | 'specific_products';
    scope?: 'entire_order' | 'specific_products' | 'subscription_only' | 'one_time_only';
    product_ids?: Array<string> | null;
    max_redemptions?: number | null;
    max_redemptions_per_user?: number;
    valid_from?: string | null;
    valid_until?: string | null;
    is_active?: boolean;
    is_archived?: boolean;
    recurring_type?: 'once' | 'forever' | 'repeating' | null;
    recurring_cycles?: number | null;
    first_time_customer?: boolean;
};
/**
 * Confirmation that the discount was successfully deleted.
 */
type DiscountDeleteResponse = {
    data: Discount;
};
/**
 * A paginated list of payment attempts matching the query filters.
 */
type PaymentAttemptListResponse = {
    data: Array<PaymentAttempt>;
    meta: {
        /**
         * Number of results returned
         */
        count: number;
        /**
         * Limit used in query
         */
        limit?: number;
    };
};
/**
 * A record of an individual payment processing attempt, including gateway response codes, AVS/CVV results, and retry metadata.
 */
type PaymentAttempt = {
    /**
     * Unique identifier for the payment attempt
     */
    id: string;
    /**
     * External reference ID (payatt_xxx format). Used as order_id in gateway requests.
     */
    public_id: string | null;
    /**
     * Order ID sent to the processor. Format: payatt_<public_id>. Primary correlation key for webhook mapping.
     */
    gateway_order_id: string | null;
    /**
     * Processor-assigned transaction reference.
     */
    gateway_transaction_id: string | null;
    /**
     * Logical payment (PaymentIntent) this attempt belongs to
     */
    payment_id: string | null;
    /**
     * Associated invoice ID
     */
    invoice_id: string | null;
    /**
     * Associated subscription ID
     */
    subscription_id: string | null;
    /**
     * Associated checkout session ID
     */
    checkout_session_id: string | null;
    /**
     * Billing run ID for batch reconciliation
     */
    billing_run_id: string | null;
    /**
     * Name of the payment processor that handled this attempt
     */
    gateway: string;
    /**
     * Processor-returned response code
     */
    gateway_code: string;
    /**
     * Processor-returned response message
     */
    gateway_message: string;
    /**
     * Normalized error category for the payment attempt
     */
    category: 'approved' | 'generic_decline' | 'insufficient_funds' | 'over_limit' | 'expired_card' | 'invalid_card_number' | 'invalid_cvv' | 'invalid_expiry' | 'invalid_pin' | 'transaction_not_allowed' | 'call_issuer' | 'incorrect_payment_info' | 'lost_or_stolen' | 'pickup_card' | 'suspected_fraud' | 'restricted_card' | 'stop_all_recurring' | 'stop_this_program' | 'update_cardholder_data' | 'processor_error' | 'gateway_error' | 'communication_error' | 'merchant_config_error' | 'merchant_inactive' | 'issuer_unavailable' | 'duplicate_transaction' | 'invalid_transaction' | 'unsupported_card' | 'feature_not_available' | 'authentication_required';
    /**
     * Severity level for logging/monitoring
     */
    severity: 'info' | 'warn' | 'error';
    /**
     * Retry behavior recommendation. retry_now: Safe to retry immediately. retry_later: Retry after delay. do_not_retry: Hard decline, don't retry.
     */
    retryability: 'retry_now' | 'retry_later' | 'do_not_retry';
    /**
     * Recommended action for the customer
     */
    customer_action: 'try_again' | 'use_other_method' | 'update_card' | 'contact_bank' | 'contact_merchant' | 'none';
    /**
     * Recommended action for the merchant
     */
    merchant_action: 'none' | 'collect_new_pm' | 'fix_config' | 'contact_support' | 'fraud_review' | 'schedule_retry' | 'contact_bank' | 'stop_recurring';
    /**
     * Directive for subscription handling after decline
     */
    subscription_directive: 'none' | 'stop_all' | 'stop_program' | 'update_cardholder_data';
    /**
     * Template key for customer-facing message
     */
    safe_customer_message_key: string;
    /**
     * Decline classification. soft: May succeed on retry. hard: Will not succeed on retry.
     */
    decline_type: 'soft' | 'hard' | null;
    /**
     * Final outcome status of the attempt
     */
    attempt_status: 'pending' | 'succeeded' | 'failed' | 'canceled';
    /**
     * Payment amount in cents
     */
    amount_cents: number | null;
    /**
     * Three-letter ISO currency code
     */
    currency: string | null;
    /**
     * Last 4 digits of card
     */
    payment_method_last4: string | null;
    /**
     * Card brand (visa, mastercard, etc.)
     */
    payment_method_brand: string | null;
    /**
     * Attempt sequence number (1 = first attempt)
     */
    attempt_number: number;
    /**
     * Legacy retry attempt number
     */
    retry_attempt_number: number;
    /**
     * Maximum retry attempts allowed
     */
    max_retry_attempts: number | null;
    /**
     * Next scheduled retry timestamp
     */
    next_retry_at: string | null;
    /**
     * Whether this was a scheduled retry
     */
    is_scheduled_retry: boolean;
    /**
     * Whether this was a manual retry
     */
    is_manual_retry: boolean;
    /**
     * When the attempt was created
     */
    created_at: string;
    /**
     * When the attempt was last updated
     */
    updated_at: string;
};
/**
 * Error response returned when a payment attempt lookup fails.
 */
type PaymentAttemptErrorResponse = {
    /**
     * Error message
     */
    error: string;
};
/**
 * A single payment attempt with full gateway response details.
 */
type PaymentAttemptSingleResponse = {
    data: PaymentAttempt;
};
/**
 * Assessment of whether a failed payment attempt is eligible for retry, including recommended retry strategy.
 */
type RetryEligibilityResponse = {
    data: {
        /**
         * Whether the subscription should be retried
         */
        should_retry: boolean;
        /**
         * Explanation for the retry decision
         */
        reason: string;
        last_attempt: PaymentAttempt & ({
            [key: string]: unknown;
        } | null);
    };
};
/**
 * Analytics data about payment decline patterns, including decline codes, rates, and trends.
 */
type DeclineAnalyticsResponse = {
    data: {
        total_attempts: number;
        approved_count: number;
        declined_count: number;
        approval_rate: number;
        soft_decline_count: number;
        hard_decline_count: number;
        top_decline_categories: Array<{
            category: string;
            count: number;
        }>;
        /**
         * Breakdown by gateway
         */
        by_gateway: {
            [key: string]: {
                total?: number;
                approved?: number;
                declined?: number;
            };
        };
    };
};
/**
 * Response containing the security verification results (AVS/CVV) for a specific payment attempt.
 */
type PaymentSecurityResponse = {
    data: PaymentSecurityResult;
};
/**
 * Combined AVS and CVV verification results for a payment attempt.
 */
type PaymentSecurityResult = {
    avs: AvsCodeInterpretation;
    cvv: CvvCodeInterpretation;
    /**
     * Combined risk level from AVS + CVV checks
     */
    overall_risk_level: 'low' | 'medium' | 'high' | 'unknown';
    /**
     * Recommended action based on security checks
     */
    recommendation: 'accept' | 'review' | 'decline';
};
/**
 * AVS verification result
 */
type AvsCodeInterpretation = {
    /**
     * Raw AVS response code from gateway
     */
    code: string;
    /**
     * Type of address match
     */
    match_type: 'full_match' | 'partial_match' | 'no_match' | 'not_supported' | 'not_available' | 'error';
    /**
     * Whether the street address matched
     */
    address_match: boolean | null;
    /**
     * Whether the ZIP/postal code matched
     */
    zip_match: boolean | null;
    /**
     * Human-readable description of the AVS result
     */
    description: string;
    /**
     * Risk level based on AVS result. low: full match, medium: partial match, high: no match
     */
    risk_level: 'low' | 'medium' | 'high' | 'unknown';
} | null;
/**
 * CVV verification result
 */
type CvvCodeInterpretation = {
    /**
     * Raw CVV response code from gateway
     */
    code: string;
    /**
     * Type of CVV match
     */
    match_type: 'match' | 'no_match' | 'not_processed' | 'not_provided' | 'issuer_not_certified' | 'error';
    /**
     * Human-readable description of the CVV result
     */
    description: string;
    /**
     * Risk level based on CVV result. low: match, medium: not processed, high: no match
     */
    risk_level: 'low' | 'medium' | 'high' | 'unknown';
} | null;
/**
 * The newly created charge object with gateway response details.
 */
type ChargeCreateResponse = {
    data: {
        id: string;
        customerId: string;
        invoiceId: string | null;
        paymentMethodId: string | null;
        amountMinor: number;
        amountCapturedMinor: number;
        amountRefundedMinor: number;
        currency: string;
        status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'refunded' | 'partially_refunded' | 'voided';
        description: string;
        statementDescriptor: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        gatewayTransactionId: string | null;
        receiptUrl: string | null;
        captured: boolean;
        metadata: {
            [key: string]: unknown;
        } | null;
        createdAt: string;
        updatedAt: string;
    };
};
/**
 * Error response returned when a charge operation fails due to a gateway decline or validation error.
 */
type ChargeErrorResponse = {
    error: string;
    code?: string;
};
/**
 * Error response returned when a duplicate charge is detected via idempotency key.
 */
type ChargeDuplicateErrorResponse = {
    error: string;
    existingChargeId?: string;
};
/**
 * A paginated list of charges matching the query filters.
 */
type ChargeListResponse = {
    data: Array<{
        id: string;
        customerId: string;
        invoiceId: string | null;
        paymentMethodId: string | null;
        amountMinor: number;
        amountCapturedMinor: number;
        amountRefundedMinor: number;
        currency: string;
        status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'refunded' | 'partially_refunded' | 'voided';
        description: string;
        statementDescriptor: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        gatewayTransactionId: string | null;
        receiptUrl: string | null;
        captured: boolean;
        metadata: {
            [key: string]: unknown;
        } | null;
        createdAt: string;
        updatedAt: string;
    }>;
    pagination: {
        /**
         * Current page number
         */
        page: number;
        /**
         * Maximum results per page
         */
        limit: number;
        /**
         * Total number of results matching the query
         */
        total: number;
        /**
         * Total number of pages available
         */
        totalPages: number;
    };
};
/**
 * A single charge object with full details.
 */
type ChargeRetrieveResponse = {
    data: {
        id: string;
        customerId: string;
        invoiceId: string | null;
        paymentMethodId: string | null;
        amountMinor: number;
        amountCapturedMinor: number;
        amountRefundedMinor: number;
        currency: string;
        status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'refunded' | 'partially_refunded' | 'voided';
        description: string;
        statementDescriptor: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        gatewayTransactionId: string | null;
        receiptUrl: string | null;
        captured: boolean;
        metadata: {
            [key: string]: unknown;
        } | null;
        createdAt: string;
        updatedAt: string;
    };
};
/**
 * The charge object after capturing the authorized funds.
 */
type ChargeCaptureResponse = {
    data: {
        id: string;
        customerId: string;
        invoiceId: string | null;
        paymentMethodId: string | null;
        amountMinor: number;
        amountCapturedMinor: number;
        amountRefundedMinor: number;
        currency: string;
        status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'refunded' | 'partially_refunded' | 'voided';
        description: string;
        statementDescriptor: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        gatewayTransactionId: string | null;
        receiptUrl: string | null;
        captured: boolean;
        metadata: {
            [key: string]: unknown;
        } | null;
        createdAt: string;
        updatedAt: string;
    };
};
/**
 * The charge object after processing a full or partial refund.
 */
type ChargeRefundResponse = {
    data: {
        id: string;
        customerId: string;
        invoiceId: string | null;
        paymentMethodId: string | null;
        amountMinor: number;
        amountCapturedMinor: number;
        amountRefundedMinor: number;
        currency: string;
        status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'refunded' | 'partially_refunded' | 'voided';
        description: string;
        statementDescriptor: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        gatewayTransactionId: string | null;
        receiptUrl: string | null;
        captured: boolean;
        metadata: {
            [key: string]: unknown;
        } | null;
        createdAt: string;
        updatedAt: string;
    };
};
/**
 * A preview of upcoming billing charges for a subscription, showing line items, amounts, and billing dates.
 */
type BillingPreviewResponse = {
    data: {
        items: Array<{
            sequence: number;
            date: string;
            formattedDate: string;
            dayName: string;
            amountMinor: number;
            formattedAmount: string;
            isTrialEnd?: boolean;
            isFirstCharge?: boolean;
            isFinalPayment?: boolean;
        }>;
        summary: string;
        totalAmountMinor: number;
        firstChargeDate: string;
        trialEndDate: string | null;
        scheduleEndDate: string | null;
        timezone: string;
    };
};
/**
 * Error response when a billing preview cannot be generated.
 */
type BillingPreviewErrorResponse = {
    error: string;
    field?: string;
};
/**
 * Available billing intervals (monthly, quarterly, yearly) with their configuration and pricing multipliers.
 */
type BillingIntervalsResponse = {
    data: Array<{
        value: string;
        label: string;
        description: string;
    }>;
};
/**
 * Billing anchor rules that determine how billing dates are calculated for different start modes and intervals.
 */
type BillingAnchorRulesResponse = {
    data: Array<{
        value: string;
        label: string;
        description: string;
        requiresAnchorDay: boolean;
    }>;
};
/**
 * A paginated list of prices matching the query filters.
 */
type PriceListResponse = {
    object: 'list';
    data: Array<Price>;
    has_more: boolean;
    total_count?: number;
};
/**
 * A price defines how much and how often to charge for a product. A single product can have multiple prices for different currencies, intervals, or tiers.
 */
type Price = {
    /**
     * Unique identifier for the price
     */
    id: string;
    /**
     * Object type
     */
    object: 'price';
    /**
     * ID of the product this price belongs to
     */
    product_id: string;
    /**
     * Whether the price is active
     */
    active: boolean;
    /**
     * Three-letter ISO currency code (lowercase)
     */
    currency: string;
    /**
     * Price in minor units (cents)
     */
    unit_amount: number | null;
    /**
     * Price type
     */
    type: 'one_time' | 'recurring';
    /**
     * Pricing model
     */
    pricing_model: 'fixed' | 'pay_what_you_want' | 'free';
    /**
     * Billing interval (recurring only)
     */
    interval?: 'day' | 'week' | 'month' | 'year' | null;
    /**
     * Number of intervals between billings
     */
    interval_count?: number | null;
    /**
     * Trial period in days (recurring only)
     */
    trial_period_days?: number | null;
    /**
     * PWYW: minimum amount in cents
     */
    minimum_amount?: number | null;
    /**
     * PWYW: maximum amount in cents
     */
    maximum_amount?: number | null;
    /**
     * PWYW: suggested amount in cents
     */
    suggested_amount?: number | null;
    /**
     * PWYW: quick-select amounts
     */
    preset_amounts?: Array<number> | null;
    /**
     * Display name (e.g., 'Monthly', 'Annual - Save 17%')
     */
    nickname?: string | null;
    /**
     * Stable key for API lookups
     */
    lookup_key?: string | null;
    /**
     * Billing scheme. Defaults to `per_unit`. Set to `tiered` along with `tiers_mode` + `tiers` to use graduated or volume pricing.
     */
    billing_scheme: 'per_unit' | 'tiered';
    /**
     * Tiered pricing mode. Required when `billing_scheme` is `tiered`, must be null otherwise.
     */
    tiers_mode?: 'graduated' | 'volume' | null;
    /**
     * Price tiers (ordered by `up_to`). Present only when `billing_scheme` is `tiered`. At least 2 tiers, final tier MUST have `up_to: null`. Immutable after creation.
     */
    tiers?: Array<PriceTier> | null;
    /**
     * Optional quantity transform (package pricing) applied before tier lookup. Immutable after creation.
     */
    transform_quantity?: {
        /**
         * Package size — quantity is divided by this value before pricing. Must be >= 1. Example: `divide_by: 10` with `round: up` charges per pack of 10.
         */
        divide_by: number;
        /**
         * Rounding mode when quantity is not an exact multiple of `divide_by`.
         */
        round: 'up' | 'down';
    } | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Creation timestamp
     */
    created_at: string;
    /**
     * Last update timestamp
     */
    updated_at: string;
};
type PriceTier = {
    /**
     * Upper bound of this tier (1-based inclusive). `null` = open-ended catch-all. Only the FINAL tier may set `up_to: null`.
     */
    up_to: number | null;
    /**
     * Per-unit charge in minor currency units (cents). May be null if the tier charges only a flat fee.
     */
    unit_amount_minor: number | null;
    /**
     * Flat fee charged once when quantity enters this tier. May be null if the tier charges only a per-unit amount.
     */
    flat_amount_minor: number | null;
};
/**
 * Error response returned when a price operation fails.
 */
type PriceErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
        param?: string;
    };
};
/**
 * Parameters for creating a new price. Specify the product, amount, currency, and billing interval.
 */
type CreatePriceRequest = {
    /**
     * ID of the product this price belongs to
     */
    product_id: string;
    /**
     * Three-letter ISO currency code
     */
    currency?: string;
    /**
     * Price in minor units (cents). Required for fixed pricing.
     */
    unit_amount?: number;
    /**
     * Price type
     */
    type?: 'one_time' | 'recurring';
    /**
     * Pricing model
     */
    pricing_model?: 'fixed' | 'pay_what_you_want' | 'free';
    /**
     * Billing interval (required for recurring)
     */
    interval?: 'day' | 'week' | 'month' | 'year';
    /**
     * Number of intervals between billings (1-12)
     */
    interval_count?: number;
    /**
     * Trial period in days (0-730)
     */
    trial_period_days?: number;
    /**
     * PWYW: minimum amount in cents
     */
    minimum_amount?: number;
    /**
     * PWYW: maximum amount in cents
     */
    maximum_amount?: number;
    /**
     * PWYW: suggested amount in cents
     */
    suggested_amount?: number;
    /**
     * PWYW: quick-select amounts (max 10)
     */
    preset_amounts?: Array<number>;
    /**
     * Display name (e.g., 'Monthly', 'Annual')
     */
    nickname?: string;
    /**
     * Stable key for API lookups
     */
    lookup_key?: string;
    /**
     * Billing scheme. Defaults to `per_unit`. Set to `tiered` with `tiers_mode` + `tiers` for graduated or volume pricing.
     */
    billing_scheme?: 'per_unit' | 'tiered';
    /**
     * Tiered pricing mode. Required when `billing_scheme` is `tiered`, must be omitted otherwise.
     */
    tiers_mode?: 'graduated' | 'volume';
    /**
     * Price tiers (ordered by `up_to`, min 2, max 50). Required when `billing_scheme` is `tiered`. Final tier MUST have `up_to: null`.
     */
    tiers?: Array<PriceTier>;
    transform_quantity?: TransformQuantity;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Optional quantity transform (package pricing) applied before tier lookup.
 */
type TransformQuantity = {
    /**
     * Package size — quantity is divided by this value before pricing. Must be >= 1. Example: `divide_by: 10` with `round: up` charges per pack of 10.
     */
    divide_by: number;
    /**
     * Rounding mode when quantity is not an exact multiple of `divide_by`.
     */
    round: 'up' | 'down';
};
/**
 * Parameters for updating an existing price. Amounts cannot be changed — archive and create a new price instead.
 */
type UpdatePriceRequest = {
    /**
     * Whether the price is active
     */
    active?: boolean;
    /**
     * Display name
     */
    nickname?: string | null;
    /**
     * Stable key for API lookups
     */
    lookup_key?: string | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * A list of meters for the merchant.
 */
type MeterListResponse = {
    /**
     * Array of meter objects
     */
    data: Array<{
        [key: string]: unknown;
    }>;
    pagination: {
        limit: number;
        offset: number;
        count: number;
    };
};
/**
 * Error response returned when a meter operation fails.
 */
type MeterError = {
    error: string | {
        message: string;
        type: string;
    };
};
/**
 * A single meter object with configuration details.
 */
type MeterGetResponse = {
    /**
     * Meter object
     */
    data: {
        [key: string]: unknown;
    };
};
/**
 * The newly created meter object.
 */
type CreateMeterResponse = {
    /**
     * Created meter object
     */
    data: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for creating a new usage meter with aggregation rules and event matching.
 */
type CreateMeterRequest = {
    /**
     * Human-readable meter name
     */
    name: string;
    /**
     * Event name to match against
     */
    event_name: string;
    /**
     * Aggregation method
     */
    aggregation?: 'sum' | 'count' | 'count_unique' | 'max' | 'last';
    /**
     * URL-safe identifier
     */
    slug?: string;
    /**
     * Meter description
     */
    description?: string;
    /**
     * Property key for sum/max/last aggregations
     */
    value_key?: string;
    /**
     * Filter conditions for matching events
     */
    filter_conditions?: Array<{
        [key: string]: unknown;
    }>;
    /**
     * Property key for count_unique aggregation
     */
    unique_count_key?: string;
    /**
     * Display unit name
     */
    unit_name?: string;
    /**
     * Carry forward last value across periods
     */
    carry_forward?: boolean;
    /**
     * Arbitrary key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Threshold percentages that trigger usage.threshold.reached webhooks.
     */
    alert_thresholds?: Array<number>;
};
/**
 * The updated meter object reflecting the changes.
 */
type UpdateMeterResponse = {
    /**
     * Updated meter object
     */
    data: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for updating an existing meter. Only display name and metadata can be changed.
 */
type UpdateMeterRequest = {
    /**
     * Updated meter name
     */
    name?: string;
    /**
     * Updated slug
     */
    slug?: string;
    /**
     * Updated description
     */
    description?: string;
    /**
     * Meter status
     */
    status?: 'active' | 'archived' | 'draft';
    /**
     * Updated value key
     */
    value_key?: string;
    /**
     * Updated filter conditions
     */
    filter_conditions?: Array<{
        [key: string]: unknown;
    }>;
    /**
     * Updated unique count key
     */
    unique_count_key?: string;
    /**
     * Updated unit name
     */
    unit_name?: string;
    /**
     * Updated carry forward setting
     */
    carry_forward?: boolean;
    /**
     * Updated metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Updated threshold percentages for usage.threshold.reached webhooks.
     */
    alert_thresholds?: Array<number>;
};
/**
 * A single meter price with per-unit cost and billing configuration.
 */
type MeterPriceResponse = {
    /**
     * Price object with tiers
     */
    data: {
        [key: string]: unknown;
    };
};
/**
 * Error response returned when a meter price operation fails.
 */
type MeterPriceError = {
    error: string | {
        message: string;
        type: string;
    };
};
/**
 * Parameters for creating a price attached to a usage meter, defining per-unit cost and billing thresholds.
 */
type CreateMeterPriceRequest = {
    /**
     * Pricing model
     */
    pricing_model: 'per_unit' | 'graduated' | 'volume' | 'package';
    /**
     * ISO 4217 currency code
     */
    currency: string;
    /**
     * Price per unit in minor units (for per_unit)
     */
    unit_amount_minor?: number;
    /**
     * Base charge per period in minor units
     */
    flat_fee_minor?: number;
    /**
     * Units per package (for package model)
     */
    package_size?: number;
    /**
     * Merchant's cost per unit for margin intelligence
     */
    cost_per_unit_minor?: number;
    /**
     * Tier configuration (for graduated and volume)
     */
    tiers?: Array<{
        /**
         * Start of tier range
         */
        first_unit: number;
        /**
         * End of tier range (null = unbounded)
         */
        last_unit?: number | null;
        /**
         * Per-unit price in this tier (minor units)
         */
        unit_amount_minor: number;
        /**
         * Flat fee for entering this tier (minor units)
         */
        flat_amount_minor?: number;
    }>;
};
/**
 * A list of prices attached to a meter.
 */
type MeterPriceListResponse = {
    /**
     * Array of price objects
     */
    data: Array<{
        [key: string]: unknown;
    }>;
};
/**
 * Parameters for updating a meter price. Active prices on existing subscriptions are not retroactively changed.
 */
type UpdateMeterPriceRequest = {
    unit_amount_minor?: number;
    flat_fee_minor?: number;
    package_size?: number;
    cost_per_unit_minor?: number;
    tiers?: Array<{
        /**
         * Start of tier range
         */
        first_unit: number;
        /**
         * End of tier range (null = unbounded)
         */
        last_unit?: number | null;
        /**
         * Per-unit price in this tier (minor units)
         */
        unit_amount_minor: number;
        /**
         * Flat fee for entering this tier (minor units)
         */
        flat_amount_minor?: number;
    }>;
};
/**
 * A paginated list of tax rates.
 */
type TaxRateListResponse = {
    object: 'list';
    data: Array<TaxRate>;
    has_more: boolean;
    total_count?: number;
};
/**
 * A manually configured tax rate applied to invoices and charges. For automatic tax calculation, use the Quaderno integration instead.
 */
type TaxRate = {
    /**
     * Unique identifier for the tax rate
     */
    id: string;
    /**
     * Object type
     */
    object: 'tax_rate';
    /**
     * Display name for the tax rate
     */
    display_name: string;
    /**
     * Description of the tax rate
     */
    description?: string | null;
    /**
     * Tax jurisdiction (e.g., 'US-CA', 'DE', 'GB')
     */
    jurisdiction?: string | null;
    /**
     * Tax percentage (e.g., 8.25 for 8.25%)
     */
    percentage: number;
    /**
     * Whether tax is included in displayed price (EU style)
     */
    inclusive: boolean;
    /**
     * Type of tax
     */
    tax_type: 'vat' | 'sales_tax' | 'gst' | 'other';
    /**
     * ISO country code
     */
    country?: string | null;
    /**
     * State/province code
     */
    state?: string | null;
    /**
     * Whether the tax rate is active
     */
    active: boolean;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Creation timestamp
     */
    created_at: string;
    /**
     * Last update timestamp
     */
    updated_at: string;
};
/**
 * Error response returned when a tax rate operation fails.
 */
type TaxRateErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
        param?: string;
    };
};
/**
 * Parameters for creating a new tax rate with a percentage and jurisdiction details.
 */
type CreateTaxRateRequest = {
    /**
     * Display name for the tax rate
     */
    display_name: string;
    /**
     * Description of the tax rate
     */
    description?: string;
    /**
     * Tax jurisdiction (e.g., 'US-CA', 'DE', 'GB')
     */
    jurisdiction?: string;
    /**
     * Tax percentage (e.g., 8.25 for 8.25%)
     */
    percentage: number;
    /**
     * Whether tax is included in displayed price
     */
    inclusive?: boolean;
    /**
     * Type of tax
     */
    tax_type?: 'vat' | 'sales_tax' | 'gst' | 'other';
    /**
     * ISO 2-letter country code
     */
    country?: string;
    /**
     * State/province code
     */
    state?: string;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for updating a tax rate. Active tax rates on existing invoices are not retroactively changed.
 */
type UpdateTaxRateRequest = {
    /**
     * Display name for the tax rate
     */
    display_name?: string;
    /**
     * Description of the tax rate
     */
    description?: string | null;
    /**
     * Tax jurisdiction
     */
    jurisdiction?: string | null;
    /**
     * ISO 2-letter country code
     */
    country?: string | null;
    /**
     * State/province code
     */
    state?: string | null;
    /**
     * Whether the tax rate is active
     */
    active?: boolean;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * A paginated list of orders matching the query filters.
 */
type OrderListResponse = {
    object: 'list';
    data: Array<Order>;
    has_more: boolean;
    total_count?: number;
};
/**
 * An order represents a one-off purchase with lifecycle operations: create, pay, cancel, and fulfill.
 */
type Order = {
    /**
     * Unique identifier for the order
     */
    id: string;
    /**
     * Object type
     */
    object: 'order';
    /**
     * Public-facing order ID
     */
    public_id: string;
    /**
     * ID of the customer
     */
    customer_id?: string | null;
    /**
     * Order status. draft: Being built. pending: Awaiting payment. paid: Fully paid. partially_paid: Partial payment received. refunded: Refunded. canceled: Canceled. fulfilled: Shipped/delivered.
     */
    status: 'draft' | 'pending' | 'paid' | 'partially_paid' | 'refunded' | 'canceled' | 'fulfilled';
    /**
     * Billing type. one_time: Single purchase. recurring: Subscription-based.
     */
    billing_type: 'one_time' | 'recurring';
    /**
     * Fulfillment status for physical goods.
     */
    fulfillment_status?: 'unfulfilled' | 'partial' | 'fulfilled' | 'returned' | null;
    /**
     * Three-letter ISO currency code
     */
    currency: string;
    /**
     * Subtotal in cents
     */
    subtotal: number;
    /**
     * Total discount in cents
     */
    discount: number;
    /**
     * Total tax in cents
     */
    tax: number;
    /**
     * Total amount in cents
     */
    total: number;
    /**
     * Amount paid in cents
     */
    amount_paid: number;
    /**
     * Amount refunded in cents
     */
    amount_refunded: number;
    /**
     * Amount still due in cents
     */
    amount_due: number;
    line_items?: Array<OrderLineItem>;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    notes?: string | null;
    /**
     * ID of the linked invoice (Commercial Truth)
     */
    invoice_id?: string | null;
    /**
     * ID of the linked subscription (for recurring fulfillment)
     */
    subscription_id?: string | null;
    created_at: string;
    updated_at: string;
    paid_at?: string | null;
    canceled_at?: string | null;
    fulfilled_at?: string | null;
    expires_at?: string | null;
};
/**
 * A line item within an order, representing a product, quantity, and unit price.
 */
type OrderLineItem = {
    id: string;
    product_id?: string | null;
    description: string;
    quantity: number;
    /**
     * Unit price in cents
     */
    unit_price: number;
    /**
     * Subtotal in cents (unit_price * quantity)
     */
    subtotal: number;
    /**
     * Discount in cents
     */
    discount?: number;
    /**
     * Tax in cents
     */
    tax?: number;
    /**
     * Total in cents (subtotal - discount + tax)
     */
    total: number;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    position?: number;
};
/**
 * Error response returned when an order operation fails.
 */
type OrderErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
        param?: string;
    };
};
/**
 * Parameters for creating a new order with line items and customer association.
 */
type CreateOrderRequest = {
    /**
     * Customer ID (optional for guest orders)
     */
    customer_id?: string;
    /**
     * Three-letter ISO currency code
     */
    currency?: string;
    /**
     * Billing type. one_time: Single purchase. recurring: Subscription-based.
     */
    billing_type?: 'one_time' | 'recurring';
    /**
     * Order line items (at least one required)
     */
    line_items: Array<{
        /**
         * Product ID (optional for ad-hoc items)
         */
        product_id?: string;
        description: string;
        quantity?: number;
        /**
         * Unit price in cents
         */
        unit_price: number;
        /**
         * Custom key-value metadata
         */
        metadata?: {
            [key: string]: unknown;
        };
    }>;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    notes?: string;
    /**
     * Expiration timestamp for the order
     */
    expires_at?: string;
    /**
     * ID of the linked invoice (Commercial Truth)
     */
    invoice_id?: string;
    /**
     * ID of the linked subscription (for recurring fulfillment)
     */
    subscription_id?: string;
};
/**
 * Parameters for updating order metadata or notes before fulfillment.
 */
type UpdateOrderRequest = {
    customer_id?: string | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    notes?: string | null;
};
/**
 * Parameters for paying an order, specifying the payment method and optional partial amount.
 */
type PayOrderRequest = {
    /**
     * Saved payment method ID
     */
    payment_method_id?: string;
    /**
     * One-time payment token
     */
    payment_token?: string;
    /**
     * Partial payment amount in cents (defaults to full amount_due)
     */
    amount?: number;
};
/**
 * Parameters for canceling an order before fulfillment.
 */
type CancelOrderRequest = {
    /**
     * Reason for cancellation
     */
    reason?: string;
};
/**
 * Parameters for marking an order as fulfilled, with optional tracking and shipping details.
 */
type FulfillOrderRequest = {
    /**
     * Shipping tracking number
     */
    tracking_number?: string;
    /**
     * Shipping carrier (e.g., 'ups', 'fedex', 'usps')
     */
    carrier?: string;
    /**
     * Specific line items to fulfill (defaults to all)
     */
    line_item_ids?: Array<string>;
    /**
     * Send fulfillment notification to customer
     */
    notify_customer?: boolean;
};
/**
 * A paginated list of payments matching the query filters.
 */
type PaymentListResponse = {
    object: 'list';
    data: Array<Payment>;
    has_more: boolean;
    total_count?: number;
};
/**
 * A completed or in-progress money movement. Payments represent funds transferred between a customer and your account across all channels — online, terminal, and recurring.
 */
type Payment = {
    /**
     * Unique identifier for the payment
     */
    id: string;
    /**
     * Object type
     */
    object: 'payment';
    /**
     * Associated invoice ID
     */
    invoice_id?: string | null;
    /**
     * Customer ID
     */
    customer_id?: string | null;
    /**
     * Payment status. pending: Processing. authorized: Funds reserved. captured/succeeded: Funds collected. failed: Payment failed. voided: Canceled before capture. refunded/partially_refunded: Returned to customer.
     */
    status: 'pending' | 'authorized' | 'captured' | 'succeeded' | 'failed' | 'voided' | 'refunded' | 'partially_refunded';
    /**
     * Three-letter ISO currency code
     */
    currency: string;
    /**
     * Payment amount in cents
     */
    amount: number;
    /**
     * Amount captured in cents (for auth-capture flow)
     */
    amount_captured?: number | null;
    /**
     * Amount refunded in cents
     */
    amount_refunded?: number;
    /**
     * Name of the payment processor that handled this payment
     */
    gateway?: string | null;
    /**
     * Processor's transaction reference
     */
    gateway_transaction_id?: string | null;
    /**
     * Normalized response code from the processor
     */
    gateway_response_code?: string | null;
    /**
     * Human-readable response message from the processor
     */
    gateway_response_text?: string | null;
    /**
     * Payment method type (card, ach, wallet)
     */
    payment_method_type?: string | null;
    /**
     * Card brand (visa, mastercard, etc.)
     */
    card_brand?: string | null;
    /**
     * Last 4 digits of card
     */
    card_last_four?: string | null;
    /**
     * Payment channel. card_present: terminal/POS payment. card_not_present: online or recurring payment. bank_transfer: ACH/direct debit. manual: manually recorded.
     */
    payment_channel?: 'card_present' | 'card_not_present' | 'bank_transfer' | 'manual' | null;
    /**
     * Card entry mode for card-present (terminal) payments. null for online payments.
     */
    entry_mode?: 'emv_chip' | 'contactless' | 'magnetic_stripe' | 'manual_entry' | 'fallback' | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    created_at: string;
    updated_at: string;
    authorized_at?: string | null;
    captured_at?: string | null;
    voided_at?: string | null;
    refunded_at?: string | null;
};
/**
 * Error response returned when a payment operation fails.
 */
type PaymentErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
        param?: string;
    };
};
/**
 * Parameters for capturing a previously authorized payment. Optionally specify a partial capture amount.
 */
type CapturePaymentRequest = {
    /**
     * Amount to capture in cents. Defaults to full authorized amount. Must be <= authorized amount.
     */
    amount?: number;
};
/**
 * Parameters for voiding a payment before settlement. Include a reason for your records.
 */
type CancelPaymentRequest = {
    /**
     * Reason for cancellation/void
     */
    reason?: string;
};
type WebhookEndpoint = {
    /**
     * Unique identifier for the webhook endpoint
     */
    id: string;
    /**
     * The URL that receives webhook POST requests
     */
    url: string;
    /**
     * Optional human-readable description
     */
    description: string | null;
    /**
     * Event types this endpoint subscribes to
     */
    enabled_events: Array<string>;
    /**
     * Whether the endpoint is currently receiving events
     */
    status: 'enabled' | 'disabled';
    /**
     * Signing secret. Returned only on create or secret rotation.
     */
    secret?: string;
    /**
     * Circuit breaker status. Opens after repeated delivery failures.
     */
    circuit_breaker_state: 'closed' | 'open' | 'half_open';
    /**
     * Total number of delivery attempts
     */
    total_deliveries: number;
    /**
     * Number of successful deliveries
     */
    successful_deliveries: number;
    /**
     * Number of failed deliveries
     */
    failed_deliveries: number;
    /**
     * Timestamp of the most recent delivery attempt
     */
    last_delivery_at: string | null;
    /**
     * When the endpoint was created
     */
    created_at: string;
    /**
     * When the endpoint was last modified
     */
    updated_at: string;
};
type WebhookDeliveryListResponse = {
    object: 'list';
    data: Array<WebhookDelivery>;
    has_more: boolean;
    url: string;
};
/**
 * A record of a single webhook delivery attempt chain to one endpoint for one event. Use these records to debug specific delivery failures and to retry individual deliveries.
 */
type WebhookDelivery = {
    id: string;
    object: 'webhook_delivery';
    endpoint_id: string;
    /**
     * The event this delivery attempted to send.
     */
    event_id: string;
    event_type: string | null;
    /**
     * Delivery state. pending: queued or retrying. succeeded: 2xx response received. failed: last attempt failed, may retry based on attempts/max_attempts. dead_lettered: max attempts exhausted, will not retry automatically.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'dead_lettered';
    attempts: number;
    max_attempts: number;
    /**
     * HTTP status code returned on the last attempt.
     */
    last_status_code: number | null;
    /**
     * Truncated error message from the last failed attempt.
     */
    last_error: string | null;
    last_error_code: string | null;
    last_duration_ms: number | null;
    last_attempt_at: string | null;
    next_retry_at: string | null;
    delivered_at: string | null;
    dead_lettered_at: string | null;
    dead_letter_reason: string | null;
    created_at: string;
    updated_at: string;
};
type WebhookDeliveryErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
    };
};
type WebhookDeliveryResponse = {
    data: WebhookDelivery;
};
type WebhookDeliveryRetryResponse = {
    data: WebhookDelivery;
};
type CustomerPortalErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
    };
};
/**
 * Parameters for creating a customer-portal session. The authenticated merchant must already own the referenced customer.
 */
type CreateCustomerPortalSessionRequest = {
    /**
     * UUID of the customer this session will authenticate as.
     */
    customer_id: string;
    /**
     * Lifetime of the session token in minutes. Between 5 and 240; default 60. Shorter TTLs reduce blast radius if a token leaks.
     */
    ttl_minutes?: number;
};
type PortalCustomerResponse = {
    data: PortalCustomer;
};
/**
 * The authenticated customer, as visible through the customer-portal surface. This is a deliberately thinner projection than the merchant-facing `Customer` — it omits tax IDs, internal metadata, and anything that could leak merchant-side context to the customer.
 */
type PortalCustomer = {
    id: string;
    object: 'customer';
    email: string | null;
    name: string | null;
    phone: string | null;
    company_name: string | null;
    default_currency: string | null;
    locale: string | null;
    created_at: string;
};
type PortalSubscriptionList = {
    object: 'list';
    data: Array<PortalSubscription>;
    has_more: boolean;
    url: string;
};
/**
 * A customer-facing subscription projection. Pricing and cadence fields are exposed; merchant-only bookkeeping fields (plan_id, external IDs) are not.
 */
type PortalSubscription = {
    id: string;
    object: 'subscription';
    status: string;
    currency: string | null;
    amount_minor: number | null;
    interval: string | null;
    interval_count: number | null;
    current_period_start: string | null;
    current_period_end: string | null;
    trial_end: string | null;
    cancel_at: string | null;
    canceled_at: string | null;
    started_at: string | null;
    created_at: string;
};
type PortalSubscriptionResponse = {
    data: PortalSubscription;
};
type PortalSubscriptionCancelResponse = {
    data: PortalSubscription;
};
type CancelSubscriptionRequest = {
    /**
     * If `true` (default), cancel at the end of the current period. If `false`, cancel immediately.
     */
    cancel_at_period_end?: boolean;
    /**
     * Merchant-visible note recording why the customer canceled.
     */
    reason?: string;
};
type PortalInvoiceList = {
    object: 'list';
    data: Array<PortalInvoice>;
    has_more: boolean;
    url: string;
};
/**
 * A customer-facing invoice projection. Lists and retrievals are scoped to invoices owned by the authenticated customer.
 */
type PortalInvoice = {
    id: string;
    object: 'invoice';
    invoice_number: string | null;
    status: string;
    currency: string | null;
    subtotal: number | null;
    tax_amount: number | null;
    discount_amount: number | null;
    total: number;
    amount_paid: number | null;
    amount_due: number | null;
    invoice_date: string | null;
    due_date: string | null;
    paid_at: string | null;
    created_at: string;
};
type PortalInvoiceResponse = {
    data: PortalInvoice;
};
type CustomerMeterList = {
    object: 'list';
    data: Array<CustomerMeter>;
    /**
     * Customer-meter list responses are not paginated — every meter the merchant has is returned for the specified customer.
     */
    has_more: false;
    url: string;
};
/**
 * An on-the-fly aggregate of a customer's consumption for a single meter. RevKeen computes this live from `usage_events` — there is no separate `customer_meters` table to keep in sync.
 */
type CustomerMeter = {
    object: 'customer_meter';
    customer_id: string;
    meter_id: string;
    meter_name: string;
    /**
     * The `event_name` the merchant's code posts to /v2/usage-events for this meter.
     */
    meter_event_name: string;
    /**
     * How quantities are aggregated. Typical values: `sum`, `count`, `max`, `unique`.
     */
    aggregation: string;
    /**
     * Human-readable unit for display (e.g. `tokens`, `requests`, `GB`). Merchant-configurable.
     */
    unit_name: string | null;
    /**
     * Aggregate across all usage events for this (customer, meter) pair. The aggregation function applied matches the meter's `aggregation` field.
     */
    total_quantity: number;
    /**
     * Number of `usage_events` rows that contributed to the aggregate. Diagnostic — not the aggregate itself.
     */
    event_count: number;
    /**
     * Timestamp of the most recent usage event. Null if no events have been recorded.
     */
    last_event_at: string | null;
};
type CustomerMeterErrorResponse = {
    error: {
        type: string;
        code: string;
        message: string;
    };
};
type CustomerMeterResponse = {
    data: CustomerMeter;
};
/**
 * A PaymentIntent tracks the lifecycle of a payment from creation through authorization, optional 3DS authentication, and final capture.
 */
type PaymentIntent = {
    /**
     * Public payment intent ID (pi_xxx)
     */
    id: string;
    /**
     * Object type
     */
    object: 'payment_intent';
    /**
     * Amount in cents
     */
    amount: number;
    /**
     * Amount that can be captured (for manual capture)
     */
    amount_capturable: number;
    /**
     * Amount actually received
     */
    amount_received: number;
    /**
     * Three-letter ISO currency code
     */
    currency: string;
    /**
     * Customer ID
     */
    customer: string;
    /**
     * Description for merchant reference
     */
    description?: string | null;
    /**
     * Last error from payment attempt
     */
    last_payment_error?: {
        /**
         * Error code
         */
        code: string;
        /**
         * Human-readable error message
         */
        message: string;
        /**
         * Card decline code if applicable
         */
        decline_code?: string;
        /**
         * Payment method that caused the error
         */
        payment_method?: {
            /**
             * Payment method ID
             */
            id: string;
            /**
             * Payment method type
             */
            type: string;
        };
    } | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Action required from customer (3DS, etc.)
     */
    next_action?: {
        /**
         * Type of action required
         */
        type: 'redirect_to_url' | 'use_stripe_sdk' | 'display_bank_transfer_instructions';
        /**
         * Present when type is redirect_to_url
         */
        redirect_to_url?: {
            /**
             * URL to redirect customer for 3DS authentication
             */
            url: string;
            /**
             * URL to return to after 3DS
             */
            return_url: string;
        };
    } | null;
    /**
     * Payment method ID
     */
    payment_method?: string | null;
    /**
     * Email for receipt
     */
    receipt_email?: string | null;
    /**
     * Statement descriptor
     */
    statement_descriptor?: string | null;
    /**
     * Statement descriptor suffix
     */
    statement_descriptor_suffix?: string | null;
    /**
     * Payment intent status. requires_payment_method: Needs payment method. requires_confirmation: Ready to confirm. requires_action: Requires customer action (3DS). processing: Being processed. succeeded: Payment complete. canceled: Canceled.
     */
    status: 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'canceled';
    /**
     * Capture method. automatic: Capture immediately on confirmation. manual: Authorize then capture separately.
     */
    capture_method: 'automatic' | 'manual';
    /**
     * Client secret for frontend confirmation
     */
    client_secret: string;
    /**
     * When the intent was canceled
     */
    canceled_at?: string | null;
    /**
     * Why the intent was canceled
     */
    cancellation_reason?: 'duplicate' | 'fraudulent' | 'requested_by_customer' | 'abandoned' | 'failed_invoice' | null;
    /**
     * Unix timestamp of creation
     */
    created: number;
    /**
     * Whether in live mode
     */
    livemode: boolean;
};
/**
 * Error response returned when a payment intent operation fails.
 */
type PaymentIntentErrorResponse = {
    error: {
        /**
         * Error type (api_error, invalid_request_error, etc.)
         */
        type: string;
        /**
         * Error code
         */
        code: string;
        /**
         * Human-readable error message
         */
        message: string;
        /**
         * Parameter that caused the error
         */
        param?: string;
    };
};
/**
 * Parameters for creating a new payment intent. Specify the amount, currency, customer, and optionally a payment method and capture strategy.
 */
type CreatePaymentIntentRequest = {
    /**
     * Amount in cents. Must be greater than 0.
     */
    amount: number;
    /**
     * Three-letter ISO currency code. Defaults to USD.
     */
    currency?: string;
    /**
     * Customer ID to charge
     */
    customer: string;
    /**
     * Payment method ID. If not provided, status will be requires_payment_method.
     */
    payment_method?: string;
    /**
     * Capture method. Defaults to automatic.
     */
    capture_method?: 'automatic' | 'manual';
    /**
     * Description for merchant reference
     */
    description?: string;
    /**
     * Statement descriptor shown on customer's statement
     */
    statement_descriptor?: string;
    /**
     * Statement descriptor suffix
     */
    statement_descriptor_suffix?: string;
    /**
     * Email to send receipt to
     */
    receipt_email?: string;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Specific gateway merchant ID for multi-MID setups (NMI)
     */
    gateway_merchant_id?: string;
};
/**
 * A paginated list of payment intents matching the query filters.
 */
type PaymentIntentListResponse = {
    object: 'list';
    data: Array<PaymentIntent>;
    has_more: boolean;
    /**
     * The URL for accessing this list
     */
    url: string;
};
/**
 * Parameters for updating a payment intent before confirmation. Only amount, description, payment method, and metadata can be changed.
 */
type UpdatePaymentIntentRequest = {
    /**
     * Amount in cents
     */
    amount?: number;
    /**
     * Three-letter ISO currency code
     */
    currency?: string;
    /**
     * Payment method ID
     */
    payment_method?: string;
    /**
     * Description for merchant reference
     */
    description?: string;
    /**
     * Statement descriptor
     */
    statement_descriptor?: string;
    /**
     * Statement descriptor suffix
     */
    statement_descriptor_suffix?: string;
    /**
     * Email to send receipt to
     */
    receipt_email?: string;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for confirming a payment intent. Optionally attach a payment method and specify a return URL for 3DS flows.
 */
type ConfirmPaymentIntentRequest = {
    /**
     * Payment method ID. Required if not already set on the intent.
     */
    payment_method?: string;
    /**
     * URL to redirect to after 3DS authentication
     */
    return_url?: string;
};
/**
 * Parameters for capturing a previously authorized payment intent. Specify amount_to_capture for partial captures.
 */
type CapturePaymentIntentRequest = {
    /**
     * Amount to capture in cents. Defaults to full authorized amount.
     */
    amount_to_capture?: number;
};
/**
 * Parameters for canceling a payment intent that has not yet been captured.
 */
type CancelPaymentIntentRequest = {
    /**
     * Reason for cancellation
     */
    cancellation_reason?: 'duplicate' | 'fraudulent' | 'requested_by_customer' | 'abandoned' | 'failed_invoice';
};
/**
 * A SetupIntent saves a payment method for future use WITHOUT charging the customer. Use it to collect and verify card details before storing them.
 */
type SetupIntent = {
    /**
     * Unique identifier for the setup intent
     */
    id: string;
    /**
     * Object type, always 'setup_intent'
     */
    object: 'setup_intent';
    /**
     * Public ID visible in API responses (seti_xxx format)
     */
    public_id: string;
    /**
     * The status of the setup intent
     */
    status: 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'canceled';
    /**
     * ID of the customer this setup intent is for
     */
    customer_id: string | null;
    /**
     * ID of the payment method being set up
     */
    payment_method_id: string | null;
    /**
     * Allowed payment method types for this setup
     */
    payment_method_types: Array<string>;
    /**
     * Indicates how the payment method will be used
     */
    usage: 'on_session' | 'off_session';
    next_action: SetupIntentNextAction;
    /**
     * Client secret for frontend confirmation
     */
    client_secret: string;
    /**
     * Name of the payment processor that handled this setup intent
     */
    gateway: string;
    last_error: SetupIntentError;
    /**
     * Reason for cancellation if canceled
     */
    cancellation_reason: 'abandoned' | 'requested_by_customer' | 'duplicate' | null;
    /**
     * Merchant description for reference
     */
    description: string | null;
    /**
     * Custom metadata attached to the setup intent
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * When the setup intent was confirmed
     */
    confirmed_at: string | null;
    /**
     * When the setup intent was canceled
     */
    canceled_at: string | null;
    /**
     * When the setup intent was created
     */
    created_at: string;
    /**
     * When the setup intent was last updated
     */
    updated_at: string;
};
/**
 * Action required from customer (3DS redirect, etc.)
 */
type SetupIntentNextAction = {
    /**
     * The type of action to take
     */
    type: 'redirect_to_url' | 'use_stripe_sdk';
    /**
     * Redirect details for 3DS authentication
     */
    redirect_to_url?: {
        /**
         * The URL to redirect the customer to
         */
        url: string;
        /**
         * The URL to redirect back to after completion
         */
        return_url: string;
    };
    /**
     * SDK-specific data for client-side handling
     */
    use_stripe_sdk?: {
        [key: string]: unknown;
    };
} | null;
/**
 * Last error encountered during setup
 */
type SetupIntentError = {
    /**
     * Error code
     */
    code: string;
    /**
     * Human-readable error message
     */
    message: string;
    /**
     * Decline code from the payment gateway
     */
    decline_code?: string;
    /**
     * The payment method that caused the error
     */
    payment_method?: {
        id: string;
        type: string;
    };
} | null;
/**
 * Parameters for creating a setup intent to save a payment method for a customer.
 */
type CreateSetupIntentRequest = {
    /**
     * ID of the customer to attach the payment method to
     */
    customer_id?: string;
    /**
     * Allowed payment method types
     */
    payment_method_types?: Array<string>;
    /**
     * How the payment method will be used
     */
    usage?: 'on_session' | 'off_session';
    /**
     * Merchant description for reference
     */
    description?: string;
    /**
     * Custom metadata to attach
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * A paginated list of setup intents matching the query filters.
 */
type SetupIntentList = {
    /**
     * Object type, always 'list'
     */
    object: 'list';
    /**
     * Array of setup intents
     */
    data: Array<SetupIntent>;
    /**
     * Whether there are more results available
     */
    has_more: boolean;
    /**
     * Total count of matching setup intents
     */
    total_count: number;
    /**
     * URL for this list resource
     */
    url: string;
};
/**
 * Parameters for updating a setup intent before confirmation.
 */
type UpdateSetupIntentRequest = {
    /**
     * ID of the customer to attach the payment method to
     */
    customer_id?: string;
    /**
     * Allowed payment method types
     */
    payment_method_types?: Array<string>;
    /**
     * Merchant description for reference
     */
    description?: string;
    /**
     * Custom metadata to attach
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for confirming a setup intent, which verifies the payment method and saves it for future use.
 */
type ConfirmSetupIntentRequest = {
    /**
     * ID of the payment method to confirm with
     */
    payment_method_id?: string;
    /**
     * URL to redirect to after 3DS authentication
     */
    return_url?: string;
};
/**
 * Parameters for canceling a setup intent that is no longer needed.
 */
type CancelSetupIntentRequest = {
    /**
     * Reason for cancellation
     */
    cancellation_reason?: 'abandoned' | 'requested_by_customer' | 'duplicate';
};
/**
 * A list of payment methods attached to a customer, with optional type filtering.
 */
type PaymentMethodList = {
    /**
     * Object type, always 'list'
     */
    object: 'list';
    /**
     * Array of payment methods
     */
    data: Array<PaymentMethod>;
    /**
     * Whether there are more results available
     */
    has_more: boolean;
    /**
     * URL for this list resource
     */
    url: string;
};
/**
 * Parameters for updating a payment method's billing details or metadata.
 */
type UpdatePaymentMethodRequest = {
    billing_details?: BillingDetails & unknown;
    /**
     * Custom metadata to attach
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for attaching a payment method to a customer. The payment method must have been created first.
 */
type AttachPaymentMethodRequest = {
    /**
     * ID of the customer to attach the payment method to
     */
    customer_id: string;
};
/**
 * A paginated list of events matching the query filters.
 */
type EventListResponse = {
    object: 'list';
    data: Array<Event>;
    has_more: boolean;
    /**
     * The URL for accessing this list
     */
    url: string;
};
/**
 * An event represents something that happened in your account — a payment succeeded, an invoice was created, a subscription changed. Events are the source of truth for webhook delivery.
 */
type Event = {
    /**
     * Unique event identifier
     */
    id: string;
    /**
     * Object type
     */
    object: 'event';
    /**
     * Event type (e.g., invoice.paid, payment.succeeded)
     */
    type: string;
    /**
     * Event data containing the affected object
     */
    data: {
        /**
         * The object that triggered the event (invoice, payment, etc.)
         */
        object?: unknown;
        /**
         * Previous values of attributes that changed (for update events)
         */
        previous_attributes?: unknown;
    };
    request: EventRequest;
    /**
     * Number of webhooks still pending delivery for this event
     */
    pending_webhooks: number;
    /**
     * API version used to render this event
     */
    api_version: string | null;
    /**
     * Whether this event was produced in live mode
     */
    livemode: boolean;
    /**
     * Unix timestamp when the event was created
     */
    created: number;
};
/**
 * Information about the request that triggered this event
 */
type EventRequest = {
    /**
     * Request ID that triggered this event (if applicable)
     */
    id: string | null;
    /**
     * Idempotency key used in the request (if applicable)
     */
    idempotency_key: string | null;
} | null;
/**
 * Error response returned when an event operation fails.
 */
type EventErrorResponse = {
    error: {
        /**
         * Error type
         */
        type: string;
        /**
         * Error code
         */
        code: string;
        /**
         * Human-readable error message
         */
        message: string;
        /**
         * Parameter that caused the error
         */
        param?: string;
    };
};
/**
 * Confirmation that a webhook event was resent to the specified endpoint.
 */
type ResendWebhookResponse = {
    /**
     * Whether the webhook was queued for resending
     */
    success: boolean;
    /**
     * The webhook endpoint ID the event was sent to
     */
    webhook_endpoint_id?: string;
    /**
     * Additional information
     */
    message?: string;
};
/**
 * The test event that was sent, including delivery status.
 */
type TestEventResponse = {
    /**
     * Whether the test event was created
     */
    success: boolean;
    event?: Event & unknown;
    /**
     * Additional information
     */
    message?: string;
};
/**
 * Parameters for creating a test event to verify your webhook endpoint integration.
 */
type CreateTestEventRequest = {
    /**
     * The type of test event to create
     */
    type: 'checkout.session.completed' | 'checkout.session.expired' | 'checkout.session.async_payment_succeeded' | 'checkout.session.async_payment_failed' | 'invoice.created' | 'invoice.finalized' | 'invoice.paid' | 'invoice.payment_failed' | 'invoice.voided' | 'invoice.marked_uncollectible' | 'invoice.upcoming' | 'invoice.sent' | 'payment.succeeded' | 'payment.failed' | 'payment.refunded' | 'payment.disputed' | 'payment_intent.created' | 'payment_intent.succeeded' | 'payment_intent.payment_failed' | 'payment_intent.canceled' | 'payment_intent.requires_action' | 'payment_method.attached' | 'payment_method.detached' | 'payment_method.updated' | 'subscription.created' | 'subscription.updated' | 'subscription.canceled' | 'subscription.paused' | 'subscription.resumed' | 'subscription.trial_will_end' | 'subscription.renewed' | 'customer.created' | 'customer.updated' | 'customer.deleted' | 'refund.created' | 'refund.updated' | 'refund.failed' | 'dispute.created' | 'dispute.updated' | 'dispute.closed' | 'order.created' | 'order.paid' | 'order.canceled';
};
/**
 * A subscription schedule defines future changes to a subscription. Each phase specifies different pricing, quantities, or plans that take effect at specified dates.
 */
type SubscriptionSchedule = {
    /**
     * Public schedule ID (sub_sched_xxx)
     */
    id: string;
    /**
     * Object type
     */
    object: 'subscription_schedule';
    /**
     * Schedule status. not_started: Scheduled for future. active: Currently executing phases. completed: All phases finished. canceled: Manually canceled. released: Detached from subscription.
     */
    status: 'not_started' | 'active' | 'completed' | 'canceled' | 'released';
    /**
     * Customer ID
     */
    customer: string | null;
    /**
     * Linked subscription ID
     */
    subscription: string | null;
    /**
     * Current phase being executed
     */
    current_phase: {
        /**
         * Phase start (Unix timestamp)
         */
        start_date: number;
        /**
         * Phase end (Unix timestamp)
         */
        end_date: number | null;
    } | null;
    /**
     * All phases in the schedule
     */
    phases: Array<SchedulePhase>;
    /**
     * What happens when the schedule completes. cancel: Cancel the subscription. release: Make subscription standalone.
     */
    end_behavior: 'cancel' | 'release';
    /**
     * When released (Unix timestamp)
     */
    released_at?: number | null;
    /**
     * Subscription ID at release time
     */
    released_subscription?: string | null;
    /**
     * Custom metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Unix timestamp of creation
     */
    created: number;
    /**
     * Whether in live mode
     */
    livemode: boolean;
};
/**
 * A time-bounded phase within a subscription schedule, with its own pricing, quantities, and billing configuration.
 */
type SchedulePhase = {
    /**
     * Products/prices included in this phase
     */
    items: Array<PhaseItem>;
    /**
     * When this phase starts (ISO 8601 date)
     */
    start_date: string;
    /**
     * When this phase ends (null for indefinite)
     */
    end_date?: string | null;
    /**
     * How to handle prorations when entering this phase
     */
    proration_behavior?: 'create_prorations' | 'none' | 'always_invoice';
    /**
     * Override billing cycle anchor for this phase
     */
    billing_cycle_anchor?: string | null;
    /**
     * Payment method to use for this phase
     */
    default_payment_method?: string | null;
    /**
     * How to collect payment for this phase
     */
    collection_method?: 'charge_automatically' | 'send_invoice';
    /**
     * Coupon code to apply during this phase
     */
    coupon?: string | null;
    /**
     * End of trial period (if applicable)
     */
    trial_end?: string | null;
    /**
     * Phase-specific metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * A product-price pair within a schedule phase, defining what the customer is billed for during that phase.
 */
type PhaseItem = {
    /**
     * Price ID for this item
     */
    price_id: string;
    /**
     * Quantity of this item
     */
    quantity?: number;
};
/**
 * Error response returned when a subscription schedule operation fails.
 */
type SubscriptionScheduleErrorResponse = {
    error: {
        /**
         * Error type
         */
        type: string;
        /**
         * Error code
         */
        code: string;
        /**
         * Human-readable error message
         */
        message: string;
        /**
         * Parameter that caused the error
         */
        param?: string;
    };
};
/**
 * Parameters for creating a subscription schedule with one or more phases of pricing and billing changes.
 */
type CreateSubscriptionScheduleRequest = {
    /**
     * Customer ID (required if no subscription)
     */
    customer?: string;
    /**
     * Existing subscription to attach schedule to
     */
    subscription?: string;
    /**
     * When schedule starts. 'now', ISO date, or Unix timestamp. Defaults to now.
     */
    start_date?: 'now' | string | number;
    /**
     * Phases defining the schedule (at least one required)
     */
    phases: Array<SchedulePhase>;
    /**
     * What happens when all phases complete
     */
    end_behavior?: 'cancel' | 'release';
    /**
     * Custom metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * A paginated list of subscription schedules matching the query filters.
 */
type SubscriptionScheduleListResponse = {
    object: 'list';
    data: Array<SubscriptionSchedule>;
    has_more: boolean;
    /**
     * The URL for accessing this list
     */
    url: string;
};
/**
 * Parameters for updating a subscription schedule's phases before they take effect.
 */
type UpdateSubscriptionScheduleRequest = {
    /**
     * Replace all phases
     */
    phases?: Array<SchedulePhase>;
    /**
     * What happens when all phases complete
     */
    end_behavior?: 'cancel' | 'release';
    /**
     * Proration behavior when updating phases
     */
    proration_behavior?: 'create_prorations' | 'none' | 'always_invoice';
    /**
     * Custom metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Parameters for canceling a subscription schedule, optionally reverting the subscription to its pre-schedule state.
 */
type CancelSubscriptionScheduleRequest = {
    /**
     * Generate a final invoice immediately
     */
    invoice_now?: boolean;
    /**
     * Prorate final invoice
     */
    prorate?: boolean;
};
/**
 * Parameters for releasing a subscription schedule, detaching it from the subscription while keeping current terms.
 */
type ReleaseSubscriptionScheduleRequest = {
    /**
     * Keep the subscription's cancel_at date if set
     */
    preserve_cancel_date?: boolean;
};
/**
 * A single terminal payment object with full device and transaction details.
 */
type TerminalPaymentResponse = {
    data: TerminalPayment;
};
/**
 * A card-present payment processed through a POS terminal, with device details and card entry mode.
 */
type TerminalPayment = {
    /**
     * Unique identifier for this terminal payment attempt
     */
    id: string;
    /**
     * Associated invoice ID, or null for walk-in/ad-hoc payments
     */
    invoice_id: string | null;
    /**
     * The terminal device that processed (or is processing) this payment
     */
    device_id: string | null;
    /**
     * Transaction type. sale: original charge. refund: money returned. void: pre-settlement cancellation.
     */
    type: 'sale' | 'refund' | 'void';
    /**
     * Payment lifecycle status. requested: command sent, awaiting card. in_progress: terminal processing. approved: payment succeeded. declined: issuer declined. cancelled: merchant cancelled. error: terminal error. timed_out: no response within 3 minutes.
     */
    status: 'requested' | 'in_progress' | 'approved' | 'declined' | 'cancelled' | 'error' | 'timed_out' | 'standalone_approved' | 'standalone_declined';
    /**
     * Amount in minor units (e.g., pence for GBP, cents for USD)
     */
    amount_minor: number;
    /**
     * ISO 4217 currency code
     */
    currency: string;
    /**
     * Payment reference (invoice number or custom reference)
     */
    reference: string | null;
    /**
     * Serial number of the PAX terminal that processed this payment
     */
    terminal_serial: string | null;
    /**
     * Unique Transaction Identifier from the terminal
     */
    uti: string | null;
    /**
     * Authorization code from the payment processor. Present when approved.
     */
    auth_code: string | null;
    /**
     * Terminal response code. '00' indicates approval.
     */
    response_code: string | null;
    /**
     * Retrieval Reference Number for settlement reconciliation
     */
    rrn: string | null;
    /**
     * Card network (e.g., VISA, MASTERCARD, AMEX)
     */
    card_scheme: string | null;
    /**
     * Masked card number — only the last 4 digits are visible
     */
    masked_pan: string | null;
    /**
     * How the card was read: contactless (NFC tap), emv_chip (chip insert), magnetic_stripe (swipe), manual_entry (keyed), or fallback (chip-to-swipe)
     */
    entry_mode: string | null;
    /**
     * Human-readable error message when status is error or timed_out
     */
    error_message: string | null;
    /**
     * ISO 8601 timestamp when the payment was initiated
     */
    created_at: string;
    /**
     * ISO 8601 timestamp when the terminal returned a result, or null if still in progress
     */
    completed_at: string | null;
};
/**
 * Error response returned when a terminal payment operation fails.
 */
type TerminalPaymentErrorResponse = {
    error: string;
    message?: string;
    code?: string;
};
/**
 * Parameters for initiating a card-present payment on a POS terminal device.
 */
type CreateTerminalPaymentRequest = {
    /**
     * The ID of the terminal device to send the payment to. Use List Devices to discover available device IDs. Even merchants with a single terminal must pass the device_id explicitly — there is no auto-routing fallback.
     */
    device_id: string;
    /**
     * Amount in minor units (e.g., pence for GBP, cents for USD)
     */
    amount_minor: number;
    /**
     * ISO 4217 currency code
     */
    currency: string;
    /**
     * The invoice to charge. Omit for walk-in or ad-hoc payments where no invoice exists. When omitted, the terminal payment is recorded without an invoice association.
     */
    invoice_id?: string;
    /**
     * Custom reference for the payment. Auto-generated if not provided.
     */
    reference?: string;
};
/**
 * A paginated list of terminal payments matching the query filters.
 */
type TerminalPaymentListResponse = {
    data: Array<TerminalPayment>;
    meta: {
        count: number;
        limit: number;
    };
};
/**
 * Parameters for refunding a completed terminal payment, optionally specifying a partial amount.
 */
type RefundTerminalPaymentRequest = {
    /**
     * Amount to refund in minor units. Omit for a full refund.
     */
    amount_minor?: number;
    /**
     * Reason for the refund
     */
    reason?: string;
};
/**
 * Parameters for voiding an unsettled terminal payment before end-of-day settlement.
 */
type VoidTerminalPaymentRequest = {
    /**
     * Reason for the void
     */
    reason?: string;
};
/**
 * A list of terminal devices registered for your merchant account.
 */
type TerminalDeviceListResponse = {
    data: Array<TerminalDevice>;
    meta: {
        count: number;
    };
};
/**
 * A POS terminal device registered to your merchant account, with connection status and capabilities.
 */
type TerminalDevice = {
    /**
     * Unique identifier for this terminal device. Use this as the device_id when initiating payments.
     */
    id: string;
    /**
     * Friendly name assigned to this device (e.g., 'Front Desk Terminal')
     */
    device_name: string | null;
    /**
     * Serial number of the paired PAX terminal hardware
     */
    terminal_serial: string | null;
    /**
     * The LAN IP address of the terminal as seen by the connector on the merchant's local network. This is not a publicly reachable address — all commands flow through the RevKeen cloud.
     */
    terminal_ip: string | null;
    /**
     * Operating system of the machine running the Terminal Connector application
     */
    platform: 'macos' | 'windows' | 'linux' | null;
    /**
     * Device connectivity status. online: connector connected and heartbeat within 5 minutes. offline: heartbeat stale or connector disconnected. pairing: connector registered but terminal not yet paired.
     */
    status: 'online' | 'offline' | 'pairing';
    /**
     * Whether a PAX terminal has been paired to this connector device. Must be true to accept payments.
     */
    terminal_paired: boolean;
    /**
     * Whether the connector can currently reach the PAX terminal on the local network
     */
    terminal_reachable: boolean | null;
    /**
     * Version of the Terminal Connector application
     */
    app_version: string | null;
    /**
     * ISO 8601 timestamp of the last heartbeat received from this device. Devices with no heartbeat in 5 minutes are considered offline.
     */
    last_heartbeat_at: string | null;
};
/**
 * Error response returned when a terminal device operation fails.
 */
type TerminalDeviceErrorResponse = {
    error: string;
    message?: string;
};
/**
 * A single terminal device with connection status and configuration details.
 */
type TerminalDeviceResponse = {
    data: TerminalDevice;
};
/**
 * Result of a batch ingest operation showing how many events were accepted and any that were rejected.
 */
type BatchIngestResult = {
    object: 'usage_event_batch_result';
    summary: {
        ingested: number;
        duplicate: number;
        skipped: number;
        failed: number;
    };
    data: Array<{
        index: number;
        status: 'ingested' | 'duplicate' | 'skipped' | 'failed';
        id?: string;
        reason?: string;
    }>;
};
/**
 * Error response returned when a usage event operation fails.
 */
type UsageEventError = {
    error: string | {
        message: string;
        type: string;
    };
};
/**
 * A batch of usage events to ingest, supporting up to 1000 events per request.
 */
type BatchIngestRequest = {
    /**
     * Array of usage events (1–1000)
     */
    events: Array<UsageEvent>;
};
/**
 * A single usage event representing customer consumption of a metered resource.
 */
type UsageEvent = {
    /**
     * Event name matching a meter's event_name
     */
    name: string;
    /**
     * RevKeen customer ID
     */
    customer_id?: string;
    /**
     * Your external customer identifier
     */
    external_customer_id?: string;
    /**
     * Subscription ID to attribute usage to
     */
    subscription_id?: string;
    /**
     * Direct meter ID (alternative to event name matching)
     */
    meter_id?: string;
    /**
     * Event quantity (default: 1)
     */
    quantity?: number;
    /**
     * ISO 8601 timestamp (default: now)
     */
    timestamp?: string;
    /**
     * Unique key for deduplication
     */
    idempotency_key?: string;
    /**
     * Arbitrary properties for filtering and aggregation
     */
    metadata?: {
        [key: string]: unknown;
    };
};
/**
 * Result of a dry-run ingest showing how events would be matched to meters without persisting them.
 */
type DryRunResult = {
    object: 'usage_event_dry_run_result';
    summary: {
        would_ingest: number;
        would_skip: number;
        would_fail: number;
    };
    data: Array<{
        index: number;
        status: 'would_ingest' | 'would_skip' | 'would_fail';
        validationDetails: {
            meterMatched: boolean;
            customerMatched: boolean;
            billableQuantity: number;
            filtersPassed: boolean;
        };
        reason?: string;
    }>;
};
/**
 * A paginated list of usage events matching the query filters.
 */
type UsageEventListResponse = {
    object: 'list';
    /**
     * Array of usage event objects
     */
    data: Array<{
        [key: string]: unknown;
    }>;
    has_more: boolean;
};
/**
 * Aggregated usage totals grouped by meter and time period.
 */
type UsageAggregateResponse = {
    object: 'usage_aggregate';
    meter_id: string;
    start_time: string;
    end_time: string;
    /**
     * Aggregated usage value
     */
    value: number;
    /**
     * Number of events in range
     */
    event_count: number;
};
/**
 * Current-period usage balance across all meters for a customer, with per-meter breakdowns and estimated totals.
 */
type UsageBalanceResponse = {
    object: 'usage_balance';
    meters: Array<UsageBalanceMeter>;
    /**
     * Total estimated charge across all meters
     */
    total_estimated_amount_minor: number;
    /**
     * Total cost across all meters (null if no cost data)
     */
    total_cost_minor: number | null;
    /**
     * Currency code
     */
    currency: string;
};
/**
 * Current-period usage for a single meter, including consumed units, included allowance, overage, and estimated cost.
 */
type UsageBalanceMeter = {
    /**
     * Meter ID
     */
    meter_id: string;
    /**
     * Meter display name
     */
    meter_name: string;
    /**
     * Unit display name
     */
    unit_name: string | null;
    /**
     * Aggregated usage in current period
     */
    current_value: number;
    /**
     * Units included in plan (0 if pure metered)
     */
    included_quantity: number;
    /**
     * Usage consumed (same as current_value)
     */
    used_quantity: number;
    /**
     * Remaining included units (max 0)
     */
    remaining_included: number;
    /**
     * Units over allowance (max 0)
     */
    overage_quantity: number;
    /**
     * Estimated charge for overage in minor units
     */
    estimated_amount_minor: number;
    /**
     * Sum of event cost annotations (null if no cost data)
     */
    total_cost_minor: number | null;
    /**
     * Estimated margin: revenue - cost (null if no cost data)
     */
    margin_minor: number | null;
    /**
     * Currency code
     */
    currency: string;
    /**
     * Current billing period start (ISO 8601)
     */
    period_start: string;
    /**
     * Current billing period end (ISO 8601)
     */
    period_end: string;
};
type EntitlementListResponse = {
    data: Array<Entitlement>;
    pagination: {
        limit: number;
        offset: number;
        total: number;
    };
    customer: {
        id: string;
        email: string;
        name: string | null;
    };
};
type Entitlement = {
    id: string;
    customerId: string;
    benefitId: string;
    benefit: Benefit;
    grantedAt: string;
    expiresAt: string | null;
    metadata: {
        [key: string]: unknown;
    };
    status: 'active' | 'trialing' | 'grace' | 'past_due' | 'restricted' | 'suspended' | 'canceled';
    hasAccess: boolean;
    accessLevel: 'full' | 'partial' | 'none';
    subscriptionId: string | null;
    subscriptionStatus: string | null;
};
type Benefit = {
    id: string;
    name: string;
    description: string | null;
    benefitType: string;
    benefitKey: string;
    category: string | null;
    iconUrl: string | null;
    displayOrder: string | null;
    isActive: boolean | null;
    defaultValue?: unknown;
    config?: unknown;
} | null;
type EntitlementCheckResponse = {
    data: EntitlementCheck;
};
type EntitlementCheck = {
    benefitKey: string;
    hasAccess: boolean;
    accessLevel: 'full' | 'partial' | 'none';
    status: 'active' | 'trialing' | 'grace' | 'past_due' | 'restricted' | 'suspended' | 'canceled' | null;
    benefit: Benefit;
    reason: string | null;
};
/**
 * A paginated list of transactions matching the query filters.
 */
type TransactionListResponse = {
    object: 'list';
    data: Array<Transaction>;
    has_more: boolean;
    total_count?: number;
};
/**
 * A financial movement in the unified transaction model. Every money movement — payments, refunds, voids, disputes — is recorded as a transaction linked to an invoice.
 */
type Transaction = {
    /**
     * Unique identifier for the transaction
     */
    id: string;
    /**
     * Object type
     */
    object: 'transaction';
    /**
     * Transaction type. sale: original payment. refund: money returned. void: cancel before settlement. capture: capture a previous auth. dispute: chargeback. adjustment: manual correction.
     */
    type: 'sale' | 'refund' | 'void' | 'capture' | 'dispute' | 'adjustment';
    /**
     * Transaction status. pending: processing. succeeded: completed. failed: declined or errored. voided: canceled.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'voided';
    /**
     * Associated invoice ID
     */
    invoice_id: string;
    /**
     * Customer ID
     */
    customer_id?: string | null;
    /**
     * Parent transaction ID (required for refunds, voids, disputes, adjustments)
     */
    parent_transaction_id?: string | null;
    /**
     * Three-letter ISO currency code
     */
    currency: string;
    /**
     * Transaction amount in minor units (cents)
     */
    amount: number;
    /**
     * Amount refunded in minor units
     */
    amount_refunded?: number;
    /**
     * Payment gateway (e.g., 'nmi')
     */
    gateway?: string | null;
    /**
     * Gateway's transaction reference
     */
    gateway_transaction_id?: string | null;
    /**
     * Gateway response code
     */
    gateway_response_code?: string | null;
    /**
     * Gateway response message
     */
    gateway_response_text?: string | null;
    /**
     * Payment method type (card, ach, wallet)
     */
    payment_method_type?: string | null;
    /**
     * Card brand (visa, mastercard, etc.)
     */
    card_brand?: string | null;
    /**
     * Last 4 digits of card
     */
    card_last_four?: string | null;
    /**
     * Custom key-value metadata
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Creation timestamp (ISO 8601)
     */
    created_at: string;
    /**
     * Last update timestamp (ISO 8601)
     */
    updated_at: string;
};
/**
 * A single transaction object.
 */
type TransactionRetrieveResponse = {
    data: Transaction;
};
/**
 * The created export job in 'pending' status.
 */
type ExportCreateResponse = {
    data: Export;
};
/**
 * An async data export job. Create an export, poll for completion, then download the file via the presigned URL.
 */
type Export = {
    /**
     * Unique export job ID
     */
    id: string;
    /**
     * Object type
     */
    object: 'export';
    /**
     * Export job status. pending: queued. processing: generating file. completed: ready for download. failed: export failed.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed';
    /**
     * The type of resource to export.
     */
    resource_type: 'customers' | 'invoices' | 'transactions' | 'subscriptions' | 'products' | 'payment_methods';
    /**
     * Output file format. csv: Comma-separated values. xlsx: Excel workbook.
     */
    format: 'csv' | 'xlsx';
    /**
     * Presigned download URL (available when status is 'completed'). Expires after 1 hour.
     */
    download_url?: string | null;
    /**
     * Total rows exported (available when completed)
     */
    total_rows?: number | null;
    /**
     * File size in bytes (available when completed)
     */
    file_size_bytes?: number | null;
    /**
     * Error message (if status is 'failed')
     */
    error_message?: string | null;
    /**
     * When the export was requested (ISO 8601)
     */
    created_at: string;
    /**
     * When the export completed (ISO 8601)
     */
    completed_at?: string | null;
};
/**
 * Parameters for creating an async data export. The export is processed in the background — poll GET /v2/exports/:id for status.
 */
type CreateExportRequest = {
    /**
     * The type of resource to export.
     */
    resource_type: 'customers' | 'invoices' | 'transactions' | 'subscriptions' | 'products' | 'payment_methods';
    /**
     * Output file format. csv: Comma-separated values. xlsx: Excel workbook.
     */
    format?: 'csv' | 'xlsx';
    /**
     * Filters to apply (e.g., { status: 'paid', created_gte: '2024-01-01' })
     */
    filters?: {
        [key: string]: unknown;
    };
    /**
     * Column set to include. standard: common fields. full: all fields. minimal: IDs and key fields only.
     */
    column_set?: 'standard' | 'full' | 'minimal';
};
/**
 * Export job status and details.
 */
type ExportRetrieveResponse = {
    data: Export;
};
/**
 * The created import job in 'pending' status.
 */
type ImportCreateResponse = {
    data: Import;
};
/**
 * An async data import job. Upload a CSV file to create records in bulk. Poll GET /v2/imports/:id for status and error details.
 */
type Import = {
    /**
     * Unique import job ID
     */
    id: string;
    /**
     * Object type
     */
    object: 'import';
    /**
     * Import job status. pending: queued. validating: checking data. processing: creating records. completed: all rows imported. completed_with_errors: some rows failed. failed: import aborted.
     */
    status: 'pending' | 'validating' | 'processing' | 'completed' | 'completed_with_errors' | 'failed';
    /**
     * The type of resource to import.
     */
    resource_type: 'customers' | 'products' | 'invoices';
    /**
     * Total rows in the uploaded file
     */
    total_rows?: number | null;
    /**
     * Number of rows processed so far
     */
    processed_rows?: number | null;
    /**
     * Number of rows successfully imported
     */
    success_count?: number | null;
    /**
     * Number of rows that failed
     */
    error_count?: number | null;
    /**
     * Detailed error information for failed rows
     */
    errors?: Array<{
        /**
         * Row number (1-based)
         */
        row: number;
        /**
         * Field that caused the error
         */
        field?: string;
        /**
         * Error message
         */
        message: string;
    }> | null;
    /**
     * When the import was created (ISO 8601)
     */
    created_at: string;
    /**
     * When the import completed (ISO 8601)
     */
    completed_at?: string | null;
};
/**
 * Parameters for creating a bulk data import. Either provide a file_url or upload the CSV via multipart form data.
 */
type CreateImportRequest = {
    /**
     * The type of resource to import.
     */
    resource_type: 'customers' | 'products' | 'invoices';
    /**
     * URL to the CSV file to import (if not using multipart upload)
     */
    file_url?: string;
    /**
     * Map CSV column names to resource fields (e.g., { 'Email Address': 'email', 'Full Name': 'name' })
     */
    column_mapping?: {
        [key: string]: unknown;
    };
    /**
     * Behavior when a duplicate record is found. skip: ignore the row. update: merge new data. error: fail the row.
     */
    on_duplicate?: 'skip' | 'update' | 'error';
};
/**
 * Import job status and progress.
 */
type ImportRetrieveResponse = {
    data: Import;
};
type InvoicesListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by invoice status
         */
        status?: string;
        /**
         * Filter by customer ID
         */
        customerId?: string;
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Number of results to skip
         */
        offset?: number | null;
    };
    url: '/invoices';
};
type InvoicesListResponses = {
    /**
     * List of invoices
     */
    200: InvoiceListResponse;
};
type InvoicesListResponse = InvoicesListResponses[keyof InvoicesListResponses];
type InvoicesCreateData = {
    /**
     * Invoice creation details
     */
    body: {
        customer_uuid: string;
        invoice_number?: string;
        total_minor: number;
        currency?: string;
        due_date?: string;
        status?: string;
        /**
         * Key-value pairs for custom fields
         */
        custom_fields?: {
            [key: string]: unknown;
        };
        subscription_terms?: SubscriptionTerms;
        /**
         * Restrict checkout payment methods for this invoice. When set, narrows available rails for checkout sessions created against this invoice. Omit to use merchant default.
         */
        allowed_methods?: Array<'card' | 'direct_debit' | 'pay_by_bank' | 'in_store'>;
    };
    path?: never;
    query?: never;
    url: '/invoices';
};
type InvoicesCreateResponses = {
    /**
     * Invoice created
     */
    201: InvoiceResponse;
};
type InvoicesCreateResponse = InvoicesCreateResponses[keyof InvoicesCreateResponses];
type InvoicesGetData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/invoices/{id}';
};
type InvoicesGetResponses = {
    /**
     * Invoice details
     */
    200: InvoiceResponse;
};
type InvoicesGetResponse = InvoicesGetResponses[keyof InvoicesGetResponses];
type InvoicesUpdateData = {
    /**
     * Invoice update details
     */
    body: {
        status?: string;
        total_minor?: number;
        due_date?: string;
        /**
         * Update the invoice's restricted payment methods. Empty array clears restriction (merchant defaults apply); omit to leave unchanged.
         */
        allowed_methods?: Array<'card' | 'direct_debit' | 'pay_by_bank' | 'in_store'>;
        /**
         * Subscription billing terms — set to null to remove
         */
        subscription_terms?: {
            /**
             * How to collect payment for recurring invoices
             */
            collection_method: 'charge_automatically' | 'send_invoice';
            /**
             * When the subscription billing cycle starts
             */
            start_mode: 'when_paid' | 'on_invoice_date' | 'first_of_next_month' | 'specific_date';
            /**
             * Start date (ISO 8601) — required when start_mode is 'specific_date'
             */
            start_date?: string;
            /**
             * How the subscription duration is determined
             */
            duration_type: 'until_cancelled' | 'fixed_cycles' | 'end_date';
            /**
             * Number of billing cycles — required when duration_type is 'fixed_cycles'
             */
            duration_count?: number;
            /**
             * End date (ISO 8601) — required when duration_type is 'end_date'
             */
            end_date?: string;
            /**
             * Whether to charge the first cycle immediately or defer to the start date
             */
            first_payment_behavior: 'charge_first_cycle_now' | 'defer_first_cycle_to_start_date';
        } | null;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/invoices/{id}';
};
type InvoicesUpdateResponses = {
    /**
     * Invoice updated
     */
    200: InvoiceResponse;
};
type InvoicesUpdateResponse = InvoicesUpdateResponses[keyof InvoicesUpdateResponses];
type InvoicesMarginEstimateData = {
    /**
     * Margin estimate inputs
     */
    body: {
        /**
         * Optional amount in minor units. Defaults to the invoice total.
         */
        amount_minor?: number;
        /**
         * Rails to estimate. Defaults to invoice allowed_methods or all rails.
         */
        rails?: Array<'card' | 'direct_debit' | 'pay_by_bank' | 'in_store'>;
        /**
         * Single card scheme to estimate for card rail, e.g. visa or mastercard.
         */
        card_scheme?: string;
        /**
         * Card schemes to estimate for card rail.
         */
        card_schemes?: Array<string>;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/invoices/{id}/margin-estimate';
};
type InvoicesMarginEstimateErrors = {
    /**
     * Invoice not found
     */
    404: unknown;
};
type InvoicesMarginEstimateResponses = {
    /**
     * Margin estimates by rail
     */
    200: {
        data: {
            invoice_id: string;
            amount_minor: number;
            currency: string;
            estimates: Array<{
                rail: 'card' | 'direct_debit' | 'pay_by_bank' | 'in_store';
                card_scheme: string | null;
                gross_minor: number;
                estimated_fee_minor: number;
                net_after_fees_minor: number;
                fee_breakdown: {
                    percentage_fee_minor: number;
                    fixed_fee_minor: number;
                    minimum_fee_adjustment_minor: number;
                };
                pricing_source: 'matrix';
                matrix_version: string;
            }>;
        };
    };
};
type InvoicesMarginEstimateResponse = InvoicesMarginEstimateResponses[keyof InvoicesMarginEstimateResponses];
type InvoicesFinalizeData = {
    /**
     * Finalization options
     */
    body?: {
        /**
         * If true, automatically transitions to 'approved' status after finalization.
         */
        auto_advance?: boolean;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/invoices/{id}/finalize';
};
type InvoicesFinalizeErrors = {
    /**
     * Invoice cannot be finalized (not in draft status or missing line items)
     */
    400: unknown;
    /**
     * Invoice not found
     */
    404: unknown;
};
type InvoicesFinalizeResponses = {
    /**
     * Invoice finalized successfully
     */
    200: InvoiceResponse;
};
type InvoicesFinalizeResponse = InvoicesFinalizeResponses[keyof InvoicesFinalizeResponses];
type InvoicesVoidData = {
    /**
     * Void details
     */
    body?: {
        /**
         * Reason for voiding the invoice
         */
        reason?: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/invoices/{id}/void';
};
type InvoicesVoidErrors = {
    /**
     * Invoice cannot be voided (has payments or already voided)
     */
    400: unknown;
    /**
     * Invoice not found
     */
    404: unknown;
};
type InvoicesVoidResponses = {
    /**
     * Invoice voided successfully
     */
    200: InvoiceResponse;
};
type InvoicesVoidResponse = InvoicesVoidResponses[keyof InvoicesVoidResponses];
type InvoicesSendData = {
    /**
     * Send options
     */
    body?: {
        /**
         * Communication channel to send the invoice through
         */
        channel?: 'email' | 'sms' | 'whatsapp';
        /**
         * Optional custom template ID to use for the notification
         */
        template_id?: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/invoices/{id}/send';
};
type InvoicesSendErrors = {
    /**
     * Invoice cannot be sent (not approved or missing customer contact)
     */
    400: unknown;
    /**
     * Invoice not found
     */
    404: unknown;
};
type InvoicesSendResponses = {
    /**
     * Invoice sent successfully
     */
    200: InvoiceResponse;
};
type InvoicesSendResponse = InvoicesSendResponses[keyof InvoicesSendResponses];
type ProductsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number
         */
        page?: number;
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Search term to filter products
         */
        search?: string;
    };
    url: '/products';
};
type ProductsListErrors = {
    /**
     * Bad Request
     */
    400: ProductErrorResponse;
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
};
type ProductsListError = ProductsListErrors[keyof ProductsListErrors];
type ProductsListResponses = {
    /**
     * List of products
     */
    200: ProductListResponse;
};
type ProductsListResponse = ProductsListResponses[keyof ProductsListResponses];
type ProductsCreateData = {
    /**
     * Product creation details
     */
    body: CreateProductRequest;
    path?: never;
    query?: never;
    url: '/products';
};
type ProductsCreateErrors = {
    /**
     * Validation error
     */
    400: {
        error: string;
    };
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
};
type ProductsCreateError = ProductsCreateErrors[keyof ProductsCreateErrors];
type ProductsCreateResponses = {
    /**
     * Product created successfully
     */
    201: ProductCreateResponse;
};
type ProductsCreateResponse = ProductsCreateResponses[keyof ProductsCreateResponses];
type ProductsGetData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/products/{id}';
};
type ProductsGetErrors = {
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
    /**
     * Product not found
     */
    404: {
        error: string;
    };
};
type ProductsGetError = ProductsGetErrors[keyof ProductsGetErrors];
type ProductsGetResponses = {
    /**
     * Product details
     */
    200: ProductRetrieveResponse;
};
type ProductsGetResponse = ProductsGetResponses[keyof ProductsGetResponses];
type ProductsUpdateData = {
    /**
     * Product update details
     */
    body: UpdateProductRequest;
    path: {
        id: string;
    };
    query?: never;
    url: '/products/{id}';
};
type ProductsUpdateErrors = {
    /**
     * Validation error
     */
    400: {
        error: string;
    };
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
    /**
     * Product not found
     */
    404: {
        error: string;
    };
};
type ProductsUpdateError = ProductsUpdateErrors[keyof ProductsUpdateErrors];
type ProductsUpdateResponses = {
    /**
     * Product updated successfully
     */
    200: ProductUpdateResponse;
};
type ProductsUpdateResponse = ProductsUpdateResponses[keyof ProductsUpdateResponses];
type CheckoutSessionsCreateData = {
    body?: CreateCheckoutSessionInput;
    path?: never;
    query?: never;
    url: '/checkout-sessions';
};
type CheckoutSessionsCreateErrors = {
    /**
     * Bad Request
     */
    400: CheckoutSessionErrorResponse;
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
    /**
     * Not Found
     */
    404: {
        error: string;
    };
};
type CheckoutSessionsCreateError = CheckoutSessionsCreateErrors[keyof CheckoutSessionsCreateErrors];
type CheckoutSessionsCreateResponses = {
    /**
     * Checkout session created
     */
    201: CheckoutSessionCreateResponse;
};
type CheckoutSessionsCreateResponse = CheckoutSessionsCreateResponses[keyof CheckoutSessionsCreateResponses];
type CheckoutSessionsGetData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/checkout-sessions/{id}';
};
type CheckoutSessionsGetErrors = {
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
    /**
     * Not Found
     */
    404: {
        error: string;
    };
    /**
     * Internal Server Error
     */
    500: {
        error: string;
    };
};
type CheckoutSessionsGetError = CheckoutSessionsGetErrors[keyof CheckoutSessionsGetErrors];
type CheckoutSessionsGetResponses = {
    /**
     * Checkout session retrieved
     */
    200: CheckoutSessionRetrieveResponse;
};
type CheckoutSessionsGetResponse = CheckoutSessionsGetResponses[keyof CheckoutSessionsGetResponses];
type CheckoutSessionsExpireData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/checkout-sessions/{id}/expire';
};
type CheckoutSessionsExpireErrors = {
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
    /**
     * Not Found
     */
    404: {
        error: string;
    };
    /**
     * Conflict — session is not in an expirable state
     */
    409: {
        error: string;
    };
};
type CheckoutSessionsExpireError = CheckoutSessionsExpireErrors[keyof CheckoutSessionsExpireErrors];
type CheckoutSessionsExpireResponses = {
    /**
     * Session expired
     */
    200: CheckoutSessionExpireResponse;
};
type CheckoutSessionsExpireResponse = CheckoutSessionsExpireResponses[keyof CheckoutSessionsExpireResponses];
type CustomersListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Number of results to skip
         */
        offset?: number | null;
        /**
         * Search term to filter customers
         */
        search?: string;
    };
    url: '/customers';
};
type CustomersListErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
type CustomersListResponses = {
    /**
     * List of customers
     */
    200: CustomerListResponse;
};
type CustomersListResponse = CustomersListResponses[keyof CustomersListResponses];
type CustomersCreateData = {
    body?: {
        /**
         * Customer's email address (must be unique per merchant)
         */
        email: string;
        /**
         * Customer's full name
         */
        name?: string;
        /**
         * Customer's phone number
         */
        phone?: string;
        /**
         * Customer's company name
         */
        companyName?: string;
        /**
         * Billing address line 1
         */
        addressLine1?: string;
        /**
         * Billing address line 2
         */
        addressLine2?: string;
        /**
         * Billing address city
         */
        city?: string;
        /**
         * Billing address state or county
         */
        state?: string;
        /**
         * Billing address postal code
         */
        postalCode?: string;
        /**
         * Billing address country code
         */
        country?: string;
        /**
         * Arbitrary key-value metadata to attach to this customer
         */
        metadata?: {
            [key: string]: unknown;
        };
        /**
         * Merchant-defined custom fields displayed as columns in the dashboard
         */
        customFields?: {
            [key: string]: unknown;
        };
    };
    path?: never;
    query?: never;
    url: '/customers';
};
type CustomersCreateErrors = {
    /**
     * Validation error
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
type CustomersCreateResponses = {
    /**
     * Customer created successfully
     */
    201: CustomerCreateResponse;
};
type CustomersCreateResponse = CustomersCreateResponses[keyof CustomersCreateResponses];
type CustomersGetData = {
    body?: never;
    path: {
        /**
         * Customer UUID
         */
        id: string;
    };
    query?: never;
    url: '/customers/{id}';
};
type CustomersGetErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer not found
     */
    404: unknown;
};
type CustomersGetResponses = {
    /**
     * Customer details
     */
    200: CustomerRetrieveResponse;
};
type CustomersGetResponse = CustomersGetResponses[keyof CustomersGetResponses];
type CustomersUpdateData = {
    body?: {
        /**
         * Updated email address
         */
        email?: string;
        /**
         * Updated full name
         */
        name?: string;
        /**
         * Updated phone number
         */
        phone?: string;
        /**
         * Updated company name
         */
        companyName?: string;
        /**
         * Updated billing address line 1
         */
        addressLine1?: string;
        /**
         * Updated billing address line 2
         */
        addressLine2?: string;
        /**
         * Updated billing address city
         */
        city?: string;
        /**
         * Updated billing address state or county
         */
        state?: string;
        /**
         * Updated billing address postal code
         */
        postalCode?: string;
        /**
         * Updated billing address country code
         */
        country?: string;
        /**
         * Metadata to merge with existing values (set a key to null to remove it)
         */
        metadata?: {
            [key: string]: unknown;
        };
        /**
         * Merchant-defined custom fields displayed as columns in the dashboard
         */
        customFields?: {
            [key: string]: unknown;
        };
    };
    path: {
        /**
         * Customer UUID
         */
        id: string;
    };
    query?: never;
    url: '/customers/{id}';
};
type CustomersUpdateErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer not found
     */
    404: unknown;
};
type CustomersUpdateResponses = {
    /**
     * Customer updated successfully
     */
    200: CustomerUpdateResponse;
};
type CustomersUpdateResponse = CustomersUpdateResponses[keyof CustomersUpdateResponses];
type CustomersPaymentRailsGetData = {
    body?: never;
    path: {
        /**
         * Customer UUID
         */
        id: string;
    };
    query?: {
        /**
         * Optional invoice context used to apply invoice-level rail restrictions.
         */
        invoice_id?: string;
    };
    url: '/customers/{id}/payment-rails';
};
type CustomersPaymentRailsGetErrors = {
    /**
     * Invalid invoice context
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer or invoice not found
     */
    404: unknown;
};
type CustomersPaymentRailsGetResponses = {
    /**
     * Payment rail availability
     */
    200: {
        data: {
            customer_id: string;
            invoice_id?: string | null;
            rails: Array<{
                rail: 'card' | 'direct_debit' | 'pay_by_bank' | 'in_store';
                available: boolean;
                reason_if_not: string | null;
                last_used_at: string | null;
                mandate_id?: string;
                mandate_ref?: string | null;
            }>;
        };
    };
};
type CustomersPaymentRailsGetResponse = CustomersPaymentRailsGetResponses[keyof CustomersPaymentRailsGetResponses];
type CustomersPreferredRailsGetData = {
    body?: never;
    path: {
        /**
         * Customer UUID
         */
        id: string;
    };
    query?: {
        /**
         * Optional invoice context used to apply invoice-level rail restrictions and amount.
         */
        invoice_id?: string;
        /**
         * Optional amount in minor units. Use amount_minor for the explicit alias.
         */
        amount?: number | null;
        /**
         * Optional amount in minor units. Overrides invoice total for margin-aware ranking.
         */
        amount_minor?: number | null;
    };
    url: '/customers/{id}/preferred-rails';
};
type CustomersPreferredRailsGetErrors = {
    /**
     * Invalid invoice context
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer or invoice not found
     */
    404: unknown;
};
type CustomersPreferredRailsGetResponses = {
    /**
     * Preferred rails
     */
    200: {
        data: {
            customer_id: string;
            invoice_id: string | null;
            amount_minor: number | null;
            currency: string | null;
            preferred_rails: Array<{
                rail: 'card' | 'direct_debit' | 'pay_by_bank' | 'in_store';
                available: boolean;
                reason_if_not: string | null;
                last_used_at: string | null;
                mandate_id?: string;
                mandate_ref?: string | null;
                rank: number;
                score: number;
                reason: string;
                reasons: Array<string>;
                estimated_fee_minor?: number;
                net_after_fees_minor?: number;
                mandate?: {
                    id: string;
                    status: 'PENDING_LODGEMENT' | 'ACTIVE' | 'SUSPENDED' | 'CANCELLED' | 'FAILED';
                    createdAt: string;
                };
            }>;
        };
    };
};
type CustomersPreferredRailsGetResponse = CustomersPreferredRailsGetResponses[keyof CustomersPreferredRailsGetResponses];
type CustomersPaymentMethodsListData = {
    body?: never;
    path: {
        /**
         * Customer UUID
         */
        id: string;
    };
    query?: never;
    url: '/customers/{id}/payment-methods';
};
type CustomersPaymentMethodsListErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer not found
     */
    404: unknown;
};
type CustomersPaymentMethodsListResponses = {
    /**
     * Payment methods list
     */
    200: CustomerPaymentMethodsListResponse;
};
type CustomersPaymentMethodsListResponse = CustomersPaymentMethodsListResponses[keyof CustomersPaymentMethodsListResponses];
type SubscriptionsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number
         */
        page?: number;
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Filter by subscription status
         */
        status?: 'active' | 'canceled' | 'past_due' | 'trialing' | 'paused' | 'incomplete' | 'incomplete_expired';
        /**
         * Filter by customer UUID
         */
        customerId?: string;
    };
    url: '/subscriptions';
};
type SubscriptionsListErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
type SubscriptionsListResponses = {
    /**
     * List of subscriptions
     */
    200: SubscriptionListResponse;
};
type SubscriptionsListResponse = SubscriptionsListResponses[keyof SubscriptionsListResponses];
type SubscriptionsCreateData = {
    body?: {
        customerId: string;
        businessId?: string;
        productId?: string;
        planId?: string;
        priceId?: string;
        paymentMethodId?: string;
        startDate?: string;
        currency?: string;
        quantity?: number;
        trialEnd?: string;
        billingAnchorDay?: number;
        pauseAtPeriodEnd?: boolean;
        cancelAtPeriodEnd?: boolean;
        billingStartsOn?: string;
        billingEndStrategy?: 'indefinite' | 'on_date' | 'after_cycles';
        billingEndsOn?: string;
        billingMaxCycles?: number;
        prorationMode?: 'immediate' | 'next_invoice' | 'none';
        metadata?: {
            [key: string]: unknown;
        };
    };
    path?: never;
    query?: never;
    url: '/subscriptions';
};
type SubscriptionsCreateErrors = {
    /**
     * Validation error
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
type SubscriptionsCreateResponses = {
    /**
     * Subscription created successfully
     */
    201: SubscriptionCreateResponse;
};
type SubscriptionsCreateResponse = SubscriptionsCreateResponses[keyof SubscriptionsCreateResponses];
type SubscriptionsGetData = {
    body?: never;
    path: {
        /**
         * Subscription UUID
         */
        id: string;
    };
    query?: never;
    url: '/subscriptions/{id}';
};
type SubscriptionsGetErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Subscription not found
     */
    404: unknown;
};
type SubscriptionsGetResponses = {
    /**
     * Subscription details
     */
    200: SubscriptionRetrieveResponse;
};
type SubscriptionsGetResponse = SubscriptionsGetResponses[keyof SubscriptionsGetResponses];
type SubscriptionsUpdateData = {
    body?: {
        status?: 'trialing' | 'active' | 'past_due' | 'paused' | 'canceled' | 'expired';
        amountMinor?: number;
        quantity?: number;
        nextBillingDate?: string;
        billingAnchorDay?: number;
        pauseAtPeriodEnd?: boolean;
        cancelAtPeriodEnd?: boolean;
        metadata?: {
            [key: string]: unknown;
        };
    };
    path: {
        /**
         * Subscription UUID
         */
        id: string;
    };
    query?: never;
    url: '/subscriptions/{id}';
};
type SubscriptionsUpdateErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Subscription not found
     */
    404: unknown;
};
type SubscriptionsUpdateResponses = {
    /**
     * Subscription updated successfully
     */
    200: SubscriptionUpdateResponse;
};
type SubscriptionsUpdateResponse = SubscriptionsUpdateResponses[keyof SubscriptionsUpdateResponses];
type SubscriptionsCancelData = {
    body?: CancelSubscriptionInput;
    path: {
        /**
         * Subscription UUID
         */
        id: string;
    };
    query?: never;
    url: '/subscriptions/{id}/cancel';
};
type SubscriptionsCancelErrors = {
    /**
     * Invalid subscription state for this operation
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Subscription not found
     */
    404: unknown;
};
type SubscriptionsCancelResponses = {
    /**
     * Subscription canceled or cancellation scheduled
     */
    200: SubscriptionCancelSubscriptionResponse;
};
type SubscriptionsCancelResponse = SubscriptionsCancelResponses[keyof SubscriptionsCancelResponses];
type AnalyticsRevenueMrrSummaryData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Calculate MRR as of this date (ISO 8601)
         */
        asOfDate?: string;
    };
    url: '/analytics/revenue/mrr-summary';
};
type AnalyticsRevenueMrrSummaryResponses = {
    /**
     * MRR metrics
     */
    200: {
        currentMrr: number;
        previousMrr: number;
        growth: number;
        newMrr: number;
        churnedMrr: number;
        expansionMrr: number;
        contractionMrr: number;
        asOfDate: string;
    };
};
type AnalyticsRevenueMrrSummaryResponse = AnalyticsRevenueMrrSummaryResponses[keyof AnalyticsRevenueMrrSummaryResponses];
type AnalyticsRevenueTimeSeriesData = {
    body?: never;
    path?: never;
    query: {
        /**
         * Start date (ISO 8601)
         */
        startDate: string;
        /**
         * End date (ISO 8601)
         */
        endDate: string;
        /**
         * Time granularity for data points
         */
        granularity?: 'day' | 'week' | 'month' | 'quarter' | 'year';
    };
    url: '/analytics/revenue/time-series';
};
type AnalyticsRevenueTimeSeriesResponses = {
    /**
     * Revenue time series data
     */
    200: {
        dataPoints: Array<{
            date: string;
            revenue: number;
            invoiceCount: number;
            avgInvoiceValue: number;
        }>;
        totalRevenue: number;
        totalInvoices: number;
        periodStart: string;
        periodEnd: string;
    };
};
type AnalyticsRevenueTimeSeriesResponse = AnalyticsRevenueTimeSeriesResponses[keyof AnalyticsRevenueTimeSeriesResponses];
type RefundsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by refund status
         */
        status?: 'pending' | 'processing' | 'succeeded' | 'failed' | 'canceled';
        /**
         * Filter by original payment ID
         */
        payment_id?: string;
        /**
         * Filter by payment gateway (nmi, stripe, etc.)
         */
        gateway?: string;
        /**
         * Filter by refund reason
         */
        reason?: 'customer_request' | 'duplicate' | 'fraudulent' | 'product_not_received' | 'product_unacceptable' | 'subscription_canceled' | 'other';
        /**
         * ISO 8601 date - only refunds created after this date
         */
        created_after?: string;
        /**
         * ISO 8601 date - only refunds created before this date
         */
        created_before?: string;
        /**
         * Number of results to return (1-100)
         */
        limit?: number;
        /**
         * Number of results to skip
         */
        offset?: number | null;
    };
    url: '/refunds';
};
type RefundsListErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type RefundsListResponses = {
    /**
     * List of refunds
     */
    200: RefundListResponse;
};
type RefundsListResponse = RefundsListResponses[keyof RefundsListResponses];
type RefundsCreateData = {
    body?: CreateRefundInput;
    path?: never;
    query?: never;
    url: '/refunds';
};
type RefundsCreateErrors = {
    /**
     * Invalid request - payment not found, already fully refunded, or invalid amount
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type RefundsCreateResponses = {
    /**
     * Refund created successfully
     */
    201: RefundCreateResponse;
};
type RefundsCreateResponse = RefundsCreateResponses[keyof RefundsCreateResponses];
type RefundsGetData = {
    body?: never;
    path: {
        /**
         * Refund public ID (ref_xxx) or UUID
         */
        id: string;
    };
    query?: never;
    url: '/refunds/{id}';
};
type RefundsGetErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Refund not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type RefundsGetResponses = {
    /**
     * Refund details
     */
    200: RefundRetrieveResponse;
};
type RefundsGetResponse = RefundsGetResponses[keyof RefundsGetResponses];
type CreditNotesListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by credit note status
         */
        status?: 'draft' | 'pending' | 'issued' | 'applied' | 'voided';
        /**
         * Filter by invoice ID
         */
        invoice_id?: string;
        /**
         * Filter by customer ID
         */
        customer_id?: string;
        /**
         * Filter by credit method
         */
        credit_method?: 'refund_to_payment_method' | 'customer_balance' | 'external';
        /**
         * ISO 8601 date - only credit notes created after this date
         */
        created_after?: string;
        /**
         * ISO 8601 date - only credit notes created before this date
         */
        created_before?: string;
        /**
         * Number of results to return (1-100)
         */
        limit?: number;
        /**
         * Number of results to skip
         */
        offset?: number | null;
    };
    url: '/credit_notes';
};
type CreditNotesListErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type CreditNotesListResponses = {
    /**
     * List of credit notes
     */
    200: CreditNoteListResponse & unknown;
};
type CreditNotesListResponse = CreditNotesListResponses[keyof CreditNotesListResponses];
type CreditNotesCreateData = {
    body?: CreateCreditNoteInput;
    path?: never;
    query?: never;
    url: '/credit_notes';
};
type CreditNotesCreateErrors = {
    /**
     * Invalid request - invoice not eligible, amount exceeds creditable, or other validation error
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Duplicate idempotency key
     */
    409: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type CreditNotesCreateResponses = {
    /**
     * Credit note created successfully
     */
    201: CreditNoteCreateResponse;
};
type CreditNotesCreateResponse = CreditNotesCreateResponses[keyof CreditNotesCreateResponses];
type CreditNotesGetData = {
    body?: never;
    path: {
        /**
         * Credit note UUID
         */
        id: string;
    };
    query?: never;
    url: '/credit_notes/{id}';
};
type CreditNotesGetErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Credit note not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type CreditNotesGetResponses = {
    /**
     * Credit note details
     */
    200: CreditNoteRetrieveResponse;
};
type CreditNotesGetResponse = CreditNotesGetResponses[keyof CreditNotesGetResponses];
type CreditNotesVoidData = {
    body?: never;
    path: {
        /**
         * Credit note UUID
         */
        id: string;
    };
    query?: never;
    url: '/credit_notes/{id}/void';
};
type CreditNotesVoidErrors = {
    /**
     * Credit note cannot be voided (already voided or applied)
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Credit note not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};
type CreditNotesVoidResponses = {
    /**
     * Credit note voided successfully
     */
    200: CreditNoteVoidResponse;
};
type CreditNotesVoidResponse = CreditNotesVoidResponses[keyof CreditNotesVoidResponses];
type CreditNotesListLinesData = {
    body?: never;
    path: {
        /**
         * Credit note UUID
         */
        id: string;
    };
    query?: {
        limit?: number;
    };
    url: '/credit_notes/{id}/lines';
};
type CreditNotesListLinesErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Credit note not found
     */
    404: unknown;
};
type CreditNotesListLinesResponses = {
    /**
     * Line items on the credit note.
     */
    200: CreditNoteLineList;
};
type CreditNotesListLinesResponse = CreditNotesListLinesResponses[keyof CreditNotesListLinesResponses];
type CreditNotesPreviewData = {
    body: PreviewCreditNoteInput;
    path?: never;
    query?: never;
    url: '/credit_notes/preview';
};
type CreditNotesPreviewErrors = {
    /**
     * Invalid preview input
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Invoice not found
     */
    404: unknown;
};
type CreditNotesPreviewResponses = {
    /**
     * Preview computed.
     */
    200: CreditNotePreviewResponse;
};
type CreditNotesPreviewResponse = CreditNotesPreviewResponses[keyof CreditNotesPreviewResponses];
type PaymentLinksListData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        offset?: number | null;
        status?: 'draft' | 'active' | 'expired' | 'completed';
        mode?: 'invoice' | 'subscription' | 'custom';
        search?: string;
    };
    url: '/payment-links';
};
type PaymentLinksListErrors = {
    /**
     * Validation error in query parameters
     */
    400: {
        error: string;
        details?: unknown;
    };
    /**
     * Unauthorized - missing or invalid authentication
     */
    401: unknown;
};
type PaymentLinksListError = PaymentLinksListErrors[keyof PaymentLinksListErrors];
type PaymentLinksListResponses = {
    /**
     * Payment links retrieved successfully
     */
    200: {
        data: Array<{
            id: string;
            merchant_id: string;
            public_id: string;
            name?: string;
            slug?: string | null;
            mode: 'invoice' | 'subscription' | 'custom';
            status: 'draft' | 'active' | 'expired' | 'completed';
            amount_minor?: number | null;
            currency?: string;
            invoice_id?: string | null;
            subscription_id?: string | null;
            product_ids?: Array<string>;
            line_items?: Array<{
                product_id: string;
                price_id?: string | null;
                quantity: number;
                merchant_reference?: string | null;
                is_adhoc: boolean;
                product_details?: {
                    name: string;
                    description?: string | null;
                    unit_amount: number;
                    currency: string;
                    recurring?: {
                        interval: 'day' | 'week' | 'month' | 'year';
                        interval_count?: number;
                    } | null;
                };
            }>;
            /**
             * Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page.
             */
            success_url?: string | null;
            /**
             * Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured.
             */
            cancel_url?: string | null;
            redirect_url?: string | null;
            collect_shipping?: boolean;
            allow_promotion_codes?: boolean;
            tax_behavior?: 'exclusive' | 'inclusive' | 'unspecified';
            metadata?: {
                [key: string]: unknown;
            } | null;
            expires_at?: string | null;
            created_at: string;
            updated_at: string;
        }>;
        pagination: {
            limit: number;
            offset: number;
            total: number;
        };
    };
};
type PaymentLinksListResponse = PaymentLinksListResponses[keyof PaymentLinksListResponses];
type PaymentLinksCreateData = {
    body?: {
        product_ids?: Array<string>;
        line_items?: Array<{
            price?: string;
            price_data?: {
                currency?: string;
                unit_amount: number;
                product_data?: {
                    name: string;
                    description?: string | null;
                    images?: Array<string> | null;
                    metadata?: {
                        [key: string]: unknown;
                    } | null;
                };
                product?: string;
                recurring?: {
                    interval: 'day' | 'week' | 'month' | 'year';
                    interval_count?: number;
                } | null;
                tax_behavior?: 'inclusive' | 'exclusive' | null;
            };
            quantity?: number;
            merchant_reference?: string | null;
        }>;
        name?: string;
        slug?: string;
        mode?: 'invoice' | 'subscription' | 'custom';
        amount_minor?: number;
        currency?: string;
        invoice_id?: string;
        subscription_id?: string;
        /**
         * Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page.
         */
        success_url?: string;
        /**
         * Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured.
         */
        cancel_url?: string;
        redirect_url?: string;
        collect_shipping?: boolean;
        allow_promotion_codes?: boolean;
        tax_behavior?: 'exclusive' | 'inclusive' | 'unspecified';
        metadata?: {
            [key: string]: unknown;
        };
        expires_at?: string;
        idempotency_key?: string;
    };
    path?: never;
    query?: never;
    url: '/payment-links';
};
type PaymentLinksCreateErrors = {
    /**
     * Validation error or invalid input
     */
    400: {
        error: string;
        details?: unknown;
    };
    /**
     * Unauthorized - missing or invalid authentication
     */
    401: unknown;
    /**
     * Conflict - payment link already exists
     */
    409: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksCreateError = PaymentLinksCreateErrors[keyof PaymentLinksCreateErrors];
type PaymentLinksCreateResponses = {
    /**
     * Payment link created successfully
     */
    201: {
        id: string;
        merchant_id: string;
        public_id: string;
        name?: string;
        slug?: string | null;
        mode: 'invoice' | 'subscription' | 'custom';
        status: 'draft' | 'active' | 'expired' | 'completed';
        amount_minor?: number | null;
        currency?: string;
        invoice_id?: string | null;
        subscription_id?: string | null;
        product_ids?: Array<string>;
        line_items?: Array<{
            product_id: string;
            price_id?: string | null;
            quantity: number;
            merchant_reference?: string | null;
            is_adhoc: boolean;
            product_details?: {
                name: string;
                description?: string | null;
                unit_amount: number;
                currency: string;
                recurring?: {
                    interval: 'day' | 'week' | 'month' | 'year';
                    interval_count?: number;
                } | null;
            };
        }>;
        /**
         * Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page.
         */
        success_url?: string | null;
        /**
         * Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured.
         */
        cancel_url?: string | null;
        redirect_url?: string | null;
        collect_shipping?: boolean;
        allow_promotion_codes?: boolean;
        tax_behavior?: 'exclusive' | 'inclusive' | 'unspecified';
        metadata?: {
            [key: string]: unknown;
        } | null;
        expires_at?: string | null;
        created_at: string;
        updated_at: string;
    };
};
type PaymentLinksCreateResponse = PaymentLinksCreateResponses[keyof PaymentLinksCreateResponses];
type PaymentLinksGetData = {
    body?: never;
    path: {
        /**
         * Payment link UUID or public_id
         */
        id: string;
    };
    query?: never;
    url: '/payment-links/{id}';
};
type PaymentLinksGetErrors = {
    /**
     * Unauthorized - missing or invalid authentication
     */
    401: unknown;
    /**
     * Payment link not found
     */
    404: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksGetError = PaymentLinksGetErrors[keyof PaymentLinksGetErrors];
type PaymentLinksGetResponses = {
    /**
     * Payment link retrieved successfully
     */
    200: {
        id: string;
        merchant_id: string;
        public_id: string;
        name?: string;
        slug?: string | null;
        mode: 'invoice' | 'subscription' | 'custom';
        status: 'draft' | 'active' | 'expired' | 'completed';
        amount_minor?: number | null;
        currency?: string;
        invoice_id?: string | null;
        subscription_id?: string | null;
        product_ids?: Array<string>;
        line_items?: Array<{
            product_id: string;
            price_id?: string | null;
            quantity: number;
            merchant_reference?: string | null;
            is_adhoc: boolean;
            product_details?: {
                name: string;
                description?: string | null;
                unit_amount: number;
                currency: string;
                recurring?: {
                    interval: 'day' | 'week' | 'month' | 'year';
                    interval_count?: number;
                } | null;
            };
        }>;
        /**
         * Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page.
         */
        success_url?: string | null;
        /**
         * Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured.
         */
        cancel_url?: string | null;
        redirect_url?: string | null;
        collect_shipping?: boolean;
        allow_promotion_codes?: boolean;
        tax_behavior?: 'exclusive' | 'inclusive' | 'unspecified';
        metadata?: {
            [key: string]: unknown;
        } | null;
        expires_at?: string | null;
        created_at: string;
        updated_at: string;
    };
};
type PaymentLinksGetResponse = PaymentLinksGetResponses[keyof PaymentLinksGetResponses];
type PaymentLinksExpireData = {
    body?: {
        reason?: string;
    };
    path: {
        /**
         * Payment link UUID or public_id
         */
        id: string;
    };
    query?: never;
    url: '/payment-links/{id}/expire';
};
type PaymentLinksExpireErrors = {
    /**
     * Validation error or payment link already expired
     */
    400: {
        error: string;
        details?: unknown;
    };
    /**
     * Unauthorized - missing or invalid authentication
     */
    401: unknown;
    /**
     * Payment link not found
     */
    404: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksExpireError = PaymentLinksExpireErrors[keyof PaymentLinksExpireErrors];
type PaymentLinksExpireResponses = {
    /**
     * Payment link expired successfully
     */
    200: {
        id: string;
        merchant_id: string;
        public_id: string;
        name?: string;
        slug?: string | null;
        mode: 'invoice' | 'subscription' | 'custom';
        status: 'draft' | 'active' | 'expired' | 'completed';
        amount_minor?: number | null;
        currency?: string;
        invoice_id?: string | null;
        subscription_id?: string | null;
        product_ids?: Array<string>;
        line_items?: Array<{
            product_id: string;
            price_id?: string | null;
            quantity: number;
            merchant_reference?: string | null;
            is_adhoc: boolean;
            product_details?: {
                name: string;
                description?: string | null;
                unit_amount: number;
                currency: string;
                recurring?: {
                    interval: 'day' | 'week' | 'month' | 'year';
                    interval_count?: number;
                } | null;
            };
        }>;
        /**
         * Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page.
         */
        success_url?: string | null;
        /**
         * Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured.
         */
        cancel_url?: string | null;
        redirect_url?: string | null;
        collect_shipping?: boolean;
        allow_promotion_codes?: boolean;
        tax_behavior?: 'exclusive' | 'inclusive' | 'unspecified';
        metadata?: {
            [key: string]: unknown;
        } | null;
        expires_at?: string | null;
        created_at: string;
        updated_at: string;
    };
};
type PaymentLinksExpireResponse = PaymentLinksExpireResponses[keyof PaymentLinksExpireResponses];
type PaymentLinksUpdateData = {
    body?: {
        /**
         * New status for the payment link
         */
        status: 'active' | 'inactive' | 'archived';
    };
    path: {
        /**
         * Payment link UUID or public_id
         */
        id: string;
    };
    query?: never;
    url: '/payment-links/{id}/status';
};
type PaymentLinksUpdateErrors = {
    /**
     * Invalid status transition (e.g., trying to reactivate archived link)
     */
    400: {
        error: string;
        details?: unknown;
    };
    /**
     * Unauthorized - missing or invalid authentication
     */
    401: unknown;
    /**
     * Payment link not found
     */
    404: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksUpdateError = PaymentLinksUpdateErrors[keyof PaymentLinksUpdateErrors];
type PaymentLinksUpdateResponses = {
    /**
     * Status updated successfully
     */
    200: {
        id: string;
        status: 'active' | 'inactive' | 'archived';
        status_changed_at: string;
        is_active: boolean;
        updated_at: string;
    };
};
type PaymentLinksUpdateResponse = PaymentLinksUpdateResponses[keyof PaymentLinksUpdateResponses];
type PaymentLinksDeactivateData = {
    body?: never;
    path: {
        /**
         * Payment link UUID or public_id
         */
        id: string;
    };
    query?: never;
    url: '/payment-links/{id}/deactivate';
};
type PaymentLinksDeactivateErrors = {
    /**
     * Link is already archived and cannot be modified
     */
    400: {
        error: string;
        details?: unknown;
    };
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Payment link not found
     */
    404: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksDeactivateError = PaymentLinksDeactivateErrors[keyof PaymentLinksDeactivateErrors];
type PaymentLinksDeactivateResponses = {
    /**
     * Payment link deactivated
     */
    200: {
        id: string;
        status: 'active' | 'inactive' | 'archived';
        status_changed_at: string;
        is_active: boolean;
        updated_at: string;
    };
};
type PaymentLinksDeactivateResponse = PaymentLinksDeactivateResponses[keyof PaymentLinksDeactivateResponses];
type PaymentLinksActivateData = {
    body?: never;
    path: {
        /**
         * Payment link UUID or public_id
         */
        id: string;
    };
    query?: never;
    url: '/payment-links/{id}/activate';
};
type PaymentLinksActivateErrors = {
    /**
     * Link is archived and cannot be reactivated
     */
    400: {
        error: string;
        details?: unknown;
    };
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Payment link not found
     */
    404: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksActivateError = PaymentLinksActivateErrors[keyof PaymentLinksActivateErrors];
type PaymentLinksActivateResponses = {
    /**
     * Payment link activated
     */
    200: {
        id: string;
        status: 'active' | 'inactive' | 'archived';
        status_changed_at: string;
        is_active: boolean;
        updated_at: string;
    };
};
type PaymentLinksActivateResponse = PaymentLinksActivateResponses[keyof PaymentLinksActivateResponses];
type PaymentLinksArchiveData = {
    body?: never;
    path: {
        /**
         * Payment link UUID or public_id
         */
        id: string;
    };
    query?: never;
    url: '/payment-links/{id}/archive';
};
type PaymentLinksArchiveErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Payment link not found
     */
    404: {
        error: string;
        details?: unknown;
    };
};
type PaymentLinksArchiveError = PaymentLinksArchiveErrors[keyof PaymentLinksArchiveErrors];
type PaymentLinksArchiveResponses = {
    /**
     * Payment link archived
     */
    200: {
        id: string;
        status: 'active' | 'inactive' | 'archived';
        status_changed_at: string;
        is_active: boolean;
        updated_at: string;
    };
};
type PaymentLinksArchiveResponse = PaymentLinksArchiveResponses[keyof PaymentLinksArchiveResponses];
type PricesListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by product ID
         */
        product_id?: string;
        /**
         * Filter by price type
         */
        type?: 'one_time' | 'recurring';
        /**
         * Filter by pricing model
         */
        pricing_model?: 'fixed' | 'pay_what_you_want' | 'free';
        /**
         * Filter by active status
         */
        active?: 'true' | 'false';
        /**
         * Filter by currency
         */
        currency?: string;
        /**
         * Filter by lookup key
         */
        lookup_key?: string;
        /**
         * Number of results (1-100)
         */
        limit?: number;
        /**
         * Cursor for pagination (ID to start after)
         */
        starting_after?: string;
        /**
         * Cursor for pagination (ID to end before)
         */
        ending_before?: string;
    };
    url: '/prices';
};
type PricesListErrors = {
    /**
     * Unauthorized
     */
    401: PriceErrorResponse;
};
type PricesListError = PricesListErrors[keyof PricesListErrors];
type PricesListResponses = {
    /**
     * List of prices
     */
    200: PriceListResponse;
};
type PricesListResponse = PricesListResponses[keyof PricesListResponses];
type PricesCreateData = {
    /**
     * Price creation details
     */
    body: CreatePriceRequest;
    path?: never;
    query?: never;
    url: '/prices';
};
type PricesCreateErrors = {
    /**
     * Validation error
     */
    400: PriceErrorResponse;
    /**
     * Unauthorized
     */
    401: PriceErrorResponse;
    /**
     * Product not found
     */
    404: PriceErrorResponse;
};
type PricesCreateError = PricesCreateErrors[keyof PricesCreateErrors];
type PricesCreateResponses = {
    /**
     * Price created successfully
     */
    201: Price;
};
type PricesCreateResponse = PricesCreateResponses[keyof PricesCreateResponses];
type PricesArchiveData = {
    body?: never;
    path: {
        /**
         * Price ID
         */
        id: string;
    };
    query?: never;
    url: '/prices/{id}';
};
type PricesArchiveErrors = {
    /**
     * Unauthorized
     */
    401: PriceErrorResponse;
    /**
     * Price not found
     */
    404: PriceErrorResponse;
};
type PricesArchiveError = PricesArchiveErrors[keyof PricesArchiveErrors];
type PricesArchiveResponses = {
    /**
     * Price archived successfully
     */
    200: Price;
};
type PricesArchiveResponse = PricesArchiveResponses[keyof PricesArchiveResponses];
type PricesGetData = {
    body?: never;
    path: {
        /**
         * Price ID
         */
        id: string;
    };
    query?: never;
    url: '/prices/{id}';
};
type PricesGetErrors = {
    /**
     * Unauthorized
     */
    401: PriceErrorResponse;
    /**
     * Price not found
     */
    404: PriceErrorResponse;
};
type PricesGetError = PricesGetErrors[keyof PricesGetErrors];
type PricesGetResponses = {
    /**
     * Price details
     */
    200: Price;
};
type PricesGetResponse = PricesGetResponses[keyof PricesGetResponses];
type PricesUpdateData = {
    /**
     * Price update details
     */
    body: UpdatePriceRequest;
    path: {
        /**
         * Price ID
         */
        id: string;
    };
    query?: never;
    url: '/prices/{id}';
};
type PricesUpdateErrors = {
    /**
     * Validation error
     */
    400: PriceErrorResponse;
    /**
     * Unauthorized
     */
    401: PriceErrorResponse;
    /**
     * Price not found
     */
    404: PriceErrorResponse;
};
type PricesUpdateError = PricesUpdateErrors[keyof PricesUpdateErrors];
type PricesUpdateResponses = {
    /**
     * Price updated successfully
     */
    200: Price;
};
type PricesUpdateResponse = PricesUpdateResponses[keyof PricesUpdateResponses];
type WebhookEndpointsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by endpoint status
         */
        status?: 'enabled' | 'disabled';
        /**
         * Maximum number of results to return (1-100, default 20)
         */
        limit?: number;
        /**
         * Number of results to skip for pagination
         */
        offset?: number | null;
    };
    url: '/webhook-endpoints';
};
type WebhookEndpointsListResponses = {
    /**
     * List of webhook endpoints
     */
    200: {
        data: Array<{
            /**
             * Unique identifier for the webhook endpoint
             */
            id: string;
            /**
             * The URL that receives webhook POST requests
             */
            url: string;
            /**
             * Optional human-readable description
             */
            description: string | null;
            /**
             * Event types this endpoint subscribes to
             */
            enabled_events: Array<string>;
            /**
             * Whether the endpoint is currently receiving events
             */
            status: 'enabled' | 'disabled';
            /**
             * Circuit breaker status. Opens after repeated delivery failures.
             */
            circuit_breaker_state: 'closed' | 'open' | 'half_open';
            /**
             * Total number of delivery attempts
             */
            total_deliveries: number;
            /**
             * Number of successful deliveries
             */
            successful_deliveries: number;
            /**
             * Number of failed deliveries
             */
            failed_deliveries: number;
            /**
             * Timestamp of the most recent delivery attempt
             */
            last_delivery_at: string | null;
            /**
             * When the endpoint was created
             */
            created_at: string;
            /**
             * When the endpoint was last modified
             */
            updated_at: string;
        }>;
        meta: {
            /**
             * Total number of results
             */
            total: number;
            /**
             * Page size
             */
            limit: number;
            /**
             * Number of results skipped
             */
            offset: number;
            /**
             * Whether more results exist beyond this page
             */
            has_more: boolean;
        };
    };
};
type WebhookEndpointsListResponse = WebhookEndpointsListResponses[keyof WebhookEndpointsListResponses];
type WebhookEndpointsCreateData = {
    body?: {
        /**
         * The URL to receive webhook POST requests. Must be HTTPS in production.
         */
        url: string;
        /**
         * Event types to subscribe to. At least one event is required.
         */
        enabled_events: Array<string>;
        /**
         * Optional human-readable description (max 500 characters)
         */
        description?: string;
    };
    path?: never;
    query?: never;
    url: '/webhook-endpoints';
};
type WebhookEndpointsCreateResponses = {
    /**
     * Created webhook endpoint
     */
    201: {
        data: WebhookEndpoint;
    };
};
type WebhookEndpointsCreateResponse = WebhookEndpointsCreateResponses[keyof WebhookEndpointsCreateResponses];
type WebhookEndpointsDeleteData = {
    body?: never;
    path: {
        /**
         * Webhook endpoint ID
         */
        id: string;
    };
    query?: never;
    url: '/webhook-endpoints/{id}';
};
type WebhookEndpointsDeleteResponses = {
    /**
     * Deleted webhook endpoint
     */
    200: {
        data: {
            id: string;
            deleted: true;
        };
    };
};
type WebhookEndpointsDeleteResponse = WebhookEndpointsDeleteResponses[keyof WebhookEndpointsDeleteResponses];
type WebhookEndpointsGetData = {
    body?: never;
    path: {
        /**
         * Webhook endpoint ID
         */
        id: string;
    };
    query?: never;
    url: '/webhook-endpoints/{id}';
};
type WebhookEndpointsGetResponses = {
    /**
     * Webhook endpoint details
     */
    200: {
        data: {
            /**
             * Unique identifier for the webhook endpoint
             */
            id: string;
            /**
             * The URL that receives webhook POST requests
             */
            url: string;
            /**
             * Optional human-readable description
             */
            description: string | null;
            /**
             * Event types this endpoint subscribes to
             */
            enabled_events: Array<string>;
            /**
             * Whether the endpoint is currently receiving events
             */
            status: 'enabled' | 'disabled';
            /**
             * Circuit breaker status. Opens after repeated delivery failures.
             */
            circuit_breaker_state: 'closed' | 'open' | 'half_open';
            /**
             * Total number of delivery attempts
             */
            total_deliveries: number;
            /**
             * Number of successful deliveries
             */
            successful_deliveries: number;
            /**
             * Number of failed deliveries
             */
            failed_deliveries: number;
            /**
             * Timestamp of the most recent delivery attempt
             */
            last_delivery_at: string | null;
            /**
             * When the endpoint was created
             */
            created_at: string;
            /**
             * When the endpoint was last modified
             */
            updated_at: string;
        };
    };
};
type WebhookEndpointsGetResponse = WebhookEndpointsGetResponses[keyof WebhookEndpointsGetResponses];
type WebhookEndpointsUpdateData = {
    body?: {
        /**
         * New URL for the endpoint
         */
        url?: string;
        /**
         * Replace the subscribed event types
         */
        enabled_events?: Array<string>;
        /**
         * Update the description
         */
        description?: string | null;
        /**
         * Enable or disable the endpoint
         */
        enabled?: boolean;
    };
    path: {
        /**
         * Webhook endpoint ID
         */
        id: string;
    };
    query?: never;
    url: '/webhook-endpoints/{id}';
};
type WebhookEndpointsUpdateResponses = {
    /**
     * Updated webhook endpoint
     */
    200: {
        data: {
            /**
             * Unique identifier for the webhook endpoint
             */
            id: string;
            /**
             * The URL that receives webhook POST requests
             */
            url: string;
            /**
             * Optional human-readable description
             */
            description: string | null;
            /**
             * Event types this endpoint subscribes to
             */
            enabled_events: Array<string>;
            /**
             * Whether the endpoint is currently receiving events
             */
            status: 'enabled' | 'disabled';
            /**
             * Circuit breaker status. Opens after repeated delivery failures.
             */
            circuit_breaker_state: 'closed' | 'open' | 'half_open';
            /**
             * Total number of delivery attempts
             */
            total_deliveries: number;
            /**
             * Number of successful deliveries
             */
            successful_deliveries: number;
            /**
             * Number of failed deliveries
             */
            failed_deliveries: number;
            /**
             * Timestamp of the most recent delivery attempt
             */
            last_delivery_at: string | null;
            /**
             * When the endpoint was created
             */
            created_at: string;
            /**
             * When the endpoint was last modified
             */
            updated_at: string;
        };
    };
};
type WebhookEndpointsUpdateResponse = WebhookEndpointsUpdateResponses[keyof WebhookEndpointsUpdateResponses];
type WebhookEndpointsRotateSecretData = {
    body?: never;
    path: {
        /**
         * Webhook endpoint ID
         */
        id: string;
    };
    query?: never;
    url: '/webhook-endpoints/{id}/rotate-secret';
};
type WebhookEndpointsRotateSecretResponses = {
    /**
     * Rotated signing secret
     */
    200: {
        data: WebhookEndpoint;
    };
};
type WebhookEndpointsRotateSecretResponse = WebhookEndpointsRotateSecretResponses[keyof WebhookEndpointsRotateSecretResponses];
type WebhookDeliveriesListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by webhook endpoint ID
         */
        endpoint_id?: string;
        /**
         * Filter by source event ID
         */
        event_id?: string;
        /**
         * Filter by delivery status
         */
        status?: 'pending' | 'succeeded' | 'failed' | 'dead_lettered';
        limit?: number;
        /**
         * Cursor — return deliveries created before the row with this ID.
         */
        starting_after?: string;
        /**
         * Cursor — return deliveries created after the row with this ID.
         */
        ending_before?: string;
    };
    url: '/webhook-deliveries';
};
type WebhookDeliveriesListErrors = {
    /**
     * Unauthorized
     */
    401: WebhookDeliveryErrorResponse;
};
type WebhookDeliveriesListError = WebhookDeliveriesListErrors[keyof WebhookDeliveriesListErrors];
type WebhookDeliveriesListResponses = {
    /**
     * Paginated list of webhook deliveries.
     */
    200: WebhookDeliveryListResponse;
};
type WebhookDeliveriesListResponse = WebhookDeliveriesListResponses[keyof WebhookDeliveriesListResponses];
type WebhookDeliveriesGetData = {
    body?: never;
    path: {
        /**
         * Webhook delivery ID
         */
        id: string;
    };
    query?: never;
    url: '/webhook-deliveries/{id}';
};
type WebhookDeliveriesGetErrors = {
    /**
     * Webhook delivery not found
     */
    404: WebhookDeliveryErrorResponse;
};
type WebhookDeliveriesGetError = WebhookDeliveriesGetErrors[keyof WebhookDeliveriesGetErrors];
type WebhookDeliveriesGetResponses = {
    /**
     * Webhook delivery details
     */
    200: WebhookDeliveryResponse;
};
type WebhookDeliveriesGetResponse = WebhookDeliveriesGetResponses[keyof WebhookDeliveriesGetResponses];
type WebhookDeliveriesRetryData = {
    body?: never;
    path: {
        /**
         * Webhook delivery ID
         */
        id: string;
    };
    query?: never;
    url: '/webhook-deliveries/{id}/retry';
};
type WebhookDeliveriesRetryErrors = {
    /**
     * Webhook delivery not found
     */
    404: WebhookDeliveryErrorResponse;
    /**
     * Delivery already succeeded and cannot be retried.
     */
    409: WebhookDeliveryErrorResponse;
};
type WebhookDeliveriesRetryError = WebhookDeliveriesRetryErrors[keyof WebhookDeliveriesRetryErrors];
type WebhookDeliveriesRetryResponses = {
    /**
     * Delivery queued for retry.
     */
    200: WebhookDeliveryRetryResponse;
};
type WebhookDeliveriesRetryResponse = WebhookDeliveriesRetryResponses[keyof WebhookDeliveriesRetryResponses];
type CustomerPortalSessionsCreateData = {
    body: CreateCustomerPortalSessionRequest;
    path?: never;
    query?: never;
    url: '/customer-portal/sessions';
};
type CustomerPortalSessionsCreateErrors = {
    /**
     * Invalid or missing merchant API key.
     */
    401: CustomerPortalErrorResponse;
    /**
     * Customer not found for this merchant.
     */
    404: CustomerPortalErrorResponse;
};
type CustomerPortalSessionsCreateError = CustomerPortalSessionsCreateErrors[keyof CustomerPortalSessionsCreateErrors];
type CustomerPortalSessionsCreateResponses = {
    /**
     * Session created. The bearer token is returned only once.
     */
    201: CustomerPortalSessionCreateResponse;
};
type CustomerPortalSessionsCreateResponse = CustomerPortalSessionsCreateResponses[keyof CustomerPortalSessionsCreateResponses];
type CustomerPortalCustomerGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/customer-portal/customer';
};
type CustomerPortalCustomerGetErrors = {
    /**
     * Missing or invalid customer-portal session token.
     */
    401: CustomerPortalErrorResponse;
    /**
     * Customer record no longer exists.
     */
    404: CustomerPortalErrorResponse;
};
type CustomerPortalCustomerGetError = CustomerPortalCustomerGetErrors[keyof CustomerPortalCustomerGetErrors];
type CustomerPortalCustomerGetResponses = {
    /**
     * Authenticated customer.
     */
    200: PortalCustomerResponse;
};
type CustomerPortalCustomerGetResponse = CustomerPortalCustomerGetResponses[keyof CustomerPortalCustomerGetResponses];
type CustomerPortalSubscriptionsListData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        starting_after?: string;
        ending_before?: string;
    };
    url: '/customer-portal/subscriptions';
};
type CustomerPortalSubscriptionsListErrors = {
    /**
     * Missing or invalid customer-portal session token.
     */
    401: CustomerPortalErrorResponse;
};
type CustomerPortalSubscriptionsListError = CustomerPortalSubscriptionsListErrors[keyof CustomerPortalSubscriptionsListErrors];
type CustomerPortalSubscriptionsListResponses = {
    /**
     * Paginated list of subscriptions.
     */
    200: PortalSubscriptionList;
};
type CustomerPortalSubscriptionsListResponse = CustomerPortalSubscriptionsListResponses[keyof CustomerPortalSubscriptionsListResponses];
type CustomerPortalSubscriptionsGetData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/customer-portal/subscriptions/{id}';
};
type CustomerPortalSubscriptionsGetErrors = {
    /**
     * Unauthorized.
     */
    401: CustomerPortalErrorResponse;
    /**
     * Subscription not found.
     */
    404: CustomerPortalErrorResponse;
};
type CustomerPortalSubscriptionsGetError = CustomerPortalSubscriptionsGetErrors[keyof CustomerPortalSubscriptionsGetErrors];
type CustomerPortalSubscriptionsGetResponses = {
    /**
     * Subscription details.
     */
    200: PortalSubscriptionResponse;
};
type CustomerPortalSubscriptionsGetResponse = CustomerPortalSubscriptionsGetResponses[keyof CustomerPortalSubscriptionsGetResponses];
type CustomerPortalSubscriptionsCancelData = {
    body?: CancelSubscriptionRequest;
    path: {
        id: string;
    };
    query?: never;
    url: '/customer-portal/subscriptions/{id}/cancel';
};
type CustomerPortalSubscriptionsCancelErrors = {
    /**
     * Unauthorized.
     */
    401: CustomerPortalErrorResponse;
    /**
     * Subscription not found.
     */
    404: CustomerPortalErrorResponse;
};
type CustomerPortalSubscriptionsCancelError = CustomerPortalSubscriptionsCancelErrors[keyof CustomerPortalSubscriptionsCancelErrors];
type CustomerPortalSubscriptionsCancelResponses = {
    /**
     * Subscription canceled.
     */
    200: PortalSubscriptionCancelResponse;
};
type CustomerPortalSubscriptionsCancelResponse = CustomerPortalSubscriptionsCancelResponses[keyof CustomerPortalSubscriptionsCancelResponses];
type CustomerPortalInvoicesListData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        starting_after?: string;
        ending_before?: string;
    };
    url: '/customer-portal/invoices';
};
type CustomerPortalInvoicesListErrors = {
    /**
     * Unauthorized.
     */
    401: CustomerPortalErrorResponse;
};
type CustomerPortalInvoicesListError = CustomerPortalInvoicesListErrors[keyof CustomerPortalInvoicesListErrors];
type CustomerPortalInvoicesListResponses = {
    /**
     * Paginated list of invoices.
     */
    200: PortalInvoiceList;
};
type CustomerPortalInvoicesListResponse = CustomerPortalInvoicesListResponses[keyof CustomerPortalInvoicesListResponses];
type CustomerPortalInvoicesGetData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/customer-portal/invoices/{id}';
};
type CustomerPortalInvoicesGetErrors = {
    /**
     * Unauthorized.
     */
    401: CustomerPortalErrorResponse;
    /**
     * Invoice not found.
     */
    404: CustomerPortalErrorResponse;
};
type CustomerPortalInvoicesGetError = CustomerPortalInvoicesGetErrors[keyof CustomerPortalInvoicesGetErrors];
type CustomerPortalInvoicesGetResponses = {
    /**
     * Invoice details.
     */
    200: PortalInvoiceResponse;
};
type CustomerPortalInvoicesGetResponse = CustomerPortalInvoicesGetResponses[keyof CustomerPortalInvoicesGetResponses];
type CustomerMetersListData = {
    body?: never;
    path?: never;
    query: {
        /**
         * Customer UUID. Required — customer-meters are not queryable merchant-wide via this endpoint. Use /v2/meters for merchant-level meter definitions.
         */
        customer_id: string;
        /**
         * Optional single-meter filter. When provided, the response contains at most one entry.
         */
        meter_id?: string;
    };
    url: '/customer-meters';
};
type CustomerMetersListErrors = {
    /**
     * Missing or invalid customer_id.
     */
    400: CustomerMeterErrorResponse;
    /**
     * Unauthorized.
     */
    401: CustomerMeterErrorResponse;
};
type CustomerMetersListError = CustomerMetersListErrors[keyof CustomerMetersListErrors];
type CustomerMetersListResponses = {
    /**
     * List of customer-meter aggregates (one per meter the merchant has defined).
     */
    200: CustomerMeterList;
};
type CustomerMetersListResponse = CustomerMetersListResponses[keyof CustomerMetersListResponses];
type CustomerMetersGetData = {
    body?: never;
    path: {
        /**
         * Customer UUID
         */
        customer_id: string;
        /**
         * Meter UUID
         */
        meter_id: string;
    };
    query?: never;
    url: '/customer-meters/{customer_id}/{meter_id}';
};
type CustomerMetersGetErrors = {
    /**
     * Unauthorized.
     */
    401: CustomerMeterErrorResponse;
    /**
     * Meter not found.
     */
    404: CustomerMeterErrorResponse;
};
type CustomerMetersGetError = CustomerMetersGetErrors[keyof CustomerMetersGetErrors];
type CustomerMetersGetResponses = {
    /**
     * Customer-meter aggregate.
     */
    200: CustomerMeterResponse;
};
type CustomerMetersGetResponse = CustomerMetersGetResponses[keyof CustomerMetersGetResponses];
type PaymentIntentsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by customer ID
         */
        customer?: string;
        /**
         * Filter by status
         */
        status?: 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'canceled';
        /**
         * Filter by created_at >= (Unix timestamp)
         */
        created_gte?: number | null;
        /**
         * Filter by created_at <= (Unix timestamp)
         */
        created_lte?: number | null;
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Cursor for pagination - return results after this ID (pi_xxx)
         */
        starting_after?: string;
        /**
         * Cursor for pagination - return results before this ID (pi_xxx)
         */
        ending_before?: string;
    };
    url: '/payment-intents';
};
type PaymentIntentsListErrors = {
    /**
     * Unauthorized
     */
    401: PaymentIntentErrorResponse;
};
type PaymentIntentsListError = PaymentIntentsListErrors[keyof PaymentIntentsListErrors];
type PaymentIntentsListResponses = {
    /**
     * List of payment intents
     */
    200: PaymentIntentListResponse;
};
type PaymentIntentsListResponse = PaymentIntentsListResponses[keyof PaymentIntentsListResponses];
type PaymentIntentsCreateData = {
    body?: CreatePaymentIntentRequest;
    path?: never;
    query?: never;
    url: '/payment-intents';
};
type PaymentIntentsCreateErrors = {
    /**
     * Invalid request
     */
    400: PaymentIntentErrorResponse;
    /**
     * Unauthorized
     */
    401: PaymentIntentErrorResponse;
};
type PaymentIntentsCreateError = PaymentIntentsCreateErrors[keyof PaymentIntentsCreateErrors];
type PaymentIntentsCreateResponses = {
    /**
     * Payment intent created successfully
     */
    200: PaymentIntent;
};
type PaymentIntentsCreateResponse = PaymentIntentsCreateResponses[keyof PaymentIntentsCreateResponses];
type PaymentIntentsGetData = {
    body?: never;
    path: {
        /**
         * Payment intent ID (pi_xxx)
         */
        id: string;
    };
    query?: never;
    url: '/payment-intents/{id}';
};
type PaymentIntentsGetErrors = {
    /**
     * Payment intent not found
     */
    404: PaymentIntentErrorResponse;
};
type PaymentIntentsGetError = PaymentIntentsGetErrors[keyof PaymentIntentsGetErrors];
type PaymentIntentsGetResponses = {
    /**
     * Payment intent details
     */
    200: PaymentIntent;
};
type PaymentIntentsGetResponse = PaymentIntentsGetResponses[keyof PaymentIntentsGetResponses];
type PaymentIntentsConfirmData = {
    body?: ConfirmPaymentIntentRequest;
    path: {
        /**
         * Payment intent ID (pi_xxx)
         */
        id: string;
    };
    query?: never;
    url: '/payment-intents/{id}/confirm';
};
type PaymentIntentsConfirmErrors = {
    /**
     * Invalid request or confirmation failed
     */
    400: PaymentIntentErrorResponse;
    /**
     * Payment intent not found
     */
    404: PaymentIntentErrorResponse;
};
type PaymentIntentsConfirmError = PaymentIntentsConfirmErrors[keyof PaymentIntentsConfirmErrors];
type PaymentIntentsConfirmResponses = {
    /**
     * Confirmed payment intent
     */
    200: PaymentIntent;
};
type PaymentIntentsConfirmResponse = PaymentIntentsConfirmResponses[keyof PaymentIntentsConfirmResponses];
type PaymentIntentsCaptureData = {
    body?: CapturePaymentIntentRequest;
    path: {
        /**
         * Payment intent ID (pi_xxx)
         */
        id: string;
    };
    query?: never;
    url: '/payment-intents/{id}/capture';
};
type PaymentIntentsCaptureErrors = {
    /**
     * Invalid request or capture failed
     */
    400: PaymentIntentErrorResponse;
    /**
     * Payment intent not found
     */
    404: PaymentIntentErrorResponse;
};
type PaymentIntentsCaptureError = PaymentIntentsCaptureErrors[keyof PaymentIntentsCaptureErrors];
type PaymentIntentsCaptureResponses = {
    /**
     * Captured payment intent
     */
    200: PaymentIntent;
};
type PaymentIntentsCaptureResponse = PaymentIntentsCaptureResponses[keyof PaymentIntentsCaptureResponses];
type PaymentIntentsCancelData = {
    body?: CancelPaymentIntentRequest;
    path: {
        /**
         * Payment intent ID (pi_xxx)
         */
        id: string;
    };
    query?: never;
    url: '/payment-intents/{id}/cancel';
};
type PaymentIntentsCancelErrors = {
    /**
     * Invalid request or cancellation failed
     */
    400: PaymentIntentErrorResponse;
    /**
     * Payment intent not found
     */
    404: PaymentIntentErrorResponse;
};
type PaymentIntentsCancelError = PaymentIntentsCancelErrors[keyof PaymentIntentsCancelErrors];
type PaymentIntentsCancelResponses = {
    /**
     * Canceled payment intent
     */
    200: PaymentIntent;
};
type PaymentIntentsCancelResponse = PaymentIntentsCancelResponses[keyof PaymentIntentsCancelResponses];
type EventsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by event type (e.g., invoice.paid)
         */
        type?: string;
        /**
         * Filter by multiple event types (comma-separated)
         */
        types?: string;
        /**
         * Filter by customer ID
         */
        customer_id?: string;
        /**
         * Filter by invoice ID
         */
        invoice_id?: string;
        /**
         * Filter by subscription ID
         */
        subscription_id?: string;
        /**
         * Filter by order ID
         */
        order_id?: string;
        /**
         * Filter by created_at >= (Unix timestamp)
         */
        created_gte?: number | null;
        /**
         * Filter by created_at <= (Unix timestamp)
         */
        created_lte?: number | null;
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Cursor for pagination - return results after this event ID
         */
        starting_after?: string;
        /**
         * Cursor for pagination - return results before this event ID
         */
        ending_before?: string;
    };
    url: '/events';
};
type EventsListErrors = {
    /**
     * Unauthorized
     */
    401: EventErrorResponse;
};
type EventsListError = EventsListErrors[keyof EventsListErrors];
type EventsListResponses = {
    /**
     * List of events
     */
    200: EventListResponse;
};
type EventsListResponse = EventsListResponses[keyof EventsListResponses];
type EventsGetData = {
    body?: never;
    path: {
        /**
         * Event ID
         */
        id: string;
    };
    query?: never;
    url: '/events/{id}';
};
type EventsGetErrors = {
    /**
     * Unauthorized
     */
    401: EventErrorResponse;
    /**
     * Event not found
     */
    404: EventErrorResponse;
};
type EventsGetError = EventsGetErrors[keyof EventsGetErrors];
type EventsGetResponses = {
    /**
     * Event details
     */
    200: Event;
};
type EventsGetResponse = EventsGetResponses[keyof EventsGetResponses];
type EventsResendData = {
    body?: never;
    path: {
        /**
         * Event ID
         */
        id: string;
    };
    query?: never;
    url: '/events/{id}/resend';
};
type EventsResendErrors = {
    /**
     * Unauthorized
     */
    401: EventErrorResponse;
    /**
     * Event not found
     */
    404: EventErrorResponse;
};
type EventsResendError = EventsResendErrors[keyof EventsResendErrors];
type EventsResendResponses = {
    /**
     * Webhook queued for resending
     */
    200: ResendWebhookResponse;
};
type EventsResendResponse = EventsResendResponses[keyof EventsResendResponses];
type EntitlementsListData = {
    body?: never;
    path?: never;
    query: {
        /**
         * Customer UUID (required)
         */
        customer_id: string;
        /**
         * Include expired entitlements
         */
        include_expired?: boolean | null;
        /**
         * Filter by benefit type
         */
        benefit_type?: string;
        /**
         * Filter by category
         */
        category?: string;
        /**
         * Maximum results (1-100)
         */
        limit?: number;
        /**
         * Results to skip
         */
        offset?: number | null;
    };
    url: '/entitlements';
};
type EntitlementsListErrors = {
    /**
     * Missing customer_id
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer not found
     */
    404: unknown;
};
type EntitlementsListResponses = {
    /**
     * List of customer entitlements
     */
    200: EntitlementListResponse;
};
type EntitlementsListResponse = EntitlementsListResponses[keyof EntitlementsListResponses];
type EntitlementsCheckData = {
    body?: never;
    path?: never;
    query: {
        /**
         * Customer UUID (required)
         */
        customer_id: string;
        /**
         * Benefit key to check
         */
        benefit_key: string;
    };
    url: '/entitlements/check';
};
type EntitlementsCheckErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Customer not found
     */
    404: unknown;
};
type EntitlementsCheckResponses = {
    /**
     * Entitlement check result
     */
    200: EntitlementCheckResponse;
};
type EntitlementsCheckResponse = EntitlementsCheckResponses[keyof EntitlementsCheckResponses];
type TransactionsListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by transaction type
         */
        type?: 'sale' | 'refund' | 'void' | 'capture' | 'dispute' | 'adjustment';
        /**
         * Filter by status
         */
        status?: 'pending' | 'succeeded' | 'failed' | 'voided';
        /**
         * Filter by customer ID
         */
        customer_id?: string;
        /**
         * Filter by invoice ID
         */
        invoice_id?: string;
        /**
         * Filter by created_at >= (Unix timestamp)
         */
        created_gte?: number | null;
        /**
         * Filter by created_at <= (Unix timestamp)
         */
        created_lte?: number | null;
        /**
         * Maximum number of results (1-100)
         */
        limit?: number;
        /**
         * Cursor for pagination - return results after this ID
         */
        starting_after?: string;
        /**
         * Cursor for pagination - return results before this ID
         */
        ending_before?: string;
    };
    url: '/transactions';
};
type TransactionsListErrors = {
    /**
     * Unauthorized
     */
    401: TransactionListResponse;
};
type TransactionsListError = TransactionsListErrors[keyof TransactionsListErrors];
type TransactionsListResponses = {
    /**
     * List of transactions
     */
    200: TransactionListResponse;
};
type TransactionsListResponse = TransactionsListResponses[keyof TransactionsListResponses];
type TransactionsGetData = {
    body?: never;
    path: {
        /**
         * Transaction UUID
         */
        id: string;
    };
    query?: never;
    url: '/transactions/{id}';
};
type TransactionsGetErrors = {
    /**
     * Unauthorized
     */
    401: {
        error: string;
    };
    /**
     * Transaction not found
     */
    404: {
        error: string;
    };
};
type TransactionsGetError = TransactionsGetErrors[keyof TransactionsGetErrors];
type TransactionsGetResponses = {
    /**
     * Transaction details
     */
    200: TransactionRetrieveResponse;
};
type TransactionsGetResponse = TransactionsGetResponses[keyof TransactionsGetResponses];

/**
 * AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
 *
 * Generated by: pnpm --dir packages/sdk generate:wrapper
 * Source of truth: packages/openapi/sdk-openapi.json
 */

interface GeneratedResourceRuntime {
    requestData<T>(fn: (options: unknown) => Promise<{
        data?: T;
        error?: unknown;
    }>, options?: Record<string, unknown>): Promise<T>;
}
interface AnalyticsResource {
    revenueMrrSummary: (query?: NonNullable<AnalyticsRevenueMrrSummaryData["query"]>) => Promise<AnalyticsRevenueMrrSummaryResponse>;
    revenueTimeSeries: (query?: NonNullable<AnalyticsRevenueTimeSeriesData["query"]>) => Promise<AnalyticsRevenueTimeSeriesResponse>;
}
interface CheckoutSessionsResource {
    create: (body?: NonNullable<CheckoutSessionsCreateData["body"]>) => Promise<CheckoutSessionsCreateResponse>;
    expire: (id: NonNullable<CheckoutSessionsExpireData["path"]>["id"]) => Promise<CheckoutSessionsExpireResponse>;
    get: (id: NonNullable<CheckoutSessionsGetData["path"]>["id"]) => Promise<CheckoutSessionsGetResponse>;
}
interface CreditNotesResource {
    create: (body?: NonNullable<CreditNotesCreateData["body"]>) => Promise<CreditNotesCreateResponse>;
    get: (id: NonNullable<CreditNotesGetData["path"]>["id"]) => Promise<CreditNotesGetResponse>;
    list: (query?: NonNullable<CreditNotesListData["query"]>) => Promise<CreditNotesListResponse>;
    listLines: (id: NonNullable<CreditNotesListLinesData["path"]>["id"], query?: NonNullable<CreditNotesListLinesData["query"]>) => Promise<CreditNotesListLinesResponse>;
    preview: (body: NonNullable<CreditNotesPreviewData["body"]>) => Promise<CreditNotesPreviewResponse>;
    void: (id: NonNullable<CreditNotesVoidData["path"]>["id"]) => Promise<CreditNotesVoidResponse>;
}
interface CustomerResource {
    metersGet: (path: NonNullable<CustomerMetersGetData["path"]>) => Promise<CustomerMetersGetResponse>;
    metersList: (query?: NonNullable<CustomerMetersListData["query"]>) => Promise<CustomerMetersListResponse>;
    portalCustomerGet: () => Promise<CustomerPortalCustomerGetResponse>;
    portalInvoicesGet: (id: NonNullable<CustomerPortalInvoicesGetData["path"]>["id"]) => Promise<CustomerPortalInvoicesGetResponse>;
    portalInvoicesList: (query?: NonNullable<CustomerPortalInvoicesListData["query"]>) => Promise<CustomerPortalInvoicesListResponse>;
    portalSessionsCreate: (body: NonNullable<CustomerPortalSessionsCreateData["body"]>) => Promise<CustomerPortalSessionsCreateResponse>;
    portalSubscriptionsCancel: (id: NonNullable<CustomerPortalSubscriptionsCancelData["path"]>["id"], body?: NonNullable<CustomerPortalSubscriptionsCancelData["body"]>) => Promise<CustomerPortalSubscriptionsCancelResponse>;
    portalSubscriptionsGet: (id: NonNullable<CustomerPortalSubscriptionsGetData["path"]>["id"]) => Promise<CustomerPortalSubscriptionsGetResponse>;
    portalSubscriptionsList: (query?: NonNullable<CustomerPortalSubscriptionsListData["query"]>) => Promise<CustomerPortalSubscriptionsListResponse>;
}
interface CustomersResource {
    create: (body?: NonNullable<CustomersCreateData["body"]>) => Promise<CustomersCreateResponse>;
    get: (id: NonNullable<CustomersGetData["path"]>["id"]) => Promise<CustomersGetResponse>;
    list: (query?: NonNullable<CustomersListData["query"]>) => Promise<CustomersListResponse>;
    paymentMethodsList: (id: NonNullable<CustomersPaymentMethodsListData["path"]>["id"]) => Promise<CustomersPaymentMethodsListResponse>;
    paymentRailsGet: (id: NonNullable<CustomersPaymentRailsGetData["path"]>["id"], query?: NonNullable<CustomersPaymentRailsGetData["query"]>) => Promise<CustomersPaymentRailsGetResponse>;
    preferredRailsGet: (id: NonNullable<CustomersPreferredRailsGetData["path"]>["id"], query?: NonNullable<CustomersPreferredRailsGetData["query"]>) => Promise<CustomersPreferredRailsGetResponse>;
    update: (id: NonNullable<CustomersUpdateData["path"]>["id"], body?: NonNullable<CustomersUpdateData["body"]>) => Promise<CustomersUpdateResponse>;
}
interface EntitlementsResource {
    check: (query?: NonNullable<EntitlementsCheckData["query"]>) => Promise<EntitlementsCheckResponse>;
    list: (query?: NonNullable<EntitlementsListData["query"]>) => Promise<EntitlementsListResponse>;
}
interface EventsResource {
    get: (id: NonNullable<EventsGetData["path"]>["id"]) => Promise<EventsGetResponse>;
    list: (query?: NonNullable<EventsListData["query"]>) => Promise<EventsListResponse>;
    resend: (id: NonNullable<EventsResendData["path"]>["id"]) => Promise<EventsResendResponse>;
}
interface InvoicesResource {
    create: (body: NonNullable<InvoicesCreateData["body"]>) => Promise<InvoicesCreateResponse>;
    finalize: (id: NonNullable<InvoicesFinalizeData["path"]>["id"], body?: NonNullable<InvoicesFinalizeData["body"]>) => Promise<InvoicesFinalizeResponse>;
    get: (id: NonNullable<InvoicesGetData["path"]>["id"]) => Promise<InvoicesGetResponse>;
    list: (query?: NonNullable<InvoicesListData["query"]>) => Promise<InvoicesListResponse>;
    marginEstimate: (id: NonNullable<InvoicesMarginEstimateData["path"]>["id"], body: NonNullable<InvoicesMarginEstimateData["body"]>) => Promise<InvoicesMarginEstimateResponse>;
    send: (id: NonNullable<InvoicesSendData["path"]>["id"], body?: NonNullable<InvoicesSendData["body"]>) => Promise<InvoicesSendResponse>;
    update: (id: NonNullable<InvoicesUpdateData["path"]>["id"], body: NonNullable<InvoicesUpdateData["body"]>) => Promise<InvoicesUpdateResponse>;
    void: (id: NonNullable<InvoicesVoidData["path"]>["id"], body?: NonNullable<InvoicesVoidData["body"]>) => Promise<InvoicesVoidResponse>;
}
interface PaymentIntentsResource {
    cancel: (id: NonNullable<PaymentIntentsCancelData["path"]>["id"], body?: NonNullable<PaymentIntentsCancelData["body"]>) => Promise<PaymentIntentsCancelResponse>;
    capture: (id: NonNullable<PaymentIntentsCaptureData["path"]>["id"], body?: NonNullable<PaymentIntentsCaptureData["body"]>) => Promise<PaymentIntentsCaptureResponse>;
    confirm: (id: NonNullable<PaymentIntentsConfirmData["path"]>["id"], body?: NonNullable<PaymentIntentsConfirmData["body"]>) => Promise<PaymentIntentsConfirmResponse>;
    create: (body?: NonNullable<PaymentIntentsCreateData["body"]>) => Promise<PaymentIntentsCreateResponse>;
    get: (id: NonNullable<PaymentIntentsGetData["path"]>["id"]) => Promise<PaymentIntentsGetResponse>;
    list: (query?: NonNullable<PaymentIntentsListData["query"]>) => Promise<PaymentIntentsListResponse>;
}
interface PaymentLinksResource {
    activate: (id: NonNullable<PaymentLinksActivateData["path"]>["id"]) => Promise<PaymentLinksActivateResponse>;
    archive: (id: NonNullable<PaymentLinksArchiveData["path"]>["id"]) => Promise<PaymentLinksArchiveResponse>;
    create: (body?: NonNullable<PaymentLinksCreateData["body"]>) => Promise<PaymentLinksCreateResponse>;
    deactivate: (id: NonNullable<PaymentLinksDeactivateData["path"]>["id"]) => Promise<PaymentLinksDeactivateResponse>;
    expire: (id: NonNullable<PaymentLinksExpireData["path"]>["id"], body?: NonNullable<PaymentLinksExpireData["body"]>) => Promise<PaymentLinksExpireResponse>;
    get: (id: NonNullable<PaymentLinksGetData["path"]>["id"]) => Promise<PaymentLinksGetResponse>;
    list: (query?: NonNullable<PaymentLinksListData["query"]>) => Promise<PaymentLinksListResponse>;
    update: (id: NonNullable<PaymentLinksUpdateData["path"]>["id"], body?: NonNullable<PaymentLinksUpdateData["body"]>) => Promise<PaymentLinksUpdateResponse>;
}
interface PricesResource {
    archive: (id: NonNullable<PricesArchiveData["path"]>["id"]) => Promise<PricesArchiveResponse>;
    create: (body: NonNullable<PricesCreateData["body"]>) => Promise<PricesCreateResponse>;
    get: (id: NonNullable<PricesGetData["path"]>["id"]) => Promise<PricesGetResponse>;
    list: (query?: NonNullable<PricesListData["query"]>) => Promise<PricesListResponse>;
    update: (id: NonNullable<PricesUpdateData["path"]>["id"], body: NonNullable<PricesUpdateData["body"]>) => Promise<PricesUpdateResponse>;
}
interface ProductsResource {
    create: (body: NonNullable<ProductsCreateData["body"]>) => Promise<ProductsCreateResponse>;
    get: (id: NonNullable<ProductsGetData["path"]>["id"]) => Promise<ProductsGetResponse>;
    list: (query?: NonNullable<ProductsListData["query"]>) => Promise<ProductsListResponse>;
    update: (id: NonNullable<ProductsUpdateData["path"]>["id"], body: NonNullable<ProductsUpdateData["body"]>) => Promise<ProductsUpdateResponse>;
}
interface RefundsResource {
    create: (body?: NonNullable<RefundsCreateData["body"]>) => Promise<RefundsCreateResponse>;
    get: (id: NonNullable<RefundsGetData["path"]>["id"]) => Promise<RefundsGetResponse>;
    list: (query?: NonNullable<RefundsListData["query"]>) => Promise<RefundsListResponse>;
}
interface SubscriptionsResource {
    cancel: (id: NonNullable<SubscriptionsCancelData["path"]>["id"], body?: NonNullable<SubscriptionsCancelData["body"]>) => Promise<SubscriptionsCancelResponse>;
    create: (body?: NonNullable<SubscriptionsCreateData["body"]>) => Promise<SubscriptionsCreateResponse>;
    get: (id: NonNullable<SubscriptionsGetData["path"]>["id"]) => Promise<SubscriptionsGetResponse>;
    list: (query?: NonNullable<SubscriptionsListData["query"]>) => Promise<SubscriptionsListResponse>;
    update: (id: NonNullable<SubscriptionsUpdateData["path"]>["id"], body?: NonNullable<SubscriptionsUpdateData["body"]>) => Promise<SubscriptionsUpdateResponse>;
}
interface TransactionsResource {
    get: (id: NonNullable<TransactionsGetData["path"]>["id"]) => Promise<TransactionsGetResponse>;
    list: (query?: NonNullable<TransactionsListData["query"]>) => Promise<TransactionsListResponse>;
}
interface WebhookResource {
    deliveriesGet: (id: NonNullable<WebhookDeliveriesGetData["path"]>["id"]) => Promise<WebhookDeliveriesGetResponse>;
    deliveriesList: (query?: NonNullable<WebhookDeliveriesListData["query"]>) => Promise<WebhookDeliveriesListResponse>;
    deliveriesRetry: (id: NonNullable<WebhookDeliveriesRetryData["path"]>["id"]) => Promise<WebhookDeliveriesRetryResponse>;
}
interface WebhookEndpointsResource {
    create: (body?: NonNullable<WebhookEndpointsCreateData["body"]>) => Promise<WebhookEndpointsCreateResponse>;
    delete: (id: NonNullable<WebhookEndpointsDeleteData["path"]>["id"]) => Promise<WebhookEndpointsDeleteResponse>;
    get: (id: NonNullable<WebhookEndpointsGetData["path"]>["id"]) => Promise<WebhookEndpointsGetResponse>;
    list: (query?: NonNullable<WebhookEndpointsListData["query"]>) => Promise<WebhookEndpointsListResponse>;
    rotateSecret: (id: NonNullable<WebhookEndpointsRotateSecretData["path"]>["id"]) => Promise<WebhookEndpointsRotateSecretResponse>;
    update: (id: NonNullable<WebhookEndpointsUpdateData["path"]>["id"], body?: NonNullable<WebhookEndpointsUpdateData["body"]>) => Promise<WebhookEndpointsUpdateResponse>;
}
interface GeneratedResources {
    analytics: AnalyticsResource;
    checkoutSessions: CheckoutSessionsResource;
    creditNotes: CreditNotesResource;
    customer: CustomerResource;
    customers: CustomersResource;
    entitlements: EntitlementsResource;
    events: EventsResource;
    invoices: InvoicesResource;
    paymentIntents: PaymentIntentsResource;
    paymentLinks: PaymentLinksResource;
    prices: PricesResource;
    products: ProductsResource;
    refunds: RefundsResource;
    subscriptions: SubscriptionsResource;
    transactions: TransactionsResource;
    webhook: WebhookResource;
    webhookEndpoints: WebhookEndpointsResource;
}
declare function buildGeneratedResources(runtime: GeneratedResourceRuntime): GeneratedResources;

interface RevKeenClientOptions {
    apiKey?: string;
    oauth?: OAuthConfig;
    baseUrl?: string;
    timeout?: number;
    headers?: Record<string, string>;
    fetch?: typeof fetch;
}
declare class RevKeenClient implements GeneratedResourceRuntime {
    private readonly generatedClient;
    constructor(options: RevKeenClientOptions);
    requestData<T>(fn: (options: unknown) => Promise<{
        data?: T;
        error?: unknown;
    }>, options?: Record<string, unknown>): Promise<T>;
}
interface RevKeenClient extends GeneratedResources {
}

declare class RevKeenError extends Error {
    constructor(message: string);
}
declare class RevKeenAPIError extends RevKeenError {
    readonly status: number;
    readonly body: unknown;
    constructor(status: number, message: string, body: unknown);
}
declare class RevKeenTimeoutError extends RevKeenError {
    constructor(message: string);
}

type AuthToken = string | undefined;
interface Auth {
    /**
     * Which part of the request do we use to send the auth?
     *
     * @default 'header'
     */
    in?: 'header' | 'query' | 'cookie';
    /**
     * Header or query parameter name.
     *
     * @default 'Authorization'
     */
    name?: string;
    scheme?: 'basic' | 'bearer';
    type: 'apiKey' | 'http';
}

interface SerializerOptions<T> {
    /**
     * @default true
     */
    explode: boolean;
    style: T;
}
type ArrayStyle = 'form' | 'spaceDelimited' | 'pipeDelimited';
type ObjectStyle = 'form' | 'deepObject';

type QuerySerializer = (query: Record<string, unknown>) => string;
type BodySerializer = (body: unknown) => unknown;
type QuerySerializerOptionsObject = {
    allowReserved?: boolean;
    array?: Partial<SerializerOptions<ArrayStyle>>;
    object?: Partial<SerializerOptions<ObjectStyle>>;
};
type QuerySerializerOptions = QuerySerializerOptionsObject & {
    /**
     * Per-parameter serialization overrides. When provided, these settings
     * override the global array/object settings for specific parameter names.
     */
    parameters?: Record<string, QuerySerializerOptionsObject>;
};

type HttpMethod = 'connect' | 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
type Client$1<RequestFn = never, Config = unknown, MethodFn = never, BuildUrlFn = never, SseFn = never> = {
    /**
     * Returns the final request URL.
     */
    buildUrl: BuildUrlFn;
    getConfig: () => Config;
    request: RequestFn;
    setConfig: (config: Config) => Config;
} & {
    [K in HttpMethod]: MethodFn;
} & ([SseFn] extends [never] ? {
    sse?: never;
} : {
    sse: {
        [K in HttpMethod]: SseFn;
    };
});
interface Config$1 {
    /**
     * Auth token or a function returning auth token. The resolved value will be
     * added to the request payload as defined by its `security` array.
     */
    auth?: ((auth: Auth) => Promise<AuthToken> | AuthToken) | AuthToken;
    /**
     * A function for serializing request body parameter. By default,
     * {@link JSON.stringify()} will be used.
     */
    bodySerializer?: BodySerializer | null;
    /**
     * An object containing any HTTP headers that you want to pre-populate your
     * `Headers` object with.
     *
     * {@link https://developer.mozilla.org/docs/Web/API/Headers/Headers#init See more}
     */
    headers?: RequestInit['headers'] | Record<string, string | number | boolean | (string | number | boolean)[] | null | undefined | unknown>;
    /**
     * The request method.
     *
     * {@link https://developer.mozilla.org/docs/Web/API/fetch#method See more}
     */
    method?: Uppercase<HttpMethod>;
    /**
     * A function for serializing request query parameters. By default, arrays
     * will be exploded in form style, objects will be exploded in deepObject
     * style, and reserved characters are percent-encoded.
     *
     * This method will have no effect if the native `paramsSerializer()` Axios
     * API function is used.
     *
     * {@link https://swagger.io/docs/specification/serialization/#query View examples}
     */
    querySerializer?: QuerySerializer | QuerySerializerOptions;
    /**
     * A function validating request data. This is useful if you want to ensure
     * the request conforms to the desired shape, so it can be safely sent to
     * the server.
     */
    requestValidator?: (data: unknown) => Promise<unknown>;
    /**
     * A function transforming response data before it's returned. This is useful
     * for post-processing data, e.g., converting ISO strings into Date objects.
     */
    responseTransformer?: (data: unknown) => Promise<unknown>;
    /**
     * A function validating response data. This is useful if you want to ensure
     * the response conforms to the desired shape, so it can be safely passed to
     * the transformers and returned to the user.
     */
    responseValidator?: (data: unknown) => Promise<unknown>;
}

type ServerSentEventsOptions<TData = unknown> = Omit<RequestInit, 'method'> & Pick<Config$1, 'method' | 'responseTransformer' | 'responseValidator'> & {
    /**
     * Fetch API implementation. You can use this option to provide a custom
     * fetch instance.
     *
     * @default globalThis.fetch
     */
    fetch?: typeof fetch;
    /**
     * Implementing clients can call request interceptors inside this hook.
     */
    onRequest?: (url: string, init: RequestInit) => Promise<Request>;
    /**
     * Callback invoked when a network or parsing error occurs during streaming.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @param error The error that occurred.
     */
    onSseError?: (error: unknown) => void;
    /**
     * Callback invoked when an event is streamed from the server.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @param event Event streamed from the server.
     * @returns Nothing (void).
     */
    onSseEvent?: (event: StreamEvent<TData>) => void;
    serializedBody?: RequestInit['body'];
    /**
     * Default retry delay in milliseconds.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @default 3000
     */
    sseDefaultRetryDelay?: number;
    /**
     * Maximum number of retry attempts before giving up.
     */
    sseMaxRetryAttempts?: number;
    /**
     * Maximum retry delay in milliseconds.
     *
     * Applies only when exponential backoff is used.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @default 30000
     */
    sseMaxRetryDelay?: number;
    /**
     * Optional sleep function for retry backoff.
     *
     * Defaults to using `setTimeout`.
     */
    sseSleepFn?: (ms: number) => Promise<void>;
    url: string;
};
interface StreamEvent<TData = unknown> {
    data: TData;
    event?: string;
    id?: string;
    retry?: number;
}
type ServerSentEventsResult<TData = unknown, TReturn = void, TNext = unknown> = {
    stream: AsyncGenerator<TData extends Record<string, unknown> ? TData[keyof TData] : TData, TReturn, TNext>;
};

type ErrInterceptor<Err, Res, Req, Options> = (error: Err, response: Res, request: Req, options: Options) => Err | Promise<Err>;
type ReqInterceptor<Req, Options> = (request: Req, options: Options) => Req | Promise<Req>;
type ResInterceptor<Res, Req, Options> = (response: Res, request: Req, options: Options) => Res | Promise<Res>;
declare class Interceptors<Interceptor> {
    fns: Array<Interceptor | null>;
    clear(): void;
    eject(id: number | Interceptor): void;
    exists(id: number | Interceptor): boolean;
    getInterceptorIndex(id: number | Interceptor): number;
    update(id: number | Interceptor, fn: Interceptor): number | Interceptor | false;
    use(fn: Interceptor): number;
}
interface Middleware<Req, Res, Err, Options> {
    error: Interceptors<ErrInterceptor<Err, Res, Req, Options>>;
    request: Interceptors<ReqInterceptor<Req, Options>>;
    response: Interceptors<ResInterceptor<Res, Req, Options>>;
}

type ResponseStyle = 'data' | 'fields';
interface Config<T extends ClientOptions = ClientOptions> extends Omit<RequestInit, 'body' | 'headers' | 'method'>, Config$1 {
    /**
     * Base URL for all requests made by this client.
     */
    baseUrl?: T['baseUrl'];
    /**
     * Fetch API implementation. You can use this option to provide a custom
     * fetch instance.
     *
     * @default globalThis.fetch
     */
    fetch?: typeof fetch;
    /**
     * Please don't use the Fetch client for Next.js applications. The `next`
     * options won't have any effect.
     *
     * Install {@link https://www.npmjs.com/package/@hey-api/client-next `@hey-api/client-next`} instead.
     */
    next?: never;
    /**
     * Return the response data parsed in a specified format. By default, `auto`
     * will infer the appropriate method from the `Content-Type` response header.
     * You can override this behavior with any of the {@link Body} methods.
     * Select `stream` if you don't want to parse response data at all.
     *
     * @default 'auto'
     */
    parseAs?: 'arrayBuffer' | 'auto' | 'blob' | 'formData' | 'json' | 'stream' | 'text';
    /**
     * Should we return only data or multiple fields (data, error, response, etc.)?
     *
     * @default 'fields'
     */
    responseStyle?: ResponseStyle;
    /**
     * Throw an error instead of returning it in the response?
     *
     * @default false
     */
    throwOnError?: T['throwOnError'];
}
interface RequestOptions<TData = unknown, TResponseStyle extends ResponseStyle = 'fields', ThrowOnError extends boolean = boolean, Url extends string = string> extends Config<{
    responseStyle: TResponseStyle;
    throwOnError: ThrowOnError;
}>, Pick<ServerSentEventsOptions<TData>, 'onRequest' | 'onSseError' | 'onSseEvent' | 'sseDefaultRetryDelay' | 'sseMaxRetryAttempts' | 'sseMaxRetryDelay'> {
    /**
     * Any body that you want to add to your request.
     *
     * {@link https://developer.mozilla.org/docs/Web/API/fetch#body}
     */
    body?: unknown;
    path?: Record<string, unknown>;
    query?: Record<string, unknown>;
    /**
     * Security mechanism(s) to use for the request.
     */
    security?: ReadonlyArray<Auth>;
    url: Url;
}
interface ResolvedRequestOptions<TResponseStyle extends ResponseStyle = 'fields', ThrowOnError extends boolean = boolean, Url extends string = string> extends RequestOptions<unknown, TResponseStyle, ThrowOnError, Url> {
    serializedBody?: string;
}
type RequestResult<TData = unknown, TError = unknown, ThrowOnError extends boolean = boolean, TResponseStyle extends ResponseStyle = 'fields'> = ThrowOnError extends true ? Promise<TResponseStyle extends 'data' ? TData extends Record<string, unknown> ? TData[keyof TData] : TData : {
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    request: Request;
    response: Response;
}> : Promise<TResponseStyle extends 'data' ? (TData extends Record<string, unknown> ? TData[keyof TData] : TData) | undefined : ({
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    error: undefined;
} | {
    data: undefined;
    error: TError extends Record<string, unknown> ? TError[keyof TError] : TError;
}) & {
    request: Request;
    response: Response;
}>;
interface ClientOptions {
    baseUrl?: string;
    responseStyle?: ResponseStyle;
    throwOnError?: boolean;
}
type MethodFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<TData, TResponseStyle, ThrowOnError>, 'method'>) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type SseFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<never, TResponseStyle, ThrowOnError>, 'method'>) => Promise<ServerSentEventsResult<TData, TError>>;
type RequestFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<TData, TResponseStyle, ThrowOnError>, 'method'> & Pick<Required<RequestOptions<TData, TResponseStyle, ThrowOnError>>, 'method'>) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type BuildUrlFn = <TData extends {
    body?: unknown;
    path?: Record<string, unknown>;
    query?: Record<string, unknown>;
    url: string;
}>(options: TData & Options$1<TData>) => string;
type Client = Client$1<RequestFn, Config, MethodFn, BuildUrlFn, SseFn> & {
    interceptors: Middleware<Request, Response, unknown, ResolvedRequestOptions>;
};
interface TDataShape {
    body?: unknown;
    headers?: unknown;
    path?: unknown;
    query?: unknown;
    url: string;
}
type OmitKeys<T, K> = Pick<T, Exclude<keyof T, K>>;
type Options$1<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown, TResponseStyle extends ResponseStyle = 'fields'> = OmitKeys<RequestOptions<TResponse, TResponseStyle, ThrowOnError>, 'body' | 'path' | 'query' | 'url'> & ([TData] extends [never] ? unknown : Omit<TData, 'url'>);

type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options$1<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * List invoices
 *
 * List invoices with pagination and filtering.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const invoicesList: <ThrowOnError extends boolean = false>(options?: Options<InvoicesListData, ThrowOnError>) => RequestResult<InvoicesListResponses, unknown, ThrowOnError, "fields">;
/**
 * Create invoice
 *
 * Create a new invoice.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesCreate: <ThrowOnError extends boolean = false>(options: Options<InvoicesCreateData, ThrowOnError>) => RequestResult<InvoicesCreateResponses, unknown, ThrowOnError, "fields">;
/**
 * Get invoice
 *
 * Get a single invoice by ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 */
declare const invoicesGet: <ThrowOnError extends boolean = false>(options: Options<InvoicesGetData, ThrowOnError>) => RequestResult<InvoicesGetResponses, unknown, ThrowOnError, "fields">;
/**
 * Update invoice
 *
 * Update an existing invoice.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesUpdate: <ThrowOnError extends boolean = false>(options: Options<InvoicesUpdateData, ThrowOnError>) => RequestResult<InvoicesUpdateResponses, unknown, ThrowOnError, "fields">;
/**
 * Estimate invoice net by payment rail
 *
 * Estimate per-rail processing fees and net-after-fees for an invoice amount.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesMarginEstimate: <ThrowOnError extends boolean = false>(options: Options<InvoicesMarginEstimateData, ThrowOnError>) => RequestResult<InvoicesMarginEstimateResponses, InvoicesMarginEstimateErrors, ThrowOnError, "fields">;
/**
 * Finalize an invoice
 *
 * Finalizes a draft invoice, locking it for payment. Assigns invoice number and generates public token. After finalization, financial fields become immutable.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesFinalize: <ThrowOnError extends boolean = false>(options: Options<InvoicesFinalizeData, ThrowOnError>) => RequestResult<InvoicesFinalizeResponses, InvoicesFinalizeErrors, ThrowOnError, "fields">;
/**
 * Void an invoice
 *
 * Voids an invoice. Only invoices without recorded payments can be voided. Use refund instead for paid invoices.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesVoid: <ThrowOnError extends boolean = false>(options: Options<InvoicesVoidData, ThrowOnError>) => RequestResult<InvoicesVoidResponses, InvoicesVoidErrors, ThrowOnError, "fields">;
/**
 * Send an invoice
 *
 * Sends an invoice to the customer via the specified channel (email, SMS, or WhatsApp). Invoice must be approved first.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesSend: <ThrowOnError extends boolean = false>(options: Options<InvoicesSendData, ThrowOnError>) => RequestResult<InvoicesSendResponses, InvoicesSendErrors, ThrowOnError, "fields">;
/**
 * List products
 *
 * List products with pagination and optional search.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const productsList: <ThrowOnError extends boolean = false>(options?: Options<ProductsListData, ThrowOnError>) => RequestResult<ProductsListResponses, ProductsListErrors, ThrowOnError, "fields">;
/**
 * Create product
 *
 * Create a new product. Requires 'products:write' scope.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productsCreate: <ThrowOnError extends boolean = false>(options: Options<ProductsCreateData, ThrowOnError>) => RequestResult<ProductsCreateResponses, ProductsCreateErrors, ThrowOnError, "fields">;
/**
 * Get product by ID
 *
 * Get a product by its ID. Requires 'products:read' scope.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const productsGet: <ThrowOnError extends boolean = false>(options: Options<ProductsGetData, ThrowOnError>) => RequestResult<ProductsGetResponses, ProductsGetErrors, ThrowOnError, "fields">;
/**
 * Update product
 *
 * Update an existing product. Requires 'products:write' scope.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productsUpdate: <ThrowOnError extends boolean = false>(options: Options<ProductsUpdateData, ThrowOnError>) => RequestResult<ProductsUpdateResponses, ProductsUpdateErrors, ThrowOnError, "fields">;
/**
 * Create a checkout session
 *
 * Create a checkout session for an invoice or product.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /checkout-sessions/{id}` — Retrieve a checkout session
 * - `POST /checkout-sessions/{id}/expire` — Expire a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const checkoutSessionsCreate: <ThrowOnError extends boolean = false>(options?: Options<CheckoutSessionsCreateData, ThrowOnError>) => RequestResult<CheckoutSessionsCreateResponses, CheckoutSessionsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve a checkout session
 *
 * Retrieve a checkout session by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /checkout-sessions` — Create a checkout session
 * - `POST /checkout-sessions/{id}/expire` — Expire a checkout session
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const checkoutSessionsGet: <ThrowOnError extends boolean = false>(options: Options<CheckoutSessionsGetData, ThrowOnError>) => RequestResult<CheckoutSessionsGetResponses, CheckoutSessionsGetErrors, ThrowOnError, "fields">;
/**
 * Expire a checkout session
 *
 * Manually expire an open checkout session. Only sessions with status 'open' or 'pending' and no active payment attempt can be expired.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /checkout-sessions` — Create a checkout session
 * - `GET /checkout-sessions/{id}` — Retrieve a checkout session
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const checkoutSessionsExpire: <ThrowOnError extends boolean = false>(options: Options<CheckoutSessionsExpireData, ThrowOnError>) => RequestResult<CheckoutSessionsExpireResponses, CheckoutSessionsExpireErrors, ThrowOnError, "fields">;
/**
 * List customers
 *
 * Retrieve a paginated list of customers for the merchant
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers/{id}` — Get customer by ID
 * - `PATCH /customers/{id}` — Update customer details
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customersList: <ThrowOnError extends boolean = false>(options?: Options<CustomersListData, ThrowOnError>) => RequestResult<CustomersListResponses, CustomersListErrors, ThrowOnError, "fields">;
/**
 * Create a new customer
 *
 * Create a new customer record in the merchant's account
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 * - `PATCH /customers/{id}` — Update customer details
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customersCreate: <ThrowOnError extends boolean = false>(options?: Options<CustomersCreateData, ThrowOnError>) => RequestResult<CustomersCreateResponses, CustomersCreateErrors, ThrowOnError, "fields">;
/**
 * Get customer by ID
 *
 * Retrieve detailed information about a specific customer
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `PATCH /customers/{id}` — Update customer details
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customersGet: <ThrowOnError extends boolean = false>(options: Options<CustomersGetData, ThrowOnError>) => RequestResult<CustomersGetResponses, CustomersGetErrors, ThrowOnError, "fields">;
/**
 * Update customer details
 *
 * Update an existing customer's information
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customersUpdate: <ThrowOnError extends boolean = false>(options: Options<CustomersUpdateData, ThrowOnError>) => RequestResult<CustomersUpdateResponses, CustomersUpdateErrors, ThrowOnError, "fields">;
/**
 * Get customer payment rail availability
 *
 * Return per-rail availability for a customer, including mandate state and last successful rail usage.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customersPaymentRailsGet: <ThrowOnError extends boolean = false>(options: Options<CustomersPaymentRailsGetData, ThrowOnError>) => RequestResult<CustomersPaymentRailsGetResponses, CustomersPaymentRailsGetErrors, ThrowOnError, "fields">;
/**
 * Get preferred payment rails
 *
 * Return smart-pick rail recommendations with customer history, mandate state, and margin-aware reasoning.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customersPreferredRailsGet: <ThrowOnError extends boolean = false>(options: Options<CustomersPreferredRailsGetData, ThrowOnError>) => RequestResult<CustomersPreferredRailsGetResponses, CustomersPreferredRailsGetErrors, ThrowOnError, "fields">;
/**
 * Get customer payment methods
 *
 * Retrieve all payment methods for a customer
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customersPaymentMethodsList: <ThrowOnError extends boolean = false>(options: Options<CustomersPaymentMethodsListData, ThrowOnError>) => RequestResult<CustomersPaymentMethodsListResponses, CustomersPaymentMethodsListErrors, ThrowOnError, "fields">;
/**
 * List subscriptions
 *
 * Retrieve a paginated list of subscriptions with optional filters
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const subscriptionsList: <ThrowOnError extends boolean = false>(options?: Options<SubscriptionsListData, ThrowOnError>) => RequestResult<SubscriptionsListResponses, SubscriptionsListErrors, ThrowOnError, "fields">;
/**
 * Create a new subscription
 *
 * Create a new subscription for a customer
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /subscriptions` — List subscriptions
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const subscriptionsCreate: <ThrowOnError extends boolean = false>(options?: Options<SubscriptionsCreateData, ThrowOnError>) => RequestResult<SubscriptionsCreateResponses, SubscriptionsCreateErrors, ThrowOnError, "fields">;
/**
 * Get subscription by ID
 *
 * Retrieve detailed information about a specific subscription
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions` — List subscriptions
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const subscriptionsGet: <ThrowOnError extends boolean = false>(options: Options<SubscriptionsGetData, ThrowOnError>) => RequestResult<SubscriptionsGetResponses, SubscriptionsGetErrors, ThrowOnError, "fields">;
/**
 * Update subscription details
 *
 * Update an existing subscription's properties
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions` — List subscriptions
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const subscriptionsUpdate: <ThrowOnError extends boolean = false>(options: Options<SubscriptionsUpdateData, ThrowOnError>) => RequestResult<SubscriptionsUpdateResponses, SubscriptionsUpdateErrors, ThrowOnError, "fields">;
/**
 * Cancel subscription
 *
 * Cancel a subscription either immediately or at the end of the current billing period.
 *
 * **Modes:**
 * - `immediately`: Status set to "canceled", access revoked now
 * - `period_end`: cancelAtPeriodEnd flag set, access continues until period end
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions` — List subscriptions
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const subscriptionsCancel: <ThrowOnError extends boolean = false>(options: Options<SubscriptionsCancelData, ThrowOnError>) => RequestResult<SubscriptionsCancelResponses, SubscriptionsCancelErrors, ThrowOnError, "fields">;
/**
 * MRR Summary
 *
 * Get Monthly Recurring Revenue metrics and growth
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /analytics/revenue/time-series` — Revenue Time Series
 * - `GET /analytics/invoices/ar-aging` — A/R Aging Report
 * - `GET /analytics/collections/dso` — Days Sales Outstanding
 * - `GET /analytics/customers/ltv` — Customer LTV
 * - `GET /analytics/customers/{customerId}` — Customer Analytics
 * - `GET /analytics/payment-links/conversion` — Payment Link Conversion
 * - `GET /analytics/checkout/funnel` — Checkout Funnel Analytics
 * - `GET /analytics/checkout/abandonment/summary` — Abandonment Alert Summary
 */
declare const analyticsRevenueMrrSummary: <ThrowOnError extends boolean = false>(options?: Options<AnalyticsRevenueMrrSummaryData, ThrowOnError>) => RequestResult<AnalyticsRevenueMrrSummaryResponses, unknown, ThrowOnError, "fields">;
/**
 * Revenue Time Series
 *
 * Get revenue data over time with configurable granularity
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /analytics/revenue/mrr-summary` — MRR Summary
 * - `GET /analytics/invoices/ar-aging` — A/R Aging Report
 * - `GET /analytics/collections/dso` — Days Sales Outstanding
 * - `GET /analytics/customers/ltv` — Customer LTV
 * - `GET /analytics/customers/{customerId}` — Customer Analytics
 * - `GET /analytics/payment-links/conversion` — Payment Link Conversion
 * - `GET /analytics/checkout/funnel` — Checkout Funnel Analytics
 * - `GET /analytics/checkout/abandonment/summary` — Abandonment Alert Summary
 */
declare const analyticsRevenueTimeSeries: <ThrowOnError extends boolean = false>(options: Options<AnalyticsRevenueTimeSeriesData, ThrowOnError>) => RequestResult<AnalyticsRevenueTimeSeriesResponses, unknown, ThrowOnError, "fields">;
/**
 * List refunds
 *
 * Retrieve a paginated list of refunds with optional filters. Results are ordered by creation date (newest first).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /refunds` — Create a refund
 * - `GET /refunds/{id}` — Get refund by ID
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const refundsList: <ThrowOnError extends boolean = false>(options?: Options<RefundsListData, ThrowOnError>) => RequestResult<RefundsListResponses, RefundsListErrors, ThrowOnError, "fields">;
/**
 * Create a refund
 *
 * Initiate a refund for a payment. The refund will be processed through the original payment gateway.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /refunds` — List refunds
 * - `GET /refunds/{id}` — Get refund by ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const refundsCreate: <ThrowOnError extends boolean = false>(options?: Options<RefundsCreateData, ThrowOnError>) => RequestResult<RefundsCreateResponses, RefundsCreateErrors, ThrowOnError, "fields">;
/**
 * Get refund by ID
 *
 * Retrieve a single refund by its public ID (ref_xxx) or internal UUID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /refunds` — List refunds
 * - `POST /refunds` — Create a refund
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const refundsGet: <ThrowOnError extends boolean = false>(options: Options<RefundsGetData, ThrowOnError>) => RequestResult<RefundsGetResponses, RefundsGetErrors, ThrowOnError, "fields">;
/**
 * List credit notes
 *
 * Retrieve a paginated list of credit notes with optional filters. Results are ordered by creation date (newest first).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const creditNotesList: <ThrowOnError extends boolean = false>(options?: Options<CreditNotesListData, ThrowOnError>) => RequestResult<CreditNotesListResponses, CreditNotesListErrors, ThrowOnError, "fields">;
/**
 * Create a credit note
 *
 * Issue a credit note for a paid or partially paid invoice. The credit can be applied via refund to payment method, customer balance, or marked as external.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const creditNotesCreate: <ThrowOnError extends boolean = false>(options?: Options<CreditNotesCreateData, ThrowOnError>) => RequestResult<CreditNotesCreateResponses, CreditNotesCreateErrors, ThrowOnError, "fields">;
/**
 * Get credit note by ID
 *
 * Retrieve a single credit note by its UUID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const creditNotesGet: <ThrowOnError extends boolean = false>(options: Options<CreditNotesGetData, ThrowOnError>) => RequestResult<CreditNotesGetResponses, CreditNotesGetErrors, ThrowOnError, "fields">;
/**
 * Void a credit note
 *
 * Void a credit note that has been issued but not yet fully applied. This is an accounting void — it reverses the credit without creating a new financial transaction.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const creditNotesVoid: <ThrowOnError extends boolean = false>(options: Options<CreditNotesVoidData, ThrowOnError>) => RequestResult<CreditNotesVoidResponses, CreditNotesVoidErrors, ThrowOnError, "fields">;
/**
 * List line items on a credit note
 *
 * Returns the line items attached to a credit note. Each line describes a portion of the invoice that the credit applies to — either a whole invoice line or a prorated slice. Use this to reconstruct the credit's effect per invoice line (for example, when displaying the credit breakdown in your own UI).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const creditNotesListLines: <ThrowOnError extends boolean = false>(options: Options<CreditNotesListLinesData, ThrowOnError>) => RequestResult<CreditNotesListLinesResponses, CreditNotesListLinesErrors, ThrowOnError, "fields">;
/**
 * Preview a credit note without creating it
 *
 * Compute what a credit note would look like against a specific invoice without persisting anything. Use this to validate amounts and show a "here's what will happen" UI before the merchant commits. No side effects — no DB writes, no events emitted, no refunds initiated. Mirrors Stripe's `POST /v1/credit_notes/preview`.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const creditNotesPreview: <ThrowOnError extends boolean = false>(options: Options<CreditNotesPreviewData, ThrowOnError>) => RequestResult<CreditNotesPreviewResponses, CreditNotesPreviewErrors, ThrowOnError, "fields">;
/**
 * List payment links
 *
 * List payment links for the authenticated merchant with pagination and filters
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const paymentLinksList: <ThrowOnError extends boolean = false>(options?: Options<PaymentLinksListData, ThrowOnError>) => RequestResult<PaymentLinksListResponses, PaymentLinksListErrors, ThrowOnError, "fields">;
/**
 * Create a new payment link
 *
 * Create a new payment link for invoices, subscriptions, or custom amounts
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentLinksCreate: <ThrowOnError extends boolean = false>(options?: Options<PaymentLinksCreateData, ThrowOnError>) => RequestResult<PaymentLinksCreateResponses, PaymentLinksCreateErrors, ThrowOnError, "fields">;
/**
 * Get payment link by ID
 *
 * Retrieve a payment link by its UUID or public_id
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const paymentLinksGet: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksGetData, ThrowOnError>) => RequestResult<PaymentLinksGetResponses, PaymentLinksGetErrors, ThrowOnError, "fields">;
/**
 * Expire a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "expired"` instead.** This convenience endpoint will be removed in a future API version. Mark a payment link as expired, preventing further use.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksExpire: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksExpireData, ThrowOnError>) => RequestResult<PaymentLinksExpireResponses, PaymentLinksExpireErrors, ThrowOnError, "fields">;
/**
 * Update payment link status
 *
 * Change the status of a payment link. Active links accept payments, inactive links are temporarily disabled, and archived links are permanently disabled and cannot be reactivated.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentLinksUpdate: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksUpdateData, ThrowOnError>) => RequestResult<PaymentLinksUpdateResponses, PaymentLinksUpdateErrors, ThrowOnError, "fields">;
/**
 * Deactivate a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "inactive"` instead.** This convenience endpoint will be removed in a future API version. Temporarily disable a payment link. It can be reactivated later.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksDeactivate: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksDeactivateData, ThrowOnError>) => RequestResult<PaymentLinksDeactivateResponses, PaymentLinksDeactivateErrors, ThrowOnError, "fields">;
/**
 * Activate a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "active"` instead.** This convenience endpoint will be removed in a future API version. Enable a payment link to accept payments. Cannot be used on archived links.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksActivate: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksActivateData, ThrowOnError>) => RequestResult<PaymentLinksActivateResponses, PaymentLinksActivateErrors, ThrowOnError, "fields">;
/**
 * Archive a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "archived"` instead.** This convenience endpoint will be removed in a future API version. Permanently disable a payment link. This action cannot be undone.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksArchive: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksArchiveData, ThrowOnError>) => RequestResult<PaymentLinksArchiveResponses, PaymentLinksArchiveErrors, ThrowOnError, "fields">;
/**
 * List prices
 *
 * List all prices for the authenticated merchant. Supports filtering and cursor-based pagination.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /prices` — Create a price
 * - `GET /prices/{id}` — Retrieve a price
 * - `PATCH /prices/{id}` — Update a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const pricesList: <ThrowOnError extends boolean = false>(options?: Options<PricesListData, ThrowOnError>) => RequestResult<PricesListResponses, PricesListErrors, ThrowOnError, "fields">;
/**
 * Create a price
 *
 * Creates a new price for a product. Supports fixed, pay-what-you-want, and free pricing models.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `GET /prices/{id}` — Retrieve a price
 * - `PATCH /prices/{id}` — Update a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesCreate: <ThrowOnError extends boolean = false>(options: Options<PricesCreateData, ThrowOnError>) => RequestResult<PricesCreateResponses, PricesCreateErrors, ThrowOnError, "fields">;
/**
 * Archive a price
 *
 * Archives a price by setting active to false. The price remains in the system but cannot be used for new purchases.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `POST /prices` — Create a price
 * - `GET /prices/{id}` — Retrieve a price
 * - `PATCH /prices/{id}` — Update a price
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesArchive: <ThrowOnError extends boolean = false>(options: Options<PricesArchiveData, ThrowOnError>) => RequestResult<PricesArchiveResponses, PricesArchiveErrors, ThrowOnError, "fields">;
/**
 * Retrieve a price
 *
 * Retrieves a price by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `POST /prices` — Create a price
 * - `PATCH /prices/{id}` — Update a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const pricesGet: <ThrowOnError extends boolean = false>(options: Options<PricesGetData, ThrowOnError>) => RequestResult<PricesGetResponses, PricesGetErrors, ThrowOnError, "fields">;
/**
 * Update a price
 *
 * Updates a price. Only certain fields can be updated (active, nickname, lookup_key, metadata). Core pricing fields are immutable.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `POST /prices` — Create a price
 * - `GET /prices/{id}` — Retrieve a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesUpdate: <ThrowOnError extends boolean = false>(options: Options<PricesUpdateData, ThrowOnError>) => RequestResult<PricesUpdateResponses, PricesUpdateErrors, ThrowOnError, "fields">;
/**
 * List webhook endpoints
 *
 * List all webhook endpoints for the authenticated merchant. Supports filtering by status and pagination.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const webhookEndpointsList: <ThrowOnError extends boolean = false>(options?: Options<WebhookEndpointsListData, ThrowOnError>) => RequestResult<WebhookEndpointsListResponses, unknown, ThrowOnError, "fields">;
/**
 * Create webhook endpoint
 *
 * Create a webhook endpoint to receive event notifications at the given URL. Returns the endpoint with its signing secret — store the secret securely, it is only shown once.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsCreate: <ThrowOnError extends boolean = false>(options?: Options<WebhookEndpointsCreateData, ThrowOnError>) => RequestResult<WebhookEndpointsCreateResponses, unknown, ThrowOnError, "fields">;
/**
 * Delete webhook endpoint
 *
 * Permanently delete a webhook endpoint and all its event subscriptions.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsDelete: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsDeleteData, ThrowOnError>) => RequestResult<WebhookEndpointsDeleteResponses, unknown, ThrowOnError, "fields">;
/**
 * Get webhook endpoint
 *
 * Retrieve a single webhook endpoint by ID, including delivery statistics.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 */
declare const webhookEndpointsGet: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsGetData, ThrowOnError>) => RequestResult<WebhookEndpointsGetResponses, unknown, ThrowOnError, "fields">;
/**
 * Update webhook endpoint
 *
 * Update a webhook endpoint's URL, subscribed events, description, or enabled status.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsUpdate: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsUpdateData, ThrowOnError>) => RequestResult<WebhookEndpointsUpdateResponses, unknown, ThrowOnError, "fields">;
/**
 * Rotate signing secret
 *
 * Generate a new signing secret for a webhook endpoint. The old secret is immediately invalidated. Store the new secret securely — it is only returned in this response.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsRotateSecret: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsRotateSecretData, ThrowOnError>) => RequestResult<WebhookEndpointsRotateSecretResponses, unknown, ThrowOnError, "fields">;
/**
 * List webhook deliveries
 *
 * List individual webhook delivery attempts across all endpoints for the authenticated merchant. Use filters to scope to a specific endpoint, a specific event, or a specific delivery status. Results are returned in reverse chronological order.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-deliveries/{id}` — Retrieve a webhook delivery
 * - `POST /webhook-deliveries/{id}/retry` — Retry a webhook delivery
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const webhookDeliveriesList: <ThrowOnError extends boolean = false>(options?: Options<WebhookDeliveriesListData, ThrowOnError>) => RequestResult<WebhookDeliveriesListResponses, WebhookDeliveriesListErrors, ThrowOnError, "fields">;
/**
 * Retrieve a webhook delivery
 *
 * Retrieve the details of a single webhook delivery including its last attempt outcome.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-deliveries` — List webhook deliveries
 * - `POST /webhook-deliveries/{id}/retry` — Retry a webhook delivery
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const webhookDeliveriesGet: <ThrowOnError extends boolean = false>(options: Options<WebhookDeliveriesGetData, ThrowOnError>) => RequestResult<WebhookDeliveriesGetResponses, WebhookDeliveriesGetErrors, ThrowOnError, "fields">;
/**
 * Retry a webhook delivery
 *
 * Queue an immediate retry of this delivery. The delivery is marked `pending` and `next_retry_at` is set to now; the dispatcher picks it up on its next tick. Calling retry on an already-pending delivery just advances its retry time. Dead-lettered deliveries can be retried once; succeeded deliveries cannot.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-deliveries` — List webhook deliveries
 * - `GET /webhook-deliveries/{id}` — Retrieve a webhook delivery
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookDeliveriesRetry: <ThrowOnError extends boolean = false>(options: Options<WebhookDeliveriesRetryData, ThrowOnError>) => RequestResult<WebhookDeliveriesRetryResponses, WebhookDeliveriesRetryErrors, ThrowOnError, "fields">;
/**
 * Create a customer-portal session
 *
 * Mint a short-lived bearer token that authenticates a specific customer against /v2/customer-portal*. Returns an opaque `rkcps_...` token that expires in 60 minutes by default. Call this server-side from the merchant's backend, then hand the token to the customer's browser or embedded client. Treat the token like a password — never log it and never expose it to untrusted code.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalSessionsCreate: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalSessionsCreateData, ThrowOnError>) => RequestResult<CustomerPortalSessionsCreateResponses, CustomerPortalSessionsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve the authenticated customer
 *
 * Returns the customer represented by the bearer token. Useful as a warm-up / identity check when an embedded portal page loads.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerPortalCustomerGet: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalCustomerGetData, ThrowOnError>) => RequestResult<CustomerPortalCustomerGetResponses, CustomerPortalCustomerGetErrors, ThrowOnError, "fields">;
/**
 * List the authenticated customer's subscriptions
 *
 * Returns subscriptions where the customer is the subscriber. Results are reverse-chronological by creation time and paginate via `starting_after` / `ending_before` cursors.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerPortalSubscriptionsList: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalSubscriptionsListData, ThrowOnError>) => RequestResult<CustomerPortalSubscriptionsListResponses, CustomerPortalSubscriptionsListErrors, ThrowOnError, "fields">;
/**
 * Retrieve a subscription
 *
 * Returns a subscription owned by the authenticated customer. 404s on cross-customer access even if the subscription exists.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerPortalSubscriptionsGet: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalSubscriptionsGetData, ThrowOnError>) => RequestResult<CustomerPortalSubscriptionsGetResponses, CustomerPortalSubscriptionsGetErrors, ThrowOnError, "fields">;
/**
 * Cancel a subscription
 *
 * Cancel a subscription owned by the authenticated customer. By default the subscription is scheduled to cancel at the end of the current billing period — set `cancel_at_period_end=false` to cancel immediately. Idempotent — cancelling an already-canceled subscription is a no-op that returns the current state.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalSubscriptionsCancel: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalSubscriptionsCancelData, ThrowOnError>) => RequestResult<CustomerPortalSubscriptionsCancelResponses, CustomerPortalSubscriptionsCancelErrors, ThrowOnError, "fields">;
/**
 * List the authenticated customer's invoices
 *
 * Returns invoices owned by the authenticated customer, reverse-chronological by `invoice_date`. Use the same `starting_after`/`ending_before` cursor pattern as subscriptions.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerPortalInvoicesList: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalInvoicesListData, ThrowOnError>) => RequestResult<CustomerPortalInvoicesListResponses, CustomerPortalInvoicesListErrors, ThrowOnError, "fields">;
/**
 * Retrieve an invoice
 *
 * Returns an invoice owned by the authenticated customer.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerPortalInvoicesGet: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalInvoicesGetData, ThrowOnError>) => RequestResult<CustomerPortalInvoicesGetResponses, CustomerPortalInvoicesGetErrors, ThrowOnError, "fields">;
/**
 * List a customer's meter usage
 *
 * Returns per-meter aggregates for a single customer. Requires a `customer_id` query parameter. For each meter the merchant has defined, the response includes the aggregate quantity (applying the meter's native aggregation function), the event count, and the most recent event timestamp.
 *
 * Use this to render a customer's current consumption snapshot in your own UI — for example, a usage dashboard showing "4,820 / 10,000 requests this period".
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customer-meters/{customer_id}/{meter_id}` — Retrieve a customer-meter aggregate
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerMetersList: <ThrowOnError extends boolean = false>(options: Options<CustomerMetersListData, ThrowOnError>) => RequestResult<CustomerMetersListResponses, CustomerMetersListErrors, ThrowOnError, "fields">;
/**
 * Retrieve a customer-meter aggregate
 *
 * Returns a single customer-meter aggregate for the specified customer + meter pair. Returns 404 only if the meter itself does not exist on the merchant — if the meter exists but the customer has zero events, the response returns an aggregate with `total_quantity: 0`, `event_count: 0`, `last_event_at: null`.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customer-meters` — List a customer's meter usage
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerMetersGet: <ThrowOnError extends boolean = false>(options: Options<CustomerMetersGetData, ThrowOnError>) => RequestResult<CustomerMetersGetResponses, CustomerMetersGetErrors, ThrowOnError, "fields">;
/**
 * List payment intents
 *
 * Returns a list of payment intents with optional filtering.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const paymentIntentsList: <ThrowOnError extends boolean = false>(options?: Options<PaymentIntentsListData, ThrowOnError>) => RequestResult<PaymentIntentsListResponses, PaymentIntentsListErrors, ThrowOnError, "fields">;
/**
 * Create a payment intent
 *
 * Creates a payment intent to orchestrate payment collection with support for 3DS/SCA authentication.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsCreate: <ThrowOnError extends boolean = false>(options?: Options<PaymentIntentsCreateData, ThrowOnError>) => RequestResult<PaymentIntentsCreateResponses, PaymentIntentsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve a payment intent
 *
 * Retrieves a payment intent by its ID (pi_xxx).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const paymentIntentsGet: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsGetData, ThrowOnError>) => RequestResult<PaymentIntentsGetResponses, PaymentIntentsGetErrors, ThrowOnError, "fields">;
/**
 * Confirm a payment intent
 *
 * Confirms the payment intent. May return requires_action if 3DS authentication is needed.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsConfirm: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsConfirmData, ThrowOnError>) => RequestResult<PaymentIntentsConfirmResponses, PaymentIntentsConfirmErrors, ThrowOnError, "fields">;
/**
 * Capture a payment intent
 *
 * Captures a payment intent that was created with capture_method=manual.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsCapture: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsCaptureData, ThrowOnError>) => RequestResult<PaymentIntentsCaptureResponses, PaymentIntentsCaptureErrors, ThrowOnError, "fields">;
/**
 * Cancel a payment intent
 *
 * Cancels a payment intent. Cannot cancel if already succeeded or canceled.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsCancel: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsCancelData, ThrowOnError>) => RequestResult<PaymentIntentsCancelResponses, PaymentIntentsCancelErrors, ThrowOnError, "fields">;
/**
 * List events
 *
 * Returns a list of events with optional filters. Events are returned in reverse chronological order.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /events/{id}` — Retrieve an event
 * - `POST /events/{id}/resend` — Resend webhook for an event
 * - `POST /events/test` — Create a test event
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const eventsList: <ThrowOnError extends boolean = false>(options?: Options<EventsListData, ThrowOnError>) => RequestResult<EventsListResponses, EventsListErrors, ThrowOnError, "fields">;
/**
 * Retrieve an event
 *
 * Retrieves the details of an event by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /events` — List events
 * - `POST /events/{id}/resend` — Resend webhook for an event
 * - `POST /events/test` — Create a test event
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const eventsGet: <ThrowOnError extends boolean = false>(options: Options<EventsGetData, ThrowOnError>) => RequestResult<EventsGetResponses, EventsGetErrors, ThrowOnError, "fields">;
/**
 * Resend webhook for an event
 *
 * Queues the event to be resent to all configured webhook endpoints.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /events` — List events
 * - `GET /events/{id}` — Retrieve an event
 * - `POST /events/test` — Create a test event
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const eventsResend: <ThrowOnError extends boolean = false>(options: Options<EventsResendData, ThrowOnError>) => RequestResult<EventsResendResponses, EventsResendErrors, ThrowOnError, "fields">;
/**
 * List entitlements
 *
 * Retrieve all entitlements for a customer. Pass `customer_id` as a query parameter. Includes computed access status based on subscription state.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/entitlements` — List customer entitlements
 * - `POST /customers/{customerId}/entitlements` — Grant entitlement to customer
 * - `DELETE /customers/{customerId}/entitlements` — Revoke entitlement by benefit key
 * - `GET /customers/{customerId}/entitlements/check` — Check customer entitlement
 * - `DELETE /customers/{customerId}/entitlements/{entitlementId}` — Revoke entitlement by ID
 * - `GET /entitlements/check` — Check entitlement access
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const entitlementsList: <ThrowOnError extends boolean = false>(options: Options<EntitlementsListData, ThrowOnError>) => RequestResult<EntitlementsListResponses, EntitlementsListErrors, ThrowOnError, "fields">;
/**
 * Check entitlement access
 *
 * Check if a customer has access to a specific benefit by key. This is the primary endpoint for feature gating and licensing checks.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/entitlements` — List customer entitlements
 * - `POST /customers/{customerId}/entitlements` — Grant entitlement to customer
 * - `DELETE /customers/{customerId}/entitlements` — Revoke entitlement by benefit key
 * - `GET /customers/{customerId}/entitlements/check` — Check customer entitlement
 * - `DELETE /customers/{customerId}/entitlements/{entitlementId}` — Revoke entitlement by ID
 * - `GET /entitlements` — List entitlements
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const entitlementsCheck: <ThrowOnError extends boolean = false>(options: Options<EntitlementsCheckData, ThrowOnError>) => RequestResult<EntitlementsCheckResponses, EntitlementsCheckErrors, ThrowOnError, "fields">;
/**
 * List transactions
 *
 * List all transactions for the authenticated merchant. Transactions represent the unified financial truth — every sale, refund, void, capture, dispute, and adjustment.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /transactions/{id}` — Get transaction by ID
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const transactionsList: <ThrowOnError extends boolean = false>(options?: Options<TransactionsListData, ThrowOnError>) => RequestResult<TransactionsListResponses, TransactionsListErrors, ThrowOnError, "fields">;
/**
 * Get transaction by ID
 *
 * Retrieve a single transaction by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /transactions` — List transactions
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const transactionsGet: <ThrowOnError extends boolean = false>(options: Options<TransactionsGetData, ThrowOnError>) => RequestResult<TransactionsGetResponses, TransactionsGetErrors, ThrowOnError, "fields">;

export { type AnalyticsResource, type AnalyticsRevenueMrrSummaryData, type AnalyticsRevenueMrrSummaryResponse, type AnalyticsRevenueMrrSummaryResponses, type AnalyticsRevenueTimeSeriesData, type AnalyticsRevenueTimeSeriesResponse, type AnalyticsRevenueTimeSeriesResponses, type AttachPaymentMethodRequest, type AuthenticationError, type AvsCodeInterpretation, type BankAccountDetails, type BatchIngestRequest, type BatchIngestResult, type Benefit, type BillingAnchorRulesResponse, type BillingDetails, type BillingIntervalsResponse, type BillingPreviewErrorResponse, type BillingPreviewResponse, type Business, type CancelOrderRequest, type CancelPaymentIntentRequest, type CancelPaymentRequest, type CancelSetupIntentRequest, type CancelSubscriptionInput, type CancelSubscriptionRequest, type CancelSubscriptionScheduleRequest, type CapturePaymentIntentRequest, type CapturePaymentRequest, type CardDetails, type ChargeCaptureResponse, type ChargeCreateResponse, type ChargeDuplicateErrorResponse, type ChargeErrorResponse, type ChargeListResponse, type ChargeRefundResponse, type ChargeRetrieveResponse, type CheckoutSession, type CheckoutSessionCreateResponse, type CheckoutSessionErrorResponse, type CheckoutSessionExpireResponse, type CheckoutSessionRetrieveResponse, type CheckoutSessionsCreateData, type CheckoutSessionsCreateError, type CheckoutSessionsCreateErrors, type CheckoutSessionsCreateResponse, type CheckoutSessionsCreateResponses, type CheckoutSessionsExpireData, type CheckoutSessionsExpireError, type CheckoutSessionsExpireErrors, type CheckoutSessionsExpireResponse, type CheckoutSessionsExpireResponses, type CheckoutSessionsGetData, type CheckoutSessionsGetError, type CheckoutSessionsGetErrors, type CheckoutSessionsGetResponse, type CheckoutSessionsGetResponses, type CheckoutSessionsResource, type ClientOptions$1 as ClientOptions, type ConfirmPaymentIntentRequest, type ConfirmSetupIntentRequest, type CreateCheckoutSessionInput, type CreateCreditNoteInput, type CreateCustomerPortalSessionRequest, type CreateDiscountInput, type CreateExportRequest, type CreateImportRequest, type CreateMeterPriceRequest, type CreateMeterRequest, type CreateMeterResponse, type CreateOrderRequest, type CreatePaymentIntentRequest, type CreatePriceRequest, type CreateProductRequest, type CreateRefundInput, type CreateSetupIntentRequest, type CreateSubscriptionItemInput, type CreateSubscriptionScheduleRequest, type CreateTaxRateRequest, type CreateTerminalPaymentRequest, type CreateTestEventRequest, type CreateVoidInput, type CreditEligibilityResponse, type CreditNote, type CreditNoteCreateResponse, type CreditNoteEligibilityResponse, type CreditNoteLine, type CreditNoteLineList, type CreditNoteListResponse, type CreditNotePreview, type CreditNotePreviewResponse, type CreditNoteResponse, type CreditNoteRetrieveResponse, type CreditNoteVoidResponse, type CreditNotesCreateData, type CreditNotesCreateErrors, type CreditNotesCreateResponse, type CreditNotesCreateResponses, type CreditNotesGetData, type CreditNotesGetErrors, type CreditNotesGetResponse, type CreditNotesGetResponses, type CreditNotesListData, type CreditNotesListErrors, type CreditNotesListLinesData, type CreditNotesListLinesErrors, type CreditNotesListLinesResponse, type CreditNotesListLinesResponses, type CreditNotesListResponse, type CreditNotesListResponses, type CreditNotesPreviewData, type CreditNotesPreviewErrors, type CreditNotesPreviewResponse, type CreditNotesPreviewResponses, type CreditNotesResource, type CreditNotesVoidData, type CreditNotesVoidErrors, type CreditNotesVoidResponse, type CreditNotesVoidResponses, type CustomerCreateResponse, type CustomerInvoice, type CustomerListResponse, type CustomerMeter, type CustomerMeterErrorResponse, type CustomerMeterList, type CustomerMeterResponse, type CustomerMetersGetData, type CustomerMetersGetError, type CustomerMetersGetErrors, type CustomerMetersGetResponse, type CustomerMetersGetResponses, type CustomerMetersListData, type CustomerMetersListError, type CustomerMetersListErrors, type CustomerMetersListResponse, type CustomerMetersListResponses, type CustomerOrder, type CustomerPayment, type CustomerPaymentMethodsListResponse, type CustomerPortalCustomerGetData, type CustomerPortalCustomerGetError, type CustomerPortalCustomerGetErrors, type CustomerPortalCustomerGetResponse, type CustomerPortalCustomerGetResponses, type CustomerPortalErrorResponse, type CustomerPortalInvoicesGetData, type CustomerPortalInvoicesGetError, type CustomerPortalInvoicesGetErrors, type CustomerPortalInvoicesGetResponse, type CustomerPortalInvoicesGetResponses, type CustomerPortalInvoicesListData, type CustomerPortalInvoicesListError, type CustomerPortalInvoicesListErrors, type CustomerPortalInvoicesListResponse, type CustomerPortalInvoicesListResponses, type CustomerPortalSessionCreateResponse, type CustomerPortalSessionsCreateData, type CustomerPortalSessionsCreateError, type CustomerPortalSessionsCreateErrors, type CustomerPortalSessionsCreateResponse, type CustomerPortalSessionsCreateResponses, type CustomerPortalSubscriptionsCancelData, type CustomerPortalSubscriptionsCancelError, type CustomerPortalSubscriptionsCancelErrors, type CustomerPortalSubscriptionsCancelResponse, type CustomerPortalSubscriptionsCancelResponses, type CustomerPortalSubscriptionsGetData, type CustomerPortalSubscriptionsGetError, type CustomerPortalSubscriptionsGetErrors, type CustomerPortalSubscriptionsGetResponse, type CustomerPortalSubscriptionsGetResponses, type CustomerPortalSubscriptionsListData, type CustomerPortalSubscriptionsListError, type CustomerPortalSubscriptionsListErrors, type CustomerPortalSubscriptionsListResponse, type CustomerPortalSubscriptionsListResponses, type CustomerResource, type CustomerRetrieveResponse, type CustomerSubscription, type CustomerUpdateResponse, type CustomersCreateData, type CustomersCreateErrors, type CustomersCreateResponse, type CustomersCreateResponses, type CustomersGetData, type CustomersGetErrors, type CustomersGetResponse, type CustomersGetResponses, type CustomersListData, type CustomersListErrors, type CustomersListResponse, type CustomersListResponses, type CustomersPaymentMethodsListData, type CustomersPaymentMethodsListErrors, type CustomersPaymentMethodsListResponse, type CustomersPaymentMethodsListResponses, type CustomersPaymentRailsGetData, type CustomersPaymentRailsGetErrors, type CustomersPaymentRailsGetResponse, type CustomersPaymentRailsGetResponses, type CustomersPreferredRailsGetData, type CustomersPreferredRailsGetErrors, type CustomersPreferredRailsGetResponse, type CustomersPreferredRailsGetResponses, type CustomersResource, type CustomersUpdateData, type CustomersUpdateErrors, type CustomersUpdateResponse, type CustomersUpdateResponses, type CvvCodeInterpretation, type DeclineAnalyticsResponse, type Discount, type DiscountCreateResponse, type DiscountDeleteResponse, type DiscountListResponse, type DiscountRetrieveResponse, type DiscountUpdateResponse, type Dispute, type DryRunResult, type Entitlement, type EntitlementCheck, type EntitlementCheckResponse, type EntitlementListResponse, type EntitlementsCheckData, type EntitlementsCheckErrors, type EntitlementsCheckResponse, type EntitlementsCheckResponses, type EntitlementsListData, type EntitlementsListErrors, type EntitlementsListResponse, type EntitlementsListResponses, type EntitlementsResource, type ErrorResponse, type Event, type EventErrorResponse, type EventListResponse, type EventRequest, type EventsGetData, type EventsGetError, type EventsGetErrors, type EventsGetResponse, type EventsGetResponses, type EventsListData, type EventsListError, type EventsListErrors, type EventsListResponse, type EventsListResponses, type EventsResendData, type EventsResendError, type EventsResendErrors, type EventsResendResponse, type EventsResendResponses, type EventsResource, type Export, type ExportCreateResponse, type ExportRetrieveResponse, type ExternalUpsertResponse, type ForbiddenError, type FulfillOrderRequest, type GeneratedResourceRuntime, type GeneratedResources, type Import, type ImportCreateResponse, type ImportRetrieveResponse, type Invoice, type InvoiceCommentDetail, type InvoiceCommentDetailResponse, type InvoiceCommentListDetailResponse, type InvoiceListResponse, type InvoiceResponse, type InvoicesCreateData, type InvoicesCreateResponse, type InvoicesCreateResponses, type InvoicesFinalizeData, type InvoicesFinalizeErrors, type InvoicesFinalizeResponse, type InvoicesFinalizeResponses, type InvoicesGetData, type InvoicesGetResponse, type InvoicesGetResponses, type InvoicesListData, type InvoicesListResponse, type InvoicesListResponses, type InvoicesMarginEstimateData, type InvoicesMarginEstimateErrors, type InvoicesMarginEstimateResponse, type InvoicesMarginEstimateResponses, type InvoicesResource, type InvoicesSendData, type InvoicesSendErrors, type InvoicesSendResponse, type InvoicesSendResponses, type InvoicesUpdateData, type InvoicesUpdateResponse, type InvoicesUpdateResponses, type InvoicesVoidData, type InvoicesVoidErrors, type InvoicesVoidResponse, type InvoicesVoidResponses, type MarkDeliveredResponse, type MeterError, type MeterGetResponse, type MeterListResponse, type MeterPriceError, type MeterPriceListResponse, type MeterPriceResponse, type NotFoundError, OAuthConfig, type OpenDispute, type Options, type Order, type OrderErrorResponse, type OrderLineItem, type OrderListResponse, type Pagination, type PauseSubscriptionInput, type PayOrderRequest, type Payment, type PaymentAttempt, type PaymentAttemptErrorResponse, type PaymentAttemptListResponse, type PaymentAttemptSingleResponse, type PaymentErrorResponse, type PaymentIntent, type PaymentIntentErrorResponse, type PaymentIntentListResponse, type PaymentIntentsCancelData, type PaymentIntentsCancelError, type PaymentIntentsCancelErrors, type PaymentIntentsCancelResponse, type PaymentIntentsCancelResponses, type PaymentIntentsCaptureData, type PaymentIntentsCaptureError, type PaymentIntentsCaptureErrors, type PaymentIntentsCaptureResponse, type PaymentIntentsCaptureResponses, type PaymentIntentsConfirmData, type PaymentIntentsConfirmError, type PaymentIntentsConfirmErrors, type PaymentIntentsConfirmResponse, type PaymentIntentsConfirmResponses, type PaymentIntentsCreateData, type PaymentIntentsCreateError, type PaymentIntentsCreateErrors, type PaymentIntentsCreateResponse, type PaymentIntentsCreateResponses, type PaymentIntentsGetData, type PaymentIntentsGetError, type PaymentIntentsGetErrors, type PaymentIntentsGetResponse, type PaymentIntentsGetResponses, type PaymentIntentsListData, type PaymentIntentsListError, type PaymentIntentsListErrors, type PaymentIntentsListResponse, type PaymentIntentsListResponses, type PaymentIntentsResource, type PaymentLinksActivateData, type PaymentLinksActivateError, type PaymentLinksActivateErrors, type PaymentLinksActivateResponse, type PaymentLinksActivateResponses, type PaymentLinksArchiveData, type PaymentLinksArchiveError, type PaymentLinksArchiveErrors, type PaymentLinksArchiveResponse, type PaymentLinksArchiveResponses, type PaymentLinksCreateData, type PaymentLinksCreateError, type PaymentLinksCreateErrors, type PaymentLinksCreateResponse, type PaymentLinksCreateResponses, type PaymentLinksDeactivateData, type PaymentLinksDeactivateError, type PaymentLinksDeactivateErrors, type PaymentLinksDeactivateResponse, type PaymentLinksDeactivateResponses, type PaymentLinksExpireData, type PaymentLinksExpireError, type PaymentLinksExpireErrors, type PaymentLinksExpireResponse, type PaymentLinksExpireResponses, type PaymentLinksGetData, type PaymentLinksGetError, type PaymentLinksGetErrors, type PaymentLinksGetResponse, type PaymentLinksGetResponses, type PaymentLinksListData, type PaymentLinksListError, type PaymentLinksListErrors, type PaymentLinksListResponse, type PaymentLinksListResponses, type PaymentLinksResource, type PaymentLinksUpdateData, type PaymentLinksUpdateError, type PaymentLinksUpdateErrors, type PaymentLinksUpdateResponse, type PaymentLinksUpdateResponses, type PaymentListResponse, type PaymentMethod, type PaymentMethodList, type PaymentSecurityResponse, type PaymentSecurityResult, type Payout, type PayoutPayment, type PhaseItem, type PortalCustomer, type PortalCustomerResponse, type PortalInvoice, type PortalInvoiceList, type PortalInvoiceResponse, type PortalSubscription, type PortalSubscriptionCancelResponse, type PortalSubscriptionList, type PortalSubscriptionResponse, type PreviewCreditNoteInput, type Price, type PriceErrorResponse, type PriceListResponse, type PriceTier, type PricesArchiveData, type PricesArchiveError, type PricesArchiveErrors, type PricesArchiveResponse, type PricesArchiveResponses, type PricesCreateData, type PricesCreateError, type PricesCreateErrors, type PricesCreateResponse, type PricesCreateResponses, type PricesGetData, type PricesGetError, type PricesGetErrors, type PricesGetResponse, type PricesGetResponses, type PricesListData, type PricesListError, type PricesListErrors, type PricesListResponse, type PricesListResponses, type PricesResource, type PricesUpdateData, type PricesUpdateError, type PricesUpdateErrors, type PricesUpdateResponse, type PricesUpdateResponses, type Product, type ProductCreateResponse, type ProductErrorResponse, type ProductListResponse, type ProductRetrieveResponse, type ProductUpdateResponse, type ProductsCreateData, type ProductsCreateError, type ProductsCreateErrors, type ProductsCreateResponse, type ProductsCreateResponses, type ProductsGetData, type ProductsGetError, type ProductsGetErrors, type ProductsGetResponse, type ProductsGetResponses, type ProductsListData, type ProductsListError, type ProductsListErrors, type ProductsListResponse, type ProductsListResponses, type ProductsResource, type ProductsUpdateData, type ProductsUpdateError, type ProductsUpdateErrors, type ProductsUpdateResponse, type ProductsUpdateResponses, type Refund, type RefundCreateResponse, type RefundListResponse, type RefundRetrieveResponse, type RefundTerminalPaymentRequest, type RefundsCreateData, type RefundsCreateErrors, type RefundsCreateResponse, type RefundsCreateResponses, type RefundsGetData, type RefundsGetErrors, type RefundsGetResponse, type RefundsGetResponses, type RefundsListData, type RefundsListErrors, type RefundsListResponse, type RefundsListResponses, type RefundsResource, type ReleaseSubscriptionScheduleRequest, type ResendWebhookResponse, type RetryEligibilityResponse, RevKeenClient as RevKeen, RevKeenAPIError, RevKeenClient, type RevKeenClientOptions, RevKeenError, RevKeenTimeoutError, type SchedulePhase, type SetupIntent, type SetupIntentError, type SetupIntentList, type SetupIntentNextAction, type StaleUpdateResponse, type SubscriptionCancelResponse, type SubscriptionCancelSubscriptionResponse, type SubscriptionChangePlanResponse, type SubscriptionChangeQuantityResponse, type SubscriptionCreateResponse, type SubscriptionItem, type SubscriptionItemCreateResponse, type SubscriptionItemDeleteResponse, type SubscriptionItemListResponse, type SubscriptionItemUpdateResponse, type SubscriptionListResponse, type SubscriptionPauseResponse, type SubscriptionPreviewRenewalResponse, type SubscriptionReactivateResponse, type SubscriptionResumeResponse, type SubscriptionRetrieveResponse, type SubscriptionSchedule, type SubscriptionScheduleErrorResponse, type SubscriptionScheduleListResponse, type SubscriptionTerms, type SubscriptionUpdateResponse, type SubscriptionsCancelData, type SubscriptionsCancelErrors, type SubscriptionsCancelResponse, type SubscriptionsCancelResponses, type SubscriptionsCreateData, type SubscriptionsCreateErrors, type SubscriptionsCreateResponse, type SubscriptionsCreateResponses, type SubscriptionsGetData, type SubscriptionsGetErrors, type SubscriptionsGetResponse, type SubscriptionsGetResponses, type SubscriptionsListData, type SubscriptionsListErrors, type SubscriptionsListResponse, type SubscriptionsListResponses, type SubscriptionsResource, type SubscriptionsUpdateData, type SubscriptionsUpdateErrors, type SubscriptionsUpdateResponse, type SubscriptionsUpdateResponses, type SuccessResponse, type TaxRate, type TaxRateErrorResponse, type TaxRateListResponse, type TerminalDevice, type TerminalDeviceErrorResponse, type TerminalDeviceListResponse, type TerminalDeviceResponse, type TerminalPayment, type TerminalPaymentErrorResponse, type TerminalPaymentListResponse, type TerminalPaymentResponse, type TestEventResponse, type Transaction, type TransactionListResponse, type TransactionRetrieveResponse, type TransactionReversalEligibilityResponse, type TransactionsGetData, type TransactionsGetError, type TransactionsGetErrors, type TransactionsGetResponse, type TransactionsGetResponses, type TransactionsListData, type TransactionsListError, type TransactionsListErrors, type TransactionsListResponse, type TransactionsListResponses, type TransactionsResource, type TransformQuantity, type UpdateDiscountInput, type UpdateMeterPriceRequest, type UpdateMeterRequest, type UpdateMeterResponse, type UpdateOrderRequest, type UpdatePaymentIntentRequest, type UpdatePaymentMethodRequest, type UpdatePriceRequest, type UpdateProductRequest, type UpdateSetupIntentRequest, type UpdateSubscriptionItemInput, type UpdateSubscriptionScheduleRequest, type UpdateTaxRateRequest, type UsageAggregateResponse, type UsageBalanceMeter, type UsageBalanceResponse, type UsageEvent, type UsageEventError, type UsageEventListResponse, type ValidationError, type Void, type VoidCreateResponse, type VoidListResponse, type VoidRetrieveResponse, type VoidTerminalPaymentRequest, type WebhookDeliveriesGetData, type WebhookDeliveriesGetError, type WebhookDeliveriesGetErrors, type WebhookDeliveriesGetResponse, type WebhookDeliveriesGetResponses, type WebhookDeliveriesListData, type WebhookDeliveriesListError, type WebhookDeliveriesListErrors, type WebhookDeliveriesListResponse, type WebhookDeliveriesListResponses, type WebhookDeliveriesRetryData, type WebhookDeliveriesRetryError, type WebhookDeliveriesRetryErrors, type WebhookDeliveriesRetryResponse, type WebhookDeliveriesRetryResponses, type WebhookDelivery, type WebhookDeliveryErrorResponse, type WebhookDeliveryListResponse, type WebhookDeliveryResponse, type WebhookDeliveryRetryResponse, type WebhookEndpoint, type WebhookEndpointsCreateData, type WebhookEndpointsCreateResponse, type WebhookEndpointsCreateResponses, type WebhookEndpointsDeleteData, type WebhookEndpointsDeleteResponse, type WebhookEndpointsDeleteResponses, type WebhookEndpointsGetData, type WebhookEndpointsGetResponse, type WebhookEndpointsGetResponses, type WebhookEndpointsListData, type WebhookEndpointsListResponse, type WebhookEndpointsListResponses, type WebhookEndpointsResource, type WebhookEndpointsRotateSecretData, type WebhookEndpointsRotateSecretResponse, type WebhookEndpointsRotateSecretResponses, type WebhookEndpointsUpdateData, type WebhookEndpointsUpdateResponse, type WebhookEndpointsUpdateResponses, type WebhookEvent, type WebhookResource, analyticsRevenueMrrSummary, analyticsRevenueTimeSeries, buildGeneratedResources, checkoutSessionsCreate, checkoutSessionsExpire, checkoutSessionsGet, creditNotesCreate, creditNotesGet, creditNotesList, creditNotesListLines, creditNotesPreview, creditNotesVoid, customerMetersGet, customerMetersList, customerPortalCustomerGet, customerPortalInvoicesGet, customerPortalInvoicesList, customerPortalSessionsCreate, customerPortalSubscriptionsCancel, customerPortalSubscriptionsGet, customerPortalSubscriptionsList, customersCreate, customersGet, customersList, customersPaymentMethodsList, customersPaymentRailsGet, customersPreferredRailsGet, customersUpdate, RevKeenClient as default, entitlementsCheck, entitlementsList, eventsGet, eventsList, eventsResend, invoicesCreate, invoicesFinalize, invoicesGet, invoicesList, invoicesMarginEstimate, invoicesSend, invoicesUpdate, invoicesVoid, paymentIntentsCancel, paymentIntentsCapture, paymentIntentsConfirm, paymentIntentsCreate, paymentIntentsGet, paymentIntentsList, paymentLinksActivate, paymentLinksArchive, paymentLinksCreate, paymentLinksDeactivate, paymentLinksExpire, paymentLinksGet, paymentLinksList, paymentLinksUpdate, pricesArchive, pricesCreate, pricesGet, pricesList, pricesUpdate, productsCreate, productsGet, productsList, productsUpdate, refundsCreate, refundsGet, refundsList, subscriptionsCancel, subscriptionsCreate, subscriptionsGet, subscriptionsList, subscriptionsUpdate, transactionsGet, transactionsList, webhookDeliveriesGet, webhookDeliveriesList, webhookDeliveriesRetry, webhookEndpointsCreate, webhookEndpointsDelete, webhookEndpointsGet, webhookEndpointsList, webhookEndpointsRotateSecret, webhookEndpointsUpdate };
