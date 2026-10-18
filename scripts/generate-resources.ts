#!/usr/bin/env tsx

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SDK_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(SDK_ROOT, "..", "..");
const OPENAPI_PATH = path.join(REPO_ROOT, "packages", "openapi", "sdk-openapi.json");
const OUTPUT_PATH = path.join(SDK_ROOT, "src", "generated-resources.ts");

interface OpenAPISpec {
  paths: Record<string, Record<string, OpenAPIOperation>>;
}

interface OpenAPIOperation {
  operationId?: string;
  "x-revkeen-idempotent"?: boolean;
  parameters?: Array<{
    in: "path" | "query" | "header" | "cookie";
    name: string;
    required?: boolean;
  }>;
  requestBody?: {
    required?: boolean;
  };
}

interface OperationMeta {
  actionName: string;
  hasBody: boolean;
  bodyRequired: boolean;
  dataType: string;
  functionName: string;
  httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  idempotent: boolean;
  operationId: string;
  path: string;
  pathParams: string[];
  hasQuery: boolean;
  resourceName: string;
  requiresIdempotencyKey: boolean;
  responseType: string;
}

const KNOWN_RESOURCE_NAMES = new Set([
  "analytics",
  "billing",
  "businesses",
  "charges",
  "checkoutSessions",
  "comms",
  "creditNotes",
  "customers",
  "discounts",
  "disputes",
  "entitlements",
  "events",
  "exports",
  "finance",
  "imports",
  "integrations",
  "invoices",
  "meters",
  "orders",
  "paymentAttempts",
  "paymentIntents",
  "paymentLinks",
  "paymentMethods",
  "payments",
  "payouts",
  "prices",
  "products",
  "refunds",
  "setupIntents",
  "subscriptionItems",
  "subscriptionSchedules",
  "subscriptions",
  "syncState",
  "taxRates",
  "terminal",
  "terminalDevices",
  "terminalPayments",
  "transactions",
  "usageBalance",
  "usageEvents",
  "usage",
  "voids",
  "webhookEndpoints",
]);

function toPascal(value: string): string {
  return value
    .split("_")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

function toCamel(value: string): string {
  const [first, ...rest] = value.split("_").filter(Boolean);
  if (!first) {
    return value;
  }

  return (
    first +
    rest
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join("")
  );
}

function toInterfaceName(resourceName: string): string {
  return `${resourceName.charAt(0).toUpperCase()}${resourceName.slice(1)}Resource`;
}

function getResourceAndAction(operationId: string): {
  actionName: string;
  resourceName: string;
} {
  const segments = operationId.split("_").filter(Boolean);
  if (segments.length < 2) {
    return {
      actionName: operationId,
      resourceName: "misc",
    };
  }

  for (let segmentCount = segments.length - 1; segmentCount >= 1; segmentCount -= 1) {
    const resourceCandidate = segments
      .slice(0, segmentCount)
      .map((segment, index) => (index === 0 ? segment : segment.charAt(0).toUpperCase() + segment.slice(1)))
      .join("");

    if (KNOWN_RESOURCE_NAMES.has(resourceCandidate)) {
      return {
        actionName: toCamel(segments.slice(segmentCount).join("_")),
        resourceName: resourceCandidate,
      };
    }
  }

  return {
    actionName: toCamel(segments.slice(1).join("_")),
    resourceName: segments[0],
  };
}

function buildBaseMethodSignature(operation: OperationMeta): string {
  const dataType = operation.dataType;
  const bodyType = `NonNullable<${dataType}["body"]>`;
  const queryType = `NonNullable<${dataType}["query"]>`;

  if (operation.pathParams.length === 0) {
    if (operation.hasBody && !operation.hasQuery) {
      if (operation.bodyRequired) {
        return `(body: ${bodyType}) => Promise<${operation.responseType}>`;
      }

      return `(body?: ${bodyType}) => Promise<${operation.responseType}>`;
    }

    if (!operation.hasBody && operation.hasQuery) {
      return `(query?: ${queryType}) => Promise<${operation.responseType}>`;
    }

    if (!operation.hasBody && !operation.hasQuery) {
      return `() => Promise<${operation.responseType}>`;
    }

    if (operation.bodyRequired) {
      return `(params: { body: ${bodyType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
    }

    return `(params?: { body?: ${bodyType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
  }

  if (operation.pathParams.length === 1) {
    const pathParam = operation.pathParams[0];
    const pathType = `NonNullable<${dataType}["path"]>["${pathParam}"]`;

    if (!operation.hasBody && !operation.hasQuery) {
      return `(id: ${pathType}) => Promise<${operation.responseType}>`;
    }

    if (operation.hasBody && !operation.hasQuery) {
      if (operation.bodyRequired) {
        return `(id: ${pathType}, body: ${bodyType}) => Promise<${operation.responseType}>`;
      }

      return `(id: ${pathType}, body?: ${bodyType}) => Promise<${operation.responseType}>`;
    }

    if (!operation.hasBody && operation.hasQuery) {
      return `(id: ${pathType}, query?: ${queryType}) => Promise<${operation.responseType}>`;
    }

    if (operation.bodyRequired) {
      return `(id: ${pathType}, params: { body: ${bodyType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
    }

    return `(id: ${pathType}, params?: { body?: ${bodyType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
  }

  const pathType = `NonNullable<${dataType}["path"]>`;
  if (!operation.hasBody && !operation.hasQuery) {
    return `(path: ${pathType}) => Promise<${operation.responseType}>`;
  }

  if (operation.hasBody && !operation.hasQuery) {
    if (operation.bodyRequired) {
      return `(params: { path: ${pathType}; body: ${bodyType} }) => Promise<${operation.responseType}>`;
    }

    return `(params: { path: ${pathType}; body?: ${bodyType} }) => Promise<${operation.responseType}>`;
  }

  if (!operation.hasBody && operation.hasQuery) {
    return `(params: { path: ${pathType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
  }

  if (operation.bodyRequired) {
    return `(params: { path: ${pathType}; body: ${bodyType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
  }

  return `(params: { path: ${pathType}; body?: ${bodyType}; query?: ${queryType} }) => Promise<${operation.responseType}>`;
}

function buildMethodSignature(operation: OperationMeta): string {
  const signature = buildBaseMethodSignature(operation);
  const arrowIndex = signature.lastIndexOf(") =>");
  const openingIndex = signature.indexOf("(");
  const existingParameters = signature.slice(openingIndex + 1, arrowIndex);
  const separator = existingParameters.length > 0 ? ", " : "";
  return `${signature.slice(0, arrowIndex)}${separator}requestOptions?: RevKeenRequestOptions${signature.slice(arrowIndex)}`;
}

function buildBaseMethodImplementation(operation: OperationMeta): string {
  const call = `runtime.requestData<${operation.responseType}>(`;
  const close = ")";

  if (operation.pathParams.length === 0) {
    if (operation.hasBody && !operation.hasQuery) {
      if (operation.bodyRequired) {
        return `async (body) => ${call}{ body }${close}`;
      }

      return `async (body) => ${call}body === undefined ? undefined : { body }${close}`;
    }

    if (!operation.hasBody && operation.hasQuery) {
      return `async (query) => ${call}query === undefined ? undefined : { query }${close}`;
    }

    if (!operation.hasBody && !operation.hasQuery) {
      return `async () => ${call}undefined${close}`;
    }

    return `async (params) => ${call}params === undefined ? undefined : { ...(params.body === undefined ? {} : { body: params.body }), ...(params.query === undefined ? {} : { query: params.query }) }${close}`;
  }

  if (operation.pathParams.length === 1) {
    const pathParam = operation.pathParams[0];

    if (!operation.hasBody && !operation.hasQuery) {
      return `async (id) => ${call}{ path: { ${pathParam}: id } }${close}`;
    }

    if (operation.hasBody && !operation.hasQuery) {
      if (operation.bodyRequired) {
        return `async (id, body) => ${call}{ path: { ${pathParam}: id }, body }${close}`;
      }

      return `async (id, body) => ${call}body === undefined ? { path: { ${pathParam}: id } } : { path: { ${pathParam}: id }, body }${close}`;
    }

    if (!operation.hasBody && operation.hasQuery) {
      return `async (id, query) => ${call}query === undefined ? { path: { ${pathParam}: id } } : { path: { ${pathParam}: id }, query }${close}`;
    }

    return `async (id, params) => ${call}params === undefined ? { path: { ${pathParam}: id } } : { path: { ${pathParam}: id }, ...(params.body === undefined ? {} : { body: params.body }), ...(params.query === undefined ? {} : { query: params.query }) }${close}`;
  }

  if (!operation.hasBody && !operation.hasQuery) {
    return `async (path) => ${call}{ path }${close}`;
  }

  if (operation.hasBody && !operation.hasQuery) {
    return `async (params) => ${call}{ path: params.path, ...(params.body === undefined ? {} : { body: params.body }) }${close}`;
  }

  if (!operation.hasBody && operation.hasQuery) {
    return `async (params) => ${call}{ path: params.path, ...(params.query === undefined ? {} : { query: params.query }) }${close}`;
  }

  return `async (params) => ${call}{ path: params.path, ...(params.body === undefined ? {} : { body: params.body }), ...(params.query === undefined ? {} : { query: params.query }) }${close}`;
}

function buildMethodImplementation(operation: OperationMeta): string {
  const base = buildBaseMethodImplementation(operation);
  const withRequestOptions = base.replace(
    /^async \(([^)]*)\)/,
    (_match, parameters: string) =>
      `async (${parameters}${parameters.length > 0 ? ", " : ""}requestOptions)`
  );
  const metadata = `{ method: "${operation.httpMethod}", operationId: "${operation.operationId}", path: "${operation.path}", idempotent: ${operation.idempotent}, requiresIdempotencyKey: ${operation.requiresIdempotencyKey} }`;
  return `${withRequestOptions.slice(0, -1)}, requestOptions, ${metadata})`;
}

function generate(): string {
  const spec = JSON.parse(fs.readFileSync(OPENAPI_PATH, "utf8")) as OpenAPISpec;
  const groups = new Map<string, OperationMeta[]>();

  for (const [routePath, methods] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      if (!["get", "post", "put", "patch", "delete"].includes(method)) {
        continue;
      }
      if (!operation?.operationId) {
        continue;
      }

      const { actionName, resourceName } = getResourceAndAction(operation.operationId);
      const operationTypeBase = toPascal(operation.operationId);
      const pathParams = (operation.parameters ?? [])
        .filter((parameter) => parameter.in === "path")
        .map((parameter) => parameter.name);
      const hasQuery = (operation.parameters ?? []).filter(
        (parameter) => parameter.in === "query"
      ).length > 0;
      const hasBody = Boolean(operation.requestBody);

      const meta: OperationMeta = {
        actionName,
        hasBody,
        bodyRequired: Boolean(operation.requestBody?.required),
        dataType: `${operationTypeBase}Data`,
        functionName: toCamel(operation.operationId),
        httpMethod: method.toUpperCase() as OperationMeta["httpMethod"],
        idempotent: operation["x-revkeen-idempotent"] === true,
        operationId: operation.operationId,
        path: routePath,
        hasQuery,
        pathParams,
        resourceName,
        requiresIdempotencyKey: (operation.parameters ?? []).some(
          (parameter) =>
            parameter.in === "header" &&
            parameter.required === true &&
            parameter.name.toLowerCase() === "idempotency-key"
        ),
        responseType: `${operationTypeBase}Response`,
      };

      const operationsForResource = groups.get(resourceName) ?? [];
      operationsForResource.push(meta);
      groups.set(resourceName, operationsForResource);
    }
  }

  const sortedResources = [...groups.entries()].sort(([left], [right]) =>
    left.localeCompare(right)
  );
  const typeNames = new Set<string>();
  const resourceInterfaceBlocks: string[] = [];
  const resourceAssignments: string[] = [];
  const resourceFields: string[] = [];

  for (const [resourceName, operations] of sortedResources) {
    operations.sort((left, right) => left.actionName.localeCompare(right.actionName));
    const interfaceName = toInterfaceName(resourceName);

    for (const operation of operations) {
      typeNames.add(operation.dataType);
      typeNames.add(operation.responseType);
    }

    resourceFields.push(`  ${resourceName}: ${interfaceName};`);

    const interfaceLines = operations.map((operation) => {
      return `  ${operation.actionName}: ${buildMethodSignature(operation)};`;
    });

    resourceInterfaceBlocks.push(
      `export interface ${interfaceName} {\n${interfaceLines.join("\n")}\n}`
    );

    const assignmentLines = operations.map((operation) => {
      return `    ${operation.actionName}: ${buildMethodImplementation(operation)},`;
    });

    resourceAssignments.push(
      `    ${resourceName}: {\n${assignmentLines.join("\n")}\n    },`
    );
  }

  const typeImports = [...typeNames].sort().join(", ");

  return `/**
 * AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
 *
 * Generated by: pnpm --dir packages/sdk generate:wrapper
 * Source of truth: packages/openapi/sdk-openapi.json
 */

import type { ${typeImports} } from "./generated/types.gen.js";
import type { RevKeenOperationMetadata, RevKeenRequestOptions } from "./core/request-options.js";

export interface GeneratedResourceRuntime {
  requestData<T>(
    options?: Record<string, unknown>,
    requestOptions?: RevKeenRequestOptions,
    operation?: RevKeenOperationMetadata
  ): Promise<T>;
}

${resourceInterfaceBlocks.join("\n\n")}

export interface GeneratedResources {
${resourceFields.join("\n")}
}

export function buildGeneratedResources(
  runtime: GeneratedResourceRuntime
): GeneratedResources {
  return {
${resourceAssignments.join("\n")}
  };
}
`;
}

fs.writeFileSync(OUTPUT_PATH, generate(), "utf8");
console.log(`[revkeen/sdk] Generated ${path.relative(REPO_ROOT, OUTPUT_PATH)}`);
