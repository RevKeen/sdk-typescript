import type * as RevKeen from "../index.js";
/**
 * The test event that was sent, including delivery status.
 */
export interface TestEventResponse {
    /** Whether the test event was created */
    success: boolean;
    event?: RevKeen.Event;
    /** Additional information */
    message?: string;
}
//# sourceMappingURL=TestEventResponse.d.ts.map