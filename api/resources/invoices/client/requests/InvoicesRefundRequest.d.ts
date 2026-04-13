/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface InvoicesRefundRequest {
    id: string;
    /** Amount to refund in minor units (cents). If not provided, full refund is issued. */
    amount_minor?: number;
    /** Reason for the refund */
    reason?: string;
}
//# sourceMappingURL=InvoicesRefundRequest.d.ts.map