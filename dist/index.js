"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  OAuthTokenManager: () => OAuthTokenManager,
  RevKeen: () => RevKeenClient,
  RevKeenAPIError: () => RevKeenAPIError,
  RevKeenAuthenticationError: () => RevKeenAuthenticationError,
  RevKeenAuthorizationError: () => RevKeenAuthorizationError,
  RevKeenClient: () => RevKeenClient,
  RevKeenConflictError: () => RevKeenConflictError,
  RevKeenEnvironment: () => RevKeenEnvironment,
  RevKeenError: () => RevKeenError,
  RevKeenIdempotencyConflictError: () => RevKeenIdempotencyConflictError,
  RevKeenNotFoundError: () => RevKeenNotFoundError,
  RevKeenPaginationStallError: () => RevKeenPaginationStallError,
  RevKeenRateLimitError: () => RevKeenRateLimitError,
  RevKeenServerError: () => RevKeenServerError,
  RevKeenTimeoutError: () => RevKeenTimeoutError,
  RevKeenValidationError: () => RevKeenValidationError,
  WEBHOOK_TOLERANCE_IN_SECONDS: () => WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError: () => WebhookSignatureVerificationError,
  accountingInvoicePaymentRequestsCreate: () => accountingInvoicePaymentRequestsCreate,
  accountingInvoicePaymentRequestsGet: () => accountingInvoicePaymentRequestsGet,
  analyticsRevenueMrrSummary: () => analyticsRevenueMrrSummary,
  analyticsRevenueTimeSeries: () => analyticsRevenueTimeSeries,
  billingOverviewGet: () => billingOverviewGet,
  buildGeneratedResources: () => buildGeneratedResources,
  cartApiKeysEnsure: () => cartApiKeysEnsure,
  cartApiKeysRotate: () => cartApiKeysRotate,
  cartApiKeysStatus: () => cartApiKeysStatus,
  cartSessionsAddLineItem: () => cartSessionsAddLineItem,
  cartSessionsApplyDiscountCode: () => cartSessionsApplyDiscountCode,
  cartSessionsConvert: () => cartSessionsConvert,
  cartSessionsCreate: () => cartSessionsCreate,
  cartSessionsGet: () => cartSessionsGet,
  cartSessionsRemoveLineItem: () => cartSessionsRemoveLineItem,
  cartSessionsSetContact: () => cartSessionsSetContact,
  cartSessionsToggleAddOn: () => cartSessionsToggleAddOn,
  cartSessionsUpdateLineItem: () => cartSessionsUpdateLineItem,
  checkoutSessionsCreate: () => checkoutSessionsCreate,
  checkoutSessionsExpire: () => checkoutSessionsExpire,
  checkoutSessionsGet: () => checkoutSessionsGet,
  constructEvent: () => constructEvent,
  constructEventWithHeaders: () => constructEventWithHeaders,
  createRevKeenAPIError: () => createRevKeenAPIError,
  creditNotesCreate: () => creditNotesCreate,
  creditNotesGet: () => creditNotesGet,
  creditNotesList: () => creditNotesList,
  creditNotesListLines: () => creditNotesListLines,
  creditNotesPreview: () => creditNotesPreview,
  creditNotesVoid: () => creditNotesVoid,
  customerMetersGet: () => customerMetersGet,
  customerMetersList: () => customerMetersList,
  customerPortalCustomerGet: () => customerPortalCustomerGet,
  customerPortalInvoicesGet: () => customerPortalInvoicesGet,
  customerPortalInvoicesList: () => customerPortalInvoicesList,
  customerPortalMandatesCancel: () => customerPortalMandatesCancel,
  customerPortalMandatesList: () => customerPortalMandatesList,
  customerPortalMandatesReauthorize: () => customerPortalMandatesReauthorize,
  customerPortalMandatesReauthorizeSendOtp: () => customerPortalMandatesReauthorizeSendOtp,
  customerPortalMandatesReauthorizeVerifyOtp: () => customerPortalMandatesReauthorizeVerifyOtp,
  customerPortalSessionsCreate: () => customerPortalSessionsCreate,
  customerPortalSubscriptionsCancel: () => customerPortalSubscriptionsCancel,
  customerPortalSubscriptionsGet: () => customerPortalSubscriptionsGet,
  customerPortalSubscriptionsList: () => customerPortalSubscriptionsList,
  customerStateGet: () => customerStateGet,
  customersCreate: () => customersCreate,
  customersGet: () => customersGet,
  customersList: () => customersList,
  customersPaymentMethodsList: () => customersPaymentMethodsList,
  customersPaymentRailsGet: () => customersPaymentRailsGet,
  customersPreferredRailsGet: () => customersPreferredRailsGet,
  customersUpdate: () => customersUpdate,
  ddMandateRequestsGet: () => ddMandateRequestsGet,
  ddPreview: () => ddPreview,
  ddValidate: () => ddValidate,
  default: () => RevKeenClient,
  emptyRevKeenRateLimitMetadata: () => emptyRevKeenRateLimitMetadata,
  entitlementsCheck: () => entitlementsCheck,
  entitlementsList: () => entitlementsList,
  eventsGet: () => eventsGet,
  eventsList: () => eventsList,
  eventsResend: () => eventsResend,
  extractWebhookHeaders: () => extractWebhookHeaders,
  invoiceLineItemsListUsageEvents: () => invoiceLineItemsListUsageEvents,
  invoiceUsageExplain: () => invoiceUsageExplain,
  invoicesCreate: () => invoicesCreate,
  invoicesFinalize: () => invoicesFinalize,
  invoicesGet: () => invoicesGet,
  invoicesList: () => invoicesList,
  invoicesMarginEstimate: () => invoicesMarginEstimate,
  invoicesSend: () => invoicesSend,
  invoicesUpdate: () => invoicesUpdate,
  invoicesVoid: () => invoicesVoid,
  isMinorUnits: () => isMinorUnits,
  mandatesCancel: () => mandatesCancel,
  mandatesCreate: () => mandatesCreate,
  mandatesGet: () => mandatesGet,
  mandatesList: () => mandatesList,
  mandatesReinstate: () => mandatesReinstate,
  mandatesScheduleCollection: () => mandatesScheduleCollection,
  mandatesSuspend: () => mandatesSuspend,
  mapOptionalNullable: () => mapOptionalNullable,
  metersCreate: () => metersCreate,
  metersGet: () => metersGet,
  metersList: () => metersList,
  metersQuantities: () => metersQuantities,
  metersUpdate: () => metersUpdate,
  minorUnits: () => minorUnits,
  normalizeRevKeenAPIError: () => normalizeRevKeenAPIError,
  paginate: () => paginate,
  parseRevKeenRateLimitMetadata: () => parseRevKeenRateLimitMetadata,
  parseRfc3339: () => parseRfc3339,
  paymentIntentsCancel: () => paymentIntentsCancel,
  paymentIntentsCapture: () => paymentIntentsCapture,
  paymentIntentsConfirm: () => paymentIntentsConfirm,
  paymentIntentsCreate: () => paymentIntentsCreate,
  paymentIntentsGet: () => paymentIntentsGet,
  paymentIntentsList: () => paymentIntentsList,
  paymentLinksActivate: () => paymentLinksActivate,
  paymentLinksArchive: () => paymentLinksArchive,
  paymentLinksCreate: () => paymentLinksCreate,
  paymentLinksDeactivate: () => paymentLinksDeactivate,
  paymentLinksExpire: () => paymentLinksExpire,
  paymentLinksGet: () => paymentLinksGet,
  paymentLinksList: () => paymentLinksList,
  paymentLinksUpdate: () => paymentLinksUpdate,
  pricesArchive: () => pricesArchive,
  pricesCreate: () => pricesCreate,
  pricesGet: () => pricesGet,
  pricesList: () => pricesList,
  pricesUpdate: () => pricesUpdate,
  productCollectionsCreate: () => productCollectionsCreate,
  productCollectionsDelete: () => productCollectionsDelete,
  productCollectionsGet: () => productCollectionsGet,
  productCollectionsList: () => productCollectionsList,
  productCollectionsUpdate: () => productCollectionsUpdate,
  productsCreate: () => productsCreate,
  productsGet: () => productsGet,
  productsList: () => productsList,
  productsUpdate: () => productsUpdate,
  refundsCreate: () => refundsCreate,
  refundsGet: () => refundsGet,
  refundsList: () => refundsList,
  storefrontOriginsCreate: () => storefrontOriginsCreate,
  storefrontOriginsDelete: () => storefrontOriginsDelete,
  storefrontOriginsList: () => storefrontOriginsList,
  storefrontProductsGet: () => storefrontProductsGet,
  storefrontProductsList: () => storefrontProductsList,
  storefrontStatusGet: () => storefrontStatusGet,
  subscriptionsCancel: () => subscriptionsCancel,
  subscriptionsCreate: () => subscriptionsCreate,
  subscriptionsGet: () => subscriptionsGet,
  subscriptionsList: () => subscriptionsList,
  subscriptionsUpdate: () => subscriptionsUpdate,
  transactionsGet: () => transactionsGet,
  transactionsList: () => transactionsList,
  usageBalanceGet: () => usageBalanceGet,
  usageEventsGet: () => usageEventsGet,
  usageEventsIngest: () => usageEventsIngest,
  usageEventsList: () => usageEventsList,
  verifySignature: () => verifySignature,
  webhookDeliveriesGet: () => webhookDeliveriesGet,
  webhookDeliveriesList: () => webhookDeliveriesList,
  webhookDeliveriesRetry: () => webhookDeliveriesRetry,
  webhookEndpointsCreate: () => webhookEndpointsCreate,
  webhookEndpointsDelete: () => webhookEndpointsDelete,
  webhookEndpointsGet: () => webhookEndpointsGet,
  webhookEndpointsList: () => webhookEndpointsList,
  webhookEndpointsRotateSecret: () => webhookEndpointsRotateSecret,
  webhookEndpointsUpdate: () => webhookEndpointsUpdate,
  webhooks: () => webhooks_default
});
module.exports = __toCommonJS(src_exports);

// src/generated-resources.ts
function buildGeneratedResources(runtime) {
  return {
    accounting: {
      invoicePaymentRequestsCreate: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "accounting_invoice_payment_requests_create",
          path: "/integrations/accounting/invoice-payment-requests",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      invoicePaymentRequestsGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "accounting_invoice_payment_requests_get",
          path: "/integrations/accounting/invoice-payment-requests/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    analytics: {
      revenueMrrSummary: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "analytics_revenue_mrr_summary",
          path: "/analytics/revenue/mrr-summary",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      revenueTimeSeries: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "analytics_revenue_time_series",
          path: "/analytics/revenue/time-series",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    billing: {
      overviewGet: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "billing_overview_get",
          path: "/billing/overview",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    cart: {
      apiKeysEnsure: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "POST",
          operationId: "cart_api_keys_ensure",
          path: "/cart-api-keys/ensure",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      apiKeysRotate: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { kind: id } } : { path: { kind: id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_api_keys_rotate",
          path: "/cart-api-keys/{kind}/rotate",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      apiKeysStatus: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "cart_api_keys_status",
          path: "/cart-api-keys/status",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      sessionsAddLineItem: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_sessions_add_line_item",
          path: "/cart-sessions/{id}/line-items",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsApplyDiscountCode: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_sessions_apply_discount_code",
          path: "/cart-sessions/{id}/discount-code",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsConvert: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_sessions_convert",
          path: "/cart-sessions/{id}/convert",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsCreate: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_sessions_create",
          path: "/cart-sessions",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "cart_sessions_get",
          path: "/cart-sessions/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      sessionsRemoveLineItem: async (path, requestOptions) => runtime.requestData(
        { path },
        requestOptions,
        {
          method: "DELETE",
          operationId: "cart_sessions_remove_line_item",
          path: "/cart-sessions/{id}/line-items/{lineId}",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsSetContact: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_sessions_set_contact",
          path: "/cart-sessions/{id}/contact",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsToggleAddOn: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "cart_sessions_toggle_add_on",
          path: "/cart-sessions/{id}/add-ons",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      sessionsUpdateLineItem: async (params, requestOptions) => runtime.requestData(
        {
          path: params.path,
          ...params.body === void 0 ? {} : { body: params.body }
        },
        requestOptions,
        {
          method: "PATCH",
          operationId: "cart_sessions_update_line_item",
          path: "/cart-sessions/{id}/line-items/{lineId}",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    checkoutSessions: {
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "checkout_sessions_create",
          path: "/checkout-sessions",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      expire: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "checkout_sessions_expire",
          path: "/checkout-sessions/{id}/expire",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "checkout_sessions_get",
          path: "/checkout-sessions/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    creditNotes: {
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "credit_notes_create",
          path: "/credit_notes",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "credit_notes_get",
          path: "/credit_notes/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "credit_notes_list",
          path: "/credit_notes",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      listLines: async (id, query, requestOptions) => runtime.requestData(
        query === void 0 ? { path: { id } } : { path: { id }, query },
        requestOptions,
        {
          method: "GET",
          operationId: "credit_notes_list_lines",
          path: "/credit_notes/{id}/lines",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      preview: async (body, requestOptions) => runtime.requestData(
        { body },
        requestOptions,
        {
          method: "POST",
          operationId: "credit_notes_preview",
          path: "/credit_notes/preview",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      void: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "credit_notes_void",
          path: "/credit_notes/{id}/void",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    customer: {
      metersGet: async (path, requestOptions) => runtime.requestData(
        { path },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_meters_get",
          path: "/customer-meters/{customer_id}/{meter_id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      metersList: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_meters_list",
          path: "/customer-meters",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalCustomerGet: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "customer_portal_customer_get",
          path: "/customer-portal/customer",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalInvoicesGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_portal_invoices_get",
          path: "/customer-portal/invoices/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalInvoicesList: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_portal_invoices_list",
          path: "/customer-portal/invoices",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalMandatesCancel: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "customer_portal_mandates_cancel",
          path: "/customer-portal/mandates/{id}/cancel",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalMandatesList: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "customer_portal_mandates_list",
          path: "/customer-portal/mandates",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalMandatesReauthorize: async (id, body, requestOptions) => runtime.requestData(
        { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "customer_portal_mandates_reauthorize",
          path: "/customer-portal/mandates/{id}/re-authorize",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalMandatesReauthorizeSendOtp: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "customer_portal_mandates_reauthorize_send_otp",
          path: "/customer-portal/mandates/{id}/re-authorize/send-otp",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalMandatesReauthorizeVerifyOtp: async (id, body, requestOptions) => runtime.requestData(
        { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "customer_portal_mandates_reauthorize_verify_otp",
          path: "/customer-portal/mandates/{id}/re-authorize/verify-otp",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalSessionsCreate: async (body, requestOptions) => runtime.requestData(
        { body },
        requestOptions,
        {
          method: "POST",
          operationId: "customer_portal_sessions_create",
          path: "/customer-portal/sessions",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalSubscriptionsCancel: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "customer_portal_subscriptions_cancel",
          path: "/customer-portal/subscriptions/{id}/cancel",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalSubscriptionsGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_portal_subscriptions_get",
          path: "/customer-portal/subscriptions/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      portalSubscriptionsList: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_portal_subscriptions_list",
          path: "/customer-portal/subscriptions",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      stateGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "customer_state_get",
          path: "/customers/{id}/state",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    customers: {
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "customers_create",
          path: "/customers",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "customers_get",
          path: "/customers/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "customers_list",
          path: "/customers",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      paymentMethodsList: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "customers_payment_methods_list",
          path: "/customers/{id}/payment-methods",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      paymentRailsGet: async (id, query, requestOptions) => runtime.requestData(
        query === void 0 ? { path: { id } } : { path: { id }, query },
        requestOptions,
        {
          method: "GET",
          operationId: "customers_payment_rails_get",
          path: "/customers/{id}/payment-rails",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      preferredRailsGet: async (id, query, requestOptions) => runtime.requestData(
        query === void 0 ? { path: { id } } : { path: { id }, query },
        requestOptions,
        {
          method: "GET",
          operationId: "customers_preferred_rails_get",
          path: "/customers/{id}/preferred-rails",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "customers_update",
          path: "/customers/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    dd: {
      mandateRequestsGet: async (id, requestOptions) => runtime.requestData(
        { path: { token: id } },
        requestOptions,
        {
          method: "GET",
          operationId: "dd_mandate_requests_get",
          path: "/dd/mandate-requests/{token}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      preview: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "dd_preview",
          path: "/dd/preview",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      validate: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "dd_validate",
          path: "/dd/validate",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    entitlements: {
      check: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "entitlements_check",
          path: "/entitlements/check",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "entitlements_list",
          path: "/entitlements",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    events: {
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "events_get",
          path: "/events/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "events_list",
          path: "/events",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      resend: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "events_resend",
          path: "/events/{id}/resend",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    invoice: {
      lineItemsListUsageEvents: async (id, query, requestOptions) => runtime.requestData(
        query === void 0 ? { path: { id } } : { path: { id }, query },
        requestOptions,
        {
          method: "GET",
          operationId: "invoice_line_items_list_usage_events",
          path: "/invoice-line-items/{id}/usage-events",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      usageExplain: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "invoice_usage_explain",
          path: "/invoices/{id}/usage-explain",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    invoices: {
      create: async (body, requestOptions) => runtime.requestData({ body }, requestOptions, {
        method: "POST",
        operationId: "invoices_create",
        path: "/invoices",
        idempotent: true,
        requiresIdempotencyKey: false
      }),
      finalize: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "invoices_finalize",
          path: "/invoices/{id}/finalize",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "invoices_get",
          path: "/invoices/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "invoices_list",
          path: "/invoices",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      marginEstimate: async (id, body, requestOptions) => runtime.requestData(
        { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "invoices_margin_estimate",
          path: "/invoices/{id}/margin-estimate",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      send: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "invoices_send",
          path: "/invoices/{id}/send",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "invoices_update",
          path: "/invoices/{id}",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      void: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "invoices_void",
          path: "/invoices/{id}/void",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    mandates: {
      cancel: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "mandates_cancel",
          path: "/mandates/{id}/cancel",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "mandates_create",
          path: "/mandates",
          idempotent: true,
          requiresIdempotencyKey: true
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "mandates_get",
          path: "/mandates/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "mandates_list",
          path: "/mandates",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      reinstate: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "mandates_reinstate",
          path: "/mandates/{id}/reinstate",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      scheduleCollection: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "mandates_schedule_collection",
          path: "/mandates/{id}/collections",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      suspend: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "mandates_suspend",
          path: "/mandates/{id}/suspend",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    meters: {
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "meters_create",
          path: "/meters",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "meters_get",
          path: "/meters/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "meters_list",
          path: "/meters",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      quantities: async (id, query, requestOptions) => runtime.requestData(
        query === void 0 ? { path: { id } } : { path: { id }, query },
        requestOptions,
        {
          method: "GET",
          operationId: "meters_quantities",
          path: "/meters/{id}/quantities",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "meters_update",
          path: "/meters/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    paymentIntents: {
      cancel: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_intents_cancel",
          path: "/payment-intents/{id}/cancel",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      capture: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_intents_capture",
          path: "/payment-intents/{id}/capture",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      confirm: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_intents_confirm",
          path: "/payment-intents/{id}/confirm",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_intents_create",
          path: "/payment-intents",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "payment_intents_get",
          path: "/payment-intents/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "payment_intents_list",
          path: "/payment-intents",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    paymentLinks: {
      activate: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_links_activate",
          path: "/payment-links/{id}/activate",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      archive: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_links_archive",
          path: "/payment-links/{id}/archive",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_links_create",
          path: "/payment-links",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      deactivate: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_links_deactivate",
          path: "/payment-links/{id}/deactivate",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      expire: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "payment_links_expire",
          path: "/payment-links/{id}/expire",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "payment_links_get",
          path: "/payment-links/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "payment_links_list",
          path: "/payment-links",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "payment_links_update",
          path: "/payment-links/{id}/status",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    prices: {
      archive: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "DELETE",
          operationId: "prices_archive",
          path: "/prices/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      create: async (body, requestOptions) => runtime.requestData({ body }, requestOptions, {
        method: "POST",
        operationId: "prices_create",
        path: "/prices",
        idempotent: false,
        requiresIdempotencyKey: false
      }),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "prices_get",
          path: "/prices/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "prices_list",
          path: "/prices",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "prices_update",
          path: "/prices/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    product: {
      collectionsCreate: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "product_collections_create",
          path: "/product-collections",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      collectionsDelete: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "DELETE",
          operationId: "product_collections_delete",
          path: "/product-collections/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      collectionsGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "product_collections_get",
          path: "/product-collections/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      collectionsList: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "product_collections_list",
          path: "/product-collections",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      collectionsUpdate: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "product_collections_update",
          path: "/product-collections/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    products: {
      create: async (body, requestOptions) => runtime.requestData({ body }, requestOptions, {
        method: "POST",
        operationId: "products_create",
        path: "/products",
        idempotent: false,
        requiresIdempotencyKey: false
      }),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "products_get",
          path: "/products/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "products_list",
          path: "/products",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "products_update",
          path: "/products/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    refunds: {
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "refunds_create",
          path: "/refunds",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "refunds_get",
          path: "/refunds/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "refunds_list",
          path: "/refunds",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    storefront: {
      originsCreate: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "storefront_origins_create",
          path: "/storefront/origins",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      originsDelete: async (id, requestOptions) => runtime.requestData(
        { path: { originId: id } },
        requestOptions,
        {
          method: "DELETE",
          operationId: "storefront_origins_delete",
          path: "/storefront/origins/{originId}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      originsList: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "storefront_origins_list",
          path: "/storefront/origins",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      productsGet: async (id, requestOptions) => runtime.requestData(
        { path: { productId: id } },
        requestOptions,
        {
          method: "GET",
          operationId: "storefront_products_get",
          path: "/storefront/products/{productId}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      productsList: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "storefront_products_list",
          path: "/storefront/products",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      statusGet: async (requestOptions) => runtime.requestData(
        void 0,
        requestOptions,
        {
          method: "GET",
          operationId: "storefront_status_get",
          path: "/storefront/status",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    subscriptions: {
      cancel: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "POST",
          operationId: "subscriptions_cancel",
          path: "/subscriptions/{id}/cancel",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "subscriptions_create",
          path: "/subscriptions",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "subscriptions_get",
          path: "/subscriptions/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "subscriptions_list",
          path: "/subscriptions",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "subscriptions_update",
          path: "/subscriptions/{id}",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      )
    },
    transactions: {
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "transactions_get",
          path: "/transactions/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "transactions_list",
          path: "/transactions",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    usageBalance: {
      get: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "usage_balance_get",
          path: "/usage/balance",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    usageEvents: {
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "usage_events_get",
          path: "/usage-events/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      ingest: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "usage_events_ingest",
          path: "/usage-events",
          idempotent: true,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "usage_events_list",
          path: "/usage-events",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    webhook: {
      deliveriesGet: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "webhook_deliveries_get",
          path: "/webhook-deliveries/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      deliveriesList: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "webhook_deliveries_list",
          path: "/webhook-deliveries",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      deliveriesRetry: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "webhook_deliveries_retry",
          path: "/webhook-deliveries/{id}/retry",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    },
    webhookEndpoints: {
      create: async (body, requestOptions) => runtime.requestData(
        body === void 0 ? void 0 : { body },
        requestOptions,
        {
          method: "POST",
          operationId: "webhook_endpoints_create",
          path: "/webhook-endpoints",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      delete: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "DELETE",
          operationId: "webhook_endpoints_delete",
          path: "/webhook-endpoints/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      get: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "GET",
          operationId: "webhook_endpoints_get",
          path: "/webhook-endpoints/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      list: async (query, requestOptions) => runtime.requestData(
        query === void 0 ? void 0 : { query },
        requestOptions,
        {
          method: "GET",
          operationId: "webhook_endpoints_list",
          path: "/webhook-endpoints",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      rotateSecret: async (id, requestOptions) => runtime.requestData(
        { path: { id } },
        requestOptions,
        {
          method: "POST",
          operationId: "webhook_endpoints_rotate_secret",
          path: "/webhook-endpoints/{id}/rotate-secret",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      ),
      update: async (id, body, requestOptions) => runtime.requestData(
        body === void 0 ? { path: { id } } : { path: { id }, body },
        requestOptions,
        {
          method: "PATCH",
          operationId: "webhook_endpoints_update",
          path: "/webhook-endpoints/{id}",
          idempotent: false,
          requiresIdempotencyKey: false
        }
      )
    }
  };
}

// src/core/errors.ts
var ABSENT_RATE_LIMIT = Object.freeze({
  limit: null,
  remaining: null,
  resetAt: null,
  retryAfterSeconds: null
});
function emptyRevKeenRateLimitMetadata() {
  return ABSENT_RATE_LIMIT;
}
function headerValue(headers, name) {
  const raw = headers?.get(name);
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed : null;
}
function nonNegativeInteger(value) {
  if (value === null || !/^\d+$/.test(value)) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}
function parseRetryAfterSeconds(value, now) {
  if (value === null) return null;
  const seconds = nonNegativeInteger(value);
  if (seconds !== null) return seconds;
  const date = Date.parse(value);
  if (!Number.isFinite(date)) return null;
  return Math.max(0, Math.ceil((date - now) / 1e3));
}
function parseRevKeenRateLimitMetadata(headers, now = Date.now()) {
  if (!headers) return ABSENT_RATE_LIMIT;
  const resetSeconds = nonNegativeInteger(
    headerValue(headers, "x-ratelimit-reset")
  );
  const metadata = {
    limit: nonNegativeInteger(headerValue(headers, "x-ratelimit-limit")),
    remaining: nonNegativeInteger(
      headerValue(headers, "x-ratelimit-remaining")
    ),
    // X-RateLimit-Reset is UNIX seconds, never milliseconds.
    resetAt: resetSeconds === null ? null : new Date(resetSeconds * 1e3),
    retryAfterSeconds: parseRetryAfterSeconds(
      headerValue(headers, "retry-after"),
      now
    )
  };
  return metadata.limit === null && metadata.remaining === null && metadata.resetAt === null && metadata.retryAfterSeconds === null ? ABSENT_RATE_LIMIT : metadata;
}
var RevKeenError = class extends Error {
  requestId;
  traceId;
  correlationId;
  attemptCount;
  /**
   * Rate-limit headers observed on the response, if any. Always an object, so
   * `error.rateLimit.retryAfterSeconds` is safe to read on every failure.
   */
  rateLimit;
  constructor(message, context = {}) {
    super(message);
    this.name = "RevKeenError";
    this.requestId = context.requestId ?? null;
    this.traceId = context.traceId ?? null;
    this.correlationId = context.correlationId ?? context.requestId ?? null;
    this.attemptCount = context.attemptCount ?? 1;
    this.rateLimit = context.rateLimit ?? ABSENT_RATE_LIMIT;
  }
};
var RevKeenAPIError = class extends RevKeenError {
  constructor(status, message, body, context = {}, metadata = {}) {
    super(message, context);
    this.status = status;
    this.body = body;
    this.name = "RevKeenAPIError";
    this.code = nonEmptyString(metadata.code) ?? "unknown_error";
    this.machineCode = this.code;
    this.rawBody = body;
    this.type = nonEmptyString(metadata.type);
    this.param = nonEmptyString(metadata.param);
    this.details = metadata.details;
  }
  code;
  machineCode;
  rawBody;
  type;
  param;
  details;
};
var IDEMPOTENCY_CONFLICT_CODES = /* @__PURE__ */ new Set([
  "idempotency_conflict",
  "idempotency_key_conflict",
  "idempotency_key_reused",
  "idempotency_key_mismatch",
  "idempotency_mismatch"
]);
var RevKeenAuthenticationError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenAuthenticationError";
  }
};
var RevKeenAuthorizationError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenAuthorizationError";
  }
};
var RevKeenValidationError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenValidationError";
  }
};
var RevKeenNotFoundError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenNotFoundError";
  }
};
var RevKeenRateLimitError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenRateLimitError";
  }
};
var RevKeenConflictError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenConflictError";
  }
};
var RevKeenIdempotencyConflictError = class extends RevKeenConflictError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenIdempotencyConflictError";
  }
};
var RevKeenServerError = class extends RevKeenAPIError {
  constructor(...args) {
    super(...args);
    this.name = "RevKeenServerError";
  }
};
var RevKeenTimeoutError = class extends RevKeenError {
  constructor(message, phase, context = {}) {
    super(message, context);
    this.phase = phase;
    this.name = "RevKeenTimeoutError";
  }
};
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function nonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}
function property(record, name) {
  return Object.prototype.hasOwnProperty.call(record, name) ? record[name] : void 0;
}
function normalizeRevKeenAPIError(body, fallbackMessage) {
  const envelope = isRecord(body) ? body : {};
  const nestedError = isRecord(envelope.error) ? envelope.error : null;
  const source = nestedError ?? envelope;
  const flatError = nonEmptyString(envelope.error);
  return {
    code: nonEmptyString(property(source, "code")) ?? nonEmptyString(property(envelope, "code")) ?? "unknown_error",
    message: nonEmptyString(property(source, "message")) ?? flatError ?? nonEmptyString(property(envelope, "message")) ?? nonEmptyString(body) ?? nonEmptyString(fallbackMessage) ?? "RevKeen API request failed",
    type: nonEmptyString(property(source, "type")) ?? nonEmptyString(property(envelope, "type")),
    param: nonEmptyString(property(source, "param")) ?? nonEmptyString(property(envelope, "param")),
    details: Object.prototype.hasOwnProperty.call(source, "details") ? source.details : property(envelope, "details")
  };
}
function createRevKeenAPIError(status, body, fallbackMessage, context = {}) {
  const normalized = normalizeRevKeenAPIError(body, fallbackMessage);
  const args = [
    status,
    normalized.message,
    body,
    context,
    normalized
  ];
  if (status === 401) return new RevKeenAuthenticationError(...args);
  if (status === 403) return new RevKeenAuthorizationError(...args);
  if (status === 400 || status === 422)
    return new RevKeenValidationError(...args);
  if (status === 404) return new RevKeenNotFoundError(...args);
  if (status === 429) return new RevKeenRateLimitError(...args);
  if (status === 409) {
    return IDEMPOTENCY_CONFLICT_CODES.has(normalized.code.toLowerCase()) ? new RevKeenIdempotencyConflictError(...args) : new RevKeenConflictError(...args);
  }
  if (status >= 500) return new RevKeenServerError(...args);
  return new RevKeenAPIError(...args);
}

// src/core/authentication.ts
var SECRET_KEY_PREFIXES = ["rk_live_", "rk_sandbox_"];
var PUBLISHABLE_KEY_PREFIXES = ["rk_pk_live_", "rk_pk_sandbox_"];
function classifyApiKey(key) {
  if (PUBLISHABLE_KEY_PREFIXES.some(
    (prefix) => key.startsWith(prefix) && key.length > prefix.length
  )) {
    return "publishable";
  }
  if (SECRET_KEY_PREFIXES.some(
    (prefix) => key.startsWith(prefix) && key.length > prefix.length
  )) {
    return "secret";
  }
  return "unknown";
}
function assertSecretKey(key) {
  const kind = classifyApiKey(key);
  if (kind === "publishable") {
    throw new RevKeenError(
      "Publishable keys must be used with RevKeenBrowserClient from '@revkeen/sdk/browser'."
    );
  }
  if (kind !== "secret") {
    throw new RevKeenError(
      "Invalid RevKeen secret key. Expected an rk_live_ or rk_sandbox_ key."
    );
  }
}
function assertPublishableKey(key) {
  if (classifyApiKey(key) !== "publishable") {
    throw new RevKeenError(
      "Invalid RevKeen publishable key. Expected an rk_pk_live_ or rk_pk_sandbox_ key."
    );
  }
}

// src/core/environment.ts
var RevKeenEnvironment = /* @__PURE__ */ ((RevKeenEnvironment2) => {
  RevKeenEnvironment2["Sandbox"] = "sandbox";
  RevKeenEnvironment2["Production"] = "production";
  return RevKeenEnvironment2;
})(RevKeenEnvironment || {});
var ENVIRONMENT_BASE_URLS = {
  ["sandbox" /* Sandbox */]: "https://staging-api.revkeen.com/v2",
  ["production" /* Production */]: "https://api.revkeen.com/v2"
};
function resolveRevKeenEnvironment(environment) {
  const baseUrl = ENVIRONMENT_BASE_URLS[environment];
  if (!baseUrl) {
    throw new RevKeenError(
      `Unknown RevKeen environment '${String(environment)}'. Use RevKeenEnvironment.Sandbox or RevKeenEnvironment.Production.`
    );
  }
  return baseUrl;
}
function validateCustomBaseUrl(baseUrl) {
  let url;
  try {
    url = new URL(baseUrl);
  } catch {
    throw new RevKeenError(
      "Custom RevKeen base URL must be a valid absolute URL."
    );
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new RevKeenError("Custom RevKeen base URL must use HTTP or HTTPS.");
  }
  if (url.username || url.password) {
    throw new RevKeenError(
      "Custom RevKeen base URL must not contain credentials."
    );
  }
  if (url.search || url.hash) {
    throw new RevKeenError(
      "Custom RevKeen base URL must not contain a query or fragment."
    );
  }
  return baseUrl.replace(/\/+$/, "");
}

// ../../sdks/typescript/src/runtime.ts
var BASE_PATH = "https://api.revkeen.com/v2".replace(/\/+$/, "");
var Configuration = class {
  constructor(configuration = {}) {
    this.configuration = configuration;
  }
  set config(configuration) {
    this.configuration = configuration;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || querystring;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const apiKey = this.configuration.apiKey;
    if (apiKey) {
      return typeof apiKey === "function" ? apiKey : () => apiKey;
    }
    return void 0;
  }
  get accessToken() {
    const accessToken = this.configuration.accessToken;
    if (accessToken) {
      return typeof accessToken === "function" ? accessToken : async () => accessToken;
    }
    return void 0;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
};
var DefaultConfig = new Configuration();
var BaseAPI = class _BaseAPI {
  constructor(configuration = DefaultConfig) {
    this.configuration = configuration;
    this.middleware = configuration.middleware;
  }
  static jsonRegex = /^(:?application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$/i;
  middleware;
  withMiddleware(...middlewares) {
    const next = this.clone();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }
  withPreMiddleware(...preMiddlewares) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }));
    return this.withMiddleware(...middlewares);
  }
  withPostMiddleware(...postMiddlewares) {
    const middlewares = postMiddlewares.map((post) => ({ post }));
    return this.withMiddleware(...middlewares);
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    if (!mime) {
      return false;
    }
    return _BaseAPI.jsonRegex.test(mime);
  }
  async request(context, initOverrides) {
    const { url, init } = await this.createFetchParams(context, initOverrides);
    const response = await this.fetchApi(url, init);
    if (response && response.status >= 200 && response.status < 300) {
      return response;
    }
    throw new ResponseError(response, "Response returned an error code");
  }
  async createFetchParams(context, initOverrides) {
    let url = this.configuration.basePath + context.path;
    if (context.query !== void 0 && Object.keys(context.query).length !== 0) {
      url += "?" + this.configuration.queryParamsStringify(context.query);
    }
    const headers = Object.assign(
      {},
      this.configuration.headers,
      context.headers
    );
    Object.keys(headers).forEach(
      (key) => headers[key] === void 0 ? delete headers[key] : {}
    );
    const initOverrideFn = typeof initOverrides === "function" ? initOverrides : async () => initOverrides;
    const initParams = {
      method: context.method,
      headers,
      body: context.body,
      credentials: this.configuration.credentials
    };
    const overriddenInit = {
      ...initParams,
      ...await initOverrideFn({
        init: initParams,
        context
      })
    };
    let body;
    if (isFormData(overriddenInit.body) || overriddenInit.body instanceof URLSearchParams || isBlob(overriddenInit.body)) {
      body = overriddenInit.body;
    } else if (this.isJsonMime(headers["Content-Type"])) {
      body = JSON.stringify(overriddenInit.body);
    } else {
      body = overriddenInit.body;
    }
    const init = {
      ...overriddenInit,
      body
    };
    return { url, init };
  }
  fetchApi = async (url, init) => {
    let fetchParams = { url, init };
    for (const middleware of this.middleware) {
      if (middleware.pre) {
        fetchParams = await middleware.pre({
          fetch: this.fetchApi,
          ...fetchParams
        }) || fetchParams;
      }
    }
    let response = void 0;
    try {
      response = await (this.configuration.fetchApi || fetch)(
        fetchParams.url,
        fetchParams.init
      );
    } catch (e) {
      for (const middleware of this.middleware) {
        if (middleware.onError) {
          response = await middleware.onError({
            fetch: this.fetchApi,
            url: fetchParams.url,
            init: fetchParams.init,
            error: e,
            response: response ? response.clone() : void 0
          }) || response;
        }
      }
      if (response === void 0) {
        if (e instanceof Error) {
          throw new FetchError(
            e,
            "The request failed and the interceptors did not return an alternative response"
          );
        } else {
          throw e;
        }
      }
    }
    for (const middleware of this.middleware) {
      if (middleware.post) {
        response = await middleware.post({
          fetch: this.fetchApi,
          url: fetchParams.url,
          init: fetchParams.init,
          response: response.clone()
        }) || response;
      }
    }
    return response;
  };
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const constructor = this.constructor;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
};
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
var ResponseError = class extends Error {
  constructor(response, msg) {
    super(msg);
    this.response = response;
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    }
  }
  name = "ResponseError";
};
var FetchError = class extends Error {
  constructor(cause, msg) {
    super(msg);
    this.cause = cause;
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    }
  }
  name = "FetchError";
};
function querystring(params, prefix = "") {
  return Object.keys(params).map((key) => querystringSingleKey(key, params[key], prefix)).filter((part) => part.length > 0).join("&");
}
function querystringSingleKey(key, value, keyPrefix = "") {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
  if (value instanceof Array) {
    const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
    return `${encodeURIComponent(fullKey)}=${multiValue}`;
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value);
    return querystringSingleKey(key, valueAsArray, keyPrefix);
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
  }
  if (value instanceof Object) {
    return querystring(value, fullKey);
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

// src/core/openapi-transport.ts
var PrivateOpenApiTransport = class extends BaseAPI {
  send(request) {
    return this.request(request);
  }
};
function createPrivateOpenApiTransport(configuration) {
  return new PrivateOpenApiTransport(new Configuration(configuration));
}
function isOpenApiResponseError(error) {
  return error instanceof ResponseError;
}

// src/core/oauth.ts
var DEFAULT_TOKEN_ENDPOINT = "https://api.revkeen.com/api/auth/oauth2/token";
var PRE_EXPIRY_BUFFER_MS = 6e4;
var OAuthTokenManager = class {
  config;
  cachedToken = null;
  inflightRequest = null;
  constructor(config) {
    this.config = {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      tokenEndpoint: config.tokenEndpoint || DEFAULT_TOKEN_ENDPOINT,
      scopes: config.scopes
    };
  }
  async getToken() {
    if (this.cachedToken && Date.now() < this.cachedToken.expiresAt - PRE_EXPIRY_BUFFER_MS) {
      return this.cachedToken.accessToken;
    }
    if (this.inflightRequest) {
      return this.inflightRequest;
    }
    this.inflightRequest = this.fetchToken();
    try {
      return await this.inflightRequest;
    } finally {
      this.inflightRequest = null;
    }
  }
  async fetchToken() {
    if (this.cachedToken?.refreshToken) {
      try {
        return await this.requestToken("refresh_token");
      } catch {
      }
    }
    return await this.requestToken("client_credentials");
  }
  async requestToken(grantType) {
    const body = new URLSearchParams();
    body.set("grant_type", grantType);
    if (grantType === "client_credentials") {
      body.set("client_id", this.config.clientId);
      body.set("client_secret", this.config.clientSecret);
      if (this.config.scopes?.length) {
        body.set("scope", this.config.scopes.join(" "));
      }
    } else if (grantType === "refresh_token" && this.cachedToken?.refreshToken) {
      body.set("refresh_token", this.cachedToken.refreshToken);
      body.set("client_id", this.config.clientId);
      body.set("client_secret", this.config.clientSecret);
    }
    const res = await fetch(this.config.tokenEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    });
    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      throw new RevKeenError(
        `OAuth token request failed (${res.status}): ${errorBody || res.statusText}`
      );
    }
    const data = await res.json();
    this.cachedToken = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? this.cachedToken?.refreshToken,
      expiresAt: Date.now() + data.expires_in * 1e3
    };
    return data.access_token;
  }
};

// src/core/request-options.ts
var DEFAULT_CONNECT_TIMEOUT_MS = 1e4;
var DEFAULT_READ_TIMEOUT_MS = 3e4;
var MAXIMUM_TOTAL_ATTEMPTS = 3;
var INITIAL_RETRY_DELAY_MS = 250;
var MAXIMUM_RETRY_DELAY_MS = 2e3;
var IDEMPOTENCY_KEY_PATTERN = /^(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|[A-Za-z0-9_-]{8,64})$/;

// src/core/transport.ts
var RETRYABLE_STATUSES = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]);
function positiveTimeout(value, name) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RevKeenError(`${name} must be a positive number of milliseconds`);
  }
  return value;
}
function defaultRequestId() {
  if (!globalThis.crypto?.randomUUID) {
    throw new RevKeenError(
      "A cryptographically secure crypto.randomUUID implementation is required"
    );
  }
  return globalThis.crypto.randomUUID();
}
var UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function resolveRetryOptions(defaults, overrides) {
  const maxAttempts = overrides?.maxAttempts ?? defaults?.maxAttempts ?? MAXIMUM_TOTAL_ATTEMPTS;
  const initialDelay = overrides?.initialDelay ?? defaults?.initialDelay ?? INITIAL_RETRY_DELAY_MS;
  const maxDelay = overrides?.maxDelay ?? defaults?.maxDelay ?? MAXIMUM_RETRY_DELAY_MS;
  if (!Number.isInteger(maxAttempts) || maxAttempts < 1 || maxAttempts > 3) {
    throw new RevKeenError("retry.maxAttempts must be an integer from 1 to 3");
  }
  positiveTimeout(initialDelay, "retry.initialDelay");
  positiveTimeout(maxDelay, "retry.maxDelay");
  if (maxDelay < initialDelay) {
    throw new RevKeenError(
      "retry.maxDelay must be greater than or equal to retry.initialDelay"
    );
  }
  return { maxAttempts, initialDelay, maxDelay };
}
function createAbortError() {
  if (typeof DOMException !== "undefined") {
    return new DOMException("The operation was aborted", "AbortError");
  }
  const error = new Error("The operation was aborted");
  error.name = "AbortError";
  return error;
}
function defaultSleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }
    const timeout = setTimeout(resolve, milliseconds);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        reject(createAbortError());
      },
      { once: true }
    );
  });
}
function responseContext(response, fallback) {
  const requestId = response.headers.get("x-request-id") ?? response.headers.get("x-correlation-id") ?? fallback.requestId;
  const traceId = response.headers.get("x-trace-id") ?? fallback.traceId;
  return {
    ...fallback,
    requestId,
    traceId,
    correlationId: requestId,
    rateLimit: parseRevKeenRateLimitMetadata(response.headers)
  };
}
var RevKeenTransport = class {
  fetchImpl;
  connectTimeout;
  readTimeout;
  requestIdFactory;
  retry;
  random;
  sleep;
  responseContexts = /* @__PURE__ */ new WeakMap();
  constructor(options = {}) {
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.connectTimeout = positiveTimeout(
      options.connectTimeout ?? DEFAULT_CONNECT_TIMEOUT_MS,
      "connectTimeout"
    );
    this.readTimeout = positiveTimeout(
      options.readTimeout ?? DEFAULT_READ_TIMEOUT_MS,
      "readTimeout"
    );
    this.requestIdFactory = options.requestIdFactory ?? defaultRequestId;
    this.retry = options.retry;
    resolveRetryOptions(this.retry, void 0);
    this.random = options.random ?? Math.random;
    this.sleep = options.sleep ?? defaultSleep;
  }
  getErrorContext(response, request) {
    const stored = response ? this.responseContexts.get(response) : void 0;
    if (stored) {
      return stored;
    }
    const requestId = response?.headers.get("x-request-id") ?? response?.headers.get("x-correlation-id") ?? request?.headers.get("x-request-id") ?? null;
    const traceId = response?.headers.get("x-trace-id") ?? request?.headers.get("x-trace-id") ?? null;
    return {
      requestId,
      traceId,
      correlationId: requestId,
      attemptCount: 1,
      rateLimit: parseRevKeenRateLimitMetadata(response?.headers)
    };
  }
  async execute(operation, requestOptions, invoke) {
    const idempotencyKey = requestOptions?.idempotencyKey;
    if (operation.requiresIdempotencyKey && !idempotencyKey) {
      throw new RevKeenError(
        `${operation.operationId} requires requestOptions.idempotencyKey; the SDK never generates one.`
      );
    }
    if (idempotencyKey && !IDEMPOTENCY_KEY_PATTERN.test(idempotencyKey)) {
      throw new RevKeenError(
        "Invalid idempotency key. Use a UUID or 8-64 URL-safe letters, digits, underscores, and hyphens."
      );
    }
    const requestId = requestOptions?.requestId ?? this.requestIdFactory();
    if (!UUID_PATTERN.test(requestId)) {
      throw new RevKeenError(
        "requestId and requestIdFactory values must be UUIDs"
      );
    }
    const context = {
      requestId,
      traceId: requestId,
      correlationId: requestId,
      attemptCount: 1
    };
    const headers = {
      "x-request-id": requestId,
      "x-trace-id": requestId
    };
    if (idempotencyKey) {
      headers["Idempotency-Key"] = idempotencyKey;
    }
    return invoke({
      fetch: (input, init) => this.fetchWithRetry(input, init, operation, requestOptions, context),
      headers,
      signal: requestOptions?.signal
    });
  }
  isRetryEligible(operation, requestOptions) {
    if (operation.method === "GET") {
      return true;
    }
    return operation.method === "POST" && operation.idempotent === true && Boolean(requestOptions?.idempotencyKey);
  }
  async fetchWithRetry(input, init, operation, requestOptions, context) {
    const original = new Request(input, init);
    const userSignal = requestOptions?.signal ?? original.signal;
    const eligible = this.isRetryEligible(operation, requestOptions);
    const retry = resolveRetryOptions(this.retry, requestOptions?.retry);
    const maximumAttempts = eligible ? retry.maxAttempts : 1;
    const connectTimeout = positiveTimeout(
      requestOptions?.connectTimeout ?? this.connectTimeout,
      "connectTimeout"
    );
    const readTimeout = positiveTimeout(
      requestOptions?.readTimeout ?? this.readTimeout,
      "readTimeout"
    );
    for (let attempt = 1; attempt <= maximumAttempts; attempt += 1) {
      context.attemptCount = attempt;
      if (userSignal?.aborted) {
        throw new RevKeenError("Request cancelled", context);
      }
      try {
        const response = await this.withTimeout(
          "connect",
          connectTimeout,
          userSignal,
          context,
          (signal) => this.fetchImpl(
            new Request(original.clone(), {
              signal
            })
          )
        );
        const currentContext = responseContext(response, context);
        Object.assign(context, currentContext);
        if (attempt < maximumAttempts && RETRYABLE_STATUSES.has(response.status)) {
          await response.body?.cancel();
          await this.waitBeforeRetry(attempt, retry, response, userSignal);
          continue;
        }
        try {
          const buffered = await this.bufferResponse(
            response,
            original.method,
            readTimeout,
            userSignal,
            context
          );
          this.responseContexts.set(buffered, { ...context });
          return buffered;
        } catch (error) {
          if (error instanceof RevKeenTimeoutError && attempt < maximumAttempts) {
            await this.waitBeforeRetry(attempt, retry, void 0, userSignal);
            continue;
          }
          throw error;
        }
      } catch (error) {
        if (error instanceof RevKeenTimeoutError) {
          if (attempt < maximumAttempts) {
            await this.waitBeforeRetry(attempt, retry, void 0, userSignal);
            continue;
          }
          throw error;
        }
        if (userSignal?.aborted || error instanceof Error && error.name === "AbortError") {
          throw new RevKeenError("Request cancelled", context);
        }
        if (attempt < maximumAttempts) {
          await this.waitBeforeRetry(attempt, retry, void 0, userSignal);
          continue;
        }
        const message = error instanceof Error ? error.message : "Unknown network failure";
        throw new RevKeenError(`Network error: ${message}`, context);
      }
    }
    throw new RevKeenError("Request failed without a final response", context);
  }
  async bufferResponse(response, method, timeout, userSignal, context) {
    if (method === "HEAD" || response.status === 204 || response.body === null) {
      return response;
    }
    const body = await this.withTimeout(
      "read",
      timeout,
      userSignal,
      context,
      () => response.arrayBuffer()
    );
    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }
  async withTimeout(phase, milliseconds, userSignal, context, operation) {
    const timeoutController = new AbortController();
    const signals = userSignal ? [userSignal, timeoutController.signal] : [timeoutController.signal];
    const signal = AbortSignal.any(signals);
    let timeoutId;
    try {
      return await Promise.race([
        operation(signal),
        new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            timeoutController.abort();
            reject(
              new RevKeenTimeoutError(
                `Request ${phase} timed out after ${milliseconds}ms`,
                phase,
                context
              )
            );
          }, milliseconds);
        })
      ]);
    } finally {
      if (timeoutId !== void 0) {
        clearTimeout(timeoutId);
      }
    }
  }
  waitBeforeRetry(attempt, retry, response, signal) {
    const ceiling = Math.min(
      retry.maxDelay,
      retry.initialDelay * 2 ** (attempt - 1)
    );
    const jitter = Math.floor(this.random() * ceiling);
    const retryAfter = this.parseRetryAfter(
      response?.headers.get("retry-after"),
      retry.maxDelay
    );
    return this.sleep(
      Math.min(retry.maxDelay, Math.max(jitter, retryAfter)),
      signal
    );
  }
  parseRetryAfter(value, maximum) {
    if (!value) return 0;
    const seconds = Number(value);
    if (Number.isFinite(seconds) && seconds >= 0) {
      return Math.min(maximum, Math.round(seconds * 1e3));
    }
    const date = Date.parse(value);
    if (!Number.isFinite(date)) return 0;
    return Math.min(maximum, Math.max(0, date - Date.now()));
  }
};

// src/client.ts
var RESERVED_HEADERS = /* @__PURE__ */ new Set([
  "authorization",
  "idempotency-key",
  "x-api-key",
  "x-correlation-id",
  "x-request-id",
  "x-trace-id"
]);
function validateHeaders(headers) {
  for (const name of Object.keys(headers ?? {})) {
    if (RESERVED_HEADERS.has(name.toLowerCase())) {
      throw new RevKeenError(
        `Header '${name}' is managed by the RevKeen SDK and cannot be configured directly.`
      );
    }
  }
}
function interpolatePath(template, path) {
  const values = path && typeof path === "object" ? path : {};
  return template.replace(/\{([^}]+)\}/g, (_match, name) => {
    const value = values[name];
    if (value === void 0 || value === null)
      throw new RevKeenError(`Missing required path parameter '${name}'`);
    return encodeURIComponent(String(value));
  });
}
async function parseResponseBody(response) {
  if (response.status === 204 || response.headers.get("content-length") === "0")
    return {};
  const text = await response.text();
  if (!text) return {};
  if (response.headers.get("content-type")?.includes("json")) {
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }
  return text;
}
var RevKeenClient = class _RevKeenClient {
  transport;
  baseUrl;
  staticHeaders;
  key;
  tokenManager = null;
  usage;
  constructor(options) {
    const key = "secretKey" in options ? options.secretKey : "apiKey" in options ? options.apiKey : void 0;
    this.initialize({
      ...options,
      baseUrl: resolveRevKeenEnvironment(options.environment),
      key,
      oauth: options.oauth
    });
  }
  static forCustomBaseUrl(baseUrl, options) {
    const client2 = Object.create(_RevKeenClient.prototype);
    const key = "secretKey" in options ? options.secretKey : "apiKey" in options ? options.apiKey : void 0;
    client2.initialize({
      ...options,
      baseUrl: validateCustomBaseUrl(baseUrl),
      key,
      oauth: options.oauth
    });
    return client2;
  }
  initialize(options) {
    if (!options.key && !options.oauth) {
      throw new RevKeenError(
        "RevKeenClient requires either 'secretKey' or 'oauth' configuration. See https://docs.revkeen.com/api/authentication"
      );
    }
    if (options.key && options.oauth)
      throw new RevKeenError("Provide either a key or 'oauth', not both.");
    if (options.key) {
      if (options.allowPublishableKey) assertPublishableKey(options.key);
      else assertSecretKey(options.key);
    }
    validateHeaders(options.headers);
    const legacyTimeout = options.timeout;
    this.transport = new RevKeenTransport({
      fetch: options.fetch,
      connectTimeout: options.connectTimeout ?? legacyTimeout,
      readTimeout: options.readTimeout ?? legacyTimeout,
      retry: options.retry,
      requestIdFactory: options.requestIdFactory
    });
    this.baseUrl = options.baseUrl;
    this.staticHeaders = { ...options.headers ?? {} };
    this.key = options.key;
    this.tokenManager = options.oauth ? new OAuthTokenManager(options.oauth) : null;
    Object.assign(this, buildGeneratedResources(this));
    Object.defineProperty(this, "usage", {
      enumerable: true,
      value: {
        ingest: (body, requestOptions) => this.requestData({ body }, requestOptions, {
          method: "POST",
          operationId: "usage_events_ingest",
          path: "/usage-events",
          idempotent: false,
          requiresIdempotencyKey: false
        }),
        dryRun: (body, requestOptions) => this.requestData({ body }, requestOptions, {
          method: "POST",
          operationId: "usage_events_dry_run",
          path: "/usage-events/dry-run",
          idempotent: false,
          requiresIdempotencyKey: false
        })
      }
    });
  }
  async requestData(options, requestOptions, operation) {
    return this.transport.execute(
      operation,
      requestOptions,
      async (transportRequest) => {
        const response = await this.sendOpenApiRequest(
          operation,
          options,
          transportRequest
        );
        return await parseResponseBody(response);
      }
    );
  }
  async sendOpenApiRequest(operation, options, transportRequest) {
    const requestId = transportRequest.headers["x-request-id"];
    const context = {
      requestId,
      traceId: transportRequest.headers["x-trace-id"],
      correlationId: requestId,
      attemptCount: 1
    };
    const headers = {
      ...this.staticHeaders,
      ...transportRequest.headers
    };
    if (this.key) headers["x-api-key"] = this.key;
    if (this.tokenManager) {
      try {
        headers.authorization = `Bearer ${await this.tokenManager.getToken()}`;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown OAuth token failure";
        throw new RevKeenError(
          `OAuth token acquisition failed: ${message}`,
          context
        );
      }
    }
    if (options?.body !== void 0)
      headers["Content-Type"] = "application/json";
    const api = createPrivateOpenApiTransport({
      basePath: this.baseUrl,
      fetchApi: transportRequest.fetch
    });
    try {
      return await api.send({
        path: interpolatePath(operation.path, options?.path),
        method: operation.method,
        headers,
        query: options?.query,
        body: options?.body
      });
    } catch (error) {
      if (!isOpenApiResponseError(error)) throw error;
      const body = await parseResponseBody(error.response);
      const errorContext = this.transport.getErrorContext(error.response);
      throw createRevKeenAPIError(
        error.response.status,
        body,
        error.response.statusText,
        errorContext
      );
    }
  }
};

// src/core/pagination.ts
var RevKeenPaginationStallError = class extends RevKeenError {
  constructor(stateKey) {
    super(`Pagination did not advance beyond state '${stateKey}'`);
    this.stateKey = stateKey;
    this.name = "RevKeenPaginationStallError";
  }
};
function throwIfAborted(signal) {
  if (!signal?.aborted) return;
  if (signal.reason !== void 0) throw signal.reason;
  if (typeof DOMException !== "undefined")
    throw new DOMException("The operation was aborted", "AbortError");
  const error = new Error("The operation was aborted");
  error.name = "AbortError";
  throw error;
}
function paginate(fetchPage, options) {
  return {
    async *[Symbol.asyncIterator]() {
      let state = options.initialState;
      const seen = /* @__PURE__ */ new Set();
      while (true) {
        throwIfAborted(options.signal);
        const currentKey = options.stateKey(state);
        if (seen.has(currentKey))
          throw new RevKeenPaginationStallError(currentKey);
        seen.add(currentKey);
        const page = await fetchPage(state, options.signal);
        const items = options.getItems(page);
        for (const item of items) {
          throwIfAborted(options.signal);
          yield item;
        }
        if (items.length === 0) return;
        const nextState = options.getNextState(page);
        if (nextState === null || nextState === void 0) return;
        const nextKey = options.stateKey(nextState);
        if (seen.has(nextKey)) throw new RevKeenPaginationStallError(nextKey);
        state = nextState;
      }
    }
  };
}

// src/core/scalars.ts
function isMinorUnits(value) {
  return Number.isSafeInteger(value);
}
function minorUnits(value) {
  if (!isMinorUnits(value))
    throw new RevKeenError("Minor-unit money must be a safe integer");
  return value;
}
function mapOptionalNullable(value, transform) {
  if (value === void 0) return void 0;
  if (value === null) return null;
  return transform(value);
}
var RFC3339_WITH_OFFSET = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInMonth(year, month) {
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}
function parseRfc3339(value) {
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match)
    throw new RevKeenError(
      "Date-time must be RFC 3339 with an explicit offset"
    );
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  const offsetHour = match[8] === void 0 ? 0 : Number(match[8]);
  const offsetMinute = match[9] === void 0 ? 0 : Number(match[9]);
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month) || hour > 23 || minute > 59 || second > 59 || offsetHour > 23 || offsetMinute > 59) {
    throw new RevKeenError("Date-time must be a valid RFC 3339 timestamp");
  }
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp))
    throw new RevKeenError("Date-time must be a valid RFC 3339 timestamp");
  return new Date(timestamp);
}

// src/generated/core/bodySerializer.gen.ts
var jsonBodySerializer = {
  bodySerializer: (body) => JSON.stringify(
    body,
    (_key, value) => typeof value === "bigint" ? value.toString() : value
  )
};

// src/generated/core/params.gen.ts
var extraPrefixesMap = {
  $body_: "body",
  $headers_: "headers",
  $path_: "path",
  $query_: "query"
};
var extraPrefixes = Object.entries(extraPrefixesMap);

// src/generated/core/serverSentEvents.gen.ts
function createSseClient({
  onRequest,
  onSseError,
  onSseEvent,
  responseTransformer,
  responseValidator,
  sseDefaultRetryDelay,
  sseMaxRetryAttempts,
  sseMaxRetryDelay,
  sseSleepFn,
  url,
  ...options
}) {
  let lastEventId;
  const sleep = sseSleepFn ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const createStream = async function* () {
    let retryDelay = sseDefaultRetryDelay ?? 3e3;
    let attempt = 0;
    const signal = options.signal ?? new AbortController().signal;
    while (true) {
      if (signal.aborted) break;
      attempt++;
      const headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      if (lastEventId !== void 0) {
        headers.set("Last-Event-ID", lastEventId);
      }
      try {
        const requestInit = {
          redirect: "follow",
          ...options,
          body: options.serializedBody,
          headers,
          signal
        };
        let request = new Request(url, requestInit);
        if (onRequest) {
          request = await onRequest(url, requestInit);
        }
        const _fetch = options.fetch ?? globalThis.fetch;
        const response = await _fetch(request);
        if (!response.ok)
          throw new Error(
            `SSE failed: ${response.status} ${response.statusText}`
          );
        if (!response.body) throw new Error("No body in SSE response");
        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        let buffer = "";
        const abortHandler = () => {
          try {
            reader.cancel();
          } catch {
          }
        };
        signal.addEventListener("abort", abortHandler);
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            buffer = buffer.replace(/\r\n?/g, "\n");
            const chunks = buffer.split("\n\n");
            buffer = chunks.pop() ?? "";
            for (const chunk of chunks) {
              const lines = chunk.split("\n");
              const dataLines = [];
              let eventName;
              for (const line of lines) {
                if (line.startsWith("data:")) {
                  dataLines.push(line.replace(/^data:\s*/, ""));
                } else if (line.startsWith("event:")) {
                  eventName = line.replace(/^event:\s*/, "");
                } else if (line.startsWith("id:")) {
                  lastEventId = line.replace(/^id:\s*/, "");
                } else if (line.startsWith("retry:")) {
                  const parsed = Number.parseInt(
                    line.replace(/^retry:\s*/, ""),
                    10
                  );
                  if (!Number.isNaN(parsed)) {
                    retryDelay = parsed;
                  }
                }
              }
              let data;
              let parsedJson = false;
              if (dataLines.length) {
                const rawData = dataLines.join("\n");
                try {
                  data = JSON.parse(rawData);
                  parsedJson = true;
                } catch {
                  data = rawData;
                }
              }
              if (parsedJson) {
                if (responseValidator) {
                  await responseValidator(data);
                }
                if (responseTransformer) {
                  data = await responseTransformer(data);
                }
              }
              onSseEvent?.({
                data,
                event: eventName,
                id: lastEventId,
                retry: retryDelay
              });
              if (dataLines.length) {
                yield data;
              }
            }
          }
        } finally {
          signal.removeEventListener("abort", abortHandler);
          reader.releaseLock();
        }
        break;
      } catch (error) {
        onSseError?.(error);
        if (sseMaxRetryAttempts !== void 0 && attempt >= sseMaxRetryAttempts) {
          break;
        }
        const backoff = Math.min(
          retryDelay * 2 ** (attempt - 1),
          sseMaxRetryDelay ?? 3e4
        );
        await sleep(backoff);
      }
    }
  };
  const stream = createStream();
  return { stream };
}

// src/generated/core/pathSerializer.gen.ts
var separatorArrayExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
var separatorArrayNoExplode = (style) => {
  switch (style) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
};
var separatorObjectExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
var serializeArrayParam = ({
  allowReserved,
  explode,
  name,
  style,
  value
}) => {
  if (!explode) {
    const joinedValues2 = (allowReserved ? value : value.map((v) => encodeURIComponent(v))).join(separatorArrayNoExplode(style));
    switch (style) {
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      case "simple":
        return joinedValues2;
      default:
        return `${name}=${joinedValues2}`;
    }
  }
  const separator = separatorArrayExplode(style);
  const joinedValues = value.map((v) => {
    if (style === "label" || style === "simple") {
      return allowReserved ? v : encodeURIComponent(v);
    }
    return serializePrimitiveParam({
      allowReserved,
      name,
      value: v
    });
  }).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
var serializePrimitiveParam = ({
  allowReserved,
  name,
  value
}) => {
  if (value === void 0 || value === null) {
    return "";
  }
  if (typeof value === "object") {
    throw new Error(
      "Deeply-nested arrays/objects aren\u2019t supported. Provide your own `querySerializer()` to handle these."
    );
  }
  return `${name}=${allowReserved ? value : encodeURIComponent(value)}`;
};
var serializeObjectParam = ({
  allowReserved,
  explode,
  name,
  style,
  value,
  valueOnly
}) => {
  if (value instanceof Date) {
    return valueOnly ? value.toISOString() : `${name}=${value.toISOString()}`;
  }
  if (style !== "deepObject" && !explode) {
    let values = [];
    Object.entries(value).forEach(([key, v]) => {
      values = [
        ...values,
        key,
        allowReserved ? v : encodeURIComponent(v)
      ];
    });
    const joinedValues2 = values.join(",");
    switch (style) {
      case "form":
        return `${name}=${joinedValues2}`;
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      default:
        return joinedValues2;
    }
  }
  const separator = separatorObjectExplode(style);
  const joinedValues = Object.entries(value).map(
    ([key, v]) => serializePrimitiveParam({
      allowReserved,
      name: style === "deepObject" ? `${name}[${key}]` : key,
      value: v
    })
  ).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};

// src/generated/core/utils.gen.ts
var PATH_PARAM_RE = /\{[^{}]+\}/g;
var defaultPathSerializer = ({ path, url: _url }) => {
  let url = _url;
  const matches = _url.match(PATH_PARAM_RE);
  if (matches) {
    for (const match of matches) {
      let explode = false;
      let name = match.substring(1, match.length - 1);
      let style = "simple";
      if (name.endsWith("*")) {
        explode = true;
        name = name.substring(0, name.length - 1);
      }
      if (name.startsWith(".")) {
        name = name.substring(1);
        style = "label";
      } else if (name.startsWith(";")) {
        name = name.substring(1);
        style = "matrix";
      }
      const value = path[name];
      if (value === void 0 || value === null) {
        continue;
      }
      if (Array.isArray(value)) {
        url = url.replace(
          match,
          serializeArrayParam({ explode, name, style, value })
        );
        continue;
      }
      if (typeof value === "object") {
        url = url.replace(
          match,
          serializeObjectParam({
            explode,
            name,
            style,
            value,
            valueOnly: true
          })
        );
        continue;
      }
      if (style === "matrix") {
        url = url.replace(
          match,
          `;${serializePrimitiveParam({
            name,
            value
          })}`
        );
        continue;
      }
      const replaceValue = encodeURIComponent(
        style === "label" ? `.${value}` : value
      );
      url = url.replace(match, replaceValue);
    }
  }
  return url;
};
var getUrl = ({
  baseUrl,
  path,
  query,
  querySerializer,
  url: _url
}) => {
  const pathUrl = _url.startsWith("/") ? _url : `/${_url}`;
  let url = (baseUrl ?? "") + pathUrl;
  if (path) {
    url = defaultPathSerializer({ path, url });
  }
  let search = query ? querySerializer(query) : "";
  if (search.startsWith("?")) {
    search = search.substring(1);
  }
  if (search) {
    url += `?${search}`;
  }
  return url;
};
function getValidRequestBody(options) {
  const hasBody = options.body !== void 0;
  const isSerializedBody = hasBody && options.bodySerializer;
  if (isSerializedBody) {
    if ("serializedBody" in options) {
      const hasSerializedBody = options.serializedBody !== void 0 && options.serializedBody !== "";
      return hasSerializedBody ? options.serializedBody : null;
    }
    return options.body !== "" ? options.body : null;
  }
  if (hasBody) {
    return options.body;
  }
  return void 0;
}

// src/generated/core/auth.gen.ts
var getAuthToken = async (auth, callback) => {
  const token = typeof callback === "function" ? await callback(auth) : callback;
  if (!token) {
    return;
  }
  if (auth.scheme === "bearer") {
    return `Bearer ${token}`;
  }
  if (auth.scheme === "basic") {
    return `Basic ${btoa(token)}`;
  }
  return token;
};

// src/generated/client/utils.gen.ts
var createQuerySerializer = ({
  parameters = {},
  ...args
} = {}) => {
  const querySerializer = (queryParams) => {
    const search = [];
    if (queryParams && typeof queryParams === "object") {
      for (const name in queryParams) {
        const value = queryParams[name];
        if (value === void 0 || value === null) {
          continue;
        }
        const options = parameters[name] || args;
        if (Array.isArray(value)) {
          const serializedArray = serializeArrayParam({
            allowReserved: options.allowReserved,
            explode: true,
            name,
            style: "form",
            value,
            ...options.array
          });
          if (serializedArray) search.push(serializedArray);
        } else if (typeof value === "object") {
          const serializedObject = serializeObjectParam({
            allowReserved: options.allowReserved,
            explode: true,
            name,
            style: "deepObject",
            value,
            ...options.object
          });
          if (serializedObject) search.push(serializedObject);
        } else {
          const serializedPrimitive = serializePrimitiveParam({
            allowReserved: options.allowReserved,
            name,
            value
          });
          if (serializedPrimitive) search.push(serializedPrimitive);
        }
      }
    }
    return search.join("&");
  };
  return querySerializer;
};
var getParseAs = (contentType) => {
  if (!contentType) {
    return "stream";
  }
  const cleanContent = contentType.split(";")[0]?.trim();
  if (!cleanContent) {
    return;
  }
  if (cleanContent.startsWith("application/json") || cleanContent.endsWith("+json")) {
    return "json";
  }
  if (cleanContent === "multipart/form-data") {
    return "formData";
  }
  if (["application/", "audio/", "image/", "video/"].some(
    (type) => cleanContent.startsWith(type)
  )) {
    return "blob";
  }
  if (cleanContent.startsWith("text/")) {
    return "text";
  }
  return;
};
var checkForExistence = (options, name) => {
  if (!name) {
    return false;
  }
  if (options.headers.has(name) || options.query?.[name] || options.headers.get("Cookie")?.includes(`${name}=`)) {
    return true;
  }
  return false;
};
var setAuthParams = async ({
  security,
  ...options
}) => {
  for (const auth of security) {
    if (checkForExistence(options, auth.name)) {
      continue;
    }
    const token = await getAuthToken(auth, options.auth);
    if (!token) {
      continue;
    }
    const name = auth.name ?? "Authorization";
    switch (auth.in) {
      case "query":
        if (!options.query) {
          options.query = {};
        }
        options.query[name] = token;
        break;
      case "cookie":
        options.headers.append("Cookie", `${name}=${token}`);
        break;
      case "header":
      default:
        options.headers.set(name, token);
        break;
    }
  }
};
var buildUrl = (options) => getUrl({
  baseUrl: options.baseUrl,
  path: options.path,
  query: options.query,
  querySerializer: typeof options.querySerializer === "function" ? options.querySerializer : createQuerySerializer(options.querySerializer),
  url: options.url
});
var mergeConfigs = (a, b) => {
  const config = { ...a, ...b };
  if (config.baseUrl?.endsWith("/")) {
    config.baseUrl = config.baseUrl.substring(0, config.baseUrl.length - 1);
  }
  config.headers = mergeHeaders(a.headers, b.headers);
  return config;
};
var headersEntries = (headers) => {
  const entries = [];
  headers.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
};
var mergeHeaders = (...headers) => {
  const mergedHeaders = new Headers();
  for (const header of headers) {
    if (!header) {
      continue;
    }
    const iterator = header instanceof Headers ? headersEntries(header) : Object.entries(header);
    for (const [key, value] of iterator) {
      if (value === null) {
        mergedHeaders.delete(key);
      } else if (Array.isArray(value)) {
        for (const v of value) {
          mergedHeaders.append(key, v);
        }
      } else if (value !== void 0) {
        mergedHeaders.set(
          key,
          typeof value === "object" ? JSON.stringify(value) : value
        );
      }
    }
  }
  return mergedHeaders;
};
var Interceptors = class {
  fns = [];
  clear() {
    this.fns = [];
  }
  eject(id) {
    const index = this.getInterceptorIndex(id);
    if (this.fns[index]) {
      this.fns[index] = null;
    }
  }
  exists(id) {
    const index = this.getInterceptorIndex(id);
    return Boolean(this.fns[index]);
  }
  getInterceptorIndex(id) {
    if (typeof id === "number") {
      return this.fns[id] ? id : -1;
    }
    return this.fns.indexOf(id);
  }
  update(id, fn) {
    const index = this.getInterceptorIndex(id);
    if (this.fns[index]) {
      this.fns[index] = fn;
      return id;
    }
    return false;
  }
  use(fn) {
    this.fns.push(fn);
    return this.fns.length - 1;
  }
};
var createInterceptors = () => ({
  error: new Interceptors(),
  request: new Interceptors(),
  response: new Interceptors()
});
var defaultQuerySerializer = createQuerySerializer({
  allowReserved: false,
  array: {
    explode: true,
    style: "form"
  },
  object: {
    explode: true,
    style: "deepObject"
  }
});
var defaultHeaders = {
  "Content-Type": "application/json"
};
var createConfig = (override = {}) => ({
  ...jsonBodySerializer,
  headers: defaultHeaders,
  parseAs: "auto",
  querySerializer: defaultQuerySerializer,
  ...override
});

// src/generated/client/client.gen.ts
var createClient = (config = {}) => {
  let _config = mergeConfigs(createConfig(), config);
  const getConfig = () => ({ ..._config });
  const setConfig = (config2) => {
    _config = mergeConfigs(_config, config2);
    return getConfig();
  };
  const interceptors = createInterceptors();
  const beforeRequest = async (options) => {
    const opts = {
      ..._config,
      ...options,
      fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
      headers: mergeHeaders(_config.headers, options.headers),
      serializedBody: void 0
    };
    if (opts.security) {
      await setAuthParams({
        ...opts,
        security: opts.security
      });
    }
    if (opts.requestValidator) {
      await opts.requestValidator(opts);
    }
    if (opts.body !== void 0 && opts.bodySerializer) {
      opts.serializedBody = opts.bodySerializer(opts.body);
    }
    if (opts.body === void 0 || opts.serializedBody === "") {
      opts.headers.delete("Content-Type");
    }
    const resolvedOpts = opts;
    const url = buildUrl(resolvedOpts);
    return { opts: resolvedOpts, url };
  };
  const request = async (options) => {
    const { opts, url } = await beforeRequest(options);
    const requestInit = {
      redirect: "follow",
      ...opts,
      body: getValidRequestBody(opts)
    };
    let request2 = new Request(url, requestInit);
    for (const fn of interceptors.request.fns) {
      if (fn) {
        request2 = await fn(request2, opts);
      }
    }
    const _fetch = opts.fetch;
    let response;
    try {
      response = await _fetch(request2);
    } catch (error2) {
      let finalError2 = error2;
      for (const fn of interceptors.error.fns) {
        if (fn) {
          finalError2 = await fn(
            error2,
            void 0,
            request2,
            opts
          );
        }
      }
      finalError2 = finalError2 || {};
      if (opts.throwOnError) {
        throw finalError2;
      }
      return opts.responseStyle === "data" ? void 0 : {
        error: finalError2,
        request: request2,
        response: void 0
      };
    }
    for (const fn of interceptors.response.fns) {
      if (fn) {
        response = await fn(response, request2, opts);
      }
    }
    const result = {
      request: request2,
      response
    };
    if (response.ok) {
      const parseAs = (opts.parseAs === "auto" ? getParseAs(response.headers.get("Content-Type")) : opts.parseAs) ?? "json";
      if (response.status === 204 || response.headers.get("Content-Length") === "0") {
        let emptyData;
        switch (parseAs) {
          case "arrayBuffer":
          case "blob":
          case "text":
            emptyData = await response[parseAs]();
            break;
          case "formData":
            emptyData = new FormData();
            break;
          case "stream":
            emptyData = response.body;
            break;
          case "json":
          default:
            emptyData = {};
            break;
        }
        return opts.responseStyle === "data" ? emptyData : {
          data: emptyData,
          ...result
        };
      }
      let data;
      switch (parseAs) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "text":
          data = await response[parseAs]();
          break;
        case "json": {
          const text = await response.text();
          data = text ? JSON.parse(text) : {};
          break;
        }
        case "stream":
          return opts.responseStyle === "data" ? response.body : {
            data: response.body,
            ...result
          };
      }
      if (parseAs === "json") {
        if (opts.responseValidator) {
          await opts.responseValidator(data);
        }
        if (opts.responseTransformer) {
          data = await opts.responseTransformer(data);
        }
      }
      return opts.responseStyle === "data" ? data : {
        data,
        ...result
      };
    }
    const textError = await response.text();
    let jsonError;
    try {
      jsonError = JSON.parse(textError);
    } catch {
    }
    const error = jsonError ?? textError;
    let finalError = error;
    for (const fn of interceptors.error.fns) {
      if (fn) {
        finalError = await fn(error, response, request2, opts);
      }
    }
    finalError = finalError || {};
    if (opts.throwOnError) {
      throw finalError;
    }
    return opts.responseStyle === "data" ? void 0 : {
      error: finalError,
      ...result
    };
  };
  const makeMethodFn = (method) => (options) => request({ ...options, method });
  const makeSseFn = (method) => async (options) => {
    const { opts, url } = await beforeRequest(options);
    return createSseClient({
      ...opts,
      body: opts.body,
      headers: opts.headers,
      method,
      onRequest: async (url2, init) => {
        let request2 = new Request(url2, init);
        for (const fn of interceptors.request.fns) {
          if (fn) {
            request2 = await fn(request2, opts);
          }
        }
        return request2;
      },
      serializedBody: getValidRequestBody(opts),
      url
    });
  };
  const _buildUrl = (options) => buildUrl({ ..._config, ...options });
  return {
    buildUrl: _buildUrl,
    connect: makeMethodFn("CONNECT"),
    delete: makeMethodFn("DELETE"),
    get: makeMethodFn("GET"),
    getConfig,
    head: makeMethodFn("HEAD"),
    interceptors,
    options: makeMethodFn("OPTIONS"),
    patch: makeMethodFn("PATCH"),
    post: makeMethodFn("POST"),
    put: makeMethodFn("PUT"),
    request,
    setConfig,
    sse: {
      connect: makeSseFn("CONNECT"),
      delete: makeSseFn("DELETE"),
      get: makeSseFn("GET"),
      head: makeSseFn("HEAD"),
      options: makeSseFn("OPTIONS"),
      patch: makeSseFn("PATCH"),
      post: makeSseFn("POST"),
      put: makeSseFn("PUT"),
      trace: makeSseFn("TRACE")
    },
    trace: makeMethodFn("TRACE")
  };
};

// src/generated/client.gen.ts
var client = createClient(
  createConfig({ baseUrl: "https://api.revkeen.com/v2" })
);

// src/generated/sdk.gen.ts
var invoiceUsageExplain = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}/usage-explain",
  ...options
});
var invoicesList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices",
  ...options
});
var invoicesCreate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}",
  ...options
});
var invoicesUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesMarginEstimate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}/margin-estimate",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesFinalize = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}/finalize",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesVoid = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}/void",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesSend = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/invoices/{id}/send",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var productsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/products",
  ...options
});
var productsCreate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/products",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var productsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/products/{id}",
  ...options
});
var productsUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/products/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var productCollectionsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/product-collections",
  ...options
});
var productCollectionsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/product-collections",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var productCollectionsDelete = (options) => (options.client ?? client).delete({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/product-collections/{id}",
  ...options
});
var productCollectionsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/product-collections/{id}",
  ...options
});
var productCollectionsUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/product-collections/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var checkoutSessionsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/checkout-sessions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var checkoutSessionsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/checkout-sessions/{id}",
  ...options
});
var checkoutSessionsExpire = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/checkout-sessions/{id}/expire",
  ...options
});
var cartSessionsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var cartSessionsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}",
  ...options
});
var cartSessionsAddLineItem = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/line-items",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var cartSessionsRemoveLineItem = (options) => (options.client ?? client).delete({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/line-items/{lineId}",
  ...options
});
var cartSessionsUpdateLineItem = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/line-items/{lineId}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var cartSessionsToggleAddOn = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/add-ons",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var cartSessionsApplyDiscountCode = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/discount-code",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var cartSessionsSetContact = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/contact",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var cartSessionsConvert = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-sessions/{id}/convert",
  ...options
});
var cartApiKeysStatus = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-api-keys/status",
  ...options
});
var cartApiKeysEnsure = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-api-keys/ensure",
  ...options
});
var cartApiKeysRotate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/cart-api-keys/{kind}/rotate",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var storefrontProductsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/storefront/products",
  ...options
});
var storefrontProductsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/storefront/products/{productId}",
  ...options
});
var storefrontOriginsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/storefront/origins",
  ...options
});
var storefrontOriginsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/storefront/origins",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var storefrontOriginsDelete = (options) => (options.client ?? client).delete({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/storefront/origins/{originId}",
  ...options
});
var storefrontStatusGet = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/storefront/status",
  ...options
});
var customerStateGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers/{id}/state",
  ...options
});
var customersList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers",
  ...options
});
var customersCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var customersGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers/{id}",
  ...options
});
var customersUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customersPaymentRailsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers/{id}/payment-rails",
  ...options
});
var customersPreferredRailsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers/{id}/preferred-rails",
  ...options
});
var customersPaymentMethodsList = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customers/{id}/payment-methods",
  ...options
});
var subscriptionsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/subscriptions",
  ...options
});
var subscriptionsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/subscriptions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var subscriptionsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/subscriptions/{id}",
  ...options
});
var subscriptionsUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/subscriptions/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var subscriptionsCancel = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/subscriptions/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var analyticsRevenueMrrSummary = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/analytics/revenue/mrr-summary",
  ...options
});
var analyticsRevenueTimeSeries = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/analytics/revenue/time-series",
  ...options
});
var refundsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/refunds",
  ...options
});
var refundsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/refunds",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var refundsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/refunds/{id}",
  ...options
});
var creditNotesList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/credit_notes",
  ...options
});
var creditNotesCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/credit_notes",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var creditNotesGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/credit_notes/{id}",
  ...options
});
var creditNotesVoid = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/credit_notes/{id}/void",
  ...options
});
var creditNotesListLines = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/credit_notes/{id}/lines",
  ...options
});
var creditNotesPreview = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/credit_notes/preview",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentLinksList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links",
  ...options
});
var paymentLinksCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var paymentLinksGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links/{id}",
  ...options
});
var paymentLinksExpire = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links/{id}/expire",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentLinksUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links/{id}/status",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentLinksDeactivate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links/{id}/deactivate",
  ...options
});
var paymentLinksActivate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links/{id}/activate",
  ...options
});
var paymentLinksArchive = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-links/{id}/archive",
  ...options
});
var billingOverviewGet = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/billing/overview",
  ...options
});
var pricesList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/prices",
  ...options
});
var pricesCreate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/prices",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var pricesArchive = (options) => (options.client ?? client).delete({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/prices/{id}",
  ...options
});
var pricesGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/prices/{id}",
  ...options
});
var pricesUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/prices/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var metersList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/meters",
  ...options
});
var metersCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/meters",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var metersQuantities = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/meters/{id}/quantities",
  ...options
});
var metersGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/meters/{id}",
  ...options
});
var metersUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/meters/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoiceLineItemsListUsageEvents = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/invoice-line-items/{id}/usage-events",
  ...options
});
var accountingInvoicePaymentRequestsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/integrations/accounting/invoice-payment-requests",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var accountingInvoicePaymentRequestsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/integrations/accounting/invoice-payment-requests/{id}",
  ...options
});
var webhookEndpointsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-endpoints",
  ...options
});
var webhookEndpointsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-endpoints",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var webhookEndpointsDelete = (options) => (options.client ?? client).delete({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-endpoints/{id}",
  ...options
});
var webhookEndpointsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-endpoints/{id}",
  ...options
});
var webhookEndpointsUpdate = (options) => (options.client ?? client).patch({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-endpoints/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var webhookEndpointsRotateSecret = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-endpoints/{id}/rotate-secret",
  ...options
});
var webhookDeliveriesList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-deliveries",
  ...options
});
var webhookDeliveriesGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-deliveries/{id}",
  ...options
});
var webhookDeliveriesRetry = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/webhook-deliveries/{id}/retry",
  ...options
});
var customerPortalSessionsCreate = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/sessions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerPortalCustomerGet = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/customer",
  ...options
});
var customerPortalSubscriptionsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/subscriptions",
  ...options
});
var customerPortalSubscriptionsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/subscriptions/{id}",
  ...options
});
var customerPortalSubscriptionsCancel = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/subscriptions/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerPortalInvoicesList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/invoices",
  ...options
});
var customerPortalInvoicesGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/invoices/{id}",
  ...options
});
var customerPortalMandatesList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/mandates",
  ...options
});
var customerPortalMandatesReauthorize = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/mandates/{id}/re-authorize",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerPortalMandatesCancel = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/mandates/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerPortalMandatesReauthorizeSendOtp = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/mandates/{id}/re-authorize/send-otp",
  ...options
});
var customerPortalMandatesReauthorizeVerifyOtp = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-portal/mandates/{id}/re-authorize/verify-otp",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerMetersList = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-meters",
  ...options
});
var customerMetersGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/customer-meters/{customer_id}/{meter_id}",
  ...options
});
var paymentIntentsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-intents",
  ...options
});
var paymentIntentsCreate = (options) => (options?.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-intents",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var paymentIntentsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-intents/{id}",
  ...options
});
var paymentIntentsConfirm = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-intents/{id}/confirm",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentIntentsCapture = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-intents/{id}/capture",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentIntentsCancel = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/payment-intents/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var eventsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/events",
  ...options
});
var eventsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/events/{id}",
  ...options
});
var eventsResend = (options) => (options.client ?? client).post({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/events/{id}/resend",
  ...options
});
var usageEventsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/usage-events",
  ...options
});
var usageEventsIngest = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/usage-events",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var usageEventsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/usage-events/{id}",
  ...options
});
var usageBalanceGet = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/usage/balance",
  ...options
});
var entitlementsList = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/entitlements",
  ...options
});
var entitlementsCheck = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/entitlements/check",
  ...options
});
var transactionsList = (options) => (options?.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/transactions",
  ...options
});
var transactionsGet = (options) => (options.client ?? client).get({
  security: [
    { name: "x-api-key", type: "apiKey" },
    { scheme: "bearer", type: "http" }
  ],
  url: "/transactions/{id}",
  ...options
});
var ddMandateRequestsGet = (options) => (options.client ?? client).get({ url: "/dd/mandate-requests/{token}", ...options });
var ddValidate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/dd/validate",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var ddPreview = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/dd/preview",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var mandatesList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates",
  ...options
});
var mandatesCreate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var mandatesGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates/{id}",
  ...options
});
var mandatesCancel = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var mandatesSuspend = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates/{id}/suspend",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var mandatesReinstate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates/{id}/reinstate",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var mandatesScheduleCollection = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }],
  url: "/mandates/{id}/collections",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});

// src/webhooks.ts
var import_crypto = require("crypto");
var WEBHOOK_TOLERANCE_IN_SECONDS = 300;
function extractWebhookHeaders(headers) {
  const getHeader = (name) => {
    const value = headers[name] || headers[name.toLowerCase()];
    if (Array.isArray(value)) return value[0];
    return value || void 0;
  };
  const signature = getHeader("X-Revkeen-Signature") || getHeader("x-rk-signature");
  if (!signature) {
    throw new WebhookSignatureVerificationError(
      "missing_signature",
      "Missing webhook signature header (X-Revkeen-Signature or x-rk-signature)"
    );
  }
  return {
    signature,
    version: getHeader("X-Revkeen-Version"),
    account: getHeader("X-Revkeen-Account"),
    eventId: getHeader("X-Revkeen-Event-Id"),
    timestamp: getHeader("X-Revkeen-Timestamp")
  };
}
var WebhookSignatureVerificationError = class _WebhookSignatureVerificationError extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.name = "WebhookSignatureVerificationError";
    this.code = code;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _WebhookSignatureVerificationError);
    }
  }
};
function parseSignatureHeader(header) {
  if (!header) {
    throw new WebhookSignatureVerificationError(
      "missing_signature",
      "Missing webhook signature header"
    );
  }
  const parts = header.split(",");
  let timestampText;
  const signatures = [];
  for (const part of parts) {
    const separatorIndex = part.indexOf("=");
    if (separatorIndex <= 0 || separatorIndex === part.length - 1) {
      throw new WebhookSignatureVerificationError(
        "invalid_signature_header",
        "Invalid signature header format"
      );
    }
    const key = part.slice(0, separatorIndex);
    const value = part.slice(separatorIndex + 1);
    if (key === "t") {
      if (timestampText !== void 0) {
        throw new WebhookSignatureVerificationError(
          "invalid_signature_header",
          "Invalid signature header: multiple timestamps"
        );
      }
      timestampText = value;
    } else if (key === "v1") {
      signatures.push(value);
    }
  }
  if (timestampText === void 0 || signatures.length === 0) {
    throw new WebhookSignatureVerificationError(
      "invalid_signature_header",
      "Invalid signature header: missing timestamp or signature"
    );
  }
  if (!/^[0-9]+$/.test(timestampText)) {
    throw new WebhookSignatureVerificationError(
      "invalid_timestamp",
      "Invalid signature header timestamp"
    );
  }
  const timestamp = Number(timestampText);
  if (!Number.isSafeInteger(timestamp) || timestamp <= 0) {
    throw new WebhookSignatureVerificationError(
      "invalid_timestamp",
      "Invalid signature header timestamp"
    );
  }
  if (signatures.some((signature) => !/^[0-9a-fA-F]{64}$/.test(signature))) {
    throw new WebhookSignatureVerificationError(
      "invalid_signature_encoding",
      "Webhook signatures must be 64 hexadecimal characters"
    );
  }
  return { timestamp, signatures };
}
function payloadToText(payload) {
  return typeof payload === "string" ? payload : Buffer.from(payload).toString("utf8");
}
function verifySignature(options) {
  const {
    payload,
    signature,
    secret,
    tolerance = WEBHOOK_TOLERANCE_IN_SECONDS
  } = options;
  if (!Number.isSafeInteger(tolerance) || tolerance < 0) {
    throw new WebhookSignatureVerificationError(
      "invalid_timestamp",
      "Webhook timestamp tolerance must be a non-negative integer"
    );
  }
  const parsed = parseSignatureHeader(signature);
  const currentTime = Math.floor(Date.now() / 1e3);
  const timeDiff = Math.abs(currentTime - parsed.timestamp);
  if (timeDiff > tolerance) {
    throw new WebhookSignatureVerificationError(
      "timestamp_outside_tolerance",
      `Timestamp outside tolerance window (${timeDiff}s > ${tolerance}s). The webhook might be a replay attack, or your server's clock might be out of sync.`
    );
  }
  const hmac = (0, import_crypto.createHmac)("sha256", secret).update(
    `${parsed.timestamp}.`,
    "utf8"
  );
  if (typeof payload === "string") hmac.update(payload, "utf8");
  else hmac.update(payload);
  const expectedSignature = hmac.digest();
  const signatureValid = parsed.signatures.some((sig) => {
    try {
      const sigBuffer = Buffer.from(sig, "hex");
      return sigBuffer.length === expectedSignature.length && (0, import_crypto.timingSafeEqual)(sigBuffer, expectedSignature);
    } catch {
      return false;
    }
  });
  if (!signatureValid) {
    throw new WebhookSignatureVerificationError(
      "signature_mismatch",
      "Signature verification failed. Ensure you're using the correct webhook secret and the raw request body."
    );
  }
}
function constructEvent(payload, signature, secret, options) {
  verifySignature({
    payload,
    signature,
    secret,
    tolerance: options?.tolerance
  });
  try {
    const event = JSON.parse(payloadToText(payload));
    if (!event.id || !event.type || !event.data) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
        "Invalid event structure"
      );
    }
    return event;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
        "Invalid JSON payload: " + error.message
      );
    }
    throw error;
  }
}
function constructEventWithHeaders(payload, headers, secret, options) {
  verifySignature({
    payload,
    signature: headers.signature,
    secret,
    tolerance: options?.tolerance
  });
  try {
    const event = JSON.parse(payloadToText(payload));
    if (!event.id || !event.type || !event.data) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
        "Invalid event structure"
      );
    }
    return {
      ...event,
      api_version: event.api_version || headers.version || "unknown",
      account: event.account || headers.account
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new WebhookSignatureVerificationError(
        "invalid_payload",
        "Invalid JSON payload: " + error.message
      );
    }
    throw error;
  }
}
var webhooks = {
  /**
   * Constructs and verifies a webhook event
   * @see constructEvent
   */
  constructEvent,
  /**
   * Constructs and verifies a webhook event with header metadata
   * @see constructEventWithHeaders
   */
  constructEventWithHeaders,
  /**
   * Extract webhook headers from request
   * @see extractWebhookHeaders
   */
  extractWebhookHeaders,
  /**
   * Verifies a webhook signature without parsing the payload
   * @see verifySignature
   */
  verifySignature,
  /**
   * Default timestamp tolerance in seconds
   */
  TOLERANCE_IN_SECONDS: WEBHOOK_TOLERANCE_IN_SECONDS
};
var webhooks_default = webhooks;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OAuthTokenManager,
  RevKeen,
  RevKeenAPIError,
  RevKeenAuthenticationError,
  RevKeenAuthorizationError,
  RevKeenClient,
  RevKeenConflictError,
  RevKeenEnvironment,
  RevKeenError,
  RevKeenIdempotencyConflictError,
  RevKeenNotFoundError,
  RevKeenPaginationStallError,
  RevKeenRateLimitError,
  RevKeenServerError,
  RevKeenTimeoutError,
  RevKeenValidationError,
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  accountingInvoicePaymentRequestsCreate,
  accountingInvoicePaymentRequestsGet,
  analyticsRevenueMrrSummary,
  analyticsRevenueTimeSeries,
  billingOverviewGet,
  buildGeneratedResources,
  cartApiKeysEnsure,
  cartApiKeysRotate,
  cartApiKeysStatus,
  cartSessionsAddLineItem,
  cartSessionsApplyDiscountCode,
  cartSessionsConvert,
  cartSessionsCreate,
  cartSessionsGet,
  cartSessionsRemoveLineItem,
  cartSessionsSetContact,
  cartSessionsToggleAddOn,
  cartSessionsUpdateLineItem,
  checkoutSessionsCreate,
  checkoutSessionsExpire,
  checkoutSessionsGet,
  constructEvent,
  constructEventWithHeaders,
  createRevKeenAPIError,
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
  customerPortalMandatesCancel,
  customerPortalMandatesList,
  customerPortalMandatesReauthorize,
  customerPortalMandatesReauthorizeSendOtp,
  customerPortalMandatesReauthorizeVerifyOtp,
  customerPortalSessionsCreate,
  customerPortalSubscriptionsCancel,
  customerPortalSubscriptionsGet,
  customerPortalSubscriptionsList,
  customerStateGet,
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
  emptyRevKeenRateLimitMetadata,
  entitlementsCheck,
  entitlementsList,
  eventsGet,
  eventsList,
  eventsResend,
  extractWebhookHeaders,
  invoiceLineItemsListUsageEvents,
  invoiceUsageExplain,
  invoicesCreate,
  invoicesFinalize,
  invoicesGet,
  invoicesList,
  invoicesMarginEstimate,
  invoicesSend,
  invoicesUpdate,
  invoicesVoid,
  isMinorUnits,
  mandatesCancel,
  mandatesCreate,
  mandatesGet,
  mandatesList,
  mandatesReinstate,
  mandatesScheduleCollection,
  mandatesSuspend,
  mapOptionalNullable,
  metersCreate,
  metersGet,
  metersList,
  metersQuantities,
  metersUpdate,
  minorUnits,
  normalizeRevKeenAPIError,
  paginate,
  parseRevKeenRateLimitMetadata,
  parseRfc3339,
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
  productCollectionsCreate,
  productCollectionsDelete,
  productCollectionsGet,
  productCollectionsList,
  productCollectionsUpdate,
  productsCreate,
  productsGet,
  productsList,
  productsUpdate,
  refundsCreate,
  refundsGet,
  refundsList,
  storefrontOriginsCreate,
  storefrontOriginsDelete,
  storefrontOriginsList,
  storefrontProductsGet,
  storefrontProductsList,
  storefrontStatusGet,
  subscriptionsCancel,
  subscriptionsCreate,
  subscriptionsGet,
  subscriptionsList,
  subscriptionsUpdate,
  transactionsGet,
  transactionsList,
  usageBalanceGet,
  usageEventsGet,
  usageEventsIngest,
  usageEventsList,
  verifySignature,
  webhookDeliveriesGet,
  webhookDeliveriesList,
  webhookDeliveriesRetry,
  webhookEndpointsCreate,
  webhookEndpointsDelete,
  webhookEndpointsGet,
  webhookEndpointsList,
  webhookEndpointsRotateSecret,
  webhookEndpointsUpdate,
  webhooks
});
//# sourceMappingURL=index.js.map