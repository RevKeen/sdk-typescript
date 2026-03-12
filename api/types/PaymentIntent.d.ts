export interface PaymentIntent {
    /** Public payment intent ID (pi_xxx) */
    id: string;
    /** Object type */
    object: PaymentIntent.Object_;
    /** Amount in cents */
    amount: number;
    /** Amount that can be captured (for manual capture) */
    amount_capturable: number;
    /** Amount actually received */
    amount_received: number;
    /** Three-letter ISO currency code */
    currency: string;
    /** Customer ID */
    customer: string;
    /** Description for merchant reference */
    description?: string | null;
    /** Last error from payment attempt */
    last_payment_error?: PaymentIntent.LastPaymentError | null;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    /** Action required from customer (3DS, etc.) */
    next_action?: PaymentIntent.NextAction | null;
    /** Payment method ID */
    payment_method?: string | null;
    /** Email for receipt */
    receipt_email?: string | null;
    /** Statement descriptor */
    statement_descriptor?: string | null;
    /** Statement descriptor suffix */
    statement_descriptor_suffix?: string | null;
    /** Payment intent status. requires_payment_method: Needs payment method. requires_confirmation: Ready to confirm. requires_action: Requires customer action (3DS). processing: Being processed. succeeded: Payment complete. canceled: Canceled. */
    status: PaymentIntent.Status;
    /** Capture method. automatic: Capture immediately on confirmation. manual: Authorize then capture separately. */
    capture_method: PaymentIntent.CaptureMethod;
    /** Client secret for frontend confirmation */
    client_secret: string;
    /** When the intent was canceled */
    canceled_at?: string | null;
    /** Why the intent was canceled */
    cancellation_reason?: PaymentIntent.CancellationReason | null;
    /** Unix timestamp of creation */
    created: number;
    /** Whether in live mode */
    livemode: boolean;
}
export declare namespace PaymentIntent {
    /** Object type */
    const Object_: {
        readonly PaymentIntent: "payment_intent";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /**
     * Last error from payment attempt
     */
    interface LastPaymentError {
        /** Error code */
        code: string;
        /** Human-readable error message */
        message: string;
        /** Card decline code if applicable */
        decline_code?: string;
        /** Payment method that caused the error */
        payment_method?: LastPaymentError.PaymentMethod;
    }
    namespace LastPaymentError {
        /**
         * Payment method that caused the error
         */
        interface PaymentMethod {
            /** Payment method ID */
            id: string;
            /** Payment method type */
            type: string;
        }
    }
    /**
     * Action required from customer (3DS, etc.)
     */
    interface NextAction {
        /** Type of action required */
        type: NextAction.Type;
        /** Present when type is redirect_to_url */
        redirect_to_url?: NextAction.RedirectToUrl;
    }
    namespace NextAction {
        /** Type of action required */
        const Type: {
            readonly RedirectToUrl: "redirect_to_url";
            readonly UseStripeSdk: "use_stripe_sdk";
            readonly DisplayBankTransferInstructions: "display_bank_transfer_instructions";
        };
        type Type = (typeof Type)[keyof typeof Type];
        /**
         * Present when type is redirect_to_url
         */
        interface RedirectToUrl {
            /** URL to redirect customer for 3DS authentication */
            url: string;
            /** URL to return to after 3DS */
            return_url: string;
        }
    }
    /** Payment intent status. requires_payment_method: Needs payment method. requires_confirmation: Ready to confirm. requires_action: Requires customer action (3DS). processing: Being processed. succeeded: Payment complete. canceled: Canceled. */
    const Status: {
        readonly RequiresPaymentMethod: "requires_payment_method";
        readonly RequiresConfirmation: "requires_confirmation";
        readonly RequiresAction: "requires_action";
        readonly Processing: "processing";
        readonly Succeeded: "succeeded";
        readonly Canceled: "canceled";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** Capture method. automatic: Capture immediately on confirmation. manual: Authorize then capture separately. */
    const CaptureMethod: {
        readonly Automatic: "automatic";
        readonly Manual: "manual";
    };
    type CaptureMethod = (typeof CaptureMethod)[keyof typeof CaptureMethod];
    /** Why the intent was canceled */
    const CancellationReason: {
        readonly Duplicate: "duplicate";
        readonly Fraudulent: "fraudulent";
        readonly RequestedByCustomer: "requested_by_customer";
        readonly Abandoned: "abandoned";
        readonly FailedInvoice: "failed_invoice";
    };
    type CancellationReason = (typeof CancellationReason)[keyof typeof CancellationReason];
}
//# sourceMappingURL=PaymentIntent.d.ts.map