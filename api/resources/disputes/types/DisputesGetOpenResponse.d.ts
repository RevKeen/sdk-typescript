import type * as RevKeen from "../../../index.js";
export interface DisputesGetOpenResponse {
    data: RevKeen.OpenDispute[];
    meta: DisputesGetOpenResponse.Meta;
}
export declare namespace DisputesGetOpenResponse {
    interface Meta {
        total_open: number;
        overdue_count: number;
    }
}
//# sourceMappingURL=DisputesGetOpenResponse.d.ts.map