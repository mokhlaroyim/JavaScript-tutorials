//When an object inherits its prototype from another object, 
//it also inherits the supertype's constructor property.function Bird() { }
function Animal(){}
Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
      }
}
function Bird(){
}

Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
console.log(duck.constructor)
 // function Animal(){...}

Bird.prototype.constructor = Bird;
console.log(duck.constructor) // function Bird(){...}

//after inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function(){
  console.log("Woof!")
}


// Only change code above this line

let beagle = new Dog();
