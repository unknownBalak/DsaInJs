//Q. Given a sorted array have you will be given a number
//  find the index of that number if present else return -1.
//search([1,2,3,4,5,6],4)

//use divide and conqure approach
function search(arr, num) {
  let min = 0,
    max = arr.length;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(middle);
    if (arr[middle] > num) max = middle + 1;
    else if (arr[middle] < num) min = middle - 1;
    else return middle + 1;
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], 11));
