/*
- Number.isNaN() function has been implemented primarily to avoid the problem of window.isNaN() of forcefully converting the parameter to a number.
- Number.isNaN(), indeed, doesn't try to convert the value to a number before testing.
- This also means that only values of the type number, that ar also NaN, return true (which basically means only Number.isNaN(NaN)).
*/

// The one and only
Number.isNaN(NaN); // true
// Numbers
Number.isNaN(1); // false
Number.isNaN(-2e-4); // false
Number.isNaN(Infinity); // false
// Values not of type number
Number.isNaN(true); // false
Number.isNaN(false); // false
Number.isNaN(null); // false
Number.isNaN(""); // false
Number.isNaN(" "); // false
Number.isNaN("45.3"); // false
Number.isNaN("1.2e3"); // false
Number.isNaN("Infinity"); // false
Number.isNaN(new Date); // false
Number.isNaN("10$"); // false
Number.isNaN("hello"); // false
Number.isNaN(undefined); // false
Number.isNaN(); // false
Number.isNaN(function(){}); // false
Number.isNaN({}); // false
Number.isNaN([]); // false
Number.isNaN([1]); // false
Number.isNaN([1, 2]); // false
Number.isNaN([true]); // false