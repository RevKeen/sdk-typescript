export interface PriceTier {
    /** Upper bound of this tier (1-based inclusive). `null` = open-ended catch-all. Only the FINAL tier may set `up_to: null`. */
    up_to: number | null;
    /** Per-unit charge in minor currency units (cents). May be null if the tier charges only a flat fee. */
    unit_amount_minor: number | null;
    /** Flat fee charged once when quantity enters this tier. May be null if the tier charges only a per-unit amount. */
    flat_amount_minor: number | null;
}
//# sourceMappingURL=PriceTier.d.ts.map