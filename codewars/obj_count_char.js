function count (string) {  
    var Obj = {};
    if(string==='')
        return Obj
    const STR = CharCount(string);
    return STR;
}

function CharCount(str){
    const MAP = {};
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        MAP[char] = MAP[char]+1 || 1;
    }
    return MAP;
}
console.log(count("aasdd"));


// or
function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }