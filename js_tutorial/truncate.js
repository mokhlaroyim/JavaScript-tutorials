function truncateString(str, num) {
    if(str.length>num){
        let i = 0;
        let string = '';
      while(i<num){
        string +=str[i];
        i++;
      }
      return string+'...';
    }
    else
        return str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));