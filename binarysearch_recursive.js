//Binary Search for a sorted array implementation(recursive approach)
const readline=require('readline');

function binarySearchRecursive(arr, target,left,right){
    if(left>right){
        return -1;
    }

        let mid=Math.floor((left+right)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            return binarySearchRecursive(arr,target,left,mid-1)
    }else{
        return binarySearchRecursive(arr,target,mid+1,right);
    }

}

function search(arr,target){
    return binarySearchRecursive(arr,target,0,arr.length-1);
}
//Sorted array for fruits
const sortedArray = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Strawberry",
    "Watermelon"
]

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//User Input
rl.question("Enter a fruit name:",function(input){
const targetFruit=input.trim();

   if(!targetFruit){
    console.log("Invalid input.Please enter fruit name");
    rl.close();
    return;
   }

   const formattedInput=targetFruit.charAt(0).toUpperCase()+targetFruit.slice(1).toLowerCase();

    const result=search(sortedArray,formattedInput);
    console.log(result !== -1? `Fruit found at index ${result}`:"Fruit not found in the list.");

    rl.close();
})
