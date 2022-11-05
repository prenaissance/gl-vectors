import { bindNew } from "../../utilities/misc";
import {
  defineAccessors,
  getArgsArraySlice,
} from "../../utilities/vectorHelpers";
import vec3 from "./vec3";
import vecN from "./vecN";

type vec2 = _vec2;
class _vec2 extends vecN {
  x: number;
  y: number;
  constructor(domPointInit: DOMPointInit);
  constructor(...args: (number | Iterable<number>)[]);
  constructor(...args: unknown[]) {
    super();
    this._array = getArgsArraySlice(2)(...args);
    defineAccessors(this, 2);
  }

  cross(other: vec2): vec3 {
    return new vec3(0, 0, this.x * other.y - this.y * other.x);
  }
}
const vec2 = bindNew(_vec2);

export default vec2;
