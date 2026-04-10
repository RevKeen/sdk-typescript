import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         externalItems: [{
 *                 id: "id",
 *                 name: "name",
 *                 source: "package"
 *             }]
 *     }
 */
export interface IntegrationsSuggestMappingsRequest {
    provider: RevKeen.IntegrationsSuggestMappingsRequestProvider;
    externalItems: IntegrationsSuggestMappingsRequest.ExternalItems.Item[];
}
export declare namespace IntegrationsSuggestMappingsRequest {
    type ExternalItems = ExternalItems.Item[];
    namespace ExternalItems {
        interface Item {
            id: string;
            name: string;
            type?: string | null;
            charge_type?: string | null;
            price?: number | null;
            source: Item.Source;
        }
        namespace Item {
            const Source: {
                readonly Package: "package";
                readonly Invoice: "invoice";
                readonly Unmapped: "unmapped";
            };
            type Source = (typeof Source)[keyof typeof Source];
        }
    }
}
//# sourceMappingURL=IntegrationsSuggestMappingsRequest.d.ts.map