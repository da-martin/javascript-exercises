const sumAll = function(a,b) {
  let result = 0;
  let c = 0;
  ///console.log ("a: " + a);
  //console.log ("b: " + b);
  if ((typeof(a)!="number") || a < 0) return "ERROR";
  if ((typeof(b)!="number") || b < 0) return "ERROR";
  if (a > b){
    c = a;
    a = b;
    b = c;
  }
  for (let i = a; i <= b; i++)
    result += i;

  return result;
};

// Do not edit below this line
module.exports = sumAll;
