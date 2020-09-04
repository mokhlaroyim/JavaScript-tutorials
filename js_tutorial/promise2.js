const makeServerRequest = new Promise((resolve, reject)=>{
    let responseFromServer = false;
    // let responseFromServer = true;
    if(responseFromServer)
        resolve("Resolved");
    else
        reject("Rejected");
});

makeServerRequest
    .then(
        result =>{
            console.log(result);
        })
    .catch(
        error =>{
            console.log(error);
        })