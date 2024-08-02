"use strict";
// 1 - Campos em classe
class User {
}
const user = new User();
console.log(user);
user.name = "Francisco";
console.log(user);
// 2 - Constructor
class Employeer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const john = new Employeer("John Appleseed", 25);
console.log(john);
// 3 - Campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const ferrari = new Car("Ferrari");
console.log(ferrari);
console.log(ferrari.wheels);
console.log((ferrari.name = "Ferrari Turbo"));
// 4 - Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência!`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const maryOlson = new Person("Mary", "Olson");
console.log(maryOlson.name);
console.log(maryOlson.surname);
console.log(maryOlson.fullName);
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso.");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso.");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World!");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
const historyPost = new TestingInterface("The gods of old Greek");
console.log(historyPost.itemTitle());
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log("Something important here...");
    }
    showName() { }
}
class Nova extends Base {
    someMethod() {
        console.log("Foo Foo Foo");
    }
    anotherMethod() { }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Public class
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
    constructor() {
        super(...arguments);
        this.y = 11;
    }
}
const c = new C();
console.log(c.x);
const d = new D();
console.log(d.x);
console.log(d.y);
// 12 - Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Esse método é protegido.");
    }
}
class F extends E {
    showX() {
        console.log("X: ", this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const f = new F();
f.showX();
f.showProtectedMethod();
// Another example of protected class
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        this.makeSound();
        console.log(`${this.name} is barking.`);
    }
}
const dog = new Dog("Rex");
dog.bark();
// 13 - Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método Privado!");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
// 14 - Static Members
class StaticMembers {
    static staticMethod() {
        console.log("Esse é um método estático!");
    }
}
StaticMembers.prop = "Teste Static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic Class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item(true, 500);
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, "Unknown");
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - Parameter Properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade total: ${this.qty}`;
    }
    get showPrice() {
        return `Valor total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.9);
console.log(newShirt);
console.log(newShirt.name);
// 17 - Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
// Another example of class expression
const item = class {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    showPrice() {
        console.log(`The book ${this.name}, his price costs U$ ${this.price}!`);
    }
};
const instPrice = new item("O Morro dos Ventos Uivantes", 19.5);
instPrice.showPrice();
// 18 - Classe Abstrata
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Joshua");
newAbstractObject.showName();
// 19 - Relações entre classes
class Whale {
}
class Ramster {
}
const whale = new Whale();
console.log(whale);
