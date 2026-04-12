/**
 * The canonical record of what a customer owes or has paid. Invoices track line items, amounts, and payment status through their lifecycle: draft → open → finalized → paid.
 */
export interface Invoice {
    /** Unique invoice identifier */
    id: string;
    /** ID of the customer this invoice belongs to */
    customer_uuid: string;
    /** Merchant-assigned invoice number for reference */
    invoice_number?: string;
    /** Total amount in minor units (cents) */
    total_minor: number;
    /** Three-letter ISO 4217 currency code */
    currency: string;
    /** Invoice lifecycle status: draft, open, finalized, paid, void, or uncollectible */
    status: string;
    /** Payment due date in ISO 8601 format */
    due_date?: string | null;
    /** Key-value pairs for custom fields */
    custom_fields?: Record<string, unknown>;
    /** External integration source (e.g., practicehub, wodify) */
    external_source?: string | null;
    /** Type within external system (e.g., appointment, membership) */
    external_type?: string | null;
    /** ID from external system */
    external_id?: string | null;
    /** Subscription billing terms for recurring invoices */
    subscription_terms?: Invoice.SubscriptionTerms | null;
    /** When the invoice was created (ISO 8601) */
    created_at: string;
    /** When the invoice was last updated (ISO 8601) */
    updated_at: string;
}
export declare namespace Invoice {
    /**
     * Subscription billing terms for recurring invoices
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
//# sourceMappingURL=Invoice.d.ts.map