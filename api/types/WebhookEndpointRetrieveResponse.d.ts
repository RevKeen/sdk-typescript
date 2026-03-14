export interface WebhookEndpointRetrieveResponse {
    data: WebhookEndpointRetrieveResponse.Data;
}
export declare namespace WebhookEndpointRetrieveResponse {
    interface Data {
        id: string;
        url: string;
        description: string | null;
        /** Events this endpoint receives. Use `*` for all events. */
        enabled_events: string[];
        status: Data.Status;
        /** Circuit breaker status - 'open' means deliveries are paused due to failures */
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
        /** Circuit breaker status - 'open' means deliveries are paused due to failures */
        const CircuitBreakerState: {
            readonly Closed: "closed";
            readonly Open: "open";
            readonly HalfOpen: "half_open";
        };
        type CircuitBreakerState = (typeof CircuitBreakerState)[keyof typeof CircuitBreakerState];
    }
}
//# sourceMappingURL=WebhookEndpointRetrieveResponse.d.ts.map