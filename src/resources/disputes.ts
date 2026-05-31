import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Dispute {
  id: string;
  charge_id?: string;
  amount: number;
  currency: string;
  status: string;
  reason?: string;
  evidence_due_by?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export class DisputesResource {
  constructor(private http: HttpClient) {}

  async list(params?: ListParams & { status?: string }): Promise<ListResponse<Dispute>> {
    return this.http.get<ListResponse<Dispute>>("/disputes", params as Record<string, unknown>);
  }

  async listOpen(params?: ListParams): Promise<ListResponse<Dispute>> {
    return this.http.get<ListResponse<Dispute>>("/disputes/open", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Dispute> {
    return this.http.get<Dispute>(`/disputes/${id}`);
  }
}
