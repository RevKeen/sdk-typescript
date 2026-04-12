import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         source: "practicehub",
 *         externalId: "INV-12345"
 *     }
 */
export interface InvoicesExternalUpsertByExternalIdRequest {
    /** External source identifier (e.g., practicehub, wodify) */
    source: string;
    /** External ID from the source system */
    externalId: string;
    customer_external_ref?: InvoicesExternalUpsertByExternalIdRequest.CustomerExternalRef;
    customer_uuid?: string;
    invoice_number?: string;
    total_minor?: number;
    subtotal_minor?: number;
    tax_minor?: number;
    discount_minor?: number;
    currency?: string;
    invoice_date?: string;
    due_date?: string;
    status?: string;
    line_items?: InvoicesExternalUpsertByExternalIdRequest.LineItems.Item[];
    notes?: string;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    /** Key-value pairs for custom fields */
    custom_fields?: Record<string, unknown>;
    subscription_terms?: RevKeen.SubscriptionTerms;
    external_updated_at?: string;
    external_type?: string;
}
export declare namespace InvoicesExternalUpsertByExternalIdRequest {
    interface CustomerExternalRef {
        source: string;
        id: string;
    }
    type LineItems = LineItems.Item[];
    namespace LineItems {
        interface Item {
            description: string;
            quantity?: number;
            unit_amount_minor: number;
            product_id?: string;
        }
    }
}
//# sourceMappingURL=InvoicesExternalUpsertByExternalIdRequest.d.ts.map