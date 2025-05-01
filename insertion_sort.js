                 //Insertion Sort Implementation
function insertionSort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
    
        while(j >=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
    return arr;
}

let fruits=[
    "banana",
    "apple",
    "guava",
    "watermelon",
    "strawberry",
    "cherry"
]
console.log("Sorted Fruits Array:",insertionSort(fruits));
