function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0,
        j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i].localeCompare(right[j]) < 0) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Example usage:
  const fruits = ["Banana", "Apple", "Mango", "Grapes", "Cherry"];
  const sortedFruits = mergeSort(fruits);
  console.log(sortedFruits); 
  