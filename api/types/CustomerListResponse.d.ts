export interface CustomerListResponse {
    data: CustomerListResponse.Data.Item[];
    pagination: CustomerListResponse.Pagination;
}
export declare namespace CustomerListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
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
    interface Pagination {
        limit: number;
        offset: number;
        total?: number;
    }
}
//# sourceMappingURL=CustomerListResponse.d.ts.map