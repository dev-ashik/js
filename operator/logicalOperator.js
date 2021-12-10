// &&, ||, !

/*
A && B 
true && true = true
true && false = false
false && true = false
false && false = false
*/
var number1 = 10;
var number2 = 10;
if (number1 === 10 && number2 === 10){
    console.log("Number 1 and Number 2 = 10");
}


/*
A || B 
true || true = true
true || false = true
false || true = ture
false || false = false
*/
var number3 = 10;
var number4 = 5;
if (number1 === 5 || number2 === 5){
    console.log("Number 1 or Number 2 = 5");
}


    // !, !== 
var number6 = 40;
if (number6 !== 50){
    console.log("number6 is not 50");
}

var number7 = 90;
if (!(number7 > 50)){
    console.log("number6 is less than 50");
}

if (!!(number7 > 50)){
    console.log("number6 is geter than 50");
}

