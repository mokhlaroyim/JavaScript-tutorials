function myReplace(str, before, after) {
    let searchReg = new RegExp(`(${before})`, 'gi');
    let test = str.match(searchReg)
      if(test){
        let rep
        if(/^[A-Z]/.test(before))
            { rep = after[0].toUpperCase()
              rep = rep.concat(after.slice(1))
              console.log(1)
            }
        else
            {
              rep = after.toLowerCase()
              console.log(2)
            }
        str = str.replace(searchReg, rep)
        console.log(str)
      }
      return str;
    }
    
    myReplace("Let us go to the store", "store", "mall");
    myReplace("His name is Tom", "Tom", "john")