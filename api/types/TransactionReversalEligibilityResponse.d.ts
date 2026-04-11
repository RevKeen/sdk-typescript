/**
 * Details about which reversal methods (refund, void, or credit note) are available for a specific transaction.
 */
export interface TransactionReversalEligibilityResponse {
    can_reverse: boolean;
    transaction_id: string;
    gateway: string;
    payment_method: string | null;
    available_operations: string[];
    constraints: TransactionReversalEligibilityResponse.Constraints;
    card_brand: string | null;
    card_last4: string | null;
    terminal_serial: string | null;
    terminal_uti: string | null;
}
export declare namespace TransactionReversalEligibilityResponse {
    interface Constraints {
        max_amount: number;
        partial_supported: boolean;
        requires_card_present: boolean;
        requires_terminal_online: boolean;
        requires_customer_iban: boolean;
        reason: string | null;
    }
}
//# sourceMappingURL=TransactionReversalEligibilityResponse.d.ts.map