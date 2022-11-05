import vec2 from "../vec2";
import vec3 from "../vec3";
import vec4 from "../vec4";

describe("vectors -> vec4", () => {
  describe("constructor", () => {
    it("should instantiate with 'new'", () => {
      const vec = new vec4(1, 2, 3, 4);
      expect(vec.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("should instantiate without `new`", () => {
      const vec = vec4(1, 2, 3, 4);
      expect(vec.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("should instantiate with an array", () => {
      const vec = new vec4([1, 2, 3, 4]);
      expect(vec.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("should instantiate with an object", () => {
      const vec = new vec4({ x: 1, y: 2, z: 3, w: 4 });
      expect(vec.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("should instantiate from a vec3", () => {
      const vec = new vec4(vec3(1, 2, 3));
      expect(vec.toArray()).toEqual([1, 2, 3, 1]);
    });

    it("should instantiate from a vec2", () => {
      const vec = new vec4(vec2(1, 2));
      expect(vec.toArray()).toEqual([1, 2, 0, 1]);
    });
  });

  describe("operations", () => {
    const additionTable = [
      [vec4(1, 2, 3, 4), vec4(5, 6, 7, 8), vec4(6, 8, 10, 12)],
      [vec4(1, 2, 3, 4), vec4(-1, -2, -3, -4), vec4(0, 0, 0, 0)],
      [vec4(1, 2, 3, 4), vec4(1, 2, 3), vec4(2, 4, 6, 5)],
    ];

    it.each(additionTable)(
      "should add %p to %p to get %p",
      (a, b, expected) => {
        expect(a.add(b).toArray()).toEqual(expected.toArray());
      }
    );

    it("should calculate dot products", () => {
      const a = vec4(1, 2, 3, 4);
      const b = vec4(5, 6, 7, 8);
      expect(a.dot(b)).toBe(70);
    });

    it("should calculate cross products", () => {
      const v1 = vec4(1, 2, 3, 4);
      const v2 = vec4(5, 6, 7, 8);
      const cross = v1.cross(v2);
      expect(cross.toArray()).toEqual([-4, 8, -4, 1]);
    });
  });
});
