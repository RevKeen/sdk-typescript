export interface IntegrationsGetPaymentMethodsResponse {
    success: boolean;
    data: IntegrationsGetPaymentMethodsResponse.Data.Item[];
}
export declare namespace IntegrationsGetPaymentMethodsResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: number;
            name: string;
            active: boolean;
            sort_order: number;
        }
    }
}
//# sourceMappingURL=IntegrationsGetPaymentMethodsResponse.d.ts.map