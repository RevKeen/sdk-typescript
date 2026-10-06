import { RevKeenError } from "./errors.js";

declare const minorUnitsBrand: unique symbol;
export type MinorUnits = number & { readonly [minorUnitsBrand]: "MinorUnits" };

export function isMinorUnits(value: number): value is MinorUnits {
  return Number.isSafeInteger(value);
}

export function minorUnits(value: number): MinorUnits {
  if (!isMinorUnits(value))
    throw new RevKeenError("Minor-unit money must be a safe integer");
  return value;
}

export function mapOptionalNullable<T, U>(
  value: T | null | undefined,
  transform: (value: T) => U,
): U | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  return transform(value);
}

const RFC3339_WITH_OFFSET =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(?:Z|([+-])(\d{2}):(\d{2}))$/;

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInMonth(year: number, month: number): number {
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

export function parseRfc3339(value: string): Date {
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match)
    throw new RevKeenError(
      "Date-time must be RFC 3339 with an explicit offset",
    );
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  const offsetHour = match[8] === undefined ? 0 : Number(match[8]);
  const offsetMinute = match[9] === undefined ? 0 : Number(match[9]);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > daysInMonth(year, month) ||
    hour > 23 ||
    minute > 59 ||
    second > 59 ||
    offsetHour > 23 ||
    offsetMinute > 59
  ) {
    throw new RevKeenError("Date-time must be a valid RFC 3339 timestamp");
  }
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp))
    throw new RevKeenError("Date-time must be a valid RFC 3339 timestamp");
  return new Date(timestamp);
}
