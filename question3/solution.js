function permAlone(str) {
  // Helper function to swap two characters in a string
  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  // Helper function to check if a permutation has repeated consecutive letters
  function hasRepeats(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        return true;
      }
    }
    return false;
  }

  // Function to generate permutations and count those without consecutive repeats
  function generatePermutations(arr, n) {
    if (n === 1) {
      if (!hasRepeats(arr)) {
        count++;
      }
    } else {
      for (let i = 0; i < n - 1; i++) {
        generatePermutations(arr, n - 1);
        if (n % 2 === 0) {
          swap(arr, i, n - 1);
        } else {
          swap(arr, 0, n - 1);
        }
      }
      generatePermutations(arr, n - 1);
    }
  }

  // Convert the input string to an array for easier manipulation
  const strArray = str.split("");
  let count = 0;

  generatePermutations(strArray, strArray.length);

  return count;
}

console.log(permAlone("aab")); // Output: 2
