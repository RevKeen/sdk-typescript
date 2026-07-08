import {
  cartSessionsAddLineItem,
  cartSessionsApplyDiscountCode,
  cartSessionsConvert,
  cartSessionsCreate,
  cartSessionsGet,
  cartSessionsRemoveLineItem,
  cartSessionsToggleAddOn,
  cartSessionsUpdateLineItem,
  createClient,
  productsGet,
  productsList
} from "./chunk-IB2JLWSL.mjs";
import {
  RevKeenAPIError,
  RevKeenError,
  RevKeenTimeoutError
} from "./chunk-ZOT7NMVT.mjs";

// src/browser.ts
function isRevKeenPublishableKey(key) {
  return key.startsWith("rk_pk_") && key.length > "rk_pk_".length;
}
function assertRevKeenPublishableKey(key) {
  if (!isRevKeenPublishableKey(key)) {
    throw new RevKeenError(
      "RevKeenBrowserClient requires an rk_pk_* publishable key. Use RevKeenServerClient or RevKeenClient for server-side secret keys."
    );
  }
}
function createTimeoutFetch(fetchImpl, timeoutMs) {
  return async (input, init = {}) => {
    const timeoutController = new AbortController();
    const signal = init.signal ? AbortSignal.any([init.signal, timeoutController.signal]) : timeoutController.signal;
    const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);
    try {
      return await fetchImpl(input, {
        ...init,
        signal
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };
}
function getApiErrorMessage(error, fallback) {
  if (typeof error === "string" && error.length > 0) {
    return error;
  }
  if (error && typeof error === "object" && "error" in error && typeof error.error === "string") {
    return error.error;
  }
  if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
    return error.message;
  }
  return fallback;
}
var RevKeenBrowserClient = class {
  generatedClient;
  products;
  cart;
  constructor(options) {
    assertRevKeenPublishableKey(options.publishableKey);
    const timeoutMs = options.timeout ?? 3e4;
    const fetchImpl = createTimeoutFetch(options.fetch ?? globalThis.fetch, timeoutMs);
    this.generatedClient = createClient({
      auth: async (auth) => {
        if (auth.type === "apiKey") {
          return options.publishableKey;
        }
        return void 0;
      },
      baseUrl: options.baseUrl || "https://api.revkeen.com/v2",
      fetch: fetchImpl,
      headers: options.headers
    });
    this.generatedClient.interceptors.error.use(async (error, response, request) => {
      if (error instanceof RevKeenError) {
        return error;
      }
      if (response) {
        return new RevKeenAPIError(
          response.status,
          getApiErrorMessage(error, response.statusText),
          error
        );
      }
      if (error instanceof Error && error.name === "AbortError") {
        return new RevKeenTimeoutError(
          `Request timed out${request ? ` for ${request.method} ${request.url}` : ""}`
        );
      }
      if (error instanceof Error) {
        return new RevKeenError(`Network error: ${error.message}`);
      }
      return new RevKeenError("Unknown SDK error");
    });
    this.products = {
      get: (id) => this.requestData(productsGet, { path: { id } }),
      list: (query) => this.requestData(productsList, query === void 0 ? void 0 : { query })
    };
    this.cart = {
      sessionsAddLineItem: (id, body) => this.requestData(cartSessionsAddLineItem, body === void 0 ? { path: { id } } : { path: { id }, body }),
      sessionsApplyDiscountCode: (id, body) => this.requestData(cartSessionsApplyDiscountCode, body === void 0 ? { path: { id } } : { path: { id }, body }),
      sessionsConvert: (id) => this.requestData(cartSessionsConvert, { path: { id } }),
      sessionsCreate: (body) => this.requestData(cartSessionsCreate, body === void 0 ? void 0 : { body }),
      sessionsGet: (id) => this.requestData(cartSessionsGet, { path: { id } }),
      sessionsRemoveLineItem: (path) => this.requestData(cartSessionsRemoveLineItem, { path }),
      sessionsToggleAddOn: (id, body) => this.requestData(cartSessionsToggleAddOn, body === void 0 ? { path: { id } } : { path: { id }, body }),
      sessionsUpdateLineItem: (params) => this.requestData(cartSessionsUpdateLineItem, { path: params.path, ...params.body === void 0 ? {} : { body: params.body } })
    };
  }
  async requestData(fn, options) {
    const result = await fn({
      client: this.generatedClient,
      throwOnError: true,
      ...options ?? {}
    });
    if (result.data === void 0) {
      throw new RevKeenError("SDK request completed without response data");
    }
    return result.data;
  }
};
export {
  RevKeenBrowserClient as RevKeenBrowser,
  RevKeenBrowserClient,
  assertRevKeenPublishableKey,
  isRevKeenPublishableKey
};
//# sourceMappingURL=browser.mjs.map