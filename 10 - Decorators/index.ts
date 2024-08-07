// 1 - Exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator!");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método.");
  }
}

const myObject = new MyClass();

myObject.testing();

// Another example of decorator
function logClass(target: Function) {
  console.log(`Class Decorator: ${target.name}`);
}

@logClass
class AnotherClass {
  constructor() {
    console.log("MyClass instance created.");
  }
}

const anotherClass = new AnotherClass();

// 2 - Multiplos Decorators
function foo() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando Foo.");
  };
}

function boo() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando Boo.");
  };
}

// A ordem de execução dependerá de quem estiver mais próximo da função
// Neste caso, o @boo será executado primeiro que o @foo
class MultipleDecorators {
  @foo()
  @boo()
  testing() {
    console.log("Terminando execução.");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

// 3 - Class Decorator
function classDec(constructor: Function) {
  console.log(constructor.name);

  if (constructor.name === "User") {
    console.log("Criando usuário...");
  }
}

@classDec
class User {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Luke", 15);

console.log(user);

// 4 - Method decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Massey Ferguson");
console.log(trator.showName());

// 5 - Acessor Decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }

  get showAge() {
    return `Nome do monstro: ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

// 6 - Property Decorator
// 00001
function formatNumber() {
  return function (target: object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");

console.log(newItem.id);

// 7 - Exemplo Real com Class Decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

const book = new Book(12);
const pen = new Pen(55);

console.log(book);
console.log(pen);

console.log(book.createdAt);

// 8 - Exemplo Real com Method Decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou por hoje!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const litPost = new Post();

litPost.post("Meu primeiro post sobre literatura!", litPost.alreadyPosted);

litPost.post("Meu segundo post sobre literatura!", litPost.alreadyPosted);

litPost.post("Meu terceiro post sobre literatura!", litPost.alreadyPosted);

// 9 - Exemplo Real com Property Decorator
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no mínimo ${limit} dígitos.`);

        return;
      } else {
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
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

const userAdmin = new Admin("josesantos");

console.log(userAdmin);