// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }
  
//   let getFunction = getNine;
//   let getFunctionResult = getNine();
//   console.log(getFunction);
//   console.log(getFunctionResult);

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
        console.log(row);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      row = [];
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  