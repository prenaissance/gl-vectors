import { overwriteArrays } from "../merge";

describe("utilities -> overwriteArrays", () => {
  const overwriteArraysTable = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [4, 5, 6],
    ],
    [
      [1, 2, 3],
      [4, 5],
      [4, 5, 3],
    ],
    [[1, 2, 3], [4], [4, 2, 3]],
    [[1, 2, 3], [], [1, 2, 3]],
    [[1], [4, 5, 6], [4, 5, 6]],
    [
      [0, 0, 0, 1],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
  ];

  it.each(overwriteArraysTable)("should overwrite arrays", (a, b, expected) => {
    expect(overwriteArrays(a, b)).toEqual(expected);
  });
});
