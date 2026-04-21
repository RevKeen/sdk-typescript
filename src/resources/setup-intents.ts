import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface SetupIntent {
  id: string;
  customer_id?: string;
  payment_method_id?: string;
  status: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateSetupIntentParams {
  customer_id?: string;
  payment_method_id?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateSetupIntentParams {
  payment_method_id?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface ConfirmSetupIntentParams {
  payment_method_id?: string;
  [key: string]: unknown;
}

export class SetupIntentsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateSetupIntentParams): Promise<SetupIntent> {
    return this.http.post<SetupIntent>("/setup-intents", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<SetupIntent>> {
    return this.http.get<ListResponse<SetupIntent>>("/setup-intents", params as Record<string, unknown>);
  }

  async get(id: string): Promise<SetupIntent> {
    return this.http.get<SetupIntent>(`/setup-intents/${id}`);
  }

  async update(id: string, params: UpdateSetupIntentParams): Promise<SetupIntent> {
    return this.http.post<SetupIntent>(`/setup-intents/${id}`, params);
  }

  async confirm(id: string, params?: ConfirmSetupIntentParams): Promise<SetupIntent> {
    return this.http.post<SetupIntent>(`/setup-intents/${id}/confirm`, params);
  }

  async cancel(id: string): Promise<SetupIntent> {
    return this.http.post<SetupIntent>(`/setup-intents/${id}/cancel`);
  }
}
