const isDOMPointInit = (value: unknown) => {
  return (
    typeof value === "object" &&
    value !== null &&
    !Object.prototype.hasOwnProperty.call(value, Symbol.iterator)
  );
};

export { isDOMPointInit };
