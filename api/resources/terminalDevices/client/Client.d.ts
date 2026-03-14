import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace TerminalDevicesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * List and inspect terminal devices registered for your merchant account. Use this endpoint to discover device IDs before initiating terminal payments.
 *
 * **Required Scopes:**
 * - `terminal:read` - List and retrieve terminal devices
 *
 * **MCP Tools:** `terminal_devices_list`, `terminal_devices_get`
 */
export declare class TerminalDevicesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TerminalDevicesClient.Options>;
    constructor(options: TerminalDevicesClient.Options);
    /**
     * List all terminal devices registered for the authenticated merchant. Use this endpoint to discover device IDs before initiating a terminal payment.
     *
     * @param {RevKeen.ListTerminalDevicesRequest} request
     * @param {TerminalDevicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.terminalDevices.list()
     */
    list(request?: RevKeen.ListTerminalDevicesRequest, requestOptions?: TerminalDevicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalDeviceListResponse>;
    private __list;
    /**
     * Get a terminal device by ID, including its current status and heartbeat information.
     *
     * @param {RevKeen.RetrieveTerminalDevicesRequest} request
     * @param {TerminalDevicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.terminalDevices.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.RetrieveTerminalDevicesRequest, requestOptions?: TerminalDevicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalDeviceResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map