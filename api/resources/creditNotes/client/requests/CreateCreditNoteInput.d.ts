/**
 * @example
 *     {
 *         invoice_id: "660e8400-e29b-41d4-a716-446655440000",
 *         amount_minor: 5000
 *     }
 */
export interface CreateCreditNoteInput {
    /** The ID of the invoice to issue a credit note for */
    invoice_id: string;
    /** Amount to credit in cents */
    amount_minor: number;
    /** Tax portion of the credit in cents (for UK/EU VAT compliance) */
    tax_amount_minor?: number;
    /** How the credit should be applied */
    credit_method?: CreateCreditNoteInput.CreditMethod;
    /** Reason for the credit note */
    reason?: string;
    /** Standardized reason code */
    reason_code?: CreateCreditNoteInput.ReasonCode;
    /** Whether to cancel the associated subscription after issuing */
    cancel_subscription?: boolean;
    /** Whether this credit note represents a prorated amount */
    is_prorated?: boolean;
    /** Total days in the billing period (for prorated credits) */
    proration_days_total?: number;
    /** Unused days in the billing period (for prorated credits) */
    proration_days_unused?: number;
    /** Idempotency key to prevent duplicate credit notes */
    idempotency_key?: string;
    /** Arbitrary key-value metadata */
    metadata?: Record<string, unknown>;
    /** When true, automatically trigger the process-credit-note task for multi-gateway reversal routing. Response will include gateway_operations array. */
    auto_route?: boolean;
    /** For terminal (card-present) transactions: whether the customer is physically at the terminal. Defaults to false in API context. */
    customer_present?: boolean;
}
export declare namespace CreateCreditNoteInput {
    /** How the credit should be applied */
    const CreditMethod: {
        readonly RefundToPaymentMethod: "refund_to_payment_method";
        readonly CustomerBalance: "customer_balance";
        readonly External: "external";
    };
    type CreditMethod = (typeof CreditMethod)[keyof typeof CreditMethod];
    /** Standardized reason code */
    const ReasonCode: {
        readonly CustomerRequest: "customer_request";
        readonly DuplicateCharge: "duplicate_charge";
        readonly ServiceIssue: "service_issue";
        readonly BillingError: "billing_error";
        readonly SubscriptionCancellation: "subscription_cancellation";
        readonly Proration: "proration";
        readonly Other: "other";
    };
    type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];
}
//# sourceMappingURL=CreateCreditNoteInput.d.ts.map