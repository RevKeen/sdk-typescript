import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {
 *         provider: "practicehub",
 *         status: "connected"
 *     }
 */
export interface IntegrationsUpdateStatusRequest {
    provider: RevKeen.IntegrationsUpdateStatusRequestProvider;
    status: IntegrationsUpdateStatusRequest.Status;
    lastSyncError?: string;
}
export declare namespace IntegrationsUpdateStatusRequest {
    const Status: {
        readonly Connected: "connected";
        readonly Error: "error";
        readonly Syncing: "syncing";
        readonly Idle: "idle";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=IntegrationsUpdateStatusRequest.d.ts.map