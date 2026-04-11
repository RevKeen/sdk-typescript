/**
 * Billing details associated with the payment method
 */
export interface BillingDetails {
    /** Full name on the payment method */
    name: string | null;
    /** Email address */
    email: string | null;
    /** Phone number */
    phone: string | null;
    /** Billing address */
    address: BillingDetails.Address | null;
}
export declare namespace BillingDetails {
    /**
     * Billing address
     */
    interface Address {
        line1: string | null;
        line2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
    }
}
//# sourceMappingURL=BillingDetails.d.ts.map