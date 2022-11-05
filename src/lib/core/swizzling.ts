import vecN from "./vecN";

const vectorProps = ["x", "y", "z", "w"];

const combinationsRepetitions = <T>(array: T[], count: number) => {
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

const defineSwizzlingN = <ReturnT>(
  vec: vecN,
  dimension: number,
  argsNumber: number,
  returnClass: { new (...args: (number | Iterable<number>)[]): ReturnT }
) => {
  const swizzles = combinationsRepetitions(
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

export { defineAccessors, defineSwizzlingN, combinationsRepetitions };
