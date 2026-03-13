/**
 * @example
 *     {
 *         id: "id",
 *         reason: "Invoice totals do not match purchase order"
 *     }
 */
export interface InvoicesRejectRequest {
    id: string;
    /** Reason for rejecting the invoice (required) */
    reason: string;
}
//# sourceMappingURL=InvoicesRejectRequest.d.ts.map