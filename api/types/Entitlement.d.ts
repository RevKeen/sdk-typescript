import type * as RevKeen from "../index.js";
export interface Entitlement {
    id: string;
    customerId: string;
    benefitId: string;
    benefit: RevKeen.Benefit | null;
    grantedAt: string;
    expiresAt: string | null;
    metadata: Record<string, unknown>;
    status: Entitlement.Status;
    hasAccess: boolean;
    accessLevel: Entitlement.AccessLevel;
    subscriptionId: string | null;
    subscriptionStatus: string | null;
}
export declare namespace Entitlement {
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
//# sourceMappingURL=Entitlement.d.ts.map