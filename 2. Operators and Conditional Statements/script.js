//this code that prints hello world
console.log("Hello World!");

//Arithematic Operators
let a = 5;
let b = 2;

console.log("a =", a, "b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); // Exponentiation for power , a ** b means a^b(a raise to power b)

//Unary Operators
a = a + 1; // or a++
console.log("a =",a);
a = a - 1; //a--
console.log("a =",a);

console.log("++a =", ++a);  //Pre Increment
console.log("a++ =", a++);  //Post Increment

console.log("--a =", --a);  //Pre Decrement
console.log("a-- =", a--);  //Post Decrement

//Comparison Operators
let x = 5; //number
let y = "5"  //string -> number

console.log("x == y", x == y) // it will return true because the string value in y is converted into number then they are compared ("==" does not compare datatypes it only compares values)
console.log("x === y", x === y) // it will return false because the "===" will compare data type and value both.


// Ternary Operators
let age = 18;
age >= 18 ? console.log("adult") : console.log("not adult");