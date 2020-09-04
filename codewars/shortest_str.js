function findShort(s){
  let split_s = s.split(' ');
  let shortest = split_s[0].length;
  for(let i=1;i<split_s.length;i++){
      if(shortest>split_s[i].length)
        shortest = split_s[i].length;
  }
  return shortest;
}

console.log(findShort("Hey Jey awerty po 67h"));


function squareDigits(num){
    let digit = num.toString().split('');
    let square = digit.map(x=> x = Math.pow(x,2));
    return Number(square.join(''));
  }
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }
console.log(squareDigits(9119));