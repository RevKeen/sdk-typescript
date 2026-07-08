import { RevKeenAPIError, RevKeenError, RevKeenTimeoutError } from "./core/errors.js";
import { createClient } from "./generated/client/index.js";
import type { Client as GeneratedClient } from "./generated/client/index.js";
import {
  cartSessionsAddLineItem,
  cartSessionsApplyDiscountCode,
  cartSessionsConvert,
  cartSessionsCreate,
  cartSessionsGet,
  cartSessionsRemoveLineItem,
  cartSessionsToggleAddOn,
  cartSessionsUpdateLineItem,
  productsGet,
  productsList,
} from "./generated/sdk.gen.js";
import type {
  CartSessionsAddLineItemData,
  CartSessionsAddLineItemResponse,
  CartSessionsApplyDiscountCodeData,
  CartSessionsApplyDiscountCodeResponse,
  CartSessionsConvertData,
  CartSessionsConvertResponse,
  CartSessionsCreateData,
  CartSessionsCreateResponse,
  CartSessionsGetData,
  CartSessionsGetResponse,
  CartSessionsRemoveLineItemData,
  CartSessionsRemoveLineItemResponse,
  CartSessionsToggleAddOnData,
  CartSessionsToggleAddOnResponse,
  CartSessionsUpdateLineItemData,
  CartSessionsUpdateLineItemResponse,
  ProductsGetData,
  ProductsGetResponse,
  ProductsListData,
  ProductsListResponse,
} from "./generated/types.gen.js";

export type RevKeenPublishableKey = `rk_pk_${string}`;

export interface RevKeenBrowserClientOptions {
  publishableKey: RevKeenPublishableKey;
  baseUrl?: string;
  timeout?: number;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
}

export interface BrowserProductsResource {
  get: (id: NonNullable<ProductsGetData["path"]>["id"]) => Promise<ProductsGetResponse>;
  list: (query?: NonNullable<ProductsListData["query"]>) => Promise<ProductsListResponse>;
}

export interface BrowserCartResource {
  sessionsAddLineItem: (id: NonNullable<CartSessionsAddLineItemData["path"]>["id"], body?: NonNullable<CartSessionsAddLineItemData["body"]>) => Promise<CartSessionsAddLineItemResponse>;
  sessionsApplyDiscountCode: (id: NonNullable<CartSessionsApplyDiscountCodeData["path"]>["id"], body?: NonNullable<CartSessionsApplyDiscountCodeData["body"]>) => Promise<CartSessionsApplyDiscountCodeResponse>;
  sessionsConvert: (id: NonNullable<CartSessionsConvertData["path"]>["id"]) => Promise<CartSessionsConvertResponse>;
  sessionsCreate: (body?: NonNullable<CartSessionsCreateData["body"]>) => Promise<CartSessionsCreateResponse>;
  sessionsGet: (id: NonNullable<CartSessionsGetData["path"]>["id"]) => Promise<CartSessionsGetResponse>;
  sessionsRemoveLineItem: (path: NonNullable<CartSessionsRemoveLineItemData["path"]>) => Promise<CartSessionsRemoveLineItemResponse>;
  sessionsToggleAddOn: (id: NonNullable<CartSessionsToggleAddOnData["path"]>["id"], body?: NonNullable<CartSessionsToggleAddOnData["body"]>) => Promise<CartSessionsToggleAddOnResponse>;
  sessionsUpdateLineItem: (params: { path: NonNullable<CartSessionsUpdateLineItemData["path"]>; body?: NonNullable<CartSessionsUpdateLineItemData["body"]> }) => Promise<CartSessionsUpdateLineItemResponse>;
}

export interface RevKeenBrowserResources {
  products: BrowserProductsResource;
  cart: BrowserCartResource;
}

export function isRevKeenPublishableKey(key: string): key is RevKeenPublishableKey {
  return key.startsWith("rk_pk_") && key.length > "rk_pk_".length;
}

export function assertRevKeenPublishableKey(key: string): asserts key is RevKeenPublishableKey {
  if (!isRevKeenPublishableKey(key)) {
    throw new RevKeenError(
      "RevKeenBrowserClient requires an rk_pk_* publishable key. " +
        "Use RevKeenServerClient or RevKeenClient for server-side secret keys."
    );
  }
}

function createTimeoutFetch(fetchImpl: typeof fetch, timeoutMs: number): typeof fetch {
  return async (input, init = {}) => {
    const timeoutController = new AbortController();
    const signal = init.signal
      ? AbortSignal.any([init.signal, timeoutController.signal])
      : timeoutController.signal;
    const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);

    try {
      return await fetchImpl(input, {
        ...init,
        signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };
}

function getApiErrorMessage(error: unknown, fallback: string): string {
  if (typeof error === "string" && error.length > 0) {
    return error;
  }

  if (
    error &&
    typeof error === "object" &&
    "error" in error &&
    typeof (error as { error?: unknown }).error === "string"
  ) {
    return (error as { error: string }).error;
  }

  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof (error as { message?: unknown }).message === "string"
  ) {
    return (error as { message: string }).message;
  }

  return fallback;
}

export class RevKeenBrowserClient implements RevKeenBrowserResources {
  private readonly generatedClient: GeneratedClient;
  readonly products: BrowserProductsResource;
  readonly cart: BrowserCartResource;

  constructor(options: RevKeenBrowserClientOptions) {
    assertRevKeenPublishableKey(options.publishableKey);

    const timeoutMs = options.timeout ?? 30_000;
    const fetchImpl = createTimeoutFetch(options.fetch ?? globalThis.fetch, timeoutMs);

    this.generatedClient = createClient({
      auth: async (auth) => {
        if (auth.type === "apiKey") {
          return options.publishableKey;
        }

        return undefined;
      },
      baseUrl: options.baseUrl || "https://api.revkeen.com/v2",
      fetch: fetchImpl,
      headers: options.headers,
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
      get: (id) => this.requestData<ProductsGetResponse>(productsGet as (requestOptions: unknown) => Promise<{ data?: ProductsGetResponse; error?: unknown }>, { path: { id } }),
      list: (query) => this.requestData<ProductsListResponse>(productsList as (requestOptions: unknown) => Promise<{ data?: ProductsListResponse; error?: unknown }>, query === undefined ? undefined : { query }),
    };
    this.cart = {
      sessionsAddLineItem: (id, body) => this.requestData<CartSessionsAddLineItemResponse>(cartSessionsAddLineItem as (requestOptions: unknown) => Promise<{ data?: CartSessionsAddLineItemResponse; error?: unknown }>, body === undefined ? { path: { id } } : { path: { id }, body }),
      sessionsApplyDiscountCode: (id, body) => this.requestData<CartSessionsApplyDiscountCodeResponse>(cartSessionsApplyDiscountCode as (requestOptions: unknown) => Promise<{ data?: CartSessionsApplyDiscountCodeResponse; error?: unknown }>, body === undefined ? { path: { id } } : { path: { id }, body }),
      sessionsConvert: (id) => this.requestData<CartSessionsConvertResponse>(cartSessionsConvert as (requestOptions: unknown) => Promise<{ data?: CartSessionsConvertResponse; error?: unknown }>, { path: { id } }),
      sessionsCreate: (body) => this.requestData<CartSessionsCreateResponse>(cartSessionsCreate as (requestOptions: unknown) => Promise<{ data?: CartSessionsCreateResponse; error?: unknown }>, body === undefined ? undefined : { body }),
      sessionsGet: (id) => this.requestData<CartSessionsGetResponse>(cartSessionsGet as (requestOptions: unknown) => Promise<{ data?: CartSessionsGetResponse; error?: unknown }>, { path: { id } }),
      sessionsRemoveLineItem: (path) => this.requestData<CartSessionsRemoveLineItemResponse>(cartSessionsRemoveLineItem as (requestOptions: unknown) => Promise<{ data?: CartSessionsRemoveLineItemResponse; error?: unknown }>, { path }),
      sessionsToggleAddOn: (id, body) => this.requestData<CartSessionsToggleAddOnResponse>(cartSessionsToggleAddOn as (requestOptions: unknown) => Promise<{ data?: CartSessionsToggleAddOnResponse; error?: unknown }>, body === undefined ? { path: { id } } : { path: { id }, body }),
      sessionsUpdateLineItem: (params) => this.requestData<CartSessionsUpdateLineItemResponse>(cartSessionsUpdateLineItem as (requestOptions: unknown) => Promise<{ data?: CartSessionsUpdateLineItemResponse; error?: unknown }>, { path: params.path, ...(params.body === undefined ? {} : { body: params.body }) }),
    };
  }

  private async requestData<T>(
    fn: (options: unknown) => Promise<{ data?: T; error?: unknown }>,
    options?: Record<string, unknown>
  ): Promise<T> {
    const result = await fn({
      client: this.generatedClient,
      throwOnError: true,
      ...(options ?? {}),
    });

    if (result.data === undefined) {
      throw new RevKeenError("SDK request completed without response data");
    }

    return result.data;
  }
}

export { RevKeenBrowserClient as RevKeenBrowser };
