export class RevKeenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RevKeenError";
  }
}

export class RevKeenAPIError extends RevKeenError {
  constructor(
    public readonly status: number,
    message: string,
    public readonly body: unknown,
  ) {
    super(message);
    this.name = "RevKeenAPIError";
  }
}

export class RevKeenTimeoutError extends RevKeenError {
  constructor(message: string) {
    super(message);
    this.name = "RevKeenTimeoutError";
  }
}
