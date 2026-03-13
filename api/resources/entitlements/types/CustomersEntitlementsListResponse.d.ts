export interface CustomersEntitlementsListResponse {
    data: CustomersEntitlementsListResponse.Data.Item[];
    pagination: CustomersEntitlementsListResponse.Pagination;
    customer: CustomersEntitlementsListResponse.Customer;
}
export declare namespace CustomersEntitlementsListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            customerId: string;
            benefitId: string;
            benefit: Item.Benefit | null;
            grantedAt: string;
            expiresAt: string | null;
            metadata: Record<string, unknown>;
            status: Item.Status;
            hasAccess: boolean;
            accessLevel: Item.AccessLevel;
            subscriptionId: string | null;
            subscriptionStatus: string | null;
        }
        namespace Item {
            interface Benefit {
                id: string;
                name: string;
                description: string | null;
                benefitType: string;
                benefitKey: string;
                category: string | null;
                iconUrl: string | null;
                displayOrder: string | null;
                isActive: boolean | null;
                defaultValue?: unknown | null;
                config?: unknown | null;
            }
            const Status: {
                readonly Active: "active";
                readonly Trialing: "trialing";
                readonly Grace: "grace";
                readonly PastDue: "past_due";
                readonly Restricted: "restricted";
                readonly Suspended: "suspended";
                readonly Canceled: "canceled";
            };
            type Status = (typeof Status)[keyof typeof Status];
            const AccessLevel: {
                readonly Full: "full";
                readonly Partial: "partial";
                readonly None: "none";
            };
            type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel];
        }
    }
    interface Pagination {
        limit: number;
        offset: number;
        total: number;
    }
    interface Customer {
        id: string;
        email: string;
        name: string | null;
    }
}
//# sourceMappingURL=CustomersEntitlementsListResponse.d.ts.map