/**
 * Eligibility details showing whether a credit note can be issued for the specified invoice and the maximum creditable amount.
 */
export interface CreditNoteEligibilityResponse {
    invoice_id: string;
    total_amount_minor: number;
    total_paid_minor: number;
    total_credited_minor: number;
    max_creditable_minor: number;
    eligible: boolean;
    payments: CreditNoteEligibilityResponse.Payments.Item[];
}
export declare namespace CreditNoteEligibilityResponse {
    type Payments = Payments.Item[];
    namespace Payments {
        interface Item {
            transaction_id: string;
            gateway: string;
            payment_method: string | null;
            amount_minor: number;
            amount_refunded_minor: number;
            amount_available_minor: number;
            card_brand: string | null;
            card_last4: string | null;
            terminal_serial: string | null;
            available_operations: string[];
            constraints: Item.Constraints;
        }
        namespace Item {
            interface Constraints {
                partial_supported: boolean;
                requires_card_present: boolean;
                requires_terminal_online: boolean;
            }
        }
    }
}
//# sourceMappingURL=CreditNoteEligibilityResponse.d.ts.map