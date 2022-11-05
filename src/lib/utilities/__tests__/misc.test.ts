import { flattenIterables } from "../misc";

describe("utilities -> misc", () => {
  describe("flattenIterables", () => {
    const numbersTable = [
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
      [[]],
      [[1]],
    ];

    it.each(numbersTable)(
      "should return same values for primitive array args %p",
      (args) => {
        expect(flattenIterables(...args)).toEqual(args);
      }
    );

    it.each(numbersTable)(
      "should return same values for single array argument %p",
      (args) => {
        expect(flattenIterables(args)).toEqual(args);
      }
    );

    it("should return flattened values for multiple array arguments", () => {
      expect(flattenIterables([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
      expect(flattenIterables([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(flattenIterables([1, 2], [3, 4], [5, 6])).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });

    it("should return flattened values for mixed primitives and array arguments", () => {
      expect(flattenIterables(1, [2, 3], 4, [5, 6])).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);

      expect(flattenIterables([1, 2], 3, [4, 5], 6)).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });
  });
});
