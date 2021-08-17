// The frequency of an element is the number of times it occurs in an
//array. You are given an integer array "nums" and an integer "k".
// In one operation, you can choose an index of "nums" and increment the element
//at that index by 1.
//Return the maximum possible frequency of an elemnt of an element after performing at most k operation.

//Input: nums = [1,2,4], k = 5
// Output: 3
// Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
// 4 has a frequency of 3.

//Constraints:
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// 1 <= k <= 105

// I tried this approach
// var maxFrequency = function(nums, k) {
// nums = nums.sort((b,a) => a-b);
//    let p=0,q=0,freq =0, count=0,more = k;
//    while(p<nums.length || q< nums.length){
//
// if(more>=(nums[p]-nums[q]) && q < nums.length){
// more -=nums[p]-nums[q];
// q++;

// count++;
// if(count>freq){
// freq = count;
// }
// }else{
// more = k;
// p++;
// q=p;
// count=0;
// }

//    }
//    return freq;
//    };

//SomeTime It game time limit exceeds and sometime output limit excceds.

//We know a trick that. If we want to increment k numbers such that all becomes x. then we have a operation.
//Ops = k*x- sum.
// sum = sum of all number less than x;

//here is the code which did in 260ms 100% faster than rest JS submission.

var maxFrequency = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
    freq = 0,
    sum = 0,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (nums[right] * (right - left + 1) - sum > k) {
      sum -= nums[left];
      left++;
    }
    freq = Math.max(freq, right - left + 1);
  }
  return freq;
};
