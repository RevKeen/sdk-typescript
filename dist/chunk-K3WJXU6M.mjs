import {
  OAuthTokenManager,
  RevKeenError,
  RevKeenTimeoutError,
  assertPublishableKey,
  assertSecretKey,
  createRevKeenAPIError,
  parseRevKeenRateLimitMetadata
} from "./chunk-BW3I7P6R.mjs";

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
    const client = Object.create(_RevKeenClient.prototype);
    const key = "secretKey" in options ? options.secretKey : "apiKey" in options ? options.apiKey : void 0;
    client.initialize({
      ...options,
      baseUrl: validateCustomBaseUrl(baseUrl),
      key,
      oauth: options.oauth
    });
    return client;
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
function createBrowserCoreClient(publishableKey, environment, options = {}) {
  const client = Object.create(RevKeenClient.prototype);
  client.initialize({
    ...options,
    baseUrl: resolveRevKeenEnvironment(environment),
    key: publishableKey,
    allowPublishableKey: true
  });
  return client;
}
function createBrowserCoreClientForCustomBaseUrl(publishableKey, baseUrl, options = {}) {
  const client = Object.create(RevKeenClient.prototype);
  client.initialize({
    ...options,
    baseUrl: validateCustomBaseUrl(baseUrl),
    key: publishableKey,
    allowPublishableKey: true
  });
  return client;
}

export {
  buildGeneratedResources,
  RevKeenEnvironment,
  RevKeenClient,
  createBrowserCoreClient,
  createBrowserCoreClientForCustomBaseUrl
};
//# sourceMappingURL=chunk-K3WJXU6M.mjs.map