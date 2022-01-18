var roll = [2, 3, 1, 5, 7, 8, 4, 9];

var find = 10;
var isFound = false;

for (let i = 0; i < roll.length; i++) {
    if(roll[i]===find){
        console.log("Dtata found at index ", i);
        isFound = true;
    }
}
if(!isFound){
    console.log("Data is not found.");
}