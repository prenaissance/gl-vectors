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
});
