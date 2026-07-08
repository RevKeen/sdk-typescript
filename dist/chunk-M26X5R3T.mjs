import {
  OAuthTokenManager
} from "./chunk-3JCG2SO2.mjs";
import {
  analyticsRevenueMrrSummary,
  analyticsRevenueTimeSeries,
  cartSessionsAddLineItem,
  cartSessionsApplyDiscountCode,
  cartSessionsConvert,
  cartSessionsCreate,
  cartSessionsGet,
  cartSessionsRemoveLineItem,
  cartSessionsToggleAddOn,
  cartSessionsUpdateLineItem,
  checkoutSessionsCreate,
  checkoutSessionsExpire,
  checkoutSessionsGet,
  createClient,
  creditNotesCreate,
  creditNotesGet,
  creditNotesList,
  creditNotesListLines,
  creditNotesPreview,
  creditNotesVoid,
  customerMetersGet,
  customerMetersList,
  customerPortalCustomerGet,
  customerPortalInvoicesGet,
  customerPortalInvoicesList,
  customerPortalMandatesList,
  customerPortalMandatesReauthorize,
  customerPortalSessionsCreate,
  customerPortalSubscriptionsCancel,
  customerPortalSubscriptionsGet,
  customerPortalSubscriptionsList,
  customersCreate,
  customersGet,
  customersList,
  customersPaymentMethodsList,
  customersPaymentRailsGet,
  customersPreferredRailsGet,
  customersUpdate,
  ddMandateRequestsGet,
  ddPreview,
  ddValidate,
  entitlementsCheck,
  entitlementsList,
  eventsGet,
  eventsList,
  eventsResend,
  invoicesCreate,
  invoicesFinalize,
  invoicesGet,
  invoicesList,
  invoicesMarginEstimate,
  invoicesSend,
  invoicesUpdate,
  invoicesVoid,
  mandatesCancel,
  mandatesCreate,
  mandatesGet,
  mandatesList,
  mandatesReinstate,
  mandatesScheduleCollection,
  mandatesSuspend,
  paymentIntentsCancel,
  paymentIntentsCapture,
  paymentIntentsConfirm,
  paymentIntentsCreate,
  paymentIntentsGet,
  paymentIntentsList,
  paymentLinksActivate,
  paymentLinksArchive,
  paymentLinksCreate,
  paymentLinksDeactivate,
  paymentLinksExpire,
  paymentLinksGet,
  paymentLinksList,
  paymentLinksUpdate,
  pricesArchive,
  pricesCreate,
  pricesGet,
  pricesList,
  pricesUpdate,
  productsCreate,
  productsGet,
  productsList,
  productsUpdate,
  refundsCreate,
  refundsGet,
  refundsList,
  subscriptionsCancel,
  subscriptionsCreate,
  subscriptionsGet,
  subscriptionsList,
  subscriptionsUpdate,
  transactionsGet,
  transactionsList,
  webhookDeliveriesGet,
  webhookDeliveriesList,
  webhookDeliveriesRetry,
  webhookEndpointsCreate,
  webhookEndpointsDelete,
  webhookEndpointsGet,
  webhookEndpointsList,
  webhookEndpointsRotateSecret,
  webhookEndpointsUpdate
} from "./chunk-IB2JLWSL.mjs";
import {
  RevKeenAPIError,
  RevKeenError,
  RevKeenTimeoutError
} from "./chunk-ZOT7NMVT.mjs";

// src/generated-resources.ts
function buildGeneratedResources(runtime) {
  return {
    analytics: {
      revenueMrrSummary: async (query) => runtime.requestData(analyticsRevenueMrrSummary, query === void 0 ? void 0 : { query }),
      revenueTimeSeries: async (query) => runtime.requestData(analyticsRevenueTimeSeries, query === void 0 ? void 0 : { query })
    },
    cart: {
      sessionsAddLineItem: async (id, body) => runtime.requestData(cartSessionsAddLineItem, body === void 0 ? { path: { id } } : { path: { id }, body }),
      sessionsApplyDiscountCode: async (id, body) => runtime.requestData(cartSessionsApplyDiscountCode, body === void 0 ? { path: { id } } : { path: { id }, body }),
      sessionsConvert: async (id) => runtime.requestData(cartSessionsConvert, { path: { id } }),
      sessionsCreate: async (body) => runtime.requestData(cartSessionsCreate, body === void 0 ? void 0 : { body }),
      sessionsGet: async (id) => runtime.requestData(cartSessionsGet, { path: { id } }),
      sessionsRemoveLineItem: async (path) => runtime.requestData(cartSessionsRemoveLineItem, { path }),
      sessionsToggleAddOn: async (id, body) => runtime.requestData(cartSessionsToggleAddOn, body === void 0 ? { path: { id } } : { path: { id }, body }),
      sessionsUpdateLineItem: async (params) => runtime.requestData(cartSessionsUpdateLineItem, { path: params.path, ...params.body === void 0 ? {} : { body: params.body } })
    },
    checkoutSessions: {
      create: async (body) => runtime.requestData(checkoutSessionsCreate, body === void 0 ? void 0 : { body }),
      expire: async (id) => runtime.requestData(checkoutSessionsExpire, { path: { id } }),
      get: async (id) => runtime.requestData(checkoutSessionsGet, { path: { id } })
    },
    creditNotes: {
      create: async (body) => runtime.requestData(creditNotesCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(creditNotesGet, { path: { id } }),
      list: async (query) => runtime.requestData(creditNotesList, query === void 0 ? void 0 : { query }),
      listLines: async (id, query) => runtime.requestData(creditNotesListLines, query === void 0 ? { path: { id } } : { path: { id }, query }),
      preview: async (body) => runtime.requestData(creditNotesPreview, { body }),
      void: async (id) => runtime.requestData(creditNotesVoid, { path: { id } })
    },
    customer: {
      metersGet: async (path) => runtime.requestData(customerMetersGet, { path }),
      metersList: async (query) => runtime.requestData(customerMetersList, query === void 0 ? void 0 : { query }),
      portalCustomerGet: async () => runtime.requestData(customerPortalCustomerGet, void 0),
      portalInvoicesGet: async (id) => runtime.requestData(customerPortalInvoicesGet, { path: { id } }),
      portalInvoicesList: async (query) => runtime.requestData(customerPortalInvoicesList, query === void 0 ? void 0 : { query }),
      portalMandatesList: async () => runtime.requestData(customerPortalMandatesList, void 0),
      portalMandatesReauthorize: async (id, body) => runtime.requestData(customerPortalMandatesReauthorize, { path: { id }, body }),
      portalSessionsCreate: async (body) => runtime.requestData(customerPortalSessionsCreate, { body }),
      portalSubscriptionsCancel: async (id, body) => runtime.requestData(customerPortalSubscriptionsCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      portalSubscriptionsGet: async (id) => runtime.requestData(customerPortalSubscriptionsGet, { path: { id } }),
      portalSubscriptionsList: async (query) => runtime.requestData(customerPortalSubscriptionsList, query === void 0 ? void 0 : { query })
    },
    customers: {
      create: async (body) => runtime.requestData(customersCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(customersGet, { path: { id } }),
      list: async (query) => runtime.requestData(customersList, query === void 0 ? void 0 : { query }),
      paymentMethodsList: async (id) => runtime.requestData(customersPaymentMethodsList, { path: { id } }),
      paymentRailsGet: async (id, query) => runtime.requestData(customersPaymentRailsGet, query === void 0 ? { path: { id } } : { path: { id }, query }),
      preferredRailsGet: async (id, query) => runtime.requestData(customersPreferredRailsGet, query === void 0 ? { path: { id } } : { path: { id }, query }),
      update: async (id, body) => runtime.requestData(customersUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    dd: {
      mandateRequestsGet: async (id) => runtime.requestData(ddMandateRequestsGet, { path: { token: id } }),
      preview: async (body) => runtime.requestData(ddPreview, body === void 0 ? void 0 : { body }),
      validate: async (body) => runtime.requestData(ddValidate, body === void 0 ? void 0 : { body })
    },
    entitlements: {
      check: async (query) => runtime.requestData(entitlementsCheck, query === void 0 ? void 0 : { query }),
      list: async (query) => runtime.requestData(entitlementsList, query === void 0 ? void 0 : { query })
    },
    events: {
      get: async (id) => runtime.requestData(eventsGet, { path: { id } }),
      list: async (query) => runtime.requestData(eventsList, query === void 0 ? void 0 : { query }),
      resend: async (id) => runtime.requestData(eventsResend, { path: { id } })
    },
    invoices: {
      create: async (body) => runtime.requestData(invoicesCreate, { body }),
      finalize: async (id, body) => runtime.requestData(invoicesFinalize, body === void 0 ? { path: { id } } : { path: { id }, body }),
      get: async (id) => runtime.requestData(invoicesGet, { path: { id } }),
      list: async (query) => runtime.requestData(invoicesList, query === void 0 ? void 0 : { query }),
      marginEstimate: async (id, body) => runtime.requestData(invoicesMarginEstimate, { path: { id }, body }),
      send: async (id, body) => runtime.requestData(invoicesSend, body === void 0 ? { path: { id } } : { path: { id }, body }),
      update: async (id, body) => runtime.requestData(invoicesUpdate, { path: { id }, body }),
      void: async (id, body) => runtime.requestData(invoicesVoid, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    mandates: {
      cancel: async (id, body) => runtime.requestData(mandatesCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      create: async (body) => runtime.requestData(mandatesCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(mandatesGet, { path: { id } }),
      list: async (query) => runtime.requestData(mandatesList, query === void 0 ? void 0 : { query }),
      reinstate: async (id, body) => runtime.requestData(mandatesReinstate, body === void 0 ? { path: { id } } : { path: { id }, body }),
      scheduleCollection: async (id, body) => runtime.requestData(mandatesScheduleCollection, body === void 0 ? { path: { id } } : { path: { id }, body }),
      suspend: async (id, body) => runtime.requestData(mandatesSuspend, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    paymentIntents: {
      cancel: async (id, body) => runtime.requestData(paymentIntentsCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      capture: async (id, body) => runtime.requestData(paymentIntentsCapture, body === void 0 ? { path: { id } } : { path: { id }, body }),
      confirm: async (id, body) => runtime.requestData(paymentIntentsConfirm, body === void 0 ? { path: { id } } : { path: { id }, body }),
      create: async (body) => runtime.requestData(paymentIntentsCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(paymentIntentsGet, { path: { id } }),
      list: async (query) => runtime.requestData(paymentIntentsList, query === void 0 ? void 0 : { query })
    },
    paymentLinks: {
      activate: async (id) => runtime.requestData(paymentLinksActivate, { path: { id } }),
      archive: async (id) => runtime.requestData(paymentLinksArchive, { path: { id } }),
      create: async (body) => runtime.requestData(paymentLinksCreate, body === void 0 ? void 0 : { body }),
      deactivate: async (id) => runtime.requestData(paymentLinksDeactivate, { path: { id } }),
      expire: async (id, body) => runtime.requestData(paymentLinksExpire, body === void 0 ? { path: { id } } : { path: { id }, body }),
      get: async (id) => runtime.requestData(paymentLinksGet, { path: { id } }),
      list: async (query) => runtime.requestData(paymentLinksList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(paymentLinksUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    prices: {
      archive: async (id) => runtime.requestData(pricesArchive, { path: { id } }),
      create: async (body) => runtime.requestData(pricesCreate, { body }),
      get: async (id) => runtime.requestData(pricesGet, { path: { id } }),
      list: async (query) => runtime.requestData(pricesList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(pricesUpdate, { path: { id }, body })
    },
    products: {
      create: async (body) => runtime.requestData(productsCreate, { body }),
      get: async (id) => runtime.requestData(productsGet, { path: { id } }),
      list: async (query) => runtime.requestData(productsList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(productsUpdate, { path: { id }, body })
    },
    refunds: {
      create: async (body) => runtime.requestData(refundsCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(refundsGet, { path: { id } }),
      list: async (query) => runtime.requestData(refundsList, query === void 0 ? void 0 : { query })
    },
    subscriptions: {
      cancel: async (id, body) => runtime.requestData(subscriptionsCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      create: async (body) => runtime.requestData(subscriptionsCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(subscriptionsGet, { path: { id } }),
      list: async (query) => runtime.requestData(subscriptionsList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(subscriptionsUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    transactions: {
      get: async (id) => runtime.requestData(transactionsGet, { path: { id } }),
      list: async (query) => runtime.requestData(transactionsList, query === void 0 ? void 0 : { query })
    },
    webhook: {
      deliveriesGet: async (id) => runtime.requestData(webhookDeliveriesGet, { path: { id } }),
      deliveriesList: async (query) => runtime.requestData(webhookDeliveriesList, query === void 0 ? void 0 : { query }),
      deliveriesRetry: async (id) => runtime.requestData(webhookDeliveriesRetry, { path: { id } })
    },
    webhookEndpoints: {
      create: async (body) => runtime.requestData(webhookEndpointsCreate, body === void 0 ? void 0 : { body }),
      delete: async (id) => runtime.requestData(webhookEndpointsDelete, { path: { id } }),
      get: async (id) => runtime.requestData(webhookEndpointsGet, { path: { id } }),
      list: async (query) => runtime.requestData(webhookEndpointsList, query === void 0 ? void 0 : { query }),
      rotateSecret: async (id) => runtime.requestData(webhookEndpointsRotateSecret, { path: { id } }),
      update: async (id, body) => runtime.requestData(webhookEndpointsUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    }
  };
}

// src/client.ts
var API_SECURITY = [
  { name: "x-api-key", type: "apiKey" },
  { scheme: "bearer", type: "http" }
];
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
var RevKeenClient = class {
  generatedClient;
  usage;
  constructor(options) {
    if (!options.apiKey && !options.oauth) {
      throw new RevKeenError(
        "RevKeenClient requires either 'apiKey' or 'oauth' configuration. See https://docs.revkeen.com/api/authentication"
      );
    }
    if (options.apiKey && options.oauth) {
      throw new RevKeenError(
        "Provide either 'apiKey' or 'oauth', not both. Use 'apiKey' for server-to-server with Unkey keys, or 'oauth' for OAuth 2.1 client credentials."
      );
    }
    const timeoutMs = options.timeout ?? 3e4;
    const tokenManager = options.oauth ? new OAuthTokenManager(options.oauth) : null;
    const fetchImpl = createTimeoutFetch(options.fetch ?? globalThis.fetch, timeoutMs);
    this.generatedClient = createClient({
      auth: async (auth) => {
        if (auth.type === "apiKey") {
          return options.apiKey;
        }
        if (auth.scheme === "bearer" && tokenManager) {
          return tokenManager.getToken();
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
    Object.assign(this, buildGeneratedResources(this));
    this.usage = {
      ingest: (body) => this.postUsage("/usage-events", body),
      dryRun: (body) => this.postUsage("/usage-events/dry-run", body)
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
  async postUsage(url, body) {
    const result = await this.generatedClient.post({
      security: API_SECURITY,
      throwOnError: true,
      url,
      body
    });
    return result.data;
  }
};

export {
  buildGeneratedResources,
  RevKeenClient
};
//# sourceMappingURL=chunk-M26X5R3T.mjs.map