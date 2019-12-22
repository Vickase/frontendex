const map = (array, callback) => {
  const newArray = [];
  for (let item of array) {
    newArray.push(callback(item));
  }
  return newArray;
};

module.exports = map;
