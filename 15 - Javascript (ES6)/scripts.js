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