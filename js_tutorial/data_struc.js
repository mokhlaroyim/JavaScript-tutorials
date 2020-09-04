// Basic Data Structures: Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['leaning', ...fragment, 'is', 'fun']; // change this line
    return sentence;
  }
  
  // do not change code below this line
  console.log(spreadOut());