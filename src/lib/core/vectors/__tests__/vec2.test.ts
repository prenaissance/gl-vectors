import vec2 from "../vec2";
import vec3 from "../vec3";

describe("vectors -> vec2", () => {
  describe("constructor", () => {
    it("should instantiate with 'new'", () => {
      const vec = new vec2(1, 2);
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(2);
    });

    it("should instantiate without `new`", () => {
      const vec = vec2(1, 2);
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(2);
    });

    it("should instantiate with an array", () => {
      const vec = new vec2([1, 2]);
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(2);
    });

    it("should instantiate with an object", () => {
      const vec = new vec2({ x: 1, y: 2 });
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(2);
    });

    it("should instantiate with an object with extra properties", () => {
      const vec = new vec2({ x: 1, y: 2, z: 3 });
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(2);
    });

    it("should instantiate with an object with missing properties", () => {
      const vec = new vec2({ x: 1 });
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(0);
    });

    it("should instantiate with mixed array and numbers", () => {
      const vec = new vec2([1], 2);
      expect(vec.x).toBe(1);
      expect(vec.y).toBe(2);
    });

    it("should instantiate with no args", () => {
      const vec = new vec2();
      expect(vec.x).toBe(0);
      expect(vec.y).toBe(0);
    });
  });

  describe("operations", () => {
    const additionTable = [
      [vec2(1, 2), vec2(3, 4), vec2(4, 6)],
      [vec2(1, 2), vec2(-1, -2), vec2(0, 0)],
      [vec2(1, 2), vec2(1, 2, 3), vec2(2, 4)],
    ];

    it.each(additionTable)("should add %p and %p", (a, b, expected) => {
      expect(a.add(b).toArray()).toEqual(expected.toArray());
    });

    it.each(additionTable)("should substract %p and %p", (a, b) => {
      expect(a.subtract(b).toArray()).toEqual(
        a.toArray().map((v, i) => v - b.toArray()[i])
      );
    });

    it("should calculate dot products", () => {
      expect(vec2(1, 2).dot(vec2(3, 4))).toBe(11);
      expect(vec2(1, 2).dot(vec2(-1, -2))).toBe(-5);
    });

    it("should calculate cross products", () => {
      expect(vec2(1, 2).cross(vec2(3, 4))).toEqual(vec3(0, 0, -2));
      expect(vec2(1, 2).cross(vec2(-1, -2)).toArray()).toEqual(
        vec3(0, 0, 0).toArray()
      );
    });
  });
});
