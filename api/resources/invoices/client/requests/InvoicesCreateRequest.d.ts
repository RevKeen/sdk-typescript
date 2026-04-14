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
    /** Restrict checkout payment methods for this invoice. When set, narrows available rails for checkout sessions created against this invoice. Omit to use merchant default. */
    allowed_methods?: InvoicesCreateRequest.AllowedMethods.Item[];
}
export declare namespace InvoicesCreateRequest {
    type AllowedMethods = AllowedMethods.Item[];
    namespace AllowedMethods {
        const Item: {
            readonly Card: "card";
            readonly InStore: "in_store";
        };
        type Item = (typeof Item)[keyof typeof Item];
    }
}
//# sourceMappingURL=InvoicesCreateRequest.d.ts.map