/**
 * @example
 *     {
 *         payment_id: "660e8400-e29b-41d4-a716-446655440000"
 *     }
 */
export interface CreateRefundInput {
    /** The ID of the payment to refund */
    payment_id: string;
    /** Amount to refund in cents. If not provided, refunds the full remaining amount. */
    amount_minor?: number;
    /** Reason for the refund */
    reason?: CreateRefundInput.Reason;
    /** Additional details about the refund reason */
    reason_details?: string;
}
export declare namespace CreateRefundInput {
    /** Reason for the refund */
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
}
//# sourceMappingURL=CreateRefundInput.d.ts.map