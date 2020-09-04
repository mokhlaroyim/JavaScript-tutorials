function Bird() {
    let weight = 15; //private
    
  /* publicly available method that a bird object can use */
    this.getWeight = function(){
      return weight
    }
  }
  
  let obj = new Bird()
  console.log(obj.getWeight())