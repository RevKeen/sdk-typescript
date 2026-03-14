export interface WebhookEvent {
    /** Unique event identifier */
    id: string;
    /** Event type using dot notation (e.g., `payment.succeeded`) */
    type: string;
    /** Unix timestamp when the event was created */
    created: number;
    /** Whether this event occurred in live mode */
    livemode?: boolean;
    /** Event payload containing the affected object */
    data: WebhookEvent.Data;
}
export declare namespace WebhookEvent {
    /**
     * Event payload containing the affected object
     */
    interface Data {
        /** The object that triggered the event (e.g., Payment, Invoice, Subscription) */
        object?: Record<string, unknown>;
        /** Previous values of attributes that changed (for update events) */
        previous_attributes?: Record<string, unknown>;
    }
}
//# sourceMappingURL=WebhookEvent.d.ts.map