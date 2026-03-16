export interface WebhookEndpoint {
    id: string;
    url: string;
    description: string | null;
    /** Events this endpoint receives. Use `*` for all events. */
    enabled_events: string[];
    status: WebhookEndpoint.Status;
    /** Signing secret (only returned on create or rotate) */
    secret?: string;
    /** Circuit breaker status - 'open' means deliveries are paused due to failures */
    circuit_breaker_state: WebhookEndpoint.CircuitBreakerState;
    total_deliveries: number;
    successful_deliveries: number;
    failed_deliveries: number;
    last_delivery_at: string | null;
    created_at: string;
    updated_at: string;
}
export declare namespace WebhookEndpoint {
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
//# sourceMappingURL=WebhookEndpoint.d.ts.map