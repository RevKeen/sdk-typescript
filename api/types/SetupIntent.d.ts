import type * as RevKeen from "../index.js";
export interface SetupIntent {
    /** Unique identifier for the setup intent */
    id: string;
    /** Object type, always 'setup_intent' */
    object: SetupIntent.Object_;
    /** Public ID visible in API responses (seti_xxx format) */
    public_id: string;
    /** The status of the setup intent */
    status: SetupIntent.Status;
    /** ID of the customer this setup intent is for */
    customer_id: string | null;
    /** ID of the payment method being set up */
    payment_method_id: string | null;
    /** Allowed payment method types for this setup */
    payment_method_types: string[];
    /** Indicates how the payment method will be used */
    usage: SetupIntent.Usage;
    next_action: RevKeen.SetupIntentNextAction | null;
    /** Client secret for frontend confirmation */
    client_secret: string;
    /** Payment gateway used */
    gateway: string;
    last_error: RevKeen.SetupIntentError | null;
    /** Reason for cancellation if canceled */
    cancellation_reason: SetupIntent.CancellationReason | null;
    /** Merchant description for reference */
    description: string | null;
    /** Custom metadata attached to the setup intent */
    metadata: Record<string, unknown>;
    /** When the setup intent was confirmed */
    confirmed_at: string | null;
    /** When the setup intent was canceled */
    canceled_at: string | null;
    /** When the setup intent was created */
    created_at: string;
    /** When the setup intent was last updated */
    updated_at: string;
}
export declare namespace SetupIntent {
    /** Object type, always 'setup_intent' */
    const Object_: {
        readonly SetupIntent: "setup_intent";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** The status of the setup intent */
    const Status: {
        readonly RequiresPaymentMethod: "requires_payment_method";
        readonly RequiresConfirmation: "requires_confirmation";
        readonly RequiresAction: "requires_action";
        readonly Processing: "processing";
        readonly Succeeded: "succeeded";
        readonly Canceled: "canceled";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** Indicates how the payment method will be used */
    const Usage: {
        readonly OnSession: "on_session";
        readonly OffSession: "off_session";
    };
    type Usage = (typeof Usage)[keyof typeof Usage];
    /** Reason for cancellation if canceled */
    const CancellationReason: {
        readonly Abandoned: "abandoned";
        readonly RequestedByCustomer: "requested_by_customer";
        readonly Duplicate: "duplicate";
    };
    type CancellationReason = (typeof CancellationReason)[keyof typeof CancellationReason];
}
//# sourceMappingURL=SetupIntent.d.ts.map