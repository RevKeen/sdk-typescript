/**
 * @example
 *     {
 *         code: "SUMMER20",
 *         name: "Summer Sale 20% Off",
 *         discount_type: "percentage",
 *         discount_value: 20
 *     }
 */
export interface CreateDiscountInput {
    /** Unique discount code (will be uppercased) */
    code: string;
    /** Human-readable name */
    name: string;
    /** Optional description */
    description?: string;
    /** Type of discount */
    discount_type: CreateDiscountInput.DiscountType;
    /** Discount value - percentage (1-100) or amount in cents */
    discount_value: number;
    /** Which products the discount applies to */
    applies_to?: CreateDiscountInput.AppliesTo;
    /** Scope of where discount can be applied */
    scope?: CreateDiscountInput.Scope;
    /** Product IDs if applies_to is 'specific_products' */
    product_ids?: string[];
    /** Maximum total redemptions allowed */
    max_redemptions?: number;
    /** Maximum redemptions per customer (0 = unlimited) */
    max_redemptions_per_user?: number;
    /** Start date (ISO 8601) */
    valid_from?: string;
    /** End date (ISO 8601) */
    valid_until?: string;
    /** How the discount applies to recurring payments */
    recurring_type?: CreateDiscountInput.RecurringType;
    /** Number of billing cycles (only if recurring_type is 'repeating') */
    recurring_cycles?: number;
    /** Only available to first-time customers */
    first_time_customer?: boolean;
}
export declare namespace CreateDiscountInput {
    /** Type of discount */
    const DiscountType: {
        readonly Percentage: "percentage";
        readonly FixedAmount: "fixed_amount";
    };
    type DiscountType = (typeof DiscountType)[keyof typeof DiscountType];
    /** Which products the discount applies to */
    const AppliesTo: {
        readonly All: "all";
        readonly SpecificProducts: "specific_products";
    };
    type AppliesTo = (typeof AppliesTo)[keyof typeof AppliesTo];
    /** Scope of where discount can be applied */
    const Scope: {
        readonly EntireOrder: "entire_order";
        readonly SpecificProducts: "specific_products";
        readonly SubscriptionOnly: "subscription_only";
        readonly OneTimeOnly: "one_time_only";
    };
    type Scope = (typeof Scope)[keyof typeof Scope];
    /** How the discount applies to recurring payments */
    const RecurringType: {
        readonly Once: "once";
        readonly Forever: "forever";
        readonly Repeating: "repeating";
    };
    type RecurringType = (typeof RecurringType)[keyof typeof RecurringType];
}
//# sourceMappingURL=CreateDiscountInput.d.ts.map