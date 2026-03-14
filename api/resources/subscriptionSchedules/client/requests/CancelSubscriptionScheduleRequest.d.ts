/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CancelSubscriptionScheduleRequest {
    /** Schedule ID (sub_sched_xxx or UUID) */
    id: string;
    /** Generate a final invoice immediately */
    invoice_now?: boolean;
    /** Prorate final invoice */
    prorate?: boolean;
}
//# sourceMappingURL=CancelSubscriptionScheduleRequest.d.ts.map