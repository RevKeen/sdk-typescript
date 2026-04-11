/**
 * A line item within a subscription, representing a specific product and price that the customer is billed for each cycle.
 */
export interface SubscriptionItem {
    id: string;
    subscription_id: string;
    product_id: string | null;
    price_id: string | null;
    description: string | null;
    /** Item quantity */
    quantity: number;
    currency: string;
    /** Unit price in cents */
    unit_amount_minor: number;
    /** none: service (no order), physical: creates shipping order, digital: creates download order */
    fulfillment_type: SubscriptionItem.FulfillmentType;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    created_at: string;
    updated_at: string;
}
export declare namespace SubscriptionItem {
    /** none: service (no order), physical: creates shipping order, digital: creates download order */
    const FulfillmentType: {
        readonly None: "none";
        readonly Physical: "physical";
        readonly Digital: "digital";
    };
    type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType];
}
//# sourceMappingURL=SubscriptionItem.d.ts.map