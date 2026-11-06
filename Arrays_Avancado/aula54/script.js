// Utilizando o filter, map e reduce para manipular um único array

// Retorne o somatório da divisão de todos os números pares por 2
const numeros = [1, 5, 90, 83, 22, 12, 33, 45, 67, 88, 100];

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor / 2)
  .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);
