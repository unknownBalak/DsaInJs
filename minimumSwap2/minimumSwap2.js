function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function minimumSwaps(arr) {
  let count = 0;
  let i = 0;

  //[7, 1, 3, 2, 4, 5, 6]
  while (i < arr.length) {
    const newPos = arr[i] - 1;
    if (i != newPos) {
      console.log(i);
      swap(arr, i, newPos);
      console.log(arr);
      count++;
    } else {
      i++;
    }
  }
  console.log("Hey, arr is here", arr);
  return count;
}

console.log(minimumSwaps([6, 1, 3, 2, 7, 5, 8, 4]));

// [6, 1, 3, 2, 7, 5, 8, 4]
// [5, 1, 3, 2, 7, 6, 8, 4]
// [7, 1, 3, 2, 5, 6, 8, 4]
// [8, 1, 3, 2, 5, 6, 7, 4]
// [4, 1, 3, 2, 5, 6, 7, 8]
// [2, 1, 3, 4, 5, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8]
