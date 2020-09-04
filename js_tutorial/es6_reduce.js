// example 1
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average);

// example 2
const fun = (...x) => {
  const arg = [...x];
  const iteration = arg.reduce((total, amount) => total+amount, 0); // 0 is total initially 
  return iteration;                            
}
console.log(fun(2,3,4));

// example 3
const fun1 = (...arg1) => {
  // const arg1 = [...x];
  return arg1.reduce((a,b)=>{
    a.push(2*b);
    return a;
  }, []);
}
console.log(fun1(2,3,4));
