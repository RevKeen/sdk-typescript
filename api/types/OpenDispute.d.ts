/**
 * An open dispute requiring action, with urgency indicators for evidence submission deadlines.
 */
export interface OpenDispute {
    /** Unique identifier for the dispute */
    id: string;
    /** Public-facing dispute identifier */
    public_id: string;
    /** The original payment ID this dispute is for */
    payment_id: string | null;
    /** Parent transaction ID in unified transaction model */
    parent_transaction_id: string | null;
    /** Payment gateway that processed the original transaction */
    gateway: string;
    /** Disputed amount in cents */
    amount_minor: number;
    /** Three-letter ISO 4217 currency code */
    currency: string;
    /** Human-readable reason for the dispute */
    reason: string | null;
    /** Name of the customer who filed the dispute */
    customer_name: string | null;
    /** Card brand used for the original payment */
    card_brand: string | null;
    /** Last four digits of the card used for the original payment */
    card_last4: string | null;
    /** Deadline for submitting evidence to contest the dispute */
    evidence_due_by: string | null;
    /** Number of days remaining until the evidence deadline */
    days_until_due: number | null;
    /** Whether the evidence submission deadline has passed */
    is_overdue: boolean;
    /** Timestamp when the dispute was filed */
    disputed_at: string;
}
//# sourceMappingURL=OpenDispute.d.ts.map