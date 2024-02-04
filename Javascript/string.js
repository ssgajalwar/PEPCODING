let str = "Hello World!";
let str2 = "Nice to meet you";

console.log("length() :- Provides length of the string ");
console.log(str.length)

console.log("charAt(index) :- Provides value at specified index in string");
console.log(str.charAt(0));

console.log("charCodeAt(index) :- Provides ASCII value at specified index in string");
console.log(str.charCodeAt(0));

console.log("concat(',',arr) :- concate's two arrays");
console.log(str.concat(', ',str2));

console.log("indexOf(string) :- finds index of the string given in the method");
console.log(str.indexOf('!'));

console.log("substring(start,end) :- creates a new string from the old string with given range");
console.log(str.substring(0,5));

console.log("slice(start,end) :- deletes all the element in the range");
console.log(str.slice(5,7));

console.log("toUpperCase() and toLowerCase()");
console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log("replace('search','value') :- replaces search with value");
console.log(str.replace('Hello','Hii'));

console.log("trim() :- Removes all the spaces before and after the string");

console.log("split(search) : splits the atring value in array on specified search");