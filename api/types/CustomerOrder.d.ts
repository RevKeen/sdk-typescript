/**
 * An order belonging to a specific customer, with line items and fulfillment status.
 */
export interface CustomerOrder {
    id: string;
    public_id: string;
    customer_id: string;
    status: string;
    total_minor: number;
    currency: string;
    fulfilled_at: string | null;
    canceled_at: string | null;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=CustomerOrder.d.ts.map