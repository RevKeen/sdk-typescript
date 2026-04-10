/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdatePriceRequest {
    /** Price ID */
    id: string;
    /** Whether the price is active */
    active?: boolean;
    /** Display name */
    nickname?: string | null;
    /** Stable key for API lookups */
    lookup_key?: string | null;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=UpdatePriceRequest.d.ts.map