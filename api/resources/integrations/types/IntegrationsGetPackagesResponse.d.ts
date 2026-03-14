export interface IntegrationsGetPackagesResponse {
    success: boolean;
    data: IntegrationsGetPackagesResponse.Data.Item[];
}
export declare namespace IntegrationsGetPackagesResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: Item.Id;
            name: string;
            public_name?: string | null;
            type?: string | null;
            package_type?: string | null;
            charge_type?: string | null;
            price?: number | null;
            visits?: number | null;
            active?: Item.Active;
        }
        namespace Item {
            type Id = string | number;
            type Active = boolean | number;
        }
    }
}
//# sourceMappingURL=IntegrationsGetPackagesResponse.d.ts.map