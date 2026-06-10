import { HttpClient } from "../core/http.js";

export interface MrrSummary {
  mrr: number;
  mrr_growth: number;
  mrr_growth_rate: number;
  [key: string]: unknown;
}

export interface RevenueTimeSeriesPoint {
  date: string;
  revenue: number;
  [key: string]: unknown;
}

export interface ArAging {
  current: number;
  days_1_30: number;
  days_31_60: number;
  days_61_90: number;
  days_90_plus: number;
  [key: string]: unknown;
}

export interface Dso {
  dso: number;
  period: string;
  [key: string]: unknown;
}

export interface CustomerLtv {
  average_ltv: number;
  median_ltv: number;
  [key: string]: unknown;
}

export interface CustomerAnalytics {
  total_revenue: number;
  total_invoices: number;
  total_payments: number;
  [key: string]: unknown;
}

export interface PaymentLinkConversion {
  total_links: number;
  converted: number;
  conversion_rate: number;
  [key: string]: unknown;
}

export interface CheckoutFunnel {
  sessions: number;
  started: number;
  completed: number;
  conversion_rate: number;
  [key: string]: unknown;
}

export interface AbandonmentSummary {
  total_abandoned: number;
  abandonment_rate: number;
  [key: string]: unknown;
}

export interface WinbackSummary {
  total_winbacks: number;
  winback_rate: number;
  [key: string]: unknown;
}

export class AnalyticsResource {
  constructor(private http: HttpClient) {}

  async mrrSummary(params?: Record<string, unknown>): Promise<MrrSummary> {
    return this.http.get<MrrSummary>("/analytics/revenue/mrr-summary", params);
  }

  async revenueTimeSeries(params?: Record<string, unknown>): Promise<RevenueTimeSeriesPoint[]> {
    return this.http.get<RevenueTimeSeriesPoint[]>("/analytics/revenue/time-series", params);
  }

  async arAging(params?: Record<string, unknown>): Promise<ArAging> {
    return this.http.get<ArAging>("/analytics/invoices/ar-aging", params);
  }

  async dso(params?: Record<string, unknown>): Promise<Dso> {
    return this.http.get<Dso>("/analytics/collections/dso", params);
  }

  async customerLtv(params?: Record<string, unknown>): Promise<CustomerLtv> {
    return this.http.get<CustomerLtv>("/analytics/customers/ltv", params);
  }

  async customerAnalytics(customerId: string, params?: Record<string, unknown>): Promise<CustomerAnalytics> {
    return this.http.get<CustomerAnalytics>(`/analytics/customers/${customerId}`, params);
  }

  async paymentLinkConversion(params?: Record<string, unknown>): Promise<PaymentLinkConversion> {
    return this.http.get<PaymentLinkConversion>("/analytics/payment-links/conversion", params);
  }

  async checkoutFunnel(params?: Record<string, unknown>): Promise<CheckoutFunnel> {
    return this.http.get<CheckoutFunnel>("/analytics/checkout/funnel", params);
  }

  async abandonmentSummary(params?: Record<string, unknown>): Promise<AbandonmentSummary> {
    return this.http.get<AbandonmentSummary>("/analytics/checkout/abandonment/summary", params);
  }

  async abandonmentDetails(params?: Record<string, unknown>): Promise<unknown> {
    return this.http.get<unknown>("/analytics/checkout/abandonment", params);
  }

  async winbackSummary(params?: Record<string, unknown>): Promise<WinbackSummary> {
    return this.http.get<WinbackSummary>("/analytics/checkout/winback/summary", params);
  }

  async winbackDetails(params?: Record<string, unknown>): Promise<unknown> {
    return this.http.get<unknown>("/analytics/checkout/winback", params);
  }
}
