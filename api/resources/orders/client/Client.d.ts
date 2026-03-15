import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace OrdersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * One-off purchases with lifecycle operations: create, pay, cancel, and fulfill.
 *
 * **Required Scopes:**
 * - `orders:read` - List and retrieve orders
 * - `orders:write` - Create, cancel, fulfill orders
 *
 * **MCP Tools:** `orders_list`, `orders_create`, `orders_cancel`, `orders_fulfill`
 */
export declare class OrdersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<OrdersClient.Options>;
    constructor(options: OrdersClient.Options);
    /**
     * List all orders for the authenticated merchant. Supports filtering and cursor-based pagination.
     *
     * @param {RevKeen.OrdersListRequest} request
     * @param {OrdersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.orders.list()
     */
    list(request?: RevKeen.OrdersListRequest, requestOptions?: OrdersClient.RequestOptions): core.HttpResponsePromise<RevKeen.OrderListResponse>;
    private __list;
    /**
     * Creates a new order with line items. Orders start in draft status.
     *
     * @param {RevKeen.CreateOrderRequest} request
     * @param {OrdersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.orders.create({
     *         line_items: [{
     *                 description: "description",
     *                 unit_price: 1
     *             }]
     *     })
     */
    create(request: RevKeen.CreateOrderRequest, requestOptions?: OrdersClient.RequestOptions): core.HttpResponsePromise<RevKeen.Order>;
    private __create;
    /**
     * Retrieves an order by its ID, including line items.
     *
     * @param {RevKeen.OrdersRetrieveRequest} request
     * @param {OrdersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.orders.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.OrdersRetrieveRequest, requestOptions?: OrdersClient.RequestOptions): core.HttpResponsePromise<RevKeen.Order>;
    private __retrieve;
    /**
     * Process payment for an order. Creates an invoice and charges the customer's payment method.
     *
     * @param {RevKeen.PayOrderRequest} request
     * @param {OrdersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.orders.pay({
     *         id: "id"
     *     })
     */
    pay(request: RevKeen.PayOrderRequest, requestOptions?: OrdersClient.RequestOptions): core.HttpResponsePromise<RevKeen.Order>;
    private __pay;
    /**
     * Cancels an order. Only orders that haven't been paid or fulfilled can be canceled.
     *
     * @param {RevKeen.CancelOrderRequest} request
     * @param {OrdersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.orders.cancel({
     *         id: "id"
     *     })
     */
    cancel(request: RevKeen.CancelOrderRequest, requestOptions?: OrdersClient.RequestOptions): core.HttpResponsePromise<RevKeen.Order>;
    private __cancel;
    /**
     * Mark an order as fulfilled. Optionally include shipping tracking information.
     *
     * @param {RevKeen.FulfillOrderRequest} request
     * @param {OrdersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.orders.fulfill({
     *         id: "id"
     *     })
     */
    fulfill(request: RevKeen.FulfillOrderRequest, requestOptions?: OrdersClient.RequestOptions): core.HttpResponsePromise<RevKeen.Order>;
    private __fulfill;
}
//# sourceMappingURL=Client.d.ts.map