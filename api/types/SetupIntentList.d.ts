import type * as RevKeen from "../index.js";
export interface SetupIntentList {
    /** Object type, always 'list' */
    object: SetupIntentList.Object_;
    /** Array of setup intents */
    data: RevKeen.SetupIntent[];
    /** Whether there are more results available */
    has_more: boolean;
    /** Total count of matching setup intents */
    total_count: number;
    /** URL for this list resource */
    url: string;
}
export declare namespace SetupIntentList {
    /** Object type, always 'list' */
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=SetupIntentList.d.ts.map