const union = require("./union");

describe("union", () => {
  test("should return correct output", () => {
    const input = [
      [2, 15, 3, 6],
      [15, 3, 98, 2],
      [2, 102, 3, 567]
    ];

    const expectedOutput = [2, 15,3,6,98,102,567];

    expect(union(...input)).toEqual(expectedOutput);
  });
});
