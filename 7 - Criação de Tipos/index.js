"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData(52.551));
console.log(showData(true));
console.log(showData("Person of good name"));
console.log(showData(["John", "Paul", "Mary", "Michel"]));
// 2 - Constraint em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObject = { name: "Porta", cor: "Vermelha" };
const otherObject = { name: "Carro", wheels: 4, engine: 1.0 };
const tooObjects = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObject));
console.log(showProductName(otherObject));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = {
    name: "Fusca",
    wheels: false,
    engine: false,
    color: "Vermelha",
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
    penDrive: "500GB",
};
console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));
console.log(getSomeKey(server, "penDrive"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "John",
    age: 30,
    hasDriverLicense: false,
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriverLicense"));
// 6 - Typeof type operator
const userName = "Abraham";
const anotherUserName = "Luke";
const fooUserName = "William";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga.",
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
let newCar = {
    km: 5000,
    kg: 1000,
    description: "Carro para passeio.",
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
let greeting;
greeting = "Hello, World!";
greeting = "Hello, Typescript!";
