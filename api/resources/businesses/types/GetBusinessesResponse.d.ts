export interface GetBusinessesResponse {
    /** Business objects */
    data: Record<string, unknown>[];
    pagination: GetBusinessesResponse.Pagination;
}
export declare namespace GetBusinessesResponse {
    interface Pagination {
        kind: string;
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }
}
//# sourceMappingURL=GetBusinessesResponse.d.ts.map