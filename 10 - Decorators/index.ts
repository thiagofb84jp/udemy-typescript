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