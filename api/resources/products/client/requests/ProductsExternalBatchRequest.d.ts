/**
 * @example
 *     {
 *         source: "practicehub",
 *         products: [{
 *                 external_id: "prod_12345",
 *                 name: "Monthly Membership",
 *                 amount_cents: 9900
 *             }]
 *     }
 */
export interface ProductsExternalBatchRequest {
    /** Integration source (e.g., practicehub, wodify) */
    source: string;
    /** Array of products to upsert (max 100) */
    products: ProductsExternalBatchRequest.Products.Item[];
}
export declare namespace ProductsExternalBatchRequest {
    type Products = Products.Item[];
    namespace Products {
        interface Item {
            /** External system's product ID */
            external_id: string;
            /** Product name */
            name: string;
            /** Product description */
            description?: string;
            /** Product kind - subscription or one-time */
            kind?: Item.Kind;
            /** Price in minor units (cents) */
            amount_cents: number;
            /** ISO 4217 currency code */
            currency?: string;
            /** Whether the product is active */
            is_active?: boolean;
            /** Billing interval for subscriptions */
            interval?: Item.Interval;
            /** Number of intervals between billings */
            interval_count?: number;
            /** External system's last update timestamp for stale update protection */
            external_updated_at?: string;
            /** Additional external reference (e.g., membership ID) */
            external_ref?: string;
            /** Additional metadata from external system */
            metadata?: Record<string, unknown>;
        }
        namespace Item {
            /** Product kind - subscription or one-time */
            const Kind: {
                readonly Subscription: "subscription";
                readonly OneTime: "one_time";
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
            /** Billing interval for subscriptions */
            const Interval: {
                readonly Day: "day";
                readonly Week: "week";
                readonly Month: "month";
                readonly Year: "year";
            };
            type Interval = (typeof Interval)[keyof typeof Interval];
        }
    }
}
//# sourceMappingURL=ProductsExternalBatchRequest.d.ts.map