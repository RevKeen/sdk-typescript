import { RevKeenError } from "./errors.js";

export enum RevKeenEnvironment {
  Sandbox = "sandbox",
  Production = "production",
}

const ENVIRONMENT_BASE_URLS: Readonly<Record<RevKeenEnvironment, string>> = {
  [RevKeenEnvironment.Sandbox]: "https://staging-api.revkeen.com/v2",
  [RevKeenEnvironment.Production]: "https://api.revkeen.com/v2",
};

export function resolveRevKeenEnvironment(
  environment: RevKeenEnvironment,
): string {
  const baseUrl = ENVIRONMENT_BASE_URLS[environment];
  if (!baseUrl) {
    throw new RevKeenError(
      `Unknown RevKeen environment '${String(environment)}'. Use RevKeenEnvironment.Sandbox or RevKeenEnvironment.Production.`,
    );
  }
  return baseUrl;
}

export function validateCustomBaseUrl(baseUrl: string): string {
  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    throw new RevKeenError(
      "Custom RevKeen base URL must be a valid absolute URL.",
    );
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new RevKeenError("Custom RevKeen base URL must use HTTP or HTTPS.");
  }
  if (url.username || url.password) {
    throw new RevKeenError(
      "Custom RevKeen base URL must not contain credentials.",
    );
  }
  if (url.search || url.hash) {
    throw new RevKeenError(
      "Custom RevKeen base URL must not contain a query or fragment.",
    );
  }
  return baseUrl.replace(/\/+$/, "");
}
