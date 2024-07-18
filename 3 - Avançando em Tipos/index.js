"use strict";
// 1 - Arrays
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
// Inclui mais um elemento no array
numbers.push(10);
console.log(numbers);
console.log(numbers[2]);
console.log(numbers);
// Array de Strings
const nomes = [
    "Thiago",
    "Matheus",
    "João",
    "José",
    "Marcos",
    "Lúcio",
    "Marcos",
];
console.log(nomes);
nomes.push("Jonathan");
console.log(nomes);
console.log();
// 2 - Outra sintaxe: arrays
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[1]);
console.log();
// 3 - Any
// Pode ser usado tanto como um tipo qualquer quanto com array
const anyArray = [1, "teste", true, [], { nome: "Thiago" }];
console.log(anyArray);
anyArray.push([1, 2, 3]);
console.log(anyArray);
// 4 - Parâmetros Tipados
function soma(a, b) {
    console.log(a + b);
}
function hello(myName) {
    console.log("Hello and welcome, " + myName);
}
soma(5, 10);
hello("Mary");
// 5 - Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Noah Matheus"));
// 6 - Função anônima (é uma função definida sem nenhum nome ou identificador)
setTimeout(function () {
    const sallary = 1000;
}, 2000);
// Função anônima com argumentos
var result = function (c, d) {
    return c + d;
};
var e = console.log(result(12, 2));
// Função anônima sem argumentos
var displayMessage = function () {
    console.log("Hi, everuybody!");
};
displayMessage();
// 7 - Tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObjeto = {
    nome: "Thiago",
    surname: "Ferreira Barbosa",
};
// 8 - Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("John", "Appleseed"));
console.log(advancedGreeting("John"));
// 10 - Union Type
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(100);
showBalance("50");
const arrayAnyValue = [1, "teste", false];
console.log(arrayAnyValue);
// 11 - Avançando em Union Type
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showID(id) {
    console.log(`O ID é: ${id}`);
}
showID(1);
showID("220");
showID("12ES10D");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.x} Z: ${obj.x}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30,
};
let empObj1 = {
    empCode: 1,
    empName: "Steve",
};
let empObj2 = {
    empCode: 2,
    empName: "Bill",
    empDept: "IT",
};
const somePerson = { name: "Bill", age: 35 };
console.log(somePerson);
// 15 - Literal Types
let varTest;
varTest = "Testando";
console.log(varTest);
const helloWorld = "Hello World!";
console.log(helloWorld);
function letStauts(status) {
    console.log(`O status é: ${status}`);
}
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
letStauts("approved");
showDirection("left");
// 16 - Non null assertion operators (?)
const p = document.getElementById("some-p");
console.log(p.innerHTML);
// Outro exemplo de not null assertion
function greetUser(name) {
    const formattedName = name;
    console.log(`Hello, ${formattedName || "GeeksforGeeks"}!`);
}
greetUser("Jonathan");
greetUser(null);
// 17 - Bigint (é preciso alterar o arquivo de configuração JS {"target": "es2020"})
let n;
// n = 1;
n = 1000n;
const alsoHuge = BigInt(9007199254740991);
console.log(n);
console.log(typeof n);
console.log(n + 100n);
console.log(alsoHuge);
// 18 - Symbol (cria uma referência única para um valor)
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
const sym = Symbol();
let obj = {
    [sym]: "value",
};
console.log(obj[sym]);
