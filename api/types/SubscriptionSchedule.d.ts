import type * as RevKeen from "../index.js";
/**
 * A subscription schedule defines future changes to a subscription. Each phase specifies different pricing, quantities, or plans that take effect at specified dates.
 */
export interface SubscriptionSchedule {
    /** Public schedule ID (sub_sched_xxx) */
    id: string;
    /** Object type */
    object: SubscriptionSchedule.Object_;
    /** Schedule status. not_started: Scheduled for future. active: Currently executing phases. completed: All phases finished. canceled: Manually canceled. released: Detached from subscription. */
    status: SubscriptionSchedule.Status;
    /** Customer ID */
    customer: string | null;
    /** Linked subscription ID */
    subscription: string | null;
    /** Current phase being executed */
    current_phase: SubscriptionSchedule.CurrentPhase | null;
    /** All phases in the schedule */
    phases: RevKeen.SchedulePhase[];
    /** What happens when the schedule completes. cancel: Cancel the subscription. release: Make subscription standalone. */
    end_behavior: SubscriptionSchedule.EndBehavior;
    /** When released (Unix timestamp) */
    released_at?: number | null;
    /** Subscription ID at release time */
    released_subscription?: string | null;
    /** Custom metadata */
    metadata?: Record<string, unknown>;
    /** Unix timestamp of creation */
    created: number;
    /** Whether in live mode */
    livemode: boolean;
}
export declare namespace SubscriptionSchedule {
    /** Object type */
    const Object_: {
        readonly SubscriptionSchedule: "subscription_schedule";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Schedule status. not_started: Scheduled for future. active: Currently executing phases. completed: All phases finished. canceled: Manually canceled. released: Detached from subscription. */
    const Status: {
        readonly NotStarted: "not_started";
        readonly Active: "active";
        readonly Completed: "completed";
        readonly Canceled: "canceled";
        readonly Released: "released";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /**
     * Current phase being executed
     */
    interface CurrentPhase {
        /** Phase start (Unix timestamp) */
        start_date: number;
        /** Phase end (Unix timestamp) */
        end_date: number | null;
    }
    /** What happens when the schedule completes. cancel: Cancel the subscription. release: Make subscription standalone. */
    const EndBehavior: {
        readonly Cancel: "cancel";
        readonly Release: "release";
    };
    type EndBehavior = (typeof EndBehavior)[keyof typeof EndBehavior];
}
//# sourceMappingURL=SubscriptionSchedule.d.ts.map