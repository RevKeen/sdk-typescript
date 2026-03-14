/**
 * @example
 *     {
 *         id: "seti_1a2b3c4d5e6f"
 *     }
 */
export interface CancelSetupIntentRequest {
    /** Setup Intent ID (UUID or public ID seti_xxx) */
    id: string;
    /** Reason for cancellation */
    cancellation_reason?: CancelSetupIntentRequest.CancellationReason;
}
export declare namespace CancelSetupIntentRequest {
    /** Reason for cancellation */
    const CancellationReason: {
        readonly Abandoned: "abandoned";
        readonly RequestedByCustomer: "requested_by_customer";
        readonly Duplicate: "duplicate";
    };
    type CancellationReason = (typeof CancellationReason)[keyof typeof CancellationReason];
}
//# sourceMappingURL=CancelSetupIntentRequest.d.ts.map