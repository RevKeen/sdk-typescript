/**
 * Error response returned when a meter operation fails.
 */
export interface MeterError {
    error: MeterError.Error_;
}
export declare namespace MeterError {
    type Error_ = string | {
        message: string;
        type: string;
    };
}
//# sourceMappingURL=MeterError.d.ts.map