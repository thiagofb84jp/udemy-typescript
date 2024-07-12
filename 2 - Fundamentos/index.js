"use strict";
// 1 - Numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 3.1415161892;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
console.log("");
// 2 - String
const firstName = "Thiago";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
let fullName;
const lastName = "Ferreira Barbosa";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
console.log("");
// 3 - Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - Inference e Annotation
/**
 * Ao trabalhar com projetos em Typescript, será necessário estar familiarizado com qual caminho
 *  de tipagem o seu código irá seguir;
 * Com isso, pode-se perceber que na interência o Typescript entende qual variável está sendo
 *  atribuída
 */
const annotation = "Teste";
let inference = "Teste";
// annotation = 1;
// inference = 2;
