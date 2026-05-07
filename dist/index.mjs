import {
  OAuthTokenManager,
  RevKeenAPIError,
  RevKeenError,
  RevKeenTimeoutError
} from "./chunk-VKMDZSYJ.mjs";
import {
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  constructEvent,
  constructEventWithHeaders,
  extractWebhookHeaders,
  verifySignature,
  webhooks_default
} from "./chunk-R2LGIZGP.mjs";

// src/generated/core/bodySerializer.gen.ts
var jsonBodySerializer = {
  bodySerializer: (body) => JSON.stringify(body, (_key, value) => typeof value === "bigint" ? value.toString() : value)
};

// src/generated/core/params.gen.ts
var extraPrefixesMap = {
  $body_: "body",
  $headers_: "headers",
  $path_: "path",
  $query_: "query"
};
var extraPrefixes = Object.entries(extraPrefixesMap);

// src/generated/core/serverSentEvents.gen.ts
function createSseClient({
  onRequest,
  onSseError,
  onSseEvent,
  responseTransformer,
  responseValidator,
  sseDefaultRetryDelay,
  sseMaxRetryAttempts,
  sseMaxRetryDelay,
  sseSleepFn,
  url,
  ...options
}) {
  let lastEventId;
  const sleep = sseSleepFn ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const createStream = async function* () {
    let retryDelay = sseDefaultRetryDelay ?? 3e3;
    let attempt = 0;
    const signal = options.signal ?? new AbortController().signal;
    while (true) {
      if (signal.aborted) break;
      attempt++;
      const headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      if (lastEventId !== void 0) {
        headers.set("Last-Event-ID", lastEventId);
      }
      try {
        const requestInit = {
          redirect: "follow",
          ...options,
          body: options.serializedBody,
          headers,
          signal
        };
        let request = new Request(url, requestInit);
        if (onRequest) {
          request = await onRequest(url, requestInit);
        }
        const _fetch = options.fetch ?? globalThis.fetch;
        const response = await _fetch(request);
        if (!response.ok) throw new Error(`SSE failed: ${response.status} ${response.statusText}`);
        if (!response.body) throw new Error("No body in SSE response");
        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        let buffer = "";
        const abortHandler = () => {
          try {
            reader.cancel();
          } catch {
          }
        };
        signal.addEventListener("abort", abortHandler);
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            buffer = buffer.replace(/\r\n?/g, "\n");
            const chunks = buffer.split("\n\n");
            buffer = chunks.pop() ?? "";
            for (const chunk of chunks) {
              const lines = chunk.split("\n");
              const dataLines = [];
              let eventName;
              for (const line of lines) {
                if (line.startsWith("data:")) {
                  dataLines.push(line.replace(/^data:\s*/, ""));
                } else if (line.startsWith("event:")) {
                  eventName = line.replace(/^event:\s*/, "");
                } else if (line.startsWith("id:")) {
                  lastEventId = line.replace(/^id:\s*/, "");
                } else if (line.startsWith("retry:")) {
                  const parsed = Number.parseInt(line.replace(/^retry:\s*/, ""), 10);
                  if (!Number.isNaN(parsed)) {
                    retryDelay = parsed;
                  }
                }
              }
              let data;
              let parsedJson = false;
              if (dataLines.length) {
                const rawData = dataLines.join("\n");
                try {
                  data = JSON.parse(rawData);
                  parsedJson = true;
                } catch {
                  data = rawData;
                }
              }
              if (parsedJson) {
                if (responseValidator) {
                  await responseValidator(data);
                }
                if (responseTransformer) {
                  data = await responseTransformer(data);
                }
              }
              onSseEvent?.({
                data,
                event: eventName,
                id: lastEventId,
                retry: retryDelay
              });
              if (dataLines.length) {
                yield data;
              }
            }
          }
        } finally {
          signal.removeEventListener("abort", abortHandler);
          reader.releaseLock();
        }
        break;
      } catch (error) {
        onSseError?.(error);
        if (sseMaxRetryAttempts !== void 0 && attempt >= sseMaxRetryAttempts) {
          break;
        }
        const backoff = Math.min(retryDelay * 2 ** (attempt - 1), sseMaxRetryDelay ?? 3e4);
        await sleep(backoff);
      }
    }
  };
  const stream = createStream();
  return { stream };
}

// src/generated/core/pathSerializer.gen.ts
var separatorArrayExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
var separatorArrayNoExplode = (style) => {
  switch (style) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
};
var separatorObjectExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
var serializeArrayParam = ({
  allowReserved,
  explode,
  name,
  style,
  value
}) => {
  if (!explode) {
    const joinedValues2 = (allowReserved ? value : value.map((v) => encodeURIComponent(v))).join(separatorArrayNoExplode(style));
    switch (style) {
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      case "simple":
        return joinedValues2;
      default:
        return `${name}=${joinedValues2}`;
    }
  }
  const separator = separatorArrayExplode(style);
  const joinedValues = value.map((v) => {
    if (style === "label" || style === "simple") {
      return allowReserved ? v : encodeURIComponent(v);
    }
    return serializePrimitiveParam({
      allowReserved,
      name,
      value: v
    });
  }).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
var serializePrimitiveParam = ({
  allowReserved,
  name,
  value
}) => {
  if (value === void 0 || value === null) {
    return "";
  }
  if (typeof value === "object") {
    throw new Error(
      "Deeply-nested arrays/objects aren\u2019t supported. Provide your own `querySerializer()` to handle these."
    );
  }
  return `${name}=${allowReserved ? value : encodeURIComponent(value)}`;
};
var serializeObjectParam = ({
  allowReserved,
  explode,
  name,
  style,
  value,
  valueOnly
}) => {
  if (value instanceof Date) {
    return valueOnly ? value.toISOString() : `${name}=${value.toISOString()}`;
  }
  if (style !== "deepObject" && !explode) {
    let values = [];
    Object.entries(value).forEach(([key, v]) => {
      values = [...values, key, allowReserved ? v : encodeURIComponent(v)];
    });
    const joinedValues2 = values.join(",");
    switch (style) {
      case "form":
        return `${name}=${joinedValues2}`;
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      default:
        return joinedValues2;
    }
  }
  const separator = separatorObjectExplode(style);
  const joinedValues = Object.entries(value).map(
    ([key, v]) => serializePrimitiveParam({
      allowReserved,
      name: style === "deepObject" ? `${name}[${key}]` : key,
      value: v
    })
  ).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};

// src/generated/core/utils.gen.ts
var PATH_PARAM_RE = /\{[^{}]+\}/g;
var defaultPathSerializer = ({ path, url: _url }) => {
  let url = _url;
  const matches = _url.match(PATH_PARAM_RE);
  if (matches) {
    for (const match of matches) {
      let explode = false;
      let name = match.substring(1, match.length - 1);
      let style = "simple";
      if (name.endsWith("*")) {
        explode = true;
        name = name.substring(0, name.length - 1);
      }
      if (name.startsWith(".")) {
        name = name.substring(1);
        style = "label";
      } else if (name.startsWith(";")) {
        name = name.substring(1);
        style = "matrix";
      }
      const value = path[name];
      if (value === void 0 || value === null) {
        continue;
      }
      if (Array.isArray(value)) {
        url = url.replace(match, serializeArrayParam({ explode, name, style, value }));
        continue;
      }
      if (typeof value === "object") {
        url = url.replace(
          match,
          serializeObjectParam({
            explode,
            name,
            style,
            value,
            valueOnly: true
          })
        );
        continue;
      }
      if (style === "matrix") {
        url = url.replace(
          match,
          `;${serializePrimitiveParam({
            name,
            value
          })}`
        );
        continue;
      }
      const replaceValue = encodeURIComponent(
        style === "label" ? `.${value}` : value
      );
      url = url.replace(match, replaceValue);
    }
  }
  return url;
};
var getUrl = ({
  baseUrl,
  path,
  query,
  querySerializer,
  url: _url
}) => {
  const pathUrl = _url.startsWith("/") ? _url : `/${_url}`;
  let url = (baseUrl ?? "") + pathUrl;
  if (path) {
    url = defaultPathSerializer({ path, url });
  }
  let search = query ? querySerializer(query) : "";
  if (search.startsWith("?")) {
    search = search.substring(1);
  }
  if (search) {
    url += `?${search}`;
  }
  return url;
};
function getValidRequestBody(options) {
  const hasBody = options.body !== void 0;
  const isSerializedBody = hasBody && options.bodySerializer;
  if (isSerializedBody) {
    if ("serializedBody" in options) {
      const hasSerializedBody = options.serializedBody !== void 0 && options.serializedBody !== "";
      return hasSerializedBody ? options.serializedBody : null;
    }
    return options.body !== "" ? options.body : null;
  }
  if (hasBody) {
    return options.body;
  }
  return void 0;
}

// src/generated/core/auth.gen.ts
var getAuthToken = async (auth, callback) => {
  const token = typeof callback === "function" ? await callback(auth) : callback;
  if (!token) {
    return;
  }
  if (auth.scheme === "bearer") {
    return `Bearer ${token}`;
  }
  if (auth.scheme === "basic") {
    return `Basic ${btoa(token)}`;
  }
  return token;
};

// src/generated/client/utils.gen.ts
var createQuerySerializer = ({
  parameters = {},
  ...args
} = {}) => {
  const querySerializer = (queryParams) => {
    const search = [];
    if (queryParams && typeof queryParams === "object") {
      for (const name in queryParams) {
        const value = queryParams[name];
        if (value === void 0 || value === null) {
          continue;
        }
        const options = parameters[name] || args;
        if (Array.isArray(value)) {
          const serializedArray = serializeArrayParam({
            allowReserved: options.allowReserved,
            explode: true,
            name,
            style: "form",
            value,
            ...options.array
          });
          if (serializedArray) search.push(serializedArray);
        } else if (typeof value === "object") {
          const serializedObject = serializeObjectParam({
            allowReserved: options.allowReserved,
            explode: true,
            name,
            style: "deepObject",
            value,
            ...options.object
          });
          if (serializedObject) search.push(serializedObject);
        } else {
          const serializedPrimitive = serializePrimitiveParam({
            allowReserved: options.allowReserved,
            name,
            value
          });
          if (serializedPrimitive) search.push(serializedPrimitive);
        }
      }
    }
    return search.join("&");
  };
  return querySerializer;
};
var getParseAs = (contentType) => {
  if (!contentType) {
    return "stream";
  }
  const cleanContent = contentType.split(";")[0]?.trim();
  if (!cleanContent) {
    return;
  }
  if (cleanContent.startsWith("application/json") || cleanContent.endsWith("+json")) {
    return "json";
  }
  if (cleanContent === "multipart/form-data") {
    return "formData";
  }
  if (["application/", "audio/", "image/", "video/"].some((type) => cleanContent.startsWith(type))) {
    return "blob";
  }
  if (cleanContent.startsWith("text/")) {
    return "text";
  }
  return;
};
var checkForExistence = (options, name) => {
  if (!name) {
    return false;
  }
  if (options.headers.has(name) || options.query?.[name] || options.headers.get("Cookie")?.includes(`${name}=`)) {
    return true;
  }
  return false;
};
var setAuthParams = async ({
  security,
  ...options
}) => {
  for (const auth of security) {
    if (checkForExistence(options, auth.name)) {
      continue;
    }
    const token = await getAuthToken(auth, options.auth);
    if (!token) {
      continue;
    }
    const name = auth.name ?? "Authorization";
    switch (auth.in) {
      case "query":
        if (!options.query) {
          options.query = {};
        }
        options.query[name] = token;
        break;
      case "cookie":
        options.headers.append("Cookie", `${name}=${token}`);
        break;
      case "header":
      default:
        options.headers.set(name, token);
        break;
    }
  }
};
var buildUrl = (options) => getUrl({
  baseUrl: options.baseUrl,
  path: options.path,
  query: options.query,
  querySerializer: typeof options.querySerializer === "function" ? options.querySerializer : createQuerySerializer(options.querySerializer),
  url: options.url
});
var mergeConfigs = (a, b) => {
  const config = { ...a, ...b };
  if (config.baseUrl?.endsWith("/")) {
    config.baseUrl = config.baseUrl.substring(0, config.baseUrl.length - 1);
  }
  config.headers = mergeHeaders(a.headers, b.headers);
  return config;
};
var headersEntries = (headers) => {
  const entries = [];
  headers.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
};
var mergeHeaders = (...headers) => {
  const mergedHeaders = new Headers();
  for (const header of headers) {
    if (!header) {
      continue;
    }
    const iterator = header instanceof Headers ? headersEntries(header) : Object.entries(header);
    for (const [key, value] of iterator) {
      if (value === null) {
        mergedHeaders.delete(key);
      } else if (Array.isArray(value)) {
        for (const v of value) {
          mergedHeaders.append(key, v);
        }
      } else if (value !== void 0) {
        mergedHeaders.set(
          key,
          typeof value === "object" ? JSON.stringify(value) : value
        );
      }
    }
  }
  return mergedHeaders;
};
var Interceptors = class {
  fns = [];
  clear() {
    this.fns = [];
  }
  eject(id) {
    const index = this.getInterceptorIndex(id);
    if (this.fns[index]) {
      this.fns[index] = null;
    }
  }
  exists(id) {
    const index = this.getInterceptorIndex(id);
    return Boolean(this.fns[index]);
  }
  getInterceptorIndex(id) {
    if (typeof id === "number") {
      return this.fns[id] ? id : -1;
    }
    return this.fns.indexOf(id);
  }
  update(id, fn) {
    const index = this.getInterceptorIndex(id);
    if (this.fns[index]) {
      this.fns[index] = fn;
      return id;
    }
    return false;
  }
  use(fn) {
    this.fns.push(fn);
    return this.fns.length - 1;
  }
};
var createInterceptors = () => ({
  error: new Interceptors(),
  request: new Interceptors(),
  response: new Interceptors()
});
var defaultQuerySerializer = createQuerySerializer({
  allowReserved: false,
  array: {
    explode: true,
    style: "form"
  },
  object: {
    explode: true,
    style: "deepObject"
  }
});
var defaultHeaders = {
  "Content-Type": "application/json"
};
var createConfig = (override = {}) => ({
  ...jsonBodySerializer,
  headers: defaultHeaders,
  parseAs: "auto",
  querySerializer: defaultQuerySerializer,
  ...override
});

// src/generated/client/client.gen.ts
var createClient = (config = {}) => {
  let _config = mergeConfigs(createConfig(), config);
  const getConfig = () => ({ ..._config });
  const setConfig = (config2) => {
    _config = mergeConfigs(_config, config2);
    return getConfig();
  };
  const interceptors = createInterceptors();
  const beforeRequest = async (options) => {
    const opts = {
      ..._config,
      ...options,
      fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
      headers: mergeHeaders(_config.headers, options.headers),
      serializedBody: void 0
    };
    if (opts.security) {
      await setAuthParams({
        ...opts,
        security: opts.security
      });
    }
    if (opts.requestValidator) {
      await opts.requestValidator(opts);
    }
    if (opts.body !== void 0 && opts.bodySerializer) {
      opts.serializedBody = opts.bodySerializer(opts.body);
    }
    if (opts.body === void 0 || opts.serializedBody === "") {
      opts.headers.delete("Content-Type");
    }
    const resolvedOpts = opts;
    const url = buildUrl(resolvedOpts);
    return { opts: resolvedOpts, url };
  };
  const request = async (options) => {
    const { opts, url } = await beforeRequest(options);
    const requestInit = {
      redirect: "follow",
      ...opts,
      body: getValidRequestBody(opts)
    };
    let request2 = new Request(url, requestInit);
    for (const fn of interceptors.request.fns) {
      if (fn) {
        request2 = await fn(request2, opts);
      }
    }
    const _fetch = opts.fetch;
    let response;
    try {
      response = await _fetch(request2);
    } catch (error2) {
      let finalError2 = error2;
      for (const fn of interceptors.error.fns) {
        if (fn) {
          finalError2 = await fn(error2, void 0, request2, opts);
        }
      }
      finalError2 = finalError2 || {};
      if (opts.throwOnError) {
        throw finalError2;
      }
      return opts.responseStyle === "data" ? void 0 : {
        error: finalError2,
        request: request2,
        response: void 0
      };
    }
    for (const fn of interceptors.response.fns) {
      if (fn) {
        response = await fn(response, request2, opts);
      }
    }
    const result = {
      request: request2,
      response
    };
    if (response.ok) {
      const parseAs = (opts.parseAs === "auto" ? getParseAs(response.headers.get("Content-Type")) : opts.parseAs) ?? "json";
      if (response.status === 204 || response.headers.get("Content-Length") === "0") {
        let emptyData;
        switch (parseAs) {
          case "arrayBuffer":
          case "blob":
          case "text":
            emptyData = await response[parseAs]();
            break;
          case "formData":
            emptyData = new FormData();
            break;
          case "stream":
            emptyData = response.body;
            break;
          case "json":
          default:
            emptyData = {};
            break;
        }
        return opts.responseStyle === "data" ? emptyData : {
          data: emptyData,
          ...result
        };
      }
      let data;
      switch (parseAs) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "text":
          data = await response[parseAs]();
          break;
        case "json": {
          const text = await response.text();
          data = text ? JSON.parse(text) : {};
          break;
        }
        case "stream":
          return opts.responseStyle === "data" ? response.body : {
            data: response.body,
            ...result
          };
      }
      if (parseAs === "json") {
        if (opts.responseValidator) {
          await opts.responseValidator(data);
        }
        if (opts.responseTransformer) {
          data = await opts.responseTransformer(data);
        }
      }
      return opts.responseStyle === "data" ? data : {
        data,
        ...result
      };
    }
    const textError = await response.text();
    let jsonError;
    try {
      jsonError = JSON.parse(textError);
    } catch {
    }
    const error = jsonError ?? textError;
    let finalError = error;
    for (const fn of interceptors.error.fns) {
      if (fn) {
        finalError = await fn(error, response, request2, opts);
      }
    }
    finalError = finalError || {};
    if (opts.throwOnError) {
      throw finalError;
    }
    return opts.responseStyle === "data" ? void 0 : {
      error: finalError,
      ...result
    };
  };
  const makeMethodFn = (method) => (options) => request({ ...options, method });
  const makeSseFn = (method) => async (options) => {
    const { opts, url } = await beforeRequest(options);
    return createSseClient({
      ...opts,
      body: opts.body,
      headers: opts.headers,
      method,
      onRequest: async (url2, init) => {
        let request2 = new Request(url2, init);
        for (const fn of interceptors.request.fns) {
          if (fn) {
            request2 = await fn(request2, opts);
          }
        }
        return request2;
      },
      serializedBody: getValidRequestBody(opts),
      url
    });
  };
  const _buildUrl = (options) => buildUrl({ ..._config, ...options });
  return {
    buildUrl: _buildUrl,
    connect: makeMethodFn("CONNECT"),
    delete: makeMethodFn("DELETE"),
    get: makeMethodFn("GET"),
    getConfig,
    head: makeMethodFn("HEAD"),
    interceptors,
    options: makeMethodFn("OPTIONS"),
    patch: makeMethodFn("PATCH"),
    post: makeMethodFn("POST"),
    put: makeMethodFn("PUT"),
    request,
    setConfig,
    sse: {
      connect: makeSseFn("CONNECT"),
      delete: makeSseFn("DELETE"),
      get: makeSseFn("GET"),
      head: makeSseFn("HEAD"),
      options: makeSseFn("OPTIONS"),
      patch: makeSseFn("PATCH"),
      post: makeSseFn("POST"),
      put: makeSseFn("PUT"),
      trace: makeSseFn("TRACE")
    },
    trace: makeMethodFn("TRACE")
  };
};

// src/generated/client.gen.ts
var client = createClient(createConfig({ baseUrl: "https://staging-api.revkeen.com/v2" }));

// src/generated/sdk.gen.ts
var invoicesList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices",
  ...options
});
var invoicesCreate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices/{id}",
  ...options
});
var invoicesUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesMarginEstimate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices/{id}/margin-estimate",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesFinalize = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices/{id}/finalize",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesVoid = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices/{id}/void",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var invoicesSend = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/invoices/{id}/send",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var productsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/products",
  ...options
});
var productsCreate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/products",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var productsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/products/{id}",
  ...options
});
var productsUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/products/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var checkoutSessionsCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/checkout-sessions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var checkoutSessionsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/checkout-sessions/{id}",
  ...options
});
var checkoutSessionsExpire = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/checkout-sessions/{id}/expire",
  ...options
});
var customersList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers",
  ...options
});
var customersCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var customersGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers/{id}",
  ...options
});
var customersUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customersPaymentRailsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers/{id}/payment-rails",
  ...options
});
var customersPreferredRailsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers/{id}/preferred-rails",
  ...options
});
var customersPaymentMethodsList = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customers/{id}/payment-methods",
  ...options
});
var subscriptionsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/subscriptions",
  ...options
});
var subscriptionsCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/subscriptions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var subscriptionsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/subscriptions/{id}",
  ...options
});
var subscriptionsUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/subscriptions/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var subscriptionsCancel = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/subscriptions/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var analyticsRevenueMrrSummary = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/analytics/revenue/mrr-summary",
  ...options
});
var analyticsRevenueTimeSeries = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/analytics/revenue/time-series",
  ...options
});
var refundsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/refunds",
  ...options
});
var refundsCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/refunds",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var refundsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/refunds/{id}",
  ...options
});
var creditNotesList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/credit_notes",
  ...options
});
var creditNotesCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/credit_notes",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var creditNotesGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/credit_notes/{id}",
  ...options
});
var creditNotesVoid = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/credit_notes/{id}/void",
  ...options
});
var creditNotesListLines = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/credit_notes/{id}/lines",
  ...options
});
var creditNotesPreview = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/credit_notes/preview",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentLinksList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links",
  ...options
});
var paymentLinksCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var paymentLinksGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links/{id}",
  ...options
});
var paymentLinksExpire = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links/{id}/expire",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentLinksUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links/{id}/status",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentLinksDeactivate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links/{id}/deactivate",
  ...options
});
var paymentLinksActivate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links/{id}/activate",
  ...options
});
var paymentLinksArchive = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-links/{id}/archive",
  ...options
});
var pricesList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/prices",
  ...options
});
var pricesCreate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/prices",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var pricesArchive = (options) => (options.client ?? client).delete({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/prices/{id}",
  ...options
});
var pricesGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/prices/{id}",
  ...options
});
var pricesUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/prices/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var webhookEndpointsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-endpoints",
  ...options
});
var webhookEndpointsCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-endpoints",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var webhookEndpointsDelete = (options) => (options.client ?? client).delete({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-endpoints/{id}",
  ...options
});
var webhookEndpointsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-endpoints/{id}",
  ...options
});
var webhookEndpointsUpdate = (options) => (options.client ?? client).patch({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-endpoints/{id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var webhookEndpointsRotateSecret = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-endpoints/{id}/rotate-secret",
  ...options
});
var webhookDeliveriesList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-deliveries",
  ...options
});
var webhookDeliveriesGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-deliveries/{id}",
  ...options
});
var webhookDeliveriesRetry = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/webhook-deliveries/{id}/retry",
  ...options
});
var customerPortalSessionsCreate = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/sessions",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerPortalCustomerGet = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/customer",
  ...options
});
var customerPortalSubscriptionsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/subscriptions",
  ...options
});
var customerPortalSubscriptionsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/subscriptions/{id}",
  ...options
});
var customerPortalSubscriptionsCancel = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/subscriptions/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var customerPortalInvoicesList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/invoices",
  ...options
});
var customerPortalInvoicesGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-portal/invoices/{id}",
  ...options
});
var customerMetersList = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-meters",
  ...options
});
var customerMetersGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/customer-meters/{customer_id}/{meter_id}",
  ...options
});
var paymentIntentsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-intents",
  ...options
});
var paymentIntentsCreate = (options) => (options?.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-intents",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options?.headers
  }
});
var paymentIntentsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-intents/{id}",
  ...options
});
var paymentIntentsConfirm = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-intents/{id}/confirm",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentIntentsCapture = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-intents/{id}/capture",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var paymentIntentsCancel = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/payment-intents/{id}/cancel",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var eventsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/events",
  ...options
});
var eventsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/events/{id}",
  ...options
});
var eventsResend = (options) => (options.client ?? client).post({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/events/{id}/resend",
  ...options
});
var entitlementsList = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/entitlements",
  ...options
});
var entitlementsCheck = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/entitlements/check",
  ...options
});
var transactionsList = (options) => (options?.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/transactions",
  ...options
});
var transactionsGet = (options) => (options.client ?? client).get({
  security: [{ name: "x-api-key", type: "apiKey" }, { scheme: "bearer", type: "http" }],
  url: "/transactions/{id}",
  ...options
});

// src/generated-resources.ts
function buildGeneratedResources(runtime) {
  return {
    analytics: {
      revenueMrrSummary: async (query) => runtime.requestData(analyticsRevenueMrrSummary, query === void 0 ? void 0 : { query }),
      revenueTimeSeries: async (query) => runtime.requestData(analyticsRevenueTimeSeries, query === void 0 ? void 0 : { query })
    },
    checkoutSessions: {
      create: async (body) => runtime.requestData(checkoutSessionsCreate, body === void 0 ? void 0 : { body }),
      expire: async (id) => runtime.requestData(checkoutSessionsExpire, { path: { id } }),
      get: async (id) => runtime.requestData(checkoutSessionsGet, { path: { id } })
    },
    creditNotes: {
      create: async (body) => runtime.requestData(creditNotesCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(creditNotesGet, { path: { id } }),
      list: async (query) => runtime.requestData(creditNotesList, query === void 0 ? void 0 : { query }),
      listLines: async (id, query) => runtime.requestData(creditNotesListLines, query === void 0 ? { path: { id } } : { path: { id }, query }),
      preview: async (body) => runtime.requestData(creditNotesPreview, { body }),
      void: async (id) => runtime.requestData(creditNotesVoid, { path: { id } })
    },
    customer: {
      metersGet: async (path) => runtime.requestData(customerMetersGet, { path }),
      metersList: async (query) => runtime.requestData(customerMetersList, query === void 0 ? void 0 : { query }),
      portalCustomerGet: async () => runtime.requestData(customerPortalCustomerGet, void 0),
      portalInvoicesGet: async (id) => runtime.requestData(customerPortalInvoicesGet, { path: { id } }),
      portalInvoicesList: async (query) => runtime.requestData(customerPortalInvoicesList, query === void 0 ? void 0 : { query }),
      portalSessionsCreate: async (body) => runtime.requestData(customerPortalSessionsCreate, { body }),
      portalSubscriptionsCancel: async (id, body) => runtime.requestData(customerPortalSubscriptionsCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      portalSubscriptionsGet: async (id) => runtime.requestData(customerPortalSubscriptionsGet, { path: { id } }),
      portalSubscriptionsList: async (query) => runtime.requestData(customerPortalSubscriptionsList, query === void 0 ? void 0 : { query })
    },
    customers: {
      create: async (body) => runtime.requestData(customersCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(customersGet, { path: { id } }),
      list: async (query) => runtime.requestData(customersList, query === void 0 ? void 0 : { query }),
      paymentMethodsList: async (id) => runtime.requestData(customersPaymentMethodsList, { path: { id } }),
      paymentRailsGet: async (id, query) => runtime.requestData(customersPaymentRailsGet, query === void 0 ? { path: { id } } : { path: { id }, query }),
      preferredRailsGet: async (id, query) => runtime.requestData(customersPreferredRailsGet, query === void 0 ? { path: { id } } : { path: { id }, query }),
      update: async (id, body) => runtime.requestData(customersUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    entitlements: {
      check: async (query) => runtime.requestData(entitlementsCheck, query === void 0 ? void 0 : { query }),
      list: async (query) => runtime.requestData(entitlementsList, query === void 0 ? void 0 : { query })
    },
    events: {
      get: async (id) => runtime.requestData(eventsGet, { path: { id } }),
      list: async (query) => runtime.requestData(eventsList, query === void 0 ? void 0 : { query }),
      resend: async (id) => runtime.requestData(eventsResend, { path: { id } })
    },
    invoices: {
      create: async (body) => runtime.requestData(invoicesCreate, { body }),
      finalize: async (id, body) => runtime.requestData(invoicesFinalize, body === void 0 ? { path: { id } } : { path: { id }, body }),
      get: async (id) => runtime.requestData(invoicesGet, { path: { id } }),
      list: async (query) => runtime.requestData(invoicesList, query === void 0 ? void 0 : { query }),
      marginEstimate: async (id, body) => runtime.requestData(invoicesMarginEstimate, { path: { id }, body }),
      send: async (id, body) => runtime.requestData(invoicesSend, body === void 0 ? { path: { id } } : { path: { id }, body }),
      update: async (id, body) => runtime.requestData(invoicesUpdate, { path: { id }, body }),
      void: async (id, body) => runtime.requestData(invoicesVoid, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    paymentIntents: {
      cancel: async (id, body) => runtime.requestData(paymentIntentsCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      capture: async (id, body) => runtime.requestData(paymentIntentsCapture, body === void 0 ? { path: { id } } : { path: { id }, body }),
      confirm: async (id, body) => runtime.requestData(paymentIntentsConfirm, body === void 0 ? { path: { id } } : { path: { id }, body }),
      create: async (body) => runtime.requestData(paymentIntentsCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(paymentIntentsGet, { path: { id } }),
      list: async (query) => runtime.requestData(paymentIntentsList, query === void 0 ? void 0 : { query })
    },
    paymentLinks: {
      activate: async (id) => runtime.requestData(paymentLinksActivate, { path: { id } }),
      archive: async (id) => runtime.requestData(paymentLinksArchive, { path: { id } }),
      create: async (body) => runtime.requestData(paymentLinksCreate, body === void 0 ? void 0 : { body }),
      deactivate: async (id) => runtime.requestData(paymentLinksDeactivate, { path: { id } }),
      expire: async (id, body) => runtime.requestData(paymentLinksExpire, body === void 0 ? { path: { id } } : { path: { id }, body }),
      get: async (id) => runtime.requestData(paymentLinksGet, { path: { id } }),
      list: async (query) => runtime.requestData(paymentLinksList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(paymentLinksUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    prices: {
      archive: async (id) => runtime.requestData(pricesArchive, { path: { id } }),
      create: async (body) => runtime.requestData(pricesCreate, { body }),
      get: async (id) => runtime.requestData(pricesGet, { path: { id } }),
      list: async (query) => runtime.requestData(pricesList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(pricesUpdate, { path: { id }, body })
    },
    products: {
      create: async (body) => runtime.requestData(productsCreate, { body }),
      get: async (id) => runtime.requestData(productsGet, { path: { id } }),
      list: async (query) => runtime.requestData(productsList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(productsUpdate, { path: { id }, body })
    },
    refunds: {
      create: async (body) => runtime.requestData(refundsCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(refundsGet, { path: { id } }),
      list: async (query) => runtime.requestData(refundsList, query === void 0 ? void 0 : { query })
    },
    subscriptions: {
      cancel: async (id, body) => runtime.requestData(subscriptionsCancel, body === void 0 ? { path: { id } } : { path: { id }, body }),
      create: async (body) => runtime.requestData(subscriptionsCreate, body === void 0 ? void 0 : { body }),
      get: async (id) => runtime.requestData(subscriptionsGet, { path: { id } }),
      list: async (query) => runtime.requestData(subscriptionsList, query === void 0 ? void 0 : { query }),
      update: async (id, body) => runtime.requestData(subscriptionsUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    },
    transactions: {
      get: async (id) => runtime.requestData(transactionsGet, { path: { id } }),
      list: async (query) => runtime.requestData(transactionsList, query === void 0 ? void 0 : { query })
    },
    webhook: {
      deliveriesGet: async (id) => runtime.requestData(webhookDeliveriesGet, { path: { id } }),
      deliveriesList: async (query) => runtime.requestData(webhookDeliveriesList, query === void 0 ? void 0 : { query }),
      deliveriesRetry: async (id) => runtime.requestData(webhookDeliveriesRetry, { path: { id } })
    },
    webhookEndpoints: {
      create: async (body) => runtime.requestData(webhookEndpointsCreate, body === void 0 ? void 0 : { body }),
      delete: async (id) => runtime.requestData(webhookEndpointsDelete, { path: { id } }),
      get: async (id) => runtime.requestData(webhookEndpointsGet, { path: { id } }),
      list: async (query) => runtime.requestData(webhookEndpointsList, query === void 0 ? void 0 : { query }),
      rotateSecret: async (id) => runtime.requestData(webhookEndpointsRotateSecret, { path: { id } }),
      update: async (id, body) => runtime.requestData(webhookEndpointsUpdate, body === void 0 ? { path: { id } } : { path: { id }, body })
    }
  };
}

// src/client.ts
function createTimeoutFetch(fetchImpl, timeoutMs) {
  return async (input, init = {}) => {
    const timeoutController = new AbortController();
    const signal = init.signal ? AbortSignal.any([init.signal, timeoutController.signal]) : timeoutController.signal;
    const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);
    try {
      return await fetchImpl(input, {
        ...init,
        signal
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };
}
function getApiErrorMessage(error, fallback) {
  if (typeof error === "string" && error.length > 0) {
    return error;
  }
  if (error && typeof error === "object" && "error" in error && typeof error.error === "string") {
    return error.error;
  }
  if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
    return error.message;
  }
  return fallback;
}
var RevKeenClient = class {
  generatedClient;
  constructor(options) {
    if (!options.apiKey && !options.oauth) {
      throw new RevKeenError(
        "RevKeenClient requires either 'apiKey' or 'oauth' configuration. See https://docs.revkeen.com/api/authentication"
      );
    }
    if (options.apiKey && options.oauth) {
      throw new RevKeenError(
        "Provide either 'apiKey' or 'oauth', not both. Use 'apiKey' for server-to-server with Unkey keys, or 'oauth' for OAuth 2.1 client credentials."
      );
    }
    const timeoutMs = options.timeout ?? 3e4;
    const tokenManager = options.oauth ? new OAuthTokenManager(options.oauth) : null;
    const fetchImpl = createTimeoutFetch(options.fetch ?? globalThis.fetch, timeoutMs);
    this.generatedClient = createClient({
      auth: async (auth) => {
        if (auth.type === "apiKey") {
          return options.apiKey;
        }
        if (auth.scheme === "bearer" && tokenManager) {
          return tokenManager.getToken();
        }
        return void 0;
      },
      baseUrl: options.baseUrl || "https://api.revkeen.com/v2",
      fetch: fetchImpl,
      headers: options.headers
    });
    this.generatedClient.interceptors.error.use(async (error, response, request) => {
      if (error instanceof RevKeenError) {
        return error;
      }
      if (response) {
        return new RevKeenAPIError(
          response.status,
          getApiErrorMessage(error, response.statusText),
          error
        );
      }
      if (error instanceof Error && error.name === "AbortError") {
        return new RevKeenTimeoutError(
          `Request timed out${request ? ` for ${request.method} ${request.url}` : ""}`
        );
      }
      if (error instanceof Error) {
        return new RevKeenError(`Network error: ${error.message}`);
      }
      return new RevKeenError("Unknown SDK error");
    });
    Object.assign(this, buildGeneratedResources(this));
  }
  async requestData(fn, options) {
    const result = await fn({
      client: this.generatedClient,
      throwOnError: true,
      ...options ?? {}
    });
    if (result.data === void 0) {
      throw new RevKeenError("SDK request completed without response data");
    }
    return result.data;
  }
};
export {
  OAuthTokenManager,
  RevKeenClient as RevKeen,
  RevKeenAPIError,
  RevKeenClient,
  RevKeenError,
  RevKeenTimeoutError,
  WEBHOOK_TOLERANCE_IN_SECONDS,
  WebhookSignatureVerificationError,
  analyticsRevenueMrrSummary,
  analyticsRevenueTimeSeries,
  buildGeneratedResources,
  checkoutSessionsCreate,
  checkoutSessionsExpire,
  checkoutSessionsGet,
  constructEvent,
  constructEventWithHeaders,
  creditNotesCreate,
  creditNotesGet,
  creditNotesList,
  creditNotesListLines,
  creditNotesPreview,
  creditNotesVoid,
  customerMetersGet,
  customerMetersList,
  customerPortalCustomerGet,
  customerPortalInvoicesGet,
  customerPortalInvoicesList,
  customerPortalSessionsCreate,
  customerPortalSubscriptionsCancel,
  customerPortalSubscriptionsGet,
  customerPortalSubscriptionsList,
  customersCreate,
  customersGet,
  customersList,
  customersPaymentMethodsList,
  customersPaymentRailsGet,
  customersPreferredRailsGet,
  customersUpdate,
  RevKeenClient as default,
  entitlementsCheck,
  entitlementsList,
  eventsGet,
  eventsList,
  eventsResend,
  extractWebhookHeaders,
  invoicesCreate,
  invoicesFinalize,
  invoicesGet,
  invoicesList,
  invoicesMarginEstimate,
  invoicesSend,
  invoicesUpdate,
  invoicesVoid,
  paymentIntentsCancel,
  paymentIntentsCapture,
  paymentIntentsConfirm,
  paymentIntentsCreate,
  paymentIntentsGet,
  paymentIntentsList,
  paymentLinksActivate,
  paymentLinksArchive,
  paymentLinksCreate,
  paymentLinksDeactivate,
  paymentLinksExpire,
  paymentLinksGet,
  paymentLinksList,
  paymentLinksUpdate,
  pricesArchive,
  pricesCreate,
  pricesGet,
  pricesList,
  pricesUpdate,
  productsCreate,
  productsGet,
  productsList,
  productsUpdate,
  refundsCreate,
  refundsGet,
  refundsList,
  subscriptionsCancel,
  subscriptionsCreate,
  subscriptionsGet,
  subscriptionsList,
  subscriptionsUpdate,
  transactionsGet,
  transactionsList,
  verifySignature,
  webhookDeliveriesGet,
  webhookDeliveriesList,
  webhookDeliveriesRetry,
  webhookEndpointsCreate,
  webhookEndpointsDelete,
  webhookEndpointsGet,
  webhookEndpointsList,
  webhookEndpointsRotateSecret,
  webhookEndpointsUpdate,
  webhooks_default as webhooks
};
//# sourceMappingURL=index.mjs.map