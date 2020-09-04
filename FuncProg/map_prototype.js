// The global variable
var s = [23, 65, 98, 5];

//myMap acts exactly like a map()
Array.prototype.myMap = function(callback){
  var newArray = [];
  for (var i=0; i < this.length; i++)
    newArray.push(callback(this[i])) //send from 0 to n item to callback function
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s)