import vecN from "../core/vectors/vecN";
import { isDOMPointInit } from "./checks";
import { defaultVec4Array, defaultVec4Init, vectorProps } from "./defaults";
import { overwriteArrays } from "./merge";
import { flattenIterables } from "./misc";

const permutationsRepetitions = <T>(array: T[], count: number) => {
  const result: T[][] = [];
  const recurse = (current: T[], index: number) => {
    if (index === count) {
      result.push(current);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      recurse([...current, array[i]], index + 1);
    }
  };
  recurse([], 0);
  return result;
};

// prettier-ignore
const getArgsArraySlice = (slice: number) => (...args: unknown[]) => {
  if (isDOMPointInit(args[0])) {
    const init = args[0] as DOMPointInit;
    const mergedInit = { ...defaultVec4Init, ...init };
    const array = Object.values(mergedInit);
    return array.slice(0, slice);
  } else {
    return overwriteArrays(
      defaultVec4Array,
      flattenIterables(...(args as (number | Iterable<number>)[]))
    ).slice(0, slice);
  }
};

const defineAccessors = (vec: vecN, dimension: number) => {
  for (let i = 0; i < dimension; i++) {
    Object.defineProperty(vec, vectorProps[i], {
      get() {
        return this._array[i];
      },
      set(value: number) {
        this._array[i] = value;
      },
    });
  }
};

export { getArgsArraySlice, permutationsRepetitions, defineAccessors };
