/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface InvoicesUpdateRequest {
    id: string;
    status?: string;
    total_minor?: number;
    due_date?: string;
    /** Subscription billing terms — set to null to remove */
    subscription_terms?: InvoicesUpdateRequest.SubscriptionTerms | null;
}
export declare namespace InvoicesUpdateRequest {
    /**
     * Subscription billing terms — set to null to remove
     */
    interface SubscriptionTerms {
        /** How to collect payment for recurring invoices */
        collection_method: SubscriptionTerms.CollectionMethod;
        /** When the subscription billing cycle starts */
        start_mode: SubscriptionTerms.StartMode;
        /** Start date (ISO 8601) — required when start_mode is 'specific_date' */
        start_date?: string;
        /** How the subscription duration is determined */
        duration_type: SubscriptionTerms.DurationType;
        /** Number of billing cycles — required when duration_type is 'fixed_cycles' */
        duration_count?: number;
        /** End date (ISO 8601) — required when duration_type is 'end_date' */
        end_date?: string;
        /** Whether to charge the first cycle immediately or defer to the start date */
        first_payment_behavior: SubscriptionTerms.FirstPaymentBehavior;
    }
    namespace SubscriptionTerms {
        /** How to collect payment for recurring invoices */
        const CollectionMethod: {
            readonly ChargeAutomatically: "charge_automatically";
            readonly SendInvoice: "send_invoice";
        };
        type CollectionMethod = (typeof CollectionMethod)[keyof typeof CollectionMethod];
        /** When the subscription billing cycle starts */
        const StartMode: {
            readonly WhenPaid: "when_paid";
            readonly OnInvoiceDate: "on_invoice_date";
            readonly FirstOfNextMonth: "first_of_next_month";
            readonly SpecificDate: "specific_date";
        };
        type StartMode = (typeof StartMode)[keyof typeof StartMode];
        /** How the subscription duration is determined */
        const DurationType: {
            readonly UntilCancelled: "until_cancelled";
            readonly FixedCycles: "fixed_cycles";
            readonly EndDate: "end_date";
        };
        type DurationType = (typeof DurationType)[keyof typeof DurationType];
        /** Whether to charge the first cycle immediately or defer to the start date */
        const FirstPaymentBehavior: {
            readonly ChargeFirstCycleNow: "charge_first_cycle_now";
            readonly DeferFirstCycleToStartDate: "defer_first_cycle_to_start_date";
        };
        type FirstPaymentBehavior = (typeof FirstPaymentBehavior)[keyof typeof FirstPaymentBehavior];
    }
}
//# sourceMappingURL=InvoicesUpdateRequest.d.ts.map