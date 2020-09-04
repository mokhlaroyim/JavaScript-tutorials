//Object Oriented Programming: Change the Prototype to a New Object

function Person(name){
    this.name = name
}
Person.prototype = {
    surname: "Smith",
    experience: function(){
        console.log("qualified")
    }
}

let person_obj = new Person("Garry");
console.log(person_obj.surname);