//Funtions in Javascript can be passed as parameters
// function abc() {
//     comsole.log("Hello");
// }

// function myFunc(abc) {
//    return abc;
// }

//forEach Loop in array
 let arr = [1, 2, 3, 4, 5]

arr.forEach(function printVal(val) { //each value at each index
    console.log(val);
});

//passing callback as an arrow function 
let city = ["Rawalpindi", "Islamabad", "Lahore", "Karachi", "Quetta"]

city.forEach((val, index, array) => {
    console.log(val, index , array);
});


// Maps methods in arrays
let nums = [67, 52, 39]
 
let newArr = nums.map((val) => { //Map has the same function as forEach but it gives us a new array in result
    return val*val;
});

console.log(newArr);

// Filter Method in array

let array = [1, 2, 3, 4, 5, 6, 7];

let evenArr = array.filter((val) => {
    return val % 2 == 0;
});

console.log(evenArr);

// Reduce Method in Arrays

let array1 = [1, 2, 3, 4];

const output = array1.reduce((pre, curr) => {
    return pre + curr;
});

console.log(output);