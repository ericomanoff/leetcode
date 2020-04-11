const myAtoi = (str) => {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  const res = parseInt(str);
  if (isNaN(res)) return 0;
  if (res > max) {
    return max;
  }
  if (res < min) {
    return min;
  }
  return res;
};

module.exports = { myAtoi };
