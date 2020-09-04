function destroyer(arr) {
    /* Put all arguments in an array using spread operator and remove elements 
       starting from 1 */
    const args = [...arguments].splice(1);
    /* Check whether arguments include elements from an array and return all that 
       do not include(false) */
    return arr.filter(el => !args.includes(el));
  }
  // destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  console.log(destroyer([2, 3, 2, 3], 2, 3))


  //task 2
  function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
      const keysFromSource = Object.keys(source);
  console.log(keysFromSource)
    arr = collection.filter(item => 
      (keysFromSource.every(key => 
        (item.hasOwnProperty(key) && 
         item[key] === source[key]))))
    // Only change code above this line
    return arr;
  }
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });