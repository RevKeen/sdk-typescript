import { RevKeenError } from "./errors.js";

export interface RevKeenPaginationOptions<TPage, TItem, TState> {
  initialState: TState;
  getItems: (page: TPage) => readonly TItem[];
  getNextState: (page: TPage) => TState | null | undefined;
  stateKey: (state: TState) => string;
  signal?: AbortSignal;
}

export type RevKeenFetchPage<TPage, TState> = (
  state: TState,
  signal?: AbortSignal,
) => Promise<TPage>;

export class RevKeenPaginationStallError extends RevKeenError {
  constructor(public readonly stateKey: string) {
    super(`Pagination did not advance beyond state '${stateKey}'`);
    this.name = "RevKeenPaginationStallError";
  }
}

function throwIfAborted(signal: AbortSignal | undefined): void {
  if (!signal?.aborted) return;
  if (signal.reason !== undefined) throw signal.reason;
  if (typeof DOMException !== "undefined")
    throw new DOMException("The operation was aborted", "AbortError");
  const error = new Error("The operation was aborted");
  error.name = "AbortError";
  throw error;
}

export function paginate<TPage, TItem, TState>(
  fetchPage: RevKeenFetchPage<TPage, TState>,
  options: RevKeenPaginationOptions<TPage, TItem, TState>,
): AsyncIterable<TItem> {
  return {
    async *[Symbol.asyncIterator]() {
      let state = options.initialState;
      const seen = new Set<string>();
      while (true) {
        throwIfAborted(options.signal);
        const currentKey = options.stateKey(state);
        if (seen.has(currentKey))
          throw new RevKeenPaginationStallError(currentKey);
        seen.add(currentKey);
        const page = await fetchPage(state, options.signal);
        const items = options.getItems(page);
        for (const item of items) {
          throwIfAborted(options.signal);
          yield item;
        }
        if (items.length === 0) return;
        const nextState = options.getNextState(page);
        if (nextState === null || nextState === undefined) return;
        const nextKey = options.stateKey(nextState);
        if (seen.has(nextKey)) throw new RevKeenPaginationStallError(nextKey);
        state = nextState;
      }
    },
  };
}
