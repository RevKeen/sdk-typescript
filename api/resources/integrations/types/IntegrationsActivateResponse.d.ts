export interface IntegrationsActivateResponse {
    success: boolean;
    data: IntegrationsActivateResponse.Data;
}
export declare namespace IntegrationsActivateResponse {
    interface Data {
        id: string;
        provider: Data.Provider;
        isActive: boolean;
        status: Data.Status | null;
        lastSyncAt: string | null;
        lastSyncError: string | null;
        syncInterval?: Data.SyncInterval;
        createdAt: string;
        updatedAt: string;
    }
    namespace Data {
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
//# sourceMappingURL=IntegrationsActivateResponse.d.ts.map