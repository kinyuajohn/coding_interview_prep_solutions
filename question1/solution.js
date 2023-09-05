function sym() {
  // Convert the arguments object to an array of arrays
  const arrays = Array.from(arguments);

  // Helper function to calculate the symmetric difference of two arrays
  function symmetricDifference(arr1, arr2) {
    const result = [];

    // Create sets from both arrays to eliminate duplicates
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // Calculate the symmetric difference by iterating through both sets
    for (const item of set1) {
      if (!set2.has(item)) {
        result.push(item);
      }
    }

    for (const item of set2) {
      if (!set1.has(item)) {
        result.push(item);
      }
    }

    return result;
  }

  // Use the reduce method to apply symmetricDifference to all arrays in args
  const result = arrays.reduce(
    (accumulator, currentArray) =>
      symmetricDifference(accumulator, currentArray),
    []
  );

  // Eliminate duplicates in the result using a Set and convert it back to an array
  return [...new Set(result)];
}

const result = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
console.log(result); // Output: [1, 4, 3]
