/**
 * @example
 *     {}
 */
export interface InvoicesListRequest {
    /** Filter by invoice status */
    status?: string;
    /** Filter by customer ID */
    customerId?: string;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=InvoicesListRequest.d.ts.map