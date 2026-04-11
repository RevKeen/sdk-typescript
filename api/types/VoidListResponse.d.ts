import type * as RevKeen from "../index.js";
/**
 * A paginated list of voids matching the query filters.
 */
export interface VoidListResponse {
    data: RevKeen.Void[];
    meta: VoidListResponse.Meta;
}
export declare namespace VoidListResponse {
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
//# sourceMappingURL=VoidListResponse.d.ts.map