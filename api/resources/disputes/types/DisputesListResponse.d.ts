import type * as RevKeen from "../../../index.js";
export interface DisputesListResponse {
    data: RevKeen.Dispute[];
    meta: DisputesListResponse.Meta;
}
export declare namespace DisputesListResponse {
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
//# sourceMappingURL=DisputesListResponse.d.ts.map