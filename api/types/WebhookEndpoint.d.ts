export interface WebhookEndpoint {
    id: string;
    url: string;
    description: string | null;
    enabled_events: string[];
    status: WebhookEndpoint.Status;
    /** Signing secret. Returned only on create or secret rotation. */
    secret?: string;
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
    const CircuitBreakerState: {
        readonly Closed: "closed";
        readonly Open: "open";
        readonly HalfOpen: "half_open";
    };
    type CircuitBreakerState = (typeof CircuitBreakerState)[keyof typeof CircuitBreakerState];
}
//# sourceMappingURL=WebhookEndpoint.d.ts.map