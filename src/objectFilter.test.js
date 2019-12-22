const objectFilter = require("./objectFilter");

describe("should return an object correclty", () => {
  test("should return a newObject", () => {
    const obj1 = {
      London: "LONDON",
      LA: "Los Angeles",
      Paris: "PARIS"
    };
    const callback = city => city.toUpperCase();

    const expectedOutput = { London: "LONDON", Paris: "PARIS" };

    expect(objectFilter(obj1, callback)).toEqual(expectedOutput);
  });
});
