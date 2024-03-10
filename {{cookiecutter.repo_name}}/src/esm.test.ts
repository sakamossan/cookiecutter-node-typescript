import { default as qs } from "query-string";

describe("sindresorhusa", () => {
  test("basic", () => {
    expect(qs.stringify({ a: 1 })).toEqual("a=1");
  });
});
