import type * as RevKeen from "../index.js";
/**
 * A paginated list of orders matching the query filters.
 */
export interface OrderListResponse {
    object: OrderListResponse.Object_;
    data: RevKeen.Order[];
    has_more: boolean;
    total_count?: number;
}
export declare namespace OrderListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=OrderListResponse.d.ts.map