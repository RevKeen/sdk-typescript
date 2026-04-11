/**
 * A line item within an order, representing a product, quantity, and unit price.
 */
export interface OrderLineItem {
    id: string;
    product_id?: string | null;
    description: string;
    quantity: number;
    /** Unit price in cents */
    unit_price: number;
    /** Subtotal in cents (unit_price * quantity) */
    subtotal: number;
    /** Discount in cents */
    discount?: number;
    /** Tax in cents */
    tax?: number;
    /** Total in cents (subtotal - discount + tax) */
    total: number;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
    position?: number;
}
//# sourceMappingURL=OrderLineItem.d.ts.map