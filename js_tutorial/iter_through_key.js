// Sometimes you may need to iterate through all the keys within an object. 
//This requires a specific syntax in JavaScript called a for...in statement.
let Obj = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  function countOnline(usersObj) {
    let count = 0;
      for(let user in usersObj){
        if(usersObj[user].online === true)
          count++;
      }
    return count;
}
  
  console.log(countOnline(Obj));