
Date(); // Creates a Date instance conatining the current time(up to milliseconds) and date

/*
Date(m); creates a Date instance conatining the time and corresponding to the Epoch time(): 1st January 1970 UTC plus m milliseconds
*/

//example

let myDate = new Date(749019369738);

console.log(myDate);
let currentTimeStamp = new Date().getTime();
console.log(currentTimeStamp);

let todayDate = new Date(2023, 5, 8, 10, 15, 45, 300);
console.log(todayDate);