let marks = [96, 83, 75, 64, 36];
console.log(marks);
console.log(marks.length);

let heroes= ["ironman", "hulk", "thor", "batman"];
console.log(heroes);
console.log(heroes.length);

//for of
for( let hero of heroes)
{
    console.log(hero);
}

let foodItems = ["potato", "apple", "leeche", "tomato"];
foodItems.push("chips", "burger", "cheese");  // adds new items at the end of the array, it changes the origional array
console.log(foodItems);

let deletedItem=foodItems.pop(); // delete the last item from the end,it changes the origional array
console.log(foodItems);
console.log("deleted =", deletedItem);

let score = [45, 45,343, 454, 322,53]
console.log(score);
console.log(score.toString());  //converts an array to string but not changes the origional array

let marvel_heroes = ["thor", "spiderman", "ironman", "dr.strange", "hulk"];
let dc_heroes = ["superman", "batman", "aquaman"];

let all_heroes = marvel_heroes.concat(dc_heroes); //join one array at the end of the another array and does not change the origional array
console.log(all_heroes);

console.log(marvel_heroes.unshift("antman")); // adds an item to the start of the array,it changes the origional array
let delHero = marvel_heroes.shift();
console.log(marvel_heroes);
console.log("deleted hero = ", delHero); //delete the first item from the start of the array ,it changes the origional array

let days= ["monday", "tuesday", "wednesday", "thurday", "friday", "saturday", "sunday"];
console.log(days.slice(1,3));  // return the piece of an array, but the ending index in not included, we have to give starting and ending value, it does not changes the origional array

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102); // change origional array (add, remove, replace), it made changes in origional arrat
//arrayname.splice (startIndex, deleteCount, newItem)
console.log(arr);
