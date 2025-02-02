const arr = [4, 1, 5, 1, 8, 3];
arr.sort();
console.log(arr);

const arr1 = ["hi ", "hello", "bye"];
arr1[0] = "wassup"

console.log(arr1);

console.log("-----------------------------------------------------------------")


let arrOfArrays = [];
for (let i = 0; i < 3; i++)
{
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) 
    {
        arrOfArrays[i].push(j);
    }
}

console.log(arrOfArrays);
console.table(arrOfArrays);

console.log("-----------------------------------------------------------------")



const countVow = (string) => {
    let count = 0;
    for (let char of string)
    {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
        {
            console.log(char);
            count++;
        }
    }
    return count;
};

console.log(countVow("hello"));
// console.log("Total vowels = ", count);

console.log("-----------------------------------------------------------------")

function someFunction(param1, ...param2) {
    console.log(param1, param2);
  }
someFunction("hi", "there!", "How are you?");

console.log("-----------------------------------------------------------------")

const addTwoNumbers = (a, b) => {
    return a + b;
}

let resultsArr = [];
for(let i = 0; i < 10; i ++){
  let result = addTwoNumbers(i, 2*i);
  resultsArr.push(result);
}
console.log(resultsArr);

console.log("-----------------------------------------------------------------")


//Recursive function
function fact(n)
{
    if (n == 1 || n == 0)
    {
        return 1;
    }
    return n * fact(n-1);
}

console.log(fact(5));

console.log("-----------------------------------------------------------------")

//Nested function
function doOuterFunctionStuff(nr) {
    console.log(nr);
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
        console.log(x+1);
    }
  }

doOuterFunctionStuff(3);

console.log("-----------------------------------------------------------------")

//Function Callback
let anonymousFunction = function() {
    console.log("I am an anonymous function");
}

function doFlexibleStuff(callback)
{
    callback();
    console.log("I am doing flexible stuff");
}

doFlexibleStuff(anonymousFunction);

