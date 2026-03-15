import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         start_date: "2024-01-01",
 *         end_date: "2024-12-31"
 *     }
 */
export interface GetFinanceIncomeRequest {
    /** Start date */
    start_date: string;
    /** End date */
    end_date: string;
    /** Group results by time period */
    group_by?: RevKeen.GetFinanceIncomeRequestGroupBy;
    /** Filter by subscription UUID */
    subscription_id?: string;
    /** Filter by status */
    status?: string;
}
//# sourceMappingURL=GetFinanceIncomeRequest.d.ts.map