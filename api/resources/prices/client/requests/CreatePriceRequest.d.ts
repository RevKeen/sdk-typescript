import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         product_id: "product_id"
 *     }
 */
export interface CreatePriceRequest {
    /** ID of the product this price belongs to */
    product_id: string;
    /** Three-letter ISO currency code */
    currency?: string;
    /** Price in minor units (cents). Required for fixed pricing. */
    unit_amount?: number;
    /** Price type */
    type?: CreatePriceRequest.Type;
    /** Pricing model */
    pricing_model?: CreatePriceRequest.PricingModel;
    /** Billing interval (required for recurring) */
    interval?: CreatePriceRequest.Interval;
    /** Number of intervals between billings (1-12) */
    interval_count?: number;
    /** Trial period in days (0-730) */
    trial_period_days?: number;
    /** PWYW: minimum amount in cents */
    minimum_amount?: number;
    /** PWYW: maximum amount in cents */
    maximum_amount?: number;
    /** PWYW: suggested amount in cents */
    suggested_amount?: number;
    /** PWYW: quick-select amounts (max 10) */
    preset_amounts?: number[];
    /** Display name (e.g., 'Monthly', 'Annual') */
    nickname?: string;
    /** Stable key for API lookups */
    lookup_key?: string;
    /** Billing scheme. Defaults to `per_unit`. Set to `tiered` with `tiers_mode` + `tiers` for graduated or volume pricing. */
    billing_scheme?: CreatePriceRequest.BillingScheme;
    /** Tiered pricing mode. Required when `billing_scheme` is `tiered`, must be omitted otherwise. */
    tiers_mode?: CreatePriceRequest.TiersMode;
    /** Price tiers (ordered by `up_to`, min 2, max 50). Required when `billing_scheme` is `tiered`. Final tier MUST have `up_to: null`. */
    tiers?: RevKeen.PriceTier[];
    transform_quantity?: RevKeen.TransformQuantity;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace CreatePriceRequest {
    /** Price type */
    const Type: {
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
    };
    type Type = (typeof Type)[keyof typeof Type];
    /** Pricing model */
    const PricingModel: {
        readonly Fixed: "fixed";
        readonly PayWhatYouWant: "pay_what_you_want";
        readonly Free: "free";
    };
    type PricingModel = (typeof PricingModel)[keyof typeof PricingModel];
    /** Billing interval (required for recurring) */
    const Interval: {
        readonly Day: "day";
        readonly Week: "week";
        readonly Month: "month";
        readonly Year: "year";
    };
    type Interval = (typeof Interval)[keyof typeof Interval];
    /** Billing scheme. Defaults to `per_unit`. Set to `tiered` with `tiers_mode` + `tiers` for graduated or volume pricing. */
    const BillingScheme: {
        readonly PerUnit: "per_unit";
        readonly Tiered: "tiered";
    };
    type BillingScheme = (typeof BillingScheme)[keyof typeof BillingScheme];
    /** Tiered pricing mode. Required when `billing_scheme` is `tiered`, must be omitted otherwise. */
    const TiersMode: {
        readonly Graduated: "graduated";
        readonly Volume: "volume";
    };
    type TiersMode = (typeof TiersMode)[keyof typeof TiersMode];
}
//# sourceMappingURL=CreatePriceRequest.d.ts.map