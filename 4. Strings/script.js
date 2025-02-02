// Srings
let str = "ApnaCollege";
console.log(str.length);
console.log(str[4]);

//Template Literals also called String Interpolation
let specialString = `This is template literal ${str} ${1+2+3}`; //Special String, through template literals we can write varible names and stirngs in same `` commas
console.log(specialString);

let str1 = "My name is Muhammad Talha. ";
let str2 = "I am doing GRADUATION now.";
let str3 = "  Apna College Javascript  ";
let str4 = "0123456";
let str5 = "Hello";
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str3.trim());  // removes starting and ending spaces
console.log(str4.slice(1,6));// str4.slicce(start,end), but the ending index is not included
console.log(str1.concat(str2));// joins str2 with str1
console.log(str5.replace("H","Y")); // replaces one string with another
console.log(str5.charAt(0));  //give us character on mentioned index, H in Hello,str.charAt(index).