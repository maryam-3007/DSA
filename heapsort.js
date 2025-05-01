                            //Pseudo Code for heap sort algorithm

//HEAPSORT(arr):
//Build_max_heap(arr)
//for i = arr.length-1 down to 1;
//Swap arr[0] with arr[i]
//heapSize = heapSize-1
//Max_Heapify(arr,0,heapSize)

//Build_max_heao(arr):
//heapSize=arr.length
//for i=floor(heapSize/2)-1
//down to 0:

//Max_Heapify(arr,i,heapSize):
//left=2*i+1
//right=2*i+2
//largest=i

//if left<heapSize and arr[left]>arr[largest]:
//largest=left
//if right<heapSize and arr[right]>arr[largest]:
//largest=right
//if largest!=i:
//Swap arr[i] with arr[largest]
//Max_Heapify(arr,largest,heapSize)


                                //Implementation:
function heapSort(arr){
    buildMaxHeap(arr);
    for(let i=arr.length-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];

        maxHeapify(arr,0,i);
    }
    return arr;
}

function buildMaxHeap(arr){
    let heapSize=arr.length;
    for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
        maxHeapify(arr,i,heapSize);
    }
}

function maxHeapify(arr,i,heapSize){
    let left=2*i+1;
    let right=2*i+2;
    let largest=i;

    if(left<heapSize && arr[left].localeCompare(arr[largest])>0){
        largest=left;
    }

    if(right<heapSize && arr[right].localeCompare(arr[largest])>0){
        largest=right;
    }

    if(largest !==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        maxHeapify(arr,largest,heapSize);
    }
}

let fruits=[
    "banana",
    "watermelon",
    "apple",
    "guava",
    "cherry",
    "orange"
];
console.log("Sorted FruitsArray:" , heapSort(fruits));

