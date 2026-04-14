export declare const OauthScope: {
    /**
     * View checkout session details */
    readonly CheckoutRead: "checkout:read";
    /**
     * Create and manage checkout sessions */
    readonly CheckoutWrite: "checkout:write";
    /**
     * View payment links */
    readonly PaymentLinksRead: "payment_links:read";
    /**
     * Create and manage payment links */
    readonly PaymentLinksWrite: "payment_links:write";
    /**
     * View one-time charges */
    readonly ChargesRead: "charges:read";
    /**
     * Create one-time charges for customers */
    readonly ChargesWrite: "charges:write";
    /**
     * View payment details */
    readonly PaymentsRead: "payments:read";
    /**
     * Capture or void payments */
    readonly PaymentsWrite: "payments:write";
    /**
     * View payment intent details */
    readonly PaymentIntentsRead: "payment_intents:read";
    /**
     * Create, confirm, capture, and cancel payment intents */
    readonly PaymentIntentsWrite: "payment_intents:write";
    /**
     * View setup intent details */
    readonly SetupIntentsRead: "setup_intents:read";
    /**
     * Create, confirm, and cancel setup intents */
    readonly SetupIntentsWrite: "setup_intents:write";
    /**
     * View saved payment methods */
    readonly PaymentMethodsRead: "payment_methods:read";
    /**
     * Attach and detach payment methods */
    readonly PaymentMethodsWrite: "payment_methods:write";
    /**
     * View invoices */
    readonly InvoicesRead: "invoices:read";
    /**
     * Create, update, and manage invoices */
    readonly InvoicesWrite: "invoices:write";
    /**
     * View subscriptions */
    readonly SubscriptionsRead: "subscriptions:read";
    /**
     * Create, update, pause, and cancel subscriptions */
    readonly SubscriptionsWrite: "subscriptions:write";
    /**
     * View subscription schedule details */
    readonly SubscriptionSchedulesRead: "subscription_schedules:read";
    /**
     * Create, update, cancel, and release subscription schedules */
    readonly SubscriptionSchedulesWrite: "subscription_schedules:write";
    /**
     * View orders */
    readonly OrdersRead: "orders:read";
    /**
     * Create and manage orders */
    readonly OrdersWrite: "orders:write";
    /**
     * View credit notes */
    readonly CreditNotesRead: "credit_notes:read";
    /**
     * Create and void credit notes */
    readonly CreditNotesWrite: "credit_notes:write";
    /**
     * View product catalog */
    readonly ProductsRead: "products:read";
    /**
     * Create and update products */
    readonly ProductsWrite: "products:write";
    /**
     * View pricing information */
    readonly PricesRead: "prices:read";
    /**
     * Create and update prices */
    readonly PricesWrite: "prices:write";
    /**
     * View discount codes */
    readonly DiscountsRead: "discounts:read";
    /**
     * Create and manage discount codes */
    readonly DiscountsWrite: "discounts:write";
    /**
     * View tax rate configurations */
    readonly TaxRatesRead: "tax_rates:read";
    /**
     * Configure tax rates */
    readonly TaxRatesWrite: "tax_rates:write";
    /**
     * View meter configurations */
    readonly MetersRead: "meters:read";
    /**
     * Create and update meters */
    readonly MetersWrite: "meters:write";
    /**
     * View usage events and balances */
    readonly UsageRead: "usage:read";
    /**
     * Ingest usage events */
    readonly UsageWrite: "usage:write";
    /**
     * View customer information */
    readonly CustomersRead: "customers:read";
    /**
     * Create and update customers */
    readonly CustomersWrite: "customers:write";
    /**
     * View business entities */
    readonly BusinessesRead: "businesses:read";
    /**
     * Manage business entities */
    readonly BusinessesWrite: "businesses:write";
    /**
     * View refund details */
    readonly RefundsRead: "refunds:read";
    /**
     * Issue refunds */
    readonly RefundsWrite: "refunds:write";
    /**
     * View voided transactions */
    readonly VoidsRead: "voids:read";
    /**
     * Void unsettled transactions */
    readonly VoidsWrite: "voids:write";
    /**
     * View chargebacks and disputes */
    readonly DisputesRead: "disputes:read";
    /**
     * Respond to disputes */
    readonly DisputesWrite: "disputes:write";
    /**
     * View payout and settlement data */
    readonly PayoutsRead: "payouts:read";
    /**
     * View terminal devices and card-present payments */
    readonly TerminalRead: "terminal:read";
    /**
     * Initiate, cancel, refund, and void terminal payments */
    readonly TerminalWrite: "terminal:write";
    /**
     * View and download data exports */
    readonly ExportsRead: "exports:read";
    /**
     * Create data exports */
    readonly ExportsWrite: "exports:write";
    /**
     * View import status and history */
    readonly ImportsRead: "imports:read";
    /**
     * Upload and run data imports */
    readonly ImportsWrite: "imports:write";
    /**
     * View analytics and reports */
    readonly AnalyticsRead: "analytics:read";
    /**
     * View financial reports */
    readonly FinanceRead: "finance:read";
    /**
     * View SMS and email delivery logs */
    readonly CommsRead: "comms:read";
    /**
     * Send SMS, email, and WhatsApp messages */
    readonly CommsWrite: "comms:write";
    /**
     * View connected applications */
    readonly AppsRead: "apps:read";
    /**
     * Manage app connections */
    readonly AppsWrite: "apps:write";
    /**
     * View webhook endpoints */
    readonly WebhooksRead: "webhooks:read";
    /**
     * Manage webhook endpoints */
    readonly WebhooksWrite: "webhooks:write";
    /**
     * View integration status and sync logs */
    readonly IntegrationsRead: "integrations:read";
    /**
     * Activate, configure, and sync integrations */
    readonly IntegrationsWrite: "integrations:write";
    /**
     * View webhook event logs */
    readonly EventsRead: "events:read";
    /**
     * Resend and test webhook events */
    readonly EventsWrite: "events:write";
    /**
     * View sync watermarks and state */
    readonly SyncRead: "sync:read";
    /**
     * Update sync watermarks */
    readonly SyncWrite: "sync:write";
};
export type OauthScope = (typeof OauthScope)[keyof typeof OauthScope];
//# sourceMappingURL=OauthScope.d.ts.map