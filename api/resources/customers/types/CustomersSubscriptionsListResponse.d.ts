import type * as RevKeen from "../../../index.js";
export interface CustomersSubscriptionsListResponse {
    object: CustomersSubscriptionsListResponse.Object_;
    data: RevKeen.CustomerSubscription[];
    /** Whether more results exist beyond this page */
    has_more: boolean;
}
export declare namespace CustomersSubscriptionsListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=CustomersSubscriptionsListResponse.d.ts.map