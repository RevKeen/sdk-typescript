/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateDiscountInput {
    /** Discount ID */
    id: string;
    name?: string;
    description?: string | null;
    discount_value?: number;
    applies_to?: UpdateDiscountInput.AppliesTo;
    scope?: UpdateDiscountInput.Scope;
    product_ids?: string[] | null;
    max_redemptions?: number | null;
    max_redemptions_per_user?: number;
    valid_from?: string | null;
    valid_until?: string | null;
    is_active?: boolean;
    is_archived?: boolean;
    recurring_type?: UpdateDiscountInput.RecurringType | null;
    recurring_cycles?: number | null;
    first_time_customer?: boolean;
}
export declare namespace UpdateDiscountInput {
    const AppliesTo: {
        readonly All: "all";
        readonly SpecificProducts: "specific_products";
    };
    type AppliesTo = (typeof AppliesTo)[keyof typeof AppliesTo];
    const Scope: {
        readonly EntireOrder: "entire_order";
        readonly SpecificProducts: "specific_products";
        readonly SubscriptionOnly: "subscription_only";
        readonly OneTimeOnly: "one_time_only";
    };
    type Scope = (typeof Scope)[keyof typeof Scope];
    const RecurringType: {
        readonly Once: "once";
        readonly Forever: "forever";
        readonly Repeating: "repeating";
    };
    type RecurringType = (typeof RecurringType)[keyof typeof RecurringType];
}
//# sourceMappingURL=UpdateDiscountInput.d.ts.map