function processArray(arr, callback){
    let list = [];
    for(let i=0;i<arr.length;i++)
       list.push(callback(arr[i]));
    return list;
}
/*
var processArray = function (arr, callback) {
    return arr.map(callback);
}
*/
var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray, function (a) {
    return a + 5;
});
console.log(myArray);