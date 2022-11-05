import { bindNew } from "../../utilities/misc";
import {
  defineAccessors,
  getArgsArraySlice,
} from "../../utilities/vectorHelpers";
import vecN from "./vecN";

type vec3 = _vec3;
class _vec3 extends vecN {
  x: number;
  y: number;
  z: number;
  constructor(domPointInit: DOMPointInit);
  constructor(...args: (number | Iterable<number>)[]);
  constructor(...args: unknown[]) {
    super();
    this._array = getArgsArraySlice(3)(...args);
    defineAccessors(this, 3);
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
