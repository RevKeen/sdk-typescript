import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub"
 *     }
 */
export interface IntegrationsSyncLogsRequest {
    provider: RevKeen.IntegrationsSyncLogsRequestProvider;
    integrationId?: string;
    resourceType?: string;
    status?: RevKeen.IntegrationsSyncLogsRequestStatus;
    jobType?: RevKeen.IntegrationsSyncLogsRequestJobType;
    createdAfter?: string;
    createdBefore?: string;
    limit?: string;
    offset?: string;
    latestOnly?: RevKeen.IntegrationsSyncLogsRequestLatestOnly;
}
//# sourceMappingURL=IntegrationsSyncLogsRequest.d.ts.map