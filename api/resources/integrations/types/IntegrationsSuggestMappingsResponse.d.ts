export interface IntegrationsSuggestMappingsResponse {
    success: boolean;
    suggestions: IntegrationsSuggestMappingsResponse.Suggestions.Item[];
}
export declare namespace IntegrationsSuggestMappingsResponse {
    type Suggestions = Suggestions.Item[];
    namespace Suggestions {
        interface Item {
            externalId: string;
            internalId: string;
            confidence: number;
            reasoning: string;
        }
    }
}
//# sourceMappingURL=IntegrationsSuggestMappingsResponse.d.ts.map