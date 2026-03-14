/**
 * @example
 *     {
 *         source: "practicehub",
 *         merchantId: "merchantId",
 *         resourceType: "members"
 *     }
 */
export interface SyncStateUpdateRequest {
    /** Integration source (e.g., practicehub, wodify) */
    source: string;
    /** Merchant ID */
    merchantId: string;
    /** Resource type (e.g., members, products, payments) */
    resourceType: string;
    lastSyncAt?: string;
    lastSyncStatus?: SyncStateUpdateRequest.LastSyncStatus;
    lastSyncError?: string | null;
    cursor?: string | null;
    itemsSynced?: number;
}
export declare namespace SyncStateUpdateRequest {
    const LastSyncStatus: {
        readonly Idle: "idle";
        readonly Syncing: "syncing";
        readonly Success: "success";
        readonly Error: "error";
    };
    type LastSyncStatus = (typeof LastSyncStatus)[keyof typeof LastSyncStatus];
}
//# sourceMappingURL=SyncStateUpdateRequest.d.ts.map