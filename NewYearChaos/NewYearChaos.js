// Complete the minimumBribes function below.
function minimumBribes(q) {
  //   console.log(typeof q);
  //  console.log(q[2])
  //  console.log(q.length)
  let bribeCount = [];
  let high = 0;

  for (let i = 0; i < q.length; i++) {
    let val = q[i];
    // console.log('hii value here',val)
    bribeCount[val] = 0;
    high = Math.max(val, high); // update the highest value encountered
    // console.log('hii high here',high)
    if (val < high) {
      // if current value < high value, increment value for all bribeCount indices > val
      for (let j = val + 1; j < bribeCount.length; j++) {
        bribeCount[j]++;
        // console.log('bribecount in for loop',bribeCount)
        if (bribeCount[j] > 2) {
          console.log("Too chaotic");
          return;
        }
      }
    }
  }
  // console.log(bribeCount)
  const sum = bribeCount.reduce((a, b) => a + b, 0); // sum
  console.log(sum);
}

minimumBribes([2, 1, 5, 3, 4]);
