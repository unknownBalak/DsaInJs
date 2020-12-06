function swap(arr, i, j) {
  //   console.log("called to array!");
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function minimumSwaps(arr) {
  //  console.log(arr)
  let count = 0;
  let i = 0;

  //[7, 1, 3, 2, 4, 5, 6]
  while (i < arr.length) {
    const newPos = arr[i] - 1;
    if (i != newPos) {
      console.log(i);
      swap(arr, i, newPos);
      count++;
    } else {
      i++;
    }
  }
  console.log("Hey, arr is here", arr);
  return count;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
