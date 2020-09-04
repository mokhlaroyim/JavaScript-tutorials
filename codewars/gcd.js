function mygcd(x,y){
let num, gcd;
    if(x<y)
        num = x;
    else num = y;
   for(let i=1; i<=num; i++){
    if(x%i==0 && y%i==0)
        gcd = i;
   }
   return gcd;
}
console.log(mygcd(30, 11));
mygcd(30, 12);
