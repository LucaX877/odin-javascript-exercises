const palindromes = function (word) {
  let rex = new RegExp('[a - zA - Z0 - 9]');
  let newWord = word.toLowerCase();
  newWord = newWord.split('');
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] == !rex) {
      newWord.splice(i, 1);
    }
    if (newWord[i] == '.') {
      newWord.splice(i, 1);
    }
    if (newWord[i] == ',') {
      newWord.splice(i, 1);
    }
    if (newWord[i] == "!") {
        newWord.splice(i,1);
    }
    if (newWord[i] == ' ') {
      newWord.splice(i, 1);
    }
  }
  return newWord.join('') == newWord.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
