/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateWebhookEndpointInput {
    /** Webhook endpoint ID */
    id: string;
    /** Update the webhook URL */
    url?: string;
    /** Update the subscribed events */
    enabled_events?: string[];
    /** Update the description */
    description?: string | null;
    /** Enable or disable the endpoint */
    enabled?: boolean;
}
//# sourceMappingURL=UpdateWebhookEndpointInput.d.ts.map