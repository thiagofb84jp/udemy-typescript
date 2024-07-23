"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`);
    if (product.isAvailable === false) {
        console.log("Todavia, o produto não está disponível!");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: false,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: true });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
    else {
        console.log(`A função do usuário é: Operador`);
    }
}
const user1 = { email: "jonathan.figueiredo@email.com", role: "Admin" };
const user2 = { email: "maria.andrade@email.com" };
showUserDetails(user1);
showUserDetails(user2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
// Another example of index signature
const nameAgeMap = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 50;
console.log(nameAgeMap);
