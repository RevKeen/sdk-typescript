/**
 * CVV verification result
 */
export interface CvvCodeInterpretation {
    /** Raw CVV response code from gateway */
    code: string;
    /** Type of CVV match */
    match_type: CvvCodeInterpretation.MatchType;
    /** Human-readable description of the CVV result */
    description: string;
    /** Risk level based on CVV result. low: match, medium: not processed, high: no match */
    risk_level: CvvCodeInterpretation.RiskLevel;
}
export declare namespace CvvCodeInterpretation {
    /** Type of CVV match */
    const MatchType: {
        readonly Match: "match";
        readonly NoMatch: "no_match";
        readonly NotProcessed: "not_processed";
        readonly NotProvided: "not_provided";
        readonly IssuerNotCertified: "issuer_not_certified";
        readonly Error: "error";
    };
    type MatchType = (typeof MatchType)[keyof typeof MatchType];
    /** Risk level based on CVV result. low: match, medium: not processed, high: no match */
    const RiskLevel: {
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Unknown: "unknown";
    };
    type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
}
//# sourceMappingURL=CvvCodeInterpretation.d.ts.map