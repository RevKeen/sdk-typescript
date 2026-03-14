/**
 * @example
 *     {
 *         url: "https://api.example.com/webhooks/revkeen",
 *         enabled_events: ["payment.succeeded", "invoice.paid"]
 *     }
 */
export interface CreateWebhookEndpointInput {
    /** The URL that will receive webhook events */
    url: string;
    /** Events to subscribe to. Use wildcards like `invoice.*` or `*` for all events. */
    enabled_events: string[];
    /** Optional description for this endpoint */
    description?: string;
}
//# sourceMappingURL=CreateWebhookEndpointInput.d.ts.map