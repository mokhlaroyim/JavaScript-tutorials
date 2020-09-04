// function rangeOfNumbers(startNum, endNum) {
//     if (endNum == startNum) {
//       return [startNum];
//     } else {
//       var numbers = rangeOfNumbers(startNum, endNum - 1);
//       numbers.push(endNum);
//       return numbers;
//     }
//   }
  
//   console.log(rangeOfNumbers(1,3));
//   console.log(rangeOfNumbers(1,1));
//   console.log(rangeOfNumbers(1,9));


function rangeOfNumberss(startNum, endNum) {
    return startNum === endNum ? [startNum] : [...rangeOfNumberss(startNum, endNum - 1), endNum ];
}
  console.log(rangeOfNumberss(1,5));
