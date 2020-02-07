var str1 = "69001";
var str2 = "690a1";
var str3 = "690 01";
var str4 = "69000100";


function isValid(str) {
 
  var numbersOnly = /^[0-9]+$/;
  if (str.length > 5) {
    return false;
  } else if (str.indexOf(' ') > -1) {
    return false;
  } else if (!str.match(numbersOnly)) {
    return false;
  }
 
  return true;
}

console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));
