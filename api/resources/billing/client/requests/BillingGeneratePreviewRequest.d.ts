/**
 * @example
 *     {
 *         interval: "day"
 *     }
 */
export interface BillingGeneratePreviewRequest {
    interval: BillingGeneratePreviewRequest.Interval;
    intervalCount?: number;
    billingAnchorRule?: BillingGeneratePreviewRequest.BillingAnchorRule;
    billingAnchorDay?: number | null;
    startsAt?: string;
    firstChargeBehavior?: BillingGeneratePreviewRequest.FirstChargeBehavior;
    trialDays?: number;
    endBehavior?: BillingGeneratePreviewRequest.EndBehavior;
    maxPayments?: number | null;
    amountMinor?: number;
    currency?: string;
    previewCount?: number;
    timezone?: string;
}
export declare namespace BillingGeneratePreviewRequest {
    const Interval: {
        readonly Day: "day";
        readonly Week: "week";
        readonly Month: "month";
        readonly Quarter: "quarter";
        readonly HalfYear: "half_year";
        readonly Year: "year";
    };
    type Interval = (typeof Interval)[keyof typeof Interval];
    const BillingAnchorRule: {
        readonly SameDay: "same_day";
        readonly DayOfMonth: "day_of_month";
        readonly LastDay: "last_day";
    };
    type BillingAnchorRule = (typeof BillingAnchorRule)[keyof typeof BillingAnchorRule];
    const FirstChargeBehavior: {
        readonly Immediate: "immediate";
        readonly NextAnchor: "next_anchor";
        readonly Prorate: "prorate";
    };
    type FirstChargeBehavior = (typeof FirstChargeBehavior)[keyof typeof FirstChargeBehavior];
    const EndBehavior: {
        readonly UntilCanceled: "until_canceled";
        readonly FixedPayments: "fixed_payments";
    };
    type EndBehavior = (typeof EndBehavior)[keyof typeof EndBehavior];
}
//# sourceMappingURL=BillingGeneratePreviewRequest.d.ts.map