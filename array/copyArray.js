var arr = [1, 2, 3, 4, 5, 6, 7];
var arr2 = arr;

arr2[0] = 100;
console.log(arr);  //[ 100, 2, 3, 4, 5, 6, 7 ]
console.log(arr2); //[ 100, 2, 3, 4, 5, 6, 7 ]

var arr3 = Array.from(arr);
arr[1] = 200;
console.log(arr); //[ 100, 200, 3, 4, 5, 6, 7 ]
console.log(arr3);  //[ 100, 2, 3, 4, 5, 6, 7 ]