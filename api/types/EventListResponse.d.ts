import type * as RevKeen from "../index.js";
/**
 * A paginated list of events matching the query filters.
 */
export interface EventListResponse {
    object: EventListResponse.Object_;
    data: RevKeen.Event[];
    has_more: boolean;
    /** The URL for accessing this list */
    url: string;
}
export declare namespace EventListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=EventListResponse.d.ts.map