export interface IntegrationsGetBillableItemsResponse {
    success: boolean;
    data: IntegrationsGetBillableItemsResponse.Data.Item[];
}
export declare namespace IntegrationsGetBillableItemsResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: Item.Id;
            name: string;
            type?: string | null;
            charge_type?: string | null;
            price?: number | null;
            source: Item.Source;
        }
        namespace Item {
            type Id = string | number;
            const Source: {
                readonly Invoice: "invoice";
            };
            type Source = (typeof Source)[keyof typeof Source];
        }
    }
}
//# sourceMappingURL=IntegrationsGetBillableItemsResponse.d.ts.map