import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace AppsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AppsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AppsClient.Options>;
    constructor(options: AppsClient.Options);
    /**
     * Install an app for the authenticated tenant. Requires 'apps:write' scope.
     *
     * @param {RevKeen.PostAppsAppKeyInstallRequest} request
     * @param {AppsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.apps.installAnApp({
     *         appKey: "quaderno"
     *     })
     */
    installAnApp(request: RevKeen.PostAppsAppKeyInstallRequest, requestOptions?: AppsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PostAppsAppKeyInstallResponse>;
    private __installAnApp;
    /**
     * Uninstall an app for the authenticated tenant. Requires 'apps:write' scope.
     *
     * @param {RevKeen.DeleteAppsAppKeyInstallRequest} request
     * @param {AppsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.apps.uninstallAnApp({
     *         appKey: "quaderno"
     *     })
     */
    uninstallAnApp(request: RevKeen.DeleteAppsAppKeyInstallRequest, requestOptions?: AppsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DeleteAppsAppKeyInstallResponse>;
    private __uninstallAnApp;
    /**
     * Get entitlements for the authenticated tenant. Requires 'apps:read' scope.
     *
     * @param {AppsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.apps.getEntitlements()
     */
    getEntitlements(requestOptions?: AppsClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetAppsEntitlementsResponse>;
    private __getEntitlements;
}
//# sourceMappingURL=Client.d.ts.map