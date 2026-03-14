import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         id: "pm_1a2b3c4d5e6f"
 *     }
 */
export interface UpdatePaymentMethodRequest {
    /** Payment Method ID (UUID or public ID pm_xxx) */
    id: string;
    billing_details?: RevKeen.BillingDetails | null;
    /** Custom metadata to attach */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=UpdatePaymentMethodRequest.d.ts.map