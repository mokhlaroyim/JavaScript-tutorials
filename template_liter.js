const person ={
    name: "Mokhlar",
    age: 22
}

var greating = `Hello ${person.name}! Are you ${person.age} years old?`;

// console.log(greating);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
 
    //declarative way
    const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
   
    //imperative way
    // const resultDisplayArray = []
    // for(let i=0; i<arr.length; i++){
    //   resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    // }
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`,
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray); 
