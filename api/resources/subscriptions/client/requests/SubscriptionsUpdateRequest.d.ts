/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface SubscriptionsUpdateRequest {
    /** Subscription UUID */
    id: string;
    status?: SubscriptionsUpdateRequest.Status;
    amountMinor?: number;
    quantity?: number;
    nextBillingDate?: string;
    billingAnchorDay?: number;
    pauseAtPeriodEnd?: boolean;
    cancelAtPeriodEnd?: boolean;
    metadata?: Record<string, unknown>;
}
export declare namespace SubscriptionsUpdateRequest {
    const Status: {
        readonly Trialing: "trialing";
        readonly Active: "active";
        readonly PastDue: "past_due";
        readonly Paused: "paused";
        readonly Canceled: "canceled";
        readonly Expired: "expired";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=SubscriptionsUpdateRequest.d.ts.map