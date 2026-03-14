import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace SyncStateClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Track sync progress for external integrations. Get and update sync state by resource type.
 */
export declare class SyncStateClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SyncStateClient.Options>;
    constructor(options: SyncStateClient.Options);
    /**
     * Get all sync states for a specific integration (by provider and merchant).
     *
     * @param {RevKeen.SyncStateListRequest} request
     * @param {SyncStateClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.syncState.syncStateList({
     *         source: "practicehub",
     *         merchantId: "merchantId"
     *     })
     */
    syncStateList(request: RevKeen.SyncStateListRequest, requestOptions?: SyncStateClient.RequestOptions): core.HttpResponsePromise<RevKeen.SyncStateListResponse>;
    private __syncStateList;
    /**
     * Update or create sync state for a specific resource type. Used by worker after sync jobs.
     *
     * @param {RevKeen.SyncStateUpdateRequest} request
     * @param {SyncStateClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.syncState.syncStateUpdate({
     *         source: "practicehub",
     *         merchantId: "merchantId",
     *         resourceType: "members"
     *     })
     */
    syncStateUpdate(request: RevKeen.SyncStateUpdateRequest, requestOptions?: SyncStateClient.RequestOptions): core.HttpResponsePromise<RevKeen.SyncStateUpdateResponse>;
    private __syncStateUpdate;
}
//# sourceMappingURL=Client.d.ts.map