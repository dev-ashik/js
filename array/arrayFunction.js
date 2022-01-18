var arr = [1, 2, 3, 5];

console.log(arr);

console.log(arr.join(' ')); //1 2 3 5
console.log(arr.join(',')); //1,2,3,5

var arr2 = [7, 8, 9, 10];
arr2.fill(0)
console.log(arr2);  //[ 0, 0, 0, 0 ]


var arr3 = arr.concat(arr2);
console.log(arr3);  //[ 1, 2, 3, 5, 0, 0, 0, 0 ]