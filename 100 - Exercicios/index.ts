/**
 * 1. Write a TypeScript program that declares a variable `name` and assigns it a string value.
 *    Also declare a variable `age` and assign it a number value. Finally print the values of name
 *    and age.
 * */
console.log("********************* Exercício no. 1 *********************");
const myName: string = "John Appleseed";
const myAge: number = 39;

console.log("My name is " + myName);
console.log("My age is " + myAge);
console.log("***********************************************************");

/**
 * 2. Write a TypeScript program that converts a variable of one type to another using type assertions
 *    and type conversion functions like parseInt().
 */
console.log("********************* Exercício no. 2 *********************");
let strNumber: string = "100";
let numberFromAssertion: number = parseInt(strNumber);
console.log("Number from assertion: ", numberFromAssertion);

let numberValue: number = 200;
let stringFromAssertion: string = numberValue.toString();
console.log("String from assertion: ", stringFromAssertion);
console.log("***********************************************************");

/**
 * 3. Write a TypeScript program that declares variables using let, const, and var. Then, describe how
 *    each declaration type behaves with respect to scoping and mutability.
 */
console.log("********************* Exercício no. 3 *********************");
// Using let
let var1: number = 5;

if (true) {
  var1 = 10;
}

console.log(var1);

// Using const
const var2: string = "Hello!";
// var2 = "World"; -> cannot reassign a const variable

// Using var
function exampleFunction() {
  var var3: boolean = true;

  if (var3) {
    // var var3: boolean = false;
    var3 = false;
  }

  console.log(var3);
}

exampleFunction();

console.log("***********************************************************");

/**
 * 4. Write a TypeScript program that declares variables of the following data types: number, string,
 *    boolean, and undefined. Assign values to them and perform basic operations.
 */
console.log("********************* Exercício no. 4 *********************");
let num1Var: number = 42;
let strVar: string = "Hello World, Typescript!";
let boolVar: boolean = true;
let undefVar: undefined = undefined;

const num2Var: number = 10;
const sum: number = num1Var + num2Var;
console.log("Sum = ", sum);

const concatString: string = strVar + " How are you?";
console.log("Concatated string = ", concatString);

const isTrue: boolean = boolVar && true;
console.log("Logical AND = ", isTrue);

if (undefVar === undefined) {
  console.log("Undefined variable is undefined.");
} else {
  console.log("Undefined variable is defined.");
}

console.log("***********************************************************");

/**
 * 5. Write a TypeScript program that declares a variable as a number and then tries to assign a
 *    string to it to see type checking in action.
 */
console.log("********************* Exercício no. 5 *********************");
let n: number = 42;
let strHello: string = "Hello, Typescript!";

console.log("n = ", n);
console.log("strHello = ", strHello);

console.log("***********************************************************");

/**
 * 6. Write a TypeScript program that declares a variable without specifying its type and shows how
 *    TypeScript infers the type based on the assigned value.
 */
console.log("********************* Exercício no. 6 *********************");
let temp = 100;

console.log("Type of temp: ", typeof temp);

let helloTs = "Hello, Typescript!";

console.log("My Variable: ", typeof helloTs);

console.log("***********************************************************");

/**
 * 7. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green',
 *    'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the
 *    enumeration values.
 */
console.log("********************* Exercício no. 7 *********************");
enum Color {
  Red,
  Green,
  White,
  Blue,
}

console.log("List of colors: ", Color);

let selectedColor: Color = Color.Green;

console.log("Selected Color: ", selectedColor);

enum Status {
  Active = 1,
  Inactive,
  Pending,
}

let currentStatus: Status = Status.Inactive;
console.log("List of status: ", Status);
console.log("Current Status: ", currentStatus);

console.log("***********************************************************");

/**
 * 8. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also
 *    declare a variable called 'isUndefined' and assign it an undefined value.
 */
console.log("********************* Exercício no. 8 *********************");
let isNull: null = null;

let isUndefined: undefined = undefined;

console.log("isNull: ", isNull);
console.log("isUndefined: ", isUndefined);

console.log("***********************************************************");

// https://www.w3resource.com/typescript-exercises/typescript-basic-exercise-8.php
// https://www.w3resource.com/typescript-exercises/typescript-basic-exercise-7.php
// https://wiki.python.org.br/EstruturaSequencial