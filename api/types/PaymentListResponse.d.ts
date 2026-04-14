import type * as RevKeen from "../index.js";
/**
 * A paginated list of payments matching the query filters.
 */
export interface PaymentListResponse {
    object: PaymentListResponse.Object_;
    data: RevKeen.Payment[];
    has_more: boolean;
    total_count?: number;
}
export declare namespace PaymentListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=PaymentListResponse.d.ts.map