//Q: Given an array I have to find array of first two number
//which whose sum is equal to zero.
function findPair(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[right] + arr[left] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[right] - arr[left] > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(findPair([-3, -2, -1, 0, 3, 4, 5]));
