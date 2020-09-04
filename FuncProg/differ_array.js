function diffArray(arr1, arr2) {
    var newArr = arr1.filter( x => arr2.indexOf(x) === -1).concat(arr2.filter( x => arr1.indexOf(x) === -1))
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))
  console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))
  