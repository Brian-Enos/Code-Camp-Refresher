
let myString = "Brian 123 Enos!@#$%^&*()";
let reversedString = myString.split(/(\b|\W+)/).reverse().join("");
console.log(reversedString);