/**
 * @example
 *     {}
 */
export interface CreateSetupIntentRequest {
    /** ID of the customer to attach the payment method to */
    customer_id?: string;
    /** Allowed payment method types */
    payment_method_types?: string[];
    /** How the payment method will be used */
    usage?: CreateSetupIntentRequest.Usage;
    /** Merchant description for reference */
    description?: string;
    /** Custom metadata to attach */
    metadata?: Record<string, unknown>;
}
export declare namespace CreateSetupIntentRequest {
    /** How the payment method will be used */
    const Usage: {
        readonly OnSession: "on_session";
        readonly OffSession: "off_session";
    };
    type Usage = (typeof Usage)[keyof typeof Usage];
}
//# sourceMappingURL=CreateSetupIntentRequest.d.ts.map