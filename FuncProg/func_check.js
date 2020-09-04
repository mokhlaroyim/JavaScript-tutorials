//The every method works with arrays to check if every element passes a particular test. 
//It returns a Boolean value - true if all values meet the criteria, false if not.

//every method run tru numbers and returns one bool in the end
var numbers = [1, 5, 8, 0, 10, 11];
ch = numbers.every(function(currentValue) {  
  return currentValue < 10;
});
// Returns false
console.log(ch)

//some method run tru numbers and returns one bool in the end
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
