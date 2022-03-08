const reverseString = function(str = "") {
  let reversedString = "";
  let count = 0;
  for (i = str.length; i > 0; i--){
    reverseString[count] = str[i];
    count++;
  }


};

// Do not edit below this line
module.exports = reverseString;
