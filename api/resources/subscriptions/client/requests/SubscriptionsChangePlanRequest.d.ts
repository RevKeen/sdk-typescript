/**
 * @example
 *     {
 *         id: "id",
 *         newPlanId: "newPlanId"
 *     }
 */
export interface SubscriptionsChangePlanRequest {
    /** Subscription UUID */
    id: string;
    newPlanId: string;
    prorationBehavior?: SubscriptionsChangePlanRequest.ProrationBehavior;
    effectiveDate?: string;
    reason?: string;
}
export declare namespace SubscriptionsChangePlanRequest {
    const ProrationBehavior: {
        readonly InvoiceImmediately: "invoice_immediately";
        readonly NextInvoice: "next_invoice";
        readonly None: "none";
    };
    type ProrationBehavior = (typeof ProrationBehavior)[keyof typeof ProrationBehavior];
}
//# sourceMappingURL=SubscriptionsChangePlanRequest.d.ts.map