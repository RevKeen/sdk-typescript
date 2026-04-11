export interface WebhookEndpointsListResponse {
    data: WebhookEndpointsListResponse.Data.Item[];
    meta: WebhookEndpointsListResponse.Meta;
}
export declare namespace WebhookEndpointsListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            url: string;
            description: string | null;
            enabled_events: string[];
            status: Item.Status;
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
//# sourceMappingURL=WebhookEndpointsListResponse.d.ts.map