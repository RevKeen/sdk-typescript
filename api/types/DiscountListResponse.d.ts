import type * as RevKeen from "../index.js";
/**
 * A paginated list of discounts matching the query filters.
 */
export interface DiscountListResponse {
    data: RevKeen.Discount[];
    meta: DiscountListResponse.Meta;
}
export declare namespace DiscountListResponse {
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=DiscountListResponse.d.ts.map