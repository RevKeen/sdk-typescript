import type * as RevKeen from "../index.js";
export interface VoidListResponse {
    data: RevKeen.Void[];
    meta: VoidListResponse.Meta;
}
export declare namespace VoidListResponse {
    interface Meta {
        total: number;
        limit: number;
        offset: number;
        has_more: boolean;
    }
}
//# sourceMappingURL=VoidListResponse.d.ts.map