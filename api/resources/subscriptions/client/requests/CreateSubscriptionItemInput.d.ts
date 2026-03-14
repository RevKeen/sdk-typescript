/**
 * @example
 *     {
 *         subscriptionId: "subscriptionId",
 *         currency: "USD",
 *         unit_amount_minor: 2999
 *     }
 */
export interface CreateSubscriptionItemInput {
    /** Subscription UUID */
    subscriptionId: string;
    /** Product UUID to link to this item */
    product_id?: string;
    /** Price UUID to link to this item */
    price_id?: string;
    /** Item description */
    description?: string;
    /** Item quantity */
    quantity?: number;
    /** ISO 4217 currency code */
    currency: string;
    /** Unit price in cents */
    unit_amount_minor: number;
    /** Determines if orders are created on renewal */
    fulfillment_type?: CreateSubscriptionItemInput.FulfillmentType;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace CreateSubscriptionItemInput {
    /** Determines if orders are created on renewal */
    const FulfillmentType: {
        readonly None: "none";
        readonly Physical: "physical";
        readonly Digital: "digital";
    };
    type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType];
}
//# sourceMappingURL=CreateSubscriptionItemInput.d.ts.map