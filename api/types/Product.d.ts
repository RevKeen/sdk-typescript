/**
 * A product defines what you sell — the name, billing type, price, and fulfillment method. Products can be one-time, recurring (subscription), or usage-based.
 */
export interface Product {
    /** Unique identifier (UUID) */
    id: string;
    /** Object type */
    object: Product.Object_;
    /** User-facing product identifier */
    product_id: string;
    /** Product display name */
    name: string;
    /** Product description */
    description?: string | null;
    /** Product kind */
    kind: Product.Kind;
    /** How the product is priced */
    pricing_model: Product.PricingModel;
    /** Price in minor units (cents/pence) */
    amount_minor: number | null;
    /** Three-letter ISO currency code */
    currency: string;
    /** Billing interval (day, week, month, year) */
    interval?: string | null;
    /** Number of intervals between billings */
    interval_count?: number | null;
    /** Free trial period in days */
    trial_days: number;
    /** Fulfillment type */
    fulfillment_type: Product.FulfillmentType;
    /** Billing date calculation rule */
    billing_anchor_rule?: Product.BillingAnchorRule | null;
    /** Day of month for billing (1-31) */
    billing_anchor_day?: number | null;
    /** First payment timing */
    first_charge_behavior?: Product.FirstChargeBehavior | null;
    /** Subscription end behavior */
    end_behavior?: Product.EndBehavior | null;
    /** Max billing cycles for fixed-payment subscriptions */
    max_payments?: number | null;
    /** Associated usage meter ID */
    usage_meter_id?: string | null;
    /** URL-friendly slug */
    slug?: string | null;
    /** Whether the product is active */
    is_active: boolean;
    /** Whether the product is archived */
    is_archived: boolean;
    /** Product image URL */
    image_url?: string | null;
    /** Tax behavior (exclusive, inclusive, location) */
    tax_behavior?: string | null;
    /** Tax code for tax calculation */
    tax_code?: string | null;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    /** Creation timestamp (ISO 8601) */
    created_at: string;
    /** Last update timestamp (ISO 8601) */
    updated_at: string;
}
export declare namespace Product {
    /** Object type */
    const Object_: {
        readonly Product: "product";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Product kind */
    const Kind: {
        readonly Subscription: "subscription";
        readonly OneTime: "one_time";
        readonly Usage: "usage";
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
    /** How the product is priced */
    const PricingModel: {
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
        readonly Usage: "usage";
    };
    type PricingModel = (typeof PricingModel)[keyof typeof PricingModel];
    /** Fulfillment type */
    const FulfillmentType: {
        readonly None: "none";
        readonly Digital: "digital";
        readonly Physical: "physical";
    };
    type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType];
    /** Billing date calculation rule */
    const BillingAnchorRule: {
        readonly SameDay: "same_day";
        readonly DayOfMonth: "day_of_month";
        readonly LastDay: "last_day";
    };
    type BillingAnchorRule = (typeof BillingAnchorRule)[keyof typeof BillingAnchorRule];
    /** First payment timing */
    const FirstChargeBehavior: {
        readonly Immediate: "immediate";
        readonly NextAnchor: "next_anchor";
        readonly Prorate: "prorate";
    };
    type FirstChargeBehavior = (typeof FirstChargeBehavior)[keyof typeof FirstChargeBehavior];
    /** Subscription end behavior */
    const EndBehavior: {
        readonly UntilCanceled: "until_canceled";
        readonly FixedPayments: "fixed_payments";
    };
    type EndBehavior = (typeof EndBehavior)[keyof typeof EndBehavior];
}
//# sourceMappingURL=Product.d.ts.map