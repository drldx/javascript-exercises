const sumAll = function(num1, num2) {
  if((num1 < 0 || num2 < 0)) return 'ERROR';
  if(!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

  let first = (num1 > num2) ? num2 : num1 ;
  let last = (num1 < num2) ? num2 : num1;
  let sumArr = [];
  while(first <= last){
    sumArr.push(first++);
  }
  return sumArr.reduce((a, b) => (a + b));
};

// Do not edit below this line
module.exports = sumAll;
