"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - Exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Terminando execução do método.");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObject = new MyClass();
myObject.testing();
// Another example of decorator
function logClass(target) {
    console.log(`Class Decorator: ${target.name}`);
}
let AnotherClass = class AnotherClass {
    constructor() {
        console.log("MyClass instance created.");
    }
};
AnotherClass = __decorate([
    logClass
], AnotherClass);
const anotherClass = new AnotherClass();
// 2 - Multiplos Decorators
function foo() {
    return function (target, propertyKey, descriptor) {
        console.log("Executando Foo.");
    };
}
function boo() {
    return function (target, propertyKey, descriptor) {
        console.log("Executando Boo.");
    };
}
// A ordem de execução dependerá de quem estiver mais próximo da função
// Neste caso, o @boo será executado primeiro que o @foo
class MultipleDecorators {
    testing() {
        console.log("Terminando execução.");
    }
}
__decorate([
    foo(),
    boo()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 3 - Class Decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário...");
    }
}
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
User = __decorate([
    classDec
], User);
const user = new User("Luke", 15);
console.log(user);
// 4 - Method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Massey Ferguson");
console.log(trator.showName());
// 5 - Acessor Decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Nome do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
