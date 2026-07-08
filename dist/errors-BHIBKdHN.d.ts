import { A as AnalyticsRevenueMrrSummaryData, s as AnalyticsRevenueMrrSummaryResponse, t as AnalyticsRevenueTimeSeriesData, u as AnalyticsRevenueTimeSeriesResponse, C as CartSessionsAddLineItemData, a as CartSessionsAddLineItemResponse, b as CartSessionsApplyDiscountCodeData, c as CartSessionsApplyDiscountCodeResponse, d as CartSessionsConvertData, e as CartSessionsConvertResponse, f as CartSessionsCreateData, g as CartSessionsCreateResponse, h as CartSessionsGetData, i as CartSessionsGetResponse, j as CartSessionsRemoveLineItemData, k as CartSessionsRemoveLineItemResponse, l as CartSessionsToggleAddOnData, m as CartSessionsToggleAddOnResponse, n as CartSessionsUpdateLineItemData, o as CartSessionsUpdateLineItemResponse, v as CheckoutSessionsCreateData, w as CheckoutSessionsCreateResponse, x as CheckoutSessionsExpireData, y as CheckoutSessionsExpireResponse, z as CheckoutSessionsGetData, D as CheckoutSessionsGetResponse, E as CreditNotesCreateData, F as CreditNotesCreateResponse, G as CreditNotesGetData, H as CreditNotesGetResponse, I as CreditNotesListData, J as CreditNotesListResponse, K as CreditNotesListLinesData, L as CreditNotesListLinesResponse, M as CreditNotesPreviewData, N as CreditNotesPreviewResponse, O as CreditNotesVoidData, Q as CreditNotesVoidResponse, R as CustomerMetersGetData, S as CustomerMetersGetResponse, T as CustomerMetersListData, V as CustomerMetersListResponse, W as CustomerPortalCustomerGetResponse, X as CustomerPortalInvoicesGetData, Y as CustomerPortalInvoicesGetResponse, Z as CustomerPortalInvoicesListData, _ as CustomerPortalInvoicesListResponse, $ as CustomerPortalMandatesListResponse, a0 as CustomerPortalMandatesReauthorizeData, a1 as CustomerPortalMandatesReauthorizeResponse, a2 as CustomerPortalSessionsCreateData, a3 as CustomerPortalSessionsCreateResponse, a4 as CustomerPortalSubscriptionsCancelData, a5 as CustomerPortalSubscriptionsCancelResponse, a6 as CustomerPortalSubscriptionsGetData, a7 as CustomerPortalSubscriptionsGetResponse, a8 as CustomerPortalSubscriptionsListData, a9 as CustomerPortalSubscriptionsListResponse, aa as CustomersCreateData, ab as CustomersCreateResponse, ac as CustomersGetData, ad as CustomersGetResponse, ae as CustomersListData, af as CustomersListResponse, ag as CustomersPaymentMethodsListData, ah as CustomersPaymentMethodsListResponse, ai as CustomersPaymentRailsGetData, aj as CustomersPaymentRailsGetResponse, ak as CustomersPreferredRailsGetData, al as CustomersPreferredRailsGetResponse, am as CustomersUpdateData, an as CustomersUpdateResponse, ao as DdMandateRequestsGetData, ap as DdMandateRequestsGetResponse, aq as DdPreviewData, ar as DdPreviewResponse, as as DdValidateData, at as DdValidateResponse, au as EntitlementsCheckData, av as EntitlementsCheckResponse, aw as EntitlementsListData, ax as EntitlementsListResponse, ay as EventsGetData, az as EventsGetResponse, aA as EventsListData, aB as EventsListResponse, aC as EventsResendData, aD as EventsResendResponse, aE as InvoicesCreateData, aF as InvoicesCreateResponse, aG as InvoicesFinalizeData, aH as InvoicesFinalizeResponse, aI as InvoicesGetData, aJ as InvoicesGetResponse, aK as InvoicesListData, aL as InvoicesListResponse, aM as InvoicesMarginEstimateData, aN as InvoicesMarginEstimateResponse, aO as InvoicesSendData, aP as InvoicesSendResponse, aQ as InvoicesUpdateData, aR as InvoicesUpdateResponse, aS as InvoicesVoidData, aT as InvoicesVoidResponse, aU as MandatesCancelData, aV as MandatesCancelResponse, aW as MandatesCreateData, aX as MandatesCreateResponse, aY as MandatesGetData, aZ as MandatesGetResponse, a_ as MandatesListData, a$ as MandatesListResponse, b0 as MandatesReinstateData, b1 as MandatesReinstateResponse, b2 as MandatesScheduleCollectionData, b3 as MandatesScheduleCollectionResponse, b4 as MandatesSuspendData, b5 as MandatesSuspendResponse, b6 as PaymentIntentsCancelData, b7 as PaymentIntentsCancelResponse, b8 as PaymentIntentsCaptureData, b9 as PaymentIntentsCaptureResponse, ba as PaymentIntentsConfirmData, bb as PaymentIntentsConfirmResponse, bc as PaymentIntentsCreateData, bd as PaymentIntentsCreateResponse, be as PaymentIntentsGetData, bf as PaymentIntentsGetResponse, bg as PaymentIntentsListData, bh as PaymentIntentsListResponse, bi as PaymentLinksActivateData, bj as PaymentLinksActivateResponse, bk as PaymentLinksArchiveData, bl as PaymentLinksArchiveResponse, bm as PaymentLinksCreateData, bn as PaymentLinksCreateResponse, bo as PaymentLinksDeactivateData, bp as PaymentLinksDeactivateResponse, bq as PaymentLinksExpireData, br as PaymentLinksExpireResponse, bs as PaymentLinksGetData, bt as PaymentLinksGetResponse, bu as PaymentLinksListData, bv as PaymentLinksListResponse, bw as PaymentLinksUpdateData, bx as PaymentLinksUpdateResponse, by as PricesArchiveData, bz as PricesArchiveResponse, bA as PricesCreateData, bB as PricesCreateResponse, bC as PricesGetData, bD as PricesGetResponse, bE as PricesListData, bF as PricesListResponse, bG as PricesUpdateData, bH as PricesUpdateResponse, bI as ProductsCreateData, bJ as ProductsCreateResponse, P as ProductsGetData, p as ProductsGetResponse, q as ProductsListData, r as ProductsListResponse, bK as ProductsUpdateData, bL as ProductsUpdateResponse, bM as RefundsCreateData, bN as RefundsCreateResponse, bO as RefundsGetData, bP as RefundsGetResponse, bQ as RefundsListData, bR as RefundsListResponse, bS as SubscriptionsCancelData, bT as SubscriptionsCancelResponse, bU as SubscriptionsCreateData, bV as SubscriptionsCreateResponse, bW as SubscriptionsGetData, bX as SubscriptionsGetResponse, bY as SubscriptionsListData, bZ as SubscriptionsListResponse, b_ as SubscriptionsUpdateData, b$ as SubscriptionsUpdateResponse, c0 as TransactionsGetData, c1 as TransactionsGetResponse, c2 as TransactionsListData, c3 as TransactionsListResponse, c4 as WebhookDeliveriesGetData, c5 as WebhookDeliveriesGetResponse, c6 as WebhookDeliveriesListData, c7 as WebhookDeliveriesListResponse, c8 as WebhookDeliveriesRetryData, c9 as WebhookDeliveriesRetryResponse, ca as WebhookEndpointsCreateData, cb as WebhookEndpointsCreateResponse, cc as WebhookEndpointsDeleteData, cd as WebhookEndpointsDeleteResponse, ce as WebhookEndpointsGetData, cf as WebhookEndpointsGetResponse, cg as WebhookEndpointsListData, ch as WebhookEndpointsListResponse, ci as WebhookEndpointsRotateSecretData, cj as WebhookEndpointsRotateSecretResponse, ck as WebhookEndpointsUpdateData, cl as WebhookEndpointsUpdateResponse, cm as UsageIngestRequest, B as BatchIngestResult, cn as DryRunResult } from './types.gen-BxK5gEJT.js';
import { OAuthConfig } from './auth.js';

/**
 * AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
 *
 * Generated by: pnpm --dir packages/sdk generate:wrapper
 * Source of truth: packages/openapi/sdk-openapi.json
 */

interface GeneratedResourceRuntime {
    requestData<T>(fn: (options: unknown) => Promise<{
        data?: T;
        error?: unknown;
    }>, options?: Record<string, unknown>): Promise<T>;
}
interface AnalyticsResource {
    revenueMrrSummary: (query?: NonNullable<AnalyticsRevenueMrrSummaryData["query"]>) => Promise<AnalyticsRevenueMrrSummaryResponse>;
    revenueTimeSeries: (query?: NonNullable<AnalyticsRevenueTimeSeriesData["query"]>) => Promise<AnalyticsRevenueTimeSeriesResponse>;
}
interface CartResource {
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
interface CheckoutSessionsResource {
    create: (body?: NonNullable<CheckoutSessionsCreateData["body"]>) => Promise<CheckoutSessionsCreateResponse>;
    expire: (id: NonNullable<CheckoutSessionsExpireData["path"]>["id"]) => Promise<CheckoutSessionsExpireResponse>;
    get: (id: NonNullable<CheckoutSessionsGetData["path"]>["id"]) => Promise<CheckoutSessionsGetResponse>;
}
interface CreditNotesResource {
    create: (body?: NonNullable<CreditNotesCreateData["body"]>) => Promise<CreditNotesCreateResponse>;
    get: (id: NonNullable<CreditNotesGetData["path"]>["id"]) => Promise<CreditNotesGetResponse>;
    list: (query?: NonNullable<CreditNotesListData["query"]>) => Promise<CreditNotesListResponse>;
    listLines: (id: NonNullable<CreditNotesListLinesData["path"]>["id"], query?: NonNullable<CreditNotesListLinesData["query"]>) => Promise<CreditNotesListLinesResponse>;
    preview: (body: NonNullable<CreditNotesPreviewData["body"]>) => Promise<CreditNotesPreviewResponse>;
    void: (id: NonNullable<CreditNotesVoidData["path"]>["id"]) => Promise<CreditNotesVoidResponse>;
}
interface CustomerResource {
    metersGet: (path: NonNullable<CustomerMetersGetData["path"]>) => Promise<CustomerMetersGetResponse>;
    metersList: (query?: NonNullable<CustomerMetersListData["query"]>) => Promise<CustomerMetersListResponse>;
    portalCustomerGet: () => Promise<CustomerPortalCustomerGetResponse>;
    portalInvoicesGet: (id: NonNullable<CustomerPortalInvoicesGetData["path"]>["id"]) => Promise<CustomerPortalInvoicesGetResponse>;
    portalInvoicesList: (query?: NonNullable<CustomerPortalInvoicesListData["query"]>) => Promise<CustomerPortalInvoicesListResponse>;
    portalMandatesList: () => Promise<CustomerPortalMandatesListResponse>;
    portalMandatesReauthorize: (id: NonNullable<CustomerPortalMandatesReauthorizeData["path"]>["id"], body: NonNullable<CustomerPortalMandatesReauthorizeData["body"]>) => Promise<CustomerPortalMandatesReauthorizeResponse>;
    portalSessionsCreate: (body: NonNullable<CustomerPortalSessionsCreateData["body"]>) => Promise<CustomerPortalSessionsCreateResponse>;
    portalSubscriptionsCancel: (id: NonNullable<CustomerPortalSubscriptionsCancelData["path"]>["id"], body?: NonNullable<CustomerPortalSubscriptionsCancelData["body"]>) => Promise<CustomerPortalSubscriptionsCancelResponse>;
    portalSubscriptionsGet: (id: NonNullable<CustomerPortalSubscriptionsGetData["path"]>["id"]) => Promise<CustomerPortalSubscriptionsGetResponse>;
    portalSubscriptionsList: (query?: NonNullable<CustomerPortalSubscriptionsListData["query"]>) => Promise<CustomerPortalSubscriptionsListResponse>;
}
interface CustomersResource {
    create: (body?: NonNullable<CustomersCreateData["body"]>) => Promise<CustomersCreateResponse>;
    get: (id: NonNullable<CustomersGetData["path"]>["id"]) => Promise<CustomersGetResponse>;
    list: (query?: NonNullable<CustomersListData["query"]>) => Promise<CustomersListResponse>;
    paymentMethodsList: (id: NonNullable<CustomersPaymentMethodsListData["path"]>["id"]) => Promise<CustomersPaymentMethodsListResponse>;
    paymentRailsGet: (id: NonNullable<CustomersPaymentRailsGetData["path"]>["id"], query?: NonNullable<CustomersPaymentRailsGetData["query"]>) => Promise<CustomersPaymentRailsGetResponse>;
    preferredRailsGet: (id: NonNullable<CustomersPreferredRailsGetData["path"]>["id"], query?: NonNullable<CustomersPreferredRailsGetData["query"]>) => Promise<CustomersPreferredRailsGetResponse>;
    update: (id: NonNullable<CustomersUpdateData["path"]>["id"], body?: NonNullable<CustomersUpdateData["body"]>) => Promise<CustomersUpdateResponse>;
}
interface DdResource {
    mandateRequestsGet: (id: NonNullable<DdMandateRequestsGetData["path"]>["token"]) => Promise<DdMandateRequestsGetResponse>;
    preview: (body?: NonNullable<DdPreviewData["body"]>) => Promise<DdPreviewResponse>;
    validate: (body?: NonNullable<DdValidateData["body"]>) => Promise<DdValidateResponse>;
}
interface EntitlementsResource {
    check: (query?: NonNullable<EntitlementsCheckData["query"]>) => Promise<EntitlementsCheckResponse>;
    list: (query?: NonNullable<EntitlementsListData["query"]>) => Promise<EntitlementsListResponse>;
}
interface EventsResource {
    get: (id: NonNullable<EventsGetData["path"]>["id"]) => Promise<EventsGetResponse>;
    list: (query?: NonNullable<EventsListData["query"]>) => Promise<EventsListResponse>;
    resend: (id: NonNullable<EventsResendData["path"]>["id"]) => Promise<EventsResendResponse>;
}
interface InvoicesResource {
    create: (body: NonNullable<InvoicesCreateData["body"]>) => Promise<InvoicesCreateResponse>;
    finalize: (id: NonNullable<InvoicesFinalizeData["path"]>["id"], body?: NonNullable<InvoicesFinalizeData["body"]>) => Promise<InvoicesFinalizeResponse>;
    get: (id: NonNullable<InvoicesGetData["path"]>["id"]) => Promise<InvoicesGetResponse>;
    list: (query?: NonNullable<InvoicesListData["query"]>) => Promise<InvoicesListResponse>;
    marginEstimate: (id: NonNullable<InvoicesMarginEstimateData["path"]>["id"], body: NonNullable<InvoicesMarginEstimateData["body"]>) => Promise<InvoicesMarginEstimateResponse>;
    send: (id: NonNullable<InvoicesSendData["path"]>["id"], body?: NonNullable<InvoicesSendData["body"]>) => Promise<InvoicesSendResponse>;
    update: (id: NonNullable<InvoicesUpdateData["path"]>["id"], body: NonNullable<InvoicesUpdateData["body"]>) => Promise<InvoicesUpdateResponse>;
    void: (id: NonNullable<InvoicesVoidData["path"]>["id"], body?: NonNullable<InvoicesVoidData["body"]>) => Promise<InvoicesVoidResponse>;
}
interface MandatesResource {
    cancel: (id: NonNullable<MandatesCancelData["path"]>["id"], body?: NonNullable<MandatesCancelData["body"]>) => Promise<MandatesCancelResponse>;
    create: (body?: NonNullable<MandatesCreateData["body"]>) => Promise<MandatesCreateResponse>;
    get: (id: NonNullable<MandatesGetData["path"]>["id"]) => Promise<MandatesGetResponse>;
    list: (query?: NonNullable<MandatesListData["query"]>) => Promise<MandatesListResponse>;
    reinstate: (id: NonNullable<MandatesReinstateData["path"]>["id"], body?: NonNullable<MandatesReinstateData["body"]>) => Promise<MandatesReinstateResponse>;
    scheduleCollection: (id: NonNullable<MandatesScheduleCollectionData["path"]>["id"], body?: NonNullable<MandatesScheduleCollectionData["body"]>) => Promise<MandatesScheduleCollectionResponse>;
    suspend: (id: NonNullable<MandatesSuspendData["path"]>["id"], body?: NonNullable<MandatesSuspendData["body"]>) => Promise<MandatesSuspendResponse>;
}
interface PaymentIntentsResource {
    cancel: (id: NonNullable<PaymentIntentsCancelData["path"]>["id"], body?: NonNullable<PaymentIntentsCancelData["body"]>) => Promise<PaymentIntentsCancelResponse>;
    capture: (id: NonNullable<PaymentIntentsCaptureData["path"]>["id"], body?: NonNullable<PaymentIntentsCaptureData["body"]>) => Promise<PaymentIntentsCaptureResponse>;
    confirm: (id: NonNullable<PaymentIntentsConfirmData["path"]>["id"], body?: NonNullable<PaymentIntentsConfirmData["body"]>) => Promise<PaymentIntentsConfirmResponse>;
    create: (body?: NonNullable<PaymentIntentsCreateData["body"]>) => Promise<PaymentIntentsCreateResponse>;
    get: (id: NonNullable<PaymentIntentsGetData["path"]>["id"]) => Promise<PaymentIntentsGetResponse>;
    list: (query?: NonNullable<PaymentIntentsListData["query"]>) => Promise<PaymentIntentsListResponse>;
}
interface PaymentLinksResource {
    activate: (id: NonNullable<PaymentLinksActivateData["path"]>["id"]) => Promise<PaymentLinksActivateResponse>;
    archive: (id: NonNullable<PaymentLinksArchiveData["path"]>["id"]) => Promise<PaymentLinksArchiveResponse>;
    create: (body?: NonNullable<PaymentLinksCreateData["body"]>) => Promise<PaymentLinksCreateResponse>;
    deactivate: (id: NonNullable<PaymentLinksDeactivateData["path"]>["id"]) => Promise<PaymentLinksDeactivateResponse>;
    expire: (id: NonNullable<PaymentLinksExpireData["path"]>["id"], body?: NonNullable<PaymentLinksExpireData["body"]>) => Promise<PaymentLinksExpireResponse>;
    get: (id: NonNullable<PaymentLinksGetData["path"]>["id"]) => Promise<PaymentLinksGetResponse>;
    list: (query?: NonNullable<PaymentLinksListData["query"]>) => Promise<PaymentLinksListResponse>;
    update: (id: NonNullable<PaymentLinksUpdateData["path"]>["id"], body?: NonNullable<PaymentLinksUpdateData["body"]>) => Promise<PaymentLinksUpdateResponse>;
}
interface PricesResource {
    archive: (id: NonNullable<PricesArchiveData["path"]>["id"]) => Promise<PricesArchiveResponse>;
    create: (body: NonNullable<PricesCreateData["body"]>) => Promise<PricesCreateResponse>;
    get: (id: NonNullable<PricesGetData["path"]>["id"]) => Promise<PricesGetResponse>;
    list: (query?: NonNullable<PricesListData["query"]>) => Promise<PricesListResponse>;
    update: (id: NonNullable<PricesUpdateData["path"]>["id"], body: NonNullable<PricesUpdateData["body"]>) => Promise<PricesUpdateResponse>;
}
interface ProductsResource {
    create: (body: NonNullable<ProductsCreateData["body"]>) => Promise<ProductsCreateResponse>;
    get: (id: NonNullable<ProductsGetData["path"]>["id"]) => Promise<ProductsGetResponse>;
    list: (query?: NonNullable<ProductsListData["query"]>) => Promise<ProductsListResponse>;
    update: (id: NonNullable<ProductsUpdateData["path"]>["id"], body: NonNullable<ProductsUpdateData["body"]>) => Promise<ProductsUpdateResponse>;
}
interface RefundsResource {
    create: (body?: NonNullable<RefundsCreateData["body"]>) => Promise<RefundsCreateResponse>;
    get: (id: NonNullable<RefundsGetData["path"]>["id"]) => Promise<RefundsGetResponse>;
    list: (query?: NonNullable<RefundsListData["query"]>) => Promise<RefundsListResponse>;
}
interface SubscriptionsResource {
    cancel: (id: NonNullable<SubscriptionsCancelData["path"]>["id"], body?: NonNullable<SubscriptionsCancelData["body"]>) => Promise<SubscriptionsCancelResponse>;
    create: (body?: NonNullable<SubscriptionsCreateData["body"]>) => Promise<SubscriptionsCreateResponse>;
    get: (id: NonNullable<SubscriptionsGetData["path"]>["id"]) => Promise<SubscriptionsGetResponse>;
    list: (query?: NonNullable<SubscriptionsListData["query"]>) => Promise<SubscriptionsListResponse>;
    update: (id: NonNullable<SubscriptionsUpdateData["path"]>["id"], body?: NonNullable<SubscriptionsUpdateData["body"]>) => Promise<SubscriptionsUpdateResponse>;
}
interface TransactionsResource {
    get: (id: NonNullable<TransactionsGetData["path"]>["id"]) => Promise<TransactionsGetResponse>;
    list: (query?: NonNullable<TransactionsListData["query"]>) => Promise<TransactionsListResponse>;
}
interface WebhookResource {
    deliveriesGet: (id: NonNullable<WebhookDeliveriesGetData["path"]>["id"]) => Promise<WebhookDeliveriesGetResponse>;
    deliveriesList: (query?: NonNullable<WebhookDeliveriesListData["query"]>) => Promise<WebhookDeliveriesListResponse>;
    deliveriesRetry: (id: NonNullable<WebhookDeliveriesRetryData["path"]>["id"]) => Promise<WebhookDeliveriesRetryResponse>;
}
interface WebhookEndpointsResource {
    create: (body?: NonNullable<WebhookEndpointsCreateData["body"]>) => Promise<WebhookEndpointsCreateResponse>;
    delete: (id: NonNullable<WebhookEndpointsDeleteData["path"]>["id"]) => Promise<WebhookEndpointsDeleteResponse>;
    get: (id: NonNullable<WebhookEndpointsGetData["path"]>["id"]) => Promise<WebhookEndpointsGetResponse>;
    list: (query?: NonNullable<WebhookEndpointsListData["query"]>) => Promise<WebhookEndpointsListResponse>;
    rotateSecret: (id: NonNullable<WebhookEndpointsRotateSecretData["path"]>["id"]) => Promise<WebhookEndpointsRotateSecretResponse>;
    update: (id: NonNullable<WebhookEndpointsUpdateData["path"]>["id"], body?: NonNullable<WebhookEndpointsUpdateData["body"]>) => Promise<WebhookEndpointsUpdateResponse>;
}
interface GeneratedResources {
    analytics: AnalyticsResource;
    cart: CartResource;
    checkoutSessions: CheckoutSessionsResource;
    creditNotes: CreditNotesResource;
    customer: CustomerResource;
    customers: CustomersResource;
    dd: DdResource;
    entitlements: EntitlementsResource;
    events: EventsResource;
    invoices: InvoicesResource;
    mandates: MandatesResource;
    paymentIntents: PaymentIntentsResource;
    paymentLinks: PaymentLinksResource;
    prices: PricesResource;
    products: ProductsResource;
    refunds: RefundsResource;
    subscriptions: SubscriptionsResource;
    transactions: TransactionsResource;
    webhook: WebhookResource;
    webhookEndpoints: WebhookEndpointsResource;
}
declare function buildGeneratedResources(runtime: GeneratedResourceRuntime): GeneratedResources;

interface RevKeenClientOptions {
    apiKey?: string;
    oauth?: OAuthConfig;
    baseUrl?: string;
    timeout?: number;
    headers?: Record<string, string>;
    fetch?: typeof fetch;
}
interface UsageResource {
    ingest: (body: UsageIngestRequest) => Promise<BatchIngestResult>;
    dryRun: (body: UsageIngestRequest) => Promise<DryRunResult>;
}
declare class RevKeenClient implements GeneratedResourceRuntime {
    private readonly generatedClient;
    readonly usage: UsageResource;
    constructor(options: RevKeenClientOptions);
    requestData<T>(fn: (options: unknown) => Promise<{
        data?: T;
        error?: unknown;
    }>, options?: Record<string, unknown>): Promise<T>;
    private postUsage;
}
interface RevKeenClient extends GeneratedResources {
}

declare class RevKeenError extends Error {
    constructor(message: string);
}
declare class RevKeenAPIError extends RevKeenError {
    readonly status: number;
    readonly body: unknown;
    constructor(status: number, message: string, body: unknown);
}
declare class RevKeenTimeoutError extends RevKeenError {
    constructor(message: string);
}

export { type AnalyticsResource as A, type CartResource as C, type DdResource as D, type EntitlementsResource as E, type GeneratedResourceRuntime as G, type InvoicesResource as I, type MandatesResource as M, type PaymentIntentsResource as P, RevKeenClient as R, type SubscriptionsResource as S, type TransactionsResource as T, type UsageResource as U, type WebhookEndpointsResource as W, type RevKeenClientOptions as a, RevKeenAPIError as b, RevKeenError as c, RevKeenTimeoutError as d, type CheckoutSessionsResource as e, type CreditNotesResource as f, type CustomerResource as g, type CustomersResource as h, type EventsResource as i, type GeneratedResources as j, type PaymentLinksResource as k, type PricesResource as l, type ProductsResource as m, type RefundsResource as n, type WebhookResource as o, buildGeneratedResources as p };
