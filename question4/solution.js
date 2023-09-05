function pairwise(arr, arg) {
  let pairIndices = []; // Store the indices of elements that have been used in pairs
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[i] + arr[j] === arg &&
        !pairIndices.includes(i) &&
        !pairIndices.includes(j)
      ) {
        // Check if the pair's sum matches the target and the indices are not already used
        sum += i + j;
        pairIndices.push(i, j); // Mark the indices as used
      }
    }
  }

  return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // Output: 11
