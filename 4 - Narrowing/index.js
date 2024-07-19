"use strict";
// 1 - Type Guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("4", "59");
sum(12, 45.8);
sum("5", 6);
// 2 - Checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation == "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação.");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([5, 8, 10], "multiply");
// 3 - Instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("John Smith");
const paul = new SuperUser("Paul Lennon");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}! Deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - Operador IN
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD (vira-lata");
    }
}
showDogDetails(turca);
showDogDetails(bob);
function showUserReview(review) {
    if (!review) {
        console.log("Você não avaliou o produto!");
        return;
    }
    console.log(`A nota que você deu foi: ${review}! Obrigado!`);
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
