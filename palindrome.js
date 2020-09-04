function palindrome(str) {
    let replace_str = str.replace(/[^a-zA-Z0-9]+/ig, "").toLowerCase()
    let len = replace_str.length-1
    for(let i=0; i<=Math.ceil(len/2); i++){
        if(replace_str[i] !== replace_str[len-i]){
            return false
        }
    }
    return true;
  }
  
  console.log(palindrome("almostomla"))   
  
//    console.log(palindrome("not a palindrome"))
//    console.log(palindrome("five|\_/|four"))

    // console.log(palindrome("2A3 3a2"))
     console.log(palindrome("_eye"))
    // console.log(palindrome("race car")) 


  