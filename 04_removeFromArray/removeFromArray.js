const removeFromArray = function() {
  let result = arguments[0];
  //For each parameter after the first 
  //(which should be the array)
  for (let a = 1; a < arguments.length; a++) {
    //console.log("Argument: " + arguments[a]);
    //Compare with every element in the array
    for (i = 0; i < result.length; i++) {
      //console.log("  Array element: " + result[i]);
      if (result[i] === arguments[a]) {
      //console.log("  This is a match:" + result[i] + " = " + arguments[a]);
        result.splice(i,1);
        i--;
      }
    }  
  }
  //console.log("Final array: " + result);
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
