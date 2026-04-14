export interface AnalyticsCheckoutAbandonmentGetSummaryResponse {
    summary: AnalyticsCheckoutAbandonmentGetSummaryResponse.Summary.Item[];
    openAlerts: number;
    recoveredThisPeriod: number;
    potentialRevenueLostCents: number;
    recoveredRevenueCents: number;
}
export declare namespace AnalyticsCheckoutAbandonmentGetSummaryResponse {
    type Summary = Summary.Item[];
    namespace Summary {
        interface Item {
            status: string;
            severity: string;
            alertCount: number;
            totalCartValueCents: number | null;
            avgCartValueCents: number | null;
            recoveryEmailsSent: number;
            recoveredCount: number;
        }
    }
}
//# sourceMappingURL=AnalyticsCheckoutAbandonmentGetSummaryResponse.d.ts.map