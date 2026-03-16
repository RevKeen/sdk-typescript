import type * as RevKeen from "../../../index.js";
export interface DisputesRetrieveResponse {
    data: DisputesRetrieveResponse.Data;
}
export declare namespace DisputesRetrieveResponse {
    interface Data extends RevKeen.Dispute {
        days_until_due: number | null;
        is_overdue: boolean;
    }
}
//# sourceMappingURL=DisputesRetrieveResponse.d.ts.map