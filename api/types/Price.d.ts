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
}
//# sourceMappingURL=Price.d.ts.map