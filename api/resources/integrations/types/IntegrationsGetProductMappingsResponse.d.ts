export interface IntegrationsGetProductMappingsResponse {
    success: boolean;
    data: IntegrationsGetProductMappingsResponse.Data.Item[];
}
export declare namespace IntegrationsGetProductMappingsResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            externalId: string;
            externalName: string | null;
            internalId: string;
            productName: string | null;
            productKind: string | null;
            productAmountMinor: number | null;
            productCurrency: string | null;
            metadata?: unknown;
        }
    }
}
//# sourceMappingURL=IntegrationsGetProductMappingsResponse.d.ts.map