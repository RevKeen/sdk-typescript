/**
 * @example
 *     {
 *         meterId: "meterId",
 *         pricing_model: "per_unit",
 *         currency: "GBP"
 *     }
 */
export interface CreateMeterPriceRequest {
    /** Meter ID */
    meterId: string;
    /** Pricing model */
    pricing_model: CreateMeterPriceRequest.PricingModel;
    /** ISO 4217 currency code */
    currency: string;
    /** Price per unit in minor units (for per_unit) */
    unit_amount_minor?: number;
    /** Base charge per period in minor units */
    flat_fee_minor?: number;
    /** Units per package (for package model) */
    package_size?: number;
    /** Merchant's cost per unit for margin intelligence */
    cost_per_unit_minor?: number;
    /** Tier configuration (for graduated and volume) */
    tiers?: CreateMeterPriceRequest.Tiers.Item[];
}
export declare namespace CreateMeterPriceRequest {
    /** Pricing model */
    const PricingModel: {
        readonly PerUnit: "per_unit";
        readonly Graduated: "graduated";
        readonly Volume: "volume";
        readonly Package: "package";
    };
    type PricingModel = (typeof PricingModel)[keyof typeof PricingModel];
    type Tiers = Tiers.Item[];
    namespace Tiers {
        interface Item {
            /** Start of tier range */
            first_unit: number;
            /** End of tier range (null = unbounded) */
            last_unit?: number | null;
            /** Per-unit price in this tier (minor units) */
            unit_amount_minor: number;
            /** Flat fee for entering this tier (minor units) */
            flat_amount_minor?: number;
        }
    }
}
//# sourceMappingURL=CreateMeterPriceRequest.d.ts.map