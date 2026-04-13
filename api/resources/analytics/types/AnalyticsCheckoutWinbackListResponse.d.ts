export interface AnalyticsCheckoutWinbackListResponse {
    opportunities: AnalyticsCheckoutWinbackListResponse.Opportunities.Item[];
    total: number;
    page: number;
    pageSize: number;
}
export declare namespace AnalyticsCheckoutWinbackListResponse {
    type Opportunities = Opportunities.Item[];
    namespace Opportunities {
        interface Item {
            id: string;
            customerId: string;
            customerEmail: string | null;
            opportunityType: Item.OpportunityType;
            status: Item.Status;
            potentialValueCents: number | null;
            currency: string;
            previousPurchasesCents: number | null;
            cancelReason: string | null;
            lastActivityAt: string | null;
            winbackEmailsSent: number;
            specialOfferCode: string | null;
            specialOfferDiscount: number | null;
            createdAt: string;
            expiresAt: string | null;
        }
        namespace Item {
            const OpportunityType: {
                readonly CancelledSubscription: "cancelled_subscription";
                readonly RepeatAbandoner: "repeat_abandoner";
                readonly LapsedCustomer: "lapsed_customer";
            };
            type OpportunityType = (typeof OpportunityType)[keyof typeof OpportunityType];
            const Status: {
                readonly Identified: "identified";
                readonly Contacted: "contacted";
                readonly Converted: "converted";
                readonly Declined: "declined";
                readonly Expired: "expired";
            };
            type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
//# sourceMappingURL=AnalyticsCheckoutWinbackListResponse.d.ts.map