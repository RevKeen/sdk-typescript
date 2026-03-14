export interface ProductsExternalUpsertResponse {
    data: ProductsExternalUpsertResponse.Data;
    created: boolean;
    skipped?: boolean;
}
export declare namespace ProductsExternalUpsertResponse {
    interface Data {
        id: string;
        merchantId: string;
        name: string;
        description: string | null;
        kind: Data.Kind | null;
        amountCents: number | null;
        currency: string | null;
        isActive: boolean | null;
        externalId: string | null;
        externalSystem: string | null;
        externalRef: string | null;
        interval: string | null;
        intervalCount: number | null;
        createdAt: string;
        updatedAt: string;
    }
    namespace Data {
        const Kind: {
            readonly Subscription: "subscription";
            readonly OneTime: "one_time";
        };
        type Kind = (typeof Kind)[keyof typeof Kind];
    }
}
//# sourceMappingURL=ProductsExternalUpsertResponse.d.ts.map