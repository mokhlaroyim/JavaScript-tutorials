function isPalindrome(line) {
    for(let i=0, j=line.length-1; i<line.length/2; i++, j--){
        if(line[i] == line[j]){
            continue;
        }
        else
            return false;        
    }
    return true;
}

  console.log(isPalindrome("anana"));