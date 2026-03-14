/**
 * @example
 *     {
 *         customerId: "customerId"
 *     }
 */
export interface CustomersEntitlementsListRequest {
    /** Customer UUID */
    customerId: string;
    /** Include expired entitlements */
    includeExpired?: boolean | null;
    /** Filter by benefit type */
    benefitType?: string;
    /** Filter by category */
    category?: string;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=CustomersEntitlementsListRequest.d.ts.map