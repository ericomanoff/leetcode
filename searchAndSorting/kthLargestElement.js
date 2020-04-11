/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  const sortedArray = nums.sort(numSort);
  console.log(sortedArray);
  return sortedArray[k - 1];
};

const numSort = (a, b) => {
  return b - a;
};

module.exports = { findKthLargest };
