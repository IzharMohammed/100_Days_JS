//*-----------------------------------------
//* Programing question : Longest word in a string 
//*------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are
//multiple longest words, return the first one encountered.

//* Constraints:

//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//jogs The input string is non-empty.

//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


function findLongestWord(str) {
    // console.log(Math.max('Watch', 'Thapa' ));
    let arr = str.split(" ");
    console.log(arr);
    let ans = arr.reduce((first, second) => {
        console.log([first, second]);
        return first.length >= second.length ? first : second
    })
    return ans;
}


console.log(
  "Largest word is : ",  findLongestWord("How much wood would a woodchuck chuck if a woodchuck could chuck wood")
);