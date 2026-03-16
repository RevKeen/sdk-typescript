export interface ProductListResponse {
    /** Product objects */
    data: Record<string, unknown>[];
    pagination: ProductListResponse.Pagination;
}
export declare namespace ProductListResponse {
    interface Pagination {
        kind: string;
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }
}
//# sourceMappingURL=ProductListResponse.d.ts.map