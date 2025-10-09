const palindromes = function (word) {
  const cleanWord = word.replaceAll(/[^a-zA-Z0-9]/g, "" ).toLowerCase();
  const reversed = cleanWord.split("").reverse().join("");

  return cleanWord === reversed ? true : false ;
};

// Do not edit below this line
module.exports = palindromes;
