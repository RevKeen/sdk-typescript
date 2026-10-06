import { C as CartResource, S as StorefrontResource, R as RevKeenClientBaseOptions, a as RevKeenEnvironment } from './client-Dg05g0Y7.js';
export { b as RevKeenRequestOptions } from './client-Dg05g0Y7.js';
import './types.gen-ByS8P8Qb.js';
import './oauth-D7xvINHV.js';

interface RevKeenBrowserClientOptions extends RevKeenClientBaseOptions {
    publishableKey: string;
    environment: RevKeenEnvironment;
}
interface RevKeenBrowserCustomBaseUrlClientOptions extends RevKeenClientBaseOptions {
    publishableKey: string;
}
type BrowserCartResource = Pick<CartResource, "sessionsAddLineItem" | "sessionsApplyDiscountCode" | "sessionsConvert" | "sessionsCreate" | "sessionsGet" | "sessionsRemoveLineItem" | "sessionsSetContact" | "sessionsToggleAddOn" | "sessionsUpdateLineItem">;
type BrowserStorefrontResource = Pick<StorefrontResource, "productsGet" | "productsList">;
declare class RevKeenPublishableClient {
    readonly cart: BrowserCartResource;
    readonly storefront: BrowserStorefrontResource;
    constructor({ publishableKey, environment, ...options }: RevKeenBrowserClientOptions);
    static forCustomBaseUrl(baseUrl: string, { publishableKey, ...options }: RevKeenBrowserCustomBaseUrlClientOptions): RevKeenPublishableClient;
}

export { type BrowserCartResource, type BrowserStorefrontResource, RevKeenPublishableClient as RevKeenBrowserClient, type RevKeenBrowserClientOptions, type RevKeenBrowserCustomBaseUrlClientOptions, RevKeenEnvironment, RevKeenPublishableClient };
