const multiMap = (arrValue, arrCallbacks) => {
  const output = arrValue.reduce((acc, av) => {
    acc[av] = arrCallbacks.map(fn => {
      return fn(av);
    });
    return acc;
  }, {});
  return output;
};
module.exports = multiMap;
