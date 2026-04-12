/**
 * A payment transaction belonging to a specific customer, with amount, status, and gateway details.
 */
export interface CustomerPayment {
    id: string;
    customer_id: string | null;
    amount_minor: number;
    currency: string;
    status: string;
    payment_method_type: string | null;
    gateway_transaction_id: string | null;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=CustomerPayment.d.ts.map