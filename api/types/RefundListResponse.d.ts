import type * as RevKeen from "../index.js";
export interface RefundListResponse {
    data: RevKeen.Refund[];
    meta: RefundListResponse.Meta;
}
export declare namespace RefundListResponse {
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=RefundListResponse.d.ts.map