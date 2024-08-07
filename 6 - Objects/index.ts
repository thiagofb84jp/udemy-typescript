// 1 - Tipo de objeto para função com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$ ${product.price}`
  );

  if (product.isAvailable === false) {
    console.log("Todavia, o produto não está disponível!");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: false,
};

showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: true });

// 2 - Propriedade opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  } else {
    console.log(`A função do usuário é: Operador`);
  }
}

const user1: User = { email: "jonathan.figueiredo@email.com", role: "Admin" };
const user2: User = { email: "maria.andrade@email.com" };

showUserDetails(user1);
showUserDetails(user2);

// 3 - Read only
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

// 4 - Index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// Another example of index signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 50;

console.log(nameAgeMap);

// 5 - Extending interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const mattew: Human = {
  name: "Mattew",
  age: 30,
};

console.log(mattew);

const superman: SuperHuman = {
  name: "Clark Kent",
  age: 50,
  superpowers: ["Red Vision", "Fly"],
};

console.log(superman.superpowers);

// 6 - Intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

console.log(arnold.caliber);

// 7 - Readonly array
let fruits: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana", "Limão"];

console.log(fruits);

fruits.forEach((item) => {
  console.log("Fruta: " + item);
});

fruits = fruits.map((item) => {
  return `Fruta: ${item}`;
});

console.log(fruits);

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Jack", 30];

console.log(anotherUser[0]);

anotherUser[0] = "João";

console.log(anotherUser[0]);

// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);