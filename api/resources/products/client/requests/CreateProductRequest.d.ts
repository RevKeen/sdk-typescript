/**
 * @example
 *     {
 *         product_id: "product_id",
 *         name: "name",
 *         kind: "subscription",
 *         pricing_model: "one_time",
 *         amount_minor: 1
 *     }
 */
export interface CreateProductRequest {
    product_id: string;
    name: string;
    description?: string | null;
    kind: CreateProductRequest.Kind;
    pricing_model: CreateProductRequest.PricingModel;
    amount_minor: number;
    currency?: string;
    interval?: string | null;
    interval_count?: number | null;
    trial_days?: number;
    usage_meter_id?: string | null;
    slug?: string;
    /** Fulfillment type for the product. Defaults to 'none' (service). */
    fulfillment_type?: CreateProductRequest.FulfillmentType;
    /** How billing dates are calculated. same_day: Bill on same day as start. day_of_month: Bill on specific day (1-31). last_day: Bill on last day of month. */
    billing_anchor_rule?: CreateProductRequest.BillingAnchorRule;
    /** Day of month (1-31) when billing_anchor_rule is 'day_of_month' */
    billing_anchor_day?: number | null;
    /** When first payment is collected. immediate: Charge on start. next_anchor: Charge on first scheduled date. prorate: Prorate until first date. */
    first_charge_behavior?: CreateProductRequest.FirstChargeBehavior;
    /** How subscription ends. until_canceled: Runs forever. fixed_payments: Ends after N billing cycles. */
    end_behavior?: CreateProductRequest.EndBehavior;
    /** Max billing cycles when end_behavior is 'fixed_payments' */
    max_payments?: number | null;
    /** Arbitrary key-value metadata for the product */
    metadata?: Record<string, unknown>;
}
export declare namespace CreateProductRequest {
    const Kind: {
        readonly Subscription: "subscription";
        readonly OneTime: "one_time";
        readonly Usage: "usage";
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
    const PricingModel: {
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
        readonly Usage: "usage";
    };
    type PricingModel = (typeof PricingModel)[keyof typeof PricingModel];
    /** Fulfillment type for the product. Defaults to 'none' (service). */
    const FulfillmentType: {
        readonly None: "none";
        readonly Digital: "digital";
        readonly Physical: "physical";
    };
    type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType];
    /** How billing dates are calculated. same_day: Bill on same day as start. day_of_month: Bill on specific day (1-31). last_day: Bill on last day of month. */
    const BillingAnchorRule: {
        readonly SameDay: "same_day";
        readonly DayOfMonth: "day_of_month";
        readonly LastDay: "last_day";
    };
    type BillingAnchorRule = (typeof BillingAnchorRule)[keyof typeof BillingAnchorRule];
    /** When first payment is collected. immediate: Charge on start. next_anchor: Charge on first scheduled date. prorate: Prorate until first date. */
    const FirstChargeBehavior: {
        readonly Immediate: "immediate";
        readonly NextAnchor: "next_anchor";
        readonly Prorate: "prorate";
    };
    type FirstChargeBehavior = (typeof FirstChargeBehavior)[keyof typeof FirstChargeBehavior];
    /** How subscription ends. until_canceled: Runs forever. fixed_payments: Ends after N billing cycles. */
    const EndBehavior: {
        readonly UntilCanceled: "until_canceled";
        readonly FixedPayments: "fixed_payments";
    };
    type EndBehavior = (typeof EndBehavior)[keyof typeof EndBehavior];
}
//# sourceMappingURL=CreateProductRequest.d.ts.map