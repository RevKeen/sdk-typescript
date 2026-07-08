import { C as CartSessionsAddLineItemData, a as CartSessionsAddLineItemResponse, b as CartSessionsApplyDiscountCodeData, c as CartSessionsApplyDiscountCodeResponse, d as CartSessionsConvertData, e as CartSessionsConvertResponse, f as CartSessionsCreateData, g as CartSessionsCreateResponse, h as CartSessionsGetData, i as CartSessionsGetResponse, j as CartSessionsRemoveLineItemData, k as CartSessionsRemoveLineItemResponse, l as CartSessionsToggleAddOnData, m as CartSessionsToggleAddOnResponse, n as CartSessionsUpdateLineItemData, o as CartSessionsUpdateLineItemResponse, P as ProductsGetData, p as ProductsGetResponse, q as ProductsListData, r as ProductsListResponse } from './types.gen-BxK5gEJT.mjs';

type RevKeenPublishableKey = `rk_pk_${string}`;
interface RevKeenBrowserClientOptions {
    publishableKey: RevKeenPublishableKey;
    baseUrl?: string;
    timeout?: number;
    headers?: Record<string, string>;
    fetch?: typeof fetch;
}
interface BrowserProductsResource {
    get: (id: NonNullable<ProductsGetData["path"]>["id"]) => Promise<ProductsGetResponse>;
    list: (query?: NonNullable<ProductsListData["query"]>) => Promise<ProductsListResponse>;
}
interface BrowserCartResource {
    sessionsAddLineItem: (id: NonNullable<CartSessionsAddLineItemData["path"]>["id"], body?: NonNullable<CartSessionsAddLineItemData["body"]>) => Promise<CartSessionsAddLineItemResponse>;
    sessionsApplyDiscountCode: (id: NonNullable<CartSessionsApplyDiscountCodeData["path"]>["id"], body?: NonNullable<CartSessionsApplyDiscountCodeData["body"]>) => Promise<CartSessionsApplyDiscountCodeResponse>;
    sessionsConvert: (id: NonNullable<CartSessionsConvertData["path"]>["id"]) => Promise<CartSessionsConvertResponse>;
    sessionsCreate: (body?: NonNullable<CartSessionsCreateData["body"]>) => Promise<CartSessionsCreateResponse>;
    sessionsGet: (id: NonNullable<CartSessionsGetData["path"]>["id"]) => Promise<CartSessionsGetResponse>;
    sessionsRemoveLineItem: (path: NonNullable<CartSessionsRemoveLineItemData["path"]>) => Promise<CartSessionsRemoveLineItemResponse>;
    sessionsToggleAddOn: (id: NonNullable<CartSessionsToggleAddOnData["path"]>["id"], body?: NonNullable<CartSessionsToggleAddOnData["body"]>) => Promise<CartSessionsToggleAddOnResponse>;
    sessionsUpdateLineItem: (params: {
        path: NonNullable<CartSessionsUpdateLineItemData["path"]>;
        body?: NonNullable<CartSessionsUpdateLineItemData["body"]>;
    }) => Promise<CartSessionsUpdateLineItemResponse>;
}
interface RevKeenBrowserResources {
    products: BrowserProductsResource;
    cart: BrowserCartResource;
}
declare function isRevKeenPublishableKey(key: string): key is RevKeenPublishableKey;
declare function assertRevKeenPublishableKey(key: string): asserts key is RevKeenPublishableKey;
declare class RevKeenBrowserClient implements RevKeenBrowserResources {
    private readonly generatedClient;
    readonly products: BrowserProductsResource;
    readonly cart: BrowserCartResource;
    constructor(options: RevKeenBrowserClientOptions);
    private requestData;
}

export { type BrowserCartResource, type BrowserProductsResource, RevKeenBrowserClient as RevKeenBrowser, RevKeenBrowserClient, type RevKeenBrowserClientOptions, type RevKeenBrowserResources, type RevKeenPublishableKey, assertRevKeenPublishableKey, isRevKeenPublishableKey };
