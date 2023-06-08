
//console.time() can be used to check/measure how long your code takes to execute

/*
- Calling console.time([label]) starts a new timer
- console.timeEnd([label]) is called and the time elapsed since the original .time()  call is calculated and logged
- Eaxmple below
*/

console.time("Response in: ");

alert("Click to continuew");
console.timeEnd("Response in: ")