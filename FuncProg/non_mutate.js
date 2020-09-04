var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  var list = arr.slice()
  list.sort(function(a,b){return a-b})
  return list
  // Only change code above this line
}
nonMutatingSort(globalArray);
