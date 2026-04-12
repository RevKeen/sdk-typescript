/** Filter by transaction type */
export declare const TransactionsListRequestType: {
    readonly Sale: "sale";
    readonly Refund: "refund";
    readonly Void: "void";
    readonly Capture: "capture";
    readonly Dispute: "dispute";
    readonly Adjustment: "adjustment";
};
export type TransactionsListRequestType = (typeof TransactionsListRequestType)[keyof typeof TransactionsListRequestType];
//# sourceMappingURL=TransactionsListRequestType.d.ts.map