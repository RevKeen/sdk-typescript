export interface CustomerUpdateResponse {
    data: CustomerUpdateResponse.Data;
}
export declare namespace CustomerUpdateResponse {
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
//# sourceMappingURL=CustomerUpdateResponse.d.ts.map