/**
 * @example
 *     {
 *         id: "id",
 *         content: "Payment reminder sent to customer"
 *     }
 */
export interface InvoicesCommentsAddRequest {
    id: string;
    /** The comment content */
    content: string;
    /** If true, comment is only visible to merchant. If false, visible to customer. */
    isInternal?: boolean;
}
//# sourceMappingURL=InvoicesCommentsAddRequest.d.ts.map