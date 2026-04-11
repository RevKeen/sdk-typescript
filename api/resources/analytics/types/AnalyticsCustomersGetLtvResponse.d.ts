export interface AnalyticsCustomersGetLtvResponse {
    customers: AnalyticsCustomersGetLtvResponse.Customers.Item[];
    avgLtv: number;
    medianLtv: number;
}
export declare namespace AnalyticsCustomersGetLtvResponse {
    type Customers = Customers.Item[];
    namespace Customers {
        interface Item {
            customerId: string;
            customerName: string;
            ltv: number;
            totalRevenue: number;
            avgOrderValue: number;
            orderCount: number;
        }
    }
}
//# sourceMappingURL=AnalyticsCustomersGetLtvResponse.d.ts.map