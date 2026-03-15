import type * as RevKeen from "../../../index.js";
export interface DisputesListResponse {
    data: RevKeen.Dispute[];
    meta: DisputesListResponse.Meta;
}
export declare namespace DisputesListResponse {
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=DisputesListResponse.d.ts.map