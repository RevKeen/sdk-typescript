export interface CustomerSubscription {
    id: string;
    customer_id: string;
    price_id: string | null;
    status: string;
    current_period_start: string | null;
    current_period_end: string | null;
    cancel_at_period_end: boolean;
    canceled_at: string | null;
    trial_end: string | null;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=CustomerSubscription.d.ts.map