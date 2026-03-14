export interface BillingIntervalsResponse {
    data: BillingIntervalsResponse.Data.Item[];
}
export declare namespace BillingIntervalsResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            value: string;
            label: string;
            description: string;
        }
    }
}
//# sourceMappingURL=BillingIntervalsResponse.d.ts.map