function bubbleSort(array) {
  // Flag to check if any swaps were made in the last pass
  let swapped;

  do {
    swapped = false;

    // Iterate through the array, comparing adjacent elements
    for (let i = 0; i < array.length - 1; i++) {
      // If the current element is greater than the next element, swap them
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap using destructuring assignment
        swapped = true; // Set the flag to true
      }
    }
  } while (swapped); // Continue until no swaps are made in a pass

  return array;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
