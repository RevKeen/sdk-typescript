import type * as RevKeen from "../index.js";
export interface EntitlementCheck {
    benefitKey: string;
    hasAccess: boolean;
    accessLevel: EntitlementCheck.AccessLevel;
    status: EntitlementCheck.Status | null;
    benefit: RevKeen.Benefit | null;
    reason: string | null;
}
export declare namespace EntitlementCheck {
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
}
//# sourceMappingURL=EntitlementCheck.d.ts.map