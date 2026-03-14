import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         source: "practicehub",
 *         invoices: [{
 *                 external_id: "INV-12345"
 *             }]
 *     }
 */
export interface InvoicesExternalBatchRequest {
    /** Integration source (e.g., practicehub, wodify) */
    source: string;
    /** Array of invoices to upsert (max 100) */
    invoices: InvoicesExternalBatchRequest.Invoices.Item[];
}
export declare namespace InvoicesExternalBatchRequest {
    type Invoices = Invoices.Item[];
    namespace Invoices {
        interface Item {
            /** External system's invoice ID */
            external_id: string;
            /** Customer external reference for lookup. Either this or customer_uuid is required. */
            customer_external_ref?: Item.CustomerExternalRef;
            /** Direct customer UUID (if already resolved) */
            customer_uuid?: string;
            invoice_number?: string;
            /** Total amount in minor units (cents) */
            total_minor?: number;
            /** Subtotal in minor units (before tax) */
            subtotal_minor?: number;
            /** Tax amount in minor units */
            tax_minor?: number;
            /** Discount amount in minor units */
            discount_minor?: number;
            /** ISO 4217 currency code */
            currency?: string;
            /** Invoice date (ISO 8601 format) */
            invoice_date?: string;
            /** Due date (ISO 8601 format) */
            due_date?: string;
            /** Invoice status */
            status?: string;
            /** Invoice line items */
            line_items?: Item.LineItems.Item[];
            notes?: string;
            metadata?: Record<string, unknown>;
            subscription_terms?: RevKeen.SubscriptionTerms;
            /** Type within external system */
            external_type?: string;
            /** External system's last update timestamp for stale update protection */
            external_updated_at?: string;
        }
        namespace Item {
            /**
             * Customer external reference for lookup. Either this or customer_uuid is required.
             */
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
    }
}
//# sourceMappingURL=InvoicesExternalBatchRequest.d.ts.map