var mark = 80;

            //  condition ? true : false
var result = mark > 33 ? "pass" : "Fail";
console.log(result);


var myName = "";
var saveName = myName || "Md Ashik Mahmud";
console.log("Name:", saveName); // fi myName = "" result will be "Md Ashik Mahmud" 



var value = true;
value && console.log("Value is true");