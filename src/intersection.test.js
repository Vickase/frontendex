const intersection = require("./intersection");

describe("intersection", () => {
  test("should return correct output", () => {
    const input = [
      [2, 15, 3, 6],
      [15, 3, 98, 2],
      [2, 102, 3, 567]
    ];

    const expectedOutput = [2, 3];

    expect(intersection(...input)).toEqual(expectedOutput);
  });

  test("should return correct output with diffrent input", () => {
    const input = [
      [1, 2 ,3],
      [2, 123123 ,3],
      [5, 232 ,3],
    ];

    const expectedOutput = [3];

    expect(intersection(...input)).toEqual(expectedOutput);
  });

  test("Should return an empty array on no input", () => {
    expect(intersection()).toEqual([]);
  });
});
