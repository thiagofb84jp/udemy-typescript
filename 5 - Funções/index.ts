// 1 - Void
function withoutReturn(): void {
  console.log("Esta função não tem retorno algum!");
}

withoutReturn();

// 2 - Callback como argumentos
function greeting(name: string): string {
  return `Olá, ${name}`;
}

function preGreeting(func: (name: string) => string, userName: string) {
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
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement(["Melissa", "Raymond", "Charles"]));

function mergedObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergedObjects(
  { name: "Thiago" },
  { age: 39, job: "Programmer" }
);
console.log(newObject);

// Exemplo de spread syntax
const texto: string = "SPREAD";

const arrayDoTexto: string[] = [...texto];

console.log(arrayDoTexto);

// 4 - Constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));

// 5 - Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["Jonathan", "Marcus"]));

// 6 - Parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }

  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Thiago"));
console.log(modernGreeting("Jonathan", "Dr."));

// 7 - Parâmetro Default
function somaDefault(n: number, m = 10): number {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(15, 12));

// 8 - Unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um número");
  }
}

doSomething([1, 2, 3]);
doSomething(5);

// 9 - Never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// showErrorMessage("Algum erro por aqui!");

// Outro exemplo da aplicação do tipo 'never';
function fail(message: string): never {
  throw new Error(message);
}

function verificandoTipo(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  return fail("Esse método não aceita esse tipo de type!");
}

console.log(verificandoTipo("Teste String"));
console.log(verificandoTipo(10));

// let ativo = true;
// verificandoTipo(ativo);
