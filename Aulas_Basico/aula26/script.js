// aprendendo sobre atribuição através de desestruturação - array
// let a = "A";
// let b = "B";
// let c = "C";

// const letras = [b, c, a];
// console.log(letras); // [ 'A', 'B', 'C' ]
// [a, b, c] = letras; // atribuição através de desestruturação

// const numeros = [1, 2, 3, 4, 5];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero); // 1 2
// console.log(resto); // [ 3, 4, 5 ]

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numeros[1][0]);
const [lista1, lista2, lista3] = numeros;
console.log(lista2[1]);
