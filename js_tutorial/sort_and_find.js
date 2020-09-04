function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
     let i, j, temp;
     let n = arr.length;
     let flag = 0;
      for(i = 0; i < n; i++)
      {
          for(j = 0; j < n-i-1; j++)
          {
              // introducing a flag to monitor swapping
              let flag = 0;
              if( arr[j] > arr[j+1])
              {
                  // swap the elements
                  temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;
                  // if swapping happens update flag to 1
                  flag = 1;
              } 
          }
          // if value of flag is zero after all the iterations of inner loop
          // then break out
          if(!flag)
          {
              break;
          }
      }
      let count = 0;
      for(let i=0;i<n;i++){
          if(num>arr[i]){
              count++;
          }
      }
    return count;
  }
  
  console.log(getIndexToIns([12, 8, 90, 1], 70));
  
  