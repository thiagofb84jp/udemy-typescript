// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData(52.551));
console.log(showData(true));
console.log(showData("Person of good name"));
console.log(showData(["John", "Paul", "Mary", "Michel"]));
