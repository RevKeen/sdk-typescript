import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         created_after: "2024-01-01T00:00:00Z",
 *         created_before: "2024-12-31T23:59:59Z",
 *         limit: 20
 *     }
 */
export interface RefundsListRequest {
    /** Filter by refund status */
    status?: RevKeen.RefundsListRequestStatus;
    /** Filter by original payment ID */
    payment_id?: string;
    /** Filter by payment gateway (nmi, stripe, etc.) */
    gateway?: string;
    /** Filter by refund reason */
    reason?: RevKeen.RefundsListRequestReason;
    /** ISO 8601 date - only refunds created after this date */
    created_after?: string;
    /** ISO 8601 date - only refunds created before this date */
    created_before?: string;
    /** Number of results to return (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=RefundsListRequest.d.ts.map