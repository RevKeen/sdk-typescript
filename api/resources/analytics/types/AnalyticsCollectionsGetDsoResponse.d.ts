export interface AnalyticsCollectionsGetDsoResponse {
    dso: number;
    trend: AnalyticsCollectionsGetDsoResponse.Trend;
    previousDso?: number;
    periodStart: string;
    periodEnd: string;
}
export declare namespace AnalyticsCollectionsGetDsoResponse {
    const Trend: {
        readonly Improving: "improving";
        readonly Stable: "stable";
        readonly Declining: "declining";
    };
    type Trend = (typeof Trend)[keyof typeof Trend];
}
//# sourceMappingURL=AnalyticsCollectionsGetDsoResponse.d.ts.map