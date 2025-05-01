// //Binary Search for a sorted array implementation(iterative approach)
const readline = require('readline');

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

// Sorted array (alphabetical order)
const sortedArray = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Strawberry",
    "Watermelon"
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// User input
rl.question("Enter a fruit name: ", function(input){
    const targetFruit = input.trim();

    if(!targetFruit){
        console.log("Invalid input. Please enter a fruit name.");
        rl.close();
        return;
    }

    const result = binarySearch(sortedArray, targetFruit);
    console.log(result !== -1 ? `Fruit found at index ${result} `: "Fruit not found in the list.");

    rl.close();
});
