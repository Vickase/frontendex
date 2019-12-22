const forEach = require("./forEach");

describe("forEach", () => {
  test("Should invoke callback on each element", () => {
    const fn = jest.fn();
    const arr = [1, 2, 3];
    forEach(arr, fn);
    expect(fn).toHaveBeenCalledTimes(arr.length);
  });
});
