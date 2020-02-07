var json = [{"id":1,"name":"accommodation","prerequisites":[{"id":1,"name":"Apartment/Flat"},{"id":2,"name":"House"}]},{"id":2,"name":"vehicle","prerequisites":[{"id":3,"name":"Boat"},{"id":4,"name":"Truck"}]}];

function getPrerequisites(jsonObj) {
  var result = [];
 
  jsonObj.forEach(obj => {
    obj.prerequisites.forEach(pr => {
      result.push(pr);
    });
  });
 
  console.log(result);
 
}

getPrerequisites(json);