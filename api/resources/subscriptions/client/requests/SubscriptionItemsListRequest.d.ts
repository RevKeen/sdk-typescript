/**
 * @example
 *     {
 *         subscriptionId: "subscriptionId"
 *     }
 */
export interface SubscriptionItemsListRequest {
    /** Subscription UUID */
    subscriptionId: string;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=SubscriptionItemsListRequest.d.ts.map