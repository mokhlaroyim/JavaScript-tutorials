//  Iterate Through All an Array's Items Using For LoopsPassed

function filterArray(arr, elem){
    let newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterArray([[1,2,3], [2,3,4], [2,1,4]], 3));