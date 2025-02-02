// function stringVowel() {
//     let str = prompt("Enter a name");
//     let count = 0;
//     for(let char of str) {
//         console.log(char);
//         if(char === "a" || char === "e" || char == "i" || char === "o" || char ==="u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// stringVowel()

//Rewriting this function using arrow function

const countVowel = () => {
    let str = prompt("Enter a name");
    let count = 0;
    for(let char of str) {
        console.log(char);
        if(char === "a" || char === "e" || char == "i" || char === "o" || char ==="u") {
            count++;
        }
    }
    console.log(count);
}

countVowel();