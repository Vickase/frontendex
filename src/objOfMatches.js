const objOfMatches = (arr1, arr2, callbackF) => {
  const output = arr1.reduce((acc, a, index) => {
    const res = callbackF(a);
    if (res === arr2[index]) {
      acc[a] = arr2[index];
    }
    return acc;
  }, {});
  return output;
};
module.exports = objOfMatches;
