//linear search implementation
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){

        if(arr[i] === target){
            return `Found "${target}" at index ${i}`;
        }
    }
    return `"${target}" not found in the list`;
}

//list of fruits
const fruits=[
    "Apple",
    "Banana",
    "Cherry",
    "Mango",
    "Orange",
    "Guava"
];

//Searching fruits
console.log(linearSearch(fruits,"Banana"));
console.log(linearSearch(fruits,"Strawberry"));

