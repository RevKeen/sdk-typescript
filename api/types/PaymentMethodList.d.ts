import type * as RevKeen from "../index.js";
export interface PaymentMethodList {
    /** Object type, always 'list' */
    object: PaymentMethodList.Object_;
    /** Array of payment methods */
    data: RevKeen.PaymentMethod[];
    /** Whether there are more results available */
    has_more: boolean;
    /** URL for this list resource */
    url: string;
}
export declare namespace PaymentMethodList {
    /** Object type, always 'list' */
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=PaymentMethodList.d.ts.map