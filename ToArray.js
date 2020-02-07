var jsonObj1 = { a: 1, b: 2 };
var jsonObj2 = { dogs: 5, cats: 2 };
var jsonObj3 = {};

function toArray(jsonObj) {
  var result = [];
  var keyArray = Object.keys(jsonObj);
  var valueArray = Object.values(jsonObj);
 
 
   keyArray.forEach((key, index) => {
    result.push([key, valueArray[index]]);
  });
 
  console.log(result);
}

toArray(jsonObj1);
toArray(jsonObj2);
toArray(jsonObj3);