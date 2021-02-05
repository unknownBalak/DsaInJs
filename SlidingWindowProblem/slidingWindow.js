// Q.  Given an arry of size n, I have to return sum of
//m consecutive digits whose sum is more than another sum
// which is following the same.

//findMaxSum([1,2,5,2,8,1,5],4)
function findMaxSum(arr, k) {
  let i = 0,
    tempSum = 0,
    max = 0;
  for (i = 0; i < k; i++) {
    tempSum += arr[i];
  }

  console.log("Temp sum is ", tempSum, typeof i);
  for (let j = k; j < arr.length; j++) {
    max = Math.max(tempSum, max);
    tempSum = tempSum + arr[j] - arr[j - k];
    console.log(max, tempSum);
  }
  return max;
}
console.log(findMaxSum([1, 2, 5, 2, 8, 1, 5], 4));
