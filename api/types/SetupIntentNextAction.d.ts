/**
 * Action required from customer (3DS redirect, etc.)
 */
export interface SetupIntentNextAction {
    /** The type of action to take */
    type: SetupIntentNextAction.Type;
    /** Redirect details for 3DS authentication */
    redirect_to_url?: SetupIntentNextAction.RedirectToUrl;
    /** SDK-specific data for client-side handling */
    use_stripe_sdk?: Record<string, unknown>;
}
export declare namespace SetupIntentNextAction {
    /** The type of action to take */
    const Type: {
        readonly RedirectToUrl: "redirect_to_url";
        readonly UseStripeSdk: "use_stripe_sdk";
    };
    type Type = (typeof Type)[keyof typeof Type];
    /**
     * Redirect details for 3DS authentication
     */
    interface RedirectToUrl {
        /** The URL to redirect the customer to */
        url: string;
        /** The URL to redirect back to after completion */
        return_url: string;
    }
}
//# sourceMappingURL=SetupIntentNextAction.d.ts.map