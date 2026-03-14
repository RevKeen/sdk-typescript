import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface SubscriptionsListRequest {
    /** Page number */
    page?: number;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Filter by subscription status */
    status?: RevKeen.SubscriptionsListRequestStatus;
    /** Filter by customer UUID */
    customerId?: string;
}
//# sourceMappingURL=SubscriptionsListRequest.d.ts.map