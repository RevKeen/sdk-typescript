import type * as RevKeen from "../../../index.js";
export interface DisputesRetrieveResponse {
    /** A dispute (chargeback) represents a customer's challenge to a charge with their card issuer. Track lifecycle stages and submit evidence to contest. */
    data: DisputesRetrieveResponse.Data;
}
export declare namespace DisputesRetrieveResponse {
    /**
     * A dispute (chargeback) represents a customer's challenge to a charge with their card issuer. Track lifecycle stages and submit evidence to contest.
     */
    interface Data extends RevKeen.Dispute {
        days_until_due: number | null;
        is_overdue: boolean;
    }
}
//# sourceMappingURL=DisputesRetrieveResponse.d.ts.map