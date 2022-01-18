var arr = [1, 2, 3, 4, 5, 6];

// add into last
arr.push(8);
console.log("push 8: ", arr);

// remove from last
arr.pop()
console.log("after pop: ", arr);


// add at first
arr.unshift(10);
console.log("unshift 10: ", arr);
// remove first element
arr.shift();
console.log("shift: ", arr);

//   splice(index, deleteCount, addData);
arr.splice(3, 0, 9);
console.log("splice: ", arr);
arr.splice(3, 0, 30, 40);
console.log("splice: ", arr);


