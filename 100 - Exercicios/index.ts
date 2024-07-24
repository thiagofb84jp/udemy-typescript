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
 * https://www.w3resource.com/typescript-exercises/typescript-basic-exercise-2.php
 */