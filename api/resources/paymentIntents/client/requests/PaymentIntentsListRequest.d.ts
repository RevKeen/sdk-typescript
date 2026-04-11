import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface PaymentIntentsListRequest {
    /** Filter by customer ID */
    customer?: string;
    /** Filter by status */
    status?: RevKeen.PaymentIntentsListRequestStatus;
    /** Filter by created_at >= (Unix timestamp) */
    created_gte?: number | null;
    /** Filter by created_at <= (Unix timestamp) */
    created_lte?: number | null;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Cursor for pagination - return results after this ID (pi_xxx) */
    starting_after?: string;
    /** Cursor for pagination - return results before this ID (pi_xxx) */
    ending_before?: string;
}
//# sourceMappingURL=PaymentIntentsListRequest.d.ts.map