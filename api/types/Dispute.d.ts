/**
 * A dispute (chargeback) represents a customer's challenge to a charge with their card issuer. Track lifecycle stages and submit evidence to contest.
 */
export interface Dispute {
    /** Unique identifier for the dispute */
    id: string;
    /** Public-facing dispute identifier */
    public_id: string;
    /** The original payment ID this dispute is for (alias for parent_transaction_id) */
    payment_id: string | null;
    /** Parent transaction ID in unified transaction model. Same as payment_id for disputes. */
    parent_transaction_id: string | null;
    /** Payment gateway that processed the original transaction */
    gateway: string;
    /** Dispute identifier assigned by the payment gateway */
    gateway_dispute_id: string;
    /** Original transaction identifier from the payment gateway */
    gateway_transaction_id: string | null;
    /** Disputed amount in cents */
    amount_minor: number;
    /** Three-letter ISO 4217 currency code */
    currency: string;
    /** Card network reason code */
    reason_code: string | null;
    /** Human-readable reason for the dispute */
    reason: string | null;
    /** Card network-specific reason code */
    network_reason_code: string | null;
    /** Card network-specific reason description */
    network_reason_description: string | null;
    /** Name of the customer who filed the dispute */
    customer_name: string | null;
    /** Card brand used for the original payment */
    card_brand: string | null;
    /** Last four digits of the card used for the original payment */
    card_last4: string | null;
    /** Deadline for submitting evidence to contest the dispute */
    evidence_due_by: string | null;
    /** Whether evidence has been submitted for this dispute */
    evidence_submitted: boolean;
    /** Timestamp when evidence was submitted */
    evidence_submitted_at: string | null;
    /** Current status of the dispute lifecycle */
    status: Dispute.Status;
    /** Final resolution outcome of the dispute */
    resolution: Dispute.Resolution | null;
    /** Timestamp when the dispute was resolved */
    resolved_at: string | null;
    /** Timestamp when the dispute was filed */
    disputed_at: string;
    /** Timestamp when the dispute record was created */
    created_at: string;
}
export declare namespace Dispute {
    /** Current status of the dispute lifecycle */
    const Status: {
        readonly NeedsResponse: "needs_response";
        readonly UnderReview: "under_review";
        readonly Won: "won";
        readonly Lost: "lost";
        readonly WarningClosed: "warning_closed";
        readonly WarningNeedsResponse: "warning_needs_response";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** Final resolution outcome of the dispute */
    const Resolution: {
        readonly Won: "won";
        readonly Lost: "lost";
        readonly Withdrawn: "withdrawn";
    };
    type Resolution = (typeof Resolution)[keyof typeof Resolution];
}
//# sourceMappingURL=Dispute.d.ts.map