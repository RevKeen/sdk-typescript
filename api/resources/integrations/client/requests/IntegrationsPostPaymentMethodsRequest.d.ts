import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         baseUrl: "baseUrl",
 *         apiKey: "apiKey"
 *     }
 */
export interface IntegrationsPostPaymentMethodsRequest {
    provider: RevKeen.IntegrationsPostPaymentMethodsRequestProvider;
    baseUrl: string;
    apiKey: string;
    contactEmail?: string;
    tenantId?: string;
}
//# sourceMappingURL=IntegrationsPostPaymentMethodsRequest.d.ts.map