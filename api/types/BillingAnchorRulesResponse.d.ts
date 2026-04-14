/**
 * Billing anchor rules that determine how billing dates are calculated for different start modes and intervals.
 */
export interface BillingAnchorRulesResponse {
    data: BillingAnchorRulesResponse.Data.Item[];
}
export declare namespace BillingAnchorRulesResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            value: string;
            label: string;
            description: string;
            requiresAnchorDay: boolean;
        }
    }
}
//# sourceMappingURL=BillingAnchorRulesResponse.d.ts.map