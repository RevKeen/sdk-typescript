import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Event {
  id: string;
  type: string;
  data: Record<string, unknown>;
  created_at: string;
  [key: string]: unknown;
}

export interface TestEventParams {
  type: string;
  data?: Record<string, unknown>;
  [key: string]: unknown;
}

export class EventsResource {
  constructor(private http: HttpClient) {}

  async list(params?: ListParams & { type?: string }): Promise<ListResponse<Event>> {
    return this.http.get<ListResponse<Event>>("/events", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Event> {
    return this.http.get<Event>(`/events/${id}`);
  }

  async resend(id: string): Promise<Event> {
    return this.http.post<Event>(`/events/${id}/resend`);
  }

  async test(params: TestEventParams): Promise<Event> {
    return this.http.post<Event>("/events/test", params);
  }
}
