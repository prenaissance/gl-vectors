import vec2 from "../vec2";
import vec3 from "../vec3";

describe("vectors -> vec3", () => {
  describe("constructor", () => {
    it("should instantiate with 'new'", () => {
      const vec = new vec3(1, 2, 3);
      expect(vec.toArray()).toEqual([1, 2, 3]);
    });

    it("should instantiate without `new`", () => {
      const vec = vec3(1, 2, 3);
      expect(vec.toArray()).toEqual([1, 2, 3]);
    });

    it("should instantiate with an array", () => {
      const vec = new vec3([1, 2, 3]);
      expect(vec.toArray()).toEqual([1, 2, 3]);
    });

    it("should instantiate with an object", () => {
      const vec = new vec3({ x: 1, y: 2, z: 3 });
      expect(vec.toArray()).toEqual([1, 2, 3]);
    });

    it("should instantiate from a vec2", () => {
      const vec = new vec3(vec2(1, 2));
      expect(vec.toArray()).toEqual([1, 2, 0]);
    });
  });

  describe("operations", () => {
    it("should calculate cross products", () => {
      const v1 = vec3(1, 2, 3);
      const v2 = vec3(4, 5, 6);
      const cross = v1.cross(v2);
      expect(cross.toArray()).toEqual([-3, 6, -3]);

      const v3 = new vec3(0, 1, 0);
      const v4 = new vec3(0, 0, 1);
      const cross2 = v3.cross(v4);
      expect(cross2.toArray()).toEqual([1, 0, 0]);
    });

    it("should calculate dot products", () => {
      const v1 = vec3(1, 2, 3);
      const v2 = vec3(4, 5, 6);
      const dot = v1.dot(v2);
      expect(dot).toBe(32);
    });
  });
});
