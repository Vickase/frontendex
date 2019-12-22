const map = require("./map");

describe("map", () => {
  test("Should map correctly", () => {
    const inputArr = [1, 2, 3, 4, 5];
    const multiply = num => {
      return num * 2;
    };
    const expectedOutput = [2, 4, 6, 8, 10];
    expect(map(inputArr, multiply)).toEqual(expectedOutput);
  });
  test("Should return the same array", () => {
    const inputArr = [1, 2, 3, 4, 5];
    const id = a => {
      return a;
    };
    expect(map(inputArr, id)).toEqual(inputArr);
  });
  test("Should not mutate array", () => {
    const inputArr = [1, 2, 3, 4, 5];
    const multiply = num => {
      return num * 2;
    };
    const output = map(inputArr, multiply);
    const isSameArray = inputArr === output;
    expect(isSameArray).toEqual(false);
  });
});
