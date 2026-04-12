/**
 * @example
 *     {
 *         id: "id",
 *         amount_minor: 5000,
 *         reason: "Service issue - partial refund for outage"
 *     }
 */
export interface InvoicesCreditNoteIssueRequest {
    id: string;
    /** Credit amount in minor units (cents) */
    amount_minor: number;
    /** Tax portion of the credit in minor units */
    tax_amount_minor?: number;
    /** Reason for issuing the credit note */
    reason: string;
    /** Categorized reason code for the credit note */
    reason_code?: InvoicesCreditNoteIssueRequest.ReasonCode;
    /** How to apply the credit: refund to original payment method, add to customer balance, or mark as external */
    credit_method?: InvoicesCreditNoteIssueRequest.CreditMethod;
    /** If true, cancels the associated subscription (if any) */
    cancel_subscription?: boolean;
    /** Whether this is a prorated credit for unused service time */
    is_prorated?: boolean;
    /** Total days in billing period (for prorated credits) */
    proration_days_total?: number;
    /** Unused days being credited (for prorated credits) */
    proration_days_unused?: number;
    /** Unique key to prevent duplicate credit notes */
    idempotency_key?: string;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace InvoicesCreditNoteIssueRequest {
    /** Categorized reason code for the credit note */
    const ReasonCode: {
        readonly CustomerRequest: "customer_request";
        readonly DuplicateCharge: "duplicate_charge";
        readonly ServiceIssue: "service_issue";
        readonly BillingError: "billing_error";
        readonly PartialRefund: "partial_refund";
        readonly Goodwill: "goodwill";
        readonly SubscriptionCancellation: "subscription_cancellation";
        readonly Proration: "proration";
        readonly Other: "other";
    };
    type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];
    /** How to apply the credit: refund to original payment method, add to customer balance, or mark as external */
    const CreditMethod: {
        readonly RefundToPaymentMethod: "refund_to_payment_method";
        readonly CustomerBalance: "customer_balance";
        readonly External: "external";
    };
    type CreditMethod = (typeof CreditMethod)[keyof typeof CreditMethod];
}
//# sourceMappingURL=InvoicesCreditNoteIssueRequest.d.ts.map