import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface VoidTransaction {
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

export interface CreateVoidParams {
  charge_id?: string;
  payment_intent_id?: string;
  reason?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class VoidsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateVoidParams): Promise<VoidTransaction> {
    return this.http.post<VoidTransaction>("/voids", params);
  }

  async list(params?: ListParams & { charge_id?: string }): Promise<ListResponse<VoidTransaction>> {
    return this.http.get<ListResponse<VoidTransaction>>("/voids", params as Record<string, unknown>);
  }

  async get(id: string): Promise<VoidTransaction> {
    return this.http.get<VoidTransaction>(`/voids/${id}`);
  }
}
