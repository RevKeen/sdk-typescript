export interface DeclineAnalyticsResponse {
    data: DeclineAnalyticsResponse.Data;
}
export declare namespace DeclineAnalyticsResponse {
    interface Data {
        total_attempts: number;
        approved_count: number;
        declined_count: number;
        approval_rate: number;
        soft_decline_count: number;
        hard_decline_count: number;
        top_decline_categories: Data.TopDeclineCategories.Item[];
        /** Breakdown by gateway */
        by_gateway: Record<string, Data.ByGateway.Value>;
    }
    namespace Data {
        type TopDeclineCategories = TopDeclineCategories.Item[];
        namespace TopDeclineCategories {
            interface Item {
                category: string;
                count: number;
            }
        }
        namespace ByGateway {
            interface Value {
                total?: number;
                approved?: number;
                declined?: number;
            }
        }
    }
}
//# sourceMappingURL=DeclineAnalyticsResponse.d.ts.map