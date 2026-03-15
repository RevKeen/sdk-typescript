export interface IntegrationsPostPaymentMethodsResponse {
    success: boolean;
    data: IntegrationsPostPaymentMethodsResponse.Data.Item[];
}
export declare namespace IntegrationsPostPaymentMethodsResponse {
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
//# sourceMappingURL=IntegrationsPostPaymentMethodsResponse.d.ts.map