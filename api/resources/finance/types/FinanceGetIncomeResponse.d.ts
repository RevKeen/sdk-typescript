export interface FinanceGetIncomeResponse {
    summary: FinanceGetIncomeResponse.Summary;
    /** Income report rows */
    rows: Record<string, unknown>[];
}
export declare namespace FinanceGetIncomeResponse {
    interface Summary {
        total_gross_cents: number;
        total_fees_cents: number;
        total_net_cents: number;
        total_tx_count: number;
        total_refund_count: number;
    }
}
//# sourceMappingURL=FinanceGetIncomeResponse.d.ts.map