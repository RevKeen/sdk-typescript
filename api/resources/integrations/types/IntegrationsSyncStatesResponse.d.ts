export interface IntegrationsSyncStatesResponse {
    success: boolean;
    data: IntegrationsSyncStatesResponse.Data.Item[];
}
export declare namespace IntegrationsSyncStatesResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            resourceType: string;
            lastSyncAt: string | null;
            lastSyncStatus: string | null;
            itemsProcessed: number | null;
            lastSyncError: string | null;
            cursor: string | null;
        }
    }
}
//# sourceMappingURL=IntegrationsSyncStatesResponse.d.ts.map