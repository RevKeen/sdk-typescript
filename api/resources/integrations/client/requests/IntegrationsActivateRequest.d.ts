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
export interface IntegrationsActivateRequest {
    provider: RevKeen.IntegrationsActivateRequestProvider;
    credentials: IntegrationsActivateRequest.Credentials;
    syncIntervalMinutes?: number;
    currency?: string;
}
export declare namespace IntegrationsActivateRequest {
    interface Credentials {
        apiKey: string;
        baseUrl: string;
        appName?: string;
        appEmail?: string;
    }
}
//# sourceMappingURL=IntegrationsActivateRequest.d.ts.map