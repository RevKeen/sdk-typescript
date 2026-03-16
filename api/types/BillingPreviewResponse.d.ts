export interface BillingPreviewResponse {
    data: BillingPreviewResponse.Data;
}
export declare namespace BillingPreviewResponse {
    interface Data {
        items: Data.Items.Item[];
        summary: string;
        totalAmountMinor: number;
        firstChargeDate: string;
        trialEndDate: string | null;
        scheduleEndDate: string | null;
        timezone: string;
    }
    namespace Data {
        type Items = Items.Item[];
        namespace Items {
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
//# sourceMappingURL=BillingPreviewResponse.d.ts.map