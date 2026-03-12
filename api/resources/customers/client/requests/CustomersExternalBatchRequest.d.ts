/**
 * @example
 *     {
 *         source: "practicehub",
 *         customers: [{
 *                 external_id: "PAT-12345",
 *                 email: "john@example.com"
 *             }]
 *     }
 */
export interface CustomersExternalBatchRequest {
    /** Integration source (e.g., practicehub, wodify) */
    source: string;
    /** Array of customers to upsert (max 100) */
    customers: CustomersExternalBatchRequest.Customers.Item[];
}
export declare namespace CustomersExternalBatchRequest {
    type Customers = Customers.Item[];
    namespace Customers {
        interface Item {
            /** External system's customer ID */
            external_id: string;
            /** Customer email */
            email: string;
            /** Customer name */
            name?: string;
            /** Customer phone */
            phone?: string;
            /** Address line 1 */
            address_line1?: string;
            /** Address line 2 */
            address_line2?: string;
            /** City */
            city?: string;
            /** State/Province */
            state?: string;
            /** Postal code */
            postal_code?: string;
            /** Country code (ISO 3166-1 alpha-2) */
            country?: string;
            /** Tax ID */
            tax_id?: string;
            /** Country for tax ID */
            tax_id_country?: string;
            /** Customer notes */
            notes?: string;
            metadata?: Record<string, unknown>;
            /** External system's last update timestamp for stale update protection */
            external_updated_at?: string;
        }
    }
}
//# sourceMappingURL=CustomersExternalBatchRequest.d.ts.map