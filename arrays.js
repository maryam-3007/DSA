                    //implemtation no:1(One Dimensional Array)
let oneDarray=[
    'banana','apple','watermelon','orange'
]
console.log(oneDarray);


 oneDarray.push('sweet lime');
 console.log(oneDarray);


 oneDarray.pop('sweet lime');
 console.log(oneDarray);


 for(let i=0;i<oneDarray.length;i++){
     console.log(`OneDarray ${i+1} : ${oneDarray[i]}`);
 }

                  //Implementation no:2(Two Dimensional array)
let twoDarray=[
    [3,4,5,6],[7,8,9,10]
];
console.log(twoDarray);


twoDarray.push([11,12,13,14]);
console.log(twoDarray);

twoDarray.pop([11,12,13,14])
 console.log(twoDarray);

for(let i=0;i<twoDarray.length;i++){
    for(let j=0;j<twoDarray[i].length;j++){
    console.log(`Element at position [${i}][${j}] is: ${twoDarray[i][j]}`);
}
}


                    //Implementation no:3(MultiDimensional Array)
let multiDarray=[
    [
        [1,2,3],[4,5,6]
    ],
    [
        [7,8,9],[10,11,12]
    ],
];
console.log(multiDarray);

multiDarray.push([[5,6,7],[8,9,2]]);
console.log(multiDarray);


multiDarray.pop();
console.log(multiDarray);


for(let i=0;i<multiDarray.length;i++){
    for(let j=0;j<multiDarray[i].length;j++){
        for(let k=0;k<multiDarray[i][j].length;k++){
    console.log(`Element at position [${i}][${j}][${k}] is: ${multiDarray[i][j][k]}`);
}
}
}
