import type * as RevKeen from "../index.js";
/**
 * A paginated list of prices matching the query filters.
 */
export interface PriceListResponse {
    object: PriceListResponse.Object_;
    data: RevKeen.Price[];
    has_more: boolean;
    total_count?: number;
}
export declare namespace PriceListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=PriceListResponse.d.ts.map