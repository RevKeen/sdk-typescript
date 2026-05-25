import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface SubscriptionSchedule {
  id: string;
  subscription_id?: string;
  customer_id: string;
  status: string;
  phases?: Array<{ [key: string]: unknown }>;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateSubscriptionScheduleParams {
  customer_id: string;
  phases?: Array<{ [key: string]: unknown }>;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateSubscriptionScheduleParams {
  phases?: Array<{ [key: string]: unknown }>;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class SubscriptionSchedulesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateSubscriptionScheduleParams): Promise<SubscriptionSchedule> {
    return this.http.post<SubscriptionSchedule>("/subscription-schedules", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<SubscriptionSchedule>> {
    return this.http.get<ListResponse<SubscriptionSchedule>>("/subscription-schedules", params as Record<string, unknown>);
  }

  async get(id: string): Promise<SubscriptionSchedule> {
    return this.http.get<SubscriptionSchedule>(`/subscription-schedules/${id}`);
  }

  async update(id: string, params: UpdateSubscriptionScheduleParams): Promise<SubscriptionSchedule> {
    return this.http.post<SubscriptionSchedule>(`/subscription-schedules/${id}`, params);
  }

  async cancel(id: string): Promise<SubscriptionSchedule> {
    return this.http.post<SubscriptionSchedule>(`/subscription-schedules/${id}/cancel`);
  }

  async release(id: string): Promise<SubscriptionSchedule> {
    return this.http.post<SubscriptionSchedule>(`/subscription-schedules/${id}/release`);
  }
}
