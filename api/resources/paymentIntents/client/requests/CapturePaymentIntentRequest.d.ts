/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CapturePaymentIntentRequest {
    /** Payment intent ID (pi_xxx) */
    id: string;
    /** Amount to capture in cents. Defaults to full authorized amount. */
    amount_to_capture?: number;
}
//# sourceMappingURL=CapturePaymentIntentRequest.d.ts.map