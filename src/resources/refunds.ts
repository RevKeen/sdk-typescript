import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Refund {
  id: string;
  amount: number;
  currency: string;
  status: string;
  charge_id?: string;
  payment_intent_id?: string;
  reason?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateRefundParams {
  charge_id?: string;
  payment_intent_id?: string;
  amount?: number;
  reason?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class RefundsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateRefundParams): Promise<Refund> {
    return this.http.post<Refund>("/refunds", params);
  }

  async list(params?: ListParams & { charge_id?: string }): Promise<ListResponse<Refund>> {
    return this.http.get<ListResponse<Refund>>("/refunds", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Refund> {
    return this.http.get<Refund>(`/refunds/${id}`);
  }
}
