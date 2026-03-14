export interface IntegrationsListResponse {
    data: IntegrationsListResponse.Data.Item[];
}
export declare namespace IntegrationsListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            provider: Item.Provider;
            isActive: boolean;
            status: Item.Status | null;
            lastSyncAt: string | null;
            lastSyncError: string | null;
            syncInterval?: Item.SyncInterval;
            createdAt: string;
            updatedAt: string;
        }
        namespace Item {
            const Provider: {
                readonly Practicehub: "practicehub";
                readonly Wodify: "wodify";
            };
            type Provider = (typeof Provider)[keyof typeof Provider];
            const Status: {
                readonly Connected: "connected";
                readonly Error: "error";
                readonly Syncing: "syncing";
                readonly Idle: "idle";
            };
            type Status = (typeof Status)[keyof typeof Status];
            interface SyncInterval {
                hasRepeatableJob: boolean;
                intervalMs?: number;
                nextRun?: string;
            }
        }
    }
}
//# sourceMappingURL=IntegrationsListResponse.d.ts.map