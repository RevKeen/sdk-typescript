import { A as AnalyticsRevenueMrrSummaryData, a as AnalyticsRevenueMrrSummaryResponse, b as AnalyticsRevenueTimeSeriesData, c as AnalyticsRevenueTimeSeriesResponse, C as CartSessionsAddLineItemData, d as CartSessionsAddLineItemResponse, e as CartSessionsApplyDiscountCodeData, f as CartSessionsApplyDiscountCodeResponse, g as CartSessionsConvertData, h as CartSessionsConvertResponse, i as CartSessionsCreateData, j as CartSessionsCreateResponse, k as CartSessionsGetData, l as CartSessionsGetResponse, m as CartSessionsRemoveLineItemData, n as CartSessionsRemoveLineItemResponse, o as CartSessionsToggleAddOnData, p as CartSessionsToggleAddOnResponse, q as CartSessionsUpdateLineItemData, r as CartSessionsUpdateLineItemResponse, s as CheckoutSessionsCreateData, t as CheckoutSessionsCreateResponse, u as CheckoutSessionsExpireData, v as CheckoutSessionsExpireResponse, w as CheckoutSessionsGetData, x as CheckoutSessionsGetResponse, y as CreditNotesCreateData, z as CreditNotesCreateResponse, D as CreditNotesGetData, E as CreditNotesGetResponse, F as CreditNotesListData, G as CreditNotesListResponse, H as CreditNotesListLinesData, I as CreditNotesListLinesResponse, J as CreditNotesPreviewData, K as CreditNotesPreviewResponse, L as CreditNotesVoidData, M as CreditNotesVoidResponse, N as CustomerMetersGetData, O as CustomerMetersGetResponse, P as CustomerMetersListData, Q as CustomerMetersListResponse, R as CustomerPortalCustomerGetResponse, S as CustomerPortalInvoicesGetData, T as CustomerPortalInvoicesGetResponse, V as CustomerPortalInvoicesListData, W as CustomerPortalInvoicesListResponse, X as CustomerPortalMandatesListResponse, Y as CustomerPortalMandatesReauthorizeData, Z as CustomerPortalMandatesReauthorizeResponse, _ as CustomerPortalSessionsCreateData, $ as CustomerPortalSessionsCreateResponse, a0 as CustomerPortalSubscriptionsCancelData, a1 as CustomerPortalSubscriptionsCancelResponse, a2 as CustomerPortalSubscriptionsGetData, a3 as CustomerPortalSubscriptionsGetResponse, a4 as CustomerPortalSubscriptionsListData, a5 as CustomerPortalSubscriptionsListResponse, a6 as CustomersCreateData, a7 as CustomersCreateResponse, a8 as CustomersGetData, a9 as CustomersGetResponse, aa as CustomersListData, ab as CustomersListResponse, ac as CustomersPaymentMethodsListData, ad as CustomersPaymentMethodsListResponse, ae as CustomersPaymentRailsGetData, af as CustomersPaymentRailsGetResponse, ag as CustomersPreferredRailsGetData, ah as CustomersPreferredRailsGetResponse, ai as CustomersUpdateData, aj as CustomersUpdateResponse, ak as DdMandateRequestsGetData, al as DdMandateRequestsGetResponse, am as DdPreviewData, an as DdPreviewResponse, ao as DdValidateData, ap as DdValidateResponse, aq as EntitlementsCheckData, ar as EntitlementsCheckResponse, as as EntitlementsListData, at as EntitlementsListResponse, au as EventsGetData, av as EventsGetResponse, aw as EventsListData, ax as EventsListResponse, ay as EventsResendData, az as EventsResendResponse, aA as InvoicesCreateData, aB as InvoicesCreateResponse, aC as InvoicesFinalizeData, aD as InvoicesFinalizeResponse, aE as InvoicesGetData, aF as InvoicesGetResponse, aG as InvoicesListData, aH as InvoicesListResponse, aI as InvoicesMarginEstimateData, aJ as InvoicesMarginEstimateResponse, aK as InvoicesSendData, aL as InvoicesSendResponse, aM as InvoicesUpdateData, aN as InvoicesUpdateResponse, aO as InvoicesVoidData, aP as InvoicesVoidResponse, aQ as MandatesCancelData, aR as MandatesCancelResponse, aS as MandatesCreateData, aT as MandatesCreateResponse, aU as MandatesGetData, aV as MandatesGetResponse, aW as MandatesListData, aX as MandatesListResponse, aY as MandatesReinstateData, aZ as MandatesReinstateResponse, a_ as MandatesScheduleCollectionData, a$ as MandatesScheduleCollectionResponse, b0 as MandatesSuspendData, b1 as MandatesSuspendResponse, b2 as PaymentIntentsCancelData, b3 as PaymentIntentsCancelResponse, b4 as PaymentIntentsCaptureData, b5 as PaymentIntentsCaptureResponse, b6 as PaymentIntentsConfirmData, b7 as PaymentIntentsConfirmResponse, b8 as PaymentIntentsCreateData, b9 as PaymentIntentsCreateResponse, ba as PaymentIntentsGetData, bb as PaymentIntentsGetResponse, bc as PaymentIntentsListData, bd as PaymentIntentsListResponse, be as PaymentLinksActivateData, bf as PaymentLinksActivateResponse, bg as PaymentLinksArchiveData, bh as PaymentLinksArchiveResponse, bi as PaymentLinksCreateData, bj as PaymentLinksCreateResponse, bk as PaymentLinksDeactivateData, bl as PaymentLinksDeactivateResponse, bm as PaymentLinksExpireData, bn as PaymentLinksExpireResponse, bo as PaymentLinksGetData, bp as PaymentLinksGetResponse, bq as PaymentLinksListData, br as PaymentLinksListResponse, bs as PaymentLinksUpdateData, bt as PaymentLinksUpdateResponse, bu as PricesArchiveData, bv as PricesArchiveResponse, bw as PricesCreateData, bx as PricesCreateResponse, by as PricesGetData, bz as PricesGetResponse, bA as PricesListData, bB as PricesListResponse, bC as PricesUpdateData, bD as PricesUpdateResponse, bE as ProductsCreateData, bF as ProductsCreateResponse, bG as ProductsGetData, bH as ProductsGetResponse, bI as ProductsListData, bJ as ProductsListResponse, bK as ProductsUpdateData, bL as ProductsUpdateResponse, bM as RefundsCreateData, bN as RefundsCreateResponse, bO as RefundsGetData, bP as RefundsGetResponse, bQ as RefundsListData, bR as RefundsListResponse, bS as SubscriptionsCancelData, bT as SubscriptionsCancelResponse, bU as SubscriptionsCreateData, bV as SubscriptionsCreateResponse, bW as SubscriptionsGetData, bX as SubscriptionsGetResponse, bY as SubscriptionsListData, bZ as SubscriptionsListResponse, b_ as SubscriptionsUpdateData, b$ as SubscriptionsUpdateResponse, c0 as TransactionsGetData, c1 as TransactionsGetResponse, c2 as TransactionsListData, c3 as TransactionsListResponse, c4 as WebhookDeliveriesGetData, c5 as WebhookDeliveriesGetResponse, c6 as WebhookDeliveriesListData, c7 as WebhookDeliveriesListResponse, c8 as WebhookDeliveriesRetryData, c9 as WebhookDeliveriesRetryResponse, ca as WebhookEndpointsCreateData, cb as WebhookEndpointsCreateResponse, cc as WebhookEndpointsDeleteData, cd as WebhookEndpointsDeleteResponse, ce as WebhookEndpointsGetData, cf as WebhookEndpointsGetResponse, cg as WebhookEndpointsListData, ch as WebhookEndpointsListResponse, ci as WebhookEndpointsRotateSecretData, cj as WebhookEndpointsRotateSecretResponse, ck as WebhookEndpointsUpdateData, cl as WebhookEndpointsUpdateResponse, cm as UsageIngestRequest, B as BatchIngestResult, cn as DryRunResult, co as AnalyticsRevenueMrrSummaryResponses, cp as AnalyticsRevenueTimeSeriesResponses, cq as CartSessionsAddLineItemResponses, cr as CartSessionsAddLineItemErrors, cs as CartSessionsApplyDiscountCodeResponses, ct as CartSessionsApplyDiscountCodeErrors, cu as CartSessionsConvertResponses, cv as CartSessionsConvertErrors, cw as CartSessionsCreateResponses, cx as CartSessionsCreateErrors, cy as CartSessionsGetResponses, cz as CartSessionsGetErrors, cA as CartSessionsRemoveLineItemResponses, cB as CartSessionsRemoveLineItemErrors, cC as CartSessionsToggleAddOnResponses, cD as CartSessionsToggleAddOnErrors, cE as CartSessionsUpdateLineItemResponses, cF as CartSessionsUpdateLineItemErrors, cG as CheckoutSessionsCreateResponses, cH as CheckoutSessionsCreateErrors, cI as CheckoutSessionsExpireResponses, cJ as CheckoutSessionsExpireErrors, cK as CheckoutSessionsGetResponses, cL as CheckoutSessionsGetErrors, cM as CreditNotesCreateResponses, cN as CreditNotesCreateErrors, cO as CreditNotesGetResponses, cP as CreditNotesGetErrors, cQ as CreditNotesListResponses, cR as CreditNotesListErrors, cS as CreditNotesListLinesResponses, cT as CreditNotesListLinesErrors, cU as CreditNotesPreviewResponses, cV as CreditNotesPreviewErrors, cW as CreditNotesVoidResponses, cX as CreditNotesVoidErrors, cY as CustomerMetersGetResponses, cZ as CustomerMetersGetErrors, c_ as CustomerMetersListResponses, c$ as CustomerMetersListErrors, d0 as CustomerPortalCustomerGetData, d1 as CustomerPortalCustomerGetResponses, d2 as CustomerPortalCustomerGetErrors, d3 as CustomerPortalInvoicesGetResponses, d4 as CustomerPortalInvoicesGetErrors, d5 as CustomerPortalInvoicesListResponses, d6 as CustomerPortalInvoicesListErrors, d7 as CustomerPortalMandatesListData, d8 as CustomerPortalMandatesListResponses, d9 as CustomerPortalMandatesListErrors, da as CustomerPortalMandatesReauthorizeResponses, db as CustomerPortalMandatesReauthorizeErrors, dc as CustomerPortalSessionsCreateResponses, dd as CustomerPortalSessionsCreateErrors, de as CustomerPortalSubscriptionsCancelResponses, df as CustomerPortalSubscriptionsCancelErrors, dg as CustomerPortalSubscriptionsGetResponses, dh as CustomerPortalSubscriptionsGetErrors, di as CustomerPortalSubscriptionsListResponses, dj as CustomerPortalSubscriptionsListErrors, dk as CustomersCreateResponses, dl as CustomersCreateErrors, dm as CustomersGetResponses, dn as CustomersGetErrors, dp as CustomersListResponses, dq as CustomersListErrors, dr as CustomersPaymentMethodsListResponses, ds as CustomersPaymentMethodsListErrors, dt as CustomersPaymentRailsGetResponses, du as CustomersPaymentRailsGetErrors, dv as CustomersPreferredRailsGetResponses, dw as CustomersPreferredRailsGetErrors, dx as CustomersUpdateResponses, dy as CustomersUpdateErrors, dz as DdMandateRequestsGetResponses, dA as DdMandateRequestsGetErrors, dB as DdPreviewResponses, dC as DdPreviewErrors, dD as DdValidateResponses, dE as DdValidateErrors, dF as EntitlementsCheckResponses, dG as EntitlementsCheckErrors, dH as EntitlementsListResponses, dI as EntitlementsListErrors, dJ as EventsGetResponses, dK as EventsGetErrors, dL as EventsListResponses, dM as EventsListErrors, dN as EventsResendResponses, dO as EventsResendErrors, dP as InvoicesCreateResponses, dQ as InvoicesFinalizeResponses, dR as InvoicesFinalizeErrors, dS as InvoicesGetResponses, dT as InvoicesListResponses, dU as InvoicesMarginEstimateResponses, dV as InvoicesMarginEstimateErrors, dW as InvoicesSendResponses, dX as InvoicesSendErrors, dY as InvoicesUpdateResponses, dZ as InvoicesVoidResponses, d_ as InvoicesVoidErrors, d$ as MandatesCancelResponses, e0 as MandatesCancelErrors, e1 as MandatesCreateResponses, e2 as MandatesCreateErrors, e3 as MandatesGetResponses, e4 as MandatesGetErrors, e5 as MandatesListResponses, e6 as MandatesListErrors, e7 as MandatesReinstateResponses, e8 as MandatesReinstateErrors, e9 as MandatesScheduleCollectionResponses, ea as MandatesScheduleCollectionErrors, eb as MandatesSuspendResponses, ec as MandatesSuspendErrors, ed as PaymentIntentsCancelResponses, ee as PaymentIntentsCancelErrors, ef as PaymentIntentsCaptureResponses, eg as PaymentIntentsCaptureErrors, eh as PaymentIntentsConfirmResponses, ei as PaymentIntentsConfirmErrors, ej as PaymentIntentsCreateResponses, ek as PaymentIntentsCreateErrors, el as PaymentIntentsGetResponses, em as PaymentIntentsGetErrors, en as PaymentIntentsListResponses, eo as PaymentIntentsListErrors, ep as PaymentLinksActivateResponses, eq as PaymentLinksActivateErrors, er as PaymentLinksArchiveResponses, es as PaymentLinksArchiveErrors, et as PaymentLinksCreateResponses, eu as PaymentLinksCreateErrors, ev as PaymentLinksDeactivateResponses, ew as PaymentLinksDeactivateErrors, ex as PaymentLinksExpireResponses, ey as PaymentLinksExpireErrors, ez as PaymentLinksGetResponses, eA as PaymentLinksGetErrors, eB as PaymentLinksListResponses, eC as PaymentLinksListErrors, eD as PaymentLinksUpdateResponses, eE as PaymentLinksUpdateErrors, eF as PricesArchiveResponses, eG as PricesArchiveErrors, eH as PricesCreateResponses, eI as PricesCreateErrors, eJ as PricesGetResponses, eK as PricesGetErrors, eL as PricesListResponses, eM as PricesListErrors, eN as PricesUpdateResponses, eO as PricesUpdateErrors, eP as ProductsCreateResponses, eQ as ProductsCreateErrors, eR as ProductsGetResponses, eS as ProductsGetErrors, eT as ProductsListResponses, eU as ProductsListErrors, eV as ProductsUpdateResponses, eW as ProductsUpdateErrors, eX as RefundsCreateResponses, eY as RefundsCreateErrors, eZ as RefundsGetResponses, e_ as RefundsGetErrors, e$ as RefundsListResponses, f0 as RefundsListErrors, f1 as SubscriptionsCancelResponses, f2 as SubscriptionsCancelErrors, f3 as SubscriptionsCreateResponses, f4 as SubscriptionsCreateErrors, f5 as SubscriptionsGetResponses, f6 as SubscriptionsGetErrors, f7 as SubscriptionsListResponses, f8 as SubscriptionsListErrors, f9 as SubscriptionsUpdateResponses, fa as SubscriptionsUpdateErrors, fb as TransactionsGetResponses, fc as TransactionsGetErrors, fd as TransactionsListResponses, fe as TransactionsListErrors, ff as WebhookDeliveriesGetResponses, fg as WebhookDeliveriesGetErrors, fh as WebhookDeliveriesListResponses, fi as WebhookDeliveriesListErrors, fj as WebhookDeliveriesRetryResponses, fk as WebhookDeliveriesRetryErrors, fl as WebhookEndpointsCreateResponses, fm as WebhookEndpointsCreateErrors, fn as WebhookEndpointsDeleteResponses, fo as WebhookEndpointsDeleteErrors, fp as WebhookEndpointsGetResponses, fq as WebhookEndpointsGetErrors, fr as WebhookEndpointsListResponses, fs as WebhookEndpointsListErrors, ft as WebhookEndpointsRotateSecretResponses, fu as WebhookEndpointsRotateSecretErrors, fv as WebhookEndpointsUpdateResponses, fw as WebhookEndpointsUpdateErrors } from './types.gen-wJnoF511.js';
export { fx as ApplyCartDiscountCodeInput, fy as AttachPaymentMethodRequest, fz as AuthenticationError, fA as AvsCodeInterpretation, fB as BacsDirectDebitDetails, fC as BankAccountDetails, fD as BatchIngestRequest, fE as Benefit, fF as BillingAnchorRulesResponse, fG as BillingDetails, fH as BillingIntervalsResponse, fI as BillingPreviewErrorResponse, fJ as BillingPreviewResponse, fK as Business, fL as CancelOrderRequest, fM as CancelPaymentIntentRequest, fN as CancelPaymentRequest, fO as CancelSetupIntentRequest, fP as CancelSubscriptionInput, fQ as CancelSubscriptionRequest, fR as CancelSubscriptionScheduleRequest, fS as CapturePaymentIntentRequest, fT as CapturePaymentRequest, fU as CardDetails, fV as CartCheckoutSession, fW as CartConversionResponse, fX as CartLineItem, fY as CartLineItemInput, fZ as CartLineItemRecurring, f_ as CartSession, f$ as CartSessionErrorResponse, g0 as CartSessionResponse, g1 as CartSessionStatus, g2 as CartSessionsAddLineItemError, g3 as CartSessionsApplyDiscountCodeError, g4 as CartSessionsConvertError, g5 as CartSessionsCreateError, g6 as CartSessionsGetError, g7 as CartSessionsRemoveLineItemError, g8 as CartSessionsToggleAddOnError, g9 as CartSessionsUpdateLineItemError, ga as ChargeCaptureResponse, gb as ChargeCreateResponse, gc as ChargeDuplicateErrorResponse, gd as ChargeErrorResponse, ge as ChargeListResponse, gf as ChargeRefundResponse, gg as ChargeRetrieveResponse, gh as CheckoutSession, gi as CheckoutSessionCreateResponse, gj as CheckoutSessionErrorResponse, gk as CheckoutSessionExpireResponse, gl as CheckoutSessionRetrieveResponse, gm as CheckoutSessionsCreateError, gn as CheckoutSessionsExpireError, go as CheckoutSessionsGetError, gp as ClientOptions, gq as CollectionSchedule, gr as ConfirmPaymentIntentRequest, gs as ConfirmSetupIntentRequest, gt as CreateCartSessionInput, gu as CreateCheckoutSessionInput, gv as CreateCreditNoteInput, gw as CreateCustomerPortalSessionRequest, gx as CreateDiscountInput, gy as CreateExportRequest, gz as CreateImportRequest, gA as CreateMandateRequest, gB as CreateMeterPriceRequest, gC as CreateMeterRequest, gD as CreateMeterResponse, gE as CreateOrderRequest, gF as CreatePaymentIntentRequest, gG as CreatePriceRequest, gH as CreateProductRequest, gI as CreateRefundInput, gJ as CreateSetupIntentRequest, gK as CreateSubscriptionItemInput, gL as CreateSubscriptionScheduleRequest, gM as CreateTaxRateRequest, gN as CreateTerminalPaymentRequest, gO as CreateTestEventRequest, gP as CreateVoidInput, gQ as CreditEligibilityResponse, gR as CreditNote, gS as CreditNoteCreateResponse, gT as CreditNoteEligibilityResponse, gU as CreditNoteLine, gV as CreditNoteLineList, gW as CreditNoteListResponse, gX as CreditNotePreview, gY as CreditNotePreviewResponse, gZ as CreditNoteResponse, g_ as CreditNoteRetrieveResponse, g$ as CreditNoteVoidResponse, h0 as CustomerCreateResponse, h1 as CustomerInvoice, h2 as CustomerListResponse, h3 as CustomerMeter, h4 as CustomerMeterErrorResponse, h5 as CustomerMeterList, h6 as CustomerMeterResponse, h7 as CustomerMetersGetError, h8 as CustomerMetersListError, h9 as CustomerOrder, ha as CustomerPayment, hb as CustomerPaymentMethodsListResponse, hc as CustomerPortalCustomerGetError, hd as CustomerPortalErrorResponse, he as CustomerPortalInvoicesGetError, hf as CustomerPortalInvoicesListError, hg as CustomerPortalMandatesListError, hh as CustomerPortalMandatesReauthorizeError, hi as CustomerPortalSessionCreateResponse, hj as CustomerPortalSessionsCreateError, hk as CustomerPortalSubscriptionsCancelError, hl as CustomerPortalSubscriptionsGetError, hm as CustomerPortalSubscriptionsListError, hn as CustomerRetrieveResponse, ho as CustomerSubscription, hp as CustomerUpdateResponse, hq as CvvCodeInterpretation, hr as DdCaptureSession, hs as DdCaptureSessionResponse, ht as DdMandateRequestCancelResponse, hu as DdMandateRequestConsumeResponse, hv as DdMandateRequestCreateResponse, hw as DeclineAnalyticsResponse, hx as Discount, hy as DiscountCreateResponse, hz as DiscountDeleteResponse, hA as DiscountListResponse, hB as DiscountRetrieveResponse, hC as DiscountUpdateResponse, hD as Dispute, hE as Entitlement, hF as EntitlementCheck, hG as EntitlementCheckResponse, hH as EntitlementListResponse, hI as ErrorResponse, hJ as Event, hK as EventErrorResponse, hL as EventListResponse, hM as EventRequest, hN as EventsGetError, hO as EventsListError, hP as EventsResendError, hQ as Export, hR as ExportCreateResponse, hS as ExportRetrieveResponse, hT as ExternalUpsertResponse, hU as ForbiddenError, hV as FulfillOrderRequest, hW as Import, hX as ImportCreateResponse, hY as ImportRetrieveResponse, hZ as Invoice, h_ as InvoiceCommentDetail, h$ as InvoiceCommentDetailResponse, i0 as InvoiceCommentListDetailResponse, i1 as InvoiceListResponse, i2 as InvoiceResponse, i3 as Mandate, i4 as MandateActionRequest, i5 as MandateActionResponse, i6 as MandateListItem, i7 as MandateListResponse, i8 as MandateRequestLookupResponse, i9 as MandateResponse, ia as MarkDeliveredResponse, ib as MeterError, ic as MeterGetResponse, id as MeterListResponse, ie as MeterPriceError, ig as MeterPriceListResponse, ih as MeterPriceResponse, ii as NotFoundError, ij as OpenDispute, ik as Order, il as OrderErrorResponse, im as OrderLineItem, io as OrderListResponse, ip as Pagination, iq as PauseSubscriptionInput, ir as PayOrderRequest, is as Payment, it as PaymentAttempt, iu as PaymentAttemptErrorResponse, iv as PaymentAttemptListResponse, iw as PaymentAttemptSingleResponse, ix as PaymentErrorResponse, iy as PaymentIntent, iz as PaymentIntentErrorResponse, iA as PaymentIntentListResponse, iB as PaymentIntentsCancelError, iC as PaymentIntentsCaptureError, iD as PaymentIntentsConfirmError, iE as PaymentIntentsCreateError, iF as PaymentIntentsGetError, iG as PaymentIntentsListError, iH as PaymentLinksActivateError, iI as PaymentLinksArchiveError, iJ as PaymentLinksCreateError, iK as PaymentLinksDeactivateError, iL as PaymentLinksExpireError, iM as PaymentLinksGetError, iN as PaymentLinksListError, iO as PaymentLinksUpdateError, iP as PaymentListResponse, iQ as PaymentMethod, iR as PaymentMethodList, iS as PaymentSecurityResponse, iT as PaymentSecurityResult, iU as Payout, iV as PayoutPayment, iW as PhaseItem, iX as PortalCustomer, iY as PortalCustomerResponse, iZ as PortalInvoice, i_ as PortalInvoiceList, i$ as PortalInvoiceResponse, j0 as PortalMandate, j1 as PortalMandateList, j2 as PortalReauthorizeMandateRequest, j3 as PortalReauthorizeMandateResponse, j4 as PortalSubscription, j5 as PortalSubscriptionCancelResponse, j6 as PortalSubscriptionList, j7 as PortalSubscriptionResponse, j8 as PreviewCollectionRequest, j9 as PreviewCollectionResponse, ja as PreviewCreditNoteInput, jb as Price, jc as PriceErrorResponse, jd as PriceListResponse, je as PriceTier, jf as PricesArchiveError, jg as PricesCreateError, jh as PricesGetError, ji as PricesListError, jj as PricesUpdateError, jk as Product, jl as ProductCreateResponse, jm as ProductErrorResponse, jn as ProductListResponse, jo as ProductRetrieveResponse, jp as ProductUpdateResponse, jq as ProductsCreateError, jr as ProductsGetError, js as ProductsListError, jt as ProductsUpdateError, ju as Refund, jv as RefundCreateResponse, jw as RefundListResponse, jx as RefundRetrieveResponse, jy as RefundTerminalPaymentRequest, jz as ReleaseSubscriptionScheduleRequest, jA as ResendWebhookResponse, jB as RetryEligibilityResponse, jC as ScheduleCollectionRequest, jD as ScheduleCollectionResponse, jE as SchedulePhase, jF as SetupIntent, jG as SetupIntentError, jH as SetupIntentList, jI as SetupIntentNextAction, jJ as StaleUpdateResponse, jK as Subscription, jL as SubscriptionCancelResponse, jM as SubscriptionCancelSubscriptionResponse, jN as SubscriptionChangePlanResponse, jO as SubscriptionChangeQuantityResponse, jP as SubscriptionCreateResponse, jQ as SubscriptionItem, jR as SubscriptionItemCreateResponse, jS as SubscriptionItemDeleteResponse, jT as SubscriptionItemListResponse, jU as SubscriptionItemUpdateResponse, jV as SubscriptionListResponse, jW as SubscriptionPauseResponse, jX as SubscriptionPreviewRenewalResponse, jY as SubscriptionReactivateResponse, jZ as SubscriptionResumeResponse, j_ as SubscriptionRetrieveResponse, j$ as SubscriptionSchedule, k0 as SubscriptionScheduleErrorResponse, k1 as SubscriptionScheduleListResponse, k2 as SubscriptionTerms, k3 as SubscriptionUpdateResponse, k4 as SuccessResponse, k5 as TaxRate, k6 as TaxRateErrorResponse, k7 as TaxRateListResponse, k8 as TerminalDevice, k9 as TerminalDeviceErrorResponse, ka as TerminalDeviceListResponse, kb as TerminalDeviceResponse, kc as TerminalPayment, kd as TerminalPaymentErrorResponse, ke as TerminalPaymentListResponse, kf as TerminalPaymentResponse, kg as TestEventResponse, kh as ToggleCartAddOnInput, ki as Transaction, kj as TransactionListResponse, kk as TransactionRetrieveResponse, kl as TransactionReversalEligibilityResponse, km as TransactionsGetError, kn as TransactionsListError, ko as TransformQuantity, kp as UnchangedContentResponse, kq as UpdateCartLineItemInput, kr as UpdateDiscountInput, ks as UpdateMeterPriceRequest, kt as UpdateMeterRequest, ku as UpdateMeterResponse, kv as UpdateOrderRequest, kw as UpdatePaymentIntentRequest, kx as UpdatePaymentMethodRequest, ky as UpdatePriceRequest, kz as UpdateProductRequest, kA as UpdateSetupIntentRequest, kB as UpdateSubscriptionItemInput, kC as UpdateSubscriptionScheduleRequest, kD as UpdateTaxRateRequest, kE as UsageAggregateResponse, kF as UsageBalanceMeter, kG as UsageBalanceResponse, U as UsageEvent, kH as UsageEventError, kI as UsageEventListResponse, kJ as UsageEventRecord, kK as ValidateBankAccountRequest, kL as ValidateBankAccountResponse, kM as ValidationError, kN as Void, kO as VoidCreateResponse, kP as VoidListResponse, kQ as VoidRetrieveResponse, kR as VoidTerminalPaymentRequest, kS as WebhookDeliveriesGetError, kT as WebhookDeliveriesListError, kU as WebhookDeliveriesRetryError, kV as WebhookDelivery, kW as WebhookDeliveryErrorResponse, kX as WebhookDeliveryListResponse, kY as WebhookDeliveryResponse, kZ as WebhookDeliveryRetryResponse, k_ as WebhookEndpoint, k$ as WebhookEvent, l0 as Webhooks, l1 as WebhooksCheckoutSessionCompletedWebhookPayload, l2 as WebhooksCheckoutSessionCompletedWebhookRequest, l3 as WebhooksCheckoutSessionExpiredWebhookPayload, l4 as WebhooksCheckoutSessionExpiredWebhookRequest, l5 as WebhooksCollectionFailedWebhookPayload, l6 as WebhooksCollectionFailedWebhookRequest, l7 as WebhooksCollectionIndemnityClaimedWebhookPayload, l8 as WebhooksCollectionIndemnityClaimedWebhookRequest, l9 as WebhooksCollectionNoticeSentWebhookPayload, la as WebhooksCollectionNoticeSentWebhookRequest, lb as WebhooksCollectionScheduledWebhookPayload, lc as WebhooksCollectionScheduledWebhookRequest, ld as WebhooksCollectionSucceededWebhookPayload, le as WebhooksCollectionSucceededWebhookRequest, lf as WebhooksCreditNoteCreatedWebhookPayload, lg as WebhooksCreditNoteCreatedWebhookRequest, lh as WebhooksCreditNoteIssuedWebhookPayload, li as WebhooksCreditNoteIssuedWebhookRequest, lj as WebhooksCreditNoteVoidedWebhookPayload, lk as WebhooksCreditNoteVoidedWebhookRequest, ll as WebhooksCustomerCreatedWebhookPayload, lm as WebhooksCustomerCreatedWebhookRequest, ln as WebhooksCustomerUpdatedWebhookPayload, lo as WebhooksCustomerUpdatedWebhookRequest, lp as WebhooksInvoiceCreatedWebhookPayload, lq as WebhooksInvoiceCreatedWebhookRequest, lr as WebhooksInvoiceOverdueWebhookPayload, ls as WebhooksInvoiceOverdueWebhookRequest, lt as WebhooksInvoicePaidWebhookPayload, lu as WebhooksInvoicePaidWebhookRequest, lv as WebhooksMandateActivatedWebhookPayload, lw as WebhooksMandateActivatedWebhookRequest, lx as WebhooksMandateAuddisRejectedWebhookPayload, ly as WebhooksMandateAuddisRejectedWebhookRequest, lz as WebhooksMandateCancelledWebhookPayload, lA as WebhooksMandateCancelledWebhookRequest, lB as WebhooksMandateCreatedWebhookPayload, lC as WebhooksMandateCreatedWebhookRequest, lD as WebhooksMandateSuspendedWebhookPayload, lE as WebhooksMandateSuspendedWebhookRequest, lF as WebhooksMeterArchivedWebhookPayload, lG as WebhooksMeterArchivedWebhookRequest, lH as WebhooksMeterCreatedWebhookPayload, lI as WebhooksMeterCreatedWebhookRequest, lJ as WebhooksMeterPriceCreatedWebhookPayload, lK as WebhooksMeterPriceCreatedWebhookRequest, lL as WebhooksMeterPriceDeactivatedWebhookPayload, lM as WebhooksMeterPriceDeactivatedWebhookRequest, lN as WebhooksMeterPriceUpdatedWebhookPayload, lO as WebhooksMeterPriceUpdatedWebhookRequest, lP as WebhooksMeterUpdatedWebhookPayload, lQ as WebhooksMeterUpdatedWebhookRequest, lR as WebhooksOrderCreatedWebhookPayload, lS as WebhooksOrderCreatedWebhookRequest, lT as WebhooksOrderFulfilledWebhookPayload, lU as WebhooksOrderFulfilledWebhookRequest, lV as WebhooksOrderPaidWebhookPayload, lW as WebhooksOrderPaidWebhookRequest, lX as WebhooksPaymentFailedWebhookPayload, lY as WebhooksPaymentFailedWebhookRequest, lZ as WebhooksPaymentSucceededWebhookPayload, l_ as WebhooksPaymentSucceededWebhookRequest, l$ as WebhooksRefundCreatedWebhookPayload, m0 as WebhooksRefundCreatedWebhookRequest, m1 as WebhooksRefundSucceededWebhookPayload, m2 as WebhooksRefundSucceededWebhookRequest, m3 as WebhooksSettlementCreatedWebhookPayload, m4 as WebhooksSettlementCreatedWebhookRequest, m5 as WebhooksSubscriptionActivatedWebhookPayload, m6 as WebhooksSubscriptionActivatedWebhookRequest, m7 as WebhooksSubscriptionCanceledWebhookPayload, m8 as WebhooksSubscriptionCanceledWebhookRequest, m9 as WebhooksSubscriptionCreatedWebhookPayload, ma as WebhooksSubscriptionCreatedWebhookRequest, mb as WebhooksSubscriptionRenewedWebhookPayload, mc as WebhooksSubscriptionRenewedWebhookRequest, md as WebhooksTerminalPaymentCancelledWebhookPayload, me as WebhooksTerminalPaymentCancelledWebhookRequest, mf as WebhooksTerminalPaymentDeclinedWebhookPayload, mg as WebhooksTerminalPaymentDeclinedWebhookRequest, mh as WebhooksTerminalPaymentErrorWebhookPayload, mi as WebhooksTerminalPaymentErrorWebhookRequest, mj as WebhooksTerminalPaymentRequestedWebhookPayload, mk as WebhooksTerminalPaymentRequestedWebhookRequest, ml as WebhooksTerminalPaymentSucceededWebhookPayload, mm as WebhooksTerminalPaymentSucceededWebhookRequest, mn as WebhooksTerminalRefundSucceededWebhookPayload, mo as WebhooksTerminalRefundSucceededWebhookRequest, mp as WebhooksTerminalVoidSucceededWebhookPayload, mq as WebhooksTerminalVoidSucceededWebhookRequest, mr as WebhooksUsageEventIngestedWebhookPayload, ms as WebhooksUsageEventIngestedWebhookRequest, mt as WebhooksUsageEventRejectedWebhookPayload, mu as WebhooksUsageEventRejectedWebhookRequest, mv as WebhooksUsageInvoiceCreatedWebhookPayload, mw as WebhooksUsageInvoiceCreatedWebhookRequest, mx as WebhooksUsagePeriodFinalizedWebhookPayload, my as WebhooksUsagePeriodFinalizedWebhookRequest, mz as WebhooksUsageThresholdReachedWebhookPayload, mA as WebhooksUsageThresholdReachedWebhookRequest, mB as WebhooksVoidCreatedWebhookPayload, mC as WebhooksVoidCreatedWebhookRequest, mD as WebhooksVoidFailedWebhookPayload, mE as WebhooksVoidFailedWebhookRequest, mF as WebhooksVoidSucceededWebhookPayload, mG as WebhooksVoidSucceededWebhookRequest } from './types.gen-wJnoF511.js';
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
 * Set the cart's discount code. Pass `null` to clear. The code is stored only — discount pricing math has not shipped yet. Convert blocks with `CART_SESSION_DISCOUNT_PENDING` while a code is set.
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
 * Convert a cart session into a checkout session
 *
 * Atomically materialise a pending checkout session from the cart snapshot, flip the cart to `converted`, and emit `commerce.cart.converted` + `commerce.checkout.started` through the outbox.
 *
 * Idempotent on re-call (returns the existing checkout session). Concurrency-safe via a compare-and-swap lock on cart status.
 *
 * Validation that runs inside the lock and rolls back on failure:
 * - `CART_SESSION_EMPTY` — the cart has no line items.
 * - `CART_SESSION_DISCOUNT_PENDING` — the cart has a discount code set; clear it first.
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

export { type AnalyticsResource, AnalyticsRevenueMrrSummaryData, AnalyticsRevenueMrrSummaryResponse, AnalyticsRevenueMrrSummaryResponses, AnalyticsRevenueTimeSeriesData, AnalyticsRevenueTimeSeriesResponse, AnalyticsRevenueTimeSeriesResponses, BatchIngestResult, type CartResource, CartSessionsAddLineItemData, CartSessionsAddLineItemErrors, CartSessionsAddLineItemResponse, CartSessionsAddLineItemResponses, CartSessionsApplyDiscountCodeData, CartSessionsApplyDiscountCodeErrors, CartSessionsApplyDiscountCodeResponse, CartSessionsApplyDiscountCodeResponses, CartSessionsConvertData, CartSessionsConvertErrors, CartSessionsConvertResponse, CartSessionsConvertResponses, CartSessionsCreateData, CartSessionsCreateErrors, CartSessionsCreateResponse, CartSessionsCreateResponses, CartSessionsGetData, CartSessionsGetErrors, CartSessionsGetResponse, CartSessionsGetResponses, CartSessionsRemoveLineItemData, CartSessionsRemoveLineItemErrors, CartSessionsRemoveLineItemResponse, CartSessionsRemoveLineItemResponses, CartSessionsToggleAddOnData, CartSessionsToggleAddOnErrors, CartSessionsToggleAddOnResponse, CartSessionsToggleAddOnResponses, CartSessionsUpdateLineItemData, CartSessionsUpdateLineItemErrors, CartSessionsUpdateLineItemResponse, CartSessionsUpdateLineItemResponses, CheckoutSessionsCreateData, CheckoutSessionsCreateErrors, CheckoutSessionsCreateResponse, CheckoutSessionsCreateResponses, CheckoutSessionsExpireData, CheckoutSessionsExpireErrors, CheckoutSessionsExpireResponse, CheckoutSessionsExpireResponses, CheckoutSessionsGetData, CheckoutSessionsGetErrors, CheckoutSessionsGetResponse, CheckoutSessionsGetResponses, type CheckoutSessionsResource, CreditNotesCreateData, CreditNotesCreateErrors, CreditNotesCreateResponse, CreditNotesCreateResponses, CreditNotesGetData, CreditNotesGetErrors, CreditNotesGetResponse, CreditNotesGetResponses, CreditNotesListData, CreditNotesListErrors, CreditNotesListLinesData, CreditNotesListLinesErrors, CreditNotesListLinesResponse, CreditNotesListLinesResponses, CreditNotesListResponse, CreditNotesListResponses, CreditNotesPreviewData, CreditNotesPreviewErrors, CreditNotesPreviewResponse, CreditNotesPreviewResponses, type CreditNotesResource, CreditNotesVoidData, CreditNotesVoidErrors, CreditNotesVoidResponse, CreditNotesVoidResponses, CustomerMetersGetData, CustomerMetersGetErrors, CustomerMetersGetResponse, CustomerMetersGetResponses, CustomerMetersListData, CustomerMetersListErrors, CustomerMetersListResponse, CustomerMetersListResponses, CustomerPortalCustomerGetData, CustomerPortalCustomerGetErrors, CustomerPortalCustomerGetResponse, CustomerPortalCustomerGetResponses, CustomerPortalInvoicesGetData, CustomerPortalInvoicesGetErrors, CustomerPortalInvoicesGetResponse, CustomerPortalInvoicesGetResponses, CustomerPortalInvoicesListData, CustomerPortalInvoicesListErrors, CustomerPortalInvoicesListResponse, CustomerPortalInvoicesListResponses, CustomerPortalMandatesListData, CustomerPortalMandatesListErrors, CustomerPortalMandatesListResponse, CustomerPortalMandatesListResponses, CustomerPortalMandatesReauthorizeData, CustomerPortalMandatesReauthorizeErrors, CustomerPortalMandatesReauthorizeResponse, CustomerPortalMandatesReauthorizeResponses, CustomerPortalSessionsCreateData, CustomerPortalSessionsCreateErrors, CustomerPortalSessionsCreateResponse, CustomerPortalSessionsCreateResponses, CustomerPortalSubscriptionsCancelData, CustomerPortalSubscriptionsCancelErrors, CustomerPortalSubscriptionsCancelResponse, CustomerPortalSubscriptionsCancelResponses, CustomerPortalSubscriptionsGetData, CustomerPortalSubscriptionsGetErrors, CustomerPortalSubscriptionsGetResponse, CustomerPortalSubscriptionsGetResponses, CustomerPortalSubscriptionsListData, CustomerPortalSubscriptionsListErrors, CustomerPortalSubscriptionsListResponse, CustomerPortalSubscriptionsListResponses, type CustomerResource, CustomersCreateData, CustomersCreateErrors, CustomersCreateResponse, CustomersCreateResponses, CustomersGetData, CustomersGetErrors, CustomersGetResponse, CustomersGetResponses, CustomersListData, CustomersListErrors, CustomersListResponse, CustomersListResponses, CustomersPaymentMethodsListData, CustomersPaymentMethodsListErrors, CustomersPaymentMethodsListResponse, CustomersPaymentMethodsListResponses, CustomersPaymentRailsGetData, CustomersPaymentRailsGetErrors, CustomersPaymentRailsGetResponse, CustomersPaymentRailsGetResponses, CustomersPreferredRailsGetData, CustomersPreferredRailsGetErrors, CustomersPreferredRailsGetResponse, CustomersPreferredRailsGetResponses, type CustomersResource, CustomersUpdateData, CustomersUpdateErrors, CustomersUpdateResponse, CustomersUpdateResponses, DdMandateRequestsGetData, DdMandateRequestsGetErrors, DdMandateRequestsGetResponse, DdMandateRequestsGetResponses, DdPreviewData, DdPreviewErrors, DdPreviewResponse, DdPreviewResponses, type DdResource, DdValidateData, DdValidateErrors, DdValidateResponse, DdValidateResponses, DryRunResult, EntitlementsCheckData, EntitlementsCheckErrors, EntitlementsCheckResponse, EntitlementsCheckResponses, EntitlementsListData, EntitlementsListErrors, EntitlementsListResponse, EntitlementsListResponses, type EntitlementsResource, EventsGetData, EventsGetErrors, EventsGetResponse, EventsGetResponses, EventsListData, EventsListErrors, EventsListResponse, EventsListResponses, EventsResendData, EventsResendErrors, EventsResendResponse, EventsResendResponses, type EventsResource, type GeneratedResourceRuntime, type GeneratedResources, InvoicesCreateData, InvoicesCreateResponse, InvoicesCreateResponses, InvoicesFinalizeData, InvoicesFinalizeErrors, InvoicesFinalizeResponse, InvoicesFinalizeResponses, InvoicesGetData, InvoicesGetResponse, InvoicesGetResponses, InvoicesListData, InvoicesListResponse, InvoicesListResponses, InvoicesMarginEstimateData, InvoicesMarginEstimateErrors, InvoicesMarginEstimateResponse, InvoicesMarginEstimateResponses, type InvoicesResource, InvoicesSendData, InvoicesSendErrors, InvoicesSendResponse, InvoicesSendResponses, InvoicesUpdateData, InvoicesUpdateResponse, InvoicesUpdateResponses, InvoicesVoidData, InvoicesVoidErrors, InvoicesVoidResponse, InvoicesVoidResponses, MandatesCancelData, MandatesCancelErrors, MandatesCancelResponse, MandatesCancelResponses, MandatesCreateData, MandatesCreateErrors, MandatesCreateResponse, MandatesCreateResponses, MandatesGetData, MandatesGetErrors, MandatesGetResponse, MandatesGetResponses, MandatesListData, MandatesListErrors, MandatesListResponse, MandatesListResponses, MandatesReinstateData, MandatesReinstateErrors, MandatesReinstateResponse, MandatesReinstateResponses, type MandatesResource, MandatesScheduleCollectionData, MandatesScheduleCollectionErrors, MandatesScheduleCollectionResponse, MandatesScheduleCollectionResponses, MandatesSuspendData, MandatesSuspendErrors, MandatesSuspendResponse, MandatesSuspendResponses, OAuthConfig, type Options, PaymentIntentsCancelData, PaymentIntentsCancelErrors, PaymentIntentsCancelResponse, PaymentIntentsCancelResponses, PaymentIntentsCaptureData, PaymentIntentsCaptureErrors, PaymentIntentsCaptureResponse, PaymentIntentsCaptureResponses, PaymentIntentsConfirmData, PaymentIntentsConfirmErrors, PaymentIntentsConfirmResponse, PaymentIntentsConfirmResponses, PaymentIntentsCreateData, PaymentIntentsCreateErrors, PaymentIntentsCreateResponse, PaymentIntentsCreateResponses, PaymentIntentsGetData, PaymentIntentsGetErrors, PaymentIntentsGetResponse, PaymentIntentsGetResponses, PaymentIntentsListData, PaymentIntentsListErrors, PaymentIntentsListResponse, PaymentIntentsListResponses, type PaymentIntentsResource, PaymentLinksActivateData, PaymentLinksActivateErrors, PaymentLinksActivateResponse, PaymentLinksActivateResponses, PaymentLinksArchiveData, PaymentLinksArchiveErrors, PaymentLinksArchiveResponse, PaymentLinksArchiveResponses, PaymentLinksCreateData, PaymentLinksCreateErrors, PaymentLinksCreateResponse, PaymentLinksCreateResponses, PaymentLinksDeactivateData, PaymentLinksDeactivateErrors, PaymentLinksDeactivateResponse, PaymentLinksDeactivateResponses, PaymentLinksExpireData, PaymentLinksExpireErrors, PaymentLinksExpireResponse, PaymentLinksExpireResponses, PaymentLinksGetData, PaymentLinksGetErrors, PaymentLinksGetResponse, PaymentLinksGetResponses, PaymentLinksListData, PaymentLinksListErrors, PaymentLinksListResponse, PaymentLinksListResponses, type PaymentLinksResource, PaymentLinksUpdateData, PaymentLinksUpdateErrors, PaymentLinksUpdateResponse, PaymentLinksUpdateResponses, PricesArchiveData, PricesArchiveErrors, PricesArchiveResponse, PricesArchiveResponses, PricesCreateData, PricesCreateErrors, PricesCreateResponse, PricesCreateResponses, PricesGetData, PricesGetErrors, PricesGetResponse, PricesGetResponses, PricesListData, PricesListErrors, PricesListResponse, PricesListResponses, type PricesResource, PricesUpdateData, PricesUpdateErrors, PricesUpdateResponse, PricesUpdateResponses, ProductsCreateData, ProductsCreateErrors, ProductsCreateResponse, ProductsCreateResponses, ProductsGetData, ProductsGetErrors, ProductsGetResponse, ProductsGetResponses, ProductsListData, ProductsListErrors, ProductsListResponse, ProductsListResponses, type ProductsResource, ProductsUpdateData, ProductsUpdateErrors, ProductsUpdateResponse, ProductsUpdateResponses, RefundsCreateData, RefundsCreateErrors, RefundsCreateResponse, RefundsCreateResponses, RefundsGetData, RefundsGetErrors, RefundsGetResponse, RefundsGetResponses, RefundsListData, RefundsListErrors, RefundsListResponse, RefundsListResponses, type RefundsResource, RevKeenClient as RevKeen, RevKeenAPIError, RevKeenClient, type RevKeenClientOptions, RevKeenError, RevKeenTimeoutError, SubscriptionsCancelData, SubscriptionsCancelErrors, SubscriptionsCancelResponse, SubscriptionsCancelResponses, SubscriptionsCreateData, SubscriptionsCreateErrors, SubscriptionsCreateResponse, SubscriptionsCreateResponses, SubscriptionsGetData, SubscriptionsGetErrors, SubscriptionsGetResponse, SubscriptionsGetResponses, SubscriptionsListData, SubscriptionsListErrors, SubscriptionsListResponse, SubscriptionsListResponses, type SubscriptionsResource, SubscriptionsUpdateData, SubscriptionsUpdateErrors, SubscriptionsUpdateResponse, SubscriptionsUpdateResponses, TransactionsGetData, TransactionsGetErrors, TransactionsGetResponse, TransactionsGetResponses, TransactionsListData, TransactionsListErrors, TransactionsListResponse, TransactionsListResponses, type TransactionsResource, UsageIngestRequest, type UsageResource, WebhookDeliveriesGetData, WebhookDeliveriesGetErrors, WebhookDeliveriesGetResponse, WebhookDeliveriesGetResponses, WebhookDeliveriesListData, WebhookDeliveriesListErrors, WebhookDeliveriesListResponse, WebhookDeliveriesListResponses, WebhookDeliveriesRetryData, WebhookDeliveriesRetryErrors, WebhookDeliveriesRetryResponse, WebhookDeliveriesRetryResponses, WebhookEndpointsCreateData, WebhookEndpointsCreateErrors, WebhookEndpointsCreateResponse, WebhookEndpointsCreateResponses, WebhookEndpointsDeleteData, WebhookEndpointsDeleteErrors, WebhookEndpointsDeleteResponse, WebhookEndpointsDeleteResponses, WebhookEndpointsGetData, WebhookEndpointsGetErrors, WebhookEndpointsGetResponse, WebhookEndpointsGetResponses, WebhookEndpointsListData, WebhookEndpointsListErrors, WebhookEndpointsListResponse, WebhookEndpointsListResponses, type WebhookEndpointsResource, WebhookEndpointsRotateSecretData, WebhookEndpointsRotateSecretErrors, WebhookEndpointsRotateSecretResponse, WebhookEndpointsRotateSecretResponses, WebhookEndpointsUpdateData, WebhookEndpointsUpdateErrors, WebhookEndpointsUpdateResponse, WebhookEndpointsUpdateResponses, type WebhookResource, analyticsRevenueMrrSummary, analyticsRevenueTimeSeries, buildGeneratedResources, cartSessionsAddLineItem, cartSessionsApplyDiscountCode, cartSessionsConvert, cartSessionsCreate, cartSessionsGet, cartSessionsRemoveLineItem, cartSessionsToggleAddOn, cartSessionsUpdateLineItem, checkoutSessionsCreate, checkoutSessionsExpire, checkoutSessionsGet, creditNotesCreate, creditNotesGet, creditNotesList, creditNotesListLines, creditNotesPreview, creditNotesVoid, customerMetersGet, customerMetersList, customerPortalCustomerGet, customerPortalInvoicesGet, customerPortalInvoicesList, customerPortalMandatesList, customerPortalMandatesReauthorize, customerPortalSessionsCreate, customerPortalSubscriptionsCancel, customerPortalSubscriptionsGet, customerPortalSubscriptionsList, customersCreate, customersGet, customersList, customersPaymentMethodsList, customersPaymentRailsGet, customersPreferredRailsGet, customersUpdate, ddMandateRequestsGet, ddPreview, ddValidate, RevKeenClient as default, entitlementsCheck, entitlementsList, eventsGet, eventsList, eventsResend, invoicesCreate, invoicesFinalize, invoicesGet, invoicesList, invoicesMarginEstimate, invoicesSend, invoicesUpdate, invoicesVoid, mandatesCancel, mandatesCreate, mandatesGet, mandatesList, mandatesReinstate, mandatesScheduleCollection, mandatesSuspend, paymentIntentsCancel, paymentIntentsCapture, paymentIntentsConfirm, paymentIntentsCreate, paymentIntentsGet, paymentIntentsList, paymentLinksActivate, paymentLinksArchive, paymentLinksCreate, paymentLinksDeactivate, paymentLinksExpire, paymentLinksGet, paymentLinksList, paymentLinksUpdate, pricesArchive, pricesCreate, pricesGet, pricesList, pricesUpdate, productsCreate, productsGet, productsList, productsUpdate, refundsCreate, refundsGet, refundsList, subscriptionsCancel, subscriptionsCreate, subscriptionsGet, subscriptionsList, subscriptionsUpdate, transactionsGet, transactionsList, webhookDeliveriesGet, webhookDeliveriesList, webhookDeliveriesRetry, webhookEndpointsCreate, webhookEndpointsDelete, webhookEndpointsGet, webhookEndpointsList, webhookEndpointsRotateSecret, webhookEndpointsUpdate };
