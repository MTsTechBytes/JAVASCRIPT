//Functions
function myFucntion(msg, num) //Parameters
{
    console.log(msg, num);
}

myFucntion("I love JS", 100);  //Arguments

//Sum Function
function sum(a, b)
{
    return a+b;
}

console.log(sum(3,8)); // Calling a sum function

//Multiply Function
function multiply(a, b)
{
    return a*b;
} 

console.log(multiply(2,4)); // Calling multiply function

//Arrow Function of sum function
const arrowSum = (a, b) => {
    console.log(a+b);
};

arrowSum(3, 4) // Calling an Arrow Function of sum function

//Arrow Function of multiplication function
const arrowMultiply= (a, b) => {
    console.log(a*b);
};

arrowMultiply(4, 5); //Calling an Arrow Function of multiply function































