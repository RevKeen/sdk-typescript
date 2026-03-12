export interface AnalyticsInvoicesGetArAgingResponse {
    asOfDate: string;
    buckets: AnalyticsInvoicesGetArAgingResponse.Buckets.Item[];
    totalOutstanding: number;
    totalInvoices: number;
}
export declare namespace AnalyticsInvoicesGetArAgingResponse {
    type Buckets = Buckets.Item[];
    namespace Buckets {
        interface Item {
            label: string;
            count: number;
            totalMinor: number;
        }
    }
}
//# sourceMappingURL=AnalyticsInvoicesGetArAgingResponse.d.ts.map