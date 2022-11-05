function shallowEquals(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

function overwriteArrays<T>(a: T[], b: T[]): T[] {
  const result = [...a];
  b.forEach((value, index) => {
    result[index] = value;
  });
  return result;
}

export { shallowEquals, overwriteArrays };
