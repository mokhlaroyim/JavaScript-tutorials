function titleCase(str) {
    let split = str.split(" ");
    let reg = /[a-z]/;
    let reg1 = /^[A-Z]/; 
    let list = '';
    for(let i=0; i<split.length; i++){
        for(let j=0; j<split[i].length; j++){
            if(split[i][j] != reg1 && j == 0)
                list += split[i][j].toUpperCase();
            else
                list += split[i][j].toLowerCase();
        }
        if(i != split.length-1) 
            list += " ";
    }     
     return list;
  }
  
  console.log(titleCase("sHoRt AnD sToUt"));
  