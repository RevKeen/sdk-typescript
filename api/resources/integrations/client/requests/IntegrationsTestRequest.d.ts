import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         credentials: {
 *             apiKey: "apiKey",
 *             baseUrl: "baseUrl"
 *         }
 *     }
 */
export interface IntegrationsTestRequest {
    provider: RevKeen.IntegrationsTestRequestProvider;
    credentials: IntegrationsTestRequest.Credentials;
}
export declare namespace IntegrationsTestRequest {
    interface Credentials {
        apiKey: string;
        baseUrl: string;
        appName?: string;
        appEmail?: string;
    }
}
//# sourceMappingURL=IntegrationsTestRequest.d.ts.map