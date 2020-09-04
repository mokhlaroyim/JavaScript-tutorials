function removeChar(str){
    let list = [];
    for(let  i=0; i<str.length; i++){
        list[i] = str[i];
    }
    list.shift();
    list.pop();
    return list.join("");
};
console.log(removeChar("Hello"));