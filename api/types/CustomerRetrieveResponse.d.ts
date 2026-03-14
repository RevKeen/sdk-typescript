export interface CustomerRetrieveResponse {
    data: CustomerRetrieveResponse.Data;
}
export declare namespace CustomerRetrieveResponse {
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
//# sourceMappingURL=CustomerRetrieveResponse.d.ts.map