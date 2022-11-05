import { isDOMPointInit } from "../checks";

describe("utilities -> checks", () => {
  const domPointTable = [
    [{}, true],
    [{ x: 1 }, true],
    [{ x: 1, y: 2, z: 3, w: 4 }, true],
    [[1, 2, 3, 4], false],
    [1, false],
    ["1", false],
    [true, false],
  ] as const;

  it.each(domPointTable)(
    "should check if %p is a DOMPoint",
    (value, expected) => {
      expect(isDOMPointInit(value)).toBe(expected);
    }
  );
});
