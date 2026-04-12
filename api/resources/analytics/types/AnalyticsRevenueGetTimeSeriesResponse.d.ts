export interface AnalyticsRevenueGetTimeSeriesResponse {
    dataPoints: AnalyticsRevenueGetTimeSeriesResponse.DataPoints.Item[];
    totalRevenue: number;
    totalInvoices: number;
    periodStart: string;
    periodEnd: string;
}
export declare namespace AnalyticsRevenueGetTimeSeriesResponse {
    type DataPoints = DataPoints.Item[];
    namespace DataPoints {
        interface Item {
            date: string;
            revenue: number;
            invoiceCount: number;
            avgInvoiceValue: number;
        }
    }
}
//# sourceMappingURL=AnalyticsRevenueGetTimeSeriesResponse.d.ts.map