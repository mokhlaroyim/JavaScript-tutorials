class Person{
    constructor(name){
        this._name = name;
    }

    get author_name(){
        return this._name;
    }
    set author_name(set_name){
        this._name = set_name;
    }
}

const obj = new Person("Mokhlar");
console.log(obj);
console.log(obj.author_name);
obj.author_name = "Mary";
console.log(obj.author_name);