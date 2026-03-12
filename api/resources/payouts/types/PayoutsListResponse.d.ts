import type * as RevKeen from "../../../index.js";
export interface PayoutsListResponse {
    data: RevKeen.Payout[];
    meta: PayoutsListResponse.Meta;
}
export declare namespace PayoutsListResponse {
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=PayoutsListResponse.d.ts.map