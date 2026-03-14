/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CancelPaymentIntentRequest {
    /** Payment intent ID (pi_xxx) */
    id: string;
    /** Reason for cancellation */
    cancellation_reason?: CancelPaymentIntentRequest.CancellationReason;
}
export declare namespace CancelPaymentIntentRequest {
    /** Reason for cancellation */
    const CancellationReason: {
        readonly Duplicate: "duplicate";
        readonly Fraudulent: "fraudulent";
        readonly RequestedByCustomer: "requested_by_customer";
        readonly Abandoned: "abandoned";
        readonly FailedInvoice: "failed_invoice";
    };
    type CancellationReason = (typeof CancellationReason)[keyof typeof CancellationReason];
}
//# sourceMappingURL=CancelPaymentIntentRequest.d.ts.map