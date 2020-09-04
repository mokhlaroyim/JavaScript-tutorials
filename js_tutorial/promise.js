const myPromise = new Promise((resolve, reject)=>{
    let response = true;
    if(response){
        resolve("We got it");
    }
    else{
        reject("Dont get");
    }
});

console.log(myPromise);

// Promises are most useful when you have a process that takes an unknown amount of time in your code  (i.e. something asynchronous), often a server request.