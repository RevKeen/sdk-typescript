/**
 * Error response returned when a price operation fails.
 */
export interface PriceErrorResponse {
    error: PriceErrorResponse.Error_;
}
export declare namespace PriceErrorResponse {
    interface Error_ {
        type: string;
        code: string;
        message: string;
        param?: string;
    }
}
//# sourceMappingURL=PriceErrorResponse.d.ts.map