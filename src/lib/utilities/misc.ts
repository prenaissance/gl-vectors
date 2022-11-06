function bindNew<C extends { new (...args: A): T }, A extends any[], T>(
  Class: C & { new (...args: A): T }
): C & ((...args: A) => T) {
  function _Class(...args: A[]) {
    return new (Function.prototype.bind.apply(Class, [null, ...args] as any))();
  }
  _Class.prototype = Class.prototype;
  Object.defineProperty(_Class, "name", {
    value: Class.name,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  _Class.prototype[Symbol.toStringTag] = Class.name;
  return _Class as any as C & ((...args: A) => T);
}

function flattenIterables(...args: (number | Iterable<number>)[]): number[] {
  const result: number[] = [];
  for (const arg of args) {
    if (typeof arg === "number") {
      result.push(arg);
    } else {
      const iterable = arg as Iterable<number>;
      result.push(...iterable);
    }
  }
  return result;
}

export { bindNew, flattenIterables };
