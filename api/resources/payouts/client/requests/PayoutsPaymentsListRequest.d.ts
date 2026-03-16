/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface PayoutsPaymentsListRequest {
    /** Payout public ID (pyt_xxx) or UUID */
    id: string;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=PayoutsPaymentsListRequest.d.ts.map