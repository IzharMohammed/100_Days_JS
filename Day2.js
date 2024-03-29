// Programming Question: Hash Tag Generator

// You are required to implement a function generateHash that generates a hash tag from a given input string.
// The hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized and
// concatenated together without spaces.

// If the length of the input string is greater than 2 and the input string is empty or contains only whitespace,
// the function should return false.
// Otherwise, the function should return the generated hash prefixed with #.

// Write a function generateHash to accomplish this task.

// My solution
function generatehash(str) {

    //See if there is empty string
    if (str.length === 0) {
        return false;
    }

    //convert to array of strings
    let arr = str.split(" ");
    console.log(arr);

    //iterate through each element and make first character to upper and add
    //remaining characters using slice 
    const newArr = arr.map((elements) => {
        return elements.slice(0, 1).toUpperCase() + elements.slice(1)
    })

    console.log(newArr);

    const result = newArr.join('');

    return '#' + result
}

console.log(generatehash('my name is mohammed izhar'));

// o/p ==> "#MyNameIsMohammedIzhar"


//Thapa solution
const generateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }

    str = str.split(" ");
    str = str.map((curElem) =>
        curElem.replace(curElem[0], curElem[0].toUpperCase())
    );

    str = "#" + str.join("");
    console.log(str);
    return str;
}

console.log(generateHash("my name is thapa technical"));
