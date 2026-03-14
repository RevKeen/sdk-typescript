export interface CustomerCreateResponse {
    data: CustomerCreateResponse.Data;
}
export declare namespace CustomerCreateResponse {
    interface Data {
        id: string;
        merchantId: string;
        merchantRefId?: string;
        email: string;
        name?: string;
        phone?: string;
        authUserId?: string;
        metadata?: Record<string, unknown>;
        /** Custom fields */
        customFields?: Record<string, unknown>;
        createdAt: string;
        updatedAt: string;
    }
}
//# sourceMappingURL=CustomerCreateResponse.d.ts.map