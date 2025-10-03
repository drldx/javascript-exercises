const removeFromArray = function(arr = [], ...items) {
  let args = items;  

  for(let i = 0; i < args.length; i++ ){
    let index = 0;
    while (arr.includes(args[i])) {
      index = arr.indexOf(args[i]);
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
