let multiplyAll = (arr)=>(num)=>arr.map(a => a*num);

function multiply_all(arr) {
    return function(n) {
      return arr.map(x => x * n);
    }
  }
console.log(multiplyAll([2,3,4])(2));