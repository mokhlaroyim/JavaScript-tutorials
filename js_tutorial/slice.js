// function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let arr1_len = arr1.length;
    
//     for(let i=0; i< arr1_len; i++){
//         arr2.splice(n+i, 0, arr1[i]);
//     }
//     return arr2;
//   }

//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let list = [];
    for(let i=0;i<arr.length;i++){
        if(Boolean(arr[i])){
            list.push(arr[i]);
        }
    }
    return list;
  }
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));
//   console.log(bouncer([null, NaN, 1, 2, undefined]));
  
  let y = 9;
  let x = new Boolean(y);
  console.log(Boolean(y));
