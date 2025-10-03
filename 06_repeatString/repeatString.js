const repeatString = function(string, num) {
  if(num === 0) return '';
  if(num < 0) return 'ERROR';

  let Str2 = "";
  while (num){
    Str2 += string;
    num --;
  }
  return Str2;
};
console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
