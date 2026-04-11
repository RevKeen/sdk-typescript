/**
 * @example
 *     {
 *         id: "id",
 *         mode: "immediately"
 *     }
 */
export interface CancelSubscriptionInput {
    /** Subscription UUID */
    id: string;
    /** Cancel mode: "immediately" revokes access now, "period_end" schedules cancellation at billing period end */
    mode: CancelSubscriptionInput.Mode;
    /** Optional reason for cancellation */
    reason?: string;
}
export declare namespace CancelSubscriptionInput {
    /** Cancel mode: "immediately" revokes access now, "period_end" schedules cancellation at billing period end */
    const Mode: {
        readonly Immediately: "immediately";
        readonly PeriodEnd: "period_end";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
}
//# sourceMappingURL=CancelSubscriptionInput.d.ts.map