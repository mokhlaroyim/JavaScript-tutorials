// Return an array
function fizzbuzz(n)
{
  let arr = [];
  for(let i=1; i<=n; i++){
    if(i%3==0 && i%5==0 && i!=1)
      arr.push("FizzBuzz");
    else if(i%3==0)
        arr.push("Fizz");
    else if(i%5==0)
        arr.push("Buzz");
    else
        arr.push(i);
  }
  return arr;
}

function fizzbuzz1(n) {
    return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}
console.log(fizzbuzz1(10));