/**
 * A paginated list of subscriptions matching the query filters.
 */
export interface SubscriptionListResponse {
    data: SubscriptionListResponse.Data.Item[];
    pagination: SubscriptionListResponse.Pagination;
}
export declare namespace SubscriptionListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            merchantId: string;
            customerId: string;
            productId?: string;
            priceId?: string;
            planId?: string;
            status: Item.Status;
            quantity: number;
            amountMinor: number;
            currency: string;
            billingInterval: Item.BillingInterval;
            currentPeriodStart: string;
            currentPeriodEnd: string;
            trialEnd?: string;
            canceledAt?: string;
            createdAt: string;
            updatedAt: string;
            dunning?: Item.Dunning | null;
        }
        namespace Item {
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
    interface Pagination {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }
}
//# sourceMappingURL=SubscriptionListResponse.d.ts.map