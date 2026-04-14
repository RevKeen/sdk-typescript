/**
 * A checkout session represents a customer's intent to pay.
 */
export interface CheckoutSession {
    id: string;
    object: CheckoutSession.Object_;
    status: string;
    mode: string | null;
    amount_total: number | null;
    currency: string | null;
    customer_id: string | null;
    payment_intent_id: string | null;
    invoice_id: string | null;
    subscription_id: string | null;
    url: string | null;
    success_url: string | null;
    cancel_url: string | null;
    expires_at: string | null;
    created_at: string | null;
    allowed_methods: string[];
    selected_method: string | null;
}
export declare namespace CheckoutSession {
    const Object_: {
        readonly CheckoutSession: "checkout_session";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=CheckoutSession.d.ts.map