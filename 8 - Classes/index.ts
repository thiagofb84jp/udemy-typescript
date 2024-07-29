// 1 - Campos em classe
class User {
  name!: string;
  age!: number;
  job!: string;
}

const user = new User();

console.log(user);

user.name = "Francisco";

console.log(user);
