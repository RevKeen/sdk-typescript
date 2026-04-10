/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface PayOrderRequest {
    /** Order ID */
    id: string;
    /** Saved payment method ID */
    payment_method_id?: string;
    /** One-time payment token */
    payment_token?: string;
    /** Partial payment amount in cents (defaults to full amount_due) */
    amount?: number;
}
//# sourceMappingURL=PayOrderRequest.d.ts.map