const findTheOldest = function(peoples) {
  const year = new Date().getFullYear();
  
  const newArray = peoples.map(item => {
    if(!item.yearOfDeath){
      item.yearOfDeath = year;
    }
      return item;
  } );

  const res = newArray.sort((a,b) => ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) ? 1 : -1);

  return res[0];
};

// Do not edit below this line
module.exports = findTheOldest;
