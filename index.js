// Task 1 
let userName = "Elzero";

//return the  first letter in 6 ways 

console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.split("", 1).toString().toLowerCase());
console.log(userName[0].repeat(3).toLowerCase())


//Task 2 
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.endsWith(letterO.toLowerCase()));