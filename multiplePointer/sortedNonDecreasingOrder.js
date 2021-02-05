var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  const firstPositiveIndex = getFirstPositiveIndex(nums);

  let left = firstPositiveIndex === -1 ? nums.length - 1 : firstPositiveIndex - 1;
  let right = firstPositiveIndex === -1 ? nums.length : firstPositiveIndex;

  for (let i = 0; i < result.length; i++) {
    if (left < 0) {
      result[i] = nums[right] * nums[right];
      right++;
      continue;
    }
    const leftValue = nums[left] * nums[left];
    const rightValue = nums[right] * nums[right];
    console.log(leftValue, rightValue);
    if (leftValue > rightValue) {
      result[i] = rightValue;
      right++;
    } else {
      result[i] = leftValue;
      left--;
    }
  }

  return result;
};

const getFirstPositiveIndex = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return i;
  }

  return -1;
};

console.log(sortedSquares([-4, -3, -2, -1, 0]));
