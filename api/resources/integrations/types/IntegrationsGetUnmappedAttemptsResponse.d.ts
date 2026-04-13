export interface IntegrationsGetUnmappedAttemptsResponse {
    success: boolean;
    data: IntegrationsGetUnmappedAttemptsResponse.Data.Item[];
    totalCount: number;
}
export declare namespace IntegrationsGetUnmappedAttemptsResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            externalPackageId: string;
            externalPackageName: string | null;
            count: number;
            lastSeenAt: string | null;
        }
    }
}
//# sourceMappingURL=IntegrationsGetUnmappedAttemptsResponse.d.ts.map