function selectionSortRecursive(arr, start = 0) {
    let n = arr.length;

    if (start >= n - 1) {
        return arr;
    }

    let minIndex = start;

    for (let j = start + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    if (minIndex !== start) {
        [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];
    }

    return selectionSortRecursive(arr, start + 1);
}

let fruits=[
    "apple",
    "banana",
    "watermelon",
    "orange",
    "cherry"
];
console.log("Recursive sorted array:",selectionSortRecursive(fruits));

