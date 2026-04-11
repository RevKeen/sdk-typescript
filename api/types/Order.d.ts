import type * as RevKeen from "../index.js";
/**
 * An order represents a one-off purchase with lifecycle operations: create, pay, cancel, and fulfill.
 */
export interface Order {
    /** Unique identifier for the order */
    id: string;
    /** Object type */
    object: Order.Object_;
    /** Public-facing order ID */
    public_id: string;
    /** ID of the customer */
    customer_id?: string | null;
    /** Order status. draft: Being built. pending: Awaiting payment. paid: Fully paid. partially_paid: Partial payment received. refunded: Refunded. canceled: Canceled. fulfilled: Shipped/delivered. */
    status: Order.Status;
    /** Billing type. one_time: Single purchase. recurring: Subscription-based. */
    billing_type: Order.BillingType;
    /** Fulfillment status for physical goods. */
    fulfillment_status?: Order.FulfillmentStatus | null;
    /** Three-letter ISO currency code */
    currency: string;
    /** Subtotal in cents */
    subtotal: number;
    /** Total discount in cents */
    discount: number;
    /** Total tax in cents */
    tax: number;
    /** Total amount in cents */
    total: number;
    /** Amount paid in cents */
    amount_paid: number;
    /** Amount refunded in cents */
    amount_refunded: number;
    /** Amount still due in cents */
    amount_due: number;
    line_items?: RevKeen.OrderLineItem[];
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    notes?: string | null;
    /** ID of the linked invoice (Commercial Truth) */
    invoice_id?: string | null;
    /** ID of the linked subscription (for recurring fulfillment) */
    subscription_id?: string | null;
    created_at: string;
    updated_at: string;
    paid_at?: string | null;
    canceled_at?: string | null;
    fulfilled_at?: string | null;
    expires_at?: string | null;
}
export declare namespace Order {
    /** Object type */
    const Object_: {
        readonly Order: "order";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Order status. draft: Being built. pending: Awaiting payment. paid: Fully paid. partially_paid: Partial payment received. refunded: Refunded. canceled: Canceled. fulfilled: Shipped/delivered. */
    const Status: {
        readonly Draft: "draft";
        readonly Pending: "pending";
        readonly Paid: "paid";
        readonly PartiallyPaid: "partially_paid";
        readonly Refunded: "refunded";
        readonly Canceled: "canceled";
        readonly Fulfilled: "fulfilled";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** Billing type. one_time: Single purchase. recurring: Subscription-based. */
    const BillingType: {
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
    };
    type BillingType = (typeof BillingType)[keyof typeof BillingType];
    /** Fulfillment status for physical goods. */
    const FulfillmentStatus: {
        readonly Unfulfilled: "unfulfilled";
        readonly Partial: "partial";
        readonly Fulfilled: "fulfilled";
        readonly Returned: "returned";
    };
    type FulfillmentStatus = (typeof FulfillmentStatus)[keyof typeof FulfillmentStatus];
}
//# sourceMappingURL=Order.d.ts.map