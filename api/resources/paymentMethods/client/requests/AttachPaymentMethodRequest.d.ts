/**
 * @example
 *     {
 *         id: "pm_1a2b3c4d5e6f",
 *         customer_id: "550e8400-e29b-41d4-a716-446655440000"
 *     }
 */
export interface AttachPaymentMethodRequest {
    /** Payment Method ID (UUID or public ID pm_xxx) */
    id: string;
    /** ID of the customer to attach the payment method to */
    customer_id: string;
}
//# sourceMappingURL=AttachPaymentMethodRequest.d.ts.map