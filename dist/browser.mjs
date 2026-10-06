import {
  RevKeenEnvironment,
  createBrowserCoreClient,
  createBrowserCoreClientForCustomBaseUrl
} from "./chunk-K3WJXU6M.mjs";
import "./chunk-BW3I7P6R.mjs";

// src/browser-client.ts
var RevKeenPublishableClient = class _RevKeenPublishableClient {
  cart;
  storefront;
  constructor({
    publishableKey,
    environment,
    ...options
  }) {
    const client = createBrowserCoreClient(
      publishableKey,
      environment,
      options
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
      sessionsUpdateLineItem: client.cart.sessionsUpdateLineItem
    };
    this.storefront = {
      productsGet: client.storefront.productsGet,
      productsList: client.storefront.productsList
    };
  }
  static forCustomBaseUrl(baseUrl, { publishableKey, ...options }) {
    const instance = Object.create(
      _RevKeenPublishableClient.prototype
    );
    const client = createBrowserCoreClientForCustomBaseUrl(
      publishableKey,
      baseUrl,
      options
    );
    instance.cart = {
      sessionsAddLineItem: client.cart.sessionsAddLineItem,
      sessionsApplyDiscountCode: client.cart.sessionsApplyDiscountCode,
      sessionsConvert: client.cart.sessionsConvert,
      sessionsCreate: client.cart.sessionsCreate,
      sessionsGet: client.cart.sessionsGet,
      sessionsRemoveLineItem: client.cart.sessionsRemoveLineItem,
      sessionsSetContact: client.cart.sessionsSetContact,
      sessionsToggleAddOn: client.cart.sessionsToggleAddOn,
      sessionsUpdateLineItem: client.cart.sessionsUpdateLineItem
    };
    instance.storefront = {
      productsGet: client.storefront.productsGet,
      productsList: client.storefront.productsList
    };
    return instance;
  }
};
export {
  RevKeenPublishableClient as RevKeenBrowserClient,
  RevKeenEnvironment,
  RevKeenPublishableClient
};
//# sourceMappingURL=browser.mjs.map