/** Filter by status */
export declare const OrdersListRequestStatus: {
    readonly Draft: "draft";
    readonly Pending: "pending";
    readonly Paid: "paid";
    readonly PartiallyPaid: "partially_paid";
    readonly Refunded: "refunded";
    readonly Canceled: "canceled";
    readonly Fulfilled: "fulfilled";
};
export type OrdersListRequestStatus = (typeof OrdersListRequestStatus)[keyof typeof OrdersListRequestStatus];
//# sourceMappingURL=OrdersListRequestStatus.d.ts.map