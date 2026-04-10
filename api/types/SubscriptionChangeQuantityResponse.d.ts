/**
 * The subscription after a quantity change, with proration details if applicable.
 */
export interface SubscriptionChangeQuantityResponse {
    subscription: SubscriptionChangeQuantityResponse.Subscription;
    /** Proration details */
    proration?: Record<string, unknown>;
    previousQuantity?: number;
    invoiceCreated: boolean;
}
export declare namespace SubscriptionChangeQuantityResponse {
    interface Subscription {
        id: string;
        merchantId: string;
        customerId: string;
        productId?: string;
        priceId?: string;
        planId?: string;
        status: Subscription.Status;
        quantity: number;
        amountMinor: number;
        currency: string;
        billingInterval: Subscription.BillingInterval;
        currentPeriodStart: string;
        currentPeriodEnd: string;
        trialEnd?: string;
        canceledAt?: string;
        createdAt: string;
        updatedAt: string;
        dunning?: Subscription.Dunning | null;
    }
    namespace Subscription {
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
//# sourceMappingURL=SubscriptionChangeQuantityResponse.d.ts.map