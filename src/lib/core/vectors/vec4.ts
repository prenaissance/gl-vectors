import { bindNew } from "../../utilities/misc";
import {
  defineAccessors,
  getArgsArraySlice,
} from "../../utilities/vectorHelpers";
import vecN from "./vecN";

type vec4 = _vec4;
class _vec4 extends vecN {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(domPointInit: DOMPointInit);
  constructor(...args: (number | Iterable<number>)[]);
  constructor(...args: unknown[]) {
    super();
    this._array = getArgsArraySlice(4)(...args);
    defineAccessors(this, 4);
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
const vec4 = bindNew(_vec4);

export default vec4;
