const reverseString = function(string) {
  let len = string.length - 1;
  let stringArr = string.split("");
  let reverse = ""; 
  while(len >= 0){
   reverse += stringArr[len]; 
    len--;
  }
  return reverse; 
};

// Do not edit below this line
module.exports = reverseString;
