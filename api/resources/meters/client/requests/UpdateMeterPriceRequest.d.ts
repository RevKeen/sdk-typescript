/**
 * @example
 *     {
 *         meterId: "meterId",
 *         priceId: "priceId"
 *     }
 */
export interface UpdateMeterPriceRequest {
    /** Meter ID */
    meterId: string;
    /** Price ID */
    priceId: string;
    unit_amount_minor?: number;
    flat_fee_minor?: number;
    package_size?: number;
    cost_per_unit_minor?: number;
    tiers?: UpdateMeterPriceRequest.Tiers.Item[];
}
export declare namespace UpdateMeterPriceRequest {
    type Tiers = Tiers.Item[];
    namespace Tiers {
        interface Item {
            /** Start of tier range */
            first_unit: number;
            /** End of tier range (null = unbounded) */
            last_unit?: number | null;
            /** Per-unit price in this tier (minor units) */
            unit_amount_minor: number;
            /** Flat fee for entering this tier (minor units) */
            flat_amount_minor?: number;
        }
    }
}
//# sourceMappingURL=UpdateMeterPriceRequest.d.ts.map