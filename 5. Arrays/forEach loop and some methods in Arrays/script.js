//Funtions in Javascript can be passed as parameters
// function abc() {
//     comsole.log("Hello");
// }

// function myFunc(abc) {
//    return abc;
// }
// myFunc(abc());

//forEach Loop in array
let arr = [1, 2, 3, 4, 5]

arr.forEach(function printVal(val) { //each value at each index
    console.log(val);
});

console.log("-----------------------------------------------------------------")

//passing callback as an arrow function, forEach loop is called higher order function
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
    console.log(val);
})

console.log("-----------------------------------------------------------------")

//passing callback as an arrow function 
let city = ["Rawalpindi", "Islamabad", "Lahore", "Karachi", "Quetta"]

city.forEach((val, index, array) => {
    console.log(val, index , array);
});

console.log("-----------------------------------------------------------------")

//Print the square of each element in the array using forEach loop
let calcSquare = val => {
    console.log(val*val);
}

let arr2 = [1, 2, 3, 4, 5];
arr2.forEach(calcSquare);

console.log("-----------------------------------------------------------------")

// Maps methods in arrays
let nums = [67, 52, 39]
 
let newArr = nums.map((val) => { //Map has the same function as forEach but it gives us a new array in result
    return val*val;
});

console.log(newArr);

console.log("-----------------------------------------------------------------")


// Filter Method in array
let array = [1, 2, 3, 4, 5, 6, 7];

let evenArr = array.filter((val) => {
    return val % 2 == 0;
});

console.log(evenArr);

console.log("-----------------------------------------------------------------")

// Reduce Method in Arrays
let array1 = [1, 2, 3, 4];

const output = array1.reduce((prev, curr) => {
    return prev + curr;
});

console.log(output);  //10

console.log("-----------------------------------------------------------------")

// Printing the largest number in the array using reduce method
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];

const ouput1 = array2.reduce((prev, curr) => {
    return Math.max(prev, curr);
    // or return prev > curr ? prev : curr;
})

console.log(ouput1); //8

console.log("-----------------------------------------------------------------")

// Take a number n as input and create an array of numbers from 1 to n
let n = prompt("Enter a number: ");
let array3 = [];
for (let i = 0; i < n; i++)
{
    array3.push(i+1);
}
console.log(array3);

let sum = array3.reduce( (prev, curr) => {
    return prev + curr;
});

console.log(sum);
