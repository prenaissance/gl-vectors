import { defaultVec4Init } from "../utilities/defaults";

abstract class vecN implements Iterable<number> {
  protected _array: number[] = [];
  get dimension() {
    return this._array.length;
  }
  constructor() {
    Object.defineProperty(this, "_array", {
      writable: true,
      enumerable: false,
    });
  }

  [Symbol.iterator]() {
    return this._array[Symbol.iterator]();
  }

  get length() {
    return Math.sqrt(
      this._array.reduce((squaresSum, value) => squaresSum + value ** 2, 0)
    );
  }

  toArray(): number[] {
    return [...this];
  }

  // "Arithmetics"
  add(other: this): this {
    return new (this.constructor as any)(
      this._array.map((value, index) => value + other._array[index])
    );
  }

  multiply(scalar: number): this {
    return new (this.constructor as any)(
      this._array.map((value) => value * scalar)
    );
  }

  subtract(other: this): this {
    return new (this.constructor as any)(this.add(other.multiply(-1)));
  }

  divide(scalar: number): this {
    return this.multiply(1 / scalar);
  }

  // vector operations
  normalize(): this {
    return this.multiply(1 / this.length);
  }

  dot(other: this): number {
    return this._array.reduce(
      (dotProduct, value, index) => dotProduct + value * other._array[index],
      0
    );
  }

  distanceTo(other: this): number {
    return this.subtract(other).length;
  }

  applyMatrix(matrix: DOMMatrixReadOnly) {
    const pointInit = { ...defaultVec4Init, ...this };
    const result = matrix.transformPoint(pointInit);
    const resultArray = Object.values(result);
    return new (this.constructor as any)(resultArray.slice(0, this.dimension));
  }

  // interpolations

  /**
   * @param t
   *  number between 0 and 1, clamp if value is out of range
   * @example
   * const a = new vec2(0, 0);
   * const b = new vec2(1, 1);
   * const c = a.lerp(b, 0.5); // vec2(0.5, 0.5)
   */
  lerp(other: this, t: number): this {
    return this.add(other.subtract(this).multiply(t));
  }

  clamp(near: this, far: this): this {
    return new (this.constructor as any)(
      this.distanceTo(near) < this.distanceTo(far) ? near : far
    );
  }
}

export default vecN;
