/**
 * Last error encountered during setup
 */
export interface SetupIntentError {
    /** Error code */
    code: string;
    /** Human-readable error message */
    message: string;
    /** Decline code from the payment gateway */
    decline_code?: string;
    /** The payment method that caused the error */
    payment_method?: SetupIntentError.PaymentMethod;
}
export declare namespace SetupIntentError {
    /**
     * The payment method that caused the error
     */
    interface PaymentMethod {
        id: string;
        type: string;
    }
}
//# sourceMappingURL=SetupIntentError.d.ts.map