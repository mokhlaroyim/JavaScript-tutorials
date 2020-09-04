// it restructures a function so it takes one argument, 
//then returns another function that takes the next argument, and so on.

//Un-curried function
function unCurried(x, y) {
    return x + y;
  }
  
  //Curried function
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  //Alternative using ES6
  const curried = x => y => x + y
  
  curried(1)(2) // Returns 3


  //This is useful in your program if you can't supply all the arguments to a function at one time. 
  //You can save each function call into a variable, which will hold the returned function reference
  // that takes the next argument when it's available. Here's an example using the curried function in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


//Impartial function
function impartial(x, y, z) {
    return x + y + z;
  }
  var partialFn = impartial.bind(this, 1, 2); //late binding
  partialFn(10); // Returns 13