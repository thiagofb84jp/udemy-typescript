// 1 - Arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// Inclui mais um elemento no array
numbers.push(10);
console.log(numbers);

console.log(numbers[2]);
console.log(numbers);

// Array de Strings
const nomes: string[] = [
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
const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[1]);

console.log();

// 3 - Any
// Pode ser usado tanto como um tipo qualquer quanto com array
const anyArray: any = [1, "teste", true, [], { nome: "Thiago" }];
console.log(anyArray);
anyArray.push([1, 2, 3]);
console.log(anyArray);

// 4 - Parâmetros Tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

function hello(myName: string) {
  console.log("Hello and welcome, " + myName);
}

soma(5, 10);
hello("Mary");

// 5 - Retorno de função
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Noah Matheus"));

// 6 - Função anônima (é uma função definida sem nenhum nome ou identificador)
setTimeout(function () {
  const sallary: number = 1000;
}, 2000);

// Função anônima com argumentos
var result = function (c: number, d: number) {
  return c + d;
};

var e = console.log(result(12, 2));

// Função anônima sem argumentos
var displayMessage = function () {
  console.log("Hi, everuybody!");
};

displayMessage();
