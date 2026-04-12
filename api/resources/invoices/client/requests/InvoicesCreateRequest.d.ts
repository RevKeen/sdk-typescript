import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         customer_uuid: "customer_uuid",
 *         total_minor: 1
 *     }
 */
export interface InvoicesCreateRequest {
    customer_uuid: string;
    invoice_number?: string;
    total_minor: number;
    currency?: string;
    due_date?: string;
    status?: string;
    /** Key-value pairs for custom fields */
    custom_fields?: Record<string, unknown>;
    subscription_terms?: RevKeen.SubscriptionTerms;
}
//# sourceMappingURL=InvoicesCreateRequest.d.ts.map