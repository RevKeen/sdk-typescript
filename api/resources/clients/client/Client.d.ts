import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace ClientsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ClientsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ClientsClient.Options>;
    constructor(options: ClientsClient.Options);
    /**
     * Get supported currencies for a client based on client_nmi_processors configuration. Requires 'clients:read' scope.
     *
     * @param {RevKeen.GetClientsIdConfiguredCurrenciesRequest} request
     * @param {ClientsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.clients.getConfiguredCurrencies({
     *         id: "cli_123"
     *     })
     */
    getConfiguredCurrencies(request: RevKeen.GetClientsIdConfiguredCurrenciesRequest, requestOptions?: ClientsClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetClientsIdConfiguredCurrenciesResponse>;
    private __getConfiguredCurrencies;
}
//# sourceMappingURL=Client.d.ts.map