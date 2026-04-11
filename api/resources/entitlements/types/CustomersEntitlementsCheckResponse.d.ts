export interface CustomersEntitlementsCheckResponse {
    data: CustomersEntitlementsCheckResponse.Data;
}
export declare namespace CustomersEntitlementsCheckResponse {
    interface Data {
        benefitKey: string;
        hasAccess: boolean;
        accessLevel: Data.AccessLevel;
        status: Data.Status | null;
        benefit: Data.Benefit | null;
        reason: string | null;
    }
    namespace Data {
        const AccessLevel: {
            readonly Full: "full";
            readonly Partial: "partial";
            readonly None: "none";
        };
        type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel];
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
            defaultValue?: unknown;
            config?: unknown;
        }
    }
}
//# sourceMappingURL=CustomersEntitlementsCheckResponse.d.ts.map