import { isDOMPointInit } from "../utilities/checks";
import { defaultVec4Array, defaultVec4Init } from "../utilities/defaults";
import { overwriteArrays } from "../utilities/merge";
import { bindNew, flattenIterables } from "../utilities/misc";
import vecN from "./vecN";

const getArgsArraySlice = (slice: number) => (args: unknown[]) => {
  if (isDOMPointInit(args[0])) {
    const init = args[0] as DOMPointInit;
    const mergedInit = { ...defaultVec4Init, ...init };
    const array = Object.values(mergedInit);
    return array.slice(0, slice);
  } else {
    return overwriteArrays(
      defaultVec4Array.slice(0, slice),
      flattenIterables(...(args as (number | Iterable<number>)[]))
    );
  }
};

const vectorProps = ["x", "y", "z", "w"];

interface ISwizzle2<T> {
  x: number;
  y: number;
  xy: T;
  yx: T;
  xx: T;
  yy: T;
}

const vec2 = bindNew(
  class vec2 extends vecN implements ISwizzle2<vec2> {
    x: number;
    y: number;
    xy: vec2;
    yx: vec2;
    xx: vec2;
    yy: vec2;

    constructor(domPointInit: DOMPointInit);
    constructor(...args: (number | Iterable<number>)[]);
    constructor(...args: unknown[]) {
      super();
      this._array = getArgsArraySlice(2)(args);
      const usedProps = vectorProps.slice(0, 2);
      usedProps.forEach((prop, index) => {
        Object.defineProperty(this, prop, {
          get: () => this._array[index],
          set: (value) => (this._array[index] = value),
          enumerable: true,
        });
      });

      // swizzle combinations of 2
      const swizzle2 = vectorProps.slice(0, 2);
      swizzle2.forEach((prop1) => {
        swizzle2.forEach((prop2) => {
          const prop = prop1 + prop2;
          Object.defineProperty(this, prop, {
            get: () =>
              new vec2(
                Reflect.get(this, prop1) as number,
                Reflect.get(this, prop2) as number
              ),
            enumerable: true,
          });
        });
      });
    }

    cross(other: vec2): number {
      return this.x * other.y - this.y * other.x;
    }
  }
);

const vec3 = bindNew(
  class vec3 extends vecN {
    get x() {
      return this._array[0];
    }
    set x(value: number) {
      this._array[0] = value;
    }
    get y() {
      return this._array[1];
    }
    set y(value: number) {
      this._array[1] = value;
    }
    get z() {
      return this._array[2];
    }
    set z(value: number) {
      this._array[2] = value;
    }

    constructor(domPointInit: DOMPointInit);
    constructor(...args: (number | Iterable<number>)[]);
    constructor(...args: unknown[]) {
      super();
      this._array = getArgsArraySlice(3)(args);
    }

    cross(other: vec3): vec3 {
      return new vec3(
        this.y * other.z - this.z * other.y,
        this.z * other.x - this.x * other.z,
        this.x * other.y - this.y * other.x
      );
    }
  }
);

const vec4 = bindNew(
  class vec4 extends vecN {
    get x() {
      return this._array[0];
    }
    set x(value: number) {
      this._array[0] = value;
    }
    get y() {
      return this._array[1];
    }
    set y(value: number) {
      this._array[1] = value;
    }
    get z() {
      return this._array[2];
    }
    set z(value: number) {
      this._array[2] = value;
    }
    get w() {
      return this._array[3];
    }
    set w(value: number) {
      this._array[3] = value;
    }

    constructor(domPointInit: DOMPointInit);
    constructor(...args: (number | Iterable<number>)[]);
    constructor(...args: unknown[]) {
      super();
      this._array = getArgsArraySlice(4)(args);
    }

    cross(other: vec4): vec4 {
      return new vec4(
        this.y * other.z - this.z * other.y,
        this.z * other.x - this.x * other.z,
        this.x * other.y - this.y * other.x,
        1
      );
    }
  }
);

const vec = vec2(1, 2);
console.log(vec.yy.toArray());

export { vec2, vec3, vec4 };
