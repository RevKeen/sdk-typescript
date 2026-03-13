export interface SyncStateUpdateResponse {
    data: SyncStateUpdateResponse.Data;
    created: boolean;
}
export declare namespace SyncStateUpdateResponse {
    interface Data {
        id: string;
        merchantId: string;
        provider: string;
        resourceType: string;
        lastSyncAt: string | null;
        lastSyncStatus: Data.LastSyncStatus | null;
        lastSyncError: string | null;
        cursor: string | null;
        itemsSynced: number | null;
        createdAt: string;
        updatedAt: string;
    }
    namespace Data {
        const LastSyncStatus: {
            readonly Idle: "idle";
            readonly Syncing: "syncing";
            readonly Success: "success";
            readonly Error: "error";
        };
        type LastSyncStatus = (typeof LastSyncStatus)[keyof typeof LastSyncStatus];
    }
}
//# sourceMappingURL=SyncStateUpdateResponse.d.ts.map