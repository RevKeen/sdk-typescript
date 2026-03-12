import type * as RevKeen from "../../../index.js";
export interface CustomersInvoicesListResponse {
    object: CustomersInvoicesListResponse.Object_;
    data: RevKeen.CustomerInvoice[];
    has_more: boolean;
}
export declare namespace CustomersInvoicesListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=CustomersInvoicesListResponse.d.ts.map