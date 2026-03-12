/** Filter by status */
export declare const PaymentsListRequestStatus: {
    readonly Pending: "pending";
    readonly Authorized: "authorized";
    readonly Captured: "captured";
    readonly Succeeded: "succeeded";
    readonly Failed: "failed";
    readonly Voided: "voided";
    readonly Refunded: "refunded";
    readonly PartiallyRefunded: "partially_refunded";
};
export type PaymentsListRequestStatus = (typeof PaymentsListRequestStatus)[keyof typeof PaymentsListRequestStatus];
//# sourceMappingURL=PaymentsListRequestStatus.d.ts.map