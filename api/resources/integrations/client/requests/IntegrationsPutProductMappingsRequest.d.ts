import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         mappings: [{
 *                 externalId: "externalId",
 *                 internalId: "internalId"
 *             }]
 *     }
 */
export interface IntegrationsPutProductMappingsRequest {
    provider: RevKeen.IntegrationsPutProductMappingsRequestProvider;
    mappings: IntegrationsPutProductMappingsRequest.Mappings.Item[];
}
export declare namespace IntegrationsPutProductMappingsRequest {
    type Mappings = Mappings.Item[];
    namespace Mappings {
        interface Item {
            externalId: string;
            internalId: string;
            metadata?: Item.Metadata;
        }
        namespace Item {
            interface Metadata {
                name?: string;
                type?: string;
                charge_type?: string;
            }
        }
    }
}
//# sourceMappingURL=IntegrationsPutProductMappingsRequest.d.ts.map