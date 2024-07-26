"use strict";
/**
 * 1. Write a TypeScript program that declares a variable `name` and assigns it a string value.
 *    Also declare a variable `age` and assign it a number value. Finally print the values of name
 *    and age.
 * */
console.log("********************* Exercício no. 1 *********************");
const myName = "John Appleseed";
const myAge = 39;
console.log("My name is " + myName);
console.log("My age is " + myAge);
console.log("***********************************************************");
/**
 * 2. Write a TypeScript program that converts a variable of one type to another using type assertions
 *    and type conversion functions like parseInt().
 */
console.log("********************* Exercício no. 2 *********************");
let strNumber = "100";
let numberFromAssertion = parseInt(strNumber);
console.log("Number from assertion: ", numberFromAssertion);
let numberValue = 200;
let stringFromAssertion = numberValue.toString();
console.log("String from assertion: ", stringFromAssertion);
console.log("***********************************************************");
/**
 * 3. Write a TypeScript program that declares variables using let, const, and var. Then, describe how
 *    each declaration type behaves with respect to scoping and mutability.
 */
console.log("********************* Exercício no. 3 *********************");
// Using let
let var1 = 5;
if (true) {
    var1 = 10;
}
console.log(var1);
// Using const
const var2 = "Hello!";
// var2 = "World"; -> cannot reassign a const variable
// Using var
function exampleFunction() {
    var var3 = true;
    if (var3) {
        // var var3: boolean = false;
        var3 = false;
    }
    console.log(var3);
}
exampleFunction();
console.log("***********************************************************");
