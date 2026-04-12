import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         startDate: "2024-01-01T00:00:00Z",
 *         endDate: "2024-12-31T23:59:59Z"
 *     }
 */
export interface AnalyticsRevenueGetTimeSeriesRequest {
    /** Start date (ISO 8601) */
    startDate: string;
    /** End date (ISO 8601) */
    endDate: string;
    /** Time granularity for data points */
    granularity?: RevKeen.AnalyticsRevenueGetTimeSeriesRequestGranularity;
}
//# sourceMappingURL=AnalyticsRevenueGetTimeSeriesRequest.d.ts.map