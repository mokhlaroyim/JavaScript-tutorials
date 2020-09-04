function translatePigLatin(str) {
  var vowel = /^[aieouAIEOU].*/
  let conson =/\A(?=[^aeiou])(?=[a-z])/i
  var test1 = str.match(vowel)
  var test2 =str.match(conson)
    if(test1)
      str = str.concat("way")
    else if(test2){
      let i=0
      let cpy
      while(str[i]!== /[aieou]/)
          cpy += str[i]
          
    }
    
  return str;
}

translatePigLatin("mcalgorithm");
