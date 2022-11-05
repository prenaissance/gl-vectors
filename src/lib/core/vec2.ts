import { bindNew } from "../utilities/misc";
import { getArgsArraySlice } from "../utilities/vectorHelpers";
import { defineAccessors, defineSwizzlingN } from "./swizzling";
import vecN from "./vecN";

interface ISwizzle2 {
  x: number;
  y: number;
  xx: vec2;
  xy: vec2;
  yx: vec2;
  yy: vec2;
}

type vec2 = _vec2;
class _vec2 extends vecN implements ISwizzle2 {
  x: number;
  y: number;
  xx: vec2;
  xy: vec2;
  yx: vec2;
  yy: vec2;

  constructor(domPointInit: DOMPointInit);
  constructor(...args: (number | Iterable<number>)[]);
  constructor(...args: unknown[]) {
    super();
    this._array = getArgsArraySlice(2)(args);
    defineAccessors(this, 2);
    defineSwizzlingN(this, 2, 2, vec2);
  }

  cross(other: vec2): number {
    return this.x * other.y - this.y * other.x;
  }
}
const vec2 = bindNew(_vec2);

export default vec2;
export { ISwizzle2 };
