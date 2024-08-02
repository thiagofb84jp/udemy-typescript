// 1 - Importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - Import de variáveis
import { x } from "./variable";

console.log(x);

// 3 - Múltiplas Importações
import { a, b, myFunction } from "./multiples";

console.log(a);
console.log(b);
myFunction();

// 4 - Alias
import { someName as name } from "./changename";

console.log(name);

// 5 - Import all
import * as myNumbers from "./numbers";

console.log(myNumbers);

const nX = myNumbers.n1;

console.log(nX);

myNumbers.showNumber();

// 6 - Importando tipos
import { Human } from "./mytype";

class User implements Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const john = new User("João", 25);
console.log(john);
