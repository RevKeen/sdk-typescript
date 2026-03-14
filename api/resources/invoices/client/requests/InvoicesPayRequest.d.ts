/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface InvoicesPayRequest {
    id: string;
    /** Payment amount in minor units (cents). If not provided, pays the full amount due. */
    amount_minor?: number;
    /** The payment method used */
    payment_method?: InvoicesPayRequest.PaymentMethod;
    /** External reference (check number, transfer ID, etc.) */
    reference?: string;
    /** Additional notes about the payment */
    notes?: string;
    /** When the payment was received (defaults to now) */
    paid_at?: string;
}
export declare namespace InvoicesPayRequest {
    /** The payment method used */
    const PaymentMethod: {
        readonly Cash: "cash";
        readonly Check: "check";
        readonly BankTransfer: "bank_transfer";
        readonly Other: "other";
    };
    type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
}
//# sourceMappingURL=InvoicesPayRequest.d.ts.map