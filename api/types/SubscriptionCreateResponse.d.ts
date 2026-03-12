export interface SubscriptionCreateResponse {
    data: SubscriptionCreateResponse.Data;
}
export declare namespace SubscriptionCreateResponse {
    interface Data {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: Data.Status;
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: Data.BillingInterval;
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: Data.Dunning | null;
    }
    namespace Data {
        const Status: {
            readonly Trialing: "trialing";
            readonly Active: "active";
            readonly PastDue: "past_due";
            readonly Paused: "paused";
            readonly Canceled: "canceled";
            readonly Expired: "expired";
        };
        type Status = (typeof Status)[keyof typeof Status];
        const BillingInterval: {
            readonly Day: "day";
            readonly Week: "week";
            readonly Month: "month";
            readonly Year: "year";
        };
        type BillingInterval = (typeof BillingInterval)[keyof typeof BillingInterval];
        interface Dunning {
            isInDunning: boolean;
            phase: number | null;
            phaseLabel: string | null;
            phaseSeverity: Dunning.PhaseSeverity | null;
            retryCount: number;
            totalPossibleRetries: number;
            nextRetryAt: string | null;
            daysInDunning: number;
            accessRestricted: boolean;
        }
        namespace Dunning {
            const PhaseSeverity: {
                readonly Info: "info";
                readonly Warning: "warning";
                readonly Critical: "critical";
            };
            type PhaseSeverity = (typeof PhaseSeverity)[keyof typeof PhaseSeverity];
        }
    }
}
//# sourceMappingURL=SubscriptionCreateResponse.d.ts.map