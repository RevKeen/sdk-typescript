/**
 * @example
 *     {
 *         type: "checkout.session.completed"
 *     }
 */
export interface CreateTestEventRequest {
    /** The type of test event to create */
    type: CreateTestEventRequest.Type;
}
export declare namespace CreateTestEventRequest {
    /** The type of test event to create */
    const Type: {
        readonly CheckoutSessionCompleted: "checkout.session.completed";
        readonly CheckoutSessionExpired: "checkout.session.expired";
        readonly CheckoutSessionAsyncPaymentSucceeded: "checkout.session.async_payment_succeeded";
        readonly CheckoutSessionAsyncPaymentFailed: "checkout.session.async_payment_failed";
        readonly InvoiceCreated: "invoice.created";
        readonly InvoiceFinalized: "invoice.finalized";
        readonly InvoicePaid: "invoice.paid";
        readonly InvoicePaymentFailed: "invoice.payment_failed";
        readonly InvoiceVoided: "invoice.voided";
        readonly InvoiceMarkedUncollectible: "invoice.marked_uncollectible";
        readonly InvoiceUpcoming: "invoice.upcoming";
        readonly InvoiceSent: "invoice.sent";
        readonly PaymentSucceeded: "payment.succeeded";
        readonly PaymentFailed: "payment.failed";
        readonly PaymentRefunded: "payment.refunded";
        readonly PaymentDisputed: "payment.disputed";
        readonly PaymentIntentCreated: "payment_intent.created";
        readonly PaymentIntentSucceeded: "payment_intent.succeeded";
        readonly PaymentIntentPaymentFailed: "payment_intent.payment_failed";
        readonly PaymentIntentCanceled: "payment_intent.canceled";
        readonly PaymentIntentRequiresAction: "payment_intent.requires_action";
        readonly PaymentMethodAttached: "payment_method.attached";
        readonly PaymentMethodDetached: "payment_method.detached";
        readonly PaymentMethodUpdated: "payment_method.updated";
        readonly SubscriptionCreated: "subscription.created";
        readonly SubscriptionUpdated: "subscription.updated";
        readonly SubscriptionCanceled: "subscription.canceled";
        readonly SubscriptionPaused: "subscription.paused";
        readonly SubscriptionResumed: "subscription.resumed";
        readonly SubscriptionTrialWillEnd: "subscription.trial_will_end";
        readonly SubscriptionRenewed: "subscription.renewed";
        readonly CustomerCreated: "customer.created";
        readonly CustomerUpdated: "customer.updated";
        readonly CustomerDeleted: "customer.deleted";
        readonly RefundCreated: "refund.created";
        readonly RefundUpdated: "refund.updated";
        readonly RefundFailed: "refund.failed";
        readonly DisputeCreated: "dispute.created";
        readonly DisputeUpdated: "dispute.updated";
        readonly DisputeClosed: "dispute.closed";
        readonly OrderCreated: "order.created";
        readonly OrderPaid: "order.paid";
        readonly OrderCanceled: "order.canceled";
    };
    type Type = (typeof Type)[keyof typeof Type];
}
//# sourceMappingURL=CreateTestEventRequest.d.ts.map