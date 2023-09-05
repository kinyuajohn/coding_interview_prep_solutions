function updateInventory(arr1, arr2) {
  // Convert the existing inventory (arr1) to an object for easier updating
  const inventoryObj = {};
  for (const [quantity, item] of arr1) {
    inventoryObj[item] = quantity;
  }

  // Update the existing inventory with items from the new inventory (arr2)
  for (const [quantity, item] of arr2) {
    if (inventoryObj.hasOwnProperty(item)) {
      // If the item already exists in the inventory, update its quantity
      inventoryObj[item] += quantity;
    } else {
      // If the item doesn't exist, add it to the inventory
      inventoryObj[item] = quantity;
    }
  }

  // Convert the updated inventory object back to an array and sort it alphabetically
  const updatedInventory = [];
  for (const item in inventoryObj) {
    updatedInventory.push([inventoryObj[item], item]);
  }

  updatedInventory.sort((a, b) => a[1].localeCompare(b[1])); // Sort alphabetically by item name

  return updatedInventory;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

const updatedInventory = updateInventory(curInv, newInv);
console.log(updatedInventory);
