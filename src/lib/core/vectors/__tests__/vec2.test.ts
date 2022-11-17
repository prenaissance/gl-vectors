import vec2 from "../vec2";
import vec3 from "../vec3";
import DOMMatrix from "../__mocks__/DOMMatrixMock";

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

    it("should mutate proprieties", () => {
      const vec = new vec2(1, 2);
      vec.x = 3;
      vec.y = 4;
      expect(vec.toArray()).toEqual([3, 4]);
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

    it.each(additionTable)("should subtract %p and %p", (a, b) => {
      expect(a.subtract(b).toArray()).toEqual(
        a.toArray().map((v, i) => v - b.toArray()[i])
      );
    });

    it("should divide by scalar", () => {
      expect(vec2(1, 2).divide(2).toArray()).toEqual([0.5, 1]);
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

    it("should normalize vector", () => {
      const normalized = vec2(1, 2).normalize();
      expect(normalized.length).toBeCloseTo(1);
    });

    it("should calculate length", () => {
      expect(vec2(3, 4).length).toBe(5);
      expect(vec2(-1, -2).length).toBe(Math.sqrt(5));
    });

    it("should always give dimension of 2", () => {
      expect(vec2(1, 2).dimension).toBe(2);
      expect(vec2(1, 2, 3).dimension).toBe(2);
    });

    it("should calculate distance to other vec2", () => {
      expect(vec2(1, 2).distanceTo(vec2(3, 4))).toBeCloseTo(2 * Math.sqrt(2));
    });

    it("should apply matrix transformations", () => {
      const vec = vec2(1, 2);
      const matrix = new DOMMatrix().translateSelf(1, 2);
      expect(
        vec.applyMatrix(matrix as any as DOMMatrixReadOnly).toArray()
      ).toEqual([2, 4]);
    });

    const lerpTable = [
      [vec2(1, 2), vec2(3, 4), 0, vec2(1, 2)],
      [vec2(1, 2), vec2(3, 4), 1, vec2(3, 4)],
      [vec2(1, 2), vec2(3, 4), 0.5, vec2(2, 3)],
    ] as const;

    it.each(lerpTable)("should lerp %p and %p by %p", (a, b, t, expected) => {
      expect(a.lerp(b, t).toArray()).toEqual(expected.toArray());
    });

    it("should clamp vectors correctly", () => {
      const vec = vec2(1, 2);
      const vecFarther = vec2(3, 3);
      const near = vec2(0, 0);
      const far = vec2(3, 4);
      expect(vec.clamp(near, far).toArray()).toEqual(near.toArray());
      expect(vecFarther.clamp(near, far).toArray()).toEqual(far.toArray());
    });
  });
});
