function sayHello() {
    console.log('Hello!');
}

console.log(sayHello.name);

console.log(window.name);

console.log(frames[0].name);

const obj = {};
console.log(obj.name);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.constructor.name);