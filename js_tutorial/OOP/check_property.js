function Person(major) {
    this.major = major
};

console.log(Person.prototype.name = "Mokhlar") //prototype is used to avoid dublication while creating object

let obj1 = new Person("qwe");

let ownProp = [];
let prototypeArr = [];

for(let i in obj1){
    if(obj1.hasOwnProperty(i))
        ownProp.push(i);
    else
        prototypeArr.push(i);
}

console.log(ownProp);
console.log(prototypeArr);