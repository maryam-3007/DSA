function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].localeCompare(pivot) < 0) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  
  const fruits = ["Banana", "Apple", "Mango", "Grapes", "Cherry"];
  const sortedFruits = quickSort(fruits);
  console.log(sortedFruits);
  