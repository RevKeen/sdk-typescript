import type * as RevKeen from "../index.js";
export interface SchedulePhase {
    /** Products/prices included in this phase */
    items: RevKeen.PhaseItem[];
    /** When this phase starts (ISO 8601 date) */
    start_date: string;
    /** When this phase ends (null for indefinite) */
    end_date?: string | null;
    /** How to handle prorations when entering this phase */
    proration_behavior?: SchedulePhase.ProrationBehavior;
    /** Override billing cycle anchor for this phase */
    billing_cycle_anchor?: string | null;
    /** Payment method to use for this phase */
    default_payment_method?: string | null;
    /** How to collect payment for this phase */
    collection_method?: SchedulePhase.CollectionMethod;
    /** Coupon code to apply during this phase */
    coupon?: string | null;
    /** End of trial period (if applicable) */
    trial_end?: string | null;
    /** Phase-specific metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace SchedulePhase {
    /** How to handle prorations when entering this phase */
    const ProrationBehavior: {
        readonly CreateProrations: "create_prorations";
        readonly None: "none";
        readonly AlwaysInvoice: "always_invoice";
    };
    type ProrationBehavior = (typeof ProrationBehavior)[keyof typeof ProrationBehavior];
    /** How to collect payment for this phase */
    const CollectionMethod: {
        readonly ChargeAutomatically: "charge_automatically";
        readonly SendInvoice: "send_invoice";
    };
    type CollectionMethod = (typeof CollectionMethod)[keyof typeof CollectionMethod];
}
//# sourceMappingURL=SchedulePhase.d.ts.map