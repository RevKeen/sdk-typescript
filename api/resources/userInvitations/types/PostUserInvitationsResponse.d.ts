export interface PostUserInvitationsResponse {
    data: PostUserInvitationsResponse.Data;
    requestId: string;
}
export declare namespace PostUserInvitationsResponse {
    interface Data {
        id: string;
        email: string;
        role: Data.Role;
        merchantId: string;
        status: string;
        created_at: string;
    }
    namespace Data {
        const Role: {
            readonly Admin: "admin";
            readonly Member: "member";
            readonly Viewer: "viewer";
        };
        type Role = (typeof Role)[keyof typeof Role];
    }
}
//# sourceMappingURL=PostUserInvitationsResponse.d.ts.map