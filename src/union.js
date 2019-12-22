const union = (...arrays) => {
  const output = arrays.reduce((acc, arr) => {
    for (n of arr) {
      if (!acc.includes(n)) {
        acc.push(n);
      }
    }
    return acc;
  }, []);
  return output;
};
module.exports=union;