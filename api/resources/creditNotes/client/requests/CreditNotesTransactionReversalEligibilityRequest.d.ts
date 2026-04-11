/**
 * @example
 *     {
 *         transaction_id: "transaction_id"
 *     }
 */
export interface CreditNotesTransactionReversalEligibilityRequest {
    /** Transaction UUID */
    transaction_id: string;
    /** Whether the customer is physically present at the terminal. Enables terminal-native reversal operations. */
    customer_present?: boolean | null;
}
//# sourceMappingURL=CreditNotesTransactionReversalEligibilityRequest.d.ts.map