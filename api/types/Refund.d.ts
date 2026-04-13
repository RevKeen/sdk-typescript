/**
 * A refund represents money returned to a customer after a completed payment. Refunds create a child transaction linked to the original payment for audit trail purposes.
 */
export interface Refund {
    id: string;
    public_id: string;
    /** The original payment ID this refund is for (alias for parent_transaction_id) */
    payment_id: string;
    /** Parent transaction ID in unified transaction model. Same as payment_id for refunds. */
    parent_transaction_id: string;
    order_id: string | null;
    gateway: string;
    gateway_refund_id: string | null;
    /** Refund amount in cents */
    amount_minor: number;
    currency: string;
    reason: Refund.Reason | null;
    reason_details: string | null;
    status: Refund.Status;
    failure_reason: string | null;
    failure_code: string | null;
    processed_at: string | null;
    created_at: string;
}
export declare namespace Refund {
    const Reason: {
        readonly CustomerRequest: "customer_request";
        readonly Duplicate: "duplicate";
        readonly Fraudulent: "fraudulent";
        readonly ProductNotReceived: "product_not_received";
        readonly ProductUnacceptable: "product_unacceptable";
        readonly SubscriptionCanceled: "subscription_canceled";
        readonly Other: "other";
    };
    type Reason = (typeof Reason)[keyof typeof Reason];
    const Status: {
        readonly Pending: "pending";
        readonly Processing: "processing";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
        readonly Canceled: "canceled";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=Refund.d.ts.map