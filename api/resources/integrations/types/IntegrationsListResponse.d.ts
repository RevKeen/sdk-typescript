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
            syncEnabled?: boolean;
            status: Item.Status | null;
            lastSyncAt: string | null;
            lastSyncError: string | null;
            syncHealth?: Item.SyncHealth;
            providerState?: Item.ProviderState | null;
            syncInterval?: Item.SyncInterval;
            configuration?: Record<string, unknown>;
            createdAt: string;
            updatedAt: string;
        }
        namespace Item {
            const Provider: {
                readonly Practicehub: "practicehub";
                readonly Wodify: "wodify";
                readonly Terminal: "terminal";
            };
            type Provider = (typeof Provider)[keyof typeof Provider];
            const Status: {
                readonly Connected: "connected";
                readonly Error: "error";
                readonly Syncing: "syncing";
                readonly Idle: "idle";
            };
            type Status = (typeof Status)[keyof typeof Status];
            const SyncHealth: {
                readonly Healthy: "healthy";
                readonly Degraded: "degraded";
                readonly Paused: "paused";
            };
            type SyncHealth = (typeof SyncHealth)[keyof typeof SyncHealth];
            interface ProviderState {
                consecutiveErrors: number;
                lastErrorAt: string | null;
                lastSyncAt: string | null;
                mode: string;
            }
            interface SyncInterval {
                hasRepeatableJob: boolean;
                intervalMs?: number;
                nextRun?: string;
            }
        }
    }
}
//# sourceMappingURL=IntegrationsListResponse.d.ts.map