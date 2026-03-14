import type * as RevKeen from "../../../index.js";
export interface CustomersOrdersListResponse {
    object: CustomersOrdersListResponse.Object_;
    data: RevKeen.CustomerOrder[];
    has_more: boolean;
}
export declare namespace CustomersOrdersListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=CustomersOrdersListResponse.d.ts.map