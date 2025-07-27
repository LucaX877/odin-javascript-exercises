const reverseString = function(string) {
    let array = string.split("").reverse();
    let newString = array.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
