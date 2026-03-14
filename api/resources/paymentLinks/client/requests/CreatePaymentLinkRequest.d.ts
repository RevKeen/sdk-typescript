/**
 * @example
 *     {}
 */
export interface CreatePaymentLinkRequest {
    product_ids?: string[];
    line_items?: CreatePaymentLinkRequest.LineItems.Item[];
    name?: string;
    slug?: string;
    mode?: CreatePaymentLinkRequest.Mode;
    amount_minor?: number;
    currency?: string;
    invoice_id?: string;
    subscription_id?: string;
    /** Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page. */
    success_url?: string;
    /** Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured. */
    cancel_url?: string;
    redirect_url?: string;
    collect_shipping?: boolean;
    allow_promotion_codes?: boolean;
    tax_behavior?: CreatePaymentLinkRequest.TaxBehavior;
    metadata?: Record<string, unknown>;
    expires_at?: string;
    idempotency_key?: string;
}
export declare namespace CreatePaymentLinkRequest {
    type LineItems = LineItems.Item[];
    namespace LineItems {
        interface Item {
            price?: string;
            price_data?: Item.PriceData;
            quantity?: number;
            merchant_reference?: string | null;
        }
        namespace Item {
            interface PriceData {
                currency?: string;
                unit_amount: number;
                product_data?: PriceData.ProductData;
                product?: string;
                recurring?: PriceData.Recurring | null;
                tax_behavior?: PriceData.TaxBehavior | null;
            }
            namespace PriceData {
                interface ProductData {
                    name: string;
                    description?: string | null;
                    images?: string[] | null;
                    metadata?: Record<string, unknown> | null;
                }
                interface Recurring {
                    interval: Recurring.Interval;
                    interval_count?: number;
                }
                namespace Recurring {
                    const Interval: {
                        readonly Day: "day";
                        readonly Week: "week";
                        readonly Month: "month";
                        readonly Year: "year";
                    };
                    type Interval = (typeof Interval)[keyof typeof Interval];
                }
                const TaxBehavior: {
                    readonly Inclusive: "inclusive";
                    readonly Exclusive: "exclusive";
                };
                type TaxBehavior = (typeof TaxBehavior)[keyof typeof TaxBehavior];
            }
        }
    }
    const Mode: {
        readonly Invoice: "invoice";
        readonly Subscription: "subscription";
        readonly Custom: "custom";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    const TaxBehavior: {
        readonly Exclusive: "exclusive";
        readonly Inclusive: "inclusive";
        readonly Unspecified: "unspecified";
    };
    type TaxBehavior = (typeof TaxBehavior)[keyof typeof TaxBehavior];
}
//# sourceMappingURL=CreatePaymentLinkRequest.d.ts.map