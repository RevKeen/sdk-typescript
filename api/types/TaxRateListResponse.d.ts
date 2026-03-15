import type * as RevKeen from "../index.js";
export interface TaxRateListResponse {
    object: TaxRateListResponse.Object_;
    data: RevKeen.TaxRate[];
    has_more: boolean;
    total_count?: number;
}
export declare namespace TaxRateListResponse {
    const Object_: {
        readonly List: "list";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=TaxRateListResponse.d.ts.map