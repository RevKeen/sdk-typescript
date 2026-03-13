import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface CommsThreadsListRequest {
    /** Filter by customer UUID */
    customerId?: string;
    /** Filter by thread status */
    status?: RevKeen.CommsThreadsListRequestStatus;
    /** Filter by channel */
    channel?: string;
    /** Filter by related invoice UUID */
    invoiceId?: string;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=CommsThreadsListRequest.d.ts.map