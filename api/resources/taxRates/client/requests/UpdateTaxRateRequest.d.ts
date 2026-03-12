/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateTaxRateRequest {
    /** Tax Rate ID */
    id: string;
    /** Display name for the tax rate */
    display_name?: string;
    /** Description of the tax rate */
    description?: string | null;
    /** Tax jurisdiction */
    jurisdiction?: string | null;
    /** ISO 2-letter country code */
    country?: string | null;
    /** State/province code */
    state?: string | null;
    /** Whether the tax rate is active */
    active?: boolean;
    /** Custom key-value metadata */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=UpdateTaxRateRequest.d.ts.map