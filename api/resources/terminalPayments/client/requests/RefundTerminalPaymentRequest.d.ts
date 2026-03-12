/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface RefundTerminalPaymentRequest {
    /** Terminal payment attempt ID of the original sale */
    id: string;
    /** Amount to refund in minor units. Omit for a full refund. */
    amount_minor?: number;
    /** Reason for the refund */
    reason?: string;
}
//# sourceMappingURL=RefundTerminalPaymentRequest.d.ts.map