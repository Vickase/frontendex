const objOfMatches = require("./objOfMatches");

describe("objOfMatches", () => {
  test("Should return an object correctly", () => {
    const input1 = ["hi", "howdy", "bye", "later", "hello"];
    const input2 = ["HI", "Howdy", "BYE", "LATER", "hello"];
    const fnCallback = str => {
      return str.toUpperCase();
    };
    const expectedOutput={ hi: 'HI', bye: 'BYE', later: 'LATER' };
    expect(objOfMatches(input1,input2,fnCallback)).toEqual(expectedOutput);
  })
});
