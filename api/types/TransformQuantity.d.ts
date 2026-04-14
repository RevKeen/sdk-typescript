/**
 * Optional quantity transform (package pricing) applied before tier lookup.
 */
export interface TransformQuantity {
    /** Package size — quantity is divided by this value before pricing. Must be >= 1. Example: `divide_by: 10` with `round: up` charges per pack of 10. */
    divide_by: number;
    /** Rounding mode when quantity is not an exact multiple of `divide_by`. */
    round: TransformQuantity.Round;
}
export declare namespace TransformQuantity {
    /** Rounding mode when quantity is not an exact multiple of `divide_by`. */
    const Round: {
        readonly Up: "up";
        readonly Down: "down";
    };
    type Round = (typeof Round)[keyof typeof Round];
}
//# sourceMappingURL=TransformQuantity.d.ts.map