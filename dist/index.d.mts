export { A as AccountingResource, c as AnalyticsResource, B as BillingResource, C as CartResource, d as CheckoutSessionsResource, e as CreditNotesResource, f as CustomerResource, g as CustomersResource, D as DdResource, E as EntitlementsResource, h as EventsResource, G as GeneratedResourceRuntime, i as GeneratedResources, I as InvoiceResource, j as InvoicesResource, M as MandatesResource, k as MetersResource, P as PaymentIntentsResource, l as PaymentLinksResource, m as PricesResource, n as ProductResource, o as ProductsResource, p as RefundsResource, q as RevKeen, q as RevKeenClient, r as RevKeenClientOptions, s as RevKeenCustomBaseUrlClientOptions, a as RevKeenEnvironment, b as RevKeenRequestOptions, t as RevKeenRetryOptions, S as StorefrontResource, u as SubscriptionsResource, T as TransactionsResource, U as UsageBalanceResource, v as UsageEventsResource, w as UsageResource, W as WebhookEndpointsResource, x as WebhookResource, y as buildGeneratedResources, q as default } from './client-fGr6QWhF.mjs';
export { O as OAuthConfig, a as OAuthTokenManager } from './oauth-D7xvINHV.mjs';
import { A as AccountingInvoicePaymentRequestsCreateData, a as AccountingInvoicePaymentRequestsCreateResponses, b as AccountingInvoicePaymentRequestsCreateErrors, c as AccountingInvoicePaymentRequestsGetData, d as AccountingInvoicePaymentRequestsGetResponses, e as AccountingInvoicePaymentRequestsGetErrors, f as AnalyticsRevenueMrrSummaryData, g as AnalyticsRevenueMrrSummaryResponses, h as AnalyticsRevenueMrrSummaryErrors, i as AnalyticsRevenueTimeSeriesData, j as AnalyticsRevenueTimeSeriesResponses, k as AnalyticsRevenueTimeSeriesErrors, l as BillingOverviewGetData, m as BillingOverviewGetResponses, n as BillingOverviewGetErrors, C as CartApiKeysEnsureData, o as CartApiKeysEnsureResponses, p as CartApiKeysEnsureErrors, q as CartApiKeysRotateData, r as CartApiKeysRotateResponses, s as CartApiKeysRotateErrors, t as CartApiKeysStatusData, u as CartApiKeysStatusResponses, v as CartApiKeysStatusErrors, w as CartSessionsAddLineItemData, x as CartSessionsAddLineItemResponses, y as CartSessionsAddLineItemErrors, z as CartSessionsApplyDiscountCodeData, D as CartSessionsApplyDiscountCodeResponses, E as CartSessionsApplyDiscountCodeErrors, F as CartSessionsConvertData, G as CartSessionsConvertResponses, H as CartSessionsConvertErrors, I as CartSessionsCreateData, J as CartSessionsCreateResponses, K as CartSessionsCreateErrors, L as CartSessionsGetData, M as CartSessionsGetResponses, N as CartSessionsGetErrors, O as CartSessionsRemoveLineItemData, P as CartSessionsRemoveLineItemResponses, Q as CartSessionsRemoveLineItemErrors, R as CartSessionsSetContactData, S as CartSessionsSetContactResponses, T as CartSessionsSetContactErrors, V as CartSessionsToggleAddOnData, W as CartSessionsToggleAddOnResponses, X as CartSessionsToggleAddOnErrors, Y as CartSessionsUpdateLineItemData, Z as CartSessionsUpdateLineItemResponses, _ as CartSessionsUpdateLineItemErrors, $ as CheckoutSessionsCreateData, a0 as CheckoutSessionsCreateResponses, a1 as CheckoutSessionsCreateErrors, a2 as CheckoutSessionsExpireData, a3 as CheckoutSessionsExpireResponses, a4 as CheckoutSessionsExpireErrors, a5 as CheckoutSessionsGetData, a6 as CheckoutSessionsGetResponses, a7 as CheckoutSessionsGetErrors, a8 as CreditNotesCreateData, a9 as CreditNotesCreateResponses, aa as CreditNotesCreateErrors, ab as CreditNotesGetData, ac as CreditNotesGetResponses, ad as CreditNotesGetErrors, ae as CreditNotesListData, af as CreditNotesListResponses, ag as CreditNotesListErrors, ah as CreditNotesListLinesData, ai as CreditNotesListLinesResponses, aj as CreditNotesListLinesErrors, ak as CreditNotesPreviewData, al as CreditNotesPreviewResponses, am as CreditNotesPreviewErrors, an as CreditNotesVoidData, ao as CreditNotesVoidResponses, ap as CreditNotesVoidErrors, aq as CustomerMetersGetData, ar as CustomerMetersGetResponses, as as CustomerMetersGetErrors, at as CustomerMetersListData, au as CustomerMetersListResponses, av as CustomerMetersListErrors, aw as CustomerPortalCustomerGetData, ax as CustomerPortalCustomerGetResponses, ay as CustomerPortalCustomerGetErrors, az as CustomerPortalInvoicesGetData, aA as CustomerPortalInvoicesGetResponses, aB as CustomerPortalInvoicesGetErrors, aC as CustomerPortalInvoicesListData, aD as CustomerPortalInvoicesListResponses, aE as CustomerPortalInvoicesListErrors, aF as CustomerPortalMandatesCancelData, aG as CustomerPortalMandatesCancelResponses, aH as CustomerPortalMandatesCancelErrors, aI as CustomerPortalMandatesListData, aJ as CustomerPortalMandatesListResponses, aK as CustomerPortalMandatesListErrors, aL as CustomerPortalMandatesReauthorizeData, aM as CustomerPortalMandatesReauthorizeResponses, aN as CustomerPortalMandatesReauthorizeErrors, aO as CustomerPortalMandatesReauthorizeSendOtpData, aP as CustomerPortalMandatesReauthorizeSendOtpResponses, aQ as CustomerPortalMandatesReauthorizeSendOtpErrors, aR as CustomerPortalMandatesReauthorizeVerifyOtpData, aS as CustomerPortalMandatesReauthorizeVerifyOtpResponses, aT as CustomerPortalMandatesReauthorizeVerifyOtpErrors, aU as CustomerPortalSessionsCreateData, aV as CustomerPortalSessionsCreateResponses, aW as CustomerPortalSessionsCreateErrors, aX as CustomerPortalSubscriptionsCancelData, aY as CustomerPortalSubscriptionsCancelResponses, aZ as CustomerPortalSubscriptionsCancelErrors, a_ as CustomerPortalSubscriptionsGetData, a$ as CustomerPortalSubscriptionsGetResponses, b0 as CustomerPortalSubscriptionsGetErrors, b1 as CustomerPortalSubscriptionsListData, b2 as CustomerPortalSubscriptionsListResponses, b3 as CustomerPortalSubscriptionsListErrors, b4 as CustomerStateGetData, b5 as CustomerStateGetResponses, b6 as CustomerStateGetErrors, b7 as CustomersCreateData, b8 as CustomersCreateResponses, b9 as CustomersCreateErrors, ba as CustomersGetData, bb as CustomersGetResponses, bc as CustomersGetErrors, bd as CustomersListData, be as CustomersListResponses, bf as CustomersListErrors, bg as CustomersPaymentMethodsListData, bh as CustomersPaymentMethodsListResponses, bi as CustomersPaymentMethodsListErrors, bj as CustomersPaymentRailsGetData, bk as CustomersPaymentRailsGetResponses, bl as CustomersPaymentRailsGetErrors, bm as CustomersPreferredRailsGetData, bn as CustomersPreferredRailsGetResponses, bo as CustomersPreferredRailsGetErrors, bp as CustomersUpdateData, bq as CustomersUpdateResponses, br as CustomersUpdateErrors, bs as DdMandateRequestsGetData, bt as DdMandateRequestsGetResponses, bu as DdMandateRequestsGetErrors, bv as DdPreviewData, bw as DdPreviewResponses, bx as DdPreviewErrors, by as DdValidateData, bz as DdValidateResponses, bA as DdValidateErrors, bB as EntitlementsCheckData, bC as EntitlementsCheckResponses, bD as EntitlementsCheckErrors, bE as EntitlementsListData, bF as EntitlementsListResponses, bG as EntitlementsListErrors, bH as EventsGetData, bI as EventsGetResponses, bJ as EventsGetErrors, bK as EventsListData, bL as EventsListResponses, bM as EventsListErrors, bN as EventsResendData, bO as EventsResendResponses, bP as EventsResendErrors, bQ as InvoiceLineItemsListUsageEventsData, bR as InvoiceLineItemsListUsageEventsResponses, bS as InvoiceLineItemsListUsageEventsErrors, bT as InvoiceUsageExplainData, bU as InvoiceUsageExplainResponses, bV as InvoiceUsageExplainErrors, bW as InvoicesCreateData, bX as InvoicesCreateResponses, bY as InvoicesCreateErrors, bZ as InvoicesFinalizeData, b_ as InvoicesFinalizeResponses, b$ as InvoicesFinalizeErrors, c0 as InvoicesGetData, c1 as InvoicesGetResponses, c2 as InvoicesGetErrors, c3 as InvoicesListData, c4 as InvoicesListResponses, c5 as InvoicesListErrors, c6 as InvoicesMarginEstimateData, c7 as InvoicesMarginEstimateResponses, c8 as InvoicesMarginEstimateErrors, c9 as InvoicesSendData, ca as InvoicesSendResponses, cb as InvoicesSendErrors, cc as InvoicesUpdateData, cd as InvoicesUpdateResponses, ce as InvoicesUpdateErrors, cf as InvoicesVoidData, cg as InvoicesVoidResponses, ch as InvoicesVoidErrors, ci as MandatesCancelData, cj as MandatesCancelResponses, ck as MandatesCancelErrors, cl as MandatesCreateData, cm as MandatesCreateResponses, cn as MandatesCreateErrors, co as MandatesGetData, cp as MandatesGetResponses, cq as MandatesGetErrors, cr as MandatesListData, cs as MandatesListResponses, ct as MandatesListErrors, cu as MandatesReinstateData, cv as MandatesReinstateResponses, cw as MandatesReinstateErrors, cx as MandatesScheduleCollectionData, cy as MandatesScheduleCollectionResponses, cz as MandatesScheduleCollectionErrors, cA as MandatesSuspendData, cB as MandatesSuspendResponses, cC as MandatesSuspendErrors, cD as MetersCreateData, cE as MetersCreateResponses, cF as MetersCreateErrors, cG as MetersGetData, cH as MetersGetResponses, cI as MetersGetErrors, cJ as MetersListData, cK as MetersListResponses, cL as MetersListErrors, cM as MetersQuantitiesData, cN as MetersQuantitiesResponses, cO as MetersQuantitiesErrors, cP as MetersUpdateData, cQ as MetersUpdateResponses, cR as MetersUpdateErrors, cS as PaymentIntentsCancelData, cT as PaymentIntentsCancelResponses, cU as PaymentIntentsCancelErrors, cV as PaymentIntentsCaptureData, cW as PaymentIntentsCaptureResponses, cX as PaymentIntentsCaptureErrors, cY as PaymentIntentsConfirmData, cZ as PaymentIntentsConfirmResponses, c_ as PaymentIntentsConfirmErrors, c$ as PaymentIntentsCreateData, d0 as PaymentIntentsCreateResponses, d1 as PaymentIntentsCreateErrors, d2 as PaymentIntentsGetData, d3 as PaymentIntentsGetResponses, d4 as PaymentIntentsGetErrors, d5 as PaymentIntentsListData, d6 as PaymentIntentsListResponses, d7 as PaymentIntentsListErrors, d8 as PaymentLinksActivateData, d9 as PaymentLinksActivateResponses, da as PaymentLinksActivateErrors, db as PaymentLinksArchiveData, dc as PaymentLinksArchiveResponses, dd as PaymentLinksArchiveErrors, de as PaymentLinksCreateData, df as PaymentLinksCreateResponses, dg as PaymentLinksCreateErrors, dh as PaymentLinksDeactivateData, di as PaymentLinksDeactivateResponses, dj as PaymentLinksDeactivateErrors, dk as PaymentLinksExpireData, dl as PaymentLinksExpireResponses, dm as PaymentLinksExpireErrors, dn as PaymentLinksGetData, dp as PaymentLinksGetResponses, dq as PaymentLinksGetErrors, dr as PaymentLinksListData, ds as PaymentLinksListResponses, dt as PaymentLinksListErrors, du as PaymentLinksUpdateData, dv as PaymentLinksUpdateResponses, dw as PaymentLinksUpdateErrors, dx as PricesArchiveData, dy as PricesArchiveResponses, dz as PricesArchiveErrors, dA as PricesCreateData, dB as PricesCreateResponses, dC as PricesCreateErrors, dD as PricesGetData, dE as PricesGetResponses, dF as PricesGetErrors, dG as PricesListData, dH as PricesListResponses, dI as PricesListErrors, dJ as PricesUpdateData, dK as PricesUpdateResponses, dL as PricesUpdateErrors, dM as ProductCollectionsCreateData, dN as ProductCollectionsCreateResponses, dO as ProductCollectionsCreateErrors, dP as ProductCollectionsDeleteData, dQ as ProductCollectionsDeleteResponses, dR as ProductCollectionsDeleteErrors, dS as ProductCollectionsGetData, dT as ProductCollectionsGetResponses, dU as ProductCollectionsGetErrors, dV as ProductCollectionsListData, dW as ProductCollectionsListResponses, dX as ProductCollectionsListErrors, dY as ProductCollectionsUpdateData, dZ as ProductCollectionsUpdateResponses, d_ as ProductCollectionsUpdateErrors, d$ as ProductsCreateData, e0 as ProductsCreateResponses, e1 as ProductsCreateErrors, e2 as ProductsGetData, e3 as ProductsGetResponses, e4 as ProductsGetErrors, e5 as ProductsListData, e6 as ProductsListResponses, e7 as ProductsListErrors, e8 as ProductsUpdateData, e9 as ProductsUpdateResponses, ea as ProductsUpdateErrors, eb as RefundsCreateData, ec as RefundsCreateResponses, ed as RefundsCreateErrors, ee as RefundsGetData, ef as RefundsGetResponses, eg as RefundsGetErrors, eh as RefundsListData, ei as RefundsListResponses, ej as RefundsListErrors, ek as StorefrontOriginsCreateData, el as StorefrontOriginsCreateResponses, em as StorefrontOriginsCreateErrors, en as StorefrontOriginsDeleteData, eo as StorefrontOriginsDeleteResponses, ep as StorefrontOriginsDeleteErrors, eq as StorefrontOriginsListData, er as StorefrontOriginsListResponses, es as StorefrontOriginsListErrors, et as StorefrontProductsGetData, eu as StorefrontProductsGetResponses, ev as StorefrontProductsGetErrors, ew as StorefrontProductsListData, ex as StorefrontProductsListResponses, ey as StorefrontProductsListErrors, ez as StorefrontStatusGetData, eA as StorefrontStatusGetResponses, eB as StorefrontStatusGetErrors, eC as SubscriptionsCancelData, eD as SubscriptionsCancelResponses, eE as SubscriptionsCancelErrors, eF as SubscriptionsCreateData, eG as SubscriptionsCreateResponses, eH as SubscriptionsCreateErrors, eI as SubscriptionsGetData, eJ as SubscriptionsGetResponses, eK as SubscriptionsGetErrors, eL as SubscriptionsListData, eM as SubscriptionsListResponses, eN as SubscriptionsListErrors, eO as SubscriptionsUpdateData, eP as SubscriptionsUpdateResponses, eQ as SubscriptionsUpdateErrors, eR as TransactionsGetData, eS as TransactionsGetResponses, eT as TransactionsGetErrors, eU as TransactionsListData, eV as TransactionsListResponses, eW as TransactionsListErrors, eX as UsageBalanceGetData, eY as UsageBalanceGetResponses, eZ as UsageBalanceGetErrors, e_ as UsageEventsGetData, e$ as UsageEventsGetResponses, f0 as UsageEventsGetErrors, f1 as UsageEventsIngestData, f2 as UsageEventsIngestResponses, f3 as UsageEventsIngestErrors, f4 as UsageEventsListData, f5 as UsageEventsListResponses, f6 as UsageEventsListErrors, f7 as WebhookDeliveriesGetData, f8 as WebhookDeliveriesGetResponses, f9 as WebhookDeliveriesGetErrors, fa as WebhookDeliveriesListData, fb as WebhookDeliveriesListResponses, fc as WebhookDeliveriesListErrors, fd as WebhookDeliveriesRetryData, fe as WebhookDeliveriesRetryResponses, ff as WebhookDeliveriesRetryErrors, fg as WebhookEndpointsCreateData, fh as WebhookEndpointsCreateResponses, fi as WebhookEndpointsCreateErrors, fj as WebhookEndpointsDeleteData, fk as WebhookEndpointsDeleteResponses, fl as WebhookEndpointsDeleteErrors, fm as WebhookEndpointsGetData, fn as WebhookEndpointsGetResponses, fo as WebhookEndpointsGetErrors, fp as WebhookEndpointsListData, fq as WebhookEndpointsListResponses, fr as WebhookEndpointsListErrors, fs as WebhookEndpointsRotateSecretData, ft as WebhookEndpointsRotateSecretResponses, fu as WebhookEndpointsRotateSecretErrors, fv as WebhookEndpointsUpdateData, fw as WebhookEndpointsUpdateResponses, fx as WebhookEndpointsUpdateErrors } from './types.gen-ByS8P8Qb.mjs';
export { fy as AccountingInvoicePaymentRequest, fz as AccountingInvoicePaymentRequestsCreateError, fA as AccountingInvoicePaymentRequestsCreateResponse, fB as AccountingInvoicePaymentRequestsGetError, fC as AccountingInvoicePaymentRequestsGetResponse, fD as AnalyticsRevenueMrrSummaryError, fE as AnalyticsRevenueMrrSummaryResponse, fF as AnalyticsRevenueTimeSeries200ResponseDataPointsInner, fG as AnalyticsRevenueTimeSeriesError, fH as AnalyticsRevenueTimeSeriesResponse, fI as ApiError, fJ as ApplyCartDiscountCodeInput, fK as AttachPaymentMethodRequest, fL as AuthenticationError, fM as AuthorizationAuditUnavailableError, fN as AvsCodeInterpretation, fO as BacsDirectDebitDetails, fP as BankAccountDetails, fQ as BatchIngestRequest, B as BatchIngestResult, fR as Benefit, fS as BillingAnchorRulesResponse, fT as BillingDetails, fU as BillingIntervalsResponse, fV as BillingOverviewGetResponse, fW as BillingOverviewResponse, fX as BillingOverviewResponseOverdueInvoicesTotalsInner, fY as BillingPreviewErrorResponse, fZ as BillingPreviewResponse, f_ as Business, f$ as CancelOrderRequest, g0 as CancelPaymentIntentRequest, g1 as CancelPaymentRequest, g2 as CancelSetupIntentRequest, g3 as CancelSubscriptionInput, g4 as CancelSubscriptionRequest, g5 as CancelSubscriptionScheduleRequest, g6 as CapturePaymentIntentRequest, g7 as CapturePaymentRequest, g8 as CardDetails, g9 as CartApiKeysEnsureError, ga as CartApiKeysEnsureResponse, gb as CartApiKeysRotate200ResponseData, gc as CartApiKeysRotateError, gd as CartApiKeysRotateResponse, ge as CartApiKeysStatus200ResponseData, gf as CartApiKeysStatusError, gg as CartApiKeysStatusResponse, gh as CartBillingAnchorRule, gi as CartCheckoutSession, gj as CartConversionResponse, gk as CartLineItem, gl as CartLineItemInput, gm as CartLineItemRecurring, gn as CartSession, go as CartSessionErrorResponse, gp as CartSessionResponse, gq as CartSessionStatus, gr as CartSessionsAddLineItemError, gs as CartSessionsAddLineItemResponse, gt as CartSessionsApplyDiscountCodeError, gu as CartSessionsApplyDiscountCodeResponse, gv as CartSessionsConvertError, gw as CartSessionsConvertResponse, gx as CartSessionsCreateError, gy as CartSessionsCreateResponse, gz as CartSessionsGetError, gA as CartSessionsGetResponse, gB as CartSessionsRemoveLineItemError, gC as CartSessionsRemoveLineItemResponse, gD as CartSessionsSetContactError, gE as CartSessionsSetContactResponse, gF as CartSessionsToggleAddOnError, gG as CartSessionsToggleAddOnResponse, gH as CartSessionsUpdateLineItemError, gI as CartSessionsUpdateLineItemResponse, gJ as CartStartRule, gK as ChargeCaptureResponse, gL as ChargeCreateResponse, gM as ChargeDuplicateErrorResponse, gN as ChargeErrorResponse, gO as ChargeListResponse, gP as ChargeRefundResponse, gQ as ChargeRetrieveResponse, gR as CheckoutSession, gS as CheckoutSessionCreateResponse, gT as CheckoutSessionErrorResponse, gU as CheckoutSessionExpireResponse, gV as CheckoutSessionRetrieveResponse, gW as CheckoutSessionsCreateError, gX as CheckoutSessionsCreateResponse, gY as CheckoutSessionsExpireError, gZ as CheckoutSessionsExpireResponse, g_ as CheckoutSessionsGetError, g$ as CheckoutSessionsGetResponse, h0 as ClientOptions, h1 as CollectionSchedule, h2 as ConfirmPaymentIntentRequest, h3 as ConfirmSetupIntentRequest, h4 as CreateAccountingInvoicePaymentRequestInput, h5 as CreateCartSessionInput, h6 as CreateCheckoutSessionInput, h7 as CreateCreditNoteInput, h8 as CreateCustomerPortalSessionRequest, h9 as CreateDiscountInput, ha as CreateExportRequest, hb as CreateImportRequest, hc as CreateMandateRequest, hd as CreateMeterPriceRequest, he as CreateMeterRequest, hf as CreateMeterResponse, hg as CreatePaymentIntentRequest, hh as CreatePriceRequest, hi as CreateProductRequest, hj as CreateRefundInput, hk as CreateSetupIntentRequest, hl as CreateSubscriptionItemInput, hm as CreateSubscriptionScheduleRequest, hn as CreateTerminalPaymentRequest, ho as CreateTestEventRequest, hp as CreateVoidInput, hq as CreditEligibilityResponse, hr as CreditNote, hs as CreditNoteCreateResponse, ht as CreditNoteEligibilityResponse, hu as CreditNoteEligibilityResponsePaymentsInnerConstraints, hv as CreditNoteLine, hw as CreditNoteLineAllocationInputV1, hx as CreditNoteLineList, hy as CreditNoteListResponse, hz as CreditNotePreview, hA as CreditNotePreviewResponse, hB as CreditNoteResponse, hC as CreditNoteRetrieveResponse, hD as CreditNoteVoidResponse, hE as CreditNotesCreateResponse, hF as CreditNotesGetResponse, hG as CreditNotesListLinesResponse, hH as CreditNotesListResponse, hI as CreditNotesPreviewResponse, hJ as CreditNotesVoidResponse, hK as CustomerCreateResponse, hL as CustomerInvoice, hM as CustomerListResponse, hN as CustomerMeter, hO as CustomerMeterErrorResponse, hP as CustomerMeterList, hQ as CustomerMeterResponse, hR as CustomerMetersGetError, hS as CustomerMetersGetResponse, hT as CustomerMetersListError, hU as CustomerMetersListResponse, hV as CustomerOrder, hW as CustomerPayment, hX as CustomerPaymentMethodsListResponse, hY as CustomerPortalCustomerGetError, hZ as CustomerPortalCustomerGetResponse, h_ as CustomerPortalErrorResponse, h$ as CustomerPortalInvoicesGetError, i0 as CustomerPortalInvoicesGetResponse, i1 as CustomerPortalInvoicesListError, i2 as CustomerPortalInvoicesListResponse, i3 as CustomerPortalMandatesCancelError, i4 as CustomerPortalMandatesCancelResponse, i5 as CustomerPortalMandatesListError, i6 as CustomerPortalMandatesListResponse, i7 as CustomerPortalMandatesReauthorizeError, i8 as CustomerPortalMandatesReauthorizeResponse, i9 as CustomerPortalMandatesReauthorizeSendOtpError, ia as CustomerPortalMandatesReauthorizeSendOtpResponse, ib as CustomerPortalMandatesReauthorizeVerifyOtpError, ic as CustomerPortalMandatesReauthorizeVerifyOtpResponse, id as CustomerPortalSessionCreateResponse, ie as CustomerPortalSessionsCreateError, ig as CustomerPortalSessionsCreateResponse, ih as CustomerPortalSubscriptionsCancelError, ii as CustomerPortalSubscriptionsCancelResponse, ij as CustomerPortalSubscriptionsGetError, ik as CustomerPortalSubscriptionsGetResponse, il as CustomerPortalSubscriptionsListError, im as CustomerPortalSubscriptionsListResponse, io as CustomerRetrieveResponse, ip as CustomerStateGetResponse, iq as CustomerStateResponse, ir as CustomerSubscription, is as CustomerUpdateResponse, it as CustomersCreateResponse, iu as CustomersGetResponse, iv as CustomersListResponse, iw as CustomersPaymentMethodsListResponse, ix as CustomersPaymentRailsGet200ResponseData, iy as CustomersPaymentRailsGetResponse, iz as CustomersPreferredRailsGet200ResponseData, iA as CustomersPreferredRailsGet200ResponseDataPreferredRailsInnerMandate, iB as CustomersPreferredRailsGetResponse, iC as CustomersUpdateResponse, iD as CvvCodeInterpretation, iE as DdCaptureSession, iF as DdCaptureSessionResponse, iG as DdCollectionStopped, iH as DdMandatePdfReference, iI as DdMandateRequestActiveItem, iJ as DdMandateRequestActiveResponse, iK as DdMandateRequestCancelResponse, iL as DdMandateRequestConsumeResponse, iM as DdMandateRequestCreateResponse, iN as DdMandateRequestHistoryResponse, iO as DdMandateRequestLifecycleItem, iP as DdMandateRequestLifecycleStatus, iQ as DdMandateRequestsGetError, iR as DdMandateRequestsGetResponse, iS as DdPreviewError, iT as DdPreviewResponse, iU as DdValidateError, iV as DdValidateResponse, iW as DeclineAnalyticsResponse, iX as DeclineAnalyticsResponseDataByGatewayValue, iY as DeclineAnalyticsResponseDataTopDeclineCategoriesInner, iZ as Discount, i_ as DiscountCreateResponse, i$ as DiscountDeleteResponse, j0 as DiscountListResponse, j1 as DiscountRetrieveResponse, j2 as DiscountUpdateResponse, j3 as Dispute, j4 as DryRunResult, j5 as DryRunResultDataInnerValidationDetails, j6 as Entitlement, j7 as EntitlementCheck, j8 as EntitlementCheckResponse, j9 as EntitlementListResponse, ja as EntitlementsCheckResponse, jb as EntitlementsListResponse, jc as ErrorResponse, jd as Event, je as EventErrorResponse, jf as EventListResponse, jg as EventRequest, jh as EventsGetError, ji as EventsGetResponse, jj as EventsListError, jk as EventsListResponse, jl as EventsResendError, jm as EventsResendResponse, jn as Export, jo as ExportCreateResponse, jp as ExportRetrieveResponse, jq as ExternalUpsertResponse, jr as ForbiddenError, js as FulfillOrderRequest, jt as Import, ju as ImportCreateResponse, jv as ImportRetrieveResponse, jw as Invoice, jx as InvoiceCommentDetail, jy as InvoiceCommentDetailResponse, jz as InvoiceCommentListDetailResponse, jA as InvoiceLineItemsListUsageEventsError, jB as InvoiceLineItemsListUsageEventsResponse, jC as InvoiceLineUsageEventProvenanceItem, jD as InvoiceLineUsageEventsError, jE as InvoiceLineUsageEventsList, jF as InvoiceListResponse, jG as InvoiceResponse, jH as InvoiceUsageExplainResponse, jI as InvoiceUsageExplainResponse2, jJ as InvoicesCreateError, jK as InvoicesCreateResponse, jL as InvoicesFinalizeResponse, jM as InvoicesGetError, jN as InvoicesGetResponse, jO as InvoicesListError, jP as InvoicesListResponse, jQ as InvoicesMarginEstimate200ResponseData, jR as InvoicesMarginEstimate200ResponseDataEstimatesInnerFeeBreakdown, jS as InvoicesMarginEstimateResponse, jT as InvoicesSendResponse, jU as InvoicesUpdateError, jV as InvoicesUpdateRequestSubscriptionTerms, jW as InvoicesUpdateResponse, jX as InvoicesVoidResponse, jY as Mandate, jZ as MandateActionRequest, j_ as MandateActionResponse, j$ as MandateListItem, k0 as MandateListResponse, k1 as MandateRequestLookupResponse, k2 as MandateRequestLookupResponseDataCustomer, k3 as MandateRequestLookupResponseDataInvoice, k4 as MandateRequestLookupResponseDataMerchant, k5 as MandateResponse, k6 as MandatesCancelError, k7 as MandatesCancelResponse, k8 as MandatesCreateError, k9 as MandatesCreateResponse, ka as MandatesGetError, kb as MandatesGetResponse, kc as MandatesListError, kd as MandatesListResponse, ke as MandatesReinstateError, kf as MandatesReinstateResponse, kg as MandatesScheduleCollectionError, kh as MandatesScheduleCollectionResponse, ki as MandatesSuspendError, kj as MandatesSuspendResponse, kk as MarkDeliveredResponse, kl as MerchantActionForbiddenError, km as MerchantAuthorizationDeniedError, kn as MeterError, ko as MeterGetResponse, kp as MeterListResponse, kq as MeterPriceError, kr as MeterPriceListResponse, ks as MeterPriceResponse, kt as MeterPriceTierInput, ku as MeterQuantitiesResponse, kv as MetersCreateError, kw as MetersCreateResponse, kx as MetersGetError, ky as MetersGetResponse, kz as MetersListError, kA as MetersListResponse, kB as MetersQuantitiesError, kC as MetersQuantitiesResponse, kD as MetersUpdateError, kE as MetersUpdateResponse, kF as NoPaymentMethodsAvailableError, kG as NotFoundError, kH as OpenDispute, kI as Order, kJ as OrderErrorResponse, kK as OrderLineItem, kL as OrderListResponse, kM as Pagination, kN as PauseSubscriptionInput, kO as Payment, kP as PaymentAttempt, kQ as PaymentAttemptErrorResponse, kR as PaymentAttemptListResponse, kS as PaymentAttemptSingleResponse, kT as PaymentErrorResponse, kU as PaymentIntent, kV as PaymentIntentErrorResponse, kW as PaymentIntentLastPaymentErrorPaymentMethod, kX as PaymentIntentListResponse, kY as PaymentIntentNextActionRedirectToUrl, kZ as PaymentIntentsCancelError, k_ as PaymentIntentsCancelResponse, k$ as PaymentIntentsCaptureError, l0 as PaymentIntentsCaptureResponse, l1 as PaymentIntentsConfirmError, l2 as PaymentIntentsConfirmResponse, l3 as PaymentIntentsCreateError, l4 as PaymentIntentsCreateResponse, l5 as PaymentIntentsGetError, l6 as PaymentIntentsGetResponse, l7 as PaymentIntentsListError, l8 as PaymentIntentsListResponse, l9 as PaymentLinksActivateError, la as PaymentLinksActivateResponse, lb as PaymentLinksArchiveError, lc as PaymentLinksArchiveResponse, ld as PaymentLinksCreateError, le as PaymentLinksCreateRequestLineItemsInner, lf as PaymentLinksCreateRequestLineItemsInnerPriceDataProductData, lg as PaymentLinksCreateResponse, lh as PaymentLinksDeactivateError, li as PaymentLinksDeactivateResponse, lj as PaymentLinksExpireError, lk as PaymentLinksExpireResponse, ll as PaymentLinksGetError, lm as PaymentLinksGetResponse, ln as PaymentLinksList200ResponseDataInner, lo as PaymentLinksList200ResponseDataInnerLineItemsInnerProductDetails, lp as PaymentLinksList200ResponseDataInnerLineItemsInnerProductDetailsRecurring, lq as PaymentLinksList200ResponsePagination, lr as PaymentLinksListError, ls as PaymentLinksListResponse, lt as PaymentLinksUpdateError, lu as PaymentLinksUpdateResponse, lv as PaymentListResponse, lw as PaymentMethod, lx as PaymentMethodList, ly as PaymentSecurityResponse, lz as PaymentSecurityResult, lA as Payout, lB as PayoutPayment, lC as PhaseItem, lD as PortalCustomer, lE as PortalCustomerResponse, lF as PortalInvoice, lG as PortalInvoiceList, lH as PortalInvoiceResponse, lI as PortalMandate, lJ as PortalMandateList, lK as PortalReauthorizeMandateRequest, lL as PortalReauthorizeMandateResponse, lM as PortalReauthorizeSendOtpResponse, lN as PortalReauthorizeVerifyOtpRequest, lO as PortalReauthorizeVerifyOtpResponse, lP as PortalSubscription, lQ as PortalSubscriptionCancelResponse, lR as PortalSubscriptionList, lS as PortalSubscriptionResponse, lT as PreviewCollectionRequest, lU as PreviewCollectionResponse, lV as PreviewCreditNoteInput, lW as Price, lX as PriceErrorResponse, lY as PriceListResponse, lZ as PriceTier, l_ as PricesArchiveError, l$ as PricesArchiveResponse, m0 as PricesCreateError, m1 as PricesCreateResponse, m2 as PricesGetError, m3 as PricesGetResponse, m4 as PricesListError, m5 as PricesListResponse, m6 as PricesUpdateError, m7 as PricesUpdateResponse, m8 as Product, m9 as ProductCollection, ma as ProductCollectionCreateRequest, mb as ProductCollectionCreateResponse, mc as ProductCollectionDeleted, md as ProductCollectionDeletedResponse, me as ProductCollectionError, mf as ProductCollectionListResponse, mg as ProductCollectionResponse, mh as ProductCollectionUpdateRequest, mi as ProductCollectionUpdateResponse, mj as ProductCollectionsCreateError, mk as ProductCollectionsCreateResponse, ml as ProductCollectionsDeleteError, mm as ProductCollectionsDeleteResponse, mn as ProductCollectionsGetError, mo as ProductCollectionsGetResponse, mp as ProductCollectionsListError, mq as ProductCollectionsListResponse, mr as ProductCollectionsUpdateError, ms as ProductCollectionsUpdateResponse, mt as ProductCreateResponse, mu as ProductErrorResponse, mv as ProductImage, mw as ProductImageResponse, mx as ProductListResponse, my as ProductRetrieveResponse, mz as ProductUpdateResponse, mA as ProductsCreateError, mB as ProductsCreateResponse, mC as ProductsGetError, mD as ProductsGetResponse, mE as ProductsListError, mF as ProductsListResponse, mG as ProductsUpdateError, mH as ProductsUpdateResponse, mI as RateLimitError, mJ as RateLimitErrorErrorDetails, mK as Refund, mL as RefundCreateResponse, mM as RefundListResponse, mN as RefundRetrieveResponse, mO as RefundTerminalPaymentRequest, mP as RefundsCreateResponse, mQ as RefundsGetResponse, mR as RefundsListResponse, mS as ReleaseSubscriptionScheduleRequest, mT as ResendWebhookResponse, mU as RetryEligibilityResponse, mV as ScheduleCollectionRequest, mW as ScheduleCollectionResponse, mX as SchedulePhase, mY as SetCartContactInput, mZ as SetupIntent, m_ as SetupIntentError, m$ as SetupIntentList, n0 as SetupIntentNextAction, n1 as StaleUpdateResponse, n2 as StorefrontAvailability, n3 as StorefrontKeyStatus, n4 as StorefrontOrigin, n5 as StorefrontOriginCreateRequest, n6 as StorefrontOriginCreateResponse, n7 as StorefrontOriginDeleteResponse, n8 as StorefrontOriginError, n9 as StorefrontOriginListResponse, na as StorefrontOriginsCreateError, nb as StorefrontOriginsCreateResponse, nc as StorefrontOriginsDeleteError, nd as StorefrontOriginsDeleteResponse, ne as StorefrontOriginsListError, nf as StorefrontOriginsListResponse, ng as StorefrontPrice, nh as StorefrontProduct, ni as StorefrontProductError, nj as StorefrontProductImage, nk as StorefrontProductListResponse, nl as StorefrontProductResponse, nm as StorefrontProductsGetError, nn as StorefrontProductsGetResponse, no as StorefrontProductsListError, np as StorefrontProductsListResponse, nq as StorefrontStatus, nr as StorefrontStatusCheck, ns as StorefrontStatusError, nt as StorefrontStatusGetError, nu as StorefrontStatusGetResponse, nv as StorefrontStatusResponse, nw as Subscription, nx as SubscriptionCancelResponse, ny as SubscriptionCancelSubscriptionResponse, nz as SubscriptionChangePlanResponse, nA as SubscriptionChangeQuantityResponse, nB as SubscriptionCreateResponse, nC as SubscriptionItem, nD as SubscriptionItemCreateResponse, nE as SubscriptionItemDeleteResponse, nF as SubscriptionItemListResponse, nG as SubscriptionItemUpdateResponse, nH as SubscriptionListResponse, nI as SubscriptionPauseResponse, nJ as SubscriptionPreviewRenewalResponse, nK as SubscriptionPreviewRenewalResponseDataUpcomingRenewalsInner, nL as SubscriptionReactivateResponse, nM as SubscriptionResumeResponse, nN as SubscriptionRetrieveResponse, nO as SubscriptionSchedule, nP as SubscriptionScheduleErrorResponse, nQ as SubscriptionScheduleListResponse, nR as SubscriptionTerms, nS as SubscriptionUpdateResponse, nT as SubscriptionsCancelResponse, nU as SubscriptionsCreateResponse, nV as SubscriptionsGetResponse, nW as SubscriptionsListResponse, nX as SubscriptionsUpdateResponse, nY as SuccessResponse, nZ as TerminalDevice, n_ as TerminalDeviceErrorResponse, n$ as TerminalDeviceListResponse, o0 as TerminalDeviceResponse, o1 as TerminalPayment, o2 as TerminalPaymentErrorResponse, o3 as TerminalPaymentListResponse, o4 as TerminalPaymentResponse, o5 as TestEventResponse, o6 as ToggleCartAddOnInput, o7 as Transaction, o8 as TransactionListResponse, o9 as TransactionRetrieveResponse, oa as TransactionReversalEligibilityResponse, ob as TransactionsGetError, oc as TransactionsGetResponse, od as TransactionsListError, oe as TransactionsListResponse, of as TransformQuantity, og as UnchangedContentResponse, oh as UpdateCartLineItemInput, oi as UpdateDiscountInput, oj as UpdateMeterPriceRequest, ok as UpdateMeterRequest, ol as UpdateMeterResponse, om as UpdateOrderRequest, on as UpdatePaymentIntentRequest, oo as UpdatePaymentMethodRequest, op as UpdatePriceRequest, oq as UpdateProductRequest, or as UpdateSetupIntentRequest, os as UpdateSubscriptionItemInput, ot as UpdateSubscriptionScheduleRequest, ou as UsageAggregateResponse, ov as UsageBalanceGet400ResponseError, ow as UsageBalanceGetError, ox as UsageBalanceGetResponse, oy as UsageBalanceMeter, oz as UsageBalanceResponse, U as UsageEvent, oA as UsageEventError, oB as UsageEventGetResponse, oC as UsageEventListResponse, oD as UsageEventRecord, oE as UsageEventsGetError, oF as UsageEventsGetResponse, oG as UsageEventsIngestError, oH as UsageEventsIngestResponse, oI as UsageEventsListError, oJ as UsageEventsListResponse, oK as UsageIngestRequest, oL as ValidateBankAccountRequest, oM as ValidateBankAccountResponse, oN as ValidationError, oO as ValidationErrorErrorDetails, oP as Void, oQ as VoidCreateResponse, oR as VoidListResponse, oS as VoidRetrieveResponse, oT as VoidTerminalPaymentRequest, oU as WebhookDeliveriesGetError, oV as WebhookDeliveriesGetResponse, oW as WebhookDeliveriesListError, oX as WebhookDeliveriesListResponse, oY as WebhookDeliveriesRetryError, oZ as WebhookDeliveriesRetryResponse, o_ as WebhookDelivery, o$ as WebhookDeliveryErrorResponse, p0 as WebhookDeliveryListResponse, p1 as WebhookDeliveryResponse, p2 as WebhookDeliveryRetryResponse, p3 as WebhookEndpoint, p4 as WebhookEndpointsCreateResponse, p5 as WebhookEndpointsDelete200ResponseData, p6 as WebhookEndpointsDeleteResponse, p7 as WebhookEndpointsGetResponse, p8 as WebhookEndpointsList200ResponseDataInner, p9 as WebhookEndpointsList200ResponseMeta, pa as WebhookEndpointsListResponse, pb as WebhookEndpointsRotateSecretResponse, pc as WebhookEndpointsUpdateResponse, pd as WebhookEvent, pe as Webhooks, pf as WebhooksCheckoutSessionCompletedWebhookPayload, pg as WebhooksCheckoutSessionCompletedWebhookRequest, ph as WebhooksCheckoutSessionExpiredWebhookPayload, pi as WebhooksCheckoutSessionExpiredWebhookRequest, pj as WebhooksCollectionFailedWebhookPayload, pk as WebhooksCollectionFailedWebhookRequest, pl as WebhooksCollectionIndemnityClaimedWebhookPayload, pm as WebhooksCollectionIndemnityClaimedWebhookRequest, pn as WebhooksCollectionNoticeSentWebhookPayload, po as WebhooksCollectionNoticeSentWebhookRequest, pp as WebhooksCollectionScheduledWebhookPayload, pq as WebhooksCollectionScheduledWebhookRequest, pr as WebhooksCollectionSucceededWebhookPayload, ps as WebhooksCollectionSucceededWebhookRequest, pt as WebhooksCreditNoteCreatedWebhookPayload, pu as WebhooksCreditNoteCreatedWebhookRequest, pv as WebhooksCreditNoteIssuedWebhookPayload, pw as WebhooksCreditNoteIssuedWebhookRequest, px as WebhooksCreditNoteVoidedWebhookPayload, py as WebhooksCreditNoteVoidedWebhookRequest, pz as WebhooksCustomerCreatedWebhookPayload, pA as WebhooksCustomerCreatedWebhookRequest, pB as WebhooksCustomerUpdatedWebhookPayload, pC as WebhooksCustomerUpdatedWebhookRequest, pD as WebhooksInvoiceCreatedWebhookPayload, pE as WebhooksInvoiceCreatedWebhookRequest, pF as WebhooksInvoiceOverdueWebhookPayload, pG as WebhooksInvoiceOverdueWebhookRequest, pH as WebhooksInvoicePaidWebhookPayload, pI as WebhooksInvoicePaidWebhookRequest, pJ as WebhooksMandateActivatedWebhookPayload, pK as WebhooksMandateActivatedWebhookRequest, pL as WebhooksMandateAuddisRejectedWebhookPayload, pM as WebhooksMandateAuddisRejectedWebhookRequest, pN as WebhooksMandateCancelledWebhookPayload, pO as WebhooksMandateCancelledWebhookRequest, pP as WebhooksMandateCreatedWebhookPayload, pQ as WebhooksMandateCreatedWebhookRequest, pR as WebhooksMandateSignedWebhookPayload, pS as WebhooksMandateSignedWebhookRequest, pT as WebhooksMandateSuspendedWebhookPayload, pU as WebhooksMandateSuspendedWebhookRequest, pV as WebhooksMeterArchivedWebhookPayload, pW as WebhooksMeterArchivedWebhookRequest, pX as WebhooksMeterCreatedWebhookPayload, pY as WebhooksMeterCreatedWebhookRequest, pZ as WebhooksMeterPriceCreatedWebhookPayload, p_ as WebhooksMeterPriceCreatedWebhookRequest, p$ as WebhooksMeterPriceDeactivatedWebhookPayload, q0 as WebhooksMeterPriceDeactivatedWebhookRequest, q1 as WebhooksMeterPriceUpdatedWebhookPayload, q2 as WebhooksMeterPriceUpdatedWebhookRequest, q3 as WebhooksMeterUpdatedWebhookPayload, q4 as WebhooksMeterUpdatedWebhookRequest, q5 as WebhooksOrderCreatedWebhookPayload, q6 as WebhooksOrderCreatedWebhookRequest, q7 as WebhooksOrderFulfilledWebhookPayload, q8 as WebhooksOrderFulfilledWebhookRequest, q9 as WebhooksOrderPaidWebhookPayload, qa as WebhooksOrderPaidWebhookRequest, qb as WebhooksPaymentFailedWebhookPayload, qc as WebhooksPaymentFailedWebhookRequest, qd as WebhooksPaymentSucceededWebhookPayload, qe as WebhooksPaymentSucceededWebhookRequest, qf as WebhooksRefundCreatedWebhookPayload, qg as WebhooksRefundCreatedWebhookRequest, qh as WebhooksRefundSucceededWebhookPayload, qi as WebhooksRefundSucceededWebhookRequest, qj as WebhooksSettlementCreatedWebhookPayload, qk as WebhooksSettlementCreatedWebhookRequest, ql as WebhooksSubscriptionActivatedWebhookPayload, qm as WebhooksSubscriptionActivatedWebhookRequest, qn as WebhooksSubscriptionCanceledWebhookPayload, qo as WebhooksSubscriptionCanceledWebhookRequest, qp as WebhooksSubscriptionCreatedWebhookPayload, qq as WebhooksSubscriptionCreatedWebhookRequest, qr as WebhooksSubscriptionRenewedWebhookPayload, qs as WebhooksSubscriptionRenewedWebhookRequest, qt as WebhooksTerminalPaymentCancelledWebhookPayload, qu as WebhooksTerminalPaymentCancelledWebhookRequest, qv as WebhooksTerminalPaymentDeclinedWebhookPayload, qw as WebhooksTerminalPaymentDeclinedWebhookRequest, qx as WebhooksTerminalPaymentErrorWebhookPayload, qy as WebhooksTerminalPaymentErrorWebhookRequest, qz as WebhooksTerminalPaymentRequestedWebhookPayload, qA as WebhooksTerminalPaymentRequestedWebhookRequest, qB as WebhooksTerminalPaymentSucceededWebhookPayload, qC as WebhooksTerminalPaymentSucceededWebhookRequest, qD as WebhooksTerminalRefundSucceededWebhookPayload, qE as WebhooksTerminalRefundSucceededWebhookRequest, qF as WebhooksTerminalVoidSucceededWebhookPayload, qG as WebhooksTerminalVoidSucceededWebhookRequest, qH as WebhooksUsageCapExceededWebhookPayload, qI as WebhooksUsageCapExceededWebhookRequest, qJ as WebhooksUsageEventExcludedWebhookPayload, qK as WebhooksUsageEventExcludedWebhookRequest, qL as WebhooksUsageEventIngestedWebhookPayload, qM as WebhooksUsageEventIngestedWebhookRequest, qN as WebhooksUsageEventQuarantinedWebhookPayload, qO as WebhooksUsageEventQuarantinedWebhookRequest, qP as WebhooksUsageEventRejectedWebhookPayload, qQ as WebhooksUsageEventRejectedWebhookRequest, qR as WebhooksUsageInvoiceCreatedWebhookPayload, qS as WebhooksUsageInvoiceCreatedWebhookRequest, qT as WebhooksUsagePeriodFinalizedWebhookPayload, qU as WebhooksUsagePeriodFinalizedWebhookRequest, qV as WebhooksUsageThresholdReachedWebhookPayload, qW as WebhooksUsageThresholdReachedWebhookRequest, qX as WebhooksVoidCreatedWebhookPayload, qY as WebhooksVoidCreatedWebhookRequest, qZ as WebhooksVoidFailedWebhookPayload, q_ as WebhooksVoidFailedWebhookRequest, q$ as WebhooksVoidSucceededWebhookPayload, r0 as WebhooksVoidSucceededWebhookRequest } from './types.gen-ByS8P8Qb.mjs';
export { WEBHOOK_TOLERANCE_IN_SECONDS, WebhookHeaders, WebhookSignatureVerificationError, WebhookSignatureVerificationErrorCode, WebhookEvent as WebhookUtilityEvent, WebhookEventData as WebhookUtilityEventData, WebhookEventType as WebhookUtilityEventType, WebhookVerifyOptions, constructEvent, constructEventWithHeaders, extractWebhookHeaders, verifySignature, default as webhooks } from './webhooks.mjs';

/**
 * Rate-limit headers RevKeen publishes alongside a response.
 *
 * Units are fixed by the public contract and must not be re-derived by callers:
 * `resetAt` is built from `X-RateLimit-Reset`, which is a UNIX timestamp in
 * **seconds**, and `retryAfterSeconds` is the server-stated `Retry-After` delay
 * in **whole seconds**. Each field is `null` when its header was absent, so a
 * published zero (`X-RateLimit-Remaining: 0`) is never confused with an
 * unreported limit.
 */
interface RevKeenRateLimitMetadata {
    /** `X-RateLimit-Limit` — requests permitted in the current window. */
    readonly limit: number | null;
    /** `X-RateLimit-Remaining` — requests left in the current window. */
    readonly remaining: number | null;
    /** `X-RateLimit-Reset` — window reset instant, parsed from UNIX seconds. */
    readonly resetAt: Date | null;
    /**
     * `Retry-After` — whole seconds to wait, exactly as the server stated it. An
     * HTTP-date value is resolved to seconds from now. This is never clamped to
     * the SDK retry ceiling; that bound belongs to the retry policy alone.
     */
    readonly retryAfterSeconds: number | null;
}
/** The metadata surfaced when a response carried no rate-limit headers. */
declare function emptyRevKeenRateLimitMetadata(): RevKeenRateLimitMetadata;
/**
 * Reads the rate-limit headers off a response without inventing values. A
 * header that is missing, blank, or not a non-negative integer stays `null`.
 */
declare function parseRevKeenRateLimitMetadata(headers: Headers | undefined | null, now?: number): RevKeenRateLimitMetadata;
interface RevKeenErrorContext {
    requestId?: string | null;
    traceId?: string | null;
    correlationId?: string | null;
    attemptCount?: number;
    rateLimit?: RevKeenRateLimitMetadata | null;
}
interface RevKeenAPIErrorMetadata {
    code?: string | null;
    type?: string | null;
    param?: string | null;
    details?: unknown;
}
interface NormalizedRevKeenAPIError {
    code: string;
    message: string;
    type: string | null;
    param: string | null;
    details: unknown;
}
declare class RevKeenError extends Error {
    readonly requestId: string | null;
    readonly traceId: string | null;
    readonly correlationId: string | null;
    readonly attemptCount: number;
    /**
     * Rate-limit headers observed on the response, if any. Always an object, so
     * `error.rateLimit.retryAfterSeconds` is safe to read on every failure.
     */
    readonly rateLimit: RevKeenRateLimitMetadata;
    constructor(message: string, context?: RevKeenErrorContext);
}
declare class RevKeenAPIError extends RevKeenError {
    readonly status: number;
    readonly body: unknown;
    readonly code: string;
    readonly machineCode: string;
    readonly rawBody: unknown;
    readonly type: string | null;
    readonly param: string | null;
    readonly details: unknown;
    constructor(status: number, message: string, body: unknown, context?: RevKeenErrorContext, metadata?: RevKeenAPIErrorMetadata);
}
type APIErrorArguments = ConstructorParameters<typeof RevKeenAPIError>;
declare class RevKeenAuthenticationError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenAuthorizationError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenValidationError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenNotFoundError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenRateLimitError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenConflictError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenIdempotencyConflictError extends RevKeenConflictError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenServerError extends RevKeenAPIError {
    constructor(...args: APIErrorArguments);
}
declare class RevKeenTimeoutError extends RevKeenError {
    readonly phase: "connect" | "read";
    constructor(message: string, phase: "connect" | "read", context?: RevKeenErrorContext);
}
declare function normalizeRevKeenAPIError(body: unknown, fallbackMessage: string): NormalizedRevKeenAPIError;
declare function createRevKeenAPIError(status: number, body: unknown, fallbackMessage: string, context?: RevKeenErrorContext): RevKeenAPIError;

interface RevKeenPaginationOptions<TPage, TItem, TState> {
    initialState: TState;
    getItems: (page: TPage) => readonly TItem[];
    getNextState: (page: TPage) => TState | null | undefined;
    stateKey: (state: TState) => string;
    signal?: AbortSignal;
}
type RevKeenFetchPage<TPage, TState> = (state: TState, signal?: AbortSignal) => Promise<TPage>;
declare class RevKeenPaginationStallError extends RevKeenError {
    readonly stateKey: string;
    constructor(stateKey: string);
}
declare function paginate<TPage, TItem, TState>(fetchPage: RevKeenFetchPage<TPage, TState>, options: RevKeenPaginationOptions<TPage, TItem, TState>): AsyncIterable<TItem>;

declare const minorUnitsBrand: unique symbol;
type MinorUnits = number & {
    readonly [minorUnitsBrand]: "MinorUnits";
};
declare function isMinorUnits(value: number): value is MinorUnits;
declare function minorUnits(value: number): MinorUnits;
declare function mapOptionalNullable<T, U>(value: T | null | undefined, transform: (value: T) => U): U | null | undefined;
declare function parseRfc3339(value: string): Date;

type AuthToken = string | undefined;
interface Auth {
    /**
     * Which part of the request do we use to send the auth?
     *
     * @default 'header'
     */
    in?: "header" | "query" | "cookie";
    /**
     * Header or query parameter name.
     *
     * @default 'Authorization'
     */
    name?: string;
    scheme?: "basic" | "bearer";
    type: "apiKey" | "http";
}

interface SerializerOptions<T> {
    /**
     * @default true
     */
    explode: boolean;
    style: T;
}
type ArrayStyle = "form" | "spaceDelimited" | "pipeDelimited";
type ObjectStyle = "form" | "deepObject";

type QuerySerializer = (query: Record<string, unknown>) => string;
type BodySerializer = (body: unknown) => unknown;
type QuerySerializerOptionsObject = {
    allowReserved?: boolean;
    array?: Partial<SerializerOptions<ArrayStyle>>;
    object?: Partial<SerializerOptions<ObjectStyle>>;
};
type QuerySerializerOptions = QuerySerializerOptionsObject & {
    /**
     * Per-parameter serialization overrides. When provided, these settings
     * override the global array/object settings for specific parameter names.
     */
    parameters?: Record<string, QuerySerializerOptionsObject>;
};

type HttpMethod = "connect" | "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";
type Client$1<RequestFn = never, Config = unknown, MethodFn = never, BuildUrlFn = never, SseFn = never> = {
    /**
     * Returns the final request URL.
     */
    buildUrl: BuildUrlFn;
    getConfig: () => Config;
    request: RequestFn;
    setConfig: (config: Config) => Config;
} & {
    [K in HttpMethod]: MethodFn;
} & ([SseFn] extends [never] ? {
    sse?: never;
} : {
    sse: {
        [K in HttpMethod]: SseFn;
    };
});
interface Config$1 {
    /**
     * Auth token or a function returning auth token. The resolved value will be
     * added to the request payload as defined by its `security` array.
     */
    auth?: ((auth: Auth) => Promise<AuthToken> | AuthToken) | AuthToken;
    /**
     * A function for serializing request body parameter. By default,
     * {@link JSON.stringify()} will be used.
     */
    bodySerializer?: BodySerializer | null;
    /**
     * An object containing any HTTP headers that you want to pre-populate your
     * `Headers` object with.
     *
     * {@link https://developer.mozilla.org/docs/Web/API/Headers/Headers#init See more}
     */
    headers?: RequestInit["headers"] | Record<string, string | number | boolean | (string | number | boolean)[] | null | undefined | unknown>;
    /**
     * The request method.
     *
     * {@link https://developer.mozilla.org/docs/Web/API/fetch#method See more}
     */
    method?: Uppercase<HttpMethod>;
    /**
     * A function for serializing request query parameters. By default, arrays
     * will be exploded in form style, objects will be exploded in deepObject
     * style, and reserved characters are percent-encoded.
     *
     * This method will have no effect if the native `paramsSerializer()` Axios
     * API function is used.
     *
     * {@link https://swagger.io/docs/specification/serialization/#query View examples}
     */
    querySerializer?: QuerySerializer | QuerySerializerOptions;
    /**
     * A function validating request data. This is useful if you want to ensure
     * the request conforms to the desired shape, so it can be safely sent to
     * the server.
     */
    requestValidator?: (data: unknown) => Promise<unknown>;
    /**
     * A function transforming response data before it's returned. This is useful
     * for post-processing data, e.g., converting ISO strings into Date objects.
     */
    responseTransformer?: (data: unknown) => Promise<unknown>;
    /**
     * A function validating response data. This is useful if you want to ensure
     * the response conforms to the desired shape, so it can be safely passed to
     * the transformers and returned to the user.
     */
    responseValidator?: (data: unknown) => Promise<unknown>;
}

type ServerSentEventsOptions<TData = unknown> = Omit<RequestInit, "method"> & Pick<Config$1, "method" | "responseTransformer" | "responseValidator"> & {
    /**
     * Fetch API implementation. You can use this option to provide a custom
     * fetch instance.
     *
     * @default globalThis.fetch
     */
    fetch?: typeof fetch;
    /**
     * Implementing clients can call request interceptors inside this hook.
     */
    onRequest?: (url: string, init: RequestInit) => Promise<Request>;
    /**
     * Callback invoked when a network or parsing error occurs during streaming.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @param error The error that occurred.
     */
    onSseError?: (error: unknown) => void;
    /**
     * Callback invoked when an event is streamed from the server.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @param event Event streamed from the server.
     * @returns Nothing (void).
     */
    onSseEvent?: (event: StreamEvent<TData>) => void;
    serializedBody?: RequestInit["body"];
    /**
     * Default retry delay in milliseconds.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @default 3000
     */
    sseDefaultRetryDelay?: number;
    /**
     * Maximum number of retry attempts before giving up.
     */
    sseMaxRetryAttempts?: number;
    /**
     * Maximum retry delay in milliseconds.
     *
     * Applies only when exponential backoff is used.
     *
     * This option applies only if the endpoint returns a stream of events.
     *
     * @default 30000
     */
    sseMaxRetryDelay?: number;
    /**
     * Optional sleep function for retry backoff.
     *
     * Defaults to using `setTimeout`.
     */
    sseSleepFn?: (ms: number) => Promise<void>;
    url: string;
};
interface StreamEvent<TData = unknown> {
    data: TData;
    event?: string;
    id?: string;
    retry?: number;
}
type ServerSentEventsResult<TData = unknown, TReturn = void, TNext = unknown> = {
    stream: AsyncGenerator<TData extends Record<string, unknown> ? TData[keyof TData] : TData, TReturn, TNext>;
};

type ErrInterceptor<Err, Res, Req, Options> = (error: Err, response: Res, request: Req, options: Options) => Err | Promise<Err>;
type ReqInterceptor<Req, Options> = (request: Req, options: Options) => Req | Promise<Req>;
type ResInterceptor<Res, Req, Options> = (response: Res, request: Req, options: Options) => Res | Promise<Res>;
declare class Interceptors<Interceptor> {
    fns: Array<Interceptor | null>;
    clear(): void;
    eject(id: number | Interceptor): void;
    exists(id: number | Interceptor): boolean;
    getInterceptorIndex(id: number | Interceptor): number;
    update(id: number | Interceptor, fn: Interceptor): number | Interceptor | false;
    use(fn: Interceptor): number;
}
interface Middleware<Req, Res, Err, Options> {
    error: Interceptors<ErrInterceptor<Err, Res, Req, Options>>;
    request: Interceptors<ReqInterceptor<Req, Options>>;
    response: Interceptors<ResInterceptor<Res, Req, Options>>;
}

type ResponseStyle = "data" | "fields";
interface Config<T extends ClientOptions = ClientOptions> extends Omit<RequestInit, "body" | "headers" | "method">, Config$1 {
    /**
     * Base URL for all requests made by this client.
     */
    baseUrl?: T["baseUrl"];
    /**
     * Fetch API implementation. You can use this option to provide a custom
     * fetch instance.
     *
     * @default globalThis.fetch
     */
    fetch?: typeof fetch;
    /**
     * Please don't use the Fetch client for Next.js applications. The `next`
     * options won't have any effect.
     *
     * Install {@link https://www.npmjs.com/package/@hey-api/client-next `@hey-api/client-next`} instead.
     */
    next?: never;
    /**
     * Return the response data parsed in a specified format. By default, `auto`
     * will infer the appropriate method from the `Content-Type` response header.
     * You can override this behavior with any of the {@link Body} methods.
     * Select `stream` if you don't want to parse response data at all.
     *
     * @default 'auto'
     */
    parseAs?: "arrayBuffer" | "auto" | "blob" | "formData" | "json" | "stream" | "text";
    /**
     * Should we return only data or multiple fields (data, error, response, etc.)?
     *
     * @default 'fields'
     */
    responseStyle?: ResponseStyle;
    /**
     * Throw an error instead of returning it in the response?
     *
     * @default false
     */
    throwOnError?: T["throwOnError"];
}
interface RequestOptions<TData = unknown, TResponseStyle extends ResponseStyle = "fields", ThrowOnError extends boolean = boolean, Url extends string = string> extends Config<{
    responseStyle: TResponseStyle;
    throwOnError: ThrowOnError;
}>, Pick<ServerSentEventsOptions<TData>, "onRequest" | "onSseError" | "onSseEvent" | "sseDefaultRetryDelay" | "sseMaxRetryAttempts" | "sseMaxRetryDelay"> {
    /**
     * Any body that you want to add to your request.
     *
     * {@link https://developer.mozilla.org/docs/Web/API/fetch#body}
     */
    body?: unknown;
    path?: Record<string, unknown>;
    query?: Record<string, unknown>;
    /**
     * Security mechanism(s) to use for the request.
     */
    security?: ReadonlyArray<Auth>;
    url: Url;
}
interface ResolvedRequestOptions<TResponseStyle extends ResponseStyle = "fields", ThrowOnError extends boolean = boolean, Url extends string = string> extends RequestOptions<unknown, TResponseStyle, ThrowOnError, Url> {
    serializedBody?: string;
}
type RequestResult<TData = unknown, TError = unknown, ThrowOnError extends boolean = boolean, TResponseStyle extends ResponseStyle = "fields"> = ThrowOnError extends true ? Promise<TResponseStyle extends "data" ? TData extends Record<string, unknown> ? TData[keyof TData] : TData : {
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    request: Request;
    response: Response;
}> : Promise<TResponseStyle extends "data" ? (TData extends Record<string, unknown> ? TData[keyof TData] : TData) | undefined : ({
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    error: undefined;
} | {
    data: undefined;
    error: TError extends Record<string, unknown> ? TError[keyof TError] : TError;
}) & {
    request: Request;
    response: Response;
}>;
interface ClientOptions {
    baseUrl?: string;
    responseStyle?: ResponseStyle;
    throwOnError?: boolean;
}
type MethodFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = "fields">(options: Omit<RequestOptions<TData, TResponseStyle, ThrowOnError>, "method">) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type SseFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = "fields">(options: Omit<RequestOptions<never, TResponseStyle, ThrowOnError>, "method">) => Promise<ServerSentEventsResult<TData, TError>>;
type RequestFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = "fields">(options: Omit<RequestOptions<TData, TResponseStyle, ThrowOnError>, "method"> & Pick<Required<RequestOptions<TData, TResponseStyle, ThrowOnError>>, "method">) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type BuildUrlFn = <TData extends {
    body?: unknown;
    path?: Record<string, unknown>;
    query?: Record<string, unknown>;
    url: string;
}>(options: TData & Options$1<TData>) => string;
type Client = Client$1<RequestFn, Config, MethodFn, BuildUrlFn, SseFn> & {
    interceptors: Middleware<Request, Response, unknown, ResolvedRequestOptions>;
};
interface TDataShape {
    body?: unknown;
    headers?: unknown;
    path?: unknown;
    query?: unknown;
    url: string;
}
type OmitKeys<T, K> = Pick<T, Exclude<keyof T, K>>;
type Options$1<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown, TResponseStyle extends ResponseStyle = "fields"> = OmitKeys<RequestOptions<TResponse, TResponseStyle, ThrowOnError>, "body" | "path" | "query" | "url"> & ([TData] extends [never] ? unknown : Omit<TData, "url">);

type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options$1<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Explain invoice usage charges
 *
 * Return why this invoice billed the amount it did: line-item attribution plus usage provenance counts for usage lines. Use this instead of chaining invoices_get + invoice_line_items_list_usage_events.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const invoiceUsageExplain: <ThrowOnError extends boolean = false>(options: Options<InvoiceUsageExplainData, ThrowOnError>) => RequestResult<InvoiceUsageExplainResponses, InvoiceUsageExplainErrors, ThrowOnError, "fields">;
/**
 * List invoices
 *
 * List invoices with pagination and filtering.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const invoicesList: <ThrowOnError extends boolean = false>(options?: Options<InvoicesListData, ThrowOnError>) => RequestResult<InvoicesListResponses, InvoicesListErrors, ThrowOnError, "fields">;
/**
 * Create invoice
 *
 * Create a new invoice.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesCreate: <ThrowOnError extends boolean = false>(options: Options<InvoicesCreateData, ThrowOnError>) => RequestResult<InvoicesCreateResponses, InvoicesCreateErrors, ThrowOnError, "fields">;
/**
 * Get invoice
 *
 * Get a single invoice by ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/reject` — Reject invoice
 */
declare const invoicesGet: <ThrowOnError extends boolean = false>(options: Options<InvoicesGetData, ThrowOnError>) => RequestResult<InvoicesGetResponses, InvoicesGetErrors, ThrowOnError, "fields">;
/**
 * Update invoice
 *
 * Update an existing invoice.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesUpdate: <ThrowOnError extends boolean = false>(options: Options<InvoicesUpdateData, ThrowOnError>) => RequestResult<InvoicesUpdateResponses, InvoicesUpdateErrors, ThrowOnError, "fields">;
/**
 * Estimate invoice net by payment rail
 *
 * Estimate per-rail processing fees and net-after-fees for an invoice amount.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesMarginEstimate: <ThrowOnError extends boolean = false>(options: Options<InvoicesMarginEstimateData, ThrowOnError>) => RequestResult<InvoicesMarginEstimateResponses, InvoicesMarginEstimateErrors, ThrowOnError, "fields">;
/**
 * Finalize an invoice
 *
 * Finalizes a draft invoice, locking it for payment. Assigns invoice number and generates public token. After finalization, financial fields become immutable.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesFinalize: <ThrowOnError extends boolean = false>(options: Options<InvoicesFinalizeData, ThrowOnError>) => RequestResult<InvoicesFinalizeResponses, InvoicesFinalizeErrors, ThrowOnError, "fields">;
/**
 * Void an invoice
 *
 * Voids an invoice. Only invoices without recorded payments can be voided. Use refund instead for paid invoices.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesVoid: <ThrowOnError extends boolean = false>(options: Options<InvoicesVoidData, ThrowOnError>) => RequestResult<InvoicesVoidResponses, InvoicesVoidErrors, ThrowOnError, "fields">;
/**
 * Send an invoice
 *
 * Sends an invoice to the customer via the specified channel (email, SMS, or WhatsApp). Invoice must be approved first.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `GET /invoices/{id}/usage-explain` — Explain invoice usage charges
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesSend: <ThrowOnError extends boolean = false>(options: Options<InvoicesSendData, ThrowOnError>) => RequestResult<InvoicesSendResponses, InvoicesSendErrors, ThrowOnError, "fields">;
/**
 * List products
 *
 * List products with pagination and optional search.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 * - `GET /product-collections/{id}` — Get a product collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const productsList: <ThrowOnError extends boolean = false>(options?: Options<ProductsListData, ThrowOnError>) => RequestResult<ProductsListResponses, ProductsListErrors, ThrowOnError, "fields">;
/**
 * Create product
 *
 * Create a new product. Requires 'products:write' scope.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 * - `GET /product-collections/{id}` — Get a product collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productsCreate: <ThrowOnError extends boolean = false>(options: Options<ProductsCreateData, ThrowOnError>) => RequestResult<ProductsCreateResponses, ProductsCreateErrors, ThrowOnError, "fields">;
/**
 * Get product by ID
 *
 * Get a product by its ID. Requires 'products:read' scope.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 * - `GET /product-collections/{id}` — Get a product collection
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const productsGet: <ThrowOnError extends boolean = false>(options: Options<ProductsGetData, ThrowOnError>) => RequestResult<ProductsGetResponses, ProductsGetErrors, ThrowOnError, "fields">;
/**
 * Update product
 *
 * Update an existing product. Requires 'products:write' scope.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 * - `GET /product-collections/{id}` — Get a product collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productsUpdate: <ThrowOnError extends boolean = false>(options: Options<ProductsUpdateData, ThrowOnError>) => RequestResult<ProductsUpdateResponses, ProductsUpdateErrors, ThrowOnError, "fields">;
/**
 * List product collections
 *
 * List the merchant's product collections, with member product ids in display order.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `POST /product-collections` — Create a product collection
 * - `GET /product-collections/{id}` — Get a product collection
 *
 * **Common errors**
 *
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const productCollectionsList: <ThrowOnError extends boolean = false>(options?: Options<ProductCollectionsListData, ThrowOnError>) => RequestResult<ProductCollectionsListResponses, ProductCollectionsListErrors, ThrowOnError, "fields">;
/**
 * Create a product collection
 *
 * Create a product collection. The URL handle must be unique for the merchant, and every product must belong to the merchant.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `GET /product-collections/{id}` — Get a product collection
 *
 * **Common errors**
 *
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productCollectionsCreate: <ThrowOnError extends boolean = false>(options?: Options<ProductCollectionsCreateData, ThrowOnError>) => RequestResult<ProductCollectionsCreateResponses, ProductCollectionsCreateErrors, ThrowOnError, "fields">;
/**
 * Delete a product collection
 *
 * Delete a product collection. Its products are not changed.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 *
 * **Common errors**
 *
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productCollectionsDelete: <ThrowOnError extends boolean = false>(options: Options<ProductCollectionsDeleteData, ThrowOnError>) => RequestResult<ProductCollectionsDeleteResponses, ProductCollectionsDeleteErrors, ThrowOnError, "fields">;
/**
 * Get a product collection
 *
 * Get one product collection by id or URL handle.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 *
 * **Common errors**
 *
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const productCollectionsGet: <ThrowOnError extends boolean = false>(options: Options<ProductCollectionsGetData, ThrowOnError>) => RequestResult<ProductCollectionsGetResponses, ProductCollectionsGetErrors, ThrowOnError, "fields">;
/**
 * Update a product collection
 *
 * Update a product collection. `product_ids` replaces the membership in the given order. Send `expected_version` to refuse the change if the collection was edited since you read it.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /products` — List products
 * - `POST /products` — Create product
 * - `GET /products/{id}` — Get product by ID
 * - `PATCH /products/{id}` — Update product
 * - `PUT /products/external/{source}/{externalId}` — Upsert product by external ID
 * - `PUT /products/external/batch` — Batch upsert products by external ID
 * - `GET /product-collections` — List product collections
 * - `POST /product-collections` — Create a product collection
 *
 * **Common errors**
 *
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productCollectionsUpdate: <ThrowOnError extends boolean = false>(options: Options<ProductCollectionsUpdateData, ThrowOnError>) => RequestResult<ProductCollectionsUpdateResponses, ProductCollectionsUpdateErrors, ThrowOnError, "fields">;
/**
 * Create a checkout session
 *
 * Create a checkout session for an invoice or product.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /checkout-sessions/{id}` — Retrieve a checkout session
 * - `POST /checkout-sessions/{id}/expire` — Expire a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const checkoutSessionsCreate: <ThrowOnError extends boolean = false>(options?: Options<CheckoutSessionsCreateData, ThrowOnError>) => RequestResult<CheckoutSessionsCreateResponses, CheckoutSessionsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve a checkout session
 *
 * Retrieve a checkout session by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /checkout-sessions` — Create a checkout session
 * - `POST /checkout-sessions/{id}/expire` — Expire a checkout session
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const checkoutSessionsGet: <ThrowOnError extends boolean = false>(options: Options<CheckoutSessionsGetData, ThrowOnError>) => RequestResult<CheckoutSessionsGetResponses, CheckoutSessionsGetErrors, ThrowOnError, "fields">;
/**
 * Expire a checkout session
 *
 * Manually expire an open checkout session. Only sessions with status 'open' or 'pending' and no active payment attempt can be expired.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /checkout-sessions` — Create a checkout session
 * - `GET /checkout-sessions/{id}` — Retrieve a checkout session
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const checkoutSessionsExpire: <ThrowOnError extends boolean = false>(options: Options<CheckoutSessionsExpireData, ThrowOnError>) => RequestResult<CheckoutSessionsExpireResponses, CheckoutSessionsExpireErrors, ThrowOnError, "fields">;
/**
 * Create a cart session
 *
 * Create an empty (or pre-populated) cart session. The returned cart is `open` and mutable until it is converted into a checkout session, or until it is swept to `abandoned` / `expired`.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/convert` — Convert to a checkout session
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsCreate: <ThrowOnError extends boolean = false>(options?: Options<CartSessionsCreateData, ThrowOnError>) => RequestResult<CartSessionsCreateResponses, CartSessionsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve a cart session
 *
 * Fetch the current state of a cart session by id. Returns the same shape as the create response.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const cartSessionsGet: <ThrowOnError extends boolean = false>(options: Options<CartSessionsGetData, ThrowOnError>) => RequestResult<CartSessionsGetResponses, CartSessionsGetErrors, ThrowOnError, "fields">;
/**
 * Add a line item to a cart session
 *
 * Append a line item to an open cart session. Subtotals are recomputed atomically; the updated cart is returned.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsAddLineItem: <ThrowOnError extends boolean = false>(options: Options<CartSessionsAddLineItemData, ThrowOnError>) => RequestResult<CartSessionsAddLineItemResponses, CartSessionsAddLineItemErrors, ThrowOnError, "fields">;
/**
 * Remove a line item from a cart session
 *
 * Remove a line item from an open cart. Subtotals are recomputed; the updated cart is returned.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsRemoveLineItem: <ThrowOnError extends boolean = false>(options: Options<CartSessionsRemoveLineItemData, ThrowOnError>) => RequestResult<CartSessionsRemoveLineItemResponses, CartSessionsRemoveLineItemErrors, ThrowOnError, "fields">;
/**
 * Update a line item's quantity
 *
 * Change the quantity of a single line item on an open cart. Other fields on the line item are immutable; recreate the item to change them.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsUpdateLineItem: <ThrowOnError extends boolean = false>(options: Options<CartSessionsUpdateLineItemData, ThrowOnError>) => RequestResult<CartSessionsUpdateLineItemResponses, CartSessionsUpdateLineItemErrors, ThrowOnError, "fields">;
/**
 * Toggle an add-on on a cart session
 *
 * Add or remove an add-on product from `add_ons_selected`. The call is idempotent: sending the same desired state for an add-on already in that state is a no-op and emits no event.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsToggleAddOn: <ThrowOnError extends boolean = false>(options: Options<CartSessionsToggleAddOnData, ThrowOnError>) => RequestResult<CartSessionsToggleAddOnResponses, CartSessionsToggleAddOnErrors, ThrowOnError, "fields">;
/**
 * Set or clear a cart discount code
 *
 * Set the cart's discount code. Pass `null` to clear. The code is validated against the merchant's active discounts and priced into the cart total immediately; convert then carries the discounted amount.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsApplyDiscountCode: <ThrowOnError extends boolean = false>(options: Options<CartSessionsApplyDiscountCodeData, ThrowOnError>) => RequestResult<CartSessionsApplyDiscountCodeResponses, CartSessionsApplyDiscountCodeErrors, ThrowOnError, "fields">;
/**
 * Capture customer email + consent on a cart
 *
 * Capture the customer's email and marketing/recovery consent on an open cart so an abandoned cart can be recovered. Every field is optional; pass `null` to clear. Setting a field records its consent/capture timestamp. Idempotent — an input that changes nothing is a no-op.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/convert` — Convert a cart session into a checkout session
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsSetContact: <ThrowOnError extends boolean = false>(options: Options<CartSessionsSetContactData, ThrowOnError>) => RequestResult<CartSessionsSetContactResponses, CartSessionsSetContactErrors, ThrowOnError, "fields">;
/**
 * Convert a cart session into a checkout session
 *
 * Atomically materialise a pending checkout session from the cart snapshot, reserve tracked availability, flip the cart to `converted`, and emit `commerce.cart.converted` + `commerce.checkout.started` through the outbox.
 *
 * Idempotent on re-call (returns the existing checkout session). Concurrency-safe via a compare-and-swap lock on cart status; product availability is guarded by the database reserve step.
 *
 * Validation that runs inside the lock and rolls back on failure:
 * - `CART_SESSION_EMPTY` — the cart has no line items.
 * - `AVAILABILITY_EXCEEDED` — a tracked/capacity-limited product can no longer satisfy the requested quantity.
 * - `CART_SESSION_NOT_FOUND` — no cart for this id under the calling merchant.
 * - `CART_SESSION_CLOSED` — the cart is already `abandoned` or `expired`.
 *
 * On rollback the cart returns to `open` and the customer can retry after fixing the cause.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-sessions` — Create a cart session
 * - `GET /cart-sessions/{id}` — Retrieve a cart session
 * - `POST /cart-sessions/{id}/line-items` — Add a line item to a cart session
 * - `PATCH /cart-sessions/{id}/line-items/{lineId}` — Update a line item's quantity
 * - `DELETE /cart-sessions/{id}/line-items/{lineId}` — Remove a line item from a cart session
 * - `POST /cart-sessions/{id}/add-ons` — Toggle an add-on on a cart session
 * - `POST /cart-sessions/{id}/discount-code` — Set or clear a cart discount code
 * - `POST /cart-sessions/{id}/contact` — Capture customer email + consent on a cart
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartSessionsConvert: <ThrowOnError extends boolean = false>(options: Options<CartSessionsConvertData, ThrowOnError>) => RequestResult<CartSessionsConvertResponses, CartSessionsConvertErrors, ThrowOnError, "fields">;
/**
 * Get managed Cart API key status
 *
 * Returns whether the authenticated merchant has managed RevKeen Cart publishable and secret keys. Existing key values are never returned.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /cart-api-keys/ensure` — Ensure managed Cart API keys exist
 * - `POST /cart-api-keys/{kind}/rotate` — Rotate a managed Cart API key
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 */
declare const cartApiKeysStatus: <ThrowOnError extends boolean = false>(options?: Options<CartApiKeysStatusData, ThrowOnError>) => RequestResult<CartApiKeysStatusResponses, CartApiKeysStatusErrors, ThrowOnError, "fields">;
/**
 * Ensure managed Cart API keys exist
 *
 * Creates any missing managed RevKeen Cart publishable and secret keys for the authenticated merchant. Newly created key values are returned once; existing secret values are never re-exposed.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /cart-api-keys/status` — Get managed Cart API key status
 * - `POST /cart-api-keys/{kind}/rotate` — Rotate a managed Cart API key
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartApiKeysEnsure: <ThrowOnError extends boolean = false>(options?: Options<CartApiKeysEnsureData, ThrowOnError>) => RequestResult<CartApiKeysEnsureResponses, CartApiKeysEnsureErrors, ThrowOnError, "fields">;
/**
 * Rotate a managed Cart API key
 *
 * Rotates the managed RevKeen Cart publishable or secret key. The new key value is returned once; previous keys remain valid for the requested grace window.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /cart-api-keys/status` — Get managed Cart API key status
 * - `POST /cart-api-keys/ensure` — Ensure managed Cart API keys exist
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartApiKeysRotate: <ThrowOnError extends boolean = false>(options: Options<CartApiKeysRotateData, ThrowOnError>) => RequestResult<CartApiKeysRotateResponses, CartApiKeysRotateErrors, ThrowOnError, "fields">;
/**
 * List storefront products
 *
 * List active, cart-eligible products with browser-safe display data, active prices, and derived availability. Only products listed on the Storefront are returned (store_visibility visible, or scheduled and due). Intended for publishable-key storefront and CMS-picker use; never returns product metadata or internal fields.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /storefront/products/{productId}` — Get a storefront product
 * - `GET /storefront/origins` — List storefront origins
 * - `POST /storefront/origins` — Register a storefront origin
 * - `DELETE /storefront/origins/{originId}` — Remove a storefront origin
 * - `GET /storefront/status` — Get storefront integration status
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const storefrontProductsList: <ThrowOnError extends boolean = false>(options?: Options<StorefrontProductsListData, ThrowOnError>) => RequestResult<StorefrontProductsListResponses, StorefrontProductsListErrors, ThrowOnError, "fields">;
/**
 * Get a storefront product
 *
 * Fetch one active, cart-eligible product by UUID, URL handle (slug), or product reference. A UUID also finds a product hidden from the Storefront; a handle or reference only finds listed products, and the handle wins over another product's reference. Same browser-safe projection as the list endpoint.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /storefront/products` — List storefront products
 * - `GET /storefront/origins` — List storefront origins
 * - `POST /storefront/origins` — Register a storefront origin
 * - `DELETE /storefront/origins/{originId}` — Remove a storefront origin
 * - `GET /storefront/status` — Get storefront integration status
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const storefrontProductsGet: <ThrowOnError extends boolean = false>(options: Options<StorefrontProductsGetData, ThrowOnError>) => RequestResult<StorefrontProductsGetResponses, StorefrontProductsGetErrors, ThrowOnError, "fields">;
/**
 * List storefront origins
 *
 * List the browser origins registered for publishable-key storefront calls.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /storefront/products` — List storefront products
 * - `GET /storefront/products/{productId}` — Get a storefront product
 * - `POST /storefront/origins` — Register a storefront origin
 * - `DELETE /storefront/origins/{originId}` — Remove a storefront origin
 * - `GET /storefront/status` — Get storefront integration status
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const storefrontOriginsList: <ThrowOnError extends boolean = false>(options?: Options<StorefrontOriginsListData, ThrowOnError>) => RequestResult<StorefrontOriginsListResponses, StorefrontOriginsListErrors, ThrowOnError, "fields">;
/**
 * Register a storefront origin
 *
 * Register an exact web origin (scheme://host[:port]) for publishable-key storefront calls. Wildcards are rejected; http is allowed only for localhost.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /storefront/products` — List storefront products
 * - `GET /storefront/products/{productId}` — Get a storefront product
 * - `GET /storefront/origins` — List storefront origins
 * - `DELETE /storefront/origins/{originId}` — Remove a storefront origin
 * - `GET /storefront/status` — Get storefront integration status
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const storefrontOriginsCreate: <ThrowOnError extends boolean = false>(options?: Options<StorefrontOriginsCreateData, ThrowOnError>) => RequestResult<StorefrontOriginsCreateResponses, StorefrontOriginsCreateErrors, ThrowOnError, "fields">;
/**
 * Remove a storefront origin
 *
 * Remove a registered storefront origin. Browser calls from it fail closed afterwards.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /storefront/products` — List storefront products
 * - `GET /storefront/products/{productId}` — Get a storefront product
 * - `GET /storefront/origins` — List storefront origins
 * - `POST /storefront/origins` — Register a storefront origin
 * - `GET /storefront/status` — Get storefront integration status
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const storefrontOriginsDelete: <ThrowOnError extends boolean = false>(options: Options<StorefrontOriginsDeleteData, ThrowOnError>) => RequestResult<StorefrontOriginsDeleteResponses, StorefrontOriginsDeleteErrors, ThrowOnError, "fields">;
/**
 * Get storefront integration status
 *
 * Readiness report for the Cart/headless-storefront setup: activation, managed keys, registered origins, product-read readiness, webhook health, and availability tracking. CART_DISABLED / KEYS_MISSING / ORIGIN_MISSING / PRODUCT_READ_UNAVAILABLE are fail-level; WEBHOOK_MISSING / WEBHOOK_UNREACHABLE are warn-level. Never returns key material.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /storefront/products` — List storefront products
 * - `GET /storefront/products/{productId}` — Get a storefront product
 * - `GET /storefront/origins` — List storefront origins
 * - `POST /storefront/origins` — Register a storefront origin
 * - `DELETE /storefront/origins/{originId}` — Remove a storefront origin
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 */
declare const storefrontStatusGet: <ThrowOnError extends boolean = false>(options?: Options<StorefrontStatusGetData, ThrowOnError>) => RequestResult<StorefrontStatusGetResponses, StorefrontStatusGetErrors, ThrowOnError, "fields">;
/**
 * Get customer billing state
 *
 * Return the Polar-shaped job snapshot for one customer: identity, active and recent subscriptions, and recent invoices with overdue flags. Use this instead of chaining customers_get + subscriptions_list + invoices_list.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerStateGet: <ThrowOnError extends boolean = false>(options: Options<CustomerStateGetData, ThrowOnError>) => RequestResult<CustomerStateGetResponses, CustomerStateGetErrors, ThrowOnError, "fields">;
/**
 * List customers
 *
 * Retrieve a paginated list of customers for the merchant
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customersList: <ThrowOnError extends boolean = false>(options?: Options<CustomersListData, ThrowOnError>) => RequestResult<CustomersListResponses, CustomersListErrors, ThrowOnError, "fields">;
/**
 * Create a new customer
 *
 * Create a new customer record in the merchant's account
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customersCreate: <ThrowOnError extends boolean = false>(options?: Options<CustomersCreateData, ThrowOnError>) => RequestResult<CustomersCreateResponses, CustomersCreateErrors, ThrowOnError, "fields">;
/**
 * Get customer by ID
 *
 * Retrieve detailed information about a specific customer
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customersGet: <ThrowOnError extends boolean = false>(options: Options<CustomersGetData, ThrowOnError>) => RequestResult<CustomersGetResponses, CustomersGetErrors, ThrowOnError, "fields">;
/**
 * Update customer details
 *
 * Update an existing customer's information
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customersUpdate: <ThrowOnError extends boolean = false>(options: Options<CustomersUpdateData, ThrowOnError>) => RequestResult<CustomersUpdateResponses, CustomersUpdateErrors, ThrowOnError, "fields">;
/**
 * Get customer payment rail availability
 *
 * Return per-rail availability for a customer, including mandate state and last successful rail usage.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customersPaymentRailsGet: <ThrowOnError extends boolean = false>(options: Options<CustomersPaymentRailsGetData, ThrowOnError>) => RequestResult<CustomersPaymentRailsGetResponses, CustomersPaymentRailsGetErrors, ThrowOnError, "fields">;
/**
 * Get preferred payment rails
 *
 * Return smart-pick rail recommendations with customer history, mandate state, and margin-aware reasoning.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customersPreferredRailsGet: <ThrowOnError extends boolean = false>(options: Options<CustomersPreferredRailsGetData, ThrowOnError>) => RequestResult<CustomersPreferredRailsGetResponses, CustomersPreferredRailsGetErrors, ThrowOnError, "fields">;
/**
 * Get customer payment methods
 *
 * Retrieve all payment methods for a customer
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{id}/state` — Get customer billing state
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customersPaymentMethodsList: <ThrowOnError extends boolean = false>(options: Options<CustomersPaymentMethodsListData, ThrowOnError>) => RequestResult<CustomersPaymentMethodsListResponses, CustomersPaymentMethodsListErrors, ThrowOnError, "fields">;
/**
 * List subscriptions
 *
 * Retrieve a paginated list of subscriptions with optional filters
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const subscriptionsList: <ThrowOnError extends boolean = false>(options?: Options<SubscriptionsListData, ThrowOnError>) => RequestResult<SubscriptionsListResponses, SubscriptionsListErrors, ThrowOnError, "fields">;
/**
 * Create a new subscription
 *
 * Create a new subscription for a customer.
 *
 * **The first period is billed at creation**, at the price's amount for the quantity. On card the saved `paymentMethodId` is charged straight away (it is required unless the subscription starts in a trial). On Direct Debit the first collection is scheduled with advance notice, typically 5–7 working days after creation. With a trial, nothing is billed until the trial ends.
 *
 * Set `paymentRail: direct_debit` with an active `mandateId` to create a Direct Debit subscription (GBP only). This needs a signed-in team member or an OAuth app; API keys are refused with 403.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /subscriptions` — List subscriptions
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const subscriptionsCreate: <ThrowOnError extends boolean = false>(options?: Options<SubscriptionsCreateData, ThrowOnError>) => RequestResult<SubscriptionsCreateResponses, SubscriptionsCreateErrors, ThrowOnError, "fields">;
/**
 * Get subscription by ID
 *
 * Retrieve detailed information about a specific subscription
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions` — List subscriptions
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const subscriptionsGet: <ThrowOnError extends boolean = false>(options: Options<SubscriptionsGetData, ThrowOnError>) => RequestResult<SubscriptionsGetResponses, SubscriptionsGetErrors, ThrowOnError, "fields">;
/**
 * Update subscription details
 *
 * Update an existing subscription's properties
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions` — List subscriptions
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 * - `POST /subscriptions/{id}/pause` — Pause subscription
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const subscriptionsUpdate: <ThrowOnError extends boolean = false>(options: Options<SubscriptionsUpdateData, ThrowOnError>) => RequestResult<SubscriptionsUpdateResponses, SubscriptionsUpdateErrors, ThrowOnError, "fields">;
/**
 * Cancel subscription
 *
 * Cancel a subscription either immediately or at the end of the current billing period.
 *
 * **Modes:**
 * - `immediately`: Status set to "canceled", access revoked now
 * - `period_end`: cancelAtPeriodEnd flag set, access continues until period end
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /subscriptions` — Create a new subscription
 * - `GET /subscriptions` — List subscriptions
 * - `GET /subscriptions/{id}` — Get subscription by ID
 * - `PATCH /subscriptions/{id}` — Update subscription details
 * - `DELETE /subscriptions/{id}` — Delete subscription
 * - `POST /subscriptions/{id}/change-plan` — Change subscription plan
 * - `POST /subscriptions/{id}/change-quantity` — Change subscription quantity
 * - `POST /subscriptions/{id}/preview-renewal` — Preview subscription renewal
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const subscriptionsCancel: <ThrowOnError extends boolean = false>(options: Options<SubscriptionsCancelData, ThrowOnError>) => RequestResult<SubscriptionsCancelResponses, SubscriptionsCancelErrors, ThrowOnError, "fields">;
/**
 * MRR Summary
 *
 * Get Monthly Recurring Revenue metrics and growth
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /analytics/revenue/time-series` — Revenue Time Series
 * - `GET /analytics/invoices/ar-aging` — A/R Aging Report
 * - `GET /analytics/collections/dso` — Days Sales Outstanding
 * - `GET /analytics/customers/ltv` — Customer LTV
 * - `GET /analytics/customers/{customerId}` — Customer Analytics
 * - `GET /analytics/payment-links/conversion` — Payment Link Conversion
 * - `GET /analytics/checkout/funnel` — Checkout Funnel Analytics
 * - `GET /analytics/checkout/abandonment/summary` — Abandonment Alert Summary
 */
declare const analyticsRevenueMrrSummary: <ThrowOnError extends boolean = false>(options?: Options<AnalyticsRevenueMrrSummaryData, ThrowOnError>) => RequestResult<AnalyticsRevenueMrrSummaryResponses, AnalyticsRevenueMrrSummaryErrors, ThrowOnError, "fields">;
/**
 * Revenue Time Series
 *
 * Get revenue data over time with configurable granularity
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /analytics/revenue/mrr-summary` — MRR Summary
 * - `GET /analytics/invoices/ar-aging` — A/R Aging Report
 * - `GET /analytics/collections/dso` — Days Sales Outstanding
 * - `GET /analytics/customers/ltv` — Customer LTV
 * - `GET /analytics/customers/{customerId}` — Customer Analytics
 * - `GET /analytics/payment-links/conversion` — Payment Link Conversion
 * - `GET /analytics/checkout/funnel` — Checkout Funnel Analytics
 * - `GET /analytics/checkout/abandonment/summary` — Abandonment Alert Summary
 */
declare const analyticsRevenueTimeSeries: <ThrowOnError extends boolean = false>(options: Options<AnalyticsRevenueTimeSeriesData, ThrowOnError>) => RequestResult<AnalyticsRevenueTimeSeriesResponses, AnalyticsRevenueTimeSeriesErrors, ThrowOnError, "fields">;
/**
 * List refunds
 *
 * Retrieve a paginated list of refunds with optional filters. Results are ordered by creation date (newest first).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /refunds` — Create a refund
 * - `GET /refunds/{id}` — Get refund by ID
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const refundsList: <ThrowOnError extends boolean = false>(options?: Options<RefundsListData, ThrowOnError>) => RequestResult<RefundsListResponses, RefundsListErrors, ThrowOnError, "fields">;
/**
 * Create a refund
 *
 * Initiate a refund for a payment. The refund will be processed through the original payment gateway.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /refunds` — List refunds
 * - `GET /refunds/{id}` — Get refund by ID
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const refundsCreate: <ThrowOnError extends boolean = false>(options?: Options<RefundsCreateData, ThrowOnError>) => RequestResult<RefundsCreateResponses, RefundsCreateErrors, ThrowOnError, "fields">;
/**
 * Get refund by ID
 *
 * Retrieve a single refund by its public ID (ref_xxx) or internal UUID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /refunds` — List refunds
 * - `POST /refunds` — Create a refund
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const refundsGet: <ThrowOnError extends boolean = false>(options: Options<RefundsGetData, ThrowOnError>) => RequestResult<RefundsGetResponses, RefundsGetErrors, ThrowOnError, "fields">;
/**
 * List credit notes
 *
 * Retrieve a paginated list of credit notes with optional filters. Results are ordered by creation date (newest first).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const creditNotesList: <ThrowOnError extends boolean = false>(options?: Options<CreditNotesListData, ThrowOnError>) => RequestResult<CreditNotesListResponses, CreditNotesListErrors, ThrowOnError, "fields">;
/**
 * Create a credit note
 *
 * Issue a credit note for a paid or partially paid invoice. The credit can be applied via refund to payment method, customer balance, or marked as external.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const creditNotesCreate: <ThrowOnError extends boolean = false>(options?: Options<CreditNotesCreateData, ThrowOnError>) => RequestResult<CreditNotesCreateResponses, CreditNotesCreateErrors, ThrowOnError, "fields">;
/**
 * Get credit note by ID
 *
 * Retrieve a single credit note by its UUID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const creditNotesGet: <ThrowOnError extends boolean = false>(options: Options<CreditNotesGetData, ThrowOnError>) => RequestResult<CreditNotesGetResponses, CreditNotesGetErrors, ThrowOnError, "fields">;
/**
 * Void a credit note
 *
 * Void a credit note that has been issued but not yet fully applied. This is an accounting void — it reverses the credit without creating a new financial transaction.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const creditNotesVoid: <ThrowOnError extends boolean = false>(options: Options<CreditNotesVoidData, ThrowOnError>) => RequestResult<CreditNotesVoidResponses, CreditNotesVoidErrors, ThrowOnError, "fields">;
/**
 * List line items on a credit note
 *
 * Returns the line items attached to a credit note. Each line describes a portion of the invoice that the credit applies to — either a whole invoice line or a prorated slice. Use this to reconstruct the credit's effect per invoice line (for example, when displaying the credit breakdown in your own UI).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `POST /credit_notes/preview` — Preview a credit note without creating it
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const creditNotesListLines: <ThrowOnError extends boolean = false>(options: Options<CreditNotesListLinesData, ThrowOnError>) => RequestResult<CreditNotesListLinesResponses, CreditNotesListLinesErrors, ThrowOnError, "fields">;
/**
 * Preview a credit note without creating it
 *
 * Compute what a credit note would look like against a specific invoice without persisting anything. Use this to validate amounts and show a "here's what will happen" UI before the merchant commits. No side effects — no DB writes, no events emitted, no refunds initiated. Mirrors Stripe's `POST /v1/credit_notes/preview`.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /credit_notes` — List credit notes
 * - `POST /credit_notes` — Create a credit note
 * - `GET /credit_notes/{id}` — Get credit note by ID
 * - `POST /credit_notes/{id}/void` — Void a credit note
 * - `GET /credit_notes/invoice/{invoice_id}/eligibility` — Check credit note eligibility for an invoice
 * - `GET /credit_notes/transaction/{transaction_id}/reversal-eligibility` — Check reversal eligibility for a transaction
 * - `GET /credit_notes/{id}/lines` — List line items on a credit note
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const creditNotesPreview: <ThrowOnError extends boolean = false>(options: Options<CreditNotesPreviewData, ThrowOnError>) => RequestResult<CreditNotesPreviewResponses, CreditNotesPreviewErrors, ThrowOnError, "fields">;
/**
 * List payment links
 *
 * List payment links for the authenticated merchant with pagination and filters
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const paymentLinksList: <ThrowOnError extends boolean = false>(options?: Options<PaymentLinksListData, ThrowOnError>) => RequestResult<PaymentLinksListResponses, PaymentLinksListErrors, ThrowOnError, "fields">;
/**
 * Create a new payment link
 *
 * Create a new payment link for invoices, subscriptions, or custom amounts
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentLinksCreate: <ThrowOnError extends boolean = false>(options?: Options<PaymentLinksCreateData, ThrowOnError>) => RequestResult<PaymentLinksCreateResponses, PaymentLinksCreateErrors, ThrowOnError, "fields">;
/**
 * Get payment link by ID
 *
 * Retrieve a payment link by its UUID or public_id
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const paymentLinksGet: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksGetData, ThrowOnError>) => RequestResult<PaymentLinksGetResponses, PaymentLinksGetErrors, ThrowOnError, "fields">;
/**
 * Expire a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "expired"` instead.** This convenience endpoint will be removed in a future API version. Mark a payment link as expired, preventing further use.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksExpire: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksExpireData, ThrowOnError>) => RequestResult<PaymentLinksExpireResponses, PaymentLinksExpireErrors, ThrowOnError, "fields">;
/**
 * Update payment link status
 *
 * Change the status of a payment link. Active links accept payments, inactive links are temporarily disabled, and archived links are permanently disabled and cannot be reactivated.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentLinksUpdate: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksUpdateData, ThrowOnError>) => RequestResult<PaymentLinksUpdateResponses, PaymentLinksUpdateErrors, ThrowOnError, "fields">;
/**
 * Deactivate a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "inactive"` instead.** This convenience endpoint will be removed in a future API version. Temporarily disable a payment link. It can be reactivated later.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksDeactivate: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksDeactivateData, ThrowOnError>) => RequestResult<PaymentLinksDeactivateResponses, PaymentLinksDeactivateErrors, ThrowOnError, "fields">;
/**
 * Activate a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "active"` instead.** This convenience endpoint will be removed in a future API version. Enable a payment link to accept payments. Cannot be used on archived links.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/archive` — Archive a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksActivate: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksActivateData, ThrowOnError>) => RequestResult<PaymentLinksActivateResponses, PaymentLinksActivateErrors, ThrowOnError, "fields">;
/**
 * Archive a payment link (deprecated)
 *
 * **Deprecated — use `PATCH /v2/payment-links/{id}/status` with `status: "archived"` instead.** This convenience endpoint will be removed in a future API version. Permanently disable a payment link. This action cannot be undone.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-links` — Create a new payment link
 * - `GET /payment-links` — List payment links
 * - `GET /payment-links/{id}` — Get payment link by ID
 * - `POST /payment-links/{id}/expire` — Expire a payment link (deprecated)
 * - `PATCH /payment-links/{id}/status` — Update payment link status
 * - `POST /payment-links/{id}/deactivate` — Deactivate a payment link (deprecated)
 * - `POST /payment-links/{id}/activate` — Activate a payment link (deprecated)
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 *
 * @deprecated
 */
declare const paymentLinksArchive: <ThrowOnError extends boolean = false>(options: Options<PaymentLinksArchiveData, ThrowOnError>) => RequestResult<PaymentLinksArchiveResponses, PaymentLinksArchiveErrors, ThrowOnError, "fields">;
/**
 * Get merchant billing overview
 *
 * Return overdue invoices, subscriptions in dunning, and high-signal usage invoices for the authenticated merchant. Use this instead of chaining invoices_list + subscriptions_list_in_dunning.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /billing/preview` — Generate billing schedule preview
 * - `GET /billing/intervals` — Get billing intervals
 * - `GET /billing/anchor-rules` — Get billing anchor rules
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 */
declare const billingOverviewGet: <ThrowOnError extends boolean = false>(options?: Options<BillingOverviewGetData, ThrowOnError>) => RequestResult<BillingOverviewGetResponses, BillingOverviewGetErrors, ThrowOnError, "fields">;
/**
 * List prices
 *
 * List all prices for the authenticated merchant. Supports filtering and cursor-based pagination.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /prices` — Create a price
 * - `GET /prices/{id}` — Retrieve a price
 * - `PATCH /prices/{id}` — Update a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const pricesList: <ThrowOnError extends boolean = false>(options?: Options<PricesListData, ThrowOnError>) => RequestResult<PricesListResponses, PricesListErrors, ThrowOnError, "fields">;
/**
 * Create a price
 *
 * Creates a new price for a product. Supports fixed, pay-what-you-want, and free pricing models.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `GET /prices/{id}` — Retrieve a price
 * - `PATCH /prices/{id}` — Update a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesCreate: <ThrowOnError extends boolean = false>(options: Options<PricesCreateData, ThrowOnError>) => RequestResult<PricesCreateResponses, PricesCreateErrors, ThrowOnError, "fields">;
/**
 * Archive a price
 *
 * Archives a price by setting active to false. The price remains in the system but cannot be used for new purchases.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `POST /prices` — Create a price
 * - `GET /prices/{id}` — Retrieve a price
 * - `PATCH /prices/{id}` — Update a price
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesArchive: <ThrowOnError extends boolean = false>(options: Options<PricesArchiveData, ThrowOnError>) => RequestResult<PricesArchiveResponses, PricesArchiveErrors, ThrowOnError, "fields">;
/**
 * Retrieve a price
 *
 * Retrieves a price by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `POST /prices` — Create a price
 * - `PATCH /prices/{id}` — Update a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const pricesGet: <ThrowOnError extends boolean = false>(options: Options<PricesGetData, ThrowOnError>) => RequestResult<PricesGetResponses, PricesGetErrors, ThrowOnError, "fields">;
/**
 * Update a price
 *
 * Updates a price. Only certain fields can be updated (active, name, nickname, lookup_key, metadata). Core pricing fields are immutable.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /prices` — List prices
 * - `POST /prices` — Create a price
 * - `GET /prices/{id}` — Retrieve a price
 * - `DELETE /prices/{id}` — Archive a price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesUpdate: <ThrowOnError extends boolean = false>(options: Options<PricesUpdateData, ThrowOnError>) => RequestResult<PricesUpdateResponses, PricesUpdateErrors, ThrowOnError, "fields">;
/**
 * List meters
 *
 * List all usage meters with optional filtering and pagination.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /meters` — Create a meter
 * - `GET /meters/{id}/quantities` — Get meter quantities
 * - `GET /meters/{id}` — Get a meter
 * - `PATCH /meters/{id}` — Update a meter
 * - `POST /meters/{meterId}/prices` — Create a meter price
 * - `GET /meters/{meterId}/prices` — List meter prices
 * - `PATCH /meters/{meterId}/prices/{priceId}` — Update a meter price
 * - `POST /meters/{meterId}/prices/{priceId}/deactivate` — Deactivate a meter price
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const metersList: <ThrowOnError extends boolean = false>(options?: Options<MetersListData, ThrowOnError>) => RequestResult<MetersListResponses, MetersListErrors, ThrowOnError, "fields">;
/**
 * Create a meter
 *
 * Create a new usage meter. Meters define how usage events are aggregated for billing.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /meters` — List meters
 * - `GET /meters/{id}/quantities` — Get meter quantities
 * - `GET /meters/{id}` — Get a meter
 * - `PATCH /meters/{id}` — Update a meter
 * - `POST /meters/{meterId}/prices` — Create a meter price
 * - `GET /meters/{meterId}/prices` — List meter prices
 * - `PATCH /meters/{meterId}/prices/{priceId}` — Update a meter price
 * - `POST /meters/{meterId}/prices/{priceId}/deactivate` — Deactivate a meter price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const metersCreate: <ThrowOnError extends boolean = false>(options?: Options<MetersCreateData, ThrowOnError>) => RequestResult<MetersCreateResponses, MetersCreateErrors, ThrowOnError, "fields">;
/**
 * Get meter quantities
 *
 * Get bucketed quantities for a meter over a time period. Timestamps are UTC. Polar-compatible query names (`start_timestamp`, `end_timestamp`, `interval`) are required.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /meters` — List meters
 * - `POST /meters` — Create a meter
 * - `GET /meters/{id}` — Get a meter
 * - `PATCH /meters/{id}` — Update a meter
 * - `POST /meters/{meterId}/prices` — Create a meter price
 * - `GET /meters/{meterId}/prices` — List meter prices
 * - `PATCH /meters/{meterId}/prices/{priceId}` — Update a meter price
 * - `POST /meters/{meterId}/prices/{priceId}/deactivate` — Deactivate a meter price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const metersQuantities: <ThrowOnError extends boolean = false>(options: Options<MetersQuantitiesData, ThrowOnError>) => RequestResult<MetersQuantitiesResponses, MetersQuantitiesErrors, ThrowOnError, "fields">;
/**
 * Get a meter
 *
 * Retrieve a single meter by ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /meters` — List meters
 * - `POST /meters` — Create a meter
 * - `GET /meters/{id}/quantities` — Get meter quantities
 * - `PATCH /meters/{id}` — Update a meter
 * - `POST /meters/{meterId}/prices` — Create a meter price
 * - `GET /meters/{meterId}/prices` — List meter prices
 * - `PATCH /meters/{meterId}/prices/{priceId}` — Update a meter price
 * - `POST /meters/{meterId}/prices/{priceId}/deactivate` — Deactivate a meter price
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const metersGet: <ThrowOnError extends boolean = false>(options: Options<MetersGetData, ThrowOnError>) => RequestResult<MetersGetResponses, MetersGetErrors, ThrowOnError, "fields">;
/**
 * Update a meter
 *
 * Update a meter's configuration. Note: `event_name` and `aggregation` are immutable after creation.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /meters` — List meters
 * - `POST /meters` — Create a meter
 * - `GET /meters/{id}/quantities` — Get meter quantities
 * - `GET /meters/{id}` — Get a meter
 * - `POST /meters/{meterId}/prices` — Create a meter price
 * - `GET /meters/{meterId}/prices` — List meter prices
 * - `PATCH /meters/{meterId}/prices/{priceId}` — Update a meter price
 * - `POST /meters/{meterId}/prices/{priceId}/deactivate` — Deactivate a meter price
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const metersUpdate: <ThrowOnError extends boolean = false>(options: Options<MetersUpdateData, ThrowOnError>) => RequestResult<MetersUpdateResponses, MetersUpdateErrors, ThrowOnError, "fields">;
/**
 * List usage events for an invoice line
 *
 * Trace a usage invoice line back to the billing entries, meter matches, and events that produced it (REV-6228). FK-driven; does not re-rate from live prices.
 *
 * ---
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const invoiceLineItemsListUsageEvents: <ThrowOnError extends boolean = false>(options: Options<InvoiceLineItemsListUsageEventsData, ThrowOnError>) => RequestResult<InvoiceLineItemsListUsageEventsResponses, InvoiceLineItemsListUsageEventsErrors, ThrowOnError, "fields">;
/**
 * Create an accounting-led invoice payment request
 *
 * Claims or reuses an ExternalAccountingInvoicePaymentRequest and mints a provider-neutral checkout session. Does not create a RevKeen invoice. Requires Idempotency-Key.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /integrations/accounting/invoice-payment-requests/{id}` — Get an accounting-led invoice payment request
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const accountingInvoicePaymentRequestsCreate: <ThrowOnError extends boolean = false>(options?: Options<AccountingInvoicePaymentRequestsCreateData, ThrowOnError>) => RequestResult<AccountingInvoicePaymentRequestsCreateResponses, AccountingInvoicePaymentRequestsCreateErrors, ThrowOnError, "fields">;
/**
 * Get an accounting-led invoice payment request
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /integrations/accounting/invoice-payment-requests` — Create an accounting-led invoice payment request
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const accountingInvoicePaymentRequestsGet: <ThrowOnError extends boolean = false>(options: Options<AccountingInvoicePaymentRequestsGetData, ThrowOnError>) => RequestResult<AccountingInvoicePaymentRequestsGetResponses, AccountingInvoicePaymentRequestsGetErrors, ThrowOnError, "fields">;
/**
 * List webhook endpoints
 *
 * List all webhook endpoints for the authenticated merchant. Supports filtering by status and pagination.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const webhookEndpointsList: <ThrowOnError extends boolean = false>(options?: Options<WebhookEndpointsListData, ThrowOnError>) => RequestResult<WebhookEndpointsListResponses, WebhookEndpointsListErrors, ThrowOnError, "fields">;
/**
 * Create webhook endpoint
 *
 * Create a webhook endpoint to receive event notifications at the given URL. Returns the endpoint with its signing secret — store the secret securely, it is only shown once.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsCreate: <ThrowOnError extends boolean = false>(options?: Options<WebhookEndpointsCreateData, ThrowOnError>) => RequestResult<WebhookEndpointsCreateResponses, WebhookEndpointsCreateErrors, ThrowOnError, "fields">;
/**
 * Delete webhook endpoint
 *
 * Permanently delete a webhook endpoint and all its event subscriptions.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsDelete: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsDeleteData, ThrowOnError>) => RequestResult<WebhookEndpointsDeleteResponses, WebhookEndpointsDeleteErrors, ThrowOnError, "fields">;
/**
 * Get webhook endpoint
 *
 * Retrieve a single webhook endpoint by ID, including delivery statistics.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const webhookEndpointsGet: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsGetData, ThrowOnError>) => RequestResult<WebhookEndpointsGetResponses, WebhookEndpointsGetErrors, ThrowOnError, "fields">;
/**
 * Update webhook endpoint
 *
 * Update a webhook endpoint's URL, subscribed events, description, or enabled status.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 * - `POST /webhook-endpoints/{id}/rotate-secret` — Rotate signing secret
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsUpdate: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsUpdateData, ThrowOnError>) => RequestResult<WebhookEndpointsUpdateResponses, WebhookEndpointsUpdateErrors, ThrowOnError, "fields">;
/**
 * Rotate signing secret
 *
 * Generate a new signing secret for a webhook endpoint. The old secret is immediately invalidated. Store the new secret securely — it is only returned in this response.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-endpoints` — List webhook endpoints
 * - `POST /webhook-endpoints` — Create webhook endpoint
 * - `GET /webhook-endpoints/{id}` — Get webhook endpoint
 * - `PATCH /webhook-endpoints/{id}` — Update webhook endpoint
 * - `DELETE /webhook-endpoints/{id}` — Delete webhook endpoint
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookEndpointsRotateSecret: <ThrowOnError extends boolean = false>(options: Options<WebhookEndpointsRotateSecretData, ThrowOnError>) => RequestResult<WebhookEndpointsRotateSecretResponses, WebhookEndpointsRotateSecretErrors, ThrowOnError, "fields">;
/**
 * List webhook deliveries
 *
 * List individual webhook delivery attempts across all endpoints for the authenticated merchant. Use filters to scope to a specific endpoint, a specific event, or a specific delivery status. Results are returned in reverse chronological order.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-deliveries/{id}` — Retrieve a webhook delivery
 * - `POST /webhook-deliveries/{id}/retry` — Retry a webhook delivery
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const webhookDeliveriesList: <ThrowOnError extends boolean = false>(options?: Options<WebhookDeliveriesListData, ThrowOnError>) => RequestResult<WebhookDeliveriesListResponses, WebhookDeliveriesListErrors, ThrowOnError, "fields">;
/**
 * Retrieve a webhook delivery
 *
 * Retrieve the details of a single webhook delivery including its last attempt outcome.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-deliveries` — List webhook deliveries
 * - `POST /webhook-deliveries/{id}/retry` — Retry a webhook delivery
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const webhookDeliveriesGet: <ThrowOnError extends boolean = false>(options: Options<WebhookDeliveriesGetData, ThrowOnError>) => RequestResult<WebhookDeliveriesGetResponses, WebhookDeliveriesGetErrors, ThrowOnError, "fields">;
/**
 * Retry a webhook delivery
 *
 * Queue an immediate retry of this delivery. The delivery is marked `pending` and `next_retry_at` is set to now; the dispatcher picks it up on its next tick. Calling retry on an already-pending delivery just advances its retry time. Dead-lettered deliveries can be retried once; succeeded deliveries cannot.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /webhook-deliveries` — List webhook deliveries
 * - `GET /webhook-deliveries/{id}` — Retrieve a webhook delivery
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const webhookDeliveriesRetry: <ThrowOnError extends boolean = false>(options: Options<WebhookDeliveriesRetryData, ThrowOnError>) => RequestResult<WebhookDeliveriesRetryResponses, WebhookDeliveriesRetryErrors, ThrowOnError, "fields">;
/**
 * Create a customer-portal session
 *
 * Mint a short-lived bearer token that authenticates a specific customer against /v2/customer-portal*. Returns an opaque `rkcps_...` token that expires in 60 minutes by default. Call this server-side from the merchant's backend, then hand the token to the customer's browser or embedded client. Treat the token like a password — never log it and never expose it to untrusted code.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalSessionsCreate: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalSessionsCreateData, ThrowOnError>) => RequestResult<CustomerPortalSessionsCreateResponses, CustomerPortalSessionsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve the authenticated customer
 *
 * Returns the customer represented by the bearer token. Useful as a warm-up / identity check when an embedded portal page loads.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerPortalCustomerGet: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalCustomerGetData, ThrowOnError>) => RequestResult<CustomerPortalCustomerGetResponses, CustomerPortalCustomerGetErrors, ThrowOnError, "fields">;
/**
 * List the authenticated customer's subscriptions
 *
 * Returns subscriptions where the customer is the subscriber. Results are reverse-chronological by creation time and paginate via `starting_after` / `ending_before` cursors.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerPortalSubscriptionsList: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalSubscriptionsListData, ThrowOnError>) => RequestResult<CustomerPortalSubscriptionsListResponses, CustomerPortalSubscriptionsListErrors, ThrowOnError, "fields">;
/**
 * Retrieve a subscription
 *
 * Returns a subscription owned by the authenticated customer. 404s on cross-customer access even if the subscription exists.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerPortalSubscriptionsGet: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalSubscriptionsGetData, ThrowOnError>) => RequestResult<CustomerPortalSubscriptionsGetResponses, CustomerPortalSubscriptionsGetErrors, ThrowOnError, "fields">;
/**
 * Cancel a subscription
 *
 * Cancel a subscription owned by the authenticated customer. By default the subscription is scheduled to cancel at the end of the current billing period — set `cancel_at_period_end=false` to cancel immediately. Idempotent — cancelling an already-canceled subscription is a no-op that returns the current state.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalSubscriptionsCancel: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalSubscriptionsCancelData, ThrowOnError>) => RequestResult<CustomerPortalSubscriptionsCancelResponses, CustomerPortalSubscriptionsCancelErrors, ThrowOnError, "fields">;
/**
 * List the authenticated customer's invoices
 *
 * Returns invoices owned by the authenticated customer, reverse-chronological by `invoice_date`. Use the same `starting_after`/`ending_before` cursor pattern as subscriptions.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerPortalInvoicesList: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalInvoicesListData, ThrowOnError>) => RequestResult<CustomerPortalInvoicesListResponses, CustomerPortalInvoicesListErrors, ThrowOnError, "fields">;
/**
 * Retrieve an invoice
 *
 * Returns an invoice owned by the authenticated customer.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerPortalInvoicesGet: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalInvoicesGetData, ThrowOnError>) => RequestResult<CustomerPortalInvoicesGetResponses, CustomerPortalInvoicesGetErrors, ThrowOnError, "fields">;
/**
 * List the authenticated customer's Direct Debit mandates
 *
 * Returns the customer's Direct Debit mandates (status, masked account, next collection date). Requires the merchant to have portal DD self-service enabled.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `POST /customer-portal/mandates/{id}/re-authorize` — Re-authorise a Direct Debit mandate with new bank details
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerPortalMandatesList: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalMandatesListData, ThrowOnError>) => RequestResult<CustomerPortalMandatesListResponses, CustomerPortalMandatesListErrors, ThrowOnError, "fields">;
/**
 * Re-authorise a Direct Debit mandate with new bank details
 *
 * Updates the existing provider customer with new bank details and returns the mandate to pending while the fresh Bacs instruction is lodged. Requires portal DD self-service.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalMandatesReauthorize: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalMandatesReauthorizeData, ThrowOnError>) => RequestResult<CustomerPortalMandatesReauthorizeResponses, CustomerPortalMandatesReauthorizeErrors, ThrowOnError, "fields">;
/**
 * Cancel a Direct Debit mandate
 *
 * Cancels the mandate for future collections only. Requires portal DD self-service. Bank changes affect future only (per approved V13 mockup).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalMandatesCancel: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalMandatesCancelData, ThrowOnError>) => RequestResult<CustomerPortalMandatesCancelResponses, CustomerPortalMandatesCancelErrors, ThrowOnError, "fields">;
/**
 * Send a step-up OTP for a Direct Debit bank-detail change
 *
 * Emails the customer a one-time code that must be verified (verify-otp) before a change-of-bank can be submitted.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalMandatesReauthorizeSendOtp: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalMandatesReauthorizeSendOtpData, ThrowOnError>) => RequestResult<CustomerPortalMandatesReauthorizeSendOtpResponses, CustomerPortalMandatesReauthorizeSendOtpErrors, ThrowOnError, "fields">;
/**
 * Verify a step-up OTP and receive a change-of-bank token
 *
 * Verifies the one-time code and returns a short-lived verification_token bound to this customer, the change-bank action, and this mandate. Pass it to re-authorize.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /customer-portal/sessions` — Create a customer-portal session
 * - `GET /customer-portal/customer` — Retrieve the authenticated customer
 * - `GET /customer-portal/subscriptions` — List the authenticated customer's subscriptions
 * - `GET /customer-portal/subscriptions/{id}` — Retrieve a subscription
 * - `POST /customer-portal/subscriptions/{id}/cancel` — Cancel a subscription
 * - `GET /customer-portal/invoices` — List the authenticated customer's invoices
 * - `GET /customer-portal/invoices/{id}` — Retrieve an invoice
 * - `GET /customer-portal/mandates` — List the authenticated customer's Direct Debit mandates
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalMandatesReauthorizeVerifyOtp: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalMandatesReauthorizeVerifyOtpData, ThrowOnError>) => RequestResult<CustomerPortalMandatesReauthorizeVerifyOtpResponses, CustomerPortalMandatesReauthorizeVerifyOtpErrors, ThrowOnError, "fields">;
/**
 * List a customer's meter usage
 *
 * Returns per-meter aggregates for a single customer. Requires a `customer_id` query parameter. For each meter the merchant has defined, the response includes the aggregate quantity (applying the meter's native aggregation function), the event count, and the most recent event timestamp.
 *
 * Use this to render a customer's current consumption snapshot in your own UI — for example, a usage dashboard showing "4,820 / 10,000 requests this period".
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customer-meters/{customer_id}/{meter_id}` — Retrieve a customer-meter aggregate
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerMetersList: <ThrowOnError extends boolean = false>(options: Options<CustomerMetersListData, ThrowOnError>) => RequestResult<CustomerMetersListResponses, CustomerMetersListErrors, ThrowOnError, "fields">;
/**
 * Retrieve a customer-meter aggregate
 *
 * Returns a single customer-meter aggregate for the specified customer + meter pair. Returns 404 only if the meter itself does not exist on the merchant — if the meter exists but the customer has zero events, the response returns an aggregate with `total_quantity: 0`, `event_count: 0`, `last_event_at: null`.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customer-meters` — List a customer's meter usage
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const customerMetersGet: <ThrowOnError extends boolean = false>(options: Options<CustomerMetersGetData, ThrowOnError>) => RequestResult<CustomerMetersGetResponses, CustomerMetersGetErrors, ThrowOnError, "fields">;
/**
 * List payment intents
 *
 * Returns a list of payment intents with optional filtering.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const paymentIntentsList: <ThrowOnError extends boolean = false>(options?: Options<PaymentIntentsListData, ThrowOnError>) => RequestResult<PaymentIntentsListResponses, PaymentIntentsListErrors, ThrowOnError, "fields">;
/**
 * Create a payment intent
 *
 * Creates a payment intent to orchestrate payment collection with support for 3DS/SCA authentication.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsCreate: <ThrowOnError extends boolean = false>(options?: Options<PaymentIntentsCreateData, ThrowOnError>) => RequestResult<PaymentIntentsCreateResponses, PaymentIntentsCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve a payment intent
 *
 * Retrieves a payment intent by its ID (pi_xxx).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const paymentIntentsGet: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsGetData, ThrowOnError>) => RequestResult<PaymentIntentsGetResponses, PaymentIntentsGetErrors, ThrowOnError, "fields">;
/**
 * Confirm a payment intent
 *
 * Confirms the payment intent. May return requires_action if 3DS authentication is needed.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsConfirm: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsConfirmData, ThrowOnError>) => RequestResult<PaymentIntentsConfirmResponses, PaymentIntentsConfirmErrors, ThrowOnError, "fields">;
/**
 * Capture a payment intent
 *
 * Captures a payment intent that was created with capture_method=manual.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/cancel` — Cancel a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsCapture: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsCaptureData, ThrowOnError>) => RequestResult<PaymentIntentsCaptureResponses, PaymentIntentsCaptureErrors, ThrowOnError, "fields">;
/**
 * Cancel a payment intent
 *
 * Cancels a payment intent. Cannot cancel if already succeeded or canceled.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /payment-intents` — Create a payment intent
 * - `GET /payment-intents` — List payment intents
 * - `GET /payment-intents/{id}` — Retrieve a payment intent
 * - `POST /payment-intents/{id}` — Update a payment intent
 * - `POST /payment-intents/{id}/confirm` — Confirm a payment intent
 * - `POST /payment-intents/{id}/capture` — Capture a payment intent
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const paymentIntentsCancel: <ThrowOnError extends boolean = false>(options: Options<PaymentIntentsCancelData, ThrowOnError>) => RequestResult<PaymentIntentsCancelResponses, PaymentIntentsCancelErrors, ThrowOnError, "fields">;
/**
 * List events
 *
 * Returns a list of events with optional filters. Events are returned in reverse chronological order.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /events/{id}` — Retrieve an event
 * - `POST /events/{id}/resend` — Resend webhook for an event
 * - `POST /events/test` — Create a test event
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const eventsList: <ThrowOnError extends boolean = false>(options?: Options<EventsListData, ThrowOnError>) => RequestResult<EventsListResponses, EventsListErrors, ThrowOnError, "fields">;
/**
 * Retrieve an event
 *
 * Retrieves the details of an event by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /events` — List events
 * - `POST /events/{id}/resend` — Resend webhook for an event
 * - `POST /events/test` — Create a test event
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const eventsGet: <ThrowOnError extends boolean = false>(options: Options<EventsGetData, ThrowOnError>) => RequestResult<EventsGetResponses, EventsGetErrors, ThrowOnError, "fields">;
/**
 * Resend webhook for an event
 *
 * Queues the event to be resent to all configured webhook endpoints.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /events` — List events
 * - `GET /events/{id}` — Retrieve an event
 * - `POST /events/test` — Create a test event
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const eventsResend: <ThrowOnError extends boolean = false>(options: Options<EventsResendData, ThrowOnError>) => RequestResult<EventsResendResponses, EventsResendErrors, ThrowOnError, "fields">;
/**
 * Query usage events
 *
 * List usage events with optional filters. Returns up to 100 events per request.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /usage-events` — Ingest usage events
 * - `POST /usage-events/dry-run` — Dry-run usage events
 * - `GET /usage-events/aggregate/{meterId}` — Get aggregated usage
 * - `GET /usage-events/{id}` — Get a usage event
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const usageEventsList: <ThrowOnError extends boolean = false>(options?: Options<UsageEventsListData, ThrowOnError>) => RequestResult<UsageEventsListResponses, UsageEventsListErrors, ThrowOnError, "fields">;
/**
 * Ingest usage events
 *
 * Send usage events for billing. Accepts a single event or a batch of up to 1000 events.
 *
 * **Single event:** Send the event object directly in the request body.
 * **Batch:** Wrap events in an `events` array.
 *
 * Events are matched to meters by `name` (event name) or `meter_id`. At least one of `customer_id`, `external_customer_id`, or `subscription_id` is required.
 *
 * **Idempotency:** provide `idempotency_key` per event. The key is unique per merchant forever; repeats return `duplicate` and do not create another billable event.
 *
 * **Attribution:** prefer `external_customer_id` when your system owns customer identifiers. Unknown external IDs fail fast instead of creating orphan usage.
 *
 * **Currency:** each subscription has one currency. Usage attributed to that subscription is interpreted in that currency; RevKeen does not perform FX conversion in the metering layer.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /usage-events` — Query usage events
 * - `POST /usage-events/dry-run` — Dry-run usage events
 * - `GET /usage-events/aggregate/{meterId}` — Get aggregated usage
 * - `GET /usage-events/{id}` — Get a usage event
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const usageEventsIngest: <ThrowOnError extends boolean = false>(options?: Options<UsageEventsIngestData, ThrowOnError>) => RequestResult<UsageEventsIngestResponses, UsageEventsIngestErrors, ThrowOnError, "fields">;
/**
 * Get a usage event
 *
 * Retrieve a single usage event by ID. Unknown ids and ids that belong to another merchant both return 404 — the lookup is merchant-scoped under RLS.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /usage-events` — Ingest usage events
 * - `GET /usage-events` — Query usage events
 * - `POST /usage-events/dry-run` — Dry-run usage events
 * - `GET /usage-events/aggregate/{meterId}` — Get aggregated usage
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const usageEventsGet: <ThrowOnError extends boolean = false>(options: Options<UsageEventsGetData, ThrowOnError>) => RequestResult<UsageEventsGetResponses, UsageEventsGetErrors, ThrowOnError, "fields">;
/**
 * Get current usage balance
 *
 * Returns the current usage balance for a customer or subscription in the active billing period. Shows per-meter breakdown with included allowance, overage, estimated charges, and margin data. A subscription has one currency; metered usage attributed to the subscription is assumed to be in that same currency. RevKeen does not perform FX conversion in the metering layer.
 *
 * ---
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 */
declare const usageBalanceGet: <ThrowOnError extends boolean = false>(options?: Options<UsageBalanceGetData, ThrowOnError>) => RequestResult<UsageBalanceGetResponses, UsageBalanceGetErrors, ThrowOnError, "fields">;
/**
 * List entitlements
 *
 * Retrieve all entitlements for a customer. Pass `customer_id` as a query parameter. Includes computed access status based on subscription state.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/entitlements` — List customer entitlements
 * - `POST /customers/{customerId}/entitlements` — Grant entitlement to customer
 * - `DELETE /customers/{customerId}/entitlements` — Revoke entitlement by benefit key
 * - `GET /customers/{customerId}/entitlements/check` — Check customer entitlement
 * - `DELETE /customers/{customerId}/entitlements/{entitlementId}` — Revoke entitlement by ID
 * - `GET /entitlements/check` — Check entitlement access
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const entitlementsList: <ThrowOnError extends boolean = false>(options: Options<EntitlementsListData, ThrowOnError>) => RequestResult<EntitlementsListResponses, EntitlementsListErrors, ThrowOnError, "fields">;
/**
 * Check entitlement access
 *
 * Check if a customer has access to a specific benefit by key. This is the primary endpoint for feature gating and licensing checks.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /customers/{customerId}/entitlements` — List customer entitlements
 * - `POST /customers/{customerId}/entitlements` — Grant entitlement to customer
 * - `DELETE /customers/{customerId}/entitlements` — Revoke entitlement by benefit key
 * - `GET /customers/{customerId}/entitlements/check` — Check customer entitlement
 * - `DELETE /customers/{customerId}/entitlements/{entitlementId}` — Revoke entitlement by ID
 * - `GET /entitlements` — List entitlements
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const entitlementsCheck: <ThrowOnError extends boolean = false>(options: Options<EntitlementsCheckData, ThrowOnError>) => RequestResult<EntitlementsCheckResponses, EntitlementsCheckErrors, ThrowOnError, "fields">;
/**
 * List transactions
 *
 * List all transactions for the authenticated merchant. Transactions represent the unified financial truth — every sale, refund, void, capture, dispute, and adjustment.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /transactions/{id}` — Get transaction by ID
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const transactionsList: <ThrowOnError extends boolean = false>(options?: Options<TransactionsListData, ThrowOnError>) => RequestResult<TransactionsListResponses, TransactionsListErrors, ThrowOnError, "fields">;
/**
 * Get transaction by ID
 *
 * Retrieve a single transaction by its ID.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /transactions` — List transactions
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const transactionsGet: <ThrowOnError extends boolean = false>(options: Options<TransactionsGetData, ThrowOnError>) => RequestResult<TransactionsGetResponses, TransactionsGetErrors, ThrowOnError, "fields">;
/**
 * Look up a pending signed mandate request
 *
 * Public lookup of a pending signed mandate request by its emailed token. Rate-limited; returns 404 for unknown, consumed, cancelled, or expired tokens.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /dd/validate` — Validate a UK bank account for Direct Debit
 * - `POST /dd/preview` — Preview the Direct Debit collection date chain
 *
 * **Common errors**
 *
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `429 rate_limit_error` — code `rate_limit_exceeded`. Back off using the `Retry-After` header (whole seconds); `X-RateLimit-Reset` is a UNIX timestamp in seconds.
 */
declare const ddMandateRequestsGet: <ThrowOnError extends boolean = false>(options: Options<DdMandateRequestsGetData, ThrowOnError>) => RequestResult<DdMandateRequestsGetResponses, DdMandateRequestsGetErrors, ThrowOnError, "fields">;
/**
 * Validate a UK bank account for Direct Debit
 *
 * Validates UK bank account details (sort code + account number) for Direct Debit eligibility with the bureau.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /dd/mandate-requests/{token}` — Look up a pending signed mandate request
 * - `POST /dd/preview` — Preview the Direct Debit collection date chain
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const ddValidate: <ThrowOnError extends boolean = false>(options?: Options<DdValidateData, ThrowOnError>) => RequestResult<DdValidateResponses, DdValidateErrors, ThrowOnError, "fields">;
/**
 * Preview the Direct Debit collection date chain
 *
 * Returns the backend-owned working-day date chain (advance notice → submission → collection → settlement) for a Direct Debit collection. Clients never compute these dates.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /dd/mandate-requests/{token}` — Look up a pending signed mandate request
 * - `POST /dd/validate` — Validate a UK bank account for Direct Debit
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const ddPreview: <ThrowOnError extends boolean = false>(options?: Options<DdPreviewData, ThrowOnError>) => RequestResult<DdPreviewResponses, DdPreviewErrors, ThrowOnError, "fields">;
/**
 * List Direct Debit mandates
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /mandates` — Create a Direct Debit mandate
 * - `GET /mandates/{id}` — Retrieve a Direct Debit mandate
 * - `POST /mandates/{id}/cancel` — Cancel a Direct Debit mandate
 * - `POST /mandates/{id}/suspend` — Suspend a Direct Debit mandate
 * - `POST /mandates/{id}/reinstate` — Reinstate a suspended Direct Debit mandate
 * - `POST /mandates/{id}/collections` — Schedule a one-off Direct Debit collection
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const mandatesList: <ThrowOnError extends boolean = false>(options?: Options<MandatesListData, ThrowOnError>) => RequestResult<MandatesListResponses, MandatesListErrors, ThrowOnError, "fields">;
/**
 * Create a Direct Debit mandate
 *
 * Creates a Direct Debit mandate for a customer. Bank details are validated with the bureau and stored KMS-encrypted; only masked values are returned.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `GET /mandates` — List Direct Debit mandates
 * - `GET /mandates/{id}` — Retrieve a Direct Debit mandate
 * - `POST /mandates/{id}/cancel` — Cancel a Direct Debit mandate
 * - `POST /mandates/{id}/suspend` — Suspend a Direct Debit mandate
 * - `POST /mandates/{id}/reinstate` — Reinstate a suspended Direct Debit mandate
 * - `POST /mandates/{id}/collections` — Schedule a one-off Direct Debit collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `410 gone` — the resource has been archived or permanently deleted.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesCreate: <ThrowOnError extends boolean = false>(options: Options<MandatesCreateData, ThrowOnError>) => RequestResult<MandatesCreateResponses, MandatesCreateErrors, ThrowOnError, "fields">;
/**
 * Retrieve a Direct Debit mandate
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /mandates` — Create a Direct Debit mandate
 * - `GET /mandates` — List Direct Debit mandates
 * - `POST /mandates/{id}/cancel` — Cancel a Direct Debit mandate
 * - `POST /mandates/{id}/suspend` — Suspend a Direct Debit mandate
 * - `POST /mandates/{id}/reinstate` — Reinstate a suspended Direct Debit mandate
 * - `POST /mandates/{id}/collections` — Schedule a one-off Direct Debit collection
 *
 * **Common errors**
 *
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 */
declare const mandatesGet: <ThrowOnError extends boolean = false>(options: Options<MandatesGetData, ThrowOnError>) => RequestResult<MandatesGetResponses, MandatesGetErrors, ThrowOnError, "fields">;
/**
 * Cancel a Direct Debit mandate
 *
 * Cancels a mandate. If it was lodged with the bureau, the London & Zurich customer is cancelled too.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /mandates` — Create a Direct Debit mandate
 * - `GET /mandates` — List Direct Debit mandates
 * - `GET /mandates/{id}` — Retrieve a Direct Debit mandate
 * - `POST /mandates/{id}/suspend` — Suspend a Direct Debit mandate
 * - `POST /mandates/{id}/reinstate` — Reinstate a suspended Direct Debit mandate
 * - `POST /mandates/{id}/collections` — Schedule a one-off Direct Debit collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesCancel: <ThrowOnError extends boolean = false>(options: Options<MandatesCancelData, ThrowOnError>) => RequestResult<MandatesCancelResponses, MandatesCancelErrors, ThrowOnError, "fields">;
/**
 * Suspend a Direct Debit mandate
 *
 * Suspends an active (or pending-lodgement) mandate.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /mandates` — Create a Direct Debit mandate
 * - `GET /mandates` — List Direct Debit mandates
 * - `GET /mandates/{id}` — Retrieve a Direct Debit mandate
 * - `POST /mandates/{id}/cancel` — Cancel a Direct Debit mandate
 * - `POST /mandates/{id}/reinstate` — Reinstate a suspended Direct Debit mandate
 * - `POST /mandates/{id}/collections` — Schedule a one-off Direct Debit collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesSuspend: <ThrowOnError extends boolean = false>(options: Options<MandatesSuspendData, ThrowOnError>) => RequestResult<MandatesSuspendResponses, MandatesSuspendErrors, ThrowOnError, "fields">;
/**
 * Reinstate a suspended Direct Debit mandate
 *
 * Reinstates a suspended mandate. This is NOT a status flip — it re-lodges the mandate to Bacs (a new AUDDIS instruction) using the securely stored bank details, then moves the mandate to pending_lodgement (REV-3123).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /mandates` — Create a Direct Debit mandate
 * - `GET /mandates` — List Direct Debit mandates
 * - `GET /mandates/{id}` — Retrieve a Direct Debit mandate
 * - `POST /mandates/{id}/cancel` — Cancel a Direct Debit mandate
 * - `POST /mandates/{id}/suspend` — Suspend a Direct Debit mandate
 * - `POST /mandates/{id}/collections` — Schedule a one-off Direct Debit collection
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesReinstate: <ThrowOnError extends boolean = false>(options: Options<MandatesReinstateData, ThrowOnError>) => RequestResult<MandatesReinstateResponses, MandatesReinstateErrors, ThrowOnError, "fields">;
/**
 * Schedule a one-off Direct Debit collection
 *
 * Schedules a one-off Bacs collection against an active mandate for an invoice or payment link. L&Z confirms the permitted collection date, the payer receives the configured regulatory advance notice first, and nothing is marked paid until the bureau confirms collection. Idempotent per source: retrying with the same sourceId returns or reconciles the same provider schedule instead of collecting twice. An invoice source must be issued and still owe money: a draft or pending_approval invoice is refused, and so are paid, void and other closed invoices (409 invoice_not_collectable at the final check before bureau submission).
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `POST /mandates` — Create a Direct Debit mandate
 * - `GET /mandates` — List Direct Debit mandates
 * - `GET /mandates/{id}` — Retrieve a Direct Debit mandate
 * - `POST /mandates/{id}/cancel` — Cancel a Direct Debit mandate
 * - `POST /mandates/{id}/suspend` — Suspend a Direct Debit mandate
 * - `POST /mandates/{id}/reinstate` — Reinstate a suspended Direct Debit mandate
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 authentication_error` — missing, invalid, expired, or revoked credential. Codes: `authentication_failed`, `invalid_api_key`, `expired_api_key`, `api_key_revoked`, `session_invalid`, `merchant_required`. Carries a `WWW-Authenticate: Bearer` challenge.
 * - `403 authorization_error` — the caller is identified but the action is denied. Codes include `insufficient_permissions`, `ip_not_allowed`, `merchant_mismatch`, and `origin_not_allowed`.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesScheduleCollection: <ThrowOnError extends boolean = false>(options: Options<MandatesScheduleCollectionData, ThrowOnError>) => RequestResult<MandatesScheduleCollectionResponses, MandatesScheduleCollectionErrors, ThrowOnError, "fields">;

export { AccountingInvoicePaymentRequestsCreateData, AccountingInvoicePaymentRequestsCreateErrors, AccountingInvoicePaymentRequestsCreateResponses, AccountingInvoicePaymentRequestsGetData, AccountingInvoicePaymentRequestsGetErrors, AccountingInvoicePaymentRequestsGetResponses, AnalyticsRevenueMrrSummaryData, AnalyticsRevenueMrrSummaryErrors, AnalyticsRevenueMrrSummaryResponses, AnalyticsRevenueTimeSeriesData, AnalyticsRevenueTimeSeriesErrors, AnalyticsRevenueTimeSeriesResponses, BillingOverviewGetData, BillingOverviewGetErrors, BillingOverviewGetResponses, CartApiKeysEnsureData, CartApiKeysEnsureErrors, CartApiKeysEnsureResponses, CartApiKeysRotateData, CartApiKeysRotateErrors, CartApiKeysRotateResponses, CartApiKeysStatusData, CartApiKeysStatusErrors, CartApiKeysStatusResponses, CartSessionsAddLineItemData, CartSessionsAddLineItemErrors, CartSessionsAddLineItemResponses, CartSessionsApplyDiscountCodeData, CartSessionsApplyDiscountCodeErrors, CartSessionsApplyDiscountCodeResponses, CartSessionsConvertData, CartSessionsConvertErrors, CartSessionsConvertResponses, CartSessionsCreateData, CartSessionsCreateErrors, CartSessionsCreateResponses, CartSessionsGetData, CartSessionsGetErrors, CartSessionsGetResponses, CartSessionsRemoveLineItemData, CartSessionsRemoveLineItemErrors, CartSessionsRemoveLineItemResponses, CartSessionsSetContactData, CartSessionsSetContactErrors, CartSessionsSetContactResponses, CartSessionsToggleAddOnData, CartSessionsToggleAddOnErrors, CartSessionsToggleAddOnResponses, CartSessionsUpdateLineItemData, CartSessionsUpdateLineItemErrors, CartSessionsUpdateLineItemResponses, CheckoutSessionsCreateData, CheckoutSessionsCreateErrors, CheckoutSessionsCreateResponses, CheckoutSessionsExpireData, CheckoutSessionsExpireErrors, CheckoutSessionsExpireResponses, CheckoutSessionsGetData, CheckoutSessionsGetErrors, CheckoutSessionsGetResponses, CreditNotesCreateData, CreditNotesCreateErrors, CreditNotesCreateResponses, CreditNotesGetData, CreditNotesGetErrors, CreditNotesGetResponses, CreditNotesListData, CreditNotesListErrors, CreditNotesListLinesData, CreditNotesListLinesErrors, CreditNotesListLinesResponses, CreditNotesListResponses, CreditNotesPreviewData, CreditNotesPreviewErrors, CreditNotesPreviewResponses, CreditNotesVoidData, CreditNotesVoidErrors, CreditNotesVoidResponses, CustomerMetersGetData, CustomerMetersGetErrors, CustomerMetersGetResponses, CustomerMetersListData, CustomerMetersListErrors, CustomerMetersListResponses, CustomerPortalCustomerGetData, CustomerPortalCustomerGetErrors, CustomerPortalCustomerGetResponses, CustomerPortalInvoicesGetData, CustomerPortalInvoicesGetErrors, CustomerPortalInvoicesGetResponses, CustomerPortalInvoicesListData, CustomerPortalInvoicesListErrors, CustomerPortalInvoicesListResponses, CustomerPortalMandatesCancelData, CustomerPortalMandatesCancelErrors, CustomerPortalMandatesCancelResponses, CustomerPortalMandatesListData, CustomerPortalMandatesListErrors, CustomerPortalMandatesListResponses, CustomerPortalMandatesReauthorizeData, CustomerPortalMandatesReauthorizeErrors, CustomerPortalMandatesReauthorizeResponses, CustomerPortalMandatesReauthorizeSendOtpData, CustomerPortalMandatesReauthorizeSendOtpErrors, CustomerPortalMandatesReauthorizeSendOtpResponses, CustomerPortalMandatesReauthorizeVerifyOtpData, CustomerPortalMandatesReauthorizeVerifyOtpErrors, CustomerPortalMandatesReauthorizeVerifyOtpResponses, CustomerPortalSessionsCreateData, CustomerPortalSessionsCreateErrors, CustomerPortalSessionsCreateResponses, CustomerPortalSubscriptionsCancelData, CustomerPortalSubscriptionsCancelErrors, CustomerPortalSubscriptionsCancelResponses, CustomerPortalSubscriptionsGetData, CustomerPortalSubscriptionsGetErrors, CustomerPortalSubscriptionsGetResponses, CustomerPortalSubscriptionsListData, CustomerPortalSubscriptionsListErrors, CustomerPortalSubscriptionsListResponses, CustomerStateGetData, CustomerStateGetErrors, CustomerStateGetResponses, CustomersCreateData, CustomersCreateErrors, CustomersCreateResponses, CustomersGetData, CustomersGetErrors, CustomersGetResponses, CustomersListData, CustomersListErrors, CustomersListResponses, CustomersPaymentMethodsListData, CustomersPaymentMethodsListErrors, CustomersPaymentMethodsListResponses, CustomersPaymentRailsGetData, CustomersPaymentRailsGetErrors, CustomersPaymentRailsGetResponses, CustomersPreferredRailsGetData, CustomersPreferredRailsGetErrors, CustomersPreferredRailsGetResponses, CustomersUpdateData, CustomersUpdateErrors, CustomersUpdateResponses, DdMandateRequestsGetData, DdMandateRequestsGetErrors, DdMandateRequestsGetResponses, DdPreviewData, DdPreviewErrors, DdPreviewResponses, DdValidateData, DdValidateErrors, DdValidateResponses, EntitlementsCheckData, EntitlementsCheckErrors, EntitlementsCheckResponses, EntitlementsListData, EntitlementsListErrors, EntitlementsListResponses, EventsGetData, EventsGetErrors, EventsGetResponses, EventsListData, EventsListErrors, EventsListResponses, EventsResendData, EventsResendErrors, EventsResendResponses, InvoiceLineItemsListUsageEventsData, InvoiceLineItemsListUsageEventsErrors, InvoiceLineItemsListUsageEventsResponses, InvoiceUsageExplainData, InvoiceUsageExplainErrors, InvoiceUsageExplainResponses, InvoicesCreateData, InvoicesCreateErrors, InvoicesCreateResponses, InvoicesFinalizeData, InvoicesFinalizeErrors, InvoicesFinalizeResponses, InvoicesGetData, InvoicesGetErrors, InvoicesGetResponses, InvoicesListData, InvoicesListErrors, InvoicesListResponses, InvoicesMarginEstimateData, InvoicesMarginEstimateErrors, InvoicesMarginEstimateResponses, InvoicesSendData, InvoicesSendErrors, InvoicesSendResponses, InvoicesUpdateData, InvoicesUpdateErrors, InvoicesUpdateResponses, InvoicesVoidData, InvoicesVoidErrors, InvoicesVoidResponses, MandatesCancelData, MandatesCancelErrors, MandatesCancelResponses, MandatesCreateData, MandatesCreateErrors, MandatesCreateResponses, MandatesGetData, MandatesGetErrors, MandatesGetResponses, MandatesListData, MandatesListErrors, MandatesListResponses, MandatesReinstateData, MandatesReinstateErrors, MandatesReinstateResponses, MandatesScheduleCollectionData, MandatesScheduleCollectionErrors, MandatesScheduleCollectionResponses, MandatesSuspendData, MandatesSuspendErrors, MandatesSuspendResponses, MetersCreateData, MetersCreateErrors, MetersCreateResponses, MetersGetData, MetersGetErrors, MetersGetResponses, MetersListData, MetersListErrors, MetersListResponses, MetersQuantitiesData, MetersQuantitiesErrors, MetersQuantitiesResponses, MetersUpdateData, MetersUpdateErrors, MetersUpdateResponses, type MinorUnits, type NormalizedRevKeenAPIError, type Options, PaymentIntentsCancelData, PaymentIntentsCancelErrors, PaymentIntentsCancelResponses, PaymentIntentsCaptureData, PaymentIntentsCaptureErrors, PaymentIntentsCaptureResponses, PaymentIntentsConfirmData, PaymentIntentsConfirmErrors, PaymentIntentsConfirmResponses, PaymentIntentsCreateData, PaymentIntentsCreateErrors, PaymentIntentsCreateResponses, PaymentIntentsGetData, PaymentIntentsGetErrors, PaymentIntentsGetResponses, PaymentIntentsListData, PaymentIntentsListErrors, PaymentIntentsListResponses, PaymentLinksActivateData, PaymentLinksActivateErrors, PaymentLinksActivateResponses, PaymentLinksArchiveData, PaymentLinksArchiveErrors, PaymentLinksArchiveResponses, PaymentLinksCreateData, PaymentLinksCreateErrors, PaymentLinksCreateResponses, PaymentLinksDeactivateData, PaymentLinksDeactivateErrors, PaymentLinksDeactivateResponses, PaymentLinksExpireData, PaymentLinksExpireErrors, PaymentLinksExpireResponses, PaymentLinksGetData, PaymentLinksGetErrors, PaymentLinksGetResponses, PaymentLinksListData, PaymentLinksListErrors, PaymentLinksListResponses, PaymentLinksUpdateData, PaymentLinksUpdateErrors, PaymentLinksUpdateResponses, PricesArchiveData, PricesArchiveErrors, PricesArchiveResponses, PricesCreateData, PricesCreateErrors, PricesCreateResponses, PricesGetData, PricesGetErrors, PricesGetResponses, PricesListData, PricesListErrors, PricesListResponses, PricesUpdateData, PricesUpdateErrors, PricesUpdateResponses, ProductCollectionsCreateData, ProductCollectionsCreateErrors, ProductCollectionsCreateResponses, ProductCollectionsDeleteData, ProductCollectionsDeleteErrors, ProductCollectionsDeleteResponses, ProductCollectionsGetData, ProductCollectionsGetErrors, ProductCollectionsGetResponses, ProductCollectionsListData, ProductCollectionsListErrors, ProductCollectionsListResponses, ProductCollectionsUpdateData, ProductCollectionsUpdateErrors, ProductCollectionsUpdateResponses, ProductsCreateData, ProductsCreateErrors, ProductsCreateResponses, ProductsGetData, ProductsGetErrors, ProductsGetResponses, ProductsListData, ProductsListErrors, ProductsListResponses, ProductsUpdateData, ProductsUpdateErrors, ProductsUpdateResponses, RefundsCreateData, RefundsCreateErrors, RefundsCreateResponses, RefundsGetData, RefundsGetErrors, RefundsGetResponses, RefundsListData, RefundsListErrors, RefundsListResponses, RevKeenAPIError, type RevKeenAPIErrorMetadata, RevKeenAuthenticationError, RevKeenAuthorizationError, RevKeenConflictError, RevKeenError, type RevKeenErrorContext, type RevKeenFetchPage, RevKeenIdempotencyConflictError, RevKeenNotFoundError, type RevKeenPaginationOptions, RevKeenPaginationStallError, RevKeenRateLimitError, type RevKeenRateLimitMetadata, RevKeenServerError, RevKeenTimeoutError, RevKeenValidationError, StorefrontOriginsCreateData, StorefrontOriginsCreateErrors, StorefrontOriginsCreateResponses, StorefrontOriginsDeleteData, StorefrontOriginsDeleteErrors, StorefrontOriginsDeleteResponses, StorefrontOriginsListData, StorefrontOriginsListErrors, StorefrontOriginsListResponses, StorefrontProductsGetData, StorefrontProductsGetErrors, StorefrontProductsGetResponses, StorefrontProductsListData, StorefrontProductsListErrors, StorefrontProductsListResponses, StorefrontStatusGetData, StorefrontStatusGetErrors, StorefrontStatusGetResponses, SubscriptionsCancelData, SubscriptionsCancelErrors, SubscriptionsCancelResponses, SubscriptionsCreateData, SubscriptionsCreateErrors, SubscriptionsCreateResponses, SubscriptionsGetData, SubscriptionsGetErrors, SubscriptionsGetResponses, SubscriptionsListData, SubscriptionsListErrors, SubscriptionsListResponses, SubscriptionsUpdateData, SubscriptionsUpdateErrors, SubscriptionsUpdateResponses, TransactionsGetData, TransactionsGetErrors, TransactionsGetResponses, TransactionsListData, TransactionsListErrors, TransactionsListResponses, UsageBalanceGetData, UsageBalanceGetErrors, UsageBalanceGetResponses, UsageEventsGetData, UsageEventsGetErrors, UsageEventsGetResponses, UsageEventsIngestData, UsageEventsIngestErrors, UsageEventsIngestResponses, UsageEventsListData, UsageEventsListErrors, UsageEventsListResponses, WebhookDeliveriesGetData, WebhookDeliveriesGetErrors, WebhookDeliveriesGetResponses, WebhookDeliveriesListData, WebhookDeliveriesListErrors, WebhookDeliveriesListResponses, WebhookDeliveriesRetryData, WebhookDeliveriesRetryErrors, WebhookDeliveriesRetryResponses, WebhookEndpointsCreateData, WebhookEndpointsCreateErrors, WebhookEndpointsCreateResponses, WebhookEndpointsDeleteData, WebhookEndpointsDeleteErrors, WebhookEndpointsDeleteResponses, WebhookEndpointsGetData, WebhookEndpointsGetErrors, WebhookEndpointsGetResponses, WebhookEndpointsListData, WebhookEndpointsListErrors, WebhookEndpointsListResponses, WebhookEndpointsRotateSecretData, WebhookEndpointsRotateSecretErrors, WebhookEndpointsRotateSecretResponses, WebhookEndpointsUpdateData, WebhookEndpointsUpdateErrors, WebhookEndpointsUpdateResponses, accountingInvoicePaymentRequestsCreate, accountingInvoicePaymentRequestsGet, analyticsRevenueMrrSummary, analyticsRevenueTimeSeries, billingOverviewGet, cartApiKeysEnsure, cartApiKeysRotate, cartApiKeysStatus, cartSessionsAddLineItem, cartSessionsApplyDiscountCode, cartSessionsConvert, cartSessionsCreate, cartSessionsGet, cartSessionsRemoveLineItem, cartSessionsSetContact, cartSessionsToggleAddOn, cartSessionsUpdateLineItem, checkoutSessionsCreate, checkoutSessionsExpire, checkoutSessionsGet, createRevKeenAPIError, creditNotesCreate, creditNotesGet, creditNotesList, creditNotesListLines, creditNotesPreview, creditNotesVoid, customerMetersGet, customerMetersList, customerPortalCustomerGet, customerPortalInvoicesGet, customerPortalInvoicesList, customerPortalMandatesCancel, customerPortalMandatesList, customerPortalMandatesReauthorize, customerPortalMandatesReauthorizeSendOtp, customerPortalMandatesReauthorizeVerifyOtp, customerPortalSessionsCreate, customerPortalSubscriptionsCancel, customerPortalSubscriptionsGet, customerPortalSubscriptionsList, customerStateGet, customersCreate, customersGet, customersList, customersPaymentMethodsList, customersPaymentRailsGet, customersPreferredRailsGet, customersUpdate, ddMandateRequestsGet, ddPreview, ddValidate, emptyRevKeenRateLimitMetadata, entitlementsCheck, entitlementsList, eventsGet, eventsList, eventsResend, invoiceLineItemsListUsageEvents, invoiceUsageExplain, invoicesCreate, invoicesFinalize, invoicesGet, invoicesList, invoicesMarginEstimate, invoicesSend, invoicesUpdate, invoicesVoid, isMinorUnits, mandatesCancel, mandatesCreate, mandatesGet, mandatesList, mandatesReinstate, mandatesScheduleCollection, mandatesSuspend, mapOptionalNullable, metersCreate, metersGet, metersList, metersQuantities, metersUpdate, minorUnits, normalizeRevKeenAPIError, paginate, parseRevKeenRateLimitMetadata, parseRfc3339, paymentIntentsCancel, paymentIntentsCapture, paymentIntentsConfirm, paymentIntentsCreate, paymentIntentsGet, paymentIntentsList, paymentLinksActivate, paymentLinksArchive, paymentLinksCreate, paymentLinksDeactivate, paymentLinksExpire, paymentLinksGet, paymentLinksList, paymentLinksUpdate, pricesArchive, pricesCreate, pricesGet, pricesList, pricesUpdate, productCollectionsCreate, productCollectionsDelete, productCollectionsGet, productCollectionsList, productCollectionsUpdate, productsCreate, productsGet, productsList, productsUpdate, refundsCreate, refundsGet, refundsList, storefrontOriginsCreate, storefrontOriginsDelete, storefrontOriginsList, storefrontProductsGet, storefrontProductsList, storefrontStatusGet, subscriptionsCancel, subscriptionsCreate, subscriptionsGet, subscriptionsList, subscriptionsUpdate, transactionsGet, transactionsList, usageBalanceGet, usageEventsGet, usageEventsIngest, usageEventsList, webhookDeliveriesGet, webhookDeliveriesList, webhookDeliveriesRetry, webhookEndpointsCreate, webhookEndpointsDelete, webhookEndpointsGet, webhookEndpointsList, webhookEndpointsRotateSecret, webhookEndpointsUpdate };
