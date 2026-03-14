export interface GetPaymentLinkResponse {
    id: string;
    merchant_id: string;
    public_id: string;
    name?: string;
    slug?: string | null;
    mode: GetPaymentLinkResponse.Mode;
    status: GetPaymentLinkResponse.Status;
    amount_minor?: number | null;
    currency?: string;
    invoice_id?: string | null;
    subscription_id?: string | null;
    product_ids?: string[];
    line_items?: GetPaymentLinkResponse.LineItems.Item[];
    /** Custom URL to redirect after successful payment. Supports placeholders: {CHECKOUT_ID}, {TRANSACTION_ID}, {PAYMENT_ID}, {CUSTOMER_ID}, {AMOUNT}, {CURRENCY}, {PORTAL_URL}. If not set, redirects to RevKeen's default success page. */
    success_url?: string | null;
    /** Custom URL to redirect if customer cancels the checkout. If not set, no cancel redirect is configured. */
    cancel_url?: string | null;
    redirect_url?: string | null;
    collect_shipping?: boolean;
    allow_promotion_codes?: boolean;
    tax_behavior?: GetPaymentLinkResponse.TaxBehavior;
    metadata?: Record<string, unknown> | null;
    expires_at?: string | null;
    created_at: string;
    updated_at: string;
}
export declare namespace GetPaymentLinkResponse {
    const Mode: {
        readonly Invoice: "invoice";
        readonly Subscription: "subscription";
        readonly Custom: "custom";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    const Status: {
        readonly Draft: "draft";
        readonly Active: "active";
        readonly Expired: "expired";
        readonly Completed: "completed";
    };
    type Status = (typeof Status)[keyof typeof Status];
    type LineItems = LineItems.Item[];
    namespace LineItems {
        interface Item {
            product_id: string;
            price_id?: string | null;
            quantity: number;
            merchant_reference?: string | null;
            is_adhoc: boolean;
            product_details?: Item.ProductDetails;
        }
        namespace Item {
            interface ProductDetails {
                name: string;
                description?: string | null;
                unit_amount: number;
                currency: string;
                recurring?: ProductDetails.Recurring | null;
            }
            namespace ProductDetails {
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
            }
        }
    }
    const TaxBehavior: {
        readonly Exclusive: "exclusive";
        readonly Inclusive: "inclusive";
        readonly Unspecified: "unspecified";
    };
    type TaxBehavior = (typeof TaxBehavior)[keyof typeof TaxBehavior];
}
//# sourceMappingURL=GetPaymentLinkResponse.d.ts.map