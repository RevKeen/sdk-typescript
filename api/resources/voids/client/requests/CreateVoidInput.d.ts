/**
 * @example
 *     {
 *         payment_id: "660e8400-e29b-41d4-a716-446655440000"
 *     }
 */
export interface CreateVoidInput {
    /** The ID of the payment to void. Must be unsettled. */
    payment_id: string;
    /** Reason for the void */
    reason?: string;
    /** Standardized reason code for the void */
    reason_code?: CreateVoidInput.ReasonCode;
}
export declare namespace CreateVoidInput {
    /** Standardized reason code for the void */
    const ReasonCode: {
        readonly CustomerRequest: "customer_request";
        readonly Duplicate: "duplicate";
        readonly Fraudulent: "fraudulent";
        readonly Error: "error";
        readonly Other: "other";
    };
    type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];
}
//# sourceMappingURL=CreateVoidInput.d.ts.map