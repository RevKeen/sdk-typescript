import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Invoice {
  id: string;
  customer_id: string;
  status: string;
  amount_due: number;
  amount_paid: number;
  currency: string;
  due_date?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateInvoiceParams {
  customer_id: string;
  items?: Array<{ description?: string; amount: number; quantity?: number; [key: string]: unknown }>;
  due_date?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateInvoiceParams {
  due_date?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface InvoiceComment {
  id: string;
  invoice_id: string;
  content: string;
  created_at: string;
  [key: string]: unknown;
}

export interface AddCommentParams {
  content: string;
  [key: string]: unknown;
}

export interface RefundInvoiceParams {
  amount?: number;
  reason?: string;
  [key: string]: unknown;
}

export interface CreditEligibility {
  eligible: boolean;
  max_amount: number;
  [key: string]: unknown;
}

export interface InvoiceCreditNoteParams {
  amount: number;
  reason?: string;
  [key: string]: unknown;
}

export class InvoicesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateInvoiceParams): Promise<Invoice> {
    return this.http.post<Invoice>("/invoices", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<Invoice>> {
    return this.http.get<ListResponse<Invoice>>("/invoices", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Invoice> {
    return this.http.get<Invoice>(`/invoices/${id}`);
  }

  async update(id: string, params: UpdateInvoiceParams): Promise<Invoice> {
    return this.http.patch<Invoice>(`/invoices/${id}`, params);
  }

  async del(id: string): Promise<void> {
    return this.http.delete<void>(`/invoices/${id}`);
  }

  async finalize(id: string): Promise<Invoice> {
    return this.http.post<Invoice>(`/invoices/${id}/finalize`);
  }

  async void(id: string): Promise<Invoice> {
    return this.http.post<Invoice>(`/invoices/${id}/void`);
  }

  async send(id: string): Promise<Invoice> {
    return this.http.post<Invoice>(`/invoices/${id}/send`);
  }

  async pay(id: string, params?: Record<string, unknown>): Promise<Invoice> {
    return this.http.post<Invoice>(`/invoices/${id}/pay`, params);
  }

  async refund(id: string, params?: RefundInvoiceParams): Promise<unknown> {
    return this.http.post<unknown>(`/invoices/${id}/refund`, params);
  }

  async reject(id: string, params?: Record<string, unknown>): Promise<Invoice> {
    return this.http.post<Invoice>(`/invoices/${id}/reject`, params);
  }

  async listComments(id: string, params?: ListParams): Promise<ListResponse<InvoiceComment>> {
    return this.http.get<ListResponse<InvoiceComment>>(`/invoices/${id}/comments`, params as Record<string, unknown>);
  }

  async addComment(id: string, params: AddCommentParams): Promise<InvoiceComment> {
    return this.http.post<InvoiceComment>(`/invoices/${id}/comments`, params);
  }

  async upsertExternal(source: string, externalId: string, params: CreateInvoiceParams): Promise<Invoice> {
    return this.http.put<Invoice>(`/invoices/external/${source}/${externalId}`, params);
  }

  async externalBatch(params: unknown): Promise<unknown> {
    return this.http.put<unknown>("/invoices/external/batch", params);
  }

  async getCreditEligibility(id: string): Promise<CreditEligibility> {
    return this.http.get<CreditEligibility>(`/invoices/${id}/credit-eligibility`);
  }

  async listCreditNotes(id: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/invoices/${id}/credit-notes`, params as Record<string, unknown>);
  }

  async createCreditNote(id: string, params: InvoiceCreditNoteParams): Promise<unknown> {
    return this.http.post<unknown>(`/invoices/${id}/credit-note`, params);
  }
}
