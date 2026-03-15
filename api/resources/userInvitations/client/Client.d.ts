import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace UserInvitationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserInvitationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UserInvitationsClient.Options>;
    constructor(options: UserInvitationsClient.Options);
    /**
     * List pending invitations for the client. Requires admin role.
     *
     * @param {UserInvitationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.userInvitations.listInvitations()
     */
    listInvitations(requestOptions?: UserInvitationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetUserInvitationsResponse>;
    private __listInvitations;
    /**
     * Invite a new user to join the client. Requires admin role.
     *
     * @param {RevKeen.PostUserInvitationsRequest} request
     * @param {UserInvitationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.userInvitations.inviteUser({
     *         email: "email",
     *         role: "admin"
     *     })
     */
    inviteUser(request: RevKeen.PostUserInvitationsRequest, requestOptions?: UserInvitationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PostUserInvitationsResponse>;
    private __inviteUser;
    /**
     * Resend invitation email. Requires admin role.
     *
     * @param {RevKeen.PostUserInvitationsIdResendRequest} request
     * @param {UserInvitationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.userInvitations.resendInvitation({
     *         id: "id"
     *     })
     */
    resendInvitation(request: RevKeen.PostUserInvitationsIdResendRequest, requestOptions?: UserInvitationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PostUserInvitationsIdResendResponse>;
    private __resendInvitation;
    /**
     * Cancel/revoke invitation. Requires admin role.
     *
     * @param {RevKeen.DeleteUserInvitationsIdRequest} request
     * @param {UserInvitationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.userInvitations.cancelInvitation({
     *         id: "id"
     *     })
     */
    cancelInvitation(request: RevKeen.DeleteUserInvitationsIdRequest, requestOptions?: UserInvitationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DeleteUserInvitationsIdResponse>;
    private __cancelInvitation;
    /**
     * Accept invitation and complete signup. No auth required (uses invitation token).
     *
     * @param {RevKeen.PostUserInvitationsAcceptRequest} request
     * @param {UserInvitationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.userInvitations.acceptInvitation({
     *         invitationToken: "invitationToken",
     *         password: "password"
     *     })
     */
    acceptInvitation(request: RevKeen.PostUserInvitationsAcceptRequest, requestOptions?: UserInvitationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PostUserInvitationsAcceptResponse>;
    private __acceptInvitation;
}
//# sourceMappingURL=Client.d.ts.map