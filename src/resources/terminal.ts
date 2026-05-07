import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface TerminalPayment {
  id: string;
  amount: number;
  currency: string;
  status: string;
  device_id?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateTerminalPaymentParams {
  amount: number;
  currency?: string;
  device_id: string;
  description?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface RefundTerminalPaymentParams {
  amount?: number;
  reason?: string;
  [key: string]: unknown;
}

export interface TerminalDevice {
  id: string;
  name: string;
  serial_number: string;
  status: string;
  location?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export class TerminalResource {
  constructor(private http: HttpClient) {}

  async createPayment(params: CreateTerminalPaymentParams): Promise<TerminalPayment> {
    return this.http.post<TerminalPayment>("/terminal-payments", params);
  }

  async listPayments(params?: ListParams & { device_id?: string; status?: string }): Promise<ListResponse<TerminalPayment>> {
    return this.http.get<ListResponse<TerminalPayment>>("/terminal-payments", params as Record<string, unknown>);
  }

  async getPayment(id: string): Promise<TerminalPayment> {
    return this.http.get<TerminalPayment>(`/terminal-payments/${id}`);
  }

  async cancelPayment(id: string): Promise<TerminalPayment> {
    return this.http.post<TerminalPayment>(`/terminal-payments/${id}/cancel`);
  }

  async refundPayment(id: string, params?: RefundTerminalPaymentParams): Promise<TerminalPayment> {
    return this.http.post<TerminalPayment>(`/terminal-payments/${id}/refund`, params);
  }

  async voidPayment(id: string): Promise<TerminalPayment> {
    return this.http.post<TerminalPayment>(`/terminal-payments/${id}/void`);
  }

  async listDevices(params?: ListParams & { status?: string }): Promise<ListResponse<TerminalDevice>> {
    return this.http.get<ListResponse<TerminalDevice>>("/terminal-devices", params as Record<string, unknown>);
  }

  async getDevice(id: string): Promise<TerminalDevice> {
    return this.http.get<TerminalDevice>(`/terminal-devices/${id}`);
  }
}
