/**
 * @example
 *     {
 *         source: "practicehub",
 *         externalId: "prod_12345",
 *         name: "Monthly Membership",
 *         amountCents: 9900
 *     }
 */
export interface ProductsExternalUpsertRequest {
    /** Integration source (e.g., practicehub, wodify) */
    source: string;
    /** External system's product ID */
    externalId: string;
    /** Deprecated: merchantId is derived from API key authentication. This field is ignored. */
    merchantId?: string;
    /** Product name */
    name: string;
    /** Product description */
    description?: string;
    /** Product kind - subscription or one-time */
    kind?: ProductsExternalUpsertRequest.Kind;
    /** Price in minor units (cents) */
    amountCents: number;
    /** ISO 4217 currency code */
    currency?: string;
    /** Whether the product is active */
    isActive?: boolean;
    /** Billing interval for subscriptions */
    interval?: ProductsExternalUpsertRequest.Interval;
    /** Number of intervals between billings */
    intervalCount?: number;
    /** External system's last update timestamp for stale update protection */
    externalUpdatedAt?: string;
    /** Additional external reference (e.g., membership ID) */
    externalRef?: string;
    /** Additional metadata from external system */
    metadata?: Record<string, unknown>;
}
export declare namespace ProductsExternalUpsertRequest {
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
//# sourceMappingURL=ProductsExternalUpsertRequest.d.ts.map