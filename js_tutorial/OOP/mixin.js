//mixin function is used to optimize code and create smth in common between 2 functions
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
//  console.log(flyMixin(bird)) ;
  flyMixin(plane);
