// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  var arr = [];
  var bool = true
  for(let x=0; x<this.length; x++){
    arr.push(callback(this[x], x, this))
    bool = arr[x]
    if(bool == true){
      newArray.push(this[x])
    }
    else continue
  }
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s)
