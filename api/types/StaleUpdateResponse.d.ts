/**
 * Returned when an external upsert is skipped because the incoming timestamp is older than the stored version.
 */
export interface StaleUpdateResponse {
    ignored: boolean;
    reason: StaleUpdateResponse.Reason;
    stored_timestamp: string;
    incoming_timestamp: string;
    requestId: string;
}
export declare namespace StaleUpdateResponse {
    const Reason: {
        readonly StaleUpdate: "stale_update";
    };
    type Reason = (typeof Reason)[keyof typeof Reason];
}
//# sourceMappingURL=StaleUpdateResponse.d.ts.map