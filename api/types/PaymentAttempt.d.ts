export interface PaymentAttempt {
    /** Unique identifier for the payment attempt */
    id: string;
    /** External reference ID (payatt_xxx format). Used as order_id in gateway requests. */
    public_id: string | null;
    /** The exact order_id sent to the gateway (NMI). Format: payatt_<public_id>. Primary correlation key for webhook mapping. */
    gateway_order_id: string | null;
    /** Transaction ID returned by the gateway (NMI's transaction reference). */
    gateway_transaction_id: string | null;
    /** Legacy transaction reference (deprecated - use gateway_transaction_id) */
    transaction_id: string | null;
    /** Logical payment (PaymentIntent) this attempt belongs to */
    payment_id: string | null;
    /** Associated invoice ID */
    invoice_id: string | null;
    /** Associated subscription ID */
    subscription_id: string | null;
    /** Associated checkout session ID */
    checkout_session_id: string | null;
    /** Billing run ID for batch reconciliation */
    billing_run_id: string | null;
    /** Payment gateway (e.g., 'nmi', 'stripe') */
    gateway: string;
    /** Raw gateway response code */
    gateway_code: string;
    /** Raw gateway response message */
    gateway_message: string;
    /** Normalized error category for the payment attempt */
    category: PaymentAttempt.Category;
    /** Severity level for logging/monitoring */
    severity: PaymentAttempt.Severity;
    /** Retry behavior recommendation. retry_now: Safe to retry immediately. retry_later: Retry after delay. do_not_retry: Hard decline, don't retry. */
    retryability: PaymentAttempt.Retryability;
    /** Recommended action for the customer */
    customer_action: PaymentAttempt.CustomerAction;
    /** Recommended action for the merchant */
    merchant_action: PaymentAttempt.MerchantAction;
    /** Directive for subscription handling after decline */
    subscription_directive: PaymentAttempt.SubscriptionDirective;
    /** Template key for customer-facing message */
    safe_customer_message_key: string;
    /** Decline classification. soft: May succeed on retry. hard: Will not succeed on retry. */
    decline_type: PaymentAttempt.DeclineType | null;
    /** Final outcome status of the attempt */
    attempt_status: PaymentAttempt.AttemptStatus;
    /** Address Verification System response code */
    avs_code: string | null;
    /** CVV verification response code */
    cvv_code: string | null;
    /** Issuer-specific response code */
    issuer_code: string | null;
    /** Payment amount in cents */
    amount_cents: number | null;
    /** Three-letter ISO currency code */
    currency: string | null;
    /** Last 4 digits of card */
    payment_method_last4: string | null;
    /** Card brand (visa, mastercard, etc.) */
    payment_method_brand: string | null;
    /** Attempt sequence number (1 = first attempt) */
    attempt_number: number;
    /** Legacy retry attempt number */
    retry_attempt_number: number;
    /** Maximum retry attempts allowed */
    max_retry_attempts: number | null;
    /** Next scheduled retry timestamp */
    next_retry_at: string | null;
    /** Whether this was a scheduled retry */
    is_scheduled_retry: boolean;
    /** Whether this was a manual retry */
    is_manual_retry: boolean;
    /** When the attempt was created */
    created_at: string;
    /** When the attempt was last updated */
    updated_at: string;
}
export declare namespace PaymentAttempt {
    /** Normalized error category for the payment attempt */
    const Category: {
        readonly Approved: "approved";
        readonly GenericDecline: "generic_decline";
        readonly InsufficientFunds: "insufficient_funds";
        readonly OverLimit: "over_limit";
        readonly ExpiredCard: "expired_card";
        readonly InvalidCardNumber: "invalid_card_number";
        readonly InvalidCvv: "invalid_cvv";
        readonly InvalidExpiry: "invalid_expiry";
        readonly InvalidPin: "invalid_pin";
        readonly TransactionNotAllowed: "transaction_not_allowed";
        readonly CallIssuer: "call_issuer";
        readonly IncorrectPaymentInfo: "incorrect_payment_info";
        readonly LostOrStolen: "lost_or_stolen";
        readonly PickupCard: "pickup_card";
        readonly SuspectedFraud: "suspected_fraud";
        readonly RestrictedCard: "restricted_card";
        readonly StopAllRecurring: "stop_all_recurring";
        readonly StopThisProgram: "stop_this_program";
        readonly UpdateCardholderData: "update_cardholder_data";
        readonly ProcessorError: "processor_error";
        readonly GatewayError: "gateway_error";
        readonly CommunicationError: "communication_error";
        readonly MerchantConfigError: "merchant_config_error";
        readonly MerchantInactive: "merchant_inactive";
        readonly IssuerUnavailable: "issuer_unavailable";
        readonly DuplicateTransaction: "duplicate_transaction";
        readonly InvalidTransaction: "invalid_transaction";
        readonly UnsupportedCard: "unsupported_card";
        readonly FeatureNotAvailable: "feature_not_available";
        readonly AuthenticationRequired: "authentication_required";
    };
    type Category = (typeof Category)[keyof typeof Category];
    /** Severity level for logging/monitoring */
    const Severity: {
        readonly Info: "info";
        readonly Warn: "warn";
        readonly Error: "error";
    };
    type Severity = (typeof Severity)[keyof typeof Severity];
    /** Retry behavior recommendation. retry_now: Safe to retry immediately. retry_later: Retry after delay. do_not_retry: Hard decline, don't retry. */
    const Retryability: {
        readonly RetryNow: "retry_now";
        readonly RetryLater: "retry_later";
        readonly DoNotRetry: "do_not_retry";
    };
    type Retryability = (typeof Retryability)[keyof typeof Retryability];
    /** Recommended action for the customer */
    const CustomerAction: {
        readonly TryAgain: "try_again";
        readonly UseOtherMethod: "use_other_method";
        readonly UpdateCard: "update_card";
        readonly ContactBank: "contact_bank";
        readonly ContactMerchant: "contact_merchant";
        readonly None: "none";
    };
    type CustomerAction = (typeof CustomerAction)[keyof typeof CustomerAction];
    /** Recommended action for the merchant */
    const MerchantAction: {
        readonly None: "none";
        readonly CollectNewPm: "collect_new_pm";
        readonly FixConfig: "fix_config";
        readonly ContactSupport: "contact_support";
        readonly FraudReview: "fraud_review";
        readonly ScheduleRetry: "schedule_retry";
        readonly ContactBank: "contact_bank";
        readonly StopRecurring: "stop_recurring";
    };
    type MerchantAction = (typeof MerchantAction)[keyof typeof MerchantAction];
    /** Directive for subscription handling after decline */
    const SubscriptionDirective: {
        readonly None: "none";
        readonly StopAll: "stop_all";
        readonly StopProgram: "stop_program";
        readonly UpdateCardholderData: "update_cardholder_data";
    };
    type SubscriptionDirective = (typeof SubscriptionDirective)[keyof typeof SubscriptionDirective];
    /** Decline classification. soft: May succeed on retry. hard: Will not succeed on retry. */
    const DeclineType: {
        readonly Soft: "soft";
        readonly Hard: "hard";
    };
    type DeclineType = (typeof DeclineType)[keyof typeof DeclineType];
    /** Final outcome status of the attempt */
    const AttemptStatus: {
        readonly Pending: "pending";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
        readonly Canceled: "canceled";
    };
    type AttemptStatus = (typeof AttemptStatus)[keyof typeof AttemptStatus];
}
//# sourceMappingURL=PaymentAttempt.d.ts.map