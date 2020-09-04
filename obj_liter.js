const person = (name, age, gender) =>{
    return {name, age, gender};
}

console.log(person("Mokhlar", 22, "female"));

const chanhable_const = {foo: 123};
chanhable_const.foo = 234; //const can be changed but not not supposed to
console.log(chanhable_const.foo);