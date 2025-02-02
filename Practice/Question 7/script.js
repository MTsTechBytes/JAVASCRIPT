// Q1
let marks = [97, 64, 32, 49, 99, 96, 86];

let newMarks = marks.filter((val) => {
    return val > 90;
});

console.log(newMarks);



// Q2
let n = prompt("Enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1]= i;
}

console.log(arr);
//sum
let sum = arr.reduce((pre, curr) => {
    return pre + curr;
});

console.log("sum = ", sum);

// //product
let product = arr.reduce((pre, curr) => {
    return pre * curr;
});

console.log("product = ", product);