const reverseString = function(str = "") {
  let reversedStr = [];
  let count = 0;
  for (i = str.length-1; i >= 0; i--){
  //  console.log(" i:" + i);
  //  console.log(" c:" + count);
  //  console.log(" str:" + str[i]);
    reversedStr.push(str[i]);
    count++;
  }
  return reversedStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
