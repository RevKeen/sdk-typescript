import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace DiscountsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create discount codes for percentage or fixed amount off. Set usage limits and expiration dates.
 *
 * **Required Scopes:**
 * - `discounts:read` - List and retrieve discounts
 * - `discounts:write` - Create, update, delete discounts
 */
export declare class DiscountsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DiscountsClient.Options>;
    constructor(options: DiscountsClient.Options);
    /**
     * Retrieve a paginated list of discounts.
     *
     * @param {RevKeen.DiscountsListRequest} request
     * @param {DiscountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.discounts.list({
     *         limit: 20
     *     })
     */
    list(request?: RevKeen.DiscountsListRequest, requestOptions?: DiscountsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DiscountListResponse>;
    private __list;
    /**
     * Create a new discount code.
     *
     * @param {RevKeen.CreateDiscountInput} request
     * @param {DiscountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.discounts.create({
     *         code: "SUMMER20",
     *         name: "Summer Sale 20% Off",
     *         discount_type: "percentage",
     *         discount_value: 20
     *     })
     */
    create(request: RevKeen.CreateDiscountInput, requestOptions?: DiscountsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DiscountCreateResponse>;
    private __create;
    /**
     * Retrieve a single discount by its ID.
     *
     * @param {RevKeen.DiscountsRetrieveRequest} request
     * @param {DiscountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.discounts.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.DiscountsRetrieveRequest, requestOptions?: DiscountsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DiscountRetrieveResponse>;
    private __retrieve;
    /**
     * Archive a discount (soft delete). The discount code can no longer be used.
     *
     * @param {RevKeen.DiscountsDeleteRequest} request
     * @param {DiscountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.discounts.delete({
     *         id: "id"
     *     })
     */
    delete(request: RevKeen.DiscountsDeleteRequest, requestOptions?: DiscountsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DiscountDeleteResponse>;
    private __delete;
    /**
     * Update an existing discount. Note: discount code and type cannot be changed.
     *
     * @param {RevKeen.UpdateDiscountInput} request
     * @param {DiscountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.discounts.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.UpdateDiscountInput, requestOptions?: DiscountsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DiscountUpdateResponse>;
    private __update;
}
//# sourceMappingURL=Client.d.ts.map