import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateSubscriptionScheduleRequest {
    /** Schedule ID (sub_sched_xxx or UUID) */
    id: string;
    /** Replace all phases */
    phases?: RevKeen.SchedulePhase[];
    /** What happens when all phases complete */
    end_behavior?: UpdateSubscriptionScheduleRequest.EndBehavior;
    /** Proration behavior when updating phases */
    proration_behavior?: UpdateSubscriptionScheduleRequest.ProrationBehavior;
    /** Custom metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace UpdateSubscriptionScheduleRequest {
    /** What happens when all phases complete */
    const EndBehavior: {
        readonly Cancel: "cancel";
        readonly Release: "release";
    };
    type EndBehavior = (typeof EndBehavior)[keyof typeof EndBehavior];
    /** Proration behavior when updating phases */
    const ProrationBehavior: {
        readonly CreateProrations: "create_prorations";
        readonly None: "none";
        readonly AlwaysInvoice: "always_invoice";
    };
    type ProrationBehavior = (typeof ProrationBehavior)[keyof typeof ProrationBehavior];
}
//# sourceMappingURL=UpdateSubscriptionScheduleRequest.d.ts.map