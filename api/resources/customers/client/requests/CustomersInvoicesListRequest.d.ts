/**
 * @example
 *     {
 *         customerId: "cus_abc123",
 *         limit: 20
 *     }
 */
export interface CustomersInvoicesListRequest {
    /** Customer ID */
    customerId: string;
    /** Maximum number of records to return (1-100) */
    limit?: number;
    /** Cursor for pagination - return records after this ID */
    starting_after?: string;
    /** Cursor for pagination - return records before this ID */
    ending_before?: string;
}
//# sourceMappingURL=CustomersInvoicesListRequest.d.ts.map