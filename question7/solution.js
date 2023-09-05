function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let currentElement = array[i];
    let j = i - 1;

    // Move elements of the sorted part of the array to the right until
    // you find the correct position for the current element
    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }

    // Insert the current element into its correct position in the sorted part
    array[j + 1] = currentElement;
  }

  return array;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
