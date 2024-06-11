class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof!');
    }
}

const animal = new Animal('Animal');
const dog = new Dog('Dog');

console.log(animal instanceof Animal);
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

console.log(animal instanceof Dog);