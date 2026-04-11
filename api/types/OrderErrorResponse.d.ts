/**
 * Error response returned when an order operation fails.
 */
export interface OrderErrorResponse {
    error: OrderErrorResponse.Error_;
}
export declare namespace OrderErrorResponse {
    interface Error_ {
        type: string;
        code: string;
        message: string;
        param?: string;
    }
}
//# sourceMappingURL=OrderErrorResponse.d.ts.map