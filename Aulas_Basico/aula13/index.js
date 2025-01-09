// Revisando sobre o objeto Math -- anotar o aprendizado

let numero1 = 9.5489;
let numero2 = Math.floor(numero1);
let numero3 = Math.ceil(numero1);
let numero4 = Math.round(numero1); // arredonda para o mais próximo

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, -1, -1000000));
console.log(Math.min(1, -10, 6, -5, -121224, 0, 9, 50, 5));

console.log(Math.random());

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.PI);
console.log(2 ** 5);
console.log(100 / 0);
