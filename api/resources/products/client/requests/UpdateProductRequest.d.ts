/**
 * @example
 *     {
 *         id: "prod_123"
 *     }
 */
export interface UpdateProductRequest {
    id: string;
    name?: string;
    description?: string | null;
    amount_minor?: number;
    currency?: string;
    interval?: string | null;
    interval_count?: number | null;
    trial_days?: number;
    is_active?: boolean;
    is_archived?: boolean;
    /** Fulfillment type for the product. */
    fulfillment_type?: UpdateProductRequest.FulfillmentType;
    /** How billing dates are calculated. same_day: Bill on same day as start. day_of_month: Bill on specific day (1-31). last_day: Bill on last day of month. */
    billing_anchor_rule?: UpdateProductRequest.BillingAnchorRule;
    billing_anchor_day?: number | null;
    /** When first payment is collected. immediate: Charge on start. next_anchor: Charge on first scheduled date. prorate: Prorate until first date. */
    first_charge_behavior?: UpdateProductRequest.FirstChargeBehavior;
    /** How subscription ends. until_canceled: Runs forever. fixed_payments: Ends after N billing cycles. */
    end_behavior?: UpdateProductRequest.EndBehavior;
    max_payments?: number | null;
    /** Arbitrary key-value metadata for the product */
    metadata?: Record<string, unknown>;
}
export declare namespace UpdateProductRequest {
    /** Fulfillment type for the product. */
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
//# sourceMappingURL=UpdateProductRequest.d.ts.map