// aprendendo sobre while e do while

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// console.log("------------------");

// i = 0;
// const nome = "Tutu";

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

function random(min, max) {
  const numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}

const min = 1;
const max = 50;
let aleatorio = random(min, max);

do {
  console.log(aleatorio);
  aleatorio = random(min, max);
} while (aleatorio !== 25);

console.log("O número 25 foi encontrado!");
