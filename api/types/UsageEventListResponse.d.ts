/**
 * A paginated list of usage events matching the query filters.
 */
export interface UsageEventListResponse {
    object: UsageEventListResponse.Object_;
    /** Array of usage event objects */
    data: Record<string, unknown>[];
    has_more: boolean;
}
export declare namespace UsageEventListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=UsageEventListResponse.d.ts.map