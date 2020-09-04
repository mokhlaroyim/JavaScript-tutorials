var isAnagram = function(test, original) {
    if(test.length != original.length)
        return false;

    const TEST_OBJ = CharMap(test);
    const ORIGINAL_OBJ = CharMap(original);
    
    for(let o in TEST_OBJ){
        if(TEST_OBJ[o] != ORIGINAL_OBJ[o])
           { 
            return false;
           }

    }
    return true;
};
function CharMap(str){
        const MAP = {}
        for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
          MAP[char] = MAP[char] + 1 || 1
        }
        return MAP
      }
console.log(isAnagram("oob", "oBo"));



// var isAnagram = function(test, original) {
//     var t = test.toLowerCase().split('').sort().join('');
//     var o = original.toLowerCase().split('').sort().join('');
//     return (t==o)?true:false;
//   };