/**
 * @example
 *     {
 *         display_name: "display_name",
 *         percentage: 1.1
 *     }
 */
export interface CreateTaxRateRequest {
    /** Display name for the tax rate */
    display_name: string;
    /** Description of the tax rate */
    description?: string;
    /** Tax jurisdiction (e.g., 'US-CA', 'DE', 'GB') */
    jurisdiction?: string;
    /** Tax percentage (e.g., 8.25 for 8.25%) */
    percentage: number;
    /** Whether tax is included in displayed price */
    inclusive?: boolean;
    /** Type of tax */
    tax_type?: CreateTaxRateRequest.TaxType;
    /** ISO 2-letter country code */
    country?: string;
    /** State/province code */
    state?: string;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace CreateTaxRateRequest {
    /** Type of tax */
    const TaxType: {
        readonly Vat: "vat";
        readonly SalesTax: "sales_tax";
        readonly Gst: "gst";
        readonly Other: "other";
    };
    type TaxType = (typeof TaxType)[keyof typeof TaxType];
}
//# sourceMappingURL=CreateTaxRateRequest.d.ts.map