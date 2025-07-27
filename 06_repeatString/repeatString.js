const repeatString = function(string, num) {
    let newString = "";
    if (0 > num) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        newString += string;
    } return newString;
};

// Do not edit below this line
module.exports = repeatString;
