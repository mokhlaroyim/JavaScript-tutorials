// function largestOfFour(arr) {
//     let max=arr[0][0];
//     let list = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(max<arr[i][j]){
//                 max = arr[i][j];
//             }
           
//         }
//         list.push(max);
//         max = -9999;
//     }
//     return list;
// }
  
  
//   console.log(largestOfFour([[13, 27, 18, 26], [32, 35, 37, 39],[-1, 5, 1, 3],[1000, 1001, 857, 1]]));
  
function confirmEnding(str, target) {
    for(let i=str.length-1, j=target.length-1; i>=0,j>=0; j--,i--){
      if(str[i]!=target[j]){
        return false;
      } 
    }
    return true;
  }
  
  console.log(confirmEnding("Bastian", "amn"));
  