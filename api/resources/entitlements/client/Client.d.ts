import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace EntitlementsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Entitlements grant customers access to features, benefits, or content tied to their subscription or purchase. Use these endpoints to list granted entitlements for a customer and to check whether a customer currently has access to a specific benefit.
 *
 * **Required Scopes:**
 * - `entitlements:read` - List and check customer entitlements
 */
export declare class EntitlementsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EntitlementsClient.Options>;
    constructor(options: EntitlementsClient.Options);
    /**
     * Retrieve all entitlements (benefits/features) for a specific customer. Includes computed access status based on subscription state.
     *
     * @param {RevKeen.CustomersEntitlementsListRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.customersEntitlementsList({
     *         customerId: "customerId"
     *     })
     */
    customersEntitlementsList(request: RevKeen.CustomersEntitlementsListRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersEntitlementsListResponse>;
    private __customersEntitlementsList;
    /**
     * Grant a benefit/entitlement to a customer. Provide either benefitId or benefitKey to identify the benefit. Emits an entitlement.granted webhook event.
     *
     * @param {RevKeen.CustomersEntitlementsGrantRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.customersEntitlementsGrant({
     *         customerId: "customerId"
     *     })
     */
    customersEntitlementsGrant(request: RevKeen.CustomersEntitlementsGrantRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersEntitlementsGrantResponse>;
    private __customersEntitlementsGrant;
    /**
     * Revoke an entitlement from a customer by benefit key. Provide benefitKey as a query parameter. Emits an entitlement.revoked webhook event.
     *
     * @param {RevKeen.CustomersEntitlementsRevokeByKeyRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.customersEntitlementsRevokeByKey({
     *         customerId: "customerId"
     *     })
     */
    customersEntitlementsRevokeByKey(request: RevKeen.CustomersEntitlementsRevokeByKeyRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersEntitlementsRevokeByKeyResponse>;
    private __customersEntitlementsRevokeByKey;
    /**
     * Check if a customer has access to a specific benefit by key. This is the primary endpoint for feature gating and licensing checks.
     *
     * @param {RevKeen.CustomersEntitlementsCheckRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.customersEntitlementsCheck({
     *         customerId: "customerId",
     *         benefitKey: "benefitKey"
     *     })
     */
    customersEntitlementsCheck(request: RevKeen.CustomersEntitlementsCheckRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersEntitlementsCheckResponse>;
    private __customersEntitlementsCheck;
    /**
     * Revoke a specific entitlement from a customer by entitlement ID. Emits an entitlement.revoked webhook event.
     *
     * @param {RevKeen.CustomersEntitlementsRevokeByIdRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.customersEntitlementsRevokeById({
     *         customerId: "customerId",
     *         entitlementId: "entitlementId"
     *     })
     */
    customersEntitlementsRevokeById(request: RevKeen.CustomersEntitlementsRevokeByIdRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersEntitlementsRevokeByIdResponse>;
    private __customersEntitlementsRevokeById;
    /**
     * Retrieve all entitlements for a customer. Pass `customer_id` as a query parameter. Includes computed access status based on subscription state.
     *
     * @param {RevKeen.EntitlementsListRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.list({
     *         customer_id: "customer_id"
     *     })
     */
    list(request: RevKeen.EntitlementsListRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.EntitlementListResponse>;
    private __list;
    /**
     * Check if a customer has access to a specific benefit by key. This is the primary endpoint for feature gating and licensing checks.
     *
     * @param {RevKeen.EntitlementsCheckRequest} request
     * @param {EntitlementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.entitlements.check({
     *         customer_id: "customer_id",
     *         benefit_key: "benefit_key"
     *     })
     */
    check(request: RevKeen.EntitlementsCheckRequest, requestOptions?: EntitlementsClient.RequestOptions): core.HttpResponsePromise<RevKeen.EntitlementCheckResponse>;
    private __check;
}
//# sourceMappingURL=Client.d.ts.map