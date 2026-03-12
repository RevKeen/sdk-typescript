export interface Void {
    id: string;
    public_id: string;
    /** The original payment ID this void is for (alias for parent_transaction_id) */
    payment_id: string;
    /** Parent transaction ID in unified transaction model. */
    parent_transaction_id: string;
    order_id: string | null;
    gateway: string;
    gateway_void_id: string | null;
    /** Void amount in cents (always full amount of original transaction) */
    amount_minor: number;
    currency: string;
    reason: string | null;
    reason_code: Void.ReasonCode | null;
    status: Void.Status;
    failure_reason: string | null;
    failure_code: string | null;
    voided_at: string | null;
    created_at: string;
}
export declare namespace Void {
    const ReasonCode: {
        readonly CustomerRequest: "customer_request";
        readonly Duplicate: "duplicate";
        readonly Fraudulent: "fraudulent";
        readonly Error: "error";
        readonly Other: "other";
    };
    type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];
    const Status: {
        readonly Pending: "pending";
        readonly Processing: "processing";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=Void.d.ts.map