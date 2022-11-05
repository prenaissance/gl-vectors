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
});
