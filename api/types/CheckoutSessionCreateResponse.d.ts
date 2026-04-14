/**
 * The created checkout session with the URL to redirect the customer to.
 */
export interface CheckoutSessionCreateResponse {
    data: CheckoutSessionCreateResponse.Data;
    requestId: string;
}
export declare namespace CheckoutSessionCreateResponse {
    interface Data {
        id: string;
        url: string;
        publicToken: string;
        amountMinor?: number;
        currency: string;
        customerId?: string;
        expiresAt: string;
        allowedMethods?: string[];
        selectedMethod?: string | null;
    }
}
//# sourceMappingURL=CheckoutSessionCreateResponse.d.ts.map