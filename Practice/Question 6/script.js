let nums = [2, 3, 4, 5, 6]

nums.forEach((num) => {
    console.log(num*num);
});  

//Alternative method

let numbers = [67, 52, 39]

let calSquare = (num) => {
    console.log(num*num);
};

numbers.forEach(calSquare);
