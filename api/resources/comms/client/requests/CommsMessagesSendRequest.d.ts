/**
 * @example
 *     {
 *         channel: "email",
 *         body: "body"
 *     }
 */
export interface CommsMessagesSendRequest {
    customerId?: string;
    customerEmail?: string;
    threadId?: string;
    channel: CommsMessagesSendRequest.Channel;
    subject?: string;
    body: string;
    bodyHtml?: string;
    entityType?: CommsMessagesSendRequest.EntityType;
    entityId?: string;
    entityUrl?: string;
    source?: CommsMessagesSendRequest.Source;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace CommsMessagesSendRequest {
    const Channel: {
        readonly Email: "email";
        readonly Sms: "sms";
        readonly Whatsapp: "whatsapp";
    };
    type Channel = (typeof Channel)[keyof typeof Channel];
    const EntityType: {
        readonly Invoice: "invoice";
        readonly PaymentLink: "payment_link";
        readonly Payment: "payment";
        readonly Subscription: "subscription";
    };
    type EntityType = (typeof EntityType)[keyof typeof EntityType];
    const Source: {
        readonly Superinbox: "superinbox";
        readonly External: "external";
        readonly Api: "api";
        readonly Automation: "automation";
    };
    type Source = (typeof Source)[keyof typeof Source];
}
//# sourceMappingURL=CommsMessagesSendRequest.d.ts.map