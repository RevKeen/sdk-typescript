/**
 * Error response returned when a usage event operation fails.
 */
export interface UsageEventError {
    error: UsageEventError.Error_;
}
export declare namespace UsageEventError {
    type Error_ = string | {
        message: string;
        type: string;
    };
}
//# sourceMappingURL=UsageEventError.d.ts.map