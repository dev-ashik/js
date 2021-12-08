// boolean (true, false)
var marriedA = false;
var marriedB = true;
console.log(marriedA);
console.log(marriedB);

var marriedC = Boolean(true);
var marriedD = Boolean(false);
console.log(marriedC);
console.log(marriedD);



// false values
// '', "", 0, null, undefined, NaN
var falseValue1 = '';
console.log("\n''", Boolean(falseValue1))

var falseValue2 = "";
console.log('""', Boolean(falseValue2))

var falseValue3 = 0;
console.log("0",Boolean(falseValue3))

var falseValue4 = null;
console.log("null",Boolean(falseValue4))

var falseValue5 = undefined;
console.log("undefined", Boolean(falseValue5))

var falseValue6 = NaN;
console.log("NaN", Boolean(falseValue6))