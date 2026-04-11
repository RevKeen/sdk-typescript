import type * as RevKeen from "../index.js";
/**
 * Response from an external system upsert, indicating whether the invoice was created or updated along with any warnings.
 */
export interface ExternalUpsertResponse {
    data: RevKeen.Invoice;
    created: boolean;
    warnings?: string[];
    requestId: string;
}
//# sourceMappingURL=ExternalUpsertResponse.d.ts.map