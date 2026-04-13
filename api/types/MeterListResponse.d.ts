/**
 * A list of meters for the merchant.
 */
export interface MeterListResponse {
    /** Array of meter objects */
    data: Record<string, unknown>[];
    pagination: MeterListResponse.Pagination;
}
export declare namespace MeterListResponse {
    interface Pagination {
        limit: number;
        offset: number;
        count: number;
    }
}
//# sourceMappingURL=MeterListResponse.d.ts.map