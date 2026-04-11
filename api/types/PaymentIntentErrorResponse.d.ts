/**
 * Error response returned when a payment intent operation fails.
 */
export interface PaymentIntentErrorResponse {
    error: PaymentIntentErrorResponse.Error_;
}
export declare namespace PaymentIntentErrorResponse {
    interface Error_ {
        /** Error type (api_error, invalid_request_error, etc.) */
        type: string;
        /** Error code */
        code: string;
        /** Human-readable error message */
        message: string;
        /** Parameter that caused the error */
        param?: string;
    }
}
//# sourceMappingURL=PaymentIntentErrorResponse.d.ts.map