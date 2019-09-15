import { dateDiffInDays, formatDate } from "./date";
import assert from "assert";

it("checks the date diff same day", () => {
  const a = new Date("2017-01-01");
  const b = new Date("2017-01-01");
  assert.strictEqual(dateDiffInDays(a, b), 0);
});

it("checks the date diff over 1 day", () => {
  const a = new Date("2017-01-01");
  const b = new Date("2017-01-02");
  assert.strictEqual(dateDiffInDays(a, b), 1);
});

it("checks the date diff inside a month", () => {
  const a = new Date("2017-01-01");
  const b = new Date("2017-01-25");
  assert.strictEqual(dateDiffInDays(a, b), 24);
});

it("checks the date diff over 1 month", () => {
  const a = new Date("2017-01-01");
  const b = new Date("2017-02-01");
  assert.strictEqual(dateDiffInDays(a, b), 31);
});

it("checks the date diff over year", () => {
  const a = new Date("2017-01-01");
  const b = new Date("2018-01-01");
  assert.strictEqual(dateDiffInDays(a, b), 365);
});

it("checks the date diff over bissextile year", () => {
  const a = new Date("2016-01-01");
  const b = new Date("2017-01-01");
  assert.strictEqual(dateDiffInDays(a, b), 366);
});

it("checks the date diff over 5 year", () => {
  const a = new Date("2001-01-01");
  const b = new Date("2006-01-01");
  assert.strictEqual(dateDiffInDays(a, b), 365 * 5 + 1);
});

it("checks the date diff in the past", () => {
  const a = new Date("2006-01-02");
  const b = new Date("2006-01-01");
  assert.strictEqual(dateDiffInDays(a, b), -1);
});

it("checks the date diff in the past over 1 year", () => {
  const a = new Date("2006-01-01");
  const b = new Date("2005-01-01");
  assert.strictEqual(dateDiffInDays(a, b), -365);
});

it("formats the date", () => {
  assert.strictEqual(formatDate(new Date(2019, 0, 1)), "2019-01-01");
  assert.strictEqual(formatDate(new Date("2000-10-10")), "2000-10-10");
  assert.strictEqual(formatDate(new Date(2000, 10, 3, 12, 30)), "2000-11-03");
});
