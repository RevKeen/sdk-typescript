import { describe, expect, expectTypeOf, it } from "vitest";
import type { MinorUnits } from "../scalars.js";
import {
  isMinorUnits,
  mapOptionalNullable,
  minorUnits,
  parseRfc3339,
} from "../scalars.js";

describe("minor-unit money", () => {
  it.each([Number.MIN_SAFE_INTEGER, -1, 0, 1, Number.MAX_SAFE_INTEGER])(
    "brands safe integer %s",
    (value) => {
      const amount = minorUnits(value);
      expect(amount).toBe(value);
      expect(isMinorUnits(value)).toBe(true);
      expectTypeOf(amount).toEqualTypeOf<MinorUnits>();
    },
  );
  it.each([
    1.01,
    -2.5,
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.MAX_SAFE_INTEGER + 1,
  ])("rejects non-integral or unsafe value %s", (value) => {
    expect(() => minorUnits(value)).toThrow("safe integer");
    expect(isMinorUnits(value)).toBe(false);
  });
  it("keeps absent, null, and zero distinct", () => {
    expect(mapOptionalNullable(undefined, minorUnits)).toBeUndefined();
    expect(mapOptionalNullable(null, minorUnits)).toBeNull();
    expect(mapOptionalNullable(0, minorUnits)).toBe(0);
  });
});

describe("RFC 3339 date-time parsing", () => {
  it.each([
    ["2026-08-21T12:34:56Z", "2026-08-21T12:34:56.000Z"],
    ["2026-08-21T14:34:56+02:00", "2026-08-21T12:34:56.000Z"],
    ["2024-02-29T23:59:59.123-05:30", "2024-03-01T05:29:59.123Z"],
  ])("parses %s as a real Date", (input, expected) => {
    const parsed = parseRfc3339(input);
    expect(parsed).toBeInstanceOf(Date);
    expect(parsed.toISOString()).toBe(expected);
  });
  it.each([
    "2026-08-21T12:34:56",
    "2026-08-21 12:34:56Z",
    "2026-02-29T12:34:56Z",
    "2026-13-01T12:34:56Z",
    "2026-08-21T24:00:00Z",
    "2026-08-21T12:34:60Z",
    "not-a-date",
  ])("rejects invalid or offset-free value %s", (value) => {
    expect(() => parseRfc3339(value)).toThrow("RFC 3339");
  });
});
