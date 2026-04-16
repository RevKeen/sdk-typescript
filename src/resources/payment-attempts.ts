import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface PaymentAttempt {
  id: string;
  transaction_id?: string;
  invoice_id?: string;
  subscription_id?: string;
  status: string;
  amount: number;
  currency: string;
  gateway_order_id?: string;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface PaymentAttemptSecurity {
  id: string;
  avs_response?: string;
  cvv_response?: string;
  fraud_score?: number;
  [key: string]: unknown;
}

export interface DeclineAnalytics {
  total_declines: number;
  decline_rate: number;
  by_reason: Record<string, number>;
  [key: string]: unknown;
}

export interface RetryEligibility {
  eligible: boolean;
  reason?: string;
  next_retry_at?: string;
  [key: string]: unknown;
}

export class PaymentAttemptsResource {
  constructor(private http: HttpClient) {}

  async list(params?: ListParams & { status?: string }): Promise<ListResponse<PaymentAttempt>> {
    return this.http.get<ListResponse<PaymentAttempt>>("/payment-attempts", params as Record<string, unknown>);
  }

  async get(id: string): Promise<PaymentAttempt> {
    return this.http.get<PaymentAttempt>(`/payment-attempts/${id}`);
  }

  async getByGatewayOrder(orderId: string): Promise<PaymentAttempt> {
    return this.http.get<PaymentAttempt>(`/payment-attempts/by-gateway-order/${orderId}`);
  }

  async getByTransaction(transactionId: string): Promise<ListResponse<PaymentAttempt>> {
    return this.http.get<ListResponse<PaymentAttempt>>(`/payment-attempts/transaction/${transactionId}`);
  }

  async getBySubscription(subscriptionId: string): Promise<ListResponse<PaymentAttempt>> {
    return this.http.get<ListResponse<PaymentAttempt>>(`/payment-attempts/subscription/${subscriptionId}`);
  }

  async getByInvoice(invoiceId: string): Promise<ListResponse<PaymentAttempt>> {
    return this.http.get<ListResponse<PaymentAttempt>>(`/payment-attempts/invoice/${invoiceId}`);
  }

  async getRetryEligibility(subscriptionId: string): Promise<RetryEligibility> {
    return this.http.get<RetryEligibility>(`/payment-attempts/subscription/${subscriptionId}/retry-eligibility`);
  }

  async getDeclineAnalytics(params?: Record<string, unknown>): Promise<DeclineAnalytics> {
    return this.http.get<DeclineAnalytics>("/payment-attempts/analytics/declines", params);
  }

  async getRetryReady(params?: ListParams): Promise<ListResponse<PaymentAttempt>> {
    return this.http.get<ListResponse<PaymentAttempt>>("/payment-attempts/retry-ready", params as Record<string, unknown>);
  }

  async getSecurity(id: string): Promise<PaymentAttemptSecurity> {
    return this.http.get<PaymentAttemptSecurity>(`/payment-attempts/${id}/security`);
  }

  async getSecurityCodes(): Promise<unknown> {
    return this.http.get<unknown>("/payment-attempts/security/codes");
  }
}
