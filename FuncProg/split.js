function splitify(str) {
    // Only change code below this line
    var word = str.split(/\W|\s/) // split into an array of words. 
    //The function should return the array. Note that the words are not always separated by spaces, 
    //and the array should not contain punctuation.
    return word
    // Only change code above this line
  }
  splitify("Hello World,I-am code");
  
  //task 2 JOIN
  function sentensify(str) {
    // Only change code below this line
    var string = str.split(/-|\.|,/)
    var newString = string.join(" ")
    // console.log(newString)
    return newString
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");
  sentensify("The.force.is.strong.with.this.one")
  console.log(sentensify("There,has,been,an,awakening"))