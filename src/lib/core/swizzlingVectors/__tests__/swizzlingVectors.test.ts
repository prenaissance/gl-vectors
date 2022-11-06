import {
  swizzlingVec2 as vec2,
  swizzlingVec3 as vec3,
  swizzlingVec4 as vec4,
} from "../swizzlingVectors";

describe("swizzling vectors", () => {
  describe("vec2", () => {
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

    it("should swizzle to vec2", () => {
      const vec = new vec2(1, 2);
      const swizzled = vec.xx;
      expect(swizzled.x).toBe(1);
      expect(swizzled.y).toBe(1);
    });

    it("should swizzle to vec3", () => {
      const vec = new vec2(1, 2);
      const swizzled = vec.yxx;
      expect(swizzled.x).toBe(2);
      expect(swizzled.y).toBe(1);
      expect(swizzled.z).toBe(1);
    });

    it("should swizzle to vec4", () => {
      const vec = new vec2(1, 2);
      const swizzled = vec.yxxx;
      expect(swizzled.x).toBe(2);
      expect(swizzled.y).toBe(1);
      expect(swizzled.z).toBe(1);
      expect(swizzled.w).toBe(1);
    });
  });

  describe("vec3", () => {
    it("should instantiate with 'new'", () => {
      const vec = new vec3(1, 2, 3);
      expect(vec.toArray()).toEqual([1, 2, 3]);
    });

    it("should instantiate without `new`", () => {
      const vec = vec3(1, 2, 3);
      expect(vec.toArray()).toEqual([1, 2, 3]);
    });

    it("should swizzle to vec2", () => {
      const vec = new vec3(1, 2, 3);
      const swizzled = vec.xx;
      expect(swizzled.toArray()).toEqual([1, 1]);
    });

    it("should swizzle to vec3", () => {
      const vec = new vec3(1, 2, 3);
      const swizzled = vec.yxx;
      expect(swizzled.toArray()).toEqual([2, 1, 1]);
    });

    it("should swizzle to vec4", () => {
      const vec = new vec3(1, 2, 3);
      const swizzled = vec.yxxx;
      expect(swizzled.toArray()).toEqual([2, 1, 1, 1]);
    });
  });

  describe("vec4", () => {
    it("should instantiate with 'new'", () => {
      const vec = new vec4(1, 2, 3, 4);
      expect(vec.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("should instantiate without `new`", () => {
      const vec = vec4(1, 2, 3, 4);
      expect(vec.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("should swizzle to vec2", () => {
      const vec = new vec4(1, 2, 3, 4);
      const swizzled = vec.xx;
      expect(swizzled.toArray()).toEqual([1, 1]);
    });

    it("should swizzle to vec3", () => {
      const vec = new vec4(1, 2, 3, 4);
      const swizzled = vec.xyx;
      expect(swizzled.toArray()).toEqual([1, 2, 1]);
    });

    it("should swizzle to vec4", () => {
      const vec = new vec4(1, 2, 3, 4);
      const swizzled = vec.xyzx;
      expect(swizzled.toArray()).toEqual([1, 2, 3, 1]);
    });
  });
});
