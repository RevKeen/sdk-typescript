import type * as RevKeen from "../index.js";
/**
 * A saved payment instrument (card, bank account, etc.) attached to a customer for future charges.
 */
export interface PaymentMethod {
    /** Unique identifier for the payment method */
    id: string;
    /** Object type, always 'payment_method' */
    object: PaymentMethod.Object_;
    /** Public ID visible in API responses (pm_xxx format) */
    public_id: string | null;
    /** The type of payment method */
    type: PaymentMethod.Type;
    /** The status of the payment method */
    status: PaymentMethod.Status;
    /** ID of the customer this payment method belongs to */
    customer_id: string;
    /** Whether this is the customer's default payment method */
    is_default: boolean;
    card: RevKeen.CardDetails | null;
    us_bank_account: RevKeen.BankAccountDetails | null;
    billing_details: RevKeen.BillingDetails | null;
    /** Custom metadata attached to the payment method */
    metadata: Record<string, unknown>;
    /** When the payment method was created */
    created_at: string;
    /** When the payment method was last updated */
    updated_at: string;
}
export declare namespace PaymentMethod {
    /** Object type, always 'payment_method' */
    const Object_: {
        readonly PaymentMethod: "payment_method";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** The type of payment method */
    const Type: {
        readonly Card: "card";
        readonly BankAccount: "bank_account";
        readonly UsBankAccount: "us_bank_account";
    };
    type Type = (typeof Type)[keyof typeof Type];
    /** The status of the payment method */
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Expired: "expired";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=PaymentMethod.d.ts.map