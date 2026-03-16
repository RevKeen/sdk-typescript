export interface WebhookEndpointListResponse {
    data: WebhookEndpointListResponse.Data.Item[];
    meta: WebhookEndpointListResponse.Meta;
}
export declare namespace WebhookEndpointListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            url: string;
            description: string | null;
            /** Events this endpoint receives. Use `*` for all events. */
            enabled_events: string[];
            status: Item.Status;
            /** Circuit breaker status - 'open' means deliveries are paused due to failures */
            circuit_breaker_state: Item.CircuitBreakerState;
            total_deliveries: number;
            successful_deliveries: number;
            failed_deliveries: number;
            last_delivery_at: string | null;
            created_at: string;
            updated_at: string;
        }
        namespace Item {
            const Status: {
                readonly Enabled: "enabled";
                readonly Disabled: "disabled";
            };
            type Status = (typeof Status)[keyof typeof Status];
            /** Circuit breaker status - 'open' means deliveries are paused due to failures */
            const CircuitBreakerState: {
                readonly Closed: "closed";
                readonly Open: "open";
                readonly HalfOpen: "half_open";
            };
            type CircuitBreakerState = (typeof CircuitBreakerState)[keyof typeof CircuitBreakerState];
        }
    }
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=WebhookEndpointListResponse.d.ts.map