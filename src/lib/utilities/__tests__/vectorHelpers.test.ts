import vec2 from "../../core/vectors/vec2";
import vec3 from "../../core/vectors/vec3";
import { flattenIterables } from "../misc";
import { getArgsArraySlice, permutationsRepetitions } from "../vectorHelpers";

const permutationsTable = [
  [["x", "y"], 2, ["xx", "xy", "yx", "yy"].map((str) => [...str])],
  [
    ["x", "y", "z"],
    2,
    ["xx", "xy", "xz", "yx", "yy", "yz", "zx", "zy", "zz"].map((str) => [
      ...str,
    ]),
  ],
] as [string[], number, string[][]][];

describe("utilities -> vector helpers", () => {
  describe("permutations with repetitions", () => {
    it.each(permutationsTable)(
      "should make correct permutations",
      (args, n, expected) => {
        const actual = permutationsRepetitions(args, n);
        expect(actual).toEqual(expected);
      }
    );
  });

  describe("getArgsArraySlice", () => {
    it("should work with number arguments", () => {
      const slice = getArgsArraySlice(3)(1, 2, 3, 4, 5);
      expect(slice).toEqual([1, 2, 3]);

      const slice2 = getArgsArraySlice(4)(1, 2, 3);
      expect(slice2).toEqual([1, 2, 3, 1]);
    });

    it("should work with array arguments", () => {
      const slice = getArgsArraySlice(3)([1, 2], [3, 4, 5]);
      expect(slice).toEqual(flattenIterables([1, 2], [3, 4, 5]).slice(0, 3));

      const slice2 = getArgsArraySlice(4)([1, 2, 3]);
      expect(slice2).toEqual([1, 2, 3, 1]);

      const slice3 = getArgsArraySlice(3)([1, 2]);
      expect(slice3).toEqual([1, 2, 0]);
    });

    it("should work with object arguments", () => {
      const slice = getArgsArraySlice(3)({ x: 1, y: 2 });
      expect(slice).toEqual([1, 2, 0]);

      const slice2 = getArgsArraySlice(4)({ x: 1, y: 2, z: 3 });
      expect(slice2).toEqual([1, 2, 3, 1]);

      const slice3 = getArgsArraySlice(4)({ x: 1, y: 2 });
      expect(slice3).toEqual([1, 2, 0, 1]);

      const slice4 = getArgsArraySlice(2)({ x: 1 });
      expect(slice4).toEqual([1, 0]);
    });

    it("should work with vector arguments", () => {
      const slice = getArgsArraySlice(3)(vec2(1, 2));
      expect(slice).toEqual([1, 2, 0]);

      const slice2 = getArgsArraySlice(4)(vec3(1, 2, 3));
      expect(slice2).toEqual([1, 2, 3, 1]);

      const slice3 = getArgsArraySlice(4)(vec2(1, 2), vec2(-1, -2));
      expect(slice3).toEqual([1, 2, -1, -2]);
    });
  });
});
