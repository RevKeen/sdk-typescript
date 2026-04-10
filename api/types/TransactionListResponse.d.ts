import type * as RevKeen from "../index.js";
/**
 * A paginated list of transactions matching the query filters.
 */
export interface TransactionListResponse {
    object: TransactionListResponse.Object_;
    data: RevKeen.Transaction[];
    has_more: boolean;
    total_count?: number;
}
export declare namespace TransactionListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=TransactionListResponse.d.ts.map