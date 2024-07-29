// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData(52.551));
console.log(showData(true));
console.log(showData("Person of good name"));
console.log(showData(["John", "Paul", "Mary", "Michel"]));

// 2 - Constraint em generics
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObject = { name: "Porta", cor: "Vermelha" };
const otherObject = { name: "Carro", wheels: 4, engine: 1.0 };
const tooObjects = { price: 19.99, category: "Roupa" };

console.log(showProductName(myObject));
console.log(showProductName(otherObject));
// console.log(showProductName(tooObjects)); -> é necessário que tenha o atributo 'name' dado na função

// 3 - Interfaces em generics
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = {
  name: "Fusca",
  wheels: false,
  engine: false,
  color: "Vermelha",
};

console.log(myCar);
console.log(myPen);

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
  penDrive: "500GB",
};

console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));
console.log(getSomeKey(server, "penDrive"));

// 5 - Keyof type operator
type Character = { name: string; age: number; hasDriverLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: "John",
  age: 30,
  hasDriverLicense: false,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriverLicense"));

// 6 - Typeof type operator
const userName: string = "Abraham";

const anotherUserName: typeof userName = "Luke";

type x = typeof userName;

const fooUserName: x = "William";

// 7 - Indexed access type
type Truck = { km: number; kg: number; description: string };

type km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga.",
};

function showKm(km: km) {
  console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);

let newCar = {
  km: 5000,
  kg: 1000,
  description: "Carro para passeio.",
};

showKm(newCar.km);

// 8 - Conditional types
interface A {}

interface B extends A {}

interface Foo {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

type myTypeB = Foo extends { showNumber(): number } ? string : boolean;

// Another example
type IsString<T> = T extends string ? true : false;
type D = IsString<string>; // true
type E = IsString<number>; // false

// 9 - Template literal types
type typeA = "text";

type CustomType = `some ${typeA}`;

const testing: CustomType = "some text";

type type1 = "Testando";
type type2 = "Union";

type resType = `${type1} | ${type2}`;

// Another example
type HelloWorld = `Hello, ${string}`;

let greeting: HelloWorld;

greeting = "Hello, World!";
greeting = "Hello, Typescript!";
