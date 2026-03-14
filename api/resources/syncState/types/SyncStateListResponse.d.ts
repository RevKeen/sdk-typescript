export interface SyncStateListResponse {
    data: SyncStateListResponse.Data.Item[];
}
export declare namespace SyncStateListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            merchantId: string;
            provider: string;
            resourceType: string;
            lastSyncAt: string | null;
            lastSyncStatus: Item.LastSyncStatus | null;
            lastSyncError: string | null;
            cursor: string | null;
            itemsSynced: number | null;
            createdAt: string;
            updatedAt: string;
        }
        namespace Item {
            const LastSyncStatus: {
                readonly Idle: "idle";
                readonly Syncing: "syncing";
                readonly Success: "success";
                readonly Error: "error";
            };
            type LastSyncStatus = (typeof LastSyncStatus)[keyof typeof LastSyncStatus];
        }
    }
}
//# sourceMappingURL=SyncStateListResponse.d.ts.map