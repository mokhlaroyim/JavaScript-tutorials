function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  for(let prop in canary){
    if(canary.hasOwnProperty(prop)){
      ownProps.push(prop);
    }
  }
    console.log(ownProps);
  for(let v in ownProps){
    console.log(ownProps[v]);
  }
  console.log(Object.keys(ownProps));