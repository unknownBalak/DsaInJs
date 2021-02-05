// Q. Write a function called minSubArrayLen which accepts two parameters-
//an array of positive integer and a positive integer.
//This function shoulld return the minimal length of contiguous subarray
//of which the sum is greater than or equal to the integer passed to the function.
//If there isn't one, return 0 instead. [2,3,1,2,4,3]
// function minSubArrayLen(arr, num) {
//   let left = 0,
//     right = 1,
//     minLen = +Infinity,
//     sum = 0,
//     tempArr = 0;
//   while (left < arr.length) {
//     if (arr[left] > num) return left;
//     if (left < right) {
//       tempArr = arr.slice(left, right + 1);
//       sum = tempArr.reduce((sum, num) => sum + num);
//     }
//     console.log(sum);
//     if (sum > num) {
//       left++;
//     }
//     if (sum < num) {
//       right++;
//     }
//     if (sum === num && tempArr.length <= minLen) {
//       minLen = tempArr.length;
//       left++;
//     }
//   }
//   return minLen != +Infinity ? minLen : 0;
// }

// console.log("We got output", minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//     // move the window to ri ght
//     if (total < sum && end < nums.length) {
//       total += nums[end];
//       end++;
//     }
//     // if current window adds up to at least the sum given then
//     // we can shrink the window
//     else if (total >= sum) {
//       minLen = Math.min(minLen, end - start);
//       total -= nums[start];
//       start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }
const minSubArrayLen = function (arr, num) {
  let left = 0,
    right = 0,
    minLen = +Infinity,
    sum = 0;
  while (left < arr.length) {
    if (sum < num && right < arr.length) {
      sum += arr[right];
      right++;
    } else if (sum >= num) {
      minLen = Math.min(minLen, right - left);
      sum -= arr[left];
      left++;
    } else {
      break;
    }
  }
  return minLen != +Infinity ? minLen : 0;
};
console.log("We got output", minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(Math.max(4, undefined));
