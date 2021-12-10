
// var i = 1;
// while(i <= 50) {
//     console.log("i = ", i);
//     i++
// }

var isRunning = true;

while(isRunning){
    var randomNubmer = Math.round(Math.random() * 10 + 1);
    if (randomNubmer === 5){
        console.log("You have got:", randomNubmer, "Winner Winner.");
        isRunning = false;
    }else{
        console.log("You have got:", randomNubmer);
    }
}