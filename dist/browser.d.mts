import { C as CartResource, S as StorefrontResource, R as RevKeenClientBaseOptions, a as RevKeenEnvironment } from './client-fGr6QWhF.mjs';
export { b as RevKeenRequestOptions } from './client-fGr6QWhF.mjs';
import './types.gen-ByS8P8Qb.mjs';
import './oauth-D7xvINHV.mjs';

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
