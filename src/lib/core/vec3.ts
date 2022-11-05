import { bindNew } from "../utilities/misc";
import { getArgsArraySlice } from "../utilities/vectorHelpers";
import { defineAccessors, defineSwizzlingN } from "./swizzling";
import vec2, { ISwizzle2 } from "./vec2";
import vecN from "./vecN";

interface ISwizzle3 extends ISwizzle2 {
  z: number;
  yz: vec2;
  zx: vec2;
  zy: vec2;
  zz: vec2;
  xxx: vec3;
  xxy: vec3;
  xxz: vec3;
  xyx: vec3;
  xyy: vec3;
  xyz: vec3;
  xzx: vec3;
  xzy: vec3;
  xzz: vec3;
  yxx: vec3;
  yxy: vec3;
  yxz: vec3;
  yyx: vec3;
  yyy: vec3;
  yyz: vec3;
  yzx: vec3;
  yzy: vec3;
  yzz: vec3;
  zxx: vec3;
  zxy: vec3;
  zxz: vec3;
  zyx: vec3;
  zyy: vec3;
  zyz: vec3;
  zzx: vec3;
  zzy: vec3;
  zzz: vec3;
}

type vec3 = _vec3;
class _vec3 extends vecN implements ISwizzle3 {
  x: number;
  y: number;
  z: number;
  xx: vec2;
  xy: vec2;
  xz: vec2;
  yx: vec2;
  yy: vec2;
  yz: vec2;
  zx: vec2;
  zy: vec2;
  zz: vec2;
  xxx: vec3;
  xxy: vec3;
  xxz: vec3;
  xyx: vec3;
  xyy: vec3;
  xyz: vec3;
  xzx: vec3;
  xzy: vec3;
  xzz: vec3;
  yxx: vec3;
  yxy: vec3;
  yxz: vec3;
  yyx: vec3;
  yyy: vec3;
  yyz: vec3;
  yzx: vec3;
  yzy: vec3;
  yzz: vec3;
  zxx: vec3;
  zxy: vec3;
  zxz: vec3;
  zyx: vec3;
  zyy: vec3;
  zyz: vec3;
  zzx: vec3;
  zzy: vec3;
  zzz: vec3;

  constructor(domPointInit: DOMPointInit);
  constructor(...args: (number | Iterable<number>)[]);
  constructor(...args: unknown[]) {
    super();
    this._array = getArgsArraySlice(3)(args);
    defineAccessors(this, 3);
    defineSwizzlingN(this, 3, 2, vec2);
    defineSwizzlingN(this, 3, 3, vec3);
  }

  cross(other: vec3): vec3 {
    return new vec3(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }
}
const vec3 = bindNew(_vec3);

export default vec3;
export { ISwizzle3 };
