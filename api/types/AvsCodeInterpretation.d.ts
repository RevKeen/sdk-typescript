/**
 * AVS verification result
 */
export interface AvsCodeInterpretation {
    /** Raw AVS response code from gateway */
    code: string;
    /** Type of address match */
    match_type: AvsCodeInterpretation.MatchType;
    /** Whether the street address matched */
    address_match: boolean | null;
    /** Whether the ZIP/postal code matched */
    zip_match: boolean | null;
    /** Human-readable description of the AVS result */
    description: string;
    /** Risk level based on AVS result. low: full match, medium: partial match, high: no match */
    risk_level: AvsCodeInterpretation.RiskLevel;
}
export declare namespace AvsCodeInterpretation {
    /** Type of address match */
    const MatchType: {
        readonly FullMatch: "full_match";
        readonly PartialMatch: "partial_match";
        readonly NoMatch: "no_match";
        readonly NotSupported: "not_supported";
        readonly NotAvailable: "not_available";
        readonly Error: "error";
    };
    type MatchType = (typeof MatchType)[keyof typeof MatchType];
    /** Risk level based on AVS result. low: full match, medium: partial match, high: no match */
    const RiskLevel: {
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Unknown: "unknown";
    };
    type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
}
//# sourceMappingURL=AvsCodeInterpretation.d.ts.map