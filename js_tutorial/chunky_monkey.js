// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let list = [];
//     for(let i=0;i<arr.length;i+=size){
//         list.push(arr.slice(i,size+i));
//     }
//     return list;
//   }
  function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 4));
  // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

 
