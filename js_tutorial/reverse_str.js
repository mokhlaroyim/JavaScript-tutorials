function reverseString(str) {
    let str_rev = [];
    let len = str.length;
    let conv_to_str = '';
    for(let i = len-1, j = 0; i >=0; i--, j++){
      str_rev[j] = str[i];
    }
    for(let i = 0; i<str_rev.length; i++){
        conv_to_str +=str_rev[i];
    }
    return conv_to_str;
}
console.log(reverseString("hello world"));  


function reverseStr(str){
    return str.split('').reverse().join('') 
}
console.log(reverseStr("hello Ann"));
// Use split() inbuilt function in JavaScript to split string into array of characters i.e. [ ‘G’, ‘e’, ‘e’, ‘k’, ‘s’, ‘ ‘, ‘f’, ‘o’, ‘r’, ‘ ‘, ‘G’, ‘e’, ‘e’, ‘k’, ‘s’ ]
//Use reverse() function in JavaScript to reversal the array of characters i.e. [ ‘s’, ‘k’, ‘e’, ‘e’, ‘G’, ‘ ‘, ‘r’, ‘o’, ‘f’, ‘ ‘, ‘s’, ‘k’, ‘e’, ‘e’, ‘G’ ]
//Use join() function in JavaScript to join the elements of an array into a string.