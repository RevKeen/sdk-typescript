import type * as RevKeen from "../../../index.js";
export interface DisputesGetOpenResponse {
    data: RevKeen.OpenDispute[];
    meta: DisputesGetOpenResponse.Meta;
}
export declare namespace DisputesGetOpenResponse {
    interface Meta {
        /** Total number of disputes currently requiring action */
        total_open: number;
        /** Number of disputes past their evidence submission deadline */
        overdue_count: number;
    }
}
//# sourceMappingURL=DisputesGetOpenResponse.d.ts.map