import type * as RevKeen from "../index.js";
export interface EntitlementListResponse {
    data: RevKeen.Entitlement[];
    pagination: EntitlementListResponse.Pagination;
    customer: EntitlementListResponse.Customer;
}
export declare namespace EntitlementListResponse {
    interface Pagination {
        limit: number;
        offset: number;
        total: number;
    }
    interface Customer {
        id: string;
        email: string;
        name: string | null;
    }
}
//# sourceMappingURL=EntitlementListResponse.d.ts.map