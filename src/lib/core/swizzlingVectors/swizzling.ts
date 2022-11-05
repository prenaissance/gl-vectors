import { vectorProps } from "../../utilities/defaults";
import { permutationsRepetitions } from "../../utilities/vectorHelpers";
import vecN from "../vecN";

const defineSwizzlingN = <ReturnT>(
  vec: vecN,
  dimension: number,
  argsNumber: number,
  returnClass: { new (...args: (number | Iterable<number>)[]): ReturnT }
) => {
  const swizzles = permutationsRepetitions(
    vectorProps.slice(0, dimension),
    argsNumber
  );
  for (const swizzle of swizzles) {
    const swizzleName = swizzle.join("");
    const constructorArgs = swizzle.map(
      (prop) => Reflect.get(vec, prop) as number
    );
    Object.defineProperty(vec, swizzleName, {
      get() {
        return new returnClass(...constructorArgs);
      },
      enumerable: false,
    });
  }
};

export { defineSwizzlingN };
