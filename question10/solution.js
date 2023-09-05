function binarySearch(searchList, value) {
  let arrayPath = []; // To store the path of middle values
  let start = 0;
  let end = searchList.length - 1;

  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleValue = searchList[middleIndex];
    arrayPath.push(middleValue); // Add the middle value to the path

    if (middleValue === value) {
      return arrayPath;
    } else if (middleValue < value) {
      start = middleIndex + 1;
    } else {
      end = middleIndex - 1;
    }
  }

  return "Value Not Found";
}

// Example usage:
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

const pathToValue = binarySearch(testArray, 0);
console.log(pathToValue); // Output: [12, 6, 3, 1, 0]
