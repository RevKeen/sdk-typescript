export interface GetUserInvitationsResponse {
    data: GetUserInvitationsResponse.Data.Item[];
    requestId: string;
}
export declare namespace GetUserInvitationsResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            email: string;
            role: Item.Role;
            merchantId: string;
            status: string;
            created_at: string;
        }
        namespace Item {
            const Role: {
                readonly Admin: "admin";
                readonly Member: "member";
                readonly Viewer: "viewer";
            };
            type Role = (typeof Role)[keyof typeof Role];
        }
    }
}
//# sourceMappingURL=GetUserInvitationsResponse.d.ts.map