export interface AnalyticsCustomersRetrieveResponse {
    customerId: string;
    totalRevenue: number;
    totalInvoices: number;
    avgInvoiceValue: number;
    outstandingBalance: number;
    /** Payment history records */
    paymentHistory: Record<string, unknown>[];
}
//# sourceMappingURL=AnalyticsCustomersRetrieveResponse.d.ts.map