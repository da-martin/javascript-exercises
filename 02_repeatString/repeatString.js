const repeatString = function(str, num) {
  for (i = 0; i < num; i++){
    str += str;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
