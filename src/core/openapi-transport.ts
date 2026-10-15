import { BaseAPI, Configuration, ResponseError } from "../generated/runtime.js";
import type {
  ConfigurationParameters,
  RequestOpts,
} from "../generated/runtime.js";

export interface PrivateOpenApiTransportAdapter {
  send(request: RequestOpts): Promise<Response>;
}

class PrivateOpenApiTransport extends BaseAPI {
  send(request: RequestOpts): Promise<Response> {
    return this.request(request);
  }
}

export function createPrivateOpenApiTransport(
  configuration: ConfigurationParameters,
): PrivateOpenApiTransportAdapter {
  return new PrivateOpenApiTransport(new Configuration(configuration));
}

export function isOpenApiResponseError(error: unknown): error is ResponseError {
  return error instanceof ResponseError;
}
