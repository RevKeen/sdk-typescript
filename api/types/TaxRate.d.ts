export interface TaxRate {
    /** Unique identifier for the tax rate */
    id: string;
    /** Object type */
    object: TaxRate.Object_;
    /** Display name for the tax rate */
    display_name: string;
    /** Description of the tax rate */
    description?: string | null;
    /** Tax jurisdiction (e.g., 'US-CA', 'DE', 'GB') */
    jurisdiction?: string | null;
    /** Tax percentage (e.g., 8.25 for 8.25%) */
    percentage: number;
    /** Whether tax is included in displayed price (EU style) */
    inclusive: boolean;
    /** Type of tax */
    tax_type: TaxRate.TaxType;
    /** ISO country code */
    country?: string | null;
    /** State/province code */
    state?: string | null;
    /** Whether the tax rate is active */
    active: boolean;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    /** Creation timestamp */
    created_at: string;
    /** Last update timestamp */
    updated_at: string;
}
export declare namespace TaxRate {
    /** Object type */
    const Object_: {
        readonly TaxRate: "tax_rate";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Type of tax */
    const TaxType: {
        readonly Vat: "vat";
        readonly SalesTax: "sales_tax";
        readonly Gst: "gst";
        readonly Other: "other";
    };
    type TaxType = (typeof TaxType)[keyof typeof TaxType];
}
//# sourceMappingURL=TaxRate.d.ts.map