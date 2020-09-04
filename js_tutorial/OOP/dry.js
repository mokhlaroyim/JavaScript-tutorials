//dry - dont repeat yourself
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

    //Bear inherit from Animal

    Bear.prototype = Object.create(Animal.prototype)

  var obj = new Bear("Hey")
  var animal = Object.create(Animal.prototype) //creates a new object, and sets obj as the new object's prototype
  console.log(obj.name)
  animal.eat()

  obj.eat() //inherited obj

//ChildObject.prototype = Object.create(ParentObject.prototype);  



  
