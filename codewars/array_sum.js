const people = [
    { name: 'Krunal', age: 25 },
    { name: 'Rushikesh', age: 25 },
    { name: 'Ankit', age: 24 }
  ];
  
  const groupBy = (objectArray, property) => {
      return objectArray.reduce(function (total, obj) {
          let key = obj[property];
          if (!total[key]) {
              total[key] = [];
          }
          total[key].push(obj);
          return total;
      }, {});
  }
  
  let groupedPeople = groupBy(people, 'age');
  
  //console.log(groupedPeople);

function positiveSum(arr) {
    let sum = 0;
    for(let x=0;x<arr.length;x++){
        if(arr[x]>0)
            sum += arr[x];
    }
    return sum;
}
  //or:
function positiveSum1(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positive(arr){
    let s = arr.reduce(function(a,b){
            return a+(b > 0 ? b : 0);
    }, 0);
    return s;
}

  console.log(positive([-7,3,5]));