import type * as RevKeen from "../index.js";
/**
 * A paginated list of subscription schedules matching the query filters.
 */
export interface SubscriptionScheduleListResponse {
    object: SubscriptionScheduleListResponse.Object_;
    data: RevKeen.SubscriptionSchedule[];
    has_more: boolean;
    /** The URL for accessing this list */
    url: string;
}
export declare namespace SubscriptionScheduleListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=SubscriptionScheduleListResponse.d.ts.map