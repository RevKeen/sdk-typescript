import type * as RevKeen from "../index.js";
export interface PaymentIntentListResponse {
    object: PaymentIntentListResponse.Object_;
    data: RevKeen.PaymentIntent[];
    has_more: boolean;
    /** The URL for accessing this list */
    url: string;
}
export declare namespace PaymentIntentListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=PaymentIntentListResponse.d.ts.map