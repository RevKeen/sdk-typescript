/**
 * Error response returned when an event operation fails.
 */
export interface EventErrorResponse {
    error: EventErrorResponse.Error_;
}
export declare namespace EventErrorResponse {
    interface Error_ {
        /** Error type */
        type: string;
        /** Error code */
        code: string;
        /** Human-readable error message */
        message: string;
        /** Parameter that caused the error */
        param?: string;
    }
}
//# sourceMappingURL=EventErrorResponse.d.ts.map