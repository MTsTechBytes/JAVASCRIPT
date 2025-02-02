let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine"); // adds "tangerine" to the end of the array
console.log(favoriteFruits); 

let superHeroes = ["Spiderman", "Batman", "Wonderwoman", "Ironman"];
superHeroes.pop(); // removes "Ironman" the last element from the array
console.log(superHeroes);

let vegetables = ["carrot", "potato", "onion"];
vegetables.unshift("eggplant"); // adds "eggplant" to the beginning of the array
console.log(vegetables);

let planets = ["Earth", "Mars", "Jupiter"];
planets.shift(); // removes "Earth" the first element from the array
console.log(planets);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 1, "square", "trapezoid"); // splice(starting index, number of elements to remove, elements to add)
console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

let weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let newweeks = weeks.slice(2, 5); // returns a new array with elements from index 2 to 4, 5 is not included, slice(starting index, ending index)
console.log(newweeks);
console.log(weeks.indexOf("Wednesday")); // returns the index of "Wednesday" in the array

let arr9 = [42, 25, 23, 98, 13];
arr10 = arr9.sort(); // sorts the array in ascending order
console.log(arr10);

let arr11 = arr9.reverse(); // reverses the array
console.log(arr11);

delete arr9[2]; // deletes the element at index 2, but the length of the array remains the same
console.log(arr9);




