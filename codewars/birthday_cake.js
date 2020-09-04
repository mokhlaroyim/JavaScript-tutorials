function cake(x, y){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
    let add_up = 0;
    for(let i=0; i<y.length; i++){
        if(i%2 == 0){
            add_up += y.charCodeAt(i);
        }
        else{
            let char = y[i];
            add_up += alphabet.indexOf(char)+1;
        }     
    }
    if(add_up >= 0.7*x)
        return "Fire!"
    else
        return "That was close!";
}

console.log(cake(900, 'abcdef'));
console.log(cake(256, 'aaaaaddddr'));

