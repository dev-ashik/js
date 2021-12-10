// break

while(true){
    var randomNubmer = Math.round(Math.random() * 10 + 1);
    if (randomNubmer === 5){
        console.log("You have got:", randomNubmer, "Winner Winner.");
        break
    }else{
        console.log("You have got:", randomNubmer);
    }
}


for (var i=1; i<10; i++){
    if(i%5 === 0){
        break
    }else {
        console.log(i);
    }
}