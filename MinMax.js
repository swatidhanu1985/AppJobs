var array1 = [1,2,3,4,5];
var array2 = [3445565, 2];
var array3 = [1];

function minMax(inputArray) {
 
  var result = [];
   result.push(Math.min.apply(null, inputArray));
   result.push(Math.max.apply(null, inputArray));
   
   return result;
}

console.log(minMax(array1));
console.log(minMax(array2));
console.log(minMax(array3));