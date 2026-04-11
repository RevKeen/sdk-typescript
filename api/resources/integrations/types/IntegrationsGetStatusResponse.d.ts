export interface IntegrationsGetStatusResponse {
    data: IntegrationsGetStatusResponse.Data | null;
}
export declare namespace IntegrationsGetStatusResponse {
    interface Data {
        id: string;
        provider: Data.Provider;
        isActive: boolean;
        syncEnabled?: boolean;
        status: Data.Status | null;
        lastSyncAt: string | null;
        lastSyncError: string | null;
        syncHealth?: Data.SyncHealth;
        providerState?: Data.ProviderState | null;
        syncInterval?: Data.SyncInterval;
        configuration?: Record<string, unknown>;
        createdAt: string;
        updatedAt: string;
    }
    namespace Data {
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
//# sourceMappingURL=IntegrationsGetStatusResponse.d.ts.map