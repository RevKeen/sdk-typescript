import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         mappings: [{
 *                 id: "id",
 *                 revkeenMethod: "revkeenMethod",
 *                 practiceHubMethodId: "practiceHubMethodId"
 *             }]
 *     }
 */
export interface IntegrationsPaymentMappingsRequest {
    provider: RevKeen.IntegrationsPaymentMappingsRequestProvider;
    mappings: IntegrationsPaymentMappingsRequest.Mappings.Item[];
}
export declare namespace IntegrationsPaymentMappingsRequest {
    type Mappings = Mappings.Item[];
    namespace Mappings {
        interface Item {
            id: string;
            revkeenMethod: string;
            practiceHubMethodId: string;
        }
    }
}
//# sourceMappingURL=IntegrationsPaymentMappingsRequest.d.ts.map