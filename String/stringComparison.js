var a = 'abc';
var b = 'abc';
var c = "def";

console.log("a === b", a === b); // true
console.log("a === c", a === c); // false


console.log("\n'a' > 'b'",'a' > 'b');  // false 
console.log("'a' < 'b'", 'a' < 'b'); // true

console.log("\n'a' < 'z'", 'a' < 'z'); // true
console.log("'A' < 'Z'", 'A' < 'Z'); // true

console.log("\n'a' < 'A'", 'Z' < 'a'); // true
console.log("'a' < 'A'", 'a' < 'A'); // false
console.log("'z' < 'Z'", 'z' < 'Z'); // false

