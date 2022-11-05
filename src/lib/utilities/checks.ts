const isDOMPointInit = (value: unknown) => {
  return (
    typeof value === "object" &&
    value !== null &&
    !(typeof Reflect.get(value, Symbol.iterator) === "function")
  );
};

export { isDOMPointInit };
