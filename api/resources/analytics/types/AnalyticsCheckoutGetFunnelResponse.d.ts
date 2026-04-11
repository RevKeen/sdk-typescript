export interface AnalyticsCheckoutGetFunnelResponse {
    startDate: string;
    endDate: string;
    totalSessions: number;
    completedSessions: number;
    overallConversionRate: number;
    steps: AnalyticsCheckoutGetFunnelResponse.Steps.Item[];
}
export declare namespace AnalyticsCheckoutGetFunnelResponse {
    type Steps = Steps.Item[];
    namespace Steps {
        interface Item {
            stepNumber: number;
            stepName: string;
            sessions: number;
            uniqueCustomers: number;
            uniqueAnonymous: number;
            totalEvents: number;
            avgTimeOnPageSeconds: number | null;
            exits: number;
            dropOffRate: number | null;
        }
    }
}
//# sourceMappingURL=AnalyticsCheckoutGetFunnelResponse.d.ts.map