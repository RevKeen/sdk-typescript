import type * as RevKeen from "../index.js";
export interface PaymentSecurityResult {
    avs: RevKeen.AvsCodeInterpretation | null;
    cvv: RevKeen.CvvCodeInterpretation | null;
    /** Combined risk level from AVS + CVV checks */
    overall_risk_level: PaymentSecurityResult.OverallRiskLevel;
    /** Recommended action based on security checks */
    recommendation: PaymentSecurityResult.Recommendation;
}
export declare namespace PaymentSecurityResult {
    /** Combined risk level from AVS + CVV checks */
    const OverallRiskLevel: {
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Unknown: "unknown";
    };
    type OverallRiskLevel = (typeof OverallRiskLevel)[keyof typeof OverallRiskLevel];
    /** Recommended action based on security checks */
    const Recommendation: {
        readonly Accept: "accept";
        readonly Review: "review";
        readonly Decline: "decline";
    };
    type Recommendation = (typeof Recommendation)[keyof typeof Recommendation];
}
//# sourceMappingURL=PaymentSecurityResult.d.ts.map