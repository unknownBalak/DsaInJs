//Write a function called maxSubarraySum, which is having two parameters
//an array of integers and a number. and that function will find the maximum sum of a subarray
//with the length of the number assed to the function.

//We will be solving below question using sliding window approach.
function maxSubarraySum(arr, length) {
  if (arr.length === 0) return null;
  let i = 0,
    tempSum = 0,
    maxSum = -Infinity;
  while (i < length) {
    tempSum += arr[i];
    i++;
  }
  console.log(tempSum);
  let j = length;
  while (j <= arr.length) {
    if (tempSum > maxSum) maxSum = tempSum;
    tempSum = tempSum + arr[j] - arr[j - length];
    j++;
  }
  return maxSum;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
