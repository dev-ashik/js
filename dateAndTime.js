var date = new Date()
console.log(date); // 2021-12-09T04:32:15.241Z

console.log(date.toDateString()); // Thu Dec 09 2021

console.log(date.toTimeString()); // 12:35:04 GMT+0800 (China Standard Time)

console.log(date.toLocaleString()); // 12/9/2021, 12:35:04 PM

console.log(date.getFullYear()); // 2021
console.log(date.getMonth()); // 11  NB:(dec) count start form 0
console.log(date.getDate()); // 9
console.log(date.getHours()); // 12
console.log(date.getMinutes()); // 38
console.log(date.getSeconds()); // 49