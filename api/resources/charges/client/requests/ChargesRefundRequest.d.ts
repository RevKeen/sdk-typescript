/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface ChargesRefundRequest {
    id: string;
    amountMinor?: number;
    reason?: ChargesRefundRequest.Reason;
    notes?: string;
}
export declare namespace ChargesRefundRequest {
    const Reason: {
        readonly Duplicate: "duplicate";
        readonly Fraudulent: "fraudulent";
        readonly RequestedByCustomer: "requested_by_customer";
        readonly Other: "other";
    };
    type Reason = (typeof Reason)[keyof typeof Reason];
}
//# sourceMappingURL=ChargesRefundRequest.d.ts.map