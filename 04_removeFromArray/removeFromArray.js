const removeFromArray = function(arr) {
  let result = [];
    
  //For each parameter after the first, 
  //which should be the array
  for (let a = 1; a < arguments.length; a++) {
    //Compare with every element in the array
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === arguments[a]) arr.splice(i);
    }  
  }
};

// Do not edit below this line
module.exports = removeFromArray;
