import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface CreditNote {
  id: string;
  invoice_id: string;
  amount: number;
  currency: string;
  status: string;
  reason?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateCreditNoteParams {
  invoice_id: string;
  amount: number;
  reason?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class CreditNotesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateCreditNoteParams): Promise<CreditNote> {
    return this.http.post<CreditNote>("/credit_notes", params);
  }

  async list(params?: ListParams & { invoice_id?: string }): Promise<ListResponse<CreditNote>> {
    return this.http.get<ListResponse<CreditNote>>("/credit_notes", params as Record<string, unknown>);
  }

  async get(id: string): Promise<CreditNote> {
    return this.http.get<CreditNote>(`/credit_notes/${id}`);
  }

  async void(id: string): Promise<CreditNote> {
    return this.http.post<CreditNote>(`/credit_notes/${id}/void`);
  }
}
