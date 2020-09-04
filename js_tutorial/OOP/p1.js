let car ={ 
    name: "BMW",
    cost: 100000,
    nameFunc: function(){
        return "Name of a car "+car.name+" and cost "+car.cost+"." //or this.cost
    }
};
console.log(car.nameFunc());