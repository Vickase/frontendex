// [[1,2,3], [3, 4, 5], [6, 7, 8, 3]]
const intersection = (...arrays) => {
  const output = arrays.reduce((acc, arr) => {
    // acc, arr       , arrays
    // [] , [1, 2, 3]
    for (let i = 0; arr.length > i; i++) {
      const isInEvery = arrays.every(e => {
        return e.includes(arr[i]);
      });
      if (isInEvery && !acc.includes(arr[i])) {
          acc.push(arr[i]);
      }
    }
    return acc;
  }, []);
  return output;
};

module.exports = intersection;

