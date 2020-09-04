// function mutation(arr) {
//     let flag = 0;
//      let len_arr1 = arr[1].length;
//      let len_arr0 = arr[0].length;
//     for(let i=0; i<len_arr1; i++){
//         for(let j=0; j<len_arr0; j++){
//             if(arr[1][i].toLowerCase()==arr[0][j].toLowerCase()){
//                 flag = 1;
//                 break;
//             }
//             else
//                 flag =0;
//         }
//         if(!flag)
//             break;
//     }
//     if(flag)
//         return true;
//     else
//         return false;
//   }
  
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  console.log(mutation(["ate", "date"]));
  