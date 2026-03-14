export interface Dispute {
    id: string;
    public_id: string;
    /** The original payment ID this dispute is for (alias for parent_transaction_id) */
    payment_id: string | null;
    /** Parent transaction ID in unified transaction model. Same as payment_id for disputes. */
    parent_transaction_id: string | null;
    gateway: string;
    gateway_dispute_id: string;
    gateway_transaction_id: string | null;
    /** Disputed amount in cents */
    amount_minor: number;
    currency: string;
    /** Card network reason code */
    reason_code: string | null;
    reason: string | null;
    network_reason_code: string | null;
    network_reason_description: string | null;
    customer_name: string | null;
    card_brand: string | null;
    card_last4: string | null;
    evidence_due_by: string | null;
    evidence_submitted: boolean;
    evidence_submitted_at: string | null;
    status: Dispute.Status;
    resolution: Dispute.Resolution | null;
    resolved_at: string | null;
    disputed_at: string;
    created_at: string;
}
export declare namespace Dispute {
    const Status: {
        readonly NeedsResponse: "needs_response";
        readonly UnderReview: "under_review";
        readonly Won: "won";
        readonly Lost: "lost";
        readonly WarningClosed: "warning_closed";
        readonly WarningNeedsResponse: "warning_needs_response";
    };
    type Status = (typeof Status)[keyof typeof Status];
    const Resolution: {
        readonly Won: "won";
        readonly Lost: "lost";
        readonly Withdrawn: "withdrawn";
    };
    type Resolution = (typeof Resolution)[keyof typeof Resolution];
}
//# sourceMappingURL=Dispute.d.ts.map