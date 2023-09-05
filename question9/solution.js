function mergeSort(array) {
  // Base case: If the array has 0 or 1 elements, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Helper function to merge two sorted arrays
  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements in the left and right arrays and merge them into the result
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Concatenate any remaining elements in the left and right arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }

  // Divide the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  // Recursively sort and merge the two halves
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
