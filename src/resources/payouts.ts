import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Payout {
  id: string;
  amount: number;
  currency: string;
  status: string;
  arrival_date?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface PayoutPayment {
  id: string;
  payout_id: string;
  amount: number;
  type: string;
  [key: string]: unknown;
}

export class PayoutsResource {
  constructor(private http: HttpClient) {}

  async list(params?: ListParams & { status?: string }): Promise<ListResponse<Payout>> {
    return this.http.get<ListResponse<Payout>>("/payouts", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Payout> {
    return this.http.get<Payout>(`/payouts/${id}`);
  }

  async listPayments(id: string, params?: ListParams): Promise<ListResponse<PayoutPayment>> {
    return this.http.get<ListResponse<PayoutPayment>>(`/payouts/${id}/payments`, params as Record<string, unknown>);
  }
}
