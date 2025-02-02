let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

let arraykeys = Object.keys(car);
let arrayvalues = Object.values(car);
let arrayentries = Object.entries(car);

console.log(arraykeys);
console.log(arrayvalues);
console.log(arrayentries);

console.log("-------------------------------------------------------------------")

for(let key in car)
{
    console.log(key , " : " , car[key]);
}

console.log("-------------------------------------------------------------------")


for(let keys of arraykeys)
{
    console.log(keys);
}

console.log("-------------------------------------------------------------------")


for(let values of arrayvalues)
{
    console.log(values);
}

console.log("-------------------------------------------------------------------")


for(let entries of arrayentries)
{
    console.log(entries);
}