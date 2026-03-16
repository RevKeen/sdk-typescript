import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         limit: 20
 *     }
 */
export interface WebhookEndpointsListRequest {
    /** Filter by status */
    status?: RevKeen.WebhookEndpointsListRequestStatus;
    /** Number of results to return (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=WebhookEndpointsListRequest.d.ts.map