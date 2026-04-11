/**
 * A discount code that applies a percentage or fixed amount reduction to charges, invoices, or subscriptions.
 */
export interface Discount {
    id: string;
    code: string;
    name: string | null;
    description: string | null;
    discount_type: string;
    /** Amount off (cents) or percentage */
    discount_value: number;
    applies_to: string | null;
    product_ids: string[] | null;
    max_redemptions: number | null;
    current_redemptions: number | null;
    valid_from: string | null;
    valid_until: string | null;
    recurring_type: string | null;
    recurring_cycles: number | null;
    first_time_customer: boolean | null;
    is_active: boolean | null;
    created_at: string | null;
    updated_at: string | null;
}
//# sourceMappingURL=Discount.d.ts.map