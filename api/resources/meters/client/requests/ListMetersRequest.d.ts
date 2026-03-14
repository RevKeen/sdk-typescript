/**
 * @example
 *     {
 *         include_archived: "false",
 *         limit: "50",
 *         offset: "0"
 *     }
 */
export interface ListMetersRequest {
    /** Include archived meters */
    include_archived?: string;
    /** Max results (default 50, max 100) */
    limit?: string;
    /** Pagination offset */
    offset?: string;
}
//# sourceMappingURL=ListMetersRequest.d.ts.map