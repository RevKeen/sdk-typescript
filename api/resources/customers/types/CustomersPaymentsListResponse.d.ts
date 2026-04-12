import type * as RevKeen from "../../../index.js";
export interface CustomersPaymentsListResponse {
    object: CustomersPaymentsListResponse.Object_;
    data: RevKeen.CustomerPayment[];
    /** Whether more results exist beyond this page */
    has_more: boolean;
}
export declare namespace CustomersPaymentsListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=CustomersPaymentsListResponse.d.ts.map