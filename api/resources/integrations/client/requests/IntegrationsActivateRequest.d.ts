import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         credentials: {
 *             apiKey: "apiKey",
 *             baseUrl: "baseUrl"
 *         }
 *     }
 */
export interface IntegrationsActivateRequest {
    provider: RevKeen.IntegrationsActivateRequestProvider;
    credentials: IntegrationsActivateRequest.Credentials;
    syncIntervalMinutes?: number;
    currency?: string;
    syncEnabled?: boolean;
    syncPatients?: boolean;
    syncProducts?: boolean;
    syncPackages?: boolean;
    syncInvoices?: boolean;
    pushPayments?: boolean;
    autoSendInvoices?: boolean;
    paymentMappings?: IntegrationsActivateRequest.PaymentMappings.Item[];
}
export declare namespace IntegrationsActivateRequest {
    interface Credentials {
        apiKey: string;
        baseUrl: string;
        appName?: string;
        appEmail?: string;
    }
    type PaymentMappings = PaymentMappings.Item[];
    namespace PaymentMappings {
        interface Item {
            id: string;
            revkeenMethod: string;
            practiceHubMethodId: string;
        }
    }
}
//# sourceMappingURL=IntegrationsActivateRequest.d.ts.map