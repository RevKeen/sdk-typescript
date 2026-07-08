// src/core/errors.ts
var RevKeenError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "RevKeenError";
  }
};
var RevKeenAPIError = class extends RevKeenError {
  constructor(status, message, body) {
    super(message);
    this.status = status;
    this.body = body;
    this.name = "RevKeenAPIError";
  }
  status;
  body;
};
var RevKeenTimeoutError = class extends RevKeenError {
  constructor(message) {
    super(message);
    this.name = "RevKeenTimeoutError";
  }
};

export {
  RevKeenError,
  RevKeenAPIError,
  RevKeenTimeoutError
};
//# sourceMappingURL=chunk-ZOT7NMVT.mjs.map