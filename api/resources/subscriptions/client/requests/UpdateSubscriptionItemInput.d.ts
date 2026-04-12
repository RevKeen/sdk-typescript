/**
 * @example
 *     {
 *         subscriptionId: "subscriptionId",
 *         itemId: "itemId"
 *     }
 */
export interface UpdateSubscriptionItemInput {
    /** Subscription UUID */
    subscriptionId: string;
    /** Item UUID */
    itemId: string;
    /** Item quantity */
    quantity?: number;
    /** Item description */
    description?: string;
    /** Unit price in cents */
    unit_amount_minor?: number;
    /** Determines if orders are created on renewal */
    fulfillment_type?: UpdateSubscriptionItemInput.FulfillmentType;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace UpdateSubscriptionItemInput {
    /** Determines if orders are created on renewal */
    const FulfillmentType: {
        readonly None: "none";
        readonly Physical: "physical";
        readonly Digital: "digital";
    };
    type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType];
}
//# sourceMappingURL=UpdateSubscriptionItemInput.d.ts.map