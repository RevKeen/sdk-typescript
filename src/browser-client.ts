import {
  createBrowserCoreClient,
  createBrowserCoreClientForCustomBaseUrl,
} from "./client.js";
import type { RevKeenBrowserClientTransportOptions } from "./client.js";
import type { RevKeenEnvironment } from "./core/environment.js";
import type {
  CartResource,
  StorefrontResource,
} from "./generated-resources.js";

export interface RevKeenBrowserClientOptions extends RevKeenBrowserClientTransportOptions {
  publishableKey: string;
  environment: RevKeenEnvironment;
}

export interface RevKeenBrowserCustomBaseUrlClientOptions extends RevKeenBrowserClientTransportOptions {
  publishableKey: string;
}

export type BrowserCartResource = Pick<
  CartResource,
  | "sessionsAddLineItem"
  | "sessionsApplyDiscountCode"
  | "sessionsConvert"
  | "sessionsCreate"
  | "sessionsGet"
  | "sessionsRemoveLineItem"
  | "sessionsSetContact"
  | "sessionsToggleAddOn"
  | "sessionsUpdateLineItem"
>;

export type BrowserStorefrontResource = Pick<
  StorefrontResource,
  "productsGet" | "productsList"
>;

export class RevKeenPublishableClient {
  readonly cart: BrowserCartResource;
  readonly storefront: BrowserStorefrontResource;

  constructor({
    publishableKey,
    environment,
    ...options
  }: RevKeenBrowserClientOptions) {
    const client = createBrowserCoreClient(
      publishableKey,
      environment,
      options,
    );
    this.cart = {
      sessionsAddLineItem: client.cart.sessionsAddLineItem,
      sessionsApplyDiscountCode: client.cart.sessionsApplyDiscountCode,
      sessionsConvert: client.cart.sessionsConvert,
      sessionsCreate: client.cart.sessionsCreate,
      sessionsGet: client.cart.sessionsGet,
      sessionsRemoveLineItem: client.cart.sessionsRemoveLineItem,
      sessionsSetContact: client.cart.sessionsSetContact,
      sessionsToggleAddOn: client.cart.sessionsToggleAddOn,
      sessionsUpdateLineItem: client.cart.sessionsUpdateLineItem,
    };
    this.storefront = {
      productsGet: client.storefront.productsGet,
      productsList: client.storefront.productsList,
    };
  }

  static forCustomBaseUrl(
    baseUrl: string,
    { publishableKey, ...options }: RevKeenBrowserCustomBaseUrlClientOptions,
  ): RevKeenPublishableClient {
    const instance = Object.create(
      RevKeenPublishableClient.prototype,
    ) as RevKeenPublishableClient;
    const client = createBrowserCoreClientForCustomBaseUrl(
      publishableKey,
      baseUrl,
      options,
    );
    (instance as { cart: BrowserCartResource }).cart = {
      sessionsAddLineItem: client.cart.sessionsAddLineItem,
      sessionsApplyDiscountCode: client.cart.sessionsApplyDiscountCode,
      sessionsConvert: client.cart.sessionsConvert,
      sessionsCreate: client.cart.sessionsCreate,
      sessionsGet: client.cart.sessionsGet,
      sessionsRemoveLineItem: client.cart.sessionsRemoveLineItem,
      sessionsSetContact: client.cart.sessionsSetContact,
      sessionsToggleAddOn: client.cart.sessionsToggleAddOn,
      sessionsUpdateLineItem: client.cart.sessionsUpdateLineItem,
    };
    (instance as { storefront: BrowserStorefrontResource }).storefront = {
      productsGet: client.storefront.productsGet,
      productsList: client.storefront.productsList,
    };
    return instance;
  }
}

/** @deprecated Use RevKeenPublishableClient. */
export { RevKeenPublishableClient as RevKeenBrowserClient };
