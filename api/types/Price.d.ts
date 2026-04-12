import type * as RevKeen from "../index.js";
/**
 * A price defines how much and how often to charge for a product. A single product can have multiple prices for different currencies, intervals, or tiers.
 */
export interface Price {
    /** Unique identifier for the price */
    id: string;
    /** Object type */
    object: Price.Object_;
    /** ID of the product this price belongs to */
    product_id: string;
    /** Whether the price is active */
    active: boolean;
    /** Three-letter ISO currency code (lowercase) */
    currency: string;
    /** Price in minor units (cents) */
    unit_amount: number | null;
    /** Price type */
    type: Price.Type;
    /** Pricing model */
    pricing_model: Price.PricingModel;
    /** Billing interval (recurring only) */
    interval?: Price.Interval | null;
    /** Number of intervals between billings */
    interval_count?: number | null;
    /** Trial period in days (recurring only) */
    trial_period_days?: number | null;
    /** PWYW: minimum amount in cents */
    minimum_amount?: number | null;
    /** PWYW: maximum amount in cents */
    maximum_amount?: number | null;
    /** PWYW: suggested amount in cents */
    suggested_amount?: number | null;
    /** PWYW: quick-select amounts */
    preset_amounts?: number[] | null;
    /** Display name (e.g., 'Monthly', 'Annual - Save 17%') */
    nickname?: string | null;
    /** Stable key for API lookups */
    lookup_key?: string | null;
    /** Billing scheme. Defaults to `per_unit`. Set to `tiered` along with `tiers_mode` + `tiers` to use graduated or volume pricing. */
    billing_scheme: Price.BillingScheme;
    /** Tiered pricing mode. Required when `billing_scheme` is `tiered`, must be null otherwise. */
    tiers_mode?: Price.TiersMode | null;
    /** Price tiers (ordered by `up_to`). Present only when `billing_scheme` is `tiered`. At least 2 tiers, final tier MUST have `up_to: null`. Immutable after creation. */
    tiers?: RevKeen.PriceTier[] | null;
    /** Optional quantity transform (package pricing) applied before tier lookup. Immutable after creation. */
    transform_quantity?: Price.TransformQuantity | null;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    /** Creation timestamp */
    created_at: string;
    /** Last update timestamp */
    updated_at: string;
}
export declare namespace Price {
    /** Object type */
    const Object_: {
        readonly Price: "price";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
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
    /** Billing interval (recurring only) */
    const Interval: {
        readonly Day: "day";
        readonly Week: "week";
        readonly Month: "month";
        readonly Year: "year";
    };
    type Interval = (typeof Interval)[keyof typeof Interval];
    /** Billing scheme. Defaults to `per_unit`. Set to `tiered` along with `tiers_mode` + `tiers` to use graduated or volume pricing. */
    const BillingScheme: {
        readonly PerUnit: "per_unit";
        readonly Tiered: "tiered";
    };
    type BillingScheme = (typeof BillingScheme)[keyof typeof BillingScheme];
    /** Tiered pricing mode. Required when `billing_scheme` is `tiered`, must be null otherwise. */
    const TiersMode: {
        readonly Graduated: "graduated";
        readonly Volume: "volume";
    };
    type TiersMode = (typeof TiersMode)[keyof typeof TiersMode];
    /**
     * Optional quantity transform (package pricing) applied before tier lookup. Immutable after creation.
     */
    interface TransformQuantity {
        /** Package size — quantity is divided by this value before pricing. Must be >= 1. Example: `divide_by: 10` with `round: up` charges per pack of 10. */
        divide_by: number;
        /** Rounding mode when quantity is not an exact multiple of `divide_by`. */
        round: TransformQuantity.Round;
    }
    namespace TransformQuantity {
        /** Rounding mode when quantity is not an exact multiple of `divide_by`. */
        const Round: {
            readonly Up: "up";
            readonly Down: "down";
        };
        type Round = (typeof Round)[keyof typeof Round];
    }
}
//# sourceMappingURL=Price.d.ts.map