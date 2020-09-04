function findLongestWord(str) {
    var str1 = str.split(" ");
    var list = [];
    for (i=0;i<str1.length;i++) {
    list.push(str1[i].length) ;
    }
    return Math.max.apply(null ,list);
    }
    
   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
  
  /* second method
  function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
}*/