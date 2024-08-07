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
// 6 - Property Decorator
// 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem.id);
// 7 - Exemplo Real com Class Decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const book = new Book(12);
const pen = new Pen(55);
console.log(book);
console.log(pen);
console.log(book.createdAt);
// 8 - Exemplo Real com Method Decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou por hoje!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const litPost = new Post();
litPost.post("Meu primeiro post sobre literatura!", litPost.alreadyPosted);
litPost.post("Meu segundo post sobre literatura!", litPost.alreadyPosted);
litPost.post("Meu terceiro post sobre literatura!", litPost.alreadyPosted);
// 9 - Exemplo Real com Property Decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no mínimo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const userAdmin = new Admin("josesantos");
console.log(userAdmin);
