"use strict";
// 1 - Void
function withoutReturn() {
    console.log("Esta função não tem retorno algum!");
}
withoutReturn();
// 2 - Callback como argumentos
function greeting(name) {
    return `Olá, ${name}`;
}
function preGreeting(func, userName) {
    console.log("Preparando a função!");
    const greet = func(userName);
    console.log(greet);
}
preGreeting(greeting, "Matthew");
preGreeting(greeting, "John");
// Exemplo de callback
const mensagem = function () {
    console.log("Essa mensagem é exibida depois de 5 segundos...");
};
setTimeout(mensagem, 5000);
// 3 - Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement(["Melissa", "Raymond", "Charles"]));
function mergedObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergedObjects({ name: "Thiago" }, { age: 39, job: "Programmer" });
console.log(newObject);
// Exemplo de spread syntax
const texto = "SPREAD";
const arrayDoTexto = [...texto];
console.log(arrayDoTexto);
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// 5 - Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["Jonathan", "Marcus"]));
// 6 - Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Thiago"));
console.log(modernGreeting("Jonathan", "Dr."));
// 7 - Parâmetro Default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 - Unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro por aqui!");
// Outro exemplo da aplicação do tipo 'never';
function fail(message) {
    throw new Error(message);
}
function verificandoTipo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Esse método não aceita esse tipo de type!");
}
console.log(verificandoTipo("Teste String"));
console.log(verificandoTipo(10));
// let ativo = true;
// verificandoTipo(ativo);
