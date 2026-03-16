/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface ConfirmPaymentIntentRequest {
    /** Payment intent ID (pi_xxx) */
    id: string;
    /** Payment method ID. Required if not already set on the intent. */
    payment_method?: string;
    /** URL to redirect to after 3DS authentication */
    return_url?: string;
}
//# sourceMappingURL=ConfirmPaymentIntentRequest.d.ts.map