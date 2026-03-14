/**
 * @example
 *     {
 *         email: "email",
 *         role: "admin"
 *     }
 */
export interface PostUserInvitationsRequest {
    email: string;
    role: PostUserInvitationsRequest.Role;
    merchantId?: string;
}
export declare namespace PostUserInvitationsRequest {
    const Role: {
        readonly Admin: "admin";
        readonly Member: "member";
        readonly Viewer: "viewer";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
//# sourceMappingURL=PostUserInvitationsRequest.d.ts.map