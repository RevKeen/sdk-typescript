import type * as RevKeen from "../index.js";
export interface UsageBalanceResponse {
    object: UsageBalanceResponse.Object_;
    meters: RevKeen.UsageBalanceMeter[];
    /** Total estimated charge across all meters */
    total_estimated_amount_minor: number;
    /** Total cost across all meters (null if no cost data) */
    total_cost_minor: number | null;
    /** Currency code */
    currency: string;
}
export declare namespace UsageBalanceResponse {
    const Object_: {
        readonly UsageBalance: "usage_balance";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=UsageBalanceResponse.d.ts.map