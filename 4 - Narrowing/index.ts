// 1 - Type Guard
function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar a soma!");
  }
}

sum("4", "59");
sum(12, 45.8);
sum("5", 6);
