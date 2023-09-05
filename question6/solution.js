function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap using destructuring assignment
    }
  }

  return array;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
