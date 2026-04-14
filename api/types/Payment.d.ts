/**
 * A completed or in-progress money movement. Payments represent funds transferred between a customer and your account across all channels — online, terminal, and recurring.
 */
export interface Payment {
    /** Unique identifier for the payment */
    id: string;
    /** Object type */
    object: Payment.Object_;
    /** Associated invoice ID */
    invoice_id?: string | null;
    /** Customer ID */
    customer_id?: string | null;
    /** Payment status. pending: Processing. authorized: Funds reserved. captured/succeeded: Funds collected. failed: Payment failed. voided: Canceled before capture. refunded/partially_refunded: Returned to customer. */
    status: Payment.Status;
    /** Three-letter ISO currency code */
    currency: string;
    /** Payment amount in cents */
    amount: number;
    /** Amount captured in cents (for auth-capture flow) */
    amount_captured?: number | null;
    /** Amount refunded in cents */
    amount_refunded?: number;
    /** Payment gateway (e.g., 'nmi', 'stripe') */
    gateway?: string | null;
    /** Gateway's transaction reference */
    gateway_transaction_id?: string | null;
    /** Gateway response code */
    gateway_response_code?: string | null;
    /** Gateway response message */
    gateway_response_text?: string | null;
    /** Payment method type (card, ach, wallet) */
    payment_method_type?: string | null;
    /** Card brand (visa, mastercard, etc.) */
    card_brand?: string | null;
    /** Last 4 digits of card */
    card_last_four?: string | null;
    /** Payment channel. card_present: terminal/POS payment. card_not_present: online or recurring payment. bank_transfer: ACH/direct debit. manual: manually recorded. */
    payment_channel?: Payment.PaymentChannel | null;
    /** Card entry mode for card-present (terminal) payments. null for online payments. */
    entry_mode?: Payment.EntryMode | null;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    created_at: string;
    updated_at: string;
    authorized_at?: string | null;
    captured_at?: string | null;
    voided_at?: string | null;
    refunded_at?: string | null;
}
export declare namespace Payment {
    /** Object type */
    const Object_: {
        readonly Payment: "payment";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Payment status. pending: Processing. authorized: Funds reserved. captured/succeeded: Funds collected. failed: Payment failed. voided: Canceled before capture. refunded/partially_refunded: Returned to customer. */
    const Status: {
        readonly Pending: "pending";
        readonly Authorized: "authorized";
        readonly Captured: "captured";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
        readonly Voided: "voided";
        readonly Refunded: "refunded";
        readonly PartiallyRefunded: "partially_refunded";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** Payment channel. card_present: terminal/POS payment. card_not_present: online or recurring payment. bank_transfer: ACH/direct debit. manual: manually recorded. */
    const PaymentChannel: {
        readonly CardPresent: "card_present";
        readonly CardNotPresent: "card_not_present";
        readonly BankTransfer: "bank_transfer";
        readonly Manual: "manual";
    };
    type PaymentChannel = (typeof PaymentChannel)[keyof typeof PaymentChannel];
    /** Card entry mode for card-present (terminal) payments. null for online payments. */
    const EntryMode: {
        readonly EmvChip: "emv_chip";
        readonly Contactless: "contactless";
        readonly MagneticStripe: "magnetic_stripe";
        readonly ManualEntry: "manual_entry";
        readonly Fallback: "fallback";
    };
    type EntryMode = (typeof EntryMode)[keyof typeof EntryMode];
}
//# sourceMappingURL=Payment.d.ts.map