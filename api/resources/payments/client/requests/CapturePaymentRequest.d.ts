/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CapturePaymentRequest {
    /** Payment ID */
    id: string;
    /** Amount to capture in cents. Defaults to full authorized amount. Must be <= authorized amount. */
    amount?: number;
}
//# sourceMappingURL=CapturePaymentRequest.d.ts.map