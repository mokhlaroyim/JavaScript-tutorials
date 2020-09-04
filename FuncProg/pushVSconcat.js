var arr = [1, 2, 3];
arr.push([4, 5, 6]);  //mutates an array
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way

var x = [1,2,3]
y = x.concat([4,5,6])
console.log(arr)
console.log(x)
console.log(y)
