import { A as AnalyticsRevenueMrrSummaryData, a as AnalyticsRevenueMrrSummaryResponse, b as AnalyticsRevenueTimeSeriesData, c as AnalyticsRevenueTimeSeriesResponse, C as CartApiKeysEnsureResponse, d as CartApiKeysRotateData, e as CartApiKeysRotateResponse, f as CartApiKeysStatusResponse, g as CartSessionsAddLineItemData, h as CartSessionsAddLineItemResponse, i as CartSessionsApplyDiscountCodeData, j as CartSessionsApplyDiscountCodeResponse, k as CartSessionsConvertData, l as CartSessionsConvertResponse, m as CartSessionsCreateData, n as CartSessionsCreateResponse, o as CartSessionsGetData, p as CartSessionsGetResponse, q as CartSessionsRemoveLineItemData, r as CartSessionsRemoveLineItemResponse, s as CartSessionsSetContactData, t as CartSessionsSetContactResponse, u as CartSessionsToggleAddOnData, v as CartSessionsToggleAddOnResponse, w as CartSessionsUpdateLineItemData, x as CartSessionsUpdateLineItemResponse, y as CheckoutSessionsCreateData, z as CheckoutSessionsCreateResponse, D as CheckoutSessionsExpireData, E as CheckoutSessionsExpireResponse, F as CheckoutSessionsGetData, G as CheckoutSessionsGetResponse, H as CreditNotesCreateData, I as CreditNotesCreateResponse, J as CreditNotesGetData, K as CreditNotesGetResponse, L as CreditNotesListData, M as CreditNotesListResponse, N as CreditNotesListLinesData, O as CreditNotesListLinesResponse, P as CreditNotesPreviewData, Q as CreditNotesPreviewResponse, R as CreditNotesVoidData, S as CreditNotesVoidResponse, T as CustomerMetersGetData, V as CustomerMetersGetResponse, W as CustomerMetersListData, X as CustomerMetersListResponse, Y as CustomerPortalCustomerGetResponse, Z as CustomerPortalInvoicesGetData, _ as CustomerPortalInvoicesGetResponse, $ as CustomerPortalInvoicesListData, a0 as CustomerPortalInvoicesListResponse, a1 as CustomerPortalMandatesListResponse, a2 as CustomerPortalMandatesReauthorizeData, a3 as CustomerPortalMandatesReauthorizeResponse, a4 as CustomerPortalMandatesReauthorizeSendOtpData, a5 as CustomerPortalMandatesReauthorizeSendOtpResponse, a6 as CustomerPortalMandatesReauthorizeVerifyOtpData, a7 as CustomerPortalMandatesReauthorizeVerifyOtpResponse, a8 as CustomerPortalSessionsCreateData, a9 as CustomerPortalSessionsCreateResponse, aa as CustomerPortalSubscriptionsCancelData, ab as CustomerPortalSubscriptionsCancelResponse, ac as CustomerPortalSubscriptionsGetData, ad as CustomerPortalSubscriptionsGetResponse, ae as CustomerPortalSubscriptionsListData, af as CustomerPortalSubscriptionsListResponse, ag as CustomersCreateData, ah as CustomersCreateResponse, ai as CustomersGetData, aj as CustomersGetResponse, ak as CustomersListData, al as CustomersListResponse, am as CustomersPaymentMethodsListData, an as CustomersPaymentMethodsListResponse, ao as CustomersPaymentRailsGetData, ap as CustomersPaymentRailsGetResponse, aq as CustomersPreferredRailsGetData, ar as CustomersPreferredRailsGetResponse, as as CustomersUpdateData, at as CustomersUpdateResponse, au as DdMandateRequestsGetData, av as DdMandateRequestsGetResponse, aw as DdPreviewData, ax as DdPreviewResponse, ay as DdValidateData, az as DdValidateResponse, aA as EntitlementsCheckData, aB as EntitlementsCheckResponse, aC as EntitlementsListData, aD as EntitlementsListResponse, aE as EventsGetData, aF as EventsGetResponse, aG as EventsListData, aH as EventsListResponse, aI as EventsResendData, aJ as EventsResendResponse, aK as InvoicesCreateData, aL as InvoicesCreateResponse, aM as InvoicesFinalizeData, aN as InvoicesFinalizeResponse, aO as InvoicesGetData, aP as InvoicesGetResponse, aQ as InvoicesListData, aR as InvoicesListResponse, aS as InvoicesMarginEstimateData, aT as InvoicesMarginEstimateResponse, aU as InvoicesSendData, aV as InvoicesSendResponse, aW as InvoicesUpdateData, aX as InvoicesUpdateResponse, aY as InvoicesVoidData, aZ as InvoicesVoidResponse, a_ as MandatesCancelData, a$ as MandatesCancelResponse, b0 as MandatesCreateData, b1 as MandatesCreateResponse, b2 as MandatesGetData, b3 as MandatesGetResponse, b4 as MandatesListData, b5 as MandatesListResponse, b6 as MandatesReinstateData, b7 as MandatesReinstateResponse, b8 as MandatesScheduleCollectionData, b9 as MandatesScheduleCollectionResponse, ba as MandatesSuspendData, bb as MandatesSuspendResponse, bc as PaymentIntentsCancelData, bd as PaymentIntentsCancelResponse, be as PaymentIntentsCaptureData, bf as PaymentIntentsCaptureResponse, bg as PaymentIntentsConfirmData, bh as PaymentIntentsConfirmResponse, bi as PaymentIntentsCreateData, bj as PaymentIntentsCreateResponse, bk as PaymentIntentsGetData, bl as PaymentIntentsGetResponse, bm as PaymentIntentsListData, bn as PaymentIntentsListResponse, bo as PaymentLinksActivateData, bp as PaymentLinksActivateResponse, bq as PaymentLinksArchiveData, br as PaymentLinksArchiveResponse, bs as PaymentLinksCreateData, bt as PaymentLinksCreateResponse, bu as PaymentLinksDeactivateData, bv as PaymentLinksDeactivateResponse, bw as PaymentLinksExpireData, bx as PaymentLinksExpireResponse, by as PaymentLinksGetData, bz as PaymentLinksGetResponse, bA as PaymentLinksListData, bB as PaymentLinksListResponse, bC as PaymentLinksUpdateData, bD as PaymentLinksUpdateResponse, bE as PricesArchiveData, bF as PricesArchiveResponse, bG as PricesCreateData, bH as PricesCreateResponse, bI as PricesGetData, bJ as PricesGetResponse, bK as PricesListData, bL as PricesListResponse, bM as PricesUpdateData, bN as PricesUpdateResponse, bO as ProductsCreateData, bP as ProductsCreateResponse, bQ as ProductsGetData, bR as ProductsGetResponse, bS as ProductsListData, bT as ProductsListResponse, bU as ProductsUpdateData, bV as ProductsUpdateResponse, bW as RefundsCreateData, bX as RefundsCreateResponse, bY as RefundsGetData, bZ as RefundsGetResponse, b_ as RefundsListData, b$ as RefundsListResponse, c0 as StorefrontOriginsCreateData, c1 as StorefrontOriginsCreateResponse, c2 as StorefrontOriginsDeleteData, c3 as StorefrontOriginsDeleteResponse, c4 as StorefrontOriginsListResponse, c5 as StorefrontProductsGetData, c6 as StorefrontProductsGetResponse, c7 as StorefrontProductsListData, c8 as StorefrontProductsListResponse, c9 as StorefrontStatusGetResponse, ca as SubscriptionsCancelData, cb as SubscriptionsCancelResponse, cc as SubscriptionsCreateData, cd as SubscriptionsCreateResponse, ce as SubscriptionsGetData, cf as SubscriptionsGetResponse, cg as SubscriptionsListData, ch as SubscriptionsListResponse, ci as SubscriptionsUpdateData, cj as SubscriptionsUpdateResponse, ck as TransactionsGetData, cl as TransactionsGetResponse, cm as TransactionsListData, cn as TransactionsListResponse, co as WebhookDeliveriesGetData, cp as WebhookDeliveriesGetResponse, cq as WebhookDeliveriesListData, cr as WebhookDeliveriesListResponse, cs as WebhookDeliveriesRetryData, ct as WebhookDeliveriesRetryResponse, cu as WebhookEndpointsCreateData, cv as WebhookEndpointsCreateResponse, cw as WebhookEndpointsDeleteData, cx as WebhookEndpointsDeleteResponse, cy as WebhookEndpointsGetData, cz as WebhookEndpointsGetResponse, cA as WebhookEndpointsListData, cB as WebhookEndpointsListResponse, cC as WebhookEndpointsRotateSecretData, cD as WebhookEndpointsRotateSecretResponse, cE as WebhookEndpointsUpdateData, cF as WebhookEndpointsUpdateResponse, cG as UsageIngestRequest, B as BatchIngestResult, cH as DryRunResult, cI as AnalyticsRevenueMrrSummaryResponses, cJ as AnalyticsRevenueTimeSeriesResponses, cK as CartApiKeysEnsureData, cL as CartApiKeysEnsureResponses, cM as CartApiKeysEnsureErrors, cN as CartApiKeysRotateResponses, cO as CartApiKeysRotateErrors, cP as CartApiKeysStatusData, cQ as CartApiKeysStatusResponses, cR as CartApiKeysStatusErrors, cS as CartSessionsAddLineItemResponses, cT as CartSessionsAddLineItemErrors, cU as CartSessionsApplyDiscountCodeResponses, cV as CartSessionsApplyDiscountCodeErrors, cW as CartSessionsConvertResponses, cX as CartSessionsConvertErrors, cY as CartSessionsCreateResponses, cZ as CartSessionsCreateErrors, c_ as CartSessionsGetResponses, c$ as CartSessionsGetErrors, d0 as CartSessionsRemoveLineItemResponses, d1 as CartSessionsRemoveLineItemErrors, d2 as CartSessionsSetContactResponses, d3 as CartSessionsSetContactErrors, d4 as CartSessionsToggleAddOnResponses, d5 as CartSessionsToggleAddOnErrors, d6 as CartSessionsUpdateLineItemResponses, d7 as CartSessionsUpdateLineItemErrors, d8 as CheckoutSessionsCreateResponses, d9 as CheckoutSessionsCreateErrors, da as CheckoutSessionsExpireResponses, db as CheckoutSessionsExpireErrors, dc as CheckoutSessionsGetResponses, dd as CheckoutSessionsGetErrors, de as CreditNotesCreateResponses, df as CreditNotesCreateErrors, dg as CreditNotesGetResponses, dh as CreditNotesGetErrors, di as CreditNotesListResponses, dj as CreditNotesListErrors, dk as CreditNotesListLinesResponses, dl as CreditNotesListLinesErrors, dm as CreditNotesPreviewResponses, dn as CreditNotesPreviewErrors, dp as CreditNotesVoidResponses, dq as CreditNotesVoidErrors, dr as CustomerMetersGetResponses, ds as CustomerMetersGetErrors, dt as CustomerMetersListResponses, du as CustomerMetersListErrors, dv as CustomerPortalCustomerGetData, dw as CustomerPortalCustomerGetResponses, dx as CustomerPortalCustomerGetErrors, dy as CustomerPortalInvoicesGetResponses, dz as CustomerPortalInvoicesGetErrors, dA as CustomerPortalInvoicesListResponses, dB as CustomerPortalInvoicesListErrors, dC as CustomerPortalMandatesListData, dD as CustomerPortalMandatesListResponses, dE as CustomerPortalMandatesListErrors, dF as CustomerPortalMandatesReauthorizeResponses, dG as CustomerPortalMandatesReauthorizeErrors, dH as CustomerPortalMandatesReauthorizeSendOtpResponses, dI as CustomerPortalMandatesReauthorizeSendOtpErrors, dJ as CustomerPortalMandatesReauthorizeVerifyOtpResponses, dK as CustomerPortalMandatesReauthorizeVerifyOtpErrors, dL as CustomerPortalSessionsCreateResponses, dM as CustomerPortalSessionsCreateErrors, dN as CustomerPortalSubscriptionsCancelResponses, dO as CustomerPortalSubscriptionsCancelErrors, dP as CustomerPortalSubscriptionsGetResponses, dQ as CustomerPortalSubscriptionsGetErrors, dR as CustomerPortalSubscriptionsListResponses, dS as CustomerPortalSubscriptionsListErrors, dT as CustomersCreateResponses, dU as CustomersCreateErrors, dV as CustomersGetResponses, dW as CustomersGetErrors, dX as CustomersListResponses, dY as CustomersListErrors, dZ as CustomersPaymentMethodsListResponses, d_ as CustomersPaymentMethodsListErrors, d$ as CustomersPaymentRailsGetResponses, e0 as CustomersPaymentRailsGetErrors, e1 as CustomersPreferredRailsGetResponses, e2 as CustomersPreferredRailsGetErrors, e3 as CustomersUpdateResponses, e4 as CustomersUpdateErrors, e5 as DdMandateRequestsGetResponses, e6 as DdMandateRequestsGetErrors, e7 as DdPreviewResponses, e8 as DdPreviewErrors, e9 as DdValidateResponses, ea as DdValidateErrors, eb as EntitlementsCheckResponses, ec as EntitlementsCheckErrors, ed as EntitlementsListResponses, ee as EntitlementsListErrors, ef as EventsGetResponses, eg as EventsGetErrors, eh as EventsListResponses, ei as EventsListErrors, ej as EventsResendResponses, ek as EventsResendErrors, el as InvoicesCreateResponses, em as InvoicesFinalizeResponses, en as InvoicesFinalizeErrors, eo as InvoicesGetResponses, ep as InvoicesListResponses, eq as InvoicesMarginEstimateResponses, er as InvoicesMarginEstimateErrors, es as InvoicesSendResponses, et as InvoicesSendErrors, eu as InvoicesUpdateResponses, ev as InvoicesVoidResponses, ew as InvoicesVoidErrors, ex as MandatesCancelResponses, ey as MandatesCancelErrors, ez as MandatesCreateResponses, eA as MandatesCreateErrors, eB as MandatesGetResponses, eC as MandatesGetErrors, eD as MandatesListResponses, eE as MandatesListErrors, eF as MandatesReinstateResponses, eG as MandatesReinstateErrors, eH as MandatesScheduleCollectionResponses, eI as MandatesScheduleCollectionErrors, eJ as MandatesSuspendResponses, eK as MandatesSuspendErrors, eL as PaymentIntentsCancelResponses, eM as PaymentIntentsCancelErrors, eN as PaymentIntentsCaptureResponses, eO as PaymentIntentsCaptureErrors, eP as PaymentIntentsConfirmResponses, eQ as PaymentIntentsConfirmErrors, eR as PaymentIntentsCreateResponses, eS as PaymentIntentsCreateErrors, eT as PaymentIntentsGetResponses, eU as PaymentIntentsGetErrors, eV as PaymentIntentsListResponses, eW as PaymentIntentsListErrors, eX as PaymentLinksActivateResponses, eY as PaymentLinksActivateErrors, eZ as PaymentLinksArchiveResponses, e_ as PaymentLinksArchiveErrors, e$ as PaymentLinksCreateResponses, f0 as PaymentLinksCreateErrors, f1 as PaymentLinksDeactivateResponses, f2 as PaymentLinksDeactivateErrors, f3 as PaymentLinksExpireResponses, f4 as PaymentLinksExpireErrors, f5 as PaymentLinksGetResponses, f6 as PaymentLinksGetErrors, f7 as PaymentLinksListResponses, f8 as PaymentLinksListErrors, f9 as PaymentLinksUpdateResponses, fa as PaymentLinksUpdateErrors, fb as PricesArchiveResponses, fc as PricesArchiveErrors, fd as PricesCreateResponses, fe as PricesCreateErrors, ff as PricesGetResponses, fg as PricesGetErrors, fh as PricesListResponses, fi as PricesListErrors, fj as PricesUpdateResponses, fk as PricesUpdateErrors, fl as ProductsCreateResponses, fm as ProductsCreateErrors, fn as ProductsGetResponses, fo as ProductsGetErrors, fp as ProductsListResponses, fq as ProductsListErrors, fr as ProductsUpdateResponses, fs as ProductsUpdateErrors, ft as RefundsCreateResponses, fu as RefundsCreateErrors, fv as RefundsGetResponses, fw as RefundsGetErrors, fx as RefundsListResponses, fy as RefundsListErrors, fz as StorefrontOriginsCreateResponses, fA as StorefrontOriginsCreateErrors, fB as StorefrontOriginsDeleteResponses, fC as StorefrontOriginsDeleteErrors, fD as StorefrontOriginsListData, fE as StorefrontOriginsListResponses, fF as StorefrontOriginsListErrors, fG as StorefrontProductsGetResponses, fH as StorefrontProductsGetErrors, fI as StorefrontProductsListResponses, fJ as StorefrontProductsListErrors, fK as StorefrontStatusGetData, fL as StorefrontStatusGetResponses, fM as StorefrontStatusGetErrors, fN as SubscriptionsCancelResponses, fO as SubscriptionsCancelErrors, fP as SubscriptionsCreateResponses, fQ as SubscriptionsCreateErrors, fR as SubscriptionsGetResponses, fS as SubscriptionsGetErrors, fT as SubscriptionsListResponses, fU as SubscriptionsListErrors, fV as SubscriptionsUpdateResponses, fW as SubscriptionsUpdateErrors, fX as TransactionsGetResponses, fY as TransactionsGetErrors, fZ as TransactionsListResponses, f_ as TransactionsListErrors, f$ as WebhookDeliveriesGetResponses, g0 as WebhookDeliveriesGetErrors, g1 as WebhookDeliveriesListResponses, g2 as WebhookDeliveriesListErrors, g3 as WebhookDeliveriesRetryResponses, g4 as WebhookDeliveriesRetryErrors, g5 as WebhookEndpointsCreateResponses, g6 as WebhookEndpointsCreateErrors, g7 as WebhookEndpointsDeleteResponses, g8 as WebhookEndpointsDeleteErrors, g9 as WebhookEndpointsGetResponses, ga as WebhookEndpointsGetErrors, gb as WebhookEndpointsListResponses, gc as WebhookEndpointsListErrors, gd as WebhookEndpointsRotateSecretResponses, ge as WebhookEndpointsRotateSecretErrors, gf as WebhookEndpointsUpdateResponses, gg as WebhookEndpointsUpdateErrors } from './types.gen-BsrlHawj.js';
export { gh as ApplyCartDiscountCodeInput, gi as AttachPaymentMethodRequest, gj as AuthenticationError, gk as AvsCodeInterpretation, gl as BacsDirectDebitDetails, gm as BankAccountDetails, gn as BatchIngestRequest, go as Benefit, gp as BillingAnchorRulesResponse, gq as BillingDetails, gr as BillingIntervalsResponse, gs as BillingPreviewErrorResponse, gt as BillingPreviewResponse, gu as Business, gv as CancelOrderRequest, gw as CancelPaymentIntentRequest, gx as CancelPaymentRequest, gy as CancelSetupIntentRequest, gz as CancelSubscriptionInput, gA as CancelSubscriptionRequest, gB as CancelSubscriptionScheduleRequest, gC as CapturePaymentIntentRequest, gD as CapturePaymentRequest, gE as CardDetails, gF as CartApiKeysEnsureError, gG as CartApiKeysRotateError, gH as CartApiKeysStatusError, gI as CartBillingAnchorRule, gJ as CartCheckoutSession, gK as CartConversionResponse, gL as CartLineItem, gM as CartLineItemInput, gN as CartLineItemRecurring, gO as CartSession, gP as CartSessionErrorResponse, gQ as CartSessionResponse, gR as CartSessionStatus, gS as CartSessionsAddLineItemError, gT as CartSessionsApplyDiscountCodeError, gU as CartSessionsConvertError, gV as CartSessionsCreateError, gW as CartSessionsGetError, gX as CartSessionsRemoveLineItemError, gY as CartSessionsSetContactError, gZ as CartSessionsToggleAddOnError, g_ as CartSessionsUpdateLineItemError, g$ as CartStartRule, h0 as ChargeCaptureResponse, h1 as ChargeCreateResponse, h2 as ChargeDuplicateErrorResponse, h3 as ChargeErrorResponse, h4 as ChargeListResponse, h5 as ChargeRefundResponse, h6 as ChargeRetrieveResponse, h7 as CheckoutSession, h8 as CheckoutSessionCreateResponse, h9 as CheckoutSessionErrorResponse, ha as CheckoutSessionExpireResponse, hb as CheckoutSessionRetrieveResponse, hc as CheckoutSessionsCreateError, hd as CheckoutSessionsExpireError, he as CheckoutSessionsGetError, hf as ClientOptions, hg as CollectionSchedule, hh as ConfirmPaymentIntentRequest, hi as ConfirmSetupIntentRequest, hj as CreateCartSessionInput, hk as CreateCheckoutSessionInput, hl as CreateCreditNoteInput, hm as CreateCustomerPortalSessionRequest, hn as CreateDiscountInput, ho as CreateExportRequest, hp as CreateImportRequest, hq as CreateMandateRequest, hr as CreateMeterPriceRequest, hs as CreateMeterRequest, ht as CreateMeterResponse, hu as CreateOrderRequest, hv as CreatePaymentIntentRequest, hw as CreatePriceRequest, hx as CreateProductRequest, hy as CreateRefundInput, hz as CreateSetupIntentRequest, hA as CreateSubscriptionItemInput, hB as CreateSubscriptionScheduleRequest, hC as CreateTaxRateRequest, hD as CreateTerminalPaymentRequest, hE as CreateTestEventRequest, hF as CreateVoidInput, hG as CreditEligibilityResponse, hH as CreditNote, hI as CreditNoteCreateResponse, hJ as CreditNoteEligibilityResponse, hK as CreditNoteLine, hL as CreditNoteLineList, hM as CreditNoteListResponse, hN as CreditNotePreview, hO as CreditNotePreviewResponse, hP as CreditNoteResponse, hQ as CreditNoteRetrieveResponse, hR as CreditNoteVoidResponse, hS as CustomerCreateResponse, hT as CustomerInvoice, hU as CustomerListResponse, hV as CustomerMeter, hW as CustomerMeterErrorResponse, hX as CustomerMeterList, hY as CustomerMeterResponse, hZ as CustomerMetersGetError, h_ as CustomerMetersListError, h$ as CustomerOrder, i0 as CustomerPayment, i1 as CustomerPaymentMethodsListResponse, i2 as CustomerPortalCustomerGetError, i3 as CustomerPortalErrorResponse, i4 as CustomerPortalInvoicesGetError, i5 as CustomerPortalInvoicesListError, i6 as CustomerPortalMandatesListError, i7 as CustomerPortalMandatesReauthorizeError, i8 as CustomerPortalMandatesReauthorizeSendOtpError, i9 as CustomerPortalMandatesReauthorizeVerifyOtpError, ia as CustomerPortalSessionCreateResponse, ib as CustomerPortalSessionsCreateError, ic as CustomerPortalSubscriptionsCancelError, id as CustomerPortalSubscriptionsGetError, ie as CustomerPortalSubscriptionsListError, ig as CustomerRetrieveResponse, ih as CustomerSubscription, ii as CustomerUpdateResponse, ij as CvvCodeInterpretation, ik as DdCaptureSession, il as DdCaptureSessionResponse, im as DdMandatePdfReference, io as DdMandateRequestActiveResponse, ip as DdMandateRequestCancelResponse, iq as DdMandateRequestConsumeResponse, ir as DdMandateRequestCreateResponse, is as DdMandateRequestHistoryResponse, it as DdMandateRequestLifecycleItem, iu as DdMandateRequestLifecycleStatus, iv as DeclineAnalyticsResponse, iw as Discount, ix as DiscountCreateResponse, iy as DiscountDeleteResponse, iz as DiscountListResponse, iA as DiscountRetrieveResponse, iB as DiscountUpdateResponse, iC as Dispute, iD as Entitlement, iE as EntitlementCheck, iF as EntitlementCheckResponse, iG as EntitlementListResponse, iH as ErrorResponse, iI as Event, iJ as EventErrorResponse, iK as EventListResponse, iL as EventRequest, iM as EventsGetError, iN as EventsListError, iO as EventsResendError, iP as Export, iQ as ExportCreateResponse, iR as ExportRetrieveResponse, iS as ExternalUpsertResponse, iT as ForbiddenError, iU as FulfillOrderRequest, iV as Import, iW as ImportCreateResponse, iX as ImportRetrieveResponse, iY as Invoice, iZ as InvoiceCommentDetail, i_ as InvoiceCommentDetailResponse, i$ as InvoiceCommentListDetailResponse, j0 as InvoiceListResponse, j1 as InvoiceResponse, j2 as Mandate, j3 as MandateActionRequest, j4 as MandateActionResponse, j5 as MandateListItem, j6 as MandateListResponse, j7 as MandateRequestLookupResponse, j8 as MandateResponse, j9 as MarkDeliveredResponse, ja as MeterError, jb as MeterGetResponse, jc as MeterListResponse, jd as MeterPriceError, je as MeterPriceListResponse, jf as MeterPriceResponse, jg as NotFoundError, jh as OpenDispute, ji as Order, jj as OrderErrorResponse, jk as OrderLineItem, jl as OrderListResponse, jm as Pagination, jn as PauseSubscriptionInput, jo as PayOrderRequest, jp as Payment, jq as PaymentAttempt, jr as PaymentAttemptErrorResponse, js as PaymentAttemptListResponse, jt as PaymentAttemptSingleResponse, ju as PaymentErrorResponse, jv as PaymentIntent, jw as PaymentIntentErrorResponse, jx as PaymentIntentListResponse, jy as PaymentIntentsCancelError, jz as PaymentIntentsCaptureError, jA as PaymentIntentsConfirmError, jB as PaymentIntentsCreateError, jC as PaymentIntentsGetError, jD as PaymentIntentsListError, jE as PaymentLinksActivateError, jF as PaymentLinksArchiveError, jG as PaymentLinksCreateError, jH as PaymentLinksDeactivateError, jI as PaymentLinksExpireError, jJ as PaymentLinksGetError, jK as PaymentLinksListError, jL as PaymentLinksUpdateError, jM as PaymentListResponse, jN as PaymentMethod, jO as PaymentMethodList, jP as PaymentSecurityResponse, jQ as PaymentSecurityResult, jR as Payout, jS as PayoutPayment, jT as PhaseItem, jU as PortalCustomer, jV as PortalCustomerResponse, jW as PortalInvoice, jX as PortalInvoiceList, jY as PortalInvoiceResponse, jZ as PortalMandate, j_ as PortalMandateList, j$ as PortalReauthorizeMandateRequest, k0 as PortalReauthorizeMandateResponse, k1 as PortalReauthorizeSendOtpResponse, k2 as PortalReauthorizeVerifyOtpRequest, k3 as PortalReauthorizeVerifyOtpResponse, k4 as PortalSubscription, k5 as PortalSubscriptionCancelResponse, k6 as PortalSubscriptionList, k7 as PortalSubscriptionResponse, k8 as PreviewCollectionRequest, k9 as PreviewCollectionResponse, ka as PreviewCreditNoteInput, kb as Price, kc as PriceErrorResponse, kd as PriceListResponse, ke as PriceTier, kf as PricesArchiveError, kg as PricesCreateError, kh as PricesGetError, ki as PricesListError, kj as PricesUpdateError, kk as Product, kl as ProductCreateResponse, km as ProductErrorResponse, kn as ProductListResponse, ko as ProductRetrieveResponse, kp as ProductUpdateResponse, kq as ProductsCreateError, kr as ProductsGetError, ks as ProductsListError, kt as ProductsUpdateError, ku as Refund, kv as RefundCreateResponse, kw as RefundListResponse, kx as RefundRetrieveResponse, ky as RefundTerminalPaymentRequest, kz as ReleaseSubscriptionScheduleRequest, kA as ResendWebhookResponse, kB as RetryEligibilityResponse, kC as ScheduleCollectionRequest, kD as ScheduleCollectionResponse, kE as SchedulePhase, kF as SetCartContactInput, kG as SetupIntent, kH as SetupIntentError, kI as SetupIntentList, kJ as SetupIntentNextAction, kK as StaleUpdateResponse, kL as StorefrontAvailability, kM as StorefrontKeyStatus, kN as StorefrontOrigin, kO as StorefrontOriginCreateRequest, kP as StorefrontOriginCreateResponse, kQ as StorefrontOriginDeleteResponse, kR as StorefrontOriginError, kS as StorefrontOriginListResponse, kT as StorefrontOriginsCreateError, kU as StorefrontOriginsDeleteError, kV as StorefrontOriginsListError, kW as StorefrontPrice, kX as StorefrontProduct, kY as StorefrontProductError, kZ as StorefrontProductListResponse, k_ as StorefrontProductResponse, k$ as StorefrontProductsGetError, l0 as StorefrontProductsListError, l1 as StorefrontStatus, l2 as StorefrontStatusCheck, l3 as StorefrontStatusError, l4 as StorefrontStatusGetError, l5 as StorefrontStatusResponse, l6 as Subscription, l7 as SubscriptionCancelResponse, l8 as SubscriptionCancelSubscriptionResponse, l9 as SubscriptionChangePlanResponse, la as SubscriptionChangeQuantityResponse, lb as SubscriptionCreateResponse, lc as SubscriptionItem, ld as SubscriptionItemCreateResponse, le as SubscriptionItemDeleteResponse, lf as SubscriptionItemListResponse, lg as SubscriptionItemUpdateResponse, lh as SubscriptionListResponse, li as SubscriptionPauseResponse, lj as SubscriptionPreviewRenewalResponse, lk as SubscriptionReactivateResponse, ll as SubscriptionResumeResponse, lm as SubscriptionRetrieveResponse, ln as SubscriptionSchedule, lo as SubscriptionScheduleErrorResponse, lp as SubscriptionScheduleListResponse, lq as SubscriptionTerms, lr as SubscriptionUpdateResponse, ls as SuccessResponse, lt as TaxRate, lu as TaxRateErrorResponse, lv as TaxRateListResponse, lw as TerminalDevice, lx as TerminalDeviceErrorResponse, ly as TerminalDeviceListResponse, lz as TerminalDeviceResponse, lA as TerminalPayment, lB as TerminalPaymentErrorResponse, lC as TerminalPaymentListResponse, lD as TerminalPaymentResponse, lE as TestEventResponse, lF as ToggleCartAddOnInput, lG as Transaction, lH as TransactionListResponse, lI as TransactionRetrieveResponse, lJ as TransactionReversalEligibilityResponse, lK as TransactionsGetError, lL as TransactionsListError, lM as TransformQuantity, lN as UnchangedContentResponse, lO as UpdateCartLineItemInput, lP as UpdateDiscountInput, lQ as UpdateMeterPriceRequest, lR as UpdateMeterRequest, lS as UpdateMeterResponse, lT as UpdateOrderRequest, lU as UpdatePaymentIntentRequest, lV as UpdatePaymentMethodRequest, lW as UpdatePriceRequest, lX as UpdateProductRequest, lY as UpdateSetupIntentRequest, lZ as UpdateSubscriptionItemInput, l_ as UpdateSubscriptionScheduleRequest, l$ as UpdateTaxRateRequest, m0 as UsageAggregateResponse, m1 as UsageBalanceMeter, m2 as UsageBalanceResponse, U as UsageEvent, m3 as UsageEventError, m4 as UsageEventListResponse, m5 as UsageEventRecord, m6 as ValidateBankAccountRequest, m7 as ValidateBankAccountResponse, m8 as ValidationError, m9 as Void, ma as VoidCreateResponse, mb as VoidListResponse, mc as VoidRetrieveResponse, md as VoidTerminalPaymentRequest, me as WebhookDeliveriesGetError, mf as WebhookDeliveriesListError, mg as WebhookDeliveriesRetryError, mh as WebhookDelivery, mi as WebhookDeliveryErrorResponse, mj as WebhookDeliveryListResponse, mk as WebhookDeliveryResponse, ml as WebhookDeliveryRetryResponse, mm as WebhookEndpoint, mn as WebhookEvent, mo as Webhooks, mp as WebhooksCheckoutSessionCompletedWebhookPayload, mq as WebhooksCheckoutSessionCompletedWebhookRequest, mr as WebhooksCheckoutSessionExpiredWebhookPayload, ms as WebhooksCheckoutSessionExpiredWebhookRequest, mt as WebhooksCollectionFailedWebhookPayload, mu as WebhooksCollectionFailedWebhookRequest, mv as WebhooksCollectionIndemnityClaimedWebhookPayload, mw as WebhooksCollectionIndemnityClaimedWebhookRequest, mx as WebhooksCollectionNoticeSentWebhookPayload, my as WebhooksCollectionNoticeSentWebhookRequest, mz as WebhooksCollectionScheduledWebhookPayload, mA as WebhooksCollectionScheduledWebhookRequest, mB as WebhooksCollectionSucceededWebhookPayload, mC as WebhooksCollectionSucceededWebhookRequest, mD as WebhooksCreditNoteCreatedWebhookPayload, mE as WebhooksCreditNoteCreatedWebhookRequest, mF as WebhooksCreditNoteIssuedWebhookPayload, mG as WebhooksCreditNoteIssuedWebhookRequest, mH as WebhooksCreditNoteVoidedWebhookPayload, mI as WebhooksCreditNoteVoidedWebhookRequest, mJ as WebhooksCustomerCreatedWebhookPayload, mK as WebhooksCustomerCreatedWebhookRequest, mL as WebhooksCustomerUpdatedWebhookPayload, mM as WebhooksCustomerUpdatedWebhookRequest, mN as WebhooksInvoiceCreatedWebhookPayload, mO as WebhooksInvoiceCreatedWebhookRequest, mP as WebhooksInvoiceOverdueWebhookPayload, mQ as WebhooksInvoiceOverdueWebhookRequest, mR as WebhooksInvoicePaidWebhookPayload, mS as WebhooksInvoicePaidWebhookRequest, mT as WebhooksMandateActivatedWebhookPayload, mU as WebhooksMandateActivatedWebhookRequest, mV as WebhooksMandateAuddisRejectedWebhookPayload, mW as WebhooksMandateAuddisRejectedWebhookRequest, mX as WebhooksMandateCancelledWebhookPayload, mY as WebhooksMandateCancelledWebhookRequest, mZ as WebhooksMandateCreatedWebhookPayload, m_ as WebhooksMandateCreatedWebhookRequest, m$ as WebhooksMandateSuspendedWebhookPayload, n0 as WebhooksMandateSuspendedWebhookRequest, n1 as WebhooksMeterArchivedWebhookPayload, n2 as WebhooksMeterArchivedWebhookRequest, n3 as WebhooksMeterCreatedWebhookPayload, n4 as WebhooksMeterCreatedWebhookRequest, n5 as WebhooksMeterPriceCreatedWebhookPayload, n6 as WebhooksMeterPriceCreatedWebhookRequest, n7 as WebhooksMeterPriceDeactivatedWebhookPayload, n8 as WebhooksMeterPriceDeactivatedWebhookRequest, n9 as WebhooksMeterPriceUpdatedWebhookPayload, na as WebhooksMeterPriceUpdatedWebhookRequest, nb as WebhooksMeterUpdatedWebhookPayload, nc as WebhooksMeterUpdatedWebhookRequest, nd as WebhooksOrderCreatedWebhookPayload, ne as WebhooksOrderCreatedWebhookRequest, nf as WebhooksOrderFulfilledWebhookPayload, ng as WebhooksOrderFulfilledWebhookRequest, nh as WebhooksOrderPaidWebhookPayload, ni as WebhooksOrderPaidWebhookRequest, nj as WebhooksPaymentFailedWebhookPayload, nk as WebhooksPaymentFailedWebhookRequest, nl as WebhooksPaymentSucceededWebhookPayload, nm as WebhooksPaymentSucceededWebhookRequest, nn as WebhooksRefundCreatedWebhookPayload, no as WebhooksRefundCreatedWebhookRequest, np as WebhooksRefundSucceededWebhookPayload, nq as WebhooksRefundSucceededWebhookRequest, nr as WebhooksSettlementCreatedWebhookPayload, ns as WebhooksSettlementCreatedWebhookRequest, nt as WebhooksSubscriptionActivatedWebhookPayload, nu as WebhooksSubscriptionActivatedWebhookRequest, nv as WebhooksSubscriptionCanceledWebhookPayload, nw as WebhooksSubscriptionCanceledWebhookRequest, nx as WebhooksSubscriptionCreatedWebhookPayload, ny as WebhooksSubscriptionCreatedWebhookRequest, nz as WebhooksSubscriptionRenewedWebhookPayload, nA as WebhooksSubscriptionRenewedWebhookRequest, nB as WebhooksTerminalPaymentCancelledWebhookPayload, nC as WebhooksTerminalPaymentCancelledWebhookRequest, nD as WebhooksTerminalPaymentDeclinedWebhookPayload, nE as WebhooksTerminalPaymentDeclinedWebhookRequest, nF as WebhooksTerminalPaymentErrorWebhookPayload, nG as WebhooksTerminalPaymentErrorWebhookRequest, nH as WebhooksTerminalPaymentRequestedWebhookPayload, nI as WebhooksTerminalPaymentRequestedWebhookRequest, nJ as WebhooksTerminalPaymentSucceededWebhookPayload, nK as WebhooksTerminalPaymentSucceededWebhookRequest, nL as WebhooksTerminalRefundSucceededWebhookPayload, nM as WebhooksTerminalRefundSucceededWebhookRequest, nN as WebhooksTerminalVoidSucceededWebhookPayload, nO as WebhooksTerminalVoidSucceededWebhookRequest, nP as WebhooksUsageEventIngestedWebhookPayload, nQ as WebhooksUsageEventIngestedWebhookRequest, nR as WebhooksUsageEventRejectedWebhookPayload, nS as WebhooksUsageEventRejectedWebhookRequest, nT as WebhooksUsageInvoiceCreatedWebhookPayload, nU as WebhooksUsageInvoiceCreatedWebhookRequest, nV as WebhooksUsagePeriodFinalizedWebhookPayload, nW as WebhooksUsagePeriodFinalizedWebhookRequest, nX as WebhooksUsageThresholdReachedWebhookPayload, nY as WebhooksUsageThresholdReachedWebhookRequest, nZ as WebhooksVoidCreatedWebhookPayload, n_ as WebhooksVoidCreatedWebhookRequest, n$ as WebhooksVoidFailedWebhookPayload, o0 as WebhooksVoidFailedWebhookRequest, o1 as WebhooksVoidSucceededWebhookPayload, o2 as WebhooksVoidSucceededWebhookRequest } from './types.gen-BsrlHawj.js';
import { OAuthConfig } from './auth.js';
export { OAuthTokenManager } from './auth.js';
export { WEBHOOK_TOLERANCE_IN_SECONDS, WebhookHeaders, WebhookSignatureVerificationError, WebhookEvent as WebhookUtilityEvent, WebhookEventData as WebhookUtilityEventData, WebhookEventType as WebhookUtilityEventType, WebhookVerifyOptions, constructEvent, constructEventWithHeaders, extractWebhookHeaders, verifySignature, default as webhooks } from './webhooks.js';

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
    apiKeysEnsure: () => Promise<CartApiKeysEnsureResponse>;
    apiKeysRotate: (id: NonNullable<CartApiKeysRotateData["path"]>["kind"], body?: NonNullable<CartApiKeysRotateData["body"]>) => Promise<CartApiKeysRotateResponse>;
    apiKeysStatus: () => Promise<CartApiKeysStatusResponse>;
    sessionsAddLineItem: (id: NonNullable<CartSessionsAddLineItemData["path"]>["id"], body?: NonNullable<CartSessionsAddLineItemData["body"]>) => Promise<CartSessionsAddLineItemResponse>;
    sessionsApplyDiscountCode: (id: NonNullable<CartSessionsApplyDiscountCodeData["path"]>["id"], body?: NonNullable<CartSessionsApplyDiscountCodeData["body"]>) => Promise<CartSessionsApplyDiscountCodeResponse>;
    sessionsConvert: (id: NonNullable<CartSessionsConvertData["path"]>["id"]) => Promise<CartSessionsConvertResponse>;
    sessionsCreate: (body?: NonNullable<CartSessionsCreateData["body"]>) => Promise<CartSessionsCreateResponse>;
    sessionsGet: (id: NonNullable<CartSessionsGetData["path"]>["id"]) => Promise<CartSessionsGetResponse>;
    sessionsRemoveLineItem: (path: NonNullable<CartSessionsRemoveLineItemData["path"]>) => Promise<CartSessionsRemoveLineItemResponse>;
    sessionsSetContact: (id: NonNullable<CartSessionsSetContactData["path"]>["id"], body?: NonNullable<CartSessionsSetContactData["body"]>) => Promise<CartSessionsSetContactResponse>;
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
    portalMandatesReauthorizeSendOtp: (id: NonNullable<CustomerPortalMandatesReauthorizeSendOtpData["path"]>["id"]) => Promise<CustomerPortalMandatesReauthorizeSendOtpResponse>;
    portalMandatesReauthorizeVerifyOtp: (id: NonNullable<CustomerPortalMandatesReauthorizeVerifyOtpData["path"]>["id"], body: NonNullable<CustomerPortalMandatesReauthorizeVerifyOtpData["body"]>) => Promise<CustomerPortalMandatesReauthorizeVerifyOtpResponse>;
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
interface StorefrontResource {
    originsCreate: (body?: NonNullable<StorefrontOriginsCreateData["body"]>) => Promise<StorefrontOriginsCreateResponse>;
    originsDelete: (id: NonNullable<StorefrontOriginsDeleteData["path"]>["originId"]) => Promise<StorefrontOriginsDeleteResponse>;
    originsList: () => Promise<StorefrontOriginsListResponse>;
    productsGet: (id: NonNullable<StorefrontProductsGetData["path"]>["productId"]) => Promise<StorefrontProductsGetResponse>;
    productsList: (query?: NonNullable<StorefrontProductsListData["query"]>) => Promise<StorefrontProductsListResponse>;
    statusGet: () => Promise<StorefrontStatusGetResponse>;
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
    storefront: StorefrontResource;
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

type AuthToken = string | undefined;
interface Auth {
    /**
     * Which part of the request do we use to send the auth?
     *
     * @default 'header'
     */
    in?: 'header' | 'query' | 'cookie';
    /**
     * Header or query parameter name.
     *
     * @default 'Authorization'
     */
    name?: string;
    scheme?: 'basic' | 'bearer';
    type: 'apiKey' | 'http';
}

interface SerializerOptions<T> {
    /**
     * @default true
     */
    explode: boolean;
    style: T;
}
type ArrayStyle = 'form' | 'spaceDelimited' | 'pipeDelimited';
type ObjectStyle = 'form' | 'deepObject';

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

type HttpMethod = 'connect' | 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
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
    headers?: RequestInit['headers'] | Record<string, string | number | boolean | (string | number | boolean)[] | null | undefined | unknown>;
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

type ServerSentEventsOptions<TData = unknown> = Omit<RequestInit, 'method'> & Pick<Config$1, 'method' | 'responseTransformer' | 'responseValidator'> & {
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
    serializedBody?: RequestInit['body'];
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

type ResponseStyle = 'data' | 'fields';
interface Config<T extends ClientOptions = ClientOptions> extends Omit<RequestInit, 'body' | 'headers' | 'method'>, Config$1 {
    /**
     * Base URL for all requests made by this client.
     */
    baseUrl?: T['baseUrl'];
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
    parseAs?: 'arrayBuffer' | 'auto' | 'blob' | 'formData' | 'json' | 'stream' | 'text';
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
    throwOnError?: T['throwOnError'];
}
interface RequestOptions<TData = unknown, TResponseStyle extends ResponseStyle = 'fields', ThrowOnError extends boolean = boolean, Url extends string = string> extends Config<{
    responseStyle: TResponseStyle;
    throwOnError: ThrowOnError;
}>, Pick<ServerSentEventsOptions<TData>, 'onRequest' | 'onSseError' | 'onSseEvent' | 'sseDefaultRetryDelay' | 'sseMaxRetryAttempts' | 'sseMaxRetryDelay'> {
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
interface ResolvedRequestOptions<TResponseStyle extends ResponseStyle = 'fields', ThrowOnError extends boolean = boolean, Url extends string = string> extends RequestOptions<unknown, TResponseStyle, ThrowOnError, Url> {
    serializedBody?: string;
}
type RequestResult<TData = unknown, TError = unknown, ThrowOnError extends boolean = boolean, TResponseStyle extends ResponseStyle = 'fields'> = ThrowOnError extends true ? Promise<TResponseStyle extends 'data' ? TData extends Record<string, unknown> ? TData[keyof TData] : TData : {
    data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    request: Request;
    response: Response;
}> : Promise<TResponseStyle extends 'data' ? (TData extends Record<string, unknown> ? TData[keyof TData] : TData) | undefined : ({
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
type MethodFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<TData, TResponseStyle, ThrowOnError>, 'method'>) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
type SseFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<never, TResponseStyle, ThrowOnError>, 'method'>) => Promise<ServerSentEventsResult<TData, TError>>;
type RequestFn = <TData = unknown, TError = unknown, ThrowOnError extends boolean = false, TResponseStyle extends ResponseStyle = 'fields'>(options: Omit<RequestOptions<TData, TResponseStyle, ThrowOnError>, 'method'> & Pick<Required<RequestOptions<TData, TResponseStyle, ThrowOnError>>, 'method'>) => RequestResult<TData, TError, ThrowOnError, TResponseStyle>;
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
type Options$1<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown, TResponseStyle extends ResponseStyle = 'fields'> = OmitKeys<RequestOptions<TResponse, TResponseStyle, ThrowOnError>, 'body' | 'path' | 'query' | 'url'> & ([TData] extends [never] ? unknown : Omit<TData, 'url'>);

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
 * List invoices
 *
 * List invoices with pagination and filtering.
 *
 * ---
 *
 * **Related endpoints**
 *
 * - `PUT /invoices/external/batch` — Batch upsert invoices by external ID
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const invoicesList: <ThrowOnError extends boolean = false>(options?: Options<InvoicesListData, ThrowOnError>) => RequestResult<InvoicesListResponses, unknown, ThrowOnError, "fields">;
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
 * - `GET /invoices` — List invoices
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesCreate: <ThrowOnError extends boolean = false>(options: Options<InvoicesCreateData, ThrowOnError>) => RequestResult<InvoicesCreateResponses, unknown, ThrowOnError, "fields">;
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
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 */
declare const invoicesGet: <ThrowOnError extends boolean = false>(options: Options<InvoicesGetData, ThrowOnError>) => RequestResult<InvoicesGetResponses, unknown, ThrowOnError, "fields">;
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
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
 * - `POST /invoices/{id}/reject` — Reject invoice
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const invoicesUpdate: <ThrowOnError extends boolean = false>(options: Options<InvoicesUpdateData, ThrowOnError>) => RequestResult<InvoicesUpdateResponses, unknown, ThrowOnError, "fields">;
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
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/refund` — Refund invoice
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
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
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
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
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
 * - `GET /invoices` — List invoices
 * - `POST /invoices` — Create invoice
 * - `GET /invoices/{id}` — Get invoice
 * - `PATCH /invoices/{id}` — Update invoice
 * - `DELETE /invoices/{id}` — Delete invoice
 * - `POST /invoices/{id}/margin-estimate` — Estimate invoice net by payment rail
 * - `POST /invoices/{id}/refund` — Refund invoice
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
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const productsUpdate: <ThrowOnError extends boolean = false>(options: Options<ProductsUpdateData, ThrowOnError>) => RequestResult<ProductsUpdateResponses, ProductsUpdateErrors, ThrowOnError, "fields">;
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * Capture the customer's email and marketing/recovery consent on an open cart so an abandoned cart can be recovered (REV-5517). Every field is optional; pass `null` to clear. Setting a field records its consent/capture timestamp. Idempotent — an input that changes nothing is a no-op.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const cartApiKeysRotate: <ThrowOnError extends boolean = false>(options: Options<CartApiKeysRotateData, ThrowOnError>) => RequestResult<CartApiKeysRotateResponses, CartApiKeysRotateErrors, ThrowOnError, "fields">;
/**
 * List storefront products
 *
 * List active, cart-eligible products with browser-safe display data, active prices, and derived availability. Intended for publishable-key storefront and CMS-picker use; never returns product metadata or internal fields.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const storefrontProductsList: <ThrowOnError extends boolean = false>(options?: Options<StorefrontProductsListData, ThrowOnError>) => RequestResult<StorefrontProductsListResponses, StorefrontProductsListErrors, ThrowOnError, "fields">;
/**
 * Get a storefront product
 *
 * Fetch one active, cart-eligible product by UUID, product reference, or slug. Same browser-safe projection as the list endpoint.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
 */
declare const storefrontStatusGet: <ThrowOnError extends boolean = false>(options?: Options<StorefrontStatusGetData, ThrowOnError>) => RequestResult<StorefrontStatusGetResponses, StorefrontStatusGetErrors, ThrowOnError, "fields">;
/**
 * List customers
 *
 * Retrieve a paginated list of customers for the merchant
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
 * - `GET /customers/{id}` — Get customer by ID
 * - `PATCH /customers/{id}` — Update customer details
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `GET /customers` — List customers
 * - `GET /customers/{id}` — Get customer by ID
 * - `PATCH /customers/{id}` — Update customer details
 *
 * **Common errors**
 *
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `GET /customers/{customerId}/invoices` — List customer invoices
 * - `GET /customers/{customerId}/subscriptions` — List customer subscriptions
 * - `GET /customers/{customerId}/orders` — List customer orders
 * - `GET /customers/{customerId}/payments` — List customer payments
 * - `PUT /customers/external/batch` — Batch upsert customers by external ID
 * - `POST /customers` — Create a new customer
 * - `GET /customers` — List customers
 * - `PATCH /customers/{id}` — Update customer details
 *
 * **Common errors**
 *
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `400 invalid_request` — malformed payload or failed validation.
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const subscriptionsList: <ThrowOnError extends boolean = false>(options?: Options<SubscriptionsListData, ThrowOnError>) => RequestResult<SubscriptionsListResponses, SubscriptionsListErrors, ThrowOnError, "fields">;
/**
 * Create a new subscription
 *
 * Create a new subscription for a customer
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
declare const analyticsRevenueMrrSummary: <ThrowOnError extends boolean = false>(options?: Options<AnalyticsRevenueMrrSummaryData, ThrowOnError>) => RequestResult<AnalyticsRevenueMrrSummaryResponses, unknown, ThrowOnError, "fields">;
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
declare const analyticsRevenueTimeSeries: <ThrowOnError extends boolean = false>(options: Options<AnalyticsRevenueTimeSeriesData, ThrowOnError>) => RequestResult<AnalyticsRevenueTimeSeriesResponses, unknown, ThrowOnError, "fields">;
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const pricesUpdate: <ThrowOnError extends boolean = false>(options: Options<PricesUpdateData, ThrowOnError>) => RequestResult<PricesUpdateResponses, PricesUpdateErrors, ThrowOnError, "fields">;
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
 *
 * **Pagination**
 *
 * Offset-based with `limit` (default 25, max 100) and `offset`. The response `pagination` block includes `total` and `hasMore`. See [the pagination guide](/docs/fundamentals/pagination) for SDK auto-paging helpers.
 */
declare const customerPortalMandatesList: <ThrowOnError extends boolean = false>(options?: Options<CustomerPortalMandatesListData, ThrowOnError>) => RequestResult<CustomerPortalMandatesListResponses, CustomerPortalMandatesListErrors, ThrowOnError, "fields">;
/**
 * Re-authorise a Direct Debit mandate with new bank details
 *
 * Submits a NEW Bacs Direct Debit Instruction (AUDDIS) with updated bank details and supersedes the existing mandate. Used when a customer changes bank or account. Requires portal DD self-service.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const customerPortalMandatesReauthorize: <ThrowOnError extends boolean = false>(options: Options<CustomerPortalMandatesReauthorizeData, ThrowOnError>) => RequestResult<CustomerPortalMandatesReauthorizeResponses, CustomerPortalMandatesReauthorizeErrors, ThrowOnError, "fields">;
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
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const eventsResend: <ThrowOnError extends boolean = false>(options: Options<EventsResendData, ThrowOnError>) => RequestResult<EventsResendResponses, EventsResendErrors, ThrowOnError, "fields">;
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `429 rate_limit_exceeded` — back off using the `Retry-After` header.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesCreate: <ThrowOnError extends boolean = false>(options?: Options<MandatesCreateData, ThrowOnError>) => RequestResult<MandatesCreateResponses, MandatesCreateErrors, ThrowOnError, "fields">;
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
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
 * Schedules a one-off Bacs collection against an active mandate for an invoice or payment link. BACS is not real-time: the collection settles 3–5 working days after submission, the payer receives the regulatory advance notice first, and nothing is marked paid until the bureau confirms collection. Idempotent per source: retrying with the same sourceId returns the existing schedule instead of collecting twice.
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
 * - `401 unauthenticated` — missing, malformed, or revoked API key.
 * - `403 permission_denied` — key lacks the required scope, or the resource belongs to a different merchant.
 * - `404 resource_missing` — the referenced resource does not exist or is not visible to your key.
 * - `409 conflict` — Idempotency-Key collision with a different body, or a concurrent state-transition conflict.
 * - `422 unprocessable_entity` — business-rule failure (for example, refunding more than the original charge).
 *
 * **Idempotency**
 *
 * Pass an `Idempotency-Key` header (UUID v4 recommended) to make retries safe. Keys are valid for 24 hours; see [the idempotency guide](/docs/fundamentals/idempotency).
 */
declare const mandatesScheduleCollection: <ThrowOnError extends boolean = false>(options: Options<MandatesScheduleCollectionData, ThrowOnError>) => RequestResult<MandatesScheduleCollectionResponses, MandatesScheduleCollectionErrors, ThrowOnError, "fields">;

export { type AnalyticsResource, AnalyticsRevenueMrrSummaryData, AnalyticsRevenueMrrSummaryResponse, AnalyticsRevenueMrrSummaryResponses, AnalyticsRevenueTimeSeriesData, AnalyticsRevenueTimeSeriesResponse, AnalyticsRevenueTimeSeriesResponses, BatchIngestResult, CartApiKeysEnsureData, CartApiKeysEnsureErrors, CartApiKeysEnsureResponse, CartApiKeysEnsureResponses, CartApiKeysRotateData, CartApiKeysRotateErrors, CartApiKeysRotateResponse, CartApiKeysRotateResponses, CartApiKeysStatusData, CartApiKeysStatusErrors, CartApiKeysStatusResponse, CartApiKeysStatusResponses, type CartResource, CartSessionsAddLineItemData, CartSessionsAddLineItemErrors, CartSessionsAddLineItemResponse, CartSessionsAddLineItemResponses, CartSessionsApplyDiscountCodeData, CartSessionsApplyDiscountCodeErrors, CartSessionsApplyDiscountCodeResponse, CartSessionsApplyDiscountCodeResponses, CartSessionsConvertData, CartSessionsConvertErrors, CartSessionsConvertResponse, CartSessionsConvertResponses, CartSessionsCreateData, CartSessionsCreateErrors, CartSessionsCreateResponse, CartSessionsCreateResponses, CartSessionsGetData, CartSessionsGetErrors, CartSessionsGetResponse, CartSessionsGetResponses, CartSessionsRemoveLineItemData, CartSessionsRemoveLineItemErrors, CartSessionsRemoveLineItemResponse, CartSessionsRemoveLineItemResponses, CartSessionsSetContactData, CartSessionsSetContactErrors, CartSessionsSetContactResponse, CartSessionsSetContactResponses, CartSessionsToggleAddOnData, CartSessionsToggleAddOnErrors, CartSessionsToggleAddOnResponse, CartSessionsToggleAddOnResponses, CartSessionsUpdateLineItemData, CartSessionsUpdateLineItemErrors, CartSessionsUpdateLineItemResponse, CartSessionsUpdateLineItemResponses, CheckoutSessionsCreateData, CheckoutSessionsCreateErrors, CheckoutSessionsCreateResponse, CheckoutSessionsCreateResponses, CheckoutSessionsExpireData, CheckoutSessionsExpireErrors, CheckoutSessionsExpireResponse, CheckoutSessionsExpireResponses, CheckoutSessionsGetData, CheckoutSessionsGetErrors, CheckoutSessionsGetResponse, CheckoutSessionsGetResponses, type CheckoutSessionsResource, CreditNotesCreateData, CreditNotesCreateErrors, CreditNotesCreateResponse, CreditNotesCreateResponses, CreditNotesGetData, CreditNotesGetErrors, CreditNotesGetResponse, CreditNotesGetResponses, CreditNotesListData, CreditNotesListErrors, CreditNotesListLinesData, CreditNotesListLinesErrors, CreditNotesListLinesResponse, CreditNotesListLinesResponses, CreditNotesListResponse, CreditNotesListResponses, CreditNotesPreviewData, CreditNotesPreviewErrors, CreditNotesPreviewResponse, CreditNotesPreviewResponses, type CreditNotesResource, CreditNotesVoidData, CreditNotesVoidErrors, CreditNotesVoidResponse, CreditNotesVoidResponses, CustomerMetersGetData, CustomerMetersGetErrors, CustomerMetersGetResponse, CustomerMetersGetResponses, CustomerMetersListData, CustomerMetersListErrors, CustomerMetersListResponse, CustomerMetersListResponses, CustomerPortalCustomerGetData, CustomerPortalCustomerGetErrors, CustomerPortalCustomerGetResponse, CustomerPortalCustomerGetResponses, CustomerPortalInvoicesGetData, CustomerPortalInvoicesGetErrors, CustomerPortalInvoicesGetResponse, CustomerPortalInvoicesGetResponses, CustomerPortalInvoicesListData, CustomerPortalInvoicesListErrors, CustomerPortalInvoicesListResponse, CustomerPortalInvoicesListResponses, CustomerPortalMandatesListData, CustomerPortalMandatesListErrors, CustomerPortalMandatesListResponse, CustomerPortalMandatesListResponses, CustomerPortalMandatesReauthorizeData, CustomerPortalMandatesReauthorizeErrors, CustomerPortalMandatesReauthorizeResponse, CustomerPortalMandatesReauthorizeResponses, CustomerPortalMandatesReauthorizeSendOtpData, CustomerPortalMandatesReauthorizeSendOtpErrors, CustomerPortalMandatesReauthorizeSendOtpResponse, CustomerPortalMandatesReauthorizeSendOtpResponses, CustomerPortalMandatesReauthorizeVerifyOtpData, CustomerPortalMandatesReauthorizeVerifyOtpErrors, CustomerPortalMandatesReauthorizeVerifyOtpResponse, CustomerPortalMandatesReauthorizeVerifyOtpResponses, CustomerPortalSessionsCreateData, CustomerPortalSessionsCreateErrors, CustomerPortalSessionsCreateResponse, CustomerPortalSessionsCreateResponses, CustomerPortalSubscriptionsCancelData, CustomerPortalSubscriptionsCancelErrors, CustomerPortalSubscriptionsCancelResponse, CustomerPortalSubscriptionsCancelResponses, CustomerPortalSubscriptionsGetData, CustomerPortalSubscriptionsGetErrors, CustomerPortalSubscriptionsGetResponse, CustomerPortalSubscriptionsGetResponses, CustomerPortalSubscriptionsListData, CustomerPortalSubscriptionsListErrors, CustomerPortalSubscriptionsListResponse, CustomerPortalSubscriptionsListResponses, type CustomerResource, CustomersCreateData, CustomersCreateErrors, CustomersCreateResponse, CustomersCreateResponses, CustomersGetData, CustomersGetErrors, CustomersGetResponse, CustomersGetResponses, CustomersListData, CustomersListErrors, CustomersListResponse, CustomersListResponses, CustomersPaymentMethodsListData, CustomersPaymentMethodsListErrors, CustomersPaymentMethodsListResponse, CustomersPaymentMethodsListResponses, CustomersPaymentRailsGetData, CustomersPaymentRailsGetErrors, CustomersPaymentRailsGetResponse, CustomersPaymentRailsGetResponses, CustomersPreferredRailsGetData, CustomersPreferredRailsGetErrors, CustomersPreferredRailsGetResponse, CustomersPreferredRailsGetResponses, type CustomersResource, CustomersUpdateData, CustomersUpdateErrors, CustomersUpdateResponse, CustomersUpdateResponses, DdMandateRequestsGetData, DdMandateRequestsGetErrors, DdMandateRequestsGetResponse, DdMandateRequestsGetResponses, DdPreviewData, DdPreviewErrors, DdPreviewResponse, DdPreviewResponses, type DdResource, DdValidateData, DdValidateErrors, DdValidateResponse, DdValidateResponses, DryRunResult, EntitlementsCheckData, EntitlementsCheckErrors, EntitlementsCheckResponse, EntitlementsCheckResponses, EntitlementsListData, EntitlementsListErrors, EntitlementsListResponse, EntitlementsListResponses, type EntitlementsResource, EventsGetData, EventsGetErrors, EventsGetResponse, EventsGetResponses, EventsListData, EventsListErrors, EventsListResponse, EventsListResponses, EventsResendData, EventsResendErrors, EventsResendResponse, EventsResendResponses, type EventsResource, type GeneratedResourceRuntime, type GeneratedResources, InvoicesCreateData, InvoicesCreateResponse, InvoicesCreateResponses, InvoicesFinalizeData, InvoicesFinalizeErrors, InvoicesFinalizeResponse, InvoicesFinalizeResponses, InvoicesGetData, InvoicesGetResponse, InvoicesGetResponses, InvoicesListData, InvoicesListResponse, InvoicesListResponses, InvoicesMarginEstimateData, InvoicesMarginEstimateErrors, InvoicesMarginEstimateResponse, InvoicesMarginEstimateResponses, type InvoicesResource, InvoicesSendData, InvoicesSendErrors, InvoicesSendResponse, InvoicesSendResponses, InvoicesUpdateData, InvoicesUpdateResponse, InvoicesUpdateResponses, InvoicesVoidData, InvoicesVoidErrors, InvoicesVoidResponse, InvoicesVoidResponses, MandatesCancelData, MandatesCancelErrors, MandatesCancelResponse, MandatesCancelResponses, MandatesCreateData, MandatesCreateErrors, MandatesCreateResponse, MandatesCreateResponses, MandatesGetData, MandatesGetErrors, MandatesGetResponse, MandatesGetResponses, MandatesListData, MandatesListErrors, MandatesListResponse, MandatesListResponses, MandatesReinstateData, MandatesReinstateErrors, MandatesReinstateResponse, MandatesReinstateResponses, type MandatesResource, MandatesScheduleCollectionData, MandatesScheduleCollectionErrors, MandatesScheduleCollectionResponse, MandatesScheduleCollectionResponses, MandatesSuspendData, MandatesSuspendErrors, MandatesSuspendResponse, MandatesSuspendResponses, OAuthConfig, type Options, PaymentIntentsCancelData, PaymentIntentsCancelErrors, PaymentIntentsCancelResponse, PaymentIntentsCancelResponses, PaymentIntentsCaptureData, PaymentIntentsCaptureErrors, PaymentIntentsCaptureResponse, PaymentIntentsCaptureResponses, PaymentIntentsConfirmData, PaymentIntentsConfirmErrors, PaymentIntentsConfirmResponse, PaymentIntentsConfirmResponses, PaymentIntentsCreateData, PaymentIntentsCreateErrors, PaymentIntentsCreateResponse, PaymentIntentsCreateResponses, PaymentIntentsGetData, PaymentIntentsGetErrors, PaymentIntentsGetResponse, PaymentIntentsGetResponses, PaymentIntentsListData, PaymentIntentsListErrors, PaymentIntentsListResponse, PaymentIntentsListResponses, type PaymentIntentsResource, PaymentLinksActivateData, PaymentLinksActivateErrors, PaymentLinksActivateResponse, PaymentLinksActivateResponses, PaymentLinksArchiveData, PaymentLinksArchiveErrors, PaymentLinksArchiveResponse, PaymentLinksArchiveResponses, PaymentLinksCreateData, PaymentLinksCreateErrors, PaymentLinksCreateResponse, PaymentLinksCreateResponses, PaymentLinksDeactivateData, PaymentLinksDeactivateErrors, PaymentLinksDeactivateResponse, PaymentLinksDeactivateResponses, PaymentLinksExpireData, PaymentLinksExpireErrors, PaymentLinksExpireResponse, PaymentLinksExpireResponses, PaymentLinksGetData, PaymentLinksGetErrors, PaymentLinksGetResponse, PaymentLinksGetResponses, PaymentLinksListData, PaymentLinksListErrors, PaymentLinksListResponse, PaymentLinksListResponses, type PaymentLinksResource, PaymentLinksUpdateData, PaymentLinksUpdateErrors, PaymentLinksUpdateResponse, PaymentLinksUpdateResponses, PricesArchiveData, PricesArchiveErrors, PricesArchiveResponse, PricesArchiveResponses, PricesCreateData, PricesCreateErrors, PricesCreateResponse, PricesCreateResponses, PricesGetData, PricesGetErrors, PricesGetResponse, PricesGetResponses, PricesListData, PricesListErrors, PricesListResponse, PricesListResponses, type PricesResource, PricesUpdateData, PricesUpdateErrors, PricesUpdateResponse, PricesUpdateResponses, ProductsCreateData, ProductsCreateErrors, ProductsCreateResponse, ProductsCreateResponses, ProductsGetData, ProductsGetErrors, ProductsGetResponse, ProductsGetResponses, ProductsListData, ProductsListErrors, ProductsListResponse, ProductsListResponses, type ProductsResource, ProductsUpdateData, ProductsUpdateErrors, ProductsUpdateResponse, ProductsUpdateResponses, RefundsCreateData, RefundsCreateErrors, RefundsCreateResponse, RefundsCreateResponses, RefundsGetData, RefundsGetErrors, RefundsGetResponse, RefundsGetResponses, RefundsListData, RefundsListErrors, RefundsListResponse, RefundsListResponses, type RefundsResource, RevKeenClient as RevKeen, RevKeenAPIError, RevKeenClient, type RevKeenClientOptions, RevKeenError, RevKeenTimeoutError, StorefrontOriginsCreateData, StorefrontOriginsCreateErrors, StorefrontOriginsCreateResponse, StorefrontOriginsCreateResponses, StorefrontOriginsDeleteData, StorefrontOriginsDeleteErrors, StorefrontOriginsDeleteResponse, StorefrontOriginsDeleteResponses, StorefrontOriginsListData, StorefrontOriginsListErrors, StorefrontOriginsListResponse, StorefrontOriginsListResponses, StorefrontProductsGetData, StorefrontProductsGetErrors, StorefrontProductsGetResponse, StorefrontProductsGetResponses, StorefrontProductsListData, StorefrontProductsListErrors, StorefrontProductsListResponse, StorefrontProductsListResponses, type StorefrontResource, StorefrontStatusGetData, StorefrontStatusGetErrors, StorefrontStatusGetResponse, StorefrontStatusGetResponses, SubscriptionsCancelData, SubscriptionsCancelErrors, SubscriptionsCancelResponse, SubscriptionsCancelResponses, SubscriptionsCreateData, SubscriptionsCreateErrors, SubscriptionsCreateResponse, SubscriptionsCreateResponses, SubscriptionsGetData, SubscriptionsGetErrors, SubscriptionsGetResponse, SubscriptionsGetResponses, SubscriptionsListData, SubscriptionsListErrors, SubscriptionsListResponse, SubscriptionsListResponses, type SubscriptionsResource, SubscriptionsUpdateData, SubscriptionsUpdateErrors, SubscriptionsUpdateResponse, SubscriptionsUpdateResponses, TransactionsGetData, TransactionsGetErrors, TransactionsGetResponse, TransactionsGetResponses, TransactionsListData, TransactionsListErrors, TransactionsListResponse, TransactionsListResponses, type TransactionsResource, UsageIngestRequest, type UsageResource, WebhookDeliveriesGetData, WebhookDeliveriesGetErrors, WebhookDeliveriesGetResponse, WebhookDeliveriesGetResponses, WebhookDeliveriesListData, WebhookDeliveriesListErrors, WebhookDeliveriesListResponse, WebhookDeliveriesListResponses, WebhookDeliveriesRetryData, WebhookDeliveriesRetryErrors, WebhookDeliveriesRetryResponse, WebhookDeliveriesRetryResponses, WebhookEndpointsCreateData, WebhookEndpointsCreateErrors, WebhookEndpointsCreateResponse, WebhookEndpointsCreateResponses, WebhookEndpointsDeleteData, WebhookEndpointsDeleteErrors, WebhookEndpointsDeleteResponse, WebhookEndpointsDeleteResponses, WebhookEndpointsGetData, WebhookEndpointsGetErrors, WebhookEndpointsGetResponse, WebhookEndpointsGetResponses, WebhookEndpointsListData, WebhookEndpointsListErrors, WebhookEndpointsListResponse, WebhookEndpointsListResponses, type WebhookEndpointsResource, WebhookEndpointsRotateSecretData, WebhookEndpointsRotateSecretErrors, WebhookEndpointsRotateSecretResponse, WebhookEndpointsRotateSecretResponses, WebhookEndpointsUpdateData, WebhookEndpointsUpdateErrors, WebhookEndpointsUpdateResponse, WebhookEndpointsUpdateResponses, type WebhookResource, analyticsRevenueMrrSummary, analyticsRevenueTimeSeries, buildGeneratedResources, cartApiKeysEnsure, cartApiKeysRotate, cartApiKeysStatus, cartSessionsAddLineItem, cartSessionsApplyDiscountCode, cartSessionsConvert, cartSessionsCreate, cartSessionsGet, cartSessionsRemoveLineItem, cartSessionsSetContact, cartSessionsToggleAddOn, cartSessionsUpdateLineItem, checkoutSessionsCreate, checkoutSessionsExpire, checkoutSessionsGet, creditNotesCreate, creditNotesGet, creditNotesList, creditNotesListLines, creditNotesPreview, creditNotesVoid, customerMetersGet, customerMetersList, customerPortalCustomerGet, customerPortalInvoicesGet, customerPortalInvoicesList, customerPortalMandatesList, customerPortalMandatesReauthorize, customerPortalMandatesReauthorizeSendOtp, customerPortalMandatesReauthorizeVerifyOtp, customerPortalSessionsCreate, customerPortalSubscriptionsCancel, customerPortalSubscriptionsGet, customerPortalSubscriptionsList, customersCreate, customersGet, customersList, customersPaymentMethodsList, customersPaymentRailsGet, customersPreferredRailsGet, customersUpdate, ddMandateRequestsGet, ddPreview, ddValidate, RevKeenClient as default, entitlementsCheck, entitlementsList, eventsGet, eventsList, eventsResend, invoicesCreate, invoicesFinalize, invoicesGet, invoicesList, invoicesMarginEstimate, invoicesSend, invoicesUpdate, invoicesVoid, mandatesCancel, mandatesCreate, mandatesGet, mandatesList, mandatesReinstate, mandatesScheduleCollection, mandatesSuspend, paymentIntentsCancel, paymentIntentsCapture, paymentIntentsConfirm, paymentIntentsCreate, paymentIntentsGet, paymentIntentsList, paymentLinksActivate, paymentLinksArchive, paymentLinksCreate, paymentLinksDeactivate, paymentLinksExpire, paymentLinksGet, paymentLinksList, paymentLinksUpdate, pricesArchive, pricesCreate, pricesGet, pricesList, pricesUpdate, productsCreate, productsGet, productsList, productsUpdate, refundsCreate, refundsGet, refundsList, storefrontOriginsCreate, storefrontOriginsDelete, storefrontOriginsList, storefrontProductsGet, storefrontProductsList, storefrontStatusGet, subscriptionsCancel, subscriptionsCreate, subscriptionsGet, subscriptionsList, subscriptionsUpdate, transactionsGet, transactionsList, webhookDeliveriesGet, webhookDeliveriesList, webhookDeliveriesRetry, webhookEndpointsCreate, webhookEndpointsDelete, webhookEndpointsGet, webhookEndpointsList, webhookEndpointsRotateSecret, webhookEndpointsUpdate };
