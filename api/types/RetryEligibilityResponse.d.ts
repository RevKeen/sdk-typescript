import type * as RevKeen from "../index.js";
export interface RetryEligibilityResponse {
    data: RetryEligibilityResponse.Data;
}
export declare namespace RetryEligibilityResponse {
    interface Data {
        /** Whether the subscription should be retried */
        should_retry: boolean;
        /** Explanation for the retry decision */
        reason: string;
        last_attempt: RevKeen.PaymentAttempt;
    }
}
//# sourceMappingURL=RetryEligibilityResponse.d.ts.map