// 1 - Var, Let e Const

// A variável 'var' muda o escopo global
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

// A variável 'let' não muda o escopo global
let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

// A variável não mudará o seu valor independente do que aconteça
let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "Thiago";
  console.log(name);
}

const name = "João";

logName();

console.log(name);

// 2 - Arrow Function
const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Olá, " + name + "!";
  } else {
    return "Olá!";
  }
};

console.log(greeting("Jonathan Duarte"));
console.log(greeting());

const testArrow = () => console.log("Woooohoooo!");

testArrow();

const user = {
  name: "Theo",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log("Username: " + this.name);
    }, 700);
  },
};

user.sayUserName();
user.sayUserNameArrow();

// 3 - Filter
const array = [1, 2, 3, 4, 5];

console.log(array);

const highNumbers = array.filter((number) => {
  if (number >= 3) {
    return number;
  }
});

console.log(highNumbers);

const users = [
  { name: "Jonathan", available: true },
  { name: "Joana", available: true },
  { name: "Jean", available: false },
  { name: "Jefferson", available: true },
  { name: "João", available: false },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);

// 4 - Map
const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 50.99, category: "Eletrodomésticos" },
  { name: "Fogão", price: 400.99, category: "Eletrodomésticos" },
  { name: "Calça Jeans", price: 65.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 - Template Literals
const UserName = "Marcos";
const age = 30;

const femaleName = "Maria";
const ageFemale = 40;

console.log(`O nome do usuário é ${UserName} e ele tem ${age} anos.`);
console.log(
  "O nome do usuário é " + femaleName + " e ele tem " + ageFemale + " anos."
);

// 6 - Destructuring
const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);

console.log(f3);

const productDetails = {
  name: "Mouse",
  price: 39.9,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}.`
);

// 7 - Spread Operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 10000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };

console.log(car);

// 8 - Classe
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa Gola V", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tênis Verde", 120);

console.log(tenis.name);

console.log(tenis.productWithDiscount(20));

// 9 - Herança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
  "Preto",
  "Azul",
  "Verde",
]);

console.log(hat.name);

console.log(hat.productWithDiscount(30));

hat.showColors();
