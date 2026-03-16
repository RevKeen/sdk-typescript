export interface CustomersEntitlementsRevokeByKeyResponse {
    data: CustomersEntitlementsRevokeByKeyResponse.Data;
    message: string;
}
export declare namespace CustomersEntitlementsRevokeByKeyResponse {
    interface Data {
        id: string;
        customerId: string;
        benefitId: string;
        benefit: Data.Benefit | null;
        grantedAt: string;
        expiresAt: string | null;
        metadata: Record<string, unknown>;
        status: Data.Status;
        hasAccess: boolean;
        accessLevel: Data.AccessLevel;
        subscriptionId: string | null;
        subscriptionStatus: string | null;
    }
    namespace Data {
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
//# sourceMappingURL=CustomersEntitlementsRevokeByKeyResponse.d.ts.map