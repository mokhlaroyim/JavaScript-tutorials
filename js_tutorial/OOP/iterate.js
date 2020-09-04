function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line
  for(let v in beagle){
    if(beagle.hasOwnProperty(v))
      ownProps.push(v);
    else  
      prototypeProps.push(v);
  }