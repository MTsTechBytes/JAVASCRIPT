//const profile = { 
//      username: "@shradhakhapra", 
//      followers: 569000, 
//      following: 4, 
//      posts: 195, 
//      isFollow : true, }


const profile = { 
    username: "@shradhakhapra", 
    followers: 569000, 
    following: 4, 
    posts: 195, 
    isFollow : true 
};

console.log("--------------------------------------------------------------------------------------------------")
    
//Write a line of code to update the posts property of the profile object to 200.
profile.posts = 200;
console.log(profile);

console.log("--------------------------------------------------------------------------------------------------")

//Add a new property called bio to the profile object with a value of your choice (e.g., "Lover of JavaScript").
profile.bio = "Lover of JavaScript";
console.log(profile)

console.log("--------------------------------------------------------------------------------------------------")

//Write a line of code to delete the isFollow property from the profile object
delete profile.isFollow;
console.log(profile);

console.log("--------------------------------------------------------------------------------------------------")

//Write a conditional statement that checks if the user has more than 500,000 followers. If true, log "Influencer" to the console; otherwise, log "Regular User".
if (profile.followers > 500000)
{
    console.log("Influencer");
}
else 
{
    console.log("Regular User");
}

console.log("--------------------------------------------------------------------------------------------------")

//Create a function called displayProfile that takes a profile object as an argument and logs the username and the number of followers in a formatted string (e.g., ":User @shradhakhapra has 569000 followers").
function displayProfile(profile) {
    console.log("User", profile.username, "has", profile.followers, "followers.")
}
displayProfile(profile);

console.log("--------------------------------------------------------------------------------------------------")

//Use Object.keys() to get an array of all the keys in the profile object and log it to the console.
let arrayOfKeys = Object.keys(profile);
console.log(arrayOfKeys);



console.log("====================================================================================================");


//Modify the code to count only the vowels (a, e, i, o, u) in the string str. Log the count of vowels to the console.
str = "JavaScript";

function countVow(string)
{
    let count = 0
    for (let val of string)
    {
        if(val=="A" || val=="E" || val=="I" || val=="O" || val=="U" || val=="a" || val=="e" || val=="i" || val=="e" || val=="u") 
        {
            count++;
        }
    }
    console.log(`There are ${count} vowels in this string`);
}
countVow(str);

console.log("--------------------------------------------------------------------------------------------------")

//Instead of using a loop to count the characters, use the length property of the string to log the size of the string directly. Compare the output with the original code.
let size = 0
for (let val in str)
{
    size++;
}
console.log(size == str.length)

console.log("--------------------------------------------------------------------------------------------------")

//Modify the code to create a new string that contains all the characters of str in uppercase. Log the new string to the console.
let newString = str.toUpperCase();
console.log(`The new string is ${newString}`);

console.log("--------------------------------------------------------------------------------------------------");

//Write a function called isPalindrome that checks if the string is a palindrome (reads the same forwards and backwards). Use the for...of loop to help with the comparison.
let string = "racecar";
let reversedString = string.split("");
reversedString = reversedString.reverse();
reversedString = reversedString.join("")
console.log(reversedString);

