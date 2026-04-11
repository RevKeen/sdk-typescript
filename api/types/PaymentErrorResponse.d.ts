/**
 * Error response returned when a payment operation fails.
 */
export interface PaymentErrorResponse {
    error: PaymentErrorResponse.Error_;
}
export declare namespace PaymentErrorResponse {
    interface Error_ {
        type: string;
        code: string;
        message: string;
        param?: string;
    }
}
//# sourceMappingURL=PaymentErrorResponse.d.ts.map