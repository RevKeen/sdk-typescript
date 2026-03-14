export interface AnalyticsCheckoutAbandonmentListResponse {
    alerts: AnalyticsCheckoutAbandonmentListResponse.Alerts.Item[];
    total: number;
    page: number;
    pageSize: number;
}
export declare namespace AnalyticsCheckoutAbandonmentListResponse {
    type Alerts = Alerts.Item[];
    namespace Alerts {
        interface Item {
            id: string;
            checkoutSessionId: string;
            customerId: string | null;
            customerEmail: string | null;
            severity: string;
            status: string;
            cartValueCents: number | null;
            currency: string;
            lastStepReached: string | null;
            enteredEmail: boolean;
            enteredPaymentInfo: boolean;
            paymentAttempted: boolean;
            timeSpentSeconds: number | null;
            abandonedAt: string;
            detectedAt: string;
            recoveryEmailSent: boolean;
            webhookNotified: boolean;
        }
    }
}
//# sourceMappingURL=AnalyticsCheckoutAbandonmentListResponse.d.ts.map