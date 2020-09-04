function factorial(n)
{
  
    try{
        if(n < 0 || n>12)
            throw new RangeError(n);
        if(n == 1 || n == 0)
            return 1;
        else
            return n*factorial(n-1);
        }
    catch(e){
        if (e instanceof RangeError){
            return "Throw exept";
        }
    }
}

