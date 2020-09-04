function findDup( arr ){
    let i = 0;
    arr.sort();
    while(i<arr.length){
        if(arr[i]==(arr[i+1])){
            return arr[i];
        }
        i++;
    }
}
console.log(findDup([1,2,3,2,4]));

// or
function findDup1(arr){
    return arr.reduce(function(n, v, i){
      return arr.indexOf(v) == i ? n : v;
    }, null);
}