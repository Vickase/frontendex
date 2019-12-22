const objectFilter = (obj, callback) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === callback(key)) {
      newObj[key] = value;
    }
  }
  return newObj;
};
module.exports = objectFilter;
