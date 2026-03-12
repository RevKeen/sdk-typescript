export interface SubscriptionPreviewRenewalResponse {
    data: SubscriptionPreviewRenewalResponse.Data;
}
export declare namespace SubscriptionPreviewRenewalResponse {
    interface Data {
        subscriptionId: string;
        currentPeriodEnd: string;
        upcomingRenewals: Data.UpcomingRenewals.Item[];
        nextInvoiceAmountMinor: number;
        currency: string;
    }
    namespace Data {
        type UpcomingRenewals = UpcomingRenewals.Item[];
        namespace UpcomingRenewals {
            interface Item {
                sequence: number;
                date: string;
                formattedDate: string;
                dayName: string;
                amountMinor: number;
                formattedAmount: string;
                isTrialEnd?: boolean;
                isFirstCharge?: boolean;
                isFinalPayment?: boolean;
            }
        }
    }
}
//# sourceMappingURL=SubscriptionPreviewRenewalResponse.d.ts.map