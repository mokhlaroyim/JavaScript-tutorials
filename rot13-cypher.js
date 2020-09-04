function rot13(str) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let new_str=''
    for(let i=0; i<str.length; i++){
        for(let j=0; j<alphabet.length; j++){
            if(str[i] === alphabet[j]){
                if(j<13)
                    new_str += alphabet[j+13]
                else
                    new_str += alphabet[j-13]
              }
        }
        if(str[i] === "!" || str[i] === " " || str[i] === "?" || str[i] === "."){
            new_str += str[i]
        }
    }
    return new_str;
  }
  
  console.log(rot13("SERR CVMMN!"))
  