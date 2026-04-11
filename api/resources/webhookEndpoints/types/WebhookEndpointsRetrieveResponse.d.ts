export interface WebhookEndpointsRetrieveResponse {
    data: WebhookEndpointsRetrieveResponse.Data;
}
export declare namespace WebhookEndpointsRetrieveResponse {
    interface Data {
        id: string;
        url: string;
        description: string | null;
        enabled_events: string[];
        status: Data.Status;
        circuit_breaker_state: Data.CircuitBreakerState;
        total_deliveries: number;
        successful_deliveries: number;
        failed_deliveries: number;
        last_delivery_at: string | null;
        created_at: string;
        updated_at: string;
    }
    namespace Data {
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
//# sourceMappingURL=WebhookEndpointsRetrieveResponse.d.ts.map