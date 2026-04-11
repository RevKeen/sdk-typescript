export interface AnalyticsCheckoutWinbackGetSummaryResponse {
    totalOpportunities: number;
    byType: AnalyticsCheckoutWinbackGetSummaryResponse.ByType;
    byStatus: AnalyticsCheckoutWinbackGetSummaryResponse.ByStatus;
    totalPotentialValueCents: number;
    recoveredValueCents: number;
    conversionRate: number;
}
export declare namespace AnalyticsCheckoutWinbackGetSummaryResponse {
    interface ByType {
        cancelledSubscription: number;
        repeatAbandoner: number;
        lapsedCustomer: number;
    }
    interface ByStatus {
        identified: number;
        contacted: number;
        converted: number;
        declined: number;
        expired: number;
    }
}
//# sourceMappingURL=AnalyticsCheckoutWinbackGetSummaryResponse.d.ts.map