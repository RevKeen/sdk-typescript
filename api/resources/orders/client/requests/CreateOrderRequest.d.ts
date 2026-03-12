/**
 * @example
 *     {
 *         line_items: [{
 *                 description: "description",
 *                 unit_price: 1
 *             }]
 *     }
 */
export interface CreateOrderRequest {
    /** Customer ID (optional for guest orders) */
    customer_id?: string;
    /** Three-letter ISO currency code */
    currency?: string;
    /** Billing type. one_time: Single purchase. recurring: Subscription-based. */
    billing_type?: CreateOrderRequest.BillingType;
    /** Order line items (at least one required) */
    line_items: CreateOrderRequest.LineItems.Item[];
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    notes?: string;
    /** Expiration timestamp for the order */
    expires_at?: string;
    /** ID of the linked invoice (Commercial Truth) */
    invoice_id?: string;
    /** ID of the linked subscription (for recurring fulfillment) */
    subscription_id?: string;
}
export declare namespace CreateOrderRequest {
    /** Billing type. one_time: Single purchase. recurring: Subscription-based. */
    const BillingType: {
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
    };
    type BillingType = (typeof BillingType)[keyof typeof BillingType];
    type LineItems = LineItems.Item[];
    namespace LineItems {
        interface Item {
            /** Product ID (optional for ad-hoc items) */
            product_id?: string;
            description: string;
            quantity?: number;
            /** Unit price in cents */
            unit_price: number;
            /** Custom key-value metadata */
            metadata?: Record<string, unknown>;
        }
    }
}
//# sourceMappingURL=CreateOrderRequest.d.ts.map