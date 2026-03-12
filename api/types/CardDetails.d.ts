/**
 * Card details (if type is 'card')
 */
export interface CardDetails {
    /** The card brand */
    brand: CardDetails.Brand | null;
    /** The last 4 digits of the card number */
    last4: string | null;
    /** Expiration month (1-12) */
    exp_month: number | null;
    /** Expiration year */
    exp_year: number | null;
    /** The card funding type */
    funding: CardDetails.Funding | null;
}
export declare namespace CardDetails {
    /** The card brand */
    const Brand: {
        readonly Visa: "visa";
        readonly Mastercard: "mastercard";
        readonly Amex: "amex";
        readonly Discover: "discover";
        readonly Diners: "diners";
        readonly Jcb: "jcb";
        readonly Unionpay: "unionpay";
        readonly Unknown: "unknown";
    };
    type Brand = (typeof Brand)[keyof typeof Brand];
    /** The card funding type */
    const Funding: {
        readonly Credit: "credit";
        readonly Debit: "debit";
        readonly Prepaid: "prepaid";
        readonly Unknown: "unknown";
    };
    type Funding = (typeof Funding)[keyof typeof Funding];
}
//# sourceMappingURL=CardDetails.d.ts.map