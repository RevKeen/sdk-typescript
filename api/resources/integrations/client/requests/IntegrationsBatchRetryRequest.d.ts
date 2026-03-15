import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         integrationId: "integrationId"
 *     }
 */
export interface IntegrationsBatchRetryRequest {
    provider: RevKeen.IntegrationsBatchRetryRequestProvider;
    integrationId: string;
    resourceType?: string;
    limit?: number;
}
//# sourceMappingURL=IntegrationsBatchRetryRequest.d.ts.map