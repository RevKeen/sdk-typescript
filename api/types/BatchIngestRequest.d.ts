import type * as RevKeen from "../index.js";
/**
 * A batch of usage events to ingest, supporting up to 1000 events per request.
 */
export interface BatchIngestRequest {
    /** Array of usage events (1–1000) */
    events: RevKeen.UsageEvent[];
}
//# sourceMappingURL=BatchIngestRequest.d.ts.map