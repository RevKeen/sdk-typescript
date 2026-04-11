import type * as RevKeen from "../index.js";
/**
 * A paginated list of refunds matching the query filters.
 */
export interface RefundListResponse {
    data: RevKeen.Refund[];
    meta: RefundListResponse.Meta;
}
export declare namespace RefundListResponse {
    interface Meta {
        /** Total number of results matching the query */
        total: number;
        /** Maximum results per page */
        limit: number;
        /** Number of results skipped */
        offset: number;
        /** Whether more results exist beyond this page */
        has_more: boolean;
    }
}
//# sourceMappingURL=RefundListResponse.d.ts.map