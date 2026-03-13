/**
 * @example
 *     {
 *         customerId: "customerId"
 *     }
 */
export interface SubscriptionsCreateRequest {
    customerId: string;
    businessId?: string;
    productId?: string;
    planId?: string;
    priceId?: string;
    paymentMethodId?: string;
    startDate?: string;
    currency?: string;
    quantity?: number;
    trialEnd?: string;
    billingAnchorDay?: number;
    pauseAtPeriodEnd?: boolean;
    cancelAtPeriodEnd?: boolean;
    billingStartsOn?: string;
    billingEndStrategy?: SubscriptionsCreateRequest.BillingEndStrategy;
    billingEndsOn?: string;
    billingMaxCycles?: number;
    prorationMode?: SubscriptionsCreateRequest.ProrationMode;
    metadata?: Record<string, unknown>;
}
export declare namespace SubscriptionsCreateRequest {
    const BillingEndStrategy: {
        readonly Indefinite: "indefinite";
        readonly OnDate: "on_date";
        readonly AfterCycles: "after_cycles";
    };
    type BillingEndStrategy = (typeof BillingEndStrategy)[keyof typeof BillingEndStrategy];
    const ProrationMode: {
        readonly Immediate: "immediate";
        readonly NextInvoice: "next_invoice";
        readonly None: "none";
    };
    type ProrationMode = (typeof ProrationMode)[keyof typeof ProrationMode];
}
//# sourceMappingURL=SubscriptionsCreateRequest.d.ts.map