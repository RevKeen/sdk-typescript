import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface CommsSendParams {
  to: string;
  template?: string;
  subject?: string;
  body?: string;
  channel?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface CommsSendResult {
  id: string;
  status: string;
  [key: string]: unknown;
}

export interface CommsThread {
  id: string;
  customer_id?: string;
  subject?: string;
  status: string;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CommsMessage {
  id: string;
  thread_id: string;
  content: string;
  direction: string;
  created_at: string;
  [key: string]: unknown;
}

export class CommsResource {
  constructor(private http: HttpClient) {}

  async send(params: CommsSendParams): Promise<CommsSendResult> {
    return this.http.post<CommsSendResult>("/comms/send", params);
  }

  async listThreads(params?: ListParams & { customer_id?: string }): Promise<ListResponse<CommsThread>> {
    return this.http.get<ListResponse<CommsThread>>("/comms/threads", params as Record<string, unknown>);
  }

  async getThreadMessages(threadId: string, params?: ListParams): Promise<ListResponse<CommsMessage>> {
    return this.http.get<ListResponse<CommsMessage>>(`/comms/threads/${threadId}/messages`, params as Record<string, unknown>);
  }
}
