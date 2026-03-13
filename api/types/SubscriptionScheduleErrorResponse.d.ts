export interface SubscriptionScheduleErrorResponse {
    error: SubscriptionScheduleErrorResponse.Error_;
}
export declare namespace SubscriptionScheduleErrorResponse {
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
//# sourceMappingURL=SubscriptionScheduleErrorResponse.d.ts.map