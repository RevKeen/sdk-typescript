/**
 * @example
 *     {
 *         id: "id",
 *         newQuantity: 1
 *     }
 */
export interface SubscriptionsChangeQuantityRequest {
    /** Subscription UUID */
    id: string;
    newQuantity: number;
    prorationBehavior?: SubscriptionsChangeQuantityRequest.ProrationBehavior;
    effectiveDate?: string;
    reason?: string;
}
export declare namespace SubscriptionsChangeQuantityRequest {
    const ProrationBehavior: {
        readonly InvoiceImmediately: "invoice_immediately";
        readonly NextInvoice: "next_invoice";
        readonly None: "none";
    };
    type ProrationBehavior = (typeof ProrationBehavior)[keyof typeof ProrationBehavior];
}
//# sourceMappingURL=SubscriptionsChangeQuantityRequest.d.ts.map