/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface WebhookEndpointsUpdateRequest {
    id: string;
    url?: string;
    enabled_events?: string[];
    description?: string | null;
    enabled?: boolean;
}
//# sourceMappingURL=WebhookEndpointsUpdateRequest.d.ts.map