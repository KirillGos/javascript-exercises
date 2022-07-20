//1.Split the string into the numbers
const reverseString = function(string) {
    let letter = [];
    if(string != 0) {
        for(i = 0; i < string.length; i++) {
            letter.push(string.slice(i, i + 1)); 
        }
        return shift(letter);
    } else {
        return string;
    }
};

const shift = array => {
    let result  = [];
    const arrayLength = array.length;
    for(let i = 0; i < arrayLength; i++) {
         result += array.pop();
    }
        return result
};

// Do not edit below this line
module.exports = reverseString;
