// With ES6, You can remove the function keyword and colon altogether when defining functions in objects. 
const obj = {
    name: "Mokhlar",
    myName(){
        return `My name is ${this.name}!`;
    }
};
console.log(obj.myName());
const person = {
    name: "Taylor",
    sayHello(qwe) {
      return `Hello! My name is ${qwe}.`;
    }
  };
  console.log(person.sayHello('Mary'));
