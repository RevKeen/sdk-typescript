/**
 * Standard error response for customer sub-resource operations.
 */
export interface ErrorResponse {
    error: ErrorResponse.Error_;
}
export declare namespace ErrorResponse {
    interface Error_ {
        code: string;
        message: string;
    }
}
//# sourceMappingURL=ErrorResponse.d.ts.map