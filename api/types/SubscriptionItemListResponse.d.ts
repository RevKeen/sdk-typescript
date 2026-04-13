import type * as RevKeen from "../index.js";
/**
 * A list of line items in a subscription.
 */
export interface SubscriptionItemListResponse {
    data: RevKeen.SubscriptionItem[];
    meta: SubscriptionItemListResponse.Meta;
}
export declare namespace SubscriptionItemListResponse {
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=SubscriptionItemListResponse.d.ts.map