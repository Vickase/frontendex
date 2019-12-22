const reduce = require("./reduce");

describe("reduce", () => {
  test("Should return the greater number", () => {
    const inputArr = [2, 14, 30, 20];
    const callFn = (acc, num) => {
      return acc < num ? num : acc;
    };
    const valorInicial = 0;
    const expectedOutput = 30;
    expect(reduce(inputArr, callFn, valorInicial)).toEqual(expectedOutput);
  });
});
