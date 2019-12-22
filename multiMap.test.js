const multiMap = require("./multiMap");

describe("multiMap", () => {
  test("should return an object correctly", () => {
    const input1 = [1, 2];
    const addOne = num => num + 1;
    const substractOne = num => num - 1;
    const input2 = [addOne, substractOne];
    const expectedOuput = { 1: [2, 0], 2: [3, 1] };

    expect(multiMap(input1, input2)).toEqual(expectedOuput);
  });
  test("shoudl return an object correctly", () => {
    const input1 = ["catfood", "glue", "beer"];
    const function1 = str => {
      return str.toUpperCase();
    };
    const function2 = str => {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    };
    const function3 = str => {
      return str + str;
    };
    const input2 = [function1, function2, function3];

    const expectedOuput = {
      catfood: ["CATFOOD", "Catfood", "catfoodcatfood"],
      glue: ["GLUE", "Glue", "glueglue"],
      beer: ["BEER", "Beer", "beerbeer"]
    };
    expect(multiMap(input1,input2)).toEqual(expectedOuput);
  });
});
