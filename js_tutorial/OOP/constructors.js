//Constructors are functions that create new objects. A constructor is useful when you want to create multiple similar objects with the same properties and methods. 

// Constructors follow a few conventions:
//Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//Constructors define properties and behaviors instead of returning a value as other functions might.

function Constructor(){
    this.num = 123,
    this.str = "qwe"
}
let obj = new Constructor();
let obj1 = new Constructor();
console.log(obj.num);
console.log(obj1.str);
obj.num = 234
obj1.str = "Mokhlar"
console.log(obj.num);
console.log(obj1.str);

//instanceof checks true/false belongs to object or not

let just_obj = {
    first_var : "smth",
    second_var : 9876
};
//take parameters
function Dog(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 4
  }
  
  let terrier = new Dog("Woody", "black")
console.log(just_obj instanceof Constructor);
console.log(obj instanceof Constructor);
