import { isDOMPointInit } from "./checks";
import { defaultVec4Array, defaultVec4Init } from "./defaults";
import { overwriteArrays } from "./merge";
import { flattenIterables } from "./misc";

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

export { getArgsArraySlice };
