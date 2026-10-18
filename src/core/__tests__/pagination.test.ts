import { describe, expect, it, vi } from "vitest";
import { paginate, RevKeenPaginationStallError } from "../pagination.js";

interface Page {
  items: number[];
  next: number | null;
}
function pages(
  fetchPage: (offset: number, signal?: AbortSignal) => Promise<Page>,
  signal?: AbortSignal,
) {
  return paginate(fetchPage, {
    initialState: 0,
    getItems: (page) => page.items,
    getNextState: (page) => page.next,
    stateKey: String,
    signal,
  });
}

describe("paginate", () => {
  it("is lazy, preserves callback inputs, and does not prefetch", async () => {
    const controller = new AbortController();
    const fetchPage = vi.fn(
      async (offset: number): Promise<Page> => ({
        items: offset === 0 ? [10, 11] : [20],
        next: offset === 0 ? 2 : null,
      }),
    );
    const iterator = pages(fetchPage, controller.signal)[
      Symbol.asyncIterator
    ]();
    expect(fetchPage).not.toHaveBeenCalled();
    await expect(iterator.next()).resolves.toEqual({ value: 10, done: false });
    expect(fetchPage).toHaveBeenNthCalledWith(1, 0, controller.signal);
    await expect(iterator.next()).resolves.toEqual({ value: 11, done: false });
    expect(fetchPage).toHaveBeenCalledTimes(1);
    await expect(iterator.next()).resolves.toEqual({ value: 20, done: false });
    expect(fetchPage).toHaveBeenNthCalledWith(2, 2, controller.signal);
    await expect(iterator.next()).resolves.toEqual({
      value: undefined,
      done: true,
    });
  });

  it("stops on an empty page even when a next state is returned", async () => {
    const fetchPage = vi.fn(
      async (offset: number): Promise<Page> =>
        offset === 0 ? { items: [], next: 1 } : { items: [42], next: null },
    );
    const values: number[] = [];
    for await (const value of pages(fetchPage)) values.push(value);
    expect(values).toEqual([]);
    expect(fetchPage).toHaveBeenCalledTimes(1);
  });

  it("fails on non-advancing state", async () => {
    const iterator = pages(async () => ({ items: [1], next: 0 }))[
      Symbol.asyncIterator
    ]();
    await expect(iterator.next()).resolves.toEqual({ value: 1, done: false });
    await expect(iterator.next()).rejects.toBeInstanceOf(
      RevKeenPaginationStallError,
    );
  });

  it("does no I/O when already cancelled", async () => {
    const reason = new Error("caller cancelled");
    const controller = new AbortController();
    controller.abort(reason);
    const fetchPage = vi.fn(
      async (): Promise<Page> => ({ items: [], next: null }),
    );
    await expect(
      pages(fetchPage, controller.signal)[Symbol.asyncIterator]().next(),
    ).rejects.toBe(reason);
    expect(fetchPage).not.toHaveBeenCalled();
  });

  it("checks cancellation between yielded items", async () => {
    const controller = new AbortController();
    const iterator = pages(
      async () => ({ items: [1, 2], next: null }),
      controller.signal,
    )[Symbol.asyncIterator]();
    await expect(iterator.next()).resolves.toEqual({ value: 1, done: false });
    controller.abort();
    await expect(iterator.next()).rejects.toMatchObject({ name: "AbortError" });
  });

  it("propagates the original page-fetch error", async () => {
    const failure = new Error("page fetch failed");
    await expect(
      pages(async () => {
        throw failure;
      })
        [Symbol.asyncIterator]()
        .next(),
    ).rejects.toBe(failure);
  });
});
