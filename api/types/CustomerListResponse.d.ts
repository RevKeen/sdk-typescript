/**
 * A paginated list of customers matching the query filters.
 */
export interface CustomerListResponse {
    data: CustomerListResponse.Data.Item[];
    pagination: CustomerListResponse.Pagination;
}
export declare namespace CustomerListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            /** Unique customer identifier */
            id: string;
            /** ID of the merchant this customer belongs to */
            merchantId: string;
            /** Merchant-assigned reference ID for external system mapping */
            merchantRefId?: string;
            /** Customer's email address */
            email: string;
            /** Customer's full name */
            name?: string;
            /** Customer's phone number */
            phone?: string;
            /** Linked Better Auth user ID for portal access */
            authUserId?: string;
            /** Arbitrary key-value metadata attached to this customer */
            metadata?: Record<string, unknown>;
            /** Merchant-defined custom fields displayed as columns in the dashboard */
            customFields?: Record<string, unknown>;
            /** When the customer was created (ISO 8601) */
            createdAt: string;
            /** When the customer was last updated (ISO 8601) */
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