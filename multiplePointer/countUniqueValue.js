//Q. Implement a function called countUniqueValues, which
//accepts a sorted array, and counts the unique values
//in the array. There can be negative numbers in the array,
//but it will always be sorted.

// function countUniqueValues(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     obj[key] ? obj[key]++ : (obj[key] = 1);
//     console.log(obj);
//   }
//   console.log(obj);
//   console.log(Object.keys(obj).length);
// }

// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);

//Above method will time Complexity: O(n+r);

//But out We can have better approach to solve this problem
//And that one is O(n)

//Procedure
//Take two pointer, let say i & j,
// and traverse array with the value j
//if increase pointer i by 1 if i is having
//a[i] != a[j]
//and then store value of a[j] in a[i] after increasing i+1;

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let j = 1,
    i = 0;
  //[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
