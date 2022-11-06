import { overwriteArrays, shallowEquals } from "../merge";

describe("utilities -> merge", () => {
  describe("overwriteArrays", () => {
    const overwriteArraysTable = [
      [
        [1, 2, 3],
        [4, 5, 6],
        [4, 5, 6],
      ],
      [
        [1, 2, 3],
        [4, 5],
        [4, 5, 3],
      ],
      [[1, 2, 3], [4], [4, 2, 3]],
      [[1, 2, 3], [], [1, 2, 3]],
      [[1], [4, 5, 6], [4, 5, 6]],
      [
        [0, 0, 0, 1],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
      ],
    ];

    it.each(overwriteArraysTable)(
      "should overwrite arrays",
      (a, b, expected) => {
        expect(overwriteArrays(a, b)).toEqual(expected);
      }
    );
  });

  describe("shallowEquals", () => {
    it("should equal objects without object children", () => {
      expect(shallowEquals({ a: 1 }, { a: 1 })).toBe(true);
    });

    it("should not equal objects with different keys", () => {
      expect(shallowEquals({ a: 1 }, { b: 1 })).toBe(false);
    });

    it("should not equal objects with different values", () => {
      expect(shallowEquals({ a: 1 }, { a: 2 })).toBe(false);
    });

    it("should equal objects with same object children", () => {
      const obj = { a: 1 };
      expect(shallowEquals({ a: obj }, { a: obj })).toBe(true);
    });

    it("should not equal objects with different object children", () => {
      expect(shallowEquals({ a: { a: 1 } }, { a: { a: 1 } })).toBe(false);
    });

    it("should equal primitives", () => {
      expect(shallowEquals(1, 1)).toBe(true);
    });

    it("should not equal primitives of different types", () => {
      expect(shallowEquals(1, "1")).toBe(false);
    });

    it("should not equal primitives and objects", () => {
      expect(shallowEquals(1, { a: 1 })).toBe(false);
    });

    it("should not equal objects with different key lengths", () => {
      expect(shallowEquals({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    });

    it("should not equal nulls to objects", () => {
      expect(shallowEquals(null, { a: 1 })).toBe(false);
    });
  });
});
