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

//Method-1(Me)
function findLongestWord(str) {

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


//Method-2(Thapa)
const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }

    let words = str.split(" ");

    /*
    Words.sort()-->It will sort elements according to unicode values 
    and by inside by using callback fn it will sort according to descending order
    */

    words = words.sort((a, b) => b.length - a.length);

    console.log(words);

    return words[0];
}

console.log(findLongestWord(
    "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
));
