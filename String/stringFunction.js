var firstName = "Md Ashik ";
var lastName = "Mahmud";

//length
var strLength = firstName.length    //error
console.log("strLength:", strLength); 

// concat
var fulName = firstName.concat(lastName);
console.log("fulName:", fulName);    // fulName: Md Ashik Mahmud

//substr
var name = firstName.substr(3, 5);   // bubstr(starting, length)
console.log("name:", name);          // name: Ashik

//charAt
var position = firstName.charAt(1); 
console.log("position:", position);  // position: d

//startsWith, endsWith
var start = lastName.startsWith("M");
console.log("\nstartsWith:", start);   // true
var end = lastName.endsWith("d");
console.log("endsWith:", end);     // true



// case change toUpperCase, toLowerCase
var upperCase = firstName.toUpperCase();
console.log("\nupper Case:", upperCase);  // MD ASHIK
var lowerCase = firstName.toLowerCase();
console.log("upper Case:", lowerCase);  // md ashik


// trim(), space remover 
console.log("\n     Hello world      ");       //     Hello world
console.log("     Hello world      ".trim());  //Hello world

// split
console.log(firstName.split(' ')); //[ 'Md', 'Ashik', '' ]