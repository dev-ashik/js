var str = "Hello world";

var strLength = 0;

while(true) {
    if(str.charAt(strLength) === ''){
        break;
    }else{
        strLength++;
    }
}

console.log("lenght:", strLength);